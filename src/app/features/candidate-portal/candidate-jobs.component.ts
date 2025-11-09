import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { JobService, Job, JobPage } from '../../core/services/job.service';
import { ApplicationService, ApplicationRequest } from '../../core/services/application.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-candidate-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, QuillModule],
  template: `
    <div class="candidate-jobs-page">
      <div class="page-header">
        <div class="header-content">
          <div class="header-text">
            <h1>Job Search</h1>
            <p>Find your next opportunity</p>
          </div>
        </div>
      </div>
      <div class="filters">
        <input type="text" [(ngModel)]="searchTerm" (input)="onSearchChange()" placeholder="Search jobs..." class="search-input">
        <select [(ngModel)]="locationFilter" (change)="onFilterChange()" class="filter-select">
          <option value="all">All Locations</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
        </select>
        <select [(ngModel)]="typeFilter" (change)="onFilterChange()" class="filter-select">
          <option value="all">All Types</option>
          <option value="FULL_TIME">Full-time</option>
          <option value="CONTRACT">Contract</option>
          <option value="PART_TIME">Part-time</option>
        </select>
        <button class="view-toggle" (click)="toggleView()">
          {{ viewMode === 'cards' ? '📋 List View' : '🔲 Card View' }}
        </button>
      </div>
      <div class="jobs-container" [class.list-view]="viewMode === 'list'">
        <div *ngFor="let job of filteredJobs" class="job-item" [class.job-card]="viewMode === 'cards'" [class.job-row]="viewMode === 'list'">
          <div class="job-content">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <button class="btn-save">⭐</button>
            </div>
            <div class="job-company">{{ getCompanyName(job) }}</div>
            <div class="job-details">
              <span>📍 {{ getLocationString(job) }}</span>
              <span>💰 {{ getSalaryRange(job) }}</span>
              <span>⏰ {{ getJobTypeDisplay(job) }}</span>
            </div>
            <p class="job-description" *ngIf="viewMode === 'cards'">{{ job.description }}</p>
          </div>
          <div class="job-actions">
            <button class="btn-apply" 
                    [disabled]="hasApplied(job.id)"
                    (click)="applyToJob(job)">
              {{ hasApplied(job.id) ? 'Applied' : 'Apply Now' }}
            </button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ filteredJobs.length }} of {{ totalJobs }} jobs</div>
          <select [(ngModel)]="itemsPerPage" (change)="onItemsPerPageChange()" class="items-per-page">
            <option [value]="25">25 per page</option>
            <option [value]="50">50 per page</option>
            <option [value]="100">100 per page</option>
          </select>
        </div>
        <div class="pagination-controls">
          <button (click)="previousPage()" [disabled]="currentPage === 1" class="btn-page">Previous</button>
          <button *ngFor="let page of pageNumbers" (click)="goToPage(page)" [class.active]="page === currentPage" class="btn-page">{{ page }}</button>
          <button (click)="nextPage()" [disabled]="currentPage === totalPages" class="btn-page">Next</button>
        </div>
      </div>

      <!-- Application Modal -->
      <div class="modal-overlay" *ngIf="showApplicationModal" (click)="closeApplicationModal()">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>Apply for Position</h2>
            <button class="close-btn" (click)="closeApplicationModal()">✕</button>
          </div>
          <div class="modal-body" *ngIf="selectedJob">
            <div class="job-summary">
              <h3>{{ selectedJob.title }}</h3>
              <p class="company">{{ getCompanyName(selectedJob) }}</p>
              <div class="job-meta">
                <span>📍 {{ getLocationString(selectedJob) }}</span>
                <span>💰 {{ getSalaryRange(selectedJob) }}</span>
                <span>⏰ {{ getJobTypeDisplay(selectedJob) }}</span>
              </div>
            </div>
            
            <div class="form-section">
              <h4>Application Details</h4>
              <div class="form-group">
                <label for="coverLetter">Cover Letter (Optional)</label>
                <quill-editor 
                  [(ngModel)]="coverLetter"
                  [modules]="quillModules"
                  [styles]="quillStyles"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit...">
                </quill-editor>
                <p class="help-text">A well-written cover letter can help your application stand out. Use the toolbar to format your text.</p>
              </div>
            </div>

            <div class="form-section">
              <h4>Professional References (Optional)</h4>
              <p class="section-description">You may provide up to 3 professional references who can speak to your work experience and qualifications. This is optional but recommended.</p>
              
              <div *ngFor="let ref of references; let i = index" class="reference-item">
                <div class="reference-header">
                  <h5>Reference {{i + 1}}</h5>
                  <button *ngIf="references.length > 1" type="button" class="btn-remove" (click)="removeReference(i)">Remove</button>
                </div>
                <div class="reference-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label>Full Name</label>
                      <input type="text" [(ngModel)]="ref.name" class="form-control" placeholder="John Smith">
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" [(ngModel)]="ref.email" class="form-control" placeholder="john@company.com">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Phone</label>
                      <input type="tel" [(ngModel)]="ref.phone" class="form-control" placeholder="(555) 123-4567">
                    </div>
                    <div class="form-group">
                      <label>Relationship</label>
                      <input type="text" [(ngModel)]="ref.relationship" class="form-control" placeholder="Manager, Colleague, etc.">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Company</label>
                      <input type="text" [(ngModel)]="ref.company" class="form-control" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                      <label>Title</label>
                      <input type="text" [(ngModel)]="ref.title" class="form-control" placeholder="Job Title">
                    </div>
                  </div>
                </div>
              </div>
              
              <button *ngIf="references.length < 3" type="button" class="btn-add-reference" (click)="addReference()">
                + Add Another Reference
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" (click)="closeApplicationModal()">Cancel</button>
            <button class="btn-secondary" (click)="previewApplication()">Preview Application</button>
            <button class="btn-primary" [disabled]="submittingApplication" (click)="submitApplication()">
              {{ submittingApplication ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div class="modal-overlay" *ngIf="showPreviewModal" (click)="closePreviewModal()">
      <div class="modal preview-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Application Preview</h2>
          <button class="close-btn" (click)="closePreviewModal()">✕</button>
        </div>
        <div class="modal-body" *ngIf="selectedJob">
          <div class="preview-section">
            <h3>Position Details</h3>
            <div class="preview-content">
              <p><strong>Job Title:</strong> {{ selectedJob.title }}</p>
              <p><strong>Company:</strong> {{ getCompanyName(selectedJob) }}</p>
              <p><strong>Location:</strong> {{ getLocationString(selectedJob) }}</p>
              <p><strong>Salary:</strong> {{ getSalaryRange(selectedJob) }}</p>
              <p><strong>Type:</strong> {{ getJobTypeDisplay(selectedJob) }}</p>
            </div>
          </div>
          
          <div class="preview-section">
            <div class="section-header">
              <h3>Cover Letter</h3>
              <button class="btn-edit" (click)="editCoverLetter()">✏️ Edit</button>
            </div>
            <div class="preview-content">
              <div *ngIf="coverLetter.trim(); else noCoverLetter" class="cover-letter-preview" [innerHTML]="coverLetter">
              </div>
              <ng-template #noCoverLetter>
                <p class="no-content">No cover letter provided</p>
              </ng-template>
            </div>
          </div>
          
          <div class="preview-section" *ngIf="hasValidReferences()">
            <h3>References ({{ getValidReferencesCount() }})</h3>
            <div class="preview-content">
              <div *ngFor="let ref of getValidReferences(); let i = index" class="reference-preview">
                <h4>Reference {{ i + 1 }}</h4>
                <p><strong>Name:</strong> {{ ref.name }}</p>
                <p><strong>Email:</strong> {{ ref.email }}</p>
                <p *ngIf="ref.phone"><strong>Phone:</strong> {{ ref.phone }}</p>
                <p><strong>Relationship:</strong> {{ ref.relationship }}</p>
                <p *ngIf="ref.company"><strong>Company:</strong> {{ ref.company }}</p>
                <p *ngIf="ref.title"><strong>Title:</strong> {{ ref.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="closePreviewModal()">Back to Edit</button>
          <button class="btn-primary" [disabled]="submittingApplication" (click)="submitFromPreview()">
            {{ submittingApplication ? 'Submitting...' : 'Submit Application' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" *ngIf="showToastFlag" [class]="'toast-' + toastType">
      <div class="toast-content">
        <span class="toast-icon">{{ toastType === 'success' ? '✓' : toastType === 'error' ? '✗' : '⚠' }}</span>
        <span class="toast-message">{{ toastMessage }}</span>
        <button class="toast-close" (click)="closeToast()">×</button>
      </div>
    </div>
  `,
  styles: [`
    .candidate-jobs-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .filters { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .search-input, .filter-select, .view-toggle { padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .view-toggle { background: white; cursor: pointer; font-weight: 600; }
    .view-toggle:hover { background: #f8fafc; }
    .search-input { flex: 1; }
    .jobs-container { margin-bottom: 2rem; }
    .jobs-container:not(.list-view) { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; }
    .jobs-container.list-view { display: flex; flex-direction: column; gap: 0.5rem; }
    .job-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; }
    .job-row { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; display: flex; align-items: center; gap: 1rem; }
    .job-row .job-content { flex: 1; }
    .job-row .job-header { margin-bottom: 0.25rem; }
    .job-row .job-company { margin-bottom: 0.25rem; }
    .job-row .job-details { margin-bottom: 0; }
    .job-row .job-actions { flex-shrink: 0; }
    .job-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem; }
    .job-header h3 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0; }
    .btn-save { background: none; border: none; font-size: 1.25rem; cursor: pointer; }
    .job-company { color: #64748b; font-weight: 500; margin-bottom: 0.75rem; }
    .job-details { display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; }
    .job-description { color: #475569; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; }
    .btn-apply { background: #0066ff; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .job-card .btn-apply { width: 100%; }
    .job-row .btn-apply { width: auto; }
    .pagination { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }
    .pagination-left { display: flex; align-items: center; gap: 1rem; }
    .pagination-info { color: #64748b; font-size: 0.875rem; }
    .items-per-page { padding: 6px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; color: #64748b; background: white; cursor: pointer; }
    .pagination-controls { display: flex; gap: 0.5rem; }
    .btn-page { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .btn-page:hover:not(:disabled) { background: #f8fafc; }
    .btn-page.active { background: #0066ff; color: white; border-color: #0066ff; }
    .btn-page:disabled { opacity: 0.5; cursor: not-allowed; }
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { background: white; border-radius: 12px; width: 90%; max-width: 600px; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); }
    .preview-modal { max-width: 700px; }
    .preview-section { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0; }
    .preview-section:last-child { border-bottom: none; }
    .preview-section h3 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0 0 12px 0; }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .btn-edit { background: #f8fafc; color: #0066ff; border: 1px solid #e2e8f0; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer; }
    .btn-edit:hover { background: #f0f7ff; }
    .preview-content { background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; }
    .preview-content p { margin: 0 0 8px 0; color: #0f172a; }
    .preview-content p:last-child { margin-bottom: 0; }
    .cover-letter-preview { white-space: pre-wrap; line-height: 1.6; color: #0f172a; }
    .no-content { color: #64748b; font-style: italic; }
    .reference-preview { background: white; padding: 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid #e2e8f0; }
    .reference-preview:last-child { margin-bottom: 0; }
    .reference-preview h4 { font-size: 0.875rem; font-weight: 600; color: #0066ff; margin: 0 0 8px 0; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px; border-bottom: 1px solid #e2e8f0; }
    .modal-header h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }
    .close-btn { background: none; border: none; font-size: 1.5rem; color: #64748b; cursor: pointer; padding: 0; width: 32px; height: 32px; }
    .close-btn:hover { color: #0f172a; }
    .modal-body { padding: 24px; }
    .job-summary { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #e2e8f0; }
    .job-summary h3 { font-size: 1.25rem; font-weight: 600; color: #0f172a; margin: 0 0 8px 0; }
    .job-summary .company { color: #64748b; font-weight: 500; margin: 0 0 12px 0; }
    .job-meta { display: flex; gap: 16px; font-size: 0.875rem; color: #64748b; flex-wrap: wrap; }
    .form-section h4 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0 0 16px 0; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-weight: 600; color: #0f172a; margin-bottom: 8px; font-size: 0.875rem; }
    .form-control { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; box-sizing: border-box; font-family: inherit; }
    ::ng-deep .ql-editor { min-height: 150px; font-family: inherit; }
    ::ng-deep .ql-toolbar { border-top: 1px solid #e2e8f0; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; }
    ::ng-deep .ql-container { border-bottom: 1px solid #e2e8f0; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; }
    ::ng-deep .ql-toolbar { border-radius: 8px 8px 0 0; }
    .form-control:focus { outline: none; border-color: #0066ff; }
    .help-text { font-size: 0.75rem; color: #64748b; margin-top: 4px; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 24px; border-top: 1px solid #e2e8f0; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-secondary:hover { background: #f0f7ff; }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-apply:disabled { opacity: 0.5; cursor: not-allowed; background: #94a3b8; }
    .form-section { margin-bottom: 32px; }
    .section-description { color: #64748b; font-size: 0.875rem; margin-bottom: 20px; }
    .reference-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 16px; background: #f8fafc; }
    .reference-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .reference-header h5 { margin: 0; font-size: 1rem; font-weight: 600; color: #0f172a; }
    .btn-remove { background: #ef4444; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; cursor: pointer; }
    .btn-remove:hover { background: #dc2626; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .btn-add-reference { background: #f8fafc; color: #0066ff; border: 2px dashed #0066ff; padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; }
    .btn-add-reference:hover { background: #f0f7ff; }
    .toast { position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 300px; padding: 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideIn 0.3s ease; }
    .toast-success { background: #d4edda; border-left: 4px solid #28a745; color: #155724; }
    .toast-error { background: #f8d7da; border-left: 4px solid #dc3545; color: #721c24; }
    .toast-warning { background: #fff3cd; border-left: 4px solid #ffc107; color: #856404; }
    .toast-content { display: flex; align-items: center; gap: 12px; }
    .toast-icon { font-size: 18px; font-weight: bold; }
    .toast-message { flex: 1; font-weight: 500; }
    .toast-close { background: none; border: none; font-size: 20px; cursor: pointer; opacity: 0.7; }
    .toast-close:hover { opacity: 1; }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @media (max-width: 768px) { .header-content { flex-direction: column; gap: 1rem; align-items: flex-start; } .notification-dropdown { right: -20px; width: 280px; } }
  `]
})
export class CandidateJobsComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 25;
  jobs: Job[] = [];
  totalJobs = 0;
  totalPages = 0;
  loading = false;
  appliedJobIds: Set<string> = new Set();
  showApplicationModal = false;
  selectedJob: Job | null = null;
  coverLetter = '';
  submittingApplication = false;
  toastMessage = '';
  toastType = '';
  showToastFlag = false;
  showPreviewModal = false;
  viewMode: 'cards' | 'list' = 'list';
  searchTerm = '';
  locationFilter = 'all';
  typeFilter = 'all';

  references: any[] = [
    { name: '', email: '', phone: '', relationship: '', company: '', title: '' },
    { name: '', email: '', phone: '', relationship: '', company: '', title: '' },
    { name: '', email: '', phone: '', relationship: '', company: '', title: '' }
  ];
  clients: any[] = [];

  constructor(
    private jobService: JobService,
    private applicationService: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadClients();
    this.loadJobs();
    this.loadAppliedJobs();
  }

  loadClients() {
    // Note: Candidates can't access /api/clients directly due to RLS
    // The backend should provide client names with jobs or via a public endpoint
  }

  loadJobs() {
    this.loading = true;
    const page = this.currentPage - 1;
    
    // Candidates see all ACTIVE jobs across all tenants
    this.jobService.getPublicActiveJobs(page, this.itemsPerPage).subscribe({
      next: (data: JobPage) => {
        this.jobs = data.content;
        this.totalJobs = data.totalElements;
        this.totalPages = data.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading jobs:', err);
        this.loading = false;
      }
    });
  }

  getCompanyName(job: Job): string {
    // For now, extract from description or use a placeholder
    // TODO: Backend should include client name in job response for candidates
    if ((job as any).companyName) {
      return (job as any).companyName;
    }
    // Try to extract from description
    if (job.description && job.description.includes('Company:')) {
      const match = job.description.match(/Company: ([^\n]+)/);
      if (match) return match[1];
    }
    return 'Company';
  }

  getLocationString(job: Job): string {
    if (typeof job.location === 'string') {
      let location = job.location.replace(/^"|"$/g, '');
      try {
        const parsed = JSON.parse(location);
        if (parsed.city && parsed.state) return `${parsed.city}, ${parsed.state}`;
        if (parsed.remote) return 'Remote';
        return location;
      } catch {
        return location;
      }
    }
    return 'Location TBD';
  }

  getSalaryRange(job: Job): string {
    if (job.salaryMin && job.salaryMax) {
      return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
    }
    if (job.salaryMin) {
      return `$${job.salaryMin.toLocaleString()}+`;
    }
    return 'Salary TBD';
  }

  getJobTypeDisplay(job: Job): string {
    if (!job.jobType) return 'Full Time';
    return job.jobType.replace('_', ' ').toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase());
  }

  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs); }
  get filteredJobs() {
    let filtered = this.jobs;
    
    // Search filter - expanded to include job characteristics
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(job => {
        // Basic info
        const titleMatch = job.title.toLowerCase().includes(term);
        const descMatch = job.description.toLowerCase().includes(term);
        const companyMatch = this.getCompanyName(job).toLowerCase().includes(term);
        
        // Skills (common tech skills)
        const skillsMatch = [
          'react', 'angular', 'vue', 'javascript', 'typescript', 'node', 'python', 'java', 'c#', 'php',
          'aws', 'azure', 'docker', 'kubernetes', 'sql', 'mongodb', 'postgresql', 'mysql',
          'frontend', 'backend', 'fullstack', 'devops', 'ui/ux', 'design', 'marketing', 'sales'
        ].some(skill => skill.includes(term) && (titleMatch || descMatch));
        
        // Experience level
        const experienceMatch = [
          'junior', 'senior', 'lead', 'principal', 'manager', 'director', 'entry', 'mid', 'experienced'
        ].some(level => level.includes(term) && (titleMatch || descMatch));
        
        // Salary range
        const salaryMatch = this.getSalaryRange(job).toLowerCase().includes(term);
        
        return titleMatch || descMatch || companyMatch || skillsMatch || experienceMatch || salaryMatch;
      });
    }
    
    // Location filter
    if (this.locationFilter !== 'all') {
      filtered = filtered.filter(job => {
        const location = this.getLocationString(job).toLowerCase();
        if (this.locationFilter === 'remote') {
          return location.includes('remote');
        } else if (this.locationFilter === 'onsite') {
          return !location.includes('remote');
        }
        return true;
      });
    }
    
    // Type filter
    if (this.typeFilter !== 'all') {
      filtered = filtered.filter(job => job.jobType === this.typeFilter);
    }
    
    return filtered;
  }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  
  previousPage() { 
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadJobs();
    }
  }
  
  nextPage() { 
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadJobs();
    }
  }
  
  goToPage(page: number) { 
    this.currentPage = page;
    this.loadJobs();
  }
  
  onItemsPerPageChange() { 
    this.currentPage = 1;
    this.loadJobs();
  }

  applyToJob(job: Job) {
    const user = this.authService.getCurrentUserValue();
    if (!user) {
      this.showToast('warning', 'Login Required', 'Please log in to apply for jobs.');
      return;
    }

    this.selectedJob = job;
    this.coverLetter = '';
    this.showApplicationModal = true;
  }

  closeApplicationModal() {
    this.showApplicationModal = false;
    this.selectedJob = null;
    this.coverLetter = '';
    this.showPreviewModal = false;
    this.references = [
      { name: '', email: '', phone: '', relationship: '', company: '', title: '' },
      { name: '', email: '', phone: '', relationship: '', company: '', title: '' },
      { name: '', email: '', phone: '', relationship: '', company: '', title: '' }
    ];
  }

  addReference() {
    if (this.references.length < 3) {
      this.references.push({ name: '', email: '', phone: '', relationship: '', company: '', title: '' });
    }
  }

  removeReference(index: number) {
    if (this.references.length > 1) {
      this.references.splice(index, 1);
    }
  }

  submitApplication() {
    if (!this.selectedJob) return;

    this.submittingApplication = true;
    // Filter out empty references
    const validReferences = this.references.filter(ref => 
      ref.name && ref.email && ref.relationship
    );

    const applicationRequest: any = {
      jobId: this.selectedJob.id,
      coverLetter: this.coverLetter || undefined,
      references: validReferences.length > 0 ? validReferences : undefined
    };

    this.applicationService.submitApplication(applicationRequest).subscribe({
      next: (application) => {
        this.appliedJobIds.add(this.selectedJob!.id);
        this.showToast('success', `Successfully applied to: ${this.selectedJob!.title}`, 'Your application has been submitted!');
        this.closeApplicationModal();
        this.submittingApplication = false;
      },
      error: (err) => {
        console.error('Error submitting application:', err);
        this.showToast('error', 'Application Failed', 'Failed to submit application. Please try again.');
        this.submittingApplication = false;
      }
    });
  }

  showToast(type: 'success' | 'error' | 'warning', title: string, message: string) {
    this.toastType = type;
    this.toastMessage = `${title}: ${message}`;
    this.showToastFlag = true;
    setTimeout(() => {
      this.showToastFlag = false;
    }, 4000);
  }

  closeToast() {
    this.showToastFlag = false;
  }

  toggleView() {
    this.viewMode = this.viewMode === 'cards' ? 'list' : 'cards';
  }

  onSearchChange() {
    // Debounce search for better performance
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      // Search is handled by filteredJobs getter
    }, 300);
  }

  onFilterChange() {
    // Filters are handled by filteredJobs getter
  }

  private searchTimeout: any;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'header': [1, 2, 3, false] }],
      ['clean']
    ]
  };

  quillStyles = {
    height: '200px'
  };

  loadAppliedJobs() {
    this.applicationService.getMyApplications(0, 1000).subscribe({
      next: (data) => {
        this.appliedJobIds = new Set(data.content.map(app => app.jobId));
      },
      error: (err) => {
        console.error('Error loading applied jobs:', err);
      }
    });
  }

  hasApplied(jobId: string): boolean {
    return this.appliedJobIds.has(jobId);
  }

  previewApplication() {
    this.showPreviewModal = true;
  }

  closePreviewModal() {
    this.showPreviewModal = false;
  }

  editCoverLetter() {
    this.showPreviewModal = false;
  }

  submitFromPreview() {
    this.showPreviewModal = false;
    this.submitApplication();
  }

  hasValidReferences(): boolean {
    return this.getValidReferences().length > 0;
  }

  getValidReferences() {
    return this.references.filter(ref => ref.name && ref.email && ref.relationship);
  }

  getValidReferencesCount(): number {
    return this.getValidReferences().length;
  }


}
