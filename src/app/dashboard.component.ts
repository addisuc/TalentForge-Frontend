import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthService } from './core/auth/auth.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MainLayoutComponent],
  template: `
    <div class="dashboard-page">
        <div class="content">
          <div class="page-header">
            <div>
              <h1>Dashboard Overview</h1>
              <p class="page-subtitle">Welcome back, {{ userName }}</p>
            </div>
            <button class="btn-primary">+ Post New Job</button>
          </div>

          <div class="stats-grid">
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

          <div class="dashboard-grid">
            <div class="card recent-candidates">
              <div class="card-header">
                <h3>Recent Candidates</h3>
                <a routerLink="/candidates">View All</a>
              </div>
              <div class="candidate-list">
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
            </div>

            <div class="card active-jobs">
              <div class="card-header">
                <h3>Active Job Postings</h3>
                <a routerLink="/jobs">View All</a>
              </div>
              <div class="job-list">
                <div class="job-item" *ngFor="let job of activeJobs">
                  <div class="job-info">
                    <div class="job-title">{{ job.title }}</div>
                    <div class="job-meta">{{ job.applicants }} applicants • {{ job.daysOpen }} days open</div>
                  </div>
                  <div class="job-status">{{ job.status }}</div>
                </div>
              </div>
            </div>

            <div class="card pipeline-overview">
              <div class="card-header">
                <h3>Hiring Pipeline</h3>
                <a routerLink="/pipeline">View Details</a>
              </div>
              <div class="pipeline-stages">
                <div class="stage" *ngFor="let stage of pipelineStages">
                  <div class="stage-count">{{ stage.count }}</div>
                  <div class="stage-name">{{ stage.name }}</div>
                </div>
              </div>
            </div>

            <div class="card quick-actions">
              <div class="card-header">
                <h3>Quick Actions</h3>
              </div>
              <div class="actions-grid">
                <button class="action-btn" *ngFor="let action of quickActions">
                  <span class="action-icon">{{ action.icon }}</span>
                  <span>{{ action.label }}</span>
                </button>
              </div>
            </div>
          </div>
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
      grid-template-columns: repeat(2, 1fr);
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
    }

    .action-btn:hover {
      background: #e2e8f0;
      transform: translateY(-2px);
    }

    .action-icon {
      font-size: 1.25rem;
    }

    @media (max-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  Math = Math;
  userName = 'User';

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.userName = `${user.firstName} ${user.lastName}`;
      }
    });
  }

  stats = [
    { icon: '👥', value: '1,234', label: 'Total Candidates', trend: 12 },
    { icon: '💼', value: '45', label: 'Active Jobs', trend: 8 },
    { icon: '📝', value: '89', label: 'Applications', trend: -5 },
    { icon: '✅', value: '23', label: 'Hired This Month', trend: 15 }
  ];

  recentCandidates = [
    { name: 'Sarah Johnson', role: 'Senior Developer', initials: 'SJ', status: 'interview' },
    { name: 'Michael Chen', role: 'Product Manager', initials: 'MC', status: 'screening' },
    { name: 'Emily Davis', role: 'UX Designer', initials: 'ED', status: 'offer' },
    { name: 'James Wilson', role: 'Data Analyst', initials: 'JW', status: 'screening' }
  ];

  activeJobs = [
    { title: 'Senior Full Stack Developer', applicants: 45, daysOpen: 12, status: 'Active' },
    { title: 'Product Manager', applicants: 32, daysOpen: 8, status: 'Active' },
    { title: 'UX/UI Designer', applicants: 28, daysOpen: 15, status: 'Active' },
    { title: 'DevOps Engineer', applicants: 19, daysOpen: 5, status: 'Active' }
  ];

  pipelineStages = [
    { name: 'Applied', count: 156 },
    { name: 'Screening', count: 89 },
    { name: 'Interview', count: 34 },
    { name: 'Offer', count: 12 }
  ];

  quickActions = [
    { icon: '➕', label: 'Add Candidate' },
    { icon: '📋', label: 'Schedule Interview' },
    { icon: '📧', label: 'Send Email' },
    { icon: '📊', label: 'View Reports' }
  ];
}
