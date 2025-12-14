import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { TenantService } from '../../core/services/tenant.service';
import { UserService } from '../../core/services/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-platform-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MainLayoutComponent],
  templateUrl: './platform-admin-dashboard.component.html',
  styleUrls: ['./platform-admin-dashboard.component.scss']
})
export class PlatformAdminDashboardComponent implements OnInit {
  
  constructor(
    private router: Router,
    private tenantService: TenantService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }
  stats: any[] = [];
  recentTenants: any[] = [];
  systemAlerts: any[] = [];
  recentActivity: any[] = [];
  loading = true;

  loadDashboardData() {
    this.loading = true;
    
    // Set default stats first
    this.setDefaultStats();
    
    forkJoin({
      tenants: this.tenantService.getAllTenants(0, 100),
      users: this.userService.getAllUsers(0, 100),
      invoices: this.tenantService.getInvoices(undefined, 0, 100)
    }).subscribe({
      next: ({ tenants, users, invoices }) => {
        console.log('=== RAW API RESPONSES ===');
        console.log('Tenants response:', JSON.stringify(tenants, null, 2));
        console.log('Users response:', JSON.stringify(users, null, 2));
        console.log('Invoices response:', JSON.stringify(invoices, null, 2));
        
        // Check data structure
        const tenantsData = tenants?.content || tenants || [];
        const usersData = users?.content || users || [];
        const invoicesData = invoices?.content || invoices || [];
        
        console.log('=== PROCESSED DATA ===');
        console.log('Tenants array:', tenantsData);
        console.log('Tenants length:', tenantsData.length);
        console.log('Users array:', usersData);
        console.log('Users length:', usersData.length);
        console.log('Invoices array:', invoicesData);
        console.log('Invoices length:', invoicesData.length);
        
        // Check if arrays are actually arrays
        console.log('Tenants is array?', Array.isArray(tenantsData));
        console.log('Users is array?', Array.isArray(usersData));
        console.log('Invoices is array?', Array.isArray(invoicesData));
        
        this.calculateStats(tenants, users, invoices);
        this.loadRecentTenants(tenants);
        this.loadSystemAlerts();
        this.loadRecentActivity(tenants, invoices);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load dashboard data:', err);
        // Keep default stats on error
        this.loadSystemAlerts();
        this.loading = false;
      }
    });
  }

  setDefaultStats() {
    this.stats = [
      { label: 'Total Tenants', value: '0', trend: '', icon: '🏢' },
      { label: 'Active Users', value: '0', trend: '', icon: '👥' },
      { label: 'Monthly Revenue', value: '$0', trend: '', icon: '💰' },
      { label: 'System Health', value: '99.9%', trend: '', icon: '✅' },
      { label: 'Total Invoices', value: '0', trend: '', icon: '📄' },
      { label: 'Active Tenants', value: '0', trend: '', icon: '💾' }
    ];
  }

  calculateStats(tenants: any, users: any, invoices: any) {
    const tenantsData = tenants.content || tenants;
    const usersData = users.content || users;
    const invoicesData = invoices.content || invoices;

    // Calculate monthly revenue from paid invoices
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    
    const monthlyRevenue = invoicesData
      .filter((inv: any) => {
        const paidDate = inv.paidDate ? new Date(inv.paidDate) : null;
        return inv.status === 'PAID' && paidDate && 
               paidDate.getMonth() === thisMonth && 
               paidDate.getFullYear() === thisYear;
      })
      .reduce((sum: number, inv: any) => sum + (inv.amount || 0), 0);

    // Active users count
    const activeUsers = usersData.filter((user: any) => user.status === 'ACTIVE').length;

    this.stats = [
      { label: 'Total Tenants', value: tenantsData.length.toString(), trend: '', icon: '🏢' },
      { label: 'Active Users', value: activeUsers.toString(), trend: '', icon: '👥' },
      { label: 'Monthly Revenue', value: `$${monthlyRevenue.toLocaleString()}`, trend: '', icon: '💰' },
      { label: 'System Health', value: '99.9%', trend: '', icon: '✅' },
      { label: 'Total Invoices', value: invoicesData.length.toString(), trend: '', icon: '📄' },
      { label: 'Active Tenants', value: tenantsData.filter((t: any) => t.status === 'ACTIVE').length.toString(), trend: '', icon: '💾' }
    ];
  }

