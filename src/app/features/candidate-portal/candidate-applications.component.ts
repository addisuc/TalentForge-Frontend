import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService, JobApplication, ApplicationPage, WithdrawApplicationRequest, ApplicationActivity } from '../../core/services/application.service';
import { InterviewService, Interview } from '../../core/services/interview.service';

@Component({
  selector: 'app-candidate-applications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="candidate-applications-page">
      <div class="page-header">
        <h1>My Applications</h1>
        <p>Track your job applications</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Company</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let app of paginatedApplications">
              <td><strong>{{ app.jobTitle || 'Job Title' }}</strong></td>
              <td>{{ app.companyName || 'Company' }}</td>
              <td>{{ app.appliedAt | date:'MMM d, y' }}</td>
              <td><span class="badge" [class]="app.status.toLowerCase()">{{ app.status }}</span></td>
              <td>
                <button class="btn-action" (click)="viewDetails(app)">View Details</button>
                <button class="btn-action secondary" (click)="withdrawApplication(app)" 
                        [disabled]="app.status === 'WITHDRAWN' || app.status === 'REJECTED' || app.status === 'OFFER_ACCEPTED'">Withdraw</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalApplications }}</div>
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
    </div>

    <!-- Details Modal -->
    <div class="modal-overlay" *ngIf="selectedApp" (click)="closeDetails()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Application Details</h2>
          <button class="btn-close" (click)="closeDetails()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="detail-row">
            <label>Position:</label>
            <span>{{ selectedApp.jobTitle }}</span>
          </div>
          <div class="detail-row">
            <label>Company:</label>
            <span>{{ selectedApp.companyName }}</span>
          </div>
          <div class="detail-row">
            <label>Status:</label>
            <span class="badge" [class]="selectedApp.status.toLowerCase()">{{ selectedApp.status }}</span>
          </div>
          <div class="detail-row">
            <label>Applied Date:</label>
            <span>{{ selectedApp.appliedAt | date:'MMM d, y, h:mm a' }}</span>
          </div>
          <div class="detail-row">
            <label>Last Updated:</label>
            <span>{{ selectedApp.updatedAt | date:'MMM d, y, h:mm a' }}</span>
          </div>
          <div class="detail-row full-width" *ngIf="selectedApp.coverLetter">
            <label>Cover Letter:</label>
            <p class="cover-letter">{{ selectedApp.coverLetter }}</p>
          </div>
          <div class="timeline-section">
            <h3>Application Timeline</h3>
            <div class="timeline" *ngIf="activities.length > 0">
              <div *ngFor="let activity of activities" class="timeline-item">
                <div class="timeline-marker" [class]="getActivityClass(activity.activityType)"></div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <span class="timeline-title">{{ getActivityTitle(activity) }}</span>
                    <span class="timeline-date">{{ activity.createdAt | date:'MMM d, y, h:mm a' }}</span>
                  </div>
                  <p class="timeline-description">{{ activity.description }}</p>
                  <div class="timeline-status" *ngIf="activity.oldStatus && activity.newStatus">
                    <span class="status-change">{{ formatStatus(activity.oldStatus) }} → {{ formatStatus(activity.newStatus) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div *ngIf="loadingActivities" class="loading-timeline">Loading timeline...</div>
          </div>
          
          <div class="interview-section" *ngIf="interviews.length > 0">
            <h3>Scheduled Interviews</h3>
            <div class="interview-card" *ngFor="let interview of interviews">
              <div class="interview-header">
                <span class="interview-type">{{ interview.interviewType.replace('_', ' ') }}</span>
                <span class="interview-status" [class]="interview.status.toLowerCase()">{{ interview.status }}</span>
              </div>
              <div class="interview-details">
                <div class="interview-row">
                  <strong>📅 Date & Time:</strong>
                  <span>{{ interview.scheduledAt | date:'EEEE, MMM d, y, h:mm a' }}</span>
                </div>
                <div class="interview-row" *ngIf="interview.durationMinutes">
                  <strong>⏱️ Duration:</strong>
                  <span>{{ interview.durationMinutes }} minutes</span>
                </div>
                <div class="interview-row" *ngIf="interview.meetingLink">
                  <strong>🔗 Meeting Link:</strong>
                  <a [href]="interview.meetingLink" target="_blank" rel="noopener noreferrer" class="meeting-link">Join Meeting</a>
                </div>
                <div class="interview-row" *ngIf="interview.location">
                  <strong>📍 Location:</strong>
                  <span>{{ interview.location }}</span>
                </div>
                <div class="interview-row" *ngIf="interview.interviewerName">
                  <strong>👤 Interviewer:</strong>
                  <span>{{ interview.interviewerName }}<span *ngIf="interview.interviewerEmail"> ({{ interview.interviewerEmail }})</span></span>
                </div>
                <div class="interview-row full" *ngIf="interview.notes">
                  <strong>📝 Notes:</strong>
                  <p>{{ interview.notes }}</p>
                </div>
              </div>
              <div class="interview-actions" *ngIf="interview.status === 'SCHEDULED'">
                <button class="btn-action" [disabled]="true" title="Coming soon">Request Reschedule</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-action secondary" (click)="closeDetails()">Close</button>
        </div>
      </div>
    </div>

    <!-- Withdraw Confirmation Modal -->
    <div class="modal-overlay" *ngIf="showWithdrawConfirm" (click)="cancelWithdraw()">
      <div class="modal-content small" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Withdraw Application</h2>
          <button class="btn-close" (click)="cancelWithdraw()">&times;</button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to withdraw your application for <strong>{{ appToWithdraw?.jobTitle }}</strong> at <strong>{{ appToWithdraw?.companyName }}</strong>?</p>
          <div class="form-group">
            <label for="withdrawalReason">Reason for withdrawal (required):</label>
            <textarea id="withdrawalReason" [(ngModel)]="withdrawalReason" 
                      class="form-control" rows="3" 
                      placeholder="Please provide a reason for withdrawing your application..."></textarea>
          </div>
          <p class="warning">This action cannot be undone.</p>
        </div>
        <div class="modal-footer">
          <button class="btn-action secondary" (click)="cancelWithdraw()">Cancel</button>
          <button class="btn-action danger" [disabled]="!withdrawalReason || !withdrawalReason.trim()" (click)="confirmWithdraw()">Withdraw Application</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-applications-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow-x: auto; margin-bottom: 1rem; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table thead { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
    .data-table th { padding: 16px; text-align: left; font-weight: 600; font-size: 0.875rem; color: #475569; }
    .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 16px; font-size: 0.875rem; color: #0f172a; }
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge.applied { background: #e0e7ff; color: #3730a3; }
    .badge.review { background: #fef3c7; color: #92400e; }
    .badge.interview { background: #dbeafe; color: #1e40af; }
    .badge.offer { background: #d1fae5; color: #065f46; }
    .badge.rejected { background: #fee2e2; color: #991b1b; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 8px; white-space: nowrap; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .btn-action.danger { background: #dc2626; }
    .btn-action:disabled { opacity: 0.5; cursor: not-allowed; }
    .pagination { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }
    .pagination-left { display: flex; align-items: center; gap: 1rem; }
    .pagination-info { color: #64748b; font-size: 0.875rem; }
    .items-per-page { padding: 6px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; color: #64748b; background: white; cursor: pointer; }
    .pagination-controls { display: flex; gap: 0.5rem; }
    .btn-page { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .btn-page:hover:not(:disabled) { background: #f8fafc; }
    .btn-page.active { background: #0066ff; color: white; border-color: #0066ff; }
    .btn-page:disabled { opacity: 0.5; cursor: not-allowed; }
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal-content { background: white; border-radius: 12px; width: 90%; max-width: 600px; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
    .modal-content.small { max-width: 450px; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; }
    .modal-header h2 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0; }
    .btn-close { background: none; border: none; font-size: 2rem; color: #64748b; cursor: pointer; line-height: 1; padding: 0; width: 32px; height: 32px; }
    .btn-close:hover { color: #0f172a; }
    .modal-body { padding: 1.5rem; }
    .detail-row { display: flex; margin-bottom: 1rem; }
    .detail-row label { font-weight: 600; color: #475569; min-width: 140px; }
    .detail-row span { color: #0f172a; }
    .detail-row.full-width { flex-direction: column; }
    .detail-row.full-width label { margin-bottom: 0.5rem; }
    .cover-letter { color: #0f172a; white-space: pre-wrap; line-height: 1.6; margin: 0; }
    .interview-section { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
    .interview-section h3 { font-size: 1rem; font-weight: 600; color: #0f172a; margin-bottom: 1rem; }
    .interview-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
    .interview-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
    .interview-type { font-weight: 600; color: #0f172a; text-transform: capitalize; }
    .interview-status { padding: 2px 8px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; }
    .interview-status.scheduled { background: #dbeafe; color: #1e40af; }
    .interview-status.completed { background: #d1fae5; color: #065f46; }
    .interview-status.cancelled { background: #fee2e2; color: #991b1b; }
    .interview-details { display: flex; flex-direction: column; gap: 0.5rem; }
    .interview-row { display: flex; gap: 0.5rem; font-size: 0.875rem; align-items: flex-start; }
    .interview-row.full { flex-direction: column; }
    .interview-row strong { color: #475569; min-width: 140px; flex-shrink: 0; }
    .interview-row span, .interview-row p { color: #0f172a; margin: 0; flex: 1; }
    .meeting-link { color: #0066ff; text-decoration: none; font-weight: 600; padding: 4px 12px; background: #eff6ff; border-radius: 6px; display: inline-block; }
    .meeting-link:hover { background: #dbeafe; text-decoration: none; }
    .interview-actions { margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid #e2e8f0; display: flex; gap: 0.5rem; }
    .modal-body p { color: #475569; line-height: 1.6; margin-bottom: 1rem; }
    .modal-body p.warning { color: #dc2626; font-size: 0.875rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem; font-size: 0.875rem; }
    .form-control { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; box-sizing: border-box; font-family: inherit; resize: vertical; }
    .form-control:focus { outline: none; border-color: #0066ff; }
    .timeline-section { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
    .timeline-section h3 { font-size: 1rem; font-weight: 600; color: #0f172a; margin-bottom: 1rem; }
    .timeline { position: relative; padding-left: 2rem; }
    .timeline::before { content: ''; position: absolute; left: 0.75rem; top: 0; bottom: 0; width: 2px; background: #e2e8f0; }
    .timeline-item { position: relative; margin-bottom: 1.5rem; }
    .timeline-marker { position: absolute; left: -2rem; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #e2e8f0; background: white; }
    .timeline-marker.status-change { border-color: #3b82f6; background: #3b82f6; }
    .timeline-marker.application-submitted { border-color: #10b981; background: #10b981; }
    .timeline-marker.application-withdrawn { border-color: #f59e0b; background: #f59e0b; }
    .timeline-content { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; }
    .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
    .timeline-title { font-weight: 600; color: #0f172a; font-size: 0.875rem; }
    .timeline-date { color: #64748b; font-size: 0.75rem; }
    .timeline-description { color: #475569; font-size: 0.875rem; margin: 0 0 0.5rem 0; line-height: 1.4; }
    .timeline-status { }
    .status-change { background: #eff6ff; color: #1e40af; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .loading-timeline { color: #64748b; font-style: italic; text-align: center; padding: 1rem; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 0.75rem; padding: 1.5rem; border-top: 1px solid #e2e8f0; }
  `]
})
export class CandidateApplicationsComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 25;

  applications: JobApplication[] = [];
  loading = false;
  error = '';
  totalApplications = 0;
  totalPages = 0;
  selectedApp: JobApplication | null = null;
  showWithdrawConfirm = false;
  appToWithdraw: JobApplication | null = null;
  interviews: Interview[] = [];
  loadingInterviews = false;
  withdrawalReason = '';
  activities: ApplicationActivity[] = [];
  loadingActivities = false;

  constructor(
    private applicationService: ApplicationService,
    private interviewService: InterviewService
  ) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.loading = true;
    this.error = '';
    
    const page = this.currentPage - 1;
    this.applicationService.getMyApplications(page, this.itemsPerPage).subscribe({
      next: (data: ApplicationPage) => {
        this.applications = data.content;
        this.totalApplications = data.totalElements;
        this.totalPages = data.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading applications:', err);
        this.error = 'Failed to load applications';
        this.loading = false;
      }
    });
  }


  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalApplications); }
  get paginatedApplications() { return this.applications; }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  previousPage() { if (this.currentPage > 1) { this.currentPage--; this.loadApplications(); } }
  nextPage() { if (this.currentPage < this.totalPages) { this.currentPage++; this.loadApplications(); } }
  goToPage(page: number) { this.currentPage = page; this.loadApplications(); }
  onItemsPerPageChange() { this.currentPage = 1; this.loadApplications(); }

  viewDetails(app: JobApplication) {
    this.selectedApp = app;
    this.loadInterviews(app.id);
    this.loadTimeline(app.id);
  }

  loadInterviews(applicationId: string) {
    this.loadingInterviews = true;
    this.interviews = [];
    console.log('Loading interviews for application:', applicationId);
    this.interviewService.getInterviewsByApplication(applicationId).subscribe({
      next: (interviews) => {
        console.log('Interviews loaded:', interviews);
        this.interviews = interviews;
        this.loadingInterviews = false;
      },
      error: (err) => {
        console.error('Error loading interviews:', err);
        this.loadingInterviews = false;
      }
    });
  }

  closeDetails() {
    this.selectedApp = null;
    this.interviews = [];
    this.activities = [];
  }

  withdrawApplication(app: JobApplication) {
    this.appToWithdraw = app;
    this.showWithdrawConfirm = true;
  }

  cancelWithdraw() {
    this.showWithdrawConfirm = false;
    this.appToWithdraw = null;
    this.withdrawalReason = '';
  }

  confirmWithdraw() {
    if (this.appToWithdraw && this.withdrawalReason.trim()) {
      const request = {
        reason: this.withdrawalReason.trim()
      };
      
      this.applicationService.withdrawApplication(this.appToWithdraw.id, request).subscribe({
        next: () => {
          this.showWithdrawConfirm = false;
          this.appToWithdraw = null;
          this.withdrawalReason = '';
          this.loadApplications();
        },
        error: (err) => {
          console.error('Error withdrawing application:', err);
          this.showWithdrawConfirm = false;
          this.appToWithdraw = null;
          this.withdrawalReason = '';
        }
      });
    }
  }
  
  loadTimeline(applicationId: string) {
    this.loadingActivities = true;
    this.activities = [];
    
    this.applicationService.getApplicationTimeline(applicationId).subscribe({
      next: (activities) => {
        this.activities = activities;
        this.loadingActivities = false;
      },
      error: (err) => {
        console.error('Error loading timeline:', err);
        this.loadingActivities = false;
      }
    });
  }
  
  getActivityClass(activityType: string): string {
    return activityType.toLowerCase().replace('_', '-');
  }
  
  getActivityTitle(activity: ApplicationActivity): string {
    switch (activity.activityType) {
      case 'APPLICATION_SUBMITTED': return 'Application Submitted';
      case 'STATUS_CHANGE': return 'Status Updated';
      case 'APPLICATION_WITHDRAWN': return 'Application Withdrawn';
      default: return activity.activityType.replace('_', ' ');
    }
  }
  
  formatStatus(status: string): string {
    return status.replace('_', ' ').toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }
}
