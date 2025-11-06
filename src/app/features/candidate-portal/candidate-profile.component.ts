import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, User, UpdateUserRequest } from '../../core/services/user.service';
import { CandidateService } from '../../core/services/candidate.service';
import { Candidate, UpdateCandidateRequest } from '../../core/models/candidate.model';
import { AuthService } from '../../core/auth/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, QuillModule],
  template: `
    <div class="candidate-profile-page">
      <div class="page-header">
        <h1>My Profile</h1>
        <p>Manage your professional information</p>
      </div>
      <div class="profile-container">
        <!-- Profile Completeness -->
        <div class="completeness-card">
          <div class="completeness-header">
            <h3>Profile Completeness</h3>
            <span class="completeness-score">{{ profileCompleteness }}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="profileCompleteness"></div>
          </div>
          <p class="completeness-tip">{{ getCompletnessTip() }}</p>
        </div>

        <!-- Profile Header -->
        <div class="profile-header-section">
          <div class="header-main">
            <div class="profile-photo-container">
              <div class="profile-photo" (click)="photoInput.click()">
                <img *ngIf="profile.photo" [src]="profile.photo" alt="Profile photo">
                <div *ngIf="!profile.photo" class="photo-placeholder">
                  <span class="photo-initials">{{ getInitials() }}</span>
                </div>
                <div class="photo-overlay">
                  <span class="camera-icon">📷</span>
                </div>
              </div>
              <input #photoInput type="file" accept="image/*" (change)="onPhotoSelected($event)" hidden>
            </div>
            <div class="profile-info">
              <h1>{{ profile.name || 'Your Name' }}</h1>
              <div class="headline-container">
                <input type="text" [(ngModel)]="profile.headline" (ngModelChange)="trackChanges()" placeholder="Professional headline (e.g., Senior Software Engineer)" class="headline-input">
              </div>
              <div class="profile-meta">
                <span class="location">📍 {{ profile.location || 'Add location' }}</span>
                <span class="separator">•</span>
                <span class="email">✉️ {{ profile.email }}</span>
              </div>
            </div>
          </div>
          <div class="header-actions">
            <div class="visibility-toggle">
              <label class="toggle-label">
                <input type="checkbox" [(ngModel)]="profile.isPublic" (ngModelChange)="trackChanges()">
                <span class="toggle-slider"></span>
                <span class="toggle-text">Public Profile</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="profile-section">
          <h2>Professional Links</h2>
          <div class="social-links">
            <div class="social-input">
              <span class="social-icon">🔗</span>
              <input type="url" [(ngModel)]="profile.linkedinUrl" (ngModelChange)="trackChanges()" placeholder="https://linkedin.com/in/yourprofile" class="form-input">
            </div>
            <div class="social-input">
              <span class="social-icon">💻</span>
              <input type="url" [(ngModel)]="profile.githubUrl" (ngModelChange)="trackChanges()" placeholder="https://github.com/yourusername" class="form-input">
            </div>
            <div class="social-input">
              <span class="social-icon">🌐</span>
              <input type="url" [(ngModel)]="profile.portfolioUrl" (ngModelChange)="trackChanges()" placeholder="https://yourwebsite.com" class="form-input">
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h2>Resume</h2>
          <div class="resume-upload-container">
            <div *ngIf="!profile.resume" class="upload-area" (click)="fileInput.click()" (dragover)="onDragOver($event)" (drop)="onDrop($event)">
              <input #fileInput type="file" accept=".pdf,.doc,.docx" (change)="onFileSelected($event)" hidden>
              <div class="upload-icon">📄</div>
              <p class="upload-text">Drag and drop your resume here or click to browse</p>
              <p class="upload-hint">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            <div *ngIf="profile.resume" class="resume-preview">
              <div class="resume-info">
                <span class="file-icon">📄</span>
                <div class="file-details">
                  <strong>{{ profile.resume.name }}</strong>
                  <span class="file-meta">{{ profile.resume.size }} • Uploaded {{ profile.resume.uploadedDate }}</span>
                </div>
              </div>
              <div class="resume-actions">
                <button class="btn-icon" title="Download">⬇️</button>
                <button class="btn-icon" title="Replace" (click)="fileInput.click()">🔄</button>
                <button class="btn-icon" title="Delete" (click)="deleteResume()">🗑️</button>
              </div>
              <input #fileInput type="file" accept=".pdf,.doc,.docx" (change)="onFileSelected($event)" hidden>
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h2>Personal Information</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Full Name <span class="required">*</span></label>
              <input type="text" [(ngModel)]="profile.name" (ngModelChange)="trackChanges()" class="form-input" [disabled]="loading" required>
            </div>
            <div class="form-group">
              <label>Email <span class="required">*</span></label>
              <input type="email" [(ngModel)]="profile.email" (ngModelChange)="trackChanges()" class="form-input" required>
              <small class="field-hint">Changing email will require verification</small>
            </div>
            <div class="form-group">
              <label>Phone <span class="required">*</span></label>
              <input type="tel" [(ngModel)]="profile.phone" (ngModelChange)="trackChanges()" class="form-input" placeholder="+1 (555) 123-4567" required>
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" [(ngModel)]="profile.location" (ngModelChange)="trackChanges()" class="form-input" placeholder="City, State/Country">
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h2>Professional Summary</h2>
          <quill-editor 
            [(ngModel)]="profile.summary" 
            (ngModelChange)="trackChanges()"
            [modules]="quillModules"
            placeholder="Write a compelling professional summary highlighting your experience, skills, and career goals...">
          </quill-editor>
        </div>

        <div class="profile-section">
          <h2>Skills & Expertise</h2>
          <div class="skills-container">
            <div *ngFor="let skill of profile.skillsWithLevels; let i = index" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <select [(ngModel)]="skill.level" (ngModelChange)="trackChanges()" class="skill-level">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <button class="remove-skill-btn" (click)="removeSkill(i)">×</button>
            </div>
            <div class="add-skill-container">
              <input type="text" 
                     [(ngModel)]="newSkillName" 
                     placeholder="Type skill and press Enter..." 
                     class="skill-input" 
                     (keyup.enter)="addSkill()">
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h2>Certifications</h2>
          <div *ngFor="let cert of profile.certifications; let i = index" class="certification-item">
            <div class="cert-main">
              <input type="text" [(ngModel)]="cert.name" placeholder="Certification name" class="cert-input">
              <input type="text" [(ngModel)]="cert.issuer" placeholder="Issuing organization" class="cert-input">
            </div>
            <div class="cert-dates">
              <input type="date" [(ngModel)]="cert.issueDate" class="cert-date">
              <span class="date-separator">to</span>
              <input type="date" [(ngModel)]="cert.expiryDate" class="cert-date" placeholder="Expiry (optional)">
              <button class="remove-cert-btn" (click)="removeCertification(i)">×</button>
            </div>
          </div>
          <button class="btn-add" (click)="addCertification()">+ Add Certification</button>
        </div>

        <div class="profile-section">
          <h2>Experience</h2>
          <div *ngFor="let exp of profile.experience; let i = index" class="experience-item">
            <div class="form-grid">
              <div class="form-group">
                <label>Job Title</label>
                <input type="text" [(ngModel)]="exp.title" (ngModelChange)="trackChanges()" class="form-input" placeholder="Software Engineer">
              </div>
              <div class="form-group">
                <label>Company</label>
                <input type="text" [(ngModel)]="exp.company" (ngModelChange)="trackChanges()" class="form-input" placeholder="Tech Corp">
              </div>
              <div class="form-group">
                <label>Start Date</label>
                <input type="date" [(ngModel)]="exp.startDate" (ngModelChange)="trackChanges()" class="form-input">
              </div>
              <div class="form-group">
                <label>End Date</label>
                <input type="date" [(ngModel)]="exp.endDate" (ngModelChange)="trackChanges()" class="form-input" [disabled]="exp.isCurrent" placeholder="Leave blank if current">
              </div>
            </div>
            <div class="form-group full-width">
              <label class="checkbox-label">
                <input type="checkbox" [(ngModel)]="exp.isCurrent" (ngModelChange)="onCurrentJobChange(exp)">
                <span>I currently work here</span>
              </label>
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea [(ngModel)]="exp.description" (ngModelChange)="trackChanges()" class="form-textarea" rows="3" placeholder="Describe your responsibilities..."></textarea>
            </div>
            <button class="btn-remove" (click)="removeExperience(i)">Remove</button>
          </div>
          <button class="btn-add" (click)="addExperience()">+ Add Experience</button>
        </div>

        <div class="profile-section">
          <h2>Education</h2>
          <div *ngFor="let edu of profile.education; let i = index" class="education-item">
            <div class="form-grid">
              <div class="form-group">
                <label>Degree</label>
                <input type="text" [(ngModel)]="edu.degree" (ngModelChange)="trackChanges()" class="form-input" placeholder="Bachelor of Science">
              </div>
              <div class="form-group">
                <label>Institution</label>
                <input type="text" [(ngModel)]="edu.institution" (ngModelChange)="trackChanges()" class="form-input" placeholder="University Name">
              </div>
              <div class="form-group">
                <label>Field of Study</label>
                <input type="text" [(ngModel)]="edu.fieldOfStudy" (ngModelChange)="trackChanges()" class="form-input" placeholder="Computer Science">
              </div>
              <div class="form-group">
                <label>Graduation Year</label>
                <input type="date" [(ngModel)]="edu.endDate" (ngModelChange)="trackChanges()" class="form-input">
              </div>
            </div>
            <button class="btn-remove" (click)="removeEducation(i)">Remove</button>
          </div>
          <button class="btn-add" (click)="addEducation()">+ Add Education</button>
        </div>

        <div *ngIf="successMessage" class="success-message">{{ successMessage }}</div>
        <div *ngIf="error" class="error-message">{{ error }}</div>
        
        <div class="profile-actions">
          <button class="btn-save" (click)="saveProfile()" [disabled]="loading || !hasChanges">
            <span *ngIf="!loading">💾 Save Changes</span>
            <span *ngIf="loading">⏳ Saving...</span>
          </button>
          <button class="btn-cancel" (click)="cancelChanges()" [disabled]="loading">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-profile-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .profile-container { max-width: 100%; }
    .profile-section { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 1.5rem; }
    .profile-section h2 { font-size: 1.25rem; font-weight: 600; color: #0f172a; margin-bottom: 1.5rem; }
    .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-input, .form-textarea { width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .form-textarea { resize: vertical; }
    ::ng-deep .profile-section quill-editor { display: block; width: 100%; }
    ::ng-deep .profile-section .ql-toolbar { background: white; border: 1px solid #e2e8f0; border-radius: 8px 8px 0 0; padding: 6px 10px; line-height: 1; }
    ::ng-deep .profile-section .ql-container { border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; font-size: 1rem; font-family: inherit; width: 100%; }
    ::ng-deep .profile-section .ql-editor { min-height: 350px; padding: 20px; line-height: 1.8; }
    ::ng-deep .profile-section .ql-editor.ql-blank::before { color: #94a3b8; font-style: normal; }
    ::ng-deep .profile-section .ql-toolbar button { width: 24px; height: 24px; padding: 3px; margin: 0 2px; }
    ::ng-deep .profile-section .ql-toolbar .ql-picker-label { padding: 3px 6px; height: 24px; font-size: 0.875rem; }
    ::ng-deep .profile-section .ql-toolbar .ql-formats { margin-right: 10px; }
    ::ng-deep .profile-section .ql-toolbar .ql-stroke { stroke: #475569; }
    ::ng-deep .profile-section .ql-toolbar .ql-fill { fill: #475569; }
    ::ng-deep .profile-section .ql-toolbar button:hover .ql-stroke { stroke: #0066ff; }
    ::ng-deep .profile-section .ql-toolbar button:hover .ql-fill { fill: #0066ff; }
    ::ng-deep .profile-section .ql-toolbar button.ql-active .ql-stroke { stroke: #0066ff; }
    ::ng-deep .profile-section .ql-toolbar button.ql-active .ql-fill { fill: #0066ff; }
    .required { color: #ef4444; font-weight: 600; }
    .skills-container { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .skill-tag { background: #e0e7ff; color: #3730a3; padding: 6px 12px; border-radius: 20px; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; }
    .remove-btn { background: none; border: none; color: #3730a3; font-size: 1.25rem; cursor: pointer; padding: 0; line-height: 1; }
    .skill-input { border: 1px dashed #cbd5e1; padding: 6px 12px; border-radius: 20px; font-size: 0.875rem; }
    .experience-item, .education-item { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #f1f5f9; }
    .experience-item:last-of-type, .education-item:last-of-type { border-bottom: none; margin-bottom: 1rem; }
    .experience-item h3, .education-item h3 { font-size: 1rem; font-weight: 600; color: #0f172a; margin-bottom: 0.25rem; }
    .exp-company, .edu-school { color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem; }
    .experience-item p { color: #475569; font-size: 0.875rem; line-height: 1.5; }
    .btn-add { background: white; color: #0066ff; border: 1px dashed #0066ff; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .profile-actions { display: flex; gap: 1rem; }
    .btn-save { background: #0066ff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-save:hover:not(:disabled) { background: #0052cc; }
    .btn-save:disabled { background: #cbd5e1; cursor: not-allowed; }
    .btn-cancel { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-cancel:hover:not(:disabled) { background: #f8fafc; }
    .success-message { background: #dcfce7; color: #166534; padding: 12px 16px; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #bbf7d0; }
    .error-message { background: #fee2e2; color: #991b1b; padding: 12px 16px; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #fecaca; }
    .field-hint { display: block; color: #64748b; font-size: 0.75rem; margin-top: 0.25rem; }
    .resume-upload-container { margin-top: 1rem; }
    .upload-area { border: 2px dashed #cbd5e1; border-radius: 12px; padding: 3rem 2rem; text-align: center; cursor: pointer; transition: all 0.2s; }
    .upload-area:hover { border-color: #0066ff; background: #f8fafc; }
    .upload-icon { font-size: 3rem; margin-bottom: 1rem; }
    .upload-text { font-size: 1rem; font-weight: 500; color: #0f172a; margin-bottom: 0.5rem; }
    .upload-hint { font-size: 0.875rem; color: #64748b; }
    .resume-preview { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; }
    .resume-info { display: flex; align-items: center; gap: 1rem; flex: 1; }
    .file-icon { font-size: 2rem; }
    .file-details strong { display: block; font-size: 0.875rem; color: #0f172a; margin-bottom: 0.25rem; }
    .file-meta { font-size: 0.75rem; color: #64748b; }
    .resume-actions { display: flex; gap: 0.5rem; }
    .btn-icon { background: white; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 1rem; cursor: pointer; transition: all 0.2s; }
    .btn-icon:hover { background: #f1f5f9; }
    .completeness-card { background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); color: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .completeness-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .completeness-header h3 { margin: 0; font-size: 1.125rem; }
    .completeness-score { font-size: 1.5rem; font-weight: 700; }
    .progress-bar { background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; margin-bottom: 0.5rem; }
    .progress-fill { background: white; height: 100%; border-radius: 4px; transition: width 0.3s; }
    .completeness-tip { margin: 0; font-size: 0.875rem; opacity: 0.9; }
    .profile-header-section { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 1.5rem; }
    .header-main { display: flex; gap: 1.5rem; align-items: start; margin-bottom: 1rem; }
    .profile-photo-container { flex-shrink: 0; }
    .profile-photo { width: 100px; height: 100px; border-radius: 50%; overflow: hidden; cursor: pointer; position: relative; border: 3px solid #e2e8f0; transition: border-color 0.2s; }
    .profile-photo:hover { border-color: #0066ff; }
    .profile-photo img { width: 100%; height: 100%; object-fit: cover; }
    .photo-placeholder { width: 100%; height: 100%; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); display: flex; align-items: center; justify-content: center; }
    .photo-initials { color: white; font-size: 1.5rem; font-weight: 700; }
    .photo-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s; border-radius: 50%; }
    .profile-photo:hover .photo-overlay { opacity: 1; }
    .camera-icon { font-size: 1.25rem; color: white; }
    .profile-info { flex: 1; min-width: 0; }
    .profile-info h1 { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0; line-height: 1.2; }
    .headline-container { margin-bottom: 0.75rem; }
    .headline-input { width: 100%; padding: 8px 0; border: none; border-bottom: 1px solid #e2e8f0; font-size: 1rem; color: #64748b; background: transparent; }
    .headline-input:focus { outline: none; border-bottom-color: #0066ff; }
    .profile-meta { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
    .location, .email { color: #64748b; font-size: 0.875rem; }
    .separator { color: #cbd5e1; }
    .header-actions { display: flex; justify-content: flex-end; }
    .toggle-label { display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; color: #64748b; cursor: pointer; }
    .toggle-text { font-weight: 500; }
    .toggle-slider { width: 40px; height: 20px; background: #e2e8f0; border-radius: 10px; position: relative; transition: background 0.2s; }
    .toggle-slider::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: white; border-radius: 50%; transition: transform 0.2s; }
    input[type="checkbox"]:checked + .toggle-slider { background: #0066ff; }
    input[type="checkbox"]:checked + .toggle-slider::after { transform: translateX(20px); }
    input[type="checkbox"] { display: none; }
    .social-links { display: flex; flex-direction: column; gap: 1rem; }
    .social-input { display: flex; align-items: center; gap: 1rem; }
    .social-icon { font-size: 1.25rem; width: 24px; }
    .skill-item { display: flex; align-items: center; gap: 1rem; background: #f8fafc; padding: 0.75rem; border-radius: 8px; margin-bottom: 0.5rem; }
    .skill-info { flex: 1; display: flex; align-items: center; gap: 1rem; }
    .skill-name { font-weight: 500; }
    .skill-level { padding: 4px 8px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.875rem; }
    .remove-skill-btn { background: #ef4444; color: white; border: none; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; }
    .add-skill-container { margin-top: 1rem; }
    .skill-input { width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .skill-input:focus { outline: none; border-color: #0066ff; }
    .certification-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
    .cert-main { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 0.5rem; }
    .cert-input { padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 6px; }
    .cert-dates { display: flex; align-items: center; gap: 0.5rem; }
    .cert-date { padding: 6px 8px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.875rem; }
    .date-separator { color: #64748b; font-size: 0.875rem; }
    .remove-cert-btn { background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; }
    .btn-remove { background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-top: 1rem; }
    .full-width { grid-column: 1 / -1; }
    .checkbox-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; }
    .checkbox-label input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; accent-color: #0066ff; }
    .checkbox-label span { font-size: 0.875rem; font-weight: 500; color: #0066ff; }
  `]
})
export class CandidateProfileComponent implements OnInit {
  profile: any = {
    name: '',
    email: '',
    phone: '',
    location: '',
    headline: '',
    summary: '',
    photo: null,
    isPublic: true,
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    resume: null,
    skills: [],
    skillsWithLevels: [],
    experience: [],
    education: [],
    certifications: []
  };
  originalProfile: any = {};
  profileCompleteness = 0;
  loading = false;
  error = '';
  successMessage = '';
  user: User | null = null;
  candidate: Candidate | null = null;
  newSkillName = '';
  hasChanges = false;

