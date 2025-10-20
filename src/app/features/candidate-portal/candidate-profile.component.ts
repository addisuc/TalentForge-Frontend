import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="candidate-profile-page">
      <div class="page-header">
        <h1>My Profile</h1>
        <p>Manage your professional information</p>
      </div>
      <div class="profile-container">
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
              <label>Full Name</label>
              <input type="text" [(ngModel)]="profile.name" class="form-input">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="profile.email" class="form-input">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" [(ngModel)]="profile.phone" class="form-input">
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" [(ngModel)]="profile.location" class="form-input">
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h2>Professional Summary</h2>
          <textarea [(ngModel)]="profile.summary" class="form-textarea" rows="4"></textarea>
        </div>

        <div class="profile-section">
          <h2>Skills</h2>
          <div class="skills-container">
            <span *ngFor="let skill of profile.skills" class="skill-tag">{{ skill }} <button class="remove-btn">×</button></span>
            <input type="text" placeholder="Add skill..." class="skill-input">
          </div>
        </div>

        <div class="profile-section">
          <h2>Experience</h2>
          <div *ngFor="let exp of profile.experience" class="experience-item">
            <h3>{{ exp.title }}</h3>
            <div class="exp-company">{{ exp.company }} • {{ exp.duration }}</div>
            <p>{{ exp.description }}</p>
          </div>
          <button class="btn-add">+ Add Experience</button>
        </div>

        <div class="profile-section">
          <h2>Education</h2>
          <div *ngFor="let edu of profile.education" class="education-item">
            <h3>{{ edu.degree }}</h3>
            <div class="edu-school">{{ edu.school }} • {{ edu.year }}</div>
          </div>
          <button class="btn-add">+ Add Education</button>
        </div>

        <div class="profile-actions">
          <button class="btn-save">Save Changes</button>
          <button class="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-profile-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .profile-container { max-width: 900px; }
    .profile-section { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 1.5rem; }
    .profile-section h2 { font-size: 1.25rem; font-weight: 600; color: #0f172a; margin-bottom: 1.5rem; }
    .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-input, .form-textarea { width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .form-textarea { resize: vertical; }
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
    .btn-save { background: #0066ff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-cancel { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
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
  `]
})
export class CandidateProfileComponent {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'Experienced full-stack developer with 5+ years of expertise in building scalable web applications.',
    resume: null as any,
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Python', 'AWS'],
    experience: [
      { title: 'Senior Developer', company: 'TechCorp', duration: '2021 - Present', description: 'Lead development of enterprise applications using Angular and Node.js.' },
      { title: 'Full Stack Developer', company: 'StartupXYZ', duration: '2019 - 2021', description: 'Built and maintained multiple web applications from scratch.' }
    ],
    education: [
      { degree: 'Bachelor of Science in Computer Science', school: 'University of California', year: '2019' }
    ]
  };

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
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOC, or DOCX file.');
      return;
    }
    
    if (file.size > maxSize) {
      alert('File size must be less than 5MB.');
      return;
    }
    
    this.profile.resume = {
      name: file.name,
      size: this.formatFileSize(file.size),
      uploadedDate: 'Today',
      file: file
    };
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  deleteResume() {
    if (confirm('Are you sure you want to delete your resume?')) {
      this.profile.resume = null;
    }
  }
}
