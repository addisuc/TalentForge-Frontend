import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobService, Job, JobPage } from '../../core/services/job.service';
import { ApplicationService, ApplicationRequest } from '../../core/services/application.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-candidate-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="candidate-jobs-page">
      <div class="page-header">
        <h1>Job Search</h1>
        <p>Find your next opportunity</p>
      </div>
      <div class="filters">
        <input type="text" placeholder="Search jobs..." class="search-input">
        <select class="filter-select">
          <option>All Locations</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>
        <select class="filter-select">
          <option>All Types</option>
          <option>Full-time</option>
          <option>Contract</option>
        </select>
      </div>
      <div class="jobs-grid">
        <div *ngFor="let job of paginatedJobs" class="job-card">
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
          <p class="job-description">{{ job.description }}</p>
          <button class="btn-apply" (click)="applyToJob(job)">Apply Now</button>
        </div>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalJobs }}</div>
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
                <textarea 
                  id="coverLetter"
                  [(ngModel)]="coverLetter" 
                  class="form-control" 
                  rows="6" 
                  placeholder="Tell us why you're interested in this position and what makes you a great fit...">
                </textarea>
                <p class="help-text">A well-written cover letter can help your application stand out.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" (click)="closeApplicationModal()">Cancel</button>
            <button class="btn-primary" [disabled]="submittingApplication" (click)="submitApplication()">
              {{ submittingApplication ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-jobs-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .filters { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .search-input, .filter-select { padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .search-input { flex: 1; }
    .jobs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .job-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; }
    .job-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem; }
    .job-header h3 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0; }
    .btn-save { background: none; border: none; font-size: 1.25rem; cursor: pointer; }
    .job-company { color: #64748b; font-weight: 500; margin-bottom: 0.75rem; }
    .job-details { display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; }
    .job-description { color: #475569; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; }
    .btn-apply { background: #0066ff; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; }
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
    .form-control:focus { outline: none; border-color: #0066ff; }
    .help-text { font-size: 0.75rem; color: #64748b; margin-top: 4px; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 24px; border-top: 1px solid #e2e8f0; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-secondary:hover { background: #f0f7ff; }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
  `]
})
export class CandidateJobsComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 25;
  jobs: Job[] = [];
  totalJobs = 0;
  totalPages = 0;
  loading = false;
  showApplicationModal = false;
  selectedJob: Job | null = null;
  coverLetter = '';
  submittingApplication = false;

  constructor(
    private jobService: JobService,
    private applicationService: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.loading = true;
    const page = this.currentPage - 1;
    
    this.jobService.getAllJobs(page, this.itemsPerPage).subscribe({
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
  get paginatedJobs() { return this.jobs; }
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
      alert('Please log in to apply for jobs.');
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
  }

  submitApplication() {
    if (!this.selectedJob) return;

    this.submittingApplication = true;
    const applicationRequest: ApplicationRequest = {
      jobId: this.selectedJob.id,
      coverLetter: this.coverLetter || undefined
    };

    this.applicationService.submitApplication(applicationRequest).subscribe({
      next: (application) => {
        alert(`Successfully applied to: ${this.selectedJob!.title}\n\nYour application has been submitted!`);
        this.closeApplicationModal();
        this.submittingApplication = false;
      },
      error: (err) => {
        console.error('Error submitting application:', err);
        alert('Failed to submit application. Please try again.');
        this.submittingApplication = false;
      }
    });
  }
}
