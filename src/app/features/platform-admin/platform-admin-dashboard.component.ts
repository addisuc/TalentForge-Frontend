import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-platform-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './platform-admin-dashboard.component.html',
  styleUrls: ['./platform-admin-dashboard.component.scss']
})
export class PlatformAdminDashboardComponent {
  stats = [
    { label: 'Total Tenants', value: '156', trend: '+12', icon: '🏢' },
    { label: 'Active Users', value: '4,523', trend: '+234', icon: '👥' },
    { label: 'Monthly Revenue', value: '$125K', trend: '+18%', icon: '💰' },
    { label: 'System Health', value: '99.9%', trend: '+0.1%', icon: '✅' }
  ];

  recentTenants = [
    { id: 1, name: 'TechCorp Recruiting', plan: 'Enterprise', users: 45, status: 'Active', created: '2024-01-15' },
    { id: 2, name: 'Global Staffing Inc', plan: 'Professional', users: 23, status: 'Active', created: '2024-01-18' },
    { id: 3, name: 'HR Solutions Ltd', plan: 'Starter', users: 8, status: 'Trial', created: '2024-01-20' }
  ];

  systemAlerts = [
    { type: 'warning', message: 'High API usage detected for tenant: TechCorp', time: '10 mins ago' },
    { type: 'info', message: 'New tenant signup: HR Solutions Ltd', time: '2 hours ago' }
  ];

  quickActions = [
    { icon: '➕', label: 'Add Tenant' },
    { icon: '⏸️', label: 'Suspend Tenant' },
    { icon: '📧', label: 'Send Message' },
    { icon: '📊', label: 'View Reports' },
    { icon: '⚙️', label: 'System Settings' },
    { icon: '🔔', label: 'Announcements' }
  ];
}