  constructor(
    private userService: UserService,
    private candidateService: CandidateService,
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading = true;
    this.error = '';
    this.successMessage = '';
    
    const currentUser = this.authService.getCurrentUserValue();
    if (!currentUser?.id) {
      this.error = 'User not authenticated. Please log in again.';
      this.loading = false;
      return;
    }

    this.userService.getUserProfile(currentUser.id).subscribe({
      next: (user: User) => {
        this.user = user;
        
        // MUST load candidate for CANDIDATE role
        if (user.role !== 'CANDIDATE') {
          this.error = 'This page is only for candidates.';
          this.loading = false;
          return;
        }
        
        // Load candidate-specific data
        this.candidateService.getCandidateProfile(currentUser.id).subscribe({
          next: (candidate: Candidate) => {
            this.candidate = candidate;
            this.populateProfile(user, candidate);
          },
          error: (err) => {
            // Candidate doesn't exist yet - create empty profile for first-time users
            this.candidate = null;
            this.populateProfile(user, null);
          }
        });
      },
      error: (err) => {
        this.error = err?.error?.message || 'Failed to load user profile. Please try again.';
        this.loading = false;
      }
    });
  }

  private populateProfile(user: User, candidate: Candidate | null) {
    this.profile = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: candidate?.phone || '',
      location: candidate?.location || '',
      headline: candidate?.headline || '',
      summary: candidate?.summary || '',
      photo: candidate?.profilePhotoUrl || null,
      isPublic: candidate?.isPublic ?? true,
      linkedinUrl: candidate?.linkedinUrl || '',
      githubUrl: candidate?.githubUrl || '',
      portfolioUrl: candidate?.portfolioUrl || '',
      resume: candidate?.resumeUrl ? { name: 'Resume', url: candidate.resumeUrl } : null,
      skills: candidate?.skills || [],
      skillsWithLevels: (candidate?.skills || []).map((skill: string) => ({ name: skill, level: 'Intermediate' })),
      certifications: candidate?.certifications || [],
      education: candidate?.education || [],
      experience: candidate?.experience || []
    };
    this.originalProfile = JSON.parse(JSON.stringify(this.profile));
    this.calculateCompleteness();
    this.loading = false;
    this.hasChanges = false;
  }

  saveProfile() {
    if (!this.user) {
      this.error = 'Profile data not loaded. Please refresh the page.';
      return;
    }

    if (!this.validateProfile()) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.successMessage = '';
    
    const nameParts = this.profile.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const skills = this.profile.skillsWithLevels.map((s: any) => s.name);

    // Update user basic info (name and email)
    const userUpdateRequest: UpdateUserRequest = {
      firstName,
      lastName,
      email: this.profile.email?.trim()
    };

    // Update candidate profile
    const candidateUpdateRequest: UpdateCandidateRequest = {
      phone: this.profile.phone?.trim() || undefined,
      location: this.profile.location?.trim() || undefined,
      headline: this.profile.headline?.trim() || undefined,
      summary: this.profile.summary?.trim() || undefined,
      linkedinUrl: this.profile.linkedinUrl?.trim() || undefined,
      githubUrl: this.profile.githubUrl?.trim() || undefined,
      portfolioUrl: this.profile.portfolioUrl?.trim() || undefined,
      skills: skills.length > 0 ? skills : undefined,
      isPublic: this.profile.isPublic
    };

    // Update user first, then candidate
    this.userService.updateUser(this.user.id, userUpdateRequest).subscribe({
      next: (updatedUser: User) => {
        this.user = updatedUser;
        
        // Update or fetch candidate profile
        if (this.candidate?.id) {
          // Candidate exists - update it
          this.candidateService.updateCandidateProfile(this.candidate.id, candidateUpdateRequest).subscribe({
            next: (updatedCandidate: Candidate) => {
              this.candidate = updatedCandidate;
              this.saveCandidateDetails();
            },
            error: (err) => {
              this.error = err?.error?.message || 'Failed to update candidate profile. Please try again.';
              this.loading = false;
            }
          });
        } else {
          // Candidate doesn't exist yet - fetch it (should have been created by backend)
          this.candidateService.getCandidateProfile(this.user.id).subscribe({
            next: (candidate: Candidate) => {
              this.candidate = candidate;
              // Now update it
              this.candidateService.updateCandidateProfile(candidate.id, candidateUpdateRequest).subscribe({
                next: (updatedCandidate: Candidate) => {
                  this.candidate = updatedCandidate;
                  this.saveCandidateDetails();
                },
                error: (err) => {
                  this.error = err?.error?.message || 'Failed to update candidate profile.';
                  this.loading = false;
                }
              });
            },
            error: (err) => {
              this.error = 'Candidate profile not found. Please contact support.';
              this.loading = false;
            }
          });
        }
      },
      error: (err) => {
        this.error = err?.error?.message || 'Failed to update user profile. Please try again.';
        this.loading = false;
      }
    });
  }

  validateProfile(): boolean {
    if (!this.profile.name?.trim()) {
      this.error = 'Name is required';
      return false;
    }
    if (!this.profile.email?.trim()) {
      this.error = 'Email is required';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.profile.email)) {
      this.error = 'Please enter a valid email address';
      return false;
    }
    if (!this.profile.phone?.trim()) {
      this.error = 'Phone number is required';
      return false;
    }
    if (!/^[\d\s\-\+\(\)]+$/.test(this.profile.phone)) {
      this.error = 'Please enter a valid phone number';
      return false;
    }
    return true;
  }

  cancelChanges() {
    if (this.hasChanges && !confirm('You have unsaved changes. Are you sure you want to cancel?')) {
      return;
    }
    this.profile = JSON.parse(JSON.stringify(this.originalProfile));
    this.error = '';
    this.successMessage = '';
    this.hasChanges = false;
  }

  trackChanges() {
    // Force change detection
    setTimeout(() => {
      this.hasChanges = JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);
    }, 0);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    this.error = '';
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(file.type)) {
      this.error = 'Please upload a PDF, DOC, or DOCX file.';
      return;
    }
    
    if (file.size > maxSize) {
      this.error = 'File size must be less than 5MB.';
      return;
    }
    
    this.profile.resume = {
      name: file.name,
      size: this.formatFileSize(file.size),
      uploadedDate: 'Today',
      file: file
    };
    this.trackChanges();
    this.calculateCompleteness();
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  deleteResume() {
    if (confirm('Are you sure you want to delete your resume?')) {
      this.profile.resume = null;
      this.trackChanges();
      this.calculateCompleteness();
    }
  }

  onPhotoSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.error = '';
      const maxSize = 2 * 1024 * 1024;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      
      if (!allowedTypes.includes(file.type)) {
        this.error = 'Please upload a JPG or PNG image.';
        return;
      }
      
      if (file.size > maxSize) {
        this.error = 'Image size must be less than 2MB.';
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profile.photo = e.target?.result;
        this.trackChanges();
        this.calculateCompleteness();
      };
      reader.readAsDataURL(file);
    }
  }

  getInitials(): string {
    return this.profile.name.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U';
  }

  addSkill() {
    const skillName = this.newSkillName.trim();
    if (skillName) {
      const exists = this.profile.skillsWithLevels.some((s: any) => 
        s.name.toLowerCase() === skillName.toLowerCase()
      );
      
      if (exists) {
        this.error = 'This skill already exists';
        setTimeout(() => this.error = '', 3000);
        return;
      }
      
      this.profile.skillsWithLevels.push({ name: skillName, level: 'Intermediate' });
      this.newSkillName = '';
      this.trackChanges();
      this.calculateCompleteness();
    }
  }

  removeSkill(index: number) {
    this.profile.skillsWithLevels.splice(index, 1);
    this.trackChanges();
    this.calculateCompleteness();
  }

  addCertification() {
    this.profile.certifications.push({ name: '', issuer: '', issueDate: '', expiryDate: '' });
    this.trackChanges();
  }

  removeCertification(index: number) {
    this.profile.certifications.splice(index, 1);
    this.trackChanges();
    this.calculateCompleteness();
  }

  addExperience() {
    this.profile.experience.push({ title: '', company: '', startDate: '', endDate: '', isCurrent: false, description: '' });
    this.trackChanges();
  }

  removeExperience(index: number) {
    this.profile.experience.splice(index, 1);
    this.trackChanges();
  }

  addEducation() {
    this.profile.education.push({ degree: '', institution: '', fieldOfStudy: '', endDate: '' });
    this.trackChanges();
  }

  removeEducation(index: number) {
    this.profile.education.splice(index, 1);
    this.trackChanges();
  }

  onCurrentJobChange(exp: any) {
    if (exp.isCurrent) {
      exp.endDate = null;
    }
    this.trackChanges();
  }

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'header': [1, 2, 3, false] }],
      ['clean']
    ]
  };

  calculateCompleteness() {
    let score = 0;
    const fields = [
      { field: this.profile.name, weight: 10 },
      { field: this.profile.email, weight: 10 },
      { field: this.profile.phone, weight: 5 },
      { field: this.profile.location, weight: 5 },
      { field: this.profile.headline, weight: 15 },
      { field: this.profile.summary, weight: 15 },
      { field: this.profile.photo, weight: 10 },
      { field: this.profile.resume, weight: 15 },
      { field: this.profile.skillsWithLevels.length > 0, weight: 10 },
      { field: this.profile.linkedinUrl || this.profile.githubUrl || this.profile.portfolioUrl, weight: 5 }
    ];
    
    fields.forEach(({ field, weight }) => {
      if (field) score += weight;
    });
    
    this.profileCompleteness = score;
  }

  getCompletnessTip(): string {
    if (this.profileCompleteness < 50) return 'Add a professional headline and photo to get started';
    if (this.profileCompleteness < 80) return 'Upload your resume and add more skills';
    return 'Great! Your profile looks professional';
  }

  saveCandidateDetails() {
    if (!this.candidate) return;

    const certifications = this.profile.certifications.filter((c: any) => c.name && c.issuer);
    const education = this.profile.education.filter((e: any) => e.degree && e.institution);
    const experience = this.profile.experience.filter((e: any) => e.title && e.company);

    this.candidateService.saveCertifications(this.candidate.id, certifications).subscribe();
    this.candidateService.saveEducation(this.candidate.id, education).subscribe();
    this.candidateService.saveExperience(this.candidate.id, experience).subscribe({
      next: () => {
        setTimeout(() => {
          this.originalProfile = JSON.parse(JSON.stringify(this.profile));
          this.hasChanges = false;
        }, 100);
        this.successMessage = '✓ Profile updated successfully!';
        this.loading = false;
        setTimeout(() => this.successMessage = '', 5000);
      },
      error: (err) => {
        this.error = 'Failed to save some profile details.';
        this.loading = false;
      }
    });
  }
}
