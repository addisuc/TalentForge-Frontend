import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="dashboard-page">
      <div class="content">
        <div class="page-header">
          <div>
            <h1>Billing Dashboard</h1>
            <p class="page-subtitle">Financial Operations & Revenue Management</p>
          </div>
          <div class="header-actions">
            <button class="btn-secondary" (click)="showInvoiceModal = true">Generate Invoice</button>
            <button class="btn-primary">Export Report</button>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of stats">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-change" [class.positive]="stat.change > 0">
              {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="card">
            <div class="card-header">
              <h3>Recent Transactions</h3>
              <a routerLink="/platform-admin/billing">View All</a>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let transaction of transactions">
                <div class="info">
                  <div class="name">{{ transaction.description }}</div>
                  <div class="meta">{{ transaction.tenant }} • {{ transaction.date }}</div>
                </div>
                <div class="amount" [class.positive]="transaction.amount > 0">
                  {{ transaction.amount > 0 ? '+' : '' }}\${{ transaction.amount }}
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Active Subscriptions</h3>
              <a routerLink="/platform-admin/billing">Manage</a>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let sub of subscriptions">
                <div class="info">
                  <div class="name">{{ sub.tenant }}</div>
                  <div class="meta">{{ sub.plan }} • \${{ sub.amount }}/mo</div>
                </div>
                <div class="badge" [class]="sub.status">{{ sub.status }}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Pending Payments</h3>
              <button class="btn-link">Send Reminders</button>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let payment of pendingPayments">
                <div class="info">
                  <div class="name">{{ payment.tenant }}</div>
                  <div class="meta">Due {{ payment.dueDate }}</div>
                </div>
                <div class="amount pending">\${{ payment.amount }}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3>Commission Payouts</h3>
              <button class="btn-link">Process Payouts</button>
            </div>
            <div class="list">
              <div class="list-item" *ngFor="let payout of payouts">
                <div class="info">
                  <div class="name">{{ payout.tenant }}</div>
                  <div class="meta">{{ payout.placements }} placements</div>
                </div>
                <div class="amount positive">\${{ payout.amount }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-overlay" *ngIf="showInvoiceModal" (click)="showInvoiceModal = false">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>Generate Invoice</h2>
            <button class="close-btn" (click)="showInvoiceModal = false">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Select Tenant</label>
              <select [(ngModel)]="selectedTenant" class="form-control">
                <option value="">Choose tenant...</option>
                <option value="Acme Corp">Acme Corp</option>
                <option value="Tech Solutions">Tech Solutions</option>
                <option value="StartupXYZ">StartupXYZ</option>
              </select>
            </div>
            <div class="form-group">
              <label>Billing Period</label>
              <select [(ngModel)]="billingPeriod" class="form-control">
                <option value="current">Current Month</option>
                <option value="previous">Previous Month</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <div class="form-group">
              <label>Invoice Type</label>
              <select [(ngModel)]="invoiceType" class="form-control">
                <option value="subscription">Subscription</option>
                <option value="commission">Commission</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <div class="form-group">
              <label>Notes (Optional)</label>
              <textarea [(ngModel)]="invoiceNotes" class="form-control" rows="3" placeholder="Add any notes..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" (click)="showInvoiceModal = false">Cancel</button>
            <button class="btn-primary" [disabled]="!selectedTenant">Generate Invoice</button>
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
    .header-actions { display: flex; gap: 12px; }
    .btn-primary { background: #0066ff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-primary:hover { background: #0052cc; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-secondary:hover { background: #f0f7ff; }
    .btn-link { background: none; border: none; color: #0066ff; font-size: 0.875rem; font-weight: 600; cursor: pointer; padding: 0; }
    .btn-link:hover { text-decoration: underline; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
    .stat-card { background: white; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; }
    .stat-icon { font-size: 2rem; margin-bottom: 12px; }
    .stat-value { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .stat-label { color: #64748b; font-size: 0.875rem; margin-bottom: 8px; }
    .stat-change { font-size: 0.875rem; font-weight: 600; }
    .stat-change.positive { color: #10b981; }
    .dashboard-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .card { background: white; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px; }
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .card-header h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0; }
    .card-header a { color: #0066ff; text-decoration: none; font-size: 0.875rem; font-weight: 600; }
    .list { display: flex; flex-direction: column; gap: 12px; }
    .list-item { display: flex; align-items: center; justify-content: space-between; padding: 12px; border-radius: 8px; }
    .list-item:hover { background: #f8fafc; }
    .info { flex: 1; }
    .name { font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 0.875rem; }
    .meta { font-size: 0.75rem; color: #64748b; }
    .amount { font-weight: 700; font-size: 1rem; color: #0f172a; }
    .amount.positive { color: #10b981; }
    .amount.pending { color: #f59e0b; }
    .badge { padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
    .badge.active { background: #d1fae5; color: #065f46; }
    .badge.pending { background: #fef3c7; color: #92400e; }
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { background: white; border-radius: 12px; width: 90%; max-width: 500px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px; border-bottom: 1px solid #e2e8f0; }
    .modal-header h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }
    .close-btn { background: none; border: none; font-size: 1.5rem; color: #64748b; cursor: pointer; padding: 0; width: 32px; height: 32px; }
    .close-btn:hover { color: #0f172a; }
    .modal-body { padding: 24px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-weight: 600; color: #0f172a; margin-bottom: 8px; font-size: 0.875rem; }
    .form-control { width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; box-sizing: border-box; }
    .form-control:focus { outline: none; border-color: #0066ff; }
    textarea.form-control { resize: vertical; font-family: inherit; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 24px; border-top: 1px solid #e2e8f0; }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    @media (max-width: 1024px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .dashboard-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class BillingDashboardComponent {
  showInvoiceModal = false;
  selectedTenant = '';
  billingPeriod = 'current';
  invoiceType = 'subscription';
  invoiceNotes = '';

  stats = [
    { icon: '💰', value: '$45,230', label: 'Monthly Revenue', change: 12 },
    { icon: '📊', value: '156', label: 'Active Subscriptions', change: 8 },
    { icon: '💳', value: '$12,450', label: 'Pending Payments', change: -5 },
    { icon: '📈', value: '$8,920', label: 'Commission Payouts', change: 23 }
  ];

  transactions = [
    { description: 'Subscription Payment', tenant: 'Acme Corp', date: 'Today', amount: 299 },
    { description: 'Refund Processed', tenant: 'Tech Solutions', date: 'Yesterday', amount: -150 },
    { description: 'Subscription Payment', tenant: 'StartupXYZ', date: '2 days ago', amount: 499 }
  ];

  subscriptions = [
    { tenant: 'Acme Corp', plan: 'Enterprise', amount: 299, status: 'active' },
    { tenant: 'Tech Solutions', plan: 'Professional', amount: 199, status: 'active' },
    { tenant: 'StartupXYZ', plan: 'Starter', amount: 99, status: 'pending' }
  ];

  pendingPayments = [
    { tenant: 'Global Recruiting', dueDate: 'Tomorrow', amount: 299 },
    { tenant: 'HR Partners', dueDate: 'In 3 days', amount: 199 }
  ];

  payouts = [
    { tenant: 'Acme Corp', placements: 5, amount: 2500 },
    { tenant: 'Tech Solutions', placements: 3, amount: 1500 }
  ];
}
