import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-page">
      <div class="content">
        <div class="page-header">
          <div>
            <h1>Dashboard</h1>
            <p class="page-subtitle">Organization Overview</p>
          </div>
          <button class="btn-primary" routerLink="/admin/invite-user">+ Invite User</button>
        </div>

        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of stats">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="card">
            <div class="card-header">
              <h3>Team Members</h3>
              <a routerLink="/users">Manage</a>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let member of teamMembers">
                <div class="avatar">{{ member.initials }}</div>
                <div class="info">
                  <div class="name">{{ member.name }}</div>
                  <div class="meta">{{ member.role }}</div>
                </div>
                <div class="badge active">Active</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Subscription</h3>
            </div>
            <div class="subscription">
              <div class="plan">Professional Plan</div>
              <div class="price">$299/month</div>
              <div class="usage-bar">
                <div class="fill" style="width: 68%"></div>
              </div>
              <div class="usage">34 of 50 users</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let activity of activities">
                <span class="icon">{{ activity.icon }}</span>
                <div class="info">
                  <div class="name">{{ activity.text }}</div>
                  <div class="meta">{{ activity.time }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div class="actions">
              <button class="action" routerLink="/admin/invite-user">
                <span>➕</span> Invite User
              </button>
              <button class="action" routerLink="/users">
                <span>👥</span> Manage Team
              </button>
              <button class="action" routerLink="/settings">
                <span>⚙️</span> Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page { font-family: 'Inter', sans-serif; }
    .content { padding: 32px; }
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
    h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; }
    .page-subtitle { color: #64748b; font-size: 0.875rem; margin: 0; }
    .btn-primary { background: #0066ff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-primary:hover { background: #0052cc; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
    .stat-card { background: white; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; }
    .stat-icon { font-size: 2rem; margin-bottom: 12px; }
    .stat-value { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .stat-label { color: #64748b; font-size: 0.875rem; }
    .dashboard-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .card { background: white; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px; }
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .card-header h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0; }
    .card-header a { color: #0066ff; text-decoration: none; font-size: 0.875rem; font-weight: 600; }
    .list { display: flex; flex-direction: column; gap: 12px; }
    .list-item { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; }
    .list-item:hover { background: #f8fafc; }
    .avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.875rem; }
    .icon { font-size: 1.25rem; }
    .info { flex: 1; }
    .name { font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 0.875rem; }
    .meta { font-size: 0.75rem; color: #64748b; }
    .badge { padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
    .badge.active { background: #d1fae5; color: #065f46; }
    .subscription { text-align: center; }
    .plan { font-weight: 700; font-size: 1.125rem; color: #0f172a; margin-bottom: 8px; }
    .price { color: #0066ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; }
    .usage-bar { height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
    .fill { height: 100%; background: #0066ff; }
    .usage { font-size: 0.875rem; color: #64748b; }
    .actions { display: flex; flex-direction: column; gap: 8px; }
    .action { display: flex; align-items: center; gap: 8px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-weight: 600; color: #0f172a; text-align: left; }
    .action:hover { background: #e2e8f0; }
    @media (max-width: 1024px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .dashboard-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AdminDashboardComponent {
  stats = [
    { icon: '👥', value: '24', label: 'Team Members' },
    { icon: '💼', value: '45', label: 'Active Jobs' },
    { icon: '📊', value: '1,234', label: 'Total Candidates' },
    { icon: '✅', value: '23', label: 'Placements' }
  ];

  teamMembers = [
    { name: 'Alice Johnson', role: 'Recruiter', initials: 'AJ' },
    { name: 'Bob Smith', role: 'Recruiter', initials: 'BS' },
    { name: 'Carol White', role: 'Recruiter', initials: 'CW' }
  ];

  activities = [
    { icon: '👤', text: 'New user invited', time: '2 hours ago' },
    { icon: '💼', text: 'Job posted', time: '5 hours ago' },
    { icon: '⚙️', text: 'Settings updated', time: '1 day ago' }
  ];
}
