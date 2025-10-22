import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="page-header">
        <div>
          <h1>Subscriptions</h1>
          <p>Manage all tenant subscriptions</p>
        </div>
        <div class="actions">
          <button class="btn-secondary">Create Subscription</button>
          <button class="btn-primary">Export List</button>
        </div>
      </div>
      <div class="filters">
        <input type="text" placeholder="Search tenant..." class="search-input">
        <select class="filter-select">
          <option>All Plans</option>
          <option>Enterprise</option>
          <option>Professional</option>
          <option>Starter</option>
        </select>
        <select class="filter-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
      </div>
      <div class="placeholder-content">
        <p>Subscription management interface will be displayed here</p>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 32px; }
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; }
    p { color: #64748b; margin: 0; }
    .actions { display: flex; gap: 12px; }
    .btn-primary { background: #0066ff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .filters { display: flex; gap: 12px; margin-bottom: 24px; }
    .search-input { flex: 1; padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; }
    .filter-select { padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; }
    .placeholder-content { background: white; padding: 48px; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center; color: #64748b; }
  `]
})
export class BillingSubscriptionsComponent {}
