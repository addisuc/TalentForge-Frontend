import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService, JobApplication, ApplicationPage } from '../../core/services/application.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-client-candidates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="client-candidates-page">
      <div class="page-header">
        <h1>Submitted Candidates</h1>
        <p>Candidates submitted by recruiters for your review</p>
      </div>
      
      <div *ngIf="loading" class="loading">Loading...</div>
      
      <div *ngIf="!loading && candidatesByJob.length === 0" class="empty-state">
        <p>No candidates have been submitted yet.</p>
      </div>
      
      <div *ngFor="let jobGroup of candidatesByJob" class="job-group">
        <div class="job-header" (click)="toggleJob(jobGroup.jobId)">
          <div class="job-info">
            <h3>{{ jobGroup.jobTitle }}</h3>
            <span class="candidate-count">{{ jobGroup.candidates.length }} candidate(s)</span>
          </div>
          <span class="toggle-icon">{{ jobGroup.expanded ? '▼' : '▶' }}</span>
        </div>
        
        <div *ngIf="jobGroup.expanded" class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Submitted Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let candidate of jobGroup.candidates">
                <td><strong>{{ candidate.name }}</strong></td>
                <td>{{ candidate.email }}</td>
                <td><span class="badge" [ngClass]="getBadgeClass(candidate.status)">{{ candidate.status }}</span></td>
                <td>{{ candidate.submitted | date:'MMM d, yyyy' }}</td>
                <td>
                  <button class="btn-action">Review</button>
                  <button class="btn-action secondary">Schedule</button>
                  <button class="btn-action secondary">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .client-candidates-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .loading { text-align: center; padding: 3rem; color: #64748b; }
    .empty-state { text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }
    .empty-state p { color: #64748b; font-size: 1rem; }
    .job-group { margin-bottom: 1.5rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
    .job-header { padding: 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
    .job-header:hover { background: #f1f5f9; }
    .job-info h3 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0 0 0.25rem 0; }
    .candidate-count { font-size: 0.875rem; color: #64748b; }
    .toggle-icon { color: #64748b; font-size: 0.875rem; }
    .table-container { overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table thead { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
    .data-table th { padding: 16px; text-align: left; font-weight: 600; font-size: 0.875rem; color: #475569; }
    .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
    .data-table tbody tr:last-child { border-bottom: none; }
    .data-table td { padding: 16px; font-size: 0.875rem; color: #0f172a; }
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-review { background: #fef3c7; color: #92400e; }
    .badge-interview { background: #dbeafe; color: #1e40af; }
    .badge-offer { background: #d1fae5; color: #065f46; }
    .badge-hired { background: #dcfce7; color: #166534; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 8px; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .btn-action:hover { opacity: 0.9; }
  `]
})
export class ClientCandidatesComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 25;
  loading = false;
  applications: JobApplication[] = [];
  totalCandidates = 0;
  companyId = ''; // This should come from the logged-in client user

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    console.log('ClientCandidatesComponent ngOnInit called');
    this.getCompanyIdFromAuth();
    console.log('Company ID:', this.companyId);
    this.loadSubmissions();
  }
  
  private getCompanyIdFromAuth(): void {
    const clientUser = localStorage.getItem('clientUser');
    if (clientUser) {
      const user = JSON.parse(clientUser);
      this.companyId = user.companyId || user.id || '';
    }
    if (!this.companyId) {
      console.error('No company ID found in auth');
    }
  }

  loadSubmissions() {
    console.log('loadSubmissions called with companyId:', this.companyId);
    if (!this.companyId) {
      console.log('No companyId, returning');
      return;
    }
    
    this.loading = true;
    console.log('Making API call to getClientSubmissions');
    this.applicationService.getClientSubmissions(this.companyId, 0, 100).subscribe({
      next: (data: ApplicationPage) => {
        this.applications = data.content;
        this.totalCandidates = data.totalElements;
        this.groupCandidatesByJob();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load submissions:', err);
        this.loading = false;
      }
    });
  }

  candidatesByJob: any[] = [];

  groupCandidatesByJob() {
    const jobMap = new Map<string, any>();
    
    this.applications.forEach(app => {
      const jobId = app.jobId;
      const jobTitle = app.jobTitle || 'Unknown Position';
      
      if (!jobMap.has(jobId)) {
        jobMap.set(jobId, {
          jobId,
          jobTitle,
          candidates: [],
          expanded: true
        });
      }
      
      jobMap.get(jobId).candidates.push({
        id: app.id,
        name: app.candidateName || 'Unknown',
        email: app.candidateEmail || 'N/A',
        status: this.formatStatus(app.status),
        submitted: app.updatedAt
      });
    });
    
    this.candidatesByJob = Array.from(jobMap.values());
  }

  toggleJob(jobId: string) {
    const job = this.candidatesByJob.find(j => j.jobId === jobId);
    if (job) {
      job.expanded = !job.expanded;
    }
  }

  formatStatus(status: string): string {
    if (status === 'SUBMITTED_TO_CLIENT') return 'Review';
    if (status === 'CLIENT_INTERVIEW') return 'Interview';
    if (status === 'OFFER_PENDING') return 'Offer';
    if (status === 'HIRED') return 'Hired';
    return status.replace(/_/g, ' ');
  }

  getBadgeClass(status: string): string {
    if (status === 'Review') return 'badge-review';
    if (status === 'Interview') return 'badge-interview';
    if (status === 'Offer') return 'badge-offer';
    if (status === 'Hired') return 'badge-hired';
    return '';
  }
}