  loadRecentTenants(tenants: any) {
    const tenantsData = tenants.content || tenants;
    this.recentTenants = tenantsData
      .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
      .map((tenant: any) => ({
        id: tenant.id,
        name: tenant.name,
        plan: tenant.plan || 'Professional',
        users: tenant.userCount || 0,
        status: tenant.status || 'Active',
        created: tenant.createdAt
      }));
  }

  loadSystemAlerts() {
    // For now, show basic system alerts - can be enhanced with real monitoring data
    this.systemAlerts = [
      { type: 'info', message: 'System running normally', time: 'Just now' },
      { type: 'info', message: 'Daily backup completed successfully', time: '1 hour ago' }
    ];
  }

  loadRecentActivity(tenants: any, invoices: any) {
    const tenantsData = tenants.content || tenants;
    const invoicesData = invoices.content || invoices;
    
    const activities: any[] = [];
    
    // Recent tenant creations
    tenantsData
      .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3)
      .forEach((tenant: any) => {
        activities.push({
          action: 'Tenant Created',
          details: `${tenant.name} - ${tenant.plan || 'Professional'} Plan`,
          time: this.getTimeAgo(tenant.createdAt),
          icon: '🏢'
        });
      });
    
    // Recent payments
    invoicesData
      .filter((inv: any) => inv.status === 'PAID')
      .sort((a: any, b: any) => new Date(b.paidDate || b.createdAt).getTime() - new Date(a.paidDate || a.createdAt).getTime())
      .slice(0, 2)
      .forEach((invoice: any) => {
        activities.push({
          action: 'Payment Received',
          details: `$${invoice.amount} from ${invoice.tenantName}`,
          time: this.getTimeAgo(invoice.paidDate || invoice.createdAt),
          icon: '💳'
        });
      });
    
    this.recentActivity = activities
      .sort((a, b) => this.parseTimeAgo(a.time) - this.parseTimeAgo(b.time))
      .slice(0, 4);
  }

  getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

  parseTimeAgo(timeStr: string): number {
    if (timeStr === 'Just now') return 0;
    const match = timeStr.match(/(\d+)\s+(hour|day)/);
    if (match) {
      const num = parseInt(match[1]);
      const unit = match[2];
      return unit === 'day' ? num * 24 : num;
    }
    return 999;
  }

  quickActions = [
    { icon: '🏢', label: 'Manage Tenants', action: 'tenants' },
    { icon: '💳', label: 'Billing Overview', action: 'billing' },
    { icon: '⚙️', label: 'System Health', action: 'system' },
    { icon: '👥', label: 'User Management', action: 'users' },
    { icon: '🔔', label: 'Send Announcement', action: 'announcement' }
  ];

  getAlertIcon(type: string): string {
    switch(type) {
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'error': return '❌';
      default: return '📢';
    }
  }

  executeAction(action: any) {
    switch(action.action) {
      case 'tenants':
        this.router.navigate(['/platform-admin/tenants']);
        break;
      case 'billing':
        this.router.navigate(['/platform-admin/billing']);
        break;
      case 'system':
        this.router.navigate(['/platform-admin/system']);
        break;

      case 'users':
        this.showUserManagement();
        break;
      case 'announcement':
        this.showAnnouncementModal();
        break;
    }
  }



  showUserManagement() {
    this.router.navigate(['/platform-admin/users']);
  }

  showAnnouncementModal() {
    // Show announcement modal (to be implemented)
    console.log('Send Announcement - Platform-wide notifications to all tenants');
  }
}
