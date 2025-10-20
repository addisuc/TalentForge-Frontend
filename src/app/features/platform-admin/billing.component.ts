import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  selectedPeriod = '30';
  selectedStatus = 'all';

  totalInvoiced = '4,200';
  totalPaid = '3,700';
  totalPending = '500';
  totalFailed = '0';

  currentPage = 1;
  itemsPerPage = 25;

  stats = [
    { label: 'Monthly Revenue', value: '$125,450', trend: '+12%', icon: '💰' },
    { label: 'Active Subscriptions', value: '156', trend: '+8', icon: '📊' },
    { label: 'Churn Rate', value: '2.3%', trend: '-0.5%', icon: '📉' },
    { label: 'Avg Revenue/Tenant', value: '$804', trend: '+5%', icon: '💵' }
  ];

  recentTransactions = [
    { tenant: 'TechCorp Recruiting', plan: 'Enterprise', amount: 2500, date: '2024-01-28', status: 'Paid' },
    { tenant: 'Global Staffing Inc', plan: 'Professional', amount: 1200, date: '2024-01-27', status: 'Paid' },
    { tenant: 'HR Solutions Ltd', plan: 'Starter', amount: 500, date: '2024-01-26', status: 'Pending' }
  ];

  get totalTransactions() {
    return this.recentTransactions.length;
  }

  get totalPages() {
    return Math.ceil(this.totalTransactions / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalTransactions);
  }

  get paginatedTransactions() {
    return this.recentTransactions.slice(this.startIndex, this.endIndex);
  }

  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }
}
