import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthService } from './core/auth/auth.service';
import { NavigationService } from './core/services/navigation.service';
import { JobService } from './core/services/job.service';
import { ApplicationService } from './core/services/application.service';
import { ClientService } from './core/services/client.service';
import { UserService } from './core/services/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MainLayoutComponent, FormsModule],
  template: `
    <div class="dashboard-page">
        <div class="content">
          <div class="page-header">
            <div>
              <h1>Dashboard Overview</h1>
              <p class="page-subtitle">Welcome back, {{ userName }}</p>
            </div>
            <button class="btn-primary" (click)="navigateToJobs()">+ Post New Job</button>
          </div>

          <div class="stats-grid" *ngIf="stats.length > 0">
            <div class="stat-card" *ngFor="let stat of stats">
              <div class="stat-header">
                <span class="stat-icon">{{ stat.icon }}</span>
                <span class="stat-trend" [class.positive]="stat.trend > 0" [class.negative]="stat.trend < 0">
                  {{ stat.trend > 0 ? '↑' : '↓' }} {{ Math.abs(stat.trend) }}%
                </span>
              </div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>

          <div class="empty-state" *ngIf="stats.length === 0">
            <p>📊 Dashboard analytics coming soon</p>
          </div>

          <div class="dashboard-grid">
            <div class="card recent-candidates">
              <div class="card-header">
                <h3>Recent Candidates</h3>
                <a routerLink="/candidates">View All</a>
              </div>
              <div class="candidate-list" *ngIf="recentCandidates.length > 0">
                <div class="candidate-item" *ngFor="let candidate of recentCandidates">
                  <div class="candidate-avatar">{{ candidate.initials }}</div>
                  <div class="candidate-info">
                    <div class="candidate-name">{{ candidate.name }}</div>
                    <div class="candidate-role">{{ candidate.role }}</div>
                  </div>
                  <div class="candidate-status" [class]="candidate.status">
                    {{ candidate.status }}
                  </div>
                </div>
              </div>
              <div class="empty-message" *ngIf="recentCandidates.length === 0">
                No recent candidates
              </div>
            </div>

            <div class="card active-jobs">
              <div class="card-header">
                <h3>Active Job Postings</h3>
                <a routerLink="/jobs">View All</a>
              </div>
              <div class="job-list" *ngIf="activeJobs.length > 0">
                <div class="job-item" *ngFor="let job of activeJobs">
                  <div class="job-info">
                    <div class="job-title">{{ job.title }}</div>
                    <div class="job-meta">{{ job.applicants }} applicants • {{ job.daysOpen }} days open</div>
                  </div>
                  <div class="job-status">{{ job.status }}</div>
                </div>
              </div>
              <div class="empty-message" *ngIf="activeJobs.length === 0">
                No active jobs
              </div>
            </div>

            <div class="card pipeline-overview">
              <div class="card-header">
                <h3>Hiring Pipeline</h3>
                <a routerLink="/pipeline">View Details</a>
              </div>
              <div class="pipeline-stages" *ngIf="pipelineStages.length > 0">
                <div class="stage" *ngFor="let stage of pipelineStages">
                  <div class="stage-count">{{ stage.count }}</div>
                  <div class="stage-name">{{ stage.name }}</div>
                </div>
              </div>
              <div class="empty-message" *ngIf="pipelineStages.length === 0">
                No pipeline data
              </div>
            </div>

            <div class="card quick-actions">
              <div class="card-header">
                <h3>Quick Actions</h3>
              </div>
              <div class="actions-grid">
                <button class="action-btn" *ngFor="let action of quickActions" 
                        [class.primary]="action.primary" 
                        (click)="executeAction(action.action)">
                  <span class="action-icon">{{ action.icon }}</span>
                  <span>{{ action.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Invitation Modal -->
        <div class="modal-overlay" *ngIf="showInviteModal" (click)="closeInviteModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h2>Invite Client</h2>
              <button class="close-btn" (click)="closeInviteModal()">✕</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Company Name *</label>
                <input type="text" [(ngModel)]="inviteData.companyName" class="form-control" placeholder="Enter company name">
              </div>
              <div class="form-group">
                <label>Contact Person *</label>
                <input type="text" [(ngModel)]="inviteData.contactPerson" class="form-control" placeholder="Enter contact person name">
              </div>
              <div class="form-group">
                <label>Email Address *</label>
                <input type="email" [(ngModel)]="inviteData.email" class="form-control" placeholder="Enter email address">
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn-secondary" (click)="closeInviteModal()">Cancel</button>
              <button class="btn-primary" (click)="sendInvitation()" [disabled]="isInviting">{{ isInviting ? 'Sending...' : 'Send Invitation' }}</button>
            </div>
          </div>
        </div>

        <!-- Success Toast -->
        <div class="toast success" *ngIf="showSuccessToast">
          ✓ Client invitation sent successfully!
        </div>

        <!-- Error Toast -->
        <div class="toast error" *ngIf="showErrorToast">
          ⚠ Failed to send invitation. Please try again.
        </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      font-family: 'Inter', sans-serif;
    }

    .content {
      padding: 32px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    .page-header {
      h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 4px;
      }
    }

    .page-subtitle {
      color: #64748b;
      font-size: 0.875rem;
    }

    .btn-primary {
      background: #0066ff;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: #0052cc;
        transform: translateY(-1px);
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }

    .stat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .stat-icon {
      font-size: 1.5rem;
    }

    .stat-trend {
      font-size: 0.875rem;
      font-weight: 600;
    }

    .stat-trend.positive {
      color: #10b981;
    }

    .stat-trend.negative {
      color: #ef4444;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .stat-label {
      color: #64748b;
      font-size: 0.875rem;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .card {
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      padding: 24px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .card-header h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f172a;
    }

    .card-header a {
      color: #0066ff;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .candidate-list, .job-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .candidate-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .candidate-item:hover {
      background: #f8fafc;
    }

    .candidate-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }

    .candidate-info {
      flex: 1;
    }

    .candidate-name {
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .candidate-role {
      font-size: 0.875rem;
      color: #64748b;
    }

    .candidate-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .candidate-status.screening {
      background: #fef3c7;
      color: #92400e;
    }

    .candidate-status.interview {
      background: #dbeafe;
      color: #1e40af;
    }

    .candidate-status.offer {
      background: #d1fae5;
      color: #065f46;
    }

    .job-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .job-item:hover {
      background: #f8fafc;
    }

    .job-title {
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .job-meta {
      font-size: 0.875rem;
      color: #64748b;
    }

    .job-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      background: #d1fae5;
      color: #065f46;
    }

    .pipeline-stages {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    .stage {
      flex: 1;
      text-align: center;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
    }

    .stage-count {
      font-size: 2rem;
      font-weight: 700;
      color: #0066ff;
      margin-bottom: 8px;
    }

    .stage-name {
      font-size: 0.875rem;
      color: #64748b;
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
      font-weight: 600;
      color: #0f172a;
      text-decoration: none;
    }

    .action-btn:hover {
      background: #e2e8f0;
      transform: translateY(-2px);
    }

    .action-btn.primary {
      background: #0066ff;
      color: white;
      border-color: #0066ff;
      box-shadow: 0 2px 4px rgba(0, 102, 255, 0.2);
    }

    .action-btn.primary:hover {
      background: #0052cc;
      box-shadow: 0 4px 8px rgba(0, 102, 255, 0.3);
    }

    .action-icon {
      font-size: 1.25rem;
    }

    .empty-state {
      text-align: center;
      padding: 48px;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      margin-bottom: 32px;
      color: #64748b;
      font-size: 1.125rem;
    }

    .empty-message {
      text-align: center;
      padding: 32px;
      color: #64748b;
      font-size: 0.875rem;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 500px;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      border-bottom: 1px solid #e2e8f0;
    }

    .modal-header h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #64748b;
      padding: 4px;
    }

    .modal-body {
      padding: 24px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #374151;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 0.875rem;
      transition: border-color 0.3s;
    }

    .form-control:focus {
      outline: none;
      border-color: #0066ff;
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    }

    .modal-footer {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      padding: 24px;
      border-top: 1px solid #e2e8f0;
    }

    .btn-secondary {
      background: #f8fafc;
      color: #374151;
      border: 1px solid #d1d5db;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      background: #e2e8f0;
    }

    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 8px;
      font-weight: 600;
      z-index: 1001;
      animation: slideIn 0.3s ease-out;
    }

    .toast.success {
      background: #10b981;
      color: white;
    }

    .toast.error {
      background: #ef4444;
      color: white;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (max-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .dashboard-grid {
        grid-template-columns: 1fr;
      }

      .actions-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  Math = Math;
  userName = 'User';

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private router: Router,
    private jobService: JobService,
    private applicationService: ApplicationService,
    private clientService: ClientService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.userName = `${user.firstName} ${user.lastName}`;
      }
    });
    this.loadDashboardData();
    
    // Auto-refresh every 10 seconds
    this.refreshInterval = setInterval(() => {
      this.loadDashboardData();
    }, 10000);
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  loadDashboardData() {
    forkJoin({
      jobs: this.jobService.getAllJobs(0, 100),
      applications: this.applicationService.getAllApplications(0, 100),
      users: this.userService.getAllUsers(0, 100)
    }).subscribe({
      next: ({ jobs, applications, users }) => {
        this.calculateStats(jobs.content, applications.content, users.content);
        this.loadRecentData(jobs.content, applications.content);
      },
      error: (err) => console.error('Failed to load dashboard data:', err)
    });
  }

  calculateStats(jobs: any[], applications: any[], users: any[]) {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;

    // Active Jobs (Open positions)
    const activeJobs = jobs.filter(j => j.status === 'ACTIVE').length;

    // New Applications This Month (based on appliedAt or createdAt)
    const newApplicationsThisMonth = applications.filter(app => {
      const dateStr = app.appliedAt || app.createdAt;
      if (!dateStr) return false;
      const date = new Date(dateStr);
      return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
    }).length;

    const newApplicationsLastMonth = applications.filter(app => {
      const dateStr = app.appliedAt || app.createdAt;
      if (!dateStr) return false;
      const date = new Date(dateStr);
      return date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;
    }).length;

    const appTrend = newApplicationsLastMonth > 0 
      ? Math.round(((newApplicationsThisMonth - newApplicationsLastMonth) / newApplicationsLastMonth) * 100)
      : (newApplicationsThisMonth > 0 ? 100 : 0);

    // Active Interviews (currently in interview stages)
    const activeInterviews = applications.filter(app => {
      const interviewStages = ['INTERVIEW', 'PHONE_INTERVIEW', 'TECHNICAL_INTERVIEW', 'FINAL_INTERVIEW'];
      return interviewStages.includes(app.status);
    }).length;

    // Placements This Month (status = HIRED)
    const placementsThisMonth = applications.filter(app => {
      const status = app.status || app.stage;
      return status === 'HIRED' || status === 'OFFER_ACCEPTED';
    }).length;

    this.stats = [
      { icon: '💼', value: activeJobs.toString(), label: 'Open Positions', trend: 0 },
      { icon: '📝', value: newApplicationsThisMonth.toString(), label: 'New Applications', trend: appTrend },
      { icon: '🎯', value: activeInterviews.toString(), label: 'Active Interviews', trend: 0 },
      { icon: '✅', value: placementsThisMonth.toString(), label: 'Placements', trend: 0 }
    ];
  }

  loadRecentData(jobs: any[], applications: any[]) {
    // Load active jobs with applicant counts
    this.activeJobs = jobs
      .filter(j => j.status === 'ACTIVE')
      .slice(0, 4)
      .map(job => {
        const applicants = applications.filter(app => app.jobOrderId === job.id).length;
        const daysOpen = this.getDaysAgo(job.createdAt);
        return {
          title: job.title,
          applicants,
          daysOpen,
          status: 'Active'
        };
      });

    // Load pipeline stages
    this.pipelineStages = [
      { name: 'Applied', count: applications.filter(app => app.status === 'APPLIED').length },
      { name: 'Screening', count: applications.filter(app => app.status === 'SCREENING').length },
      { name: 'Interview', count: applications.filter(app => ['PHONE_INTERVIEW', 'TECHNICAL_INTERVIEW', 'FINAL_INTERVIEW'].includes(app.status)).length },
      { name: 'Offer', count: applications.filter(app => ['OFFER_PENDING', 'OFFER_ACCEPTED', 'OFFER_DECLINED'].includes(app.status)).length }
    ];
  }

  getDaysAgo(dateString: string): number {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  stats: any[] = [];
  recentCandidates: any[] = [];
  activeJobs: any[] = [];
  pipelineStages: any[] = [];
  loading = true;
  refreshInterval: any;

  // Client invitation modal
  showInviteModal = false;
  isInviting = false;
  showSuccessToast = false;
  showErrorToast = false;
  inviteData = {
    companyName: '',
    contactPerson: '',
    email: ''
  };

  quickActions = [
    { icon: '➕', label: 'Post New Job', action: () => this.navigateToJobs(), primary: true },
    { icon: '👤', label: 'Invite Client User', action: () => this.openInviteClientModal(), primary: true },
    { icon: '👥', label: 'View Candidates', action: () => this.router.navigate(['/candidates']) },
    { icon: '📋', label: 'View Applications', action: () => this.router.navigate(['/applications']) },
    { icon: '🏢', label: 'Manage Clients', action: () => this.router.navigate(['/clients']) },
    { icon: '⚙️', label: 'Settings', action: () => this.router.navigate(['/settings']) }
  ];

  navigateToJobs() {
    this.router.navigate(['/jobs']);
  }

  executeAction(action: () => void) {
    action();
  }

  openInviteClientModal() {
    this.showInviteModal = true;
    this.inviteData = {
      companyName: '',
      contactPerson: '',
      email: ''
    };
  }

  closeInviteModal() {
    this.showInviteModal = false;
    this.inviteData = {
      companyName: '',
      contactPerson: '',
      email: ''
    };
  }

  sendInvitation() {
    if (!this.inviteData.companyName || !this.inviteData.contactPerson || !this.inviteData.email) {
      this.showError('Please fill in all required fields');
      return;
    }

    this.isInviting = true;
    
    this.clientService.inviteClient(this.inviteData).subscribe({
      next: (response) => {
        this.isInviting = false;
        this.closeInviteModal();
        this.showSuccess('Client invitation sent successfully!');
      },
      error: (error) => {
        this.isInviting = false;
        console.error('Error sending invitation:', error);
        this.showError('Failed to send invitation. Please try again.');
      }
    });
  }

  showSuccess(message: string) {
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000);
  }

  showError(message: string) {
    this.showErrorToast = true;
    setTimeout(() => {
      this.showErrorToast = false;
    }, 3000);
  }
}
