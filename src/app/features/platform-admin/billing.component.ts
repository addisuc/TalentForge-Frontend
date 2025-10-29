import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TenantService } from '../../core/services/tenant.service';
import { Invoice } from '../../core/models/tenant.model';
import { ConfirmationService } from '../../core/services/confirmation.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  invoices: Invoice[] = [];
  loading = false;
  showInvoiceModal = false;
  selectedInvoice: Invoice | null = null;
  Math = Math;
  
  notification = {
    show: false,
    title: '',
    message: '',
    type: 'success' as 'success' | 'error'
  };

  confirmation = {
    show: false,
    title: '',
    message: '',
    onConfirm: () => {}
  };

  newInvoice = {
    tenantId: '',
    amount: 0,
    currency: 'USD',
    dueDate: '',
    description: ''
  };

  tenants: any[] = [];
  currentTenantName = '';

  searchTenant = '';
  selectedPeriod = '30';
  selectedStatus = 'all';
  currentPage = 0;
  itemsPerPage = 25;
  totalElements = 0;

  stats: any[] = [];

  constructor(
    private tenantService: TenantService,
    private confirmationService: ConfirmationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
    this.loadTenants();
    this.loadCurrentTenant();
  }

  loadCurrentTenant(): void {
    // Not needed - platform roles select tenant from dropdown
  }

  loadTenants(): void {
    this.tenantService.getAllTenants(0, 1000).subscribe({
      next: (response) => {
        this.tenants = response.content || response;
      }
    });
  }

  loadInvoices(): void {
    this.loading = true;
    this.tenantService.getInvoices(undefined, this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.invoices = response.content || response;
        this.totalElements = response.totalElements || this.invoices.length;
        this.calculateStats();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  calculateStats(): void {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();

    // Monthly Revenue (PAID invoices this month)
    const monthlyRevenue = this.invoices
      .filter(inv => {
        const paidDate = inv.paidDate ? new Date(inv.paidDate) : null;
        return inv.status === 'PAID' && paidDate && 
               paidDate.getMonth() === thisMonth && 
               paidDate.getFullYear() === thisYear;
      })
      .reduce((sum, inv) => sum + inv.amount, 0);

    // Active Subscriptions (SENT invoices)
    const activeSubscriptions = this.invoices.filter(inv => inv.status === 'SENT').length;

    // Pending Payments (SENT invoices total)
    const pendingPayments = this.invoices
      .filter(inv => inv.status === 'SENT')
      .reduce((sum, inv) => sum + inv.amount, 0);

    // Total Revenue (all PAID invoices)
    const totalRevenue = this.invoices
      .filter(inv => inv.status === 'PAID')
      .reduce((sum, inv) => sum + inv.amount, 0);

    this.stats = [
      { label: 'Monthly Revenue', value: `$${monthlyRevenue.toFixed(2)}`, trend: '', icon: '💰', color: 'green' },
      { label: 'Active Invoices', value: activeSubscriptions.toString(), trend: '', icon: '📊', color: 'blue' },
      { label: 'Pending Payments', value: `$${pendingPayments.toFixed(2)}`, trend: '', icon: '💳', color: 'red' },
      { label: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, trend: '', icon: '💵', color: 'purple' }
    ];
  }

  viewInvoice(invoice: Invoice): void {
    this.selectedInvoice = invoice;
    this.showInvoiceModal = true;
  }

  closeInvoiceModal(): void {
    this.showInvoiceModal = false;
    this.selectedInvoice = null;
  }

  retryPayment(invoice: Invoice): void {
    this.showConfirmation(
      'Retry Payment',
      `Retry payment for ${invoice.tenantName}?`,
      () => {
        this.tenantService.retryPayment(invoice.id).subscribe({
          next: () => {
            this.showNotification('Payment retry initiated', 'success');
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to retry payment', 'error')
        });
      }
    );
  }

  refundPayment(invoice: Invoice): void {
    this.showConfirmation(
      'Refund Payment',
      `Refund $${invoice.amount} to ${invoice.tenantName}? This action cannot be undone.`,
      () => {
        this.tenantService.refundPayment(invoice.id).subscribe({
          next: () => {
            this.showNotification('Refund processed successfully', 'success');
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to process refund', 'error')
        });
      }
    );
  }

  downloadInvoice(invoice: Invoice): void {
    this.showNotification('Download feature coming soon', 'error');
  }

  sendInvoice(invoice: Invoice): void {
    this.showConfirmation(
      invoice.status === 'SENT' ? 'Resend Invoice' : 'Send Invoice',
      `Send invoice to ${invoice.tenantName}?`,
      () => {
        this.showNotification('Invoice sent successfully', 'success');
        this.loadInvoices();
      }
    );
  }

  createManualInvoice(): void {
    this.selectedInvoice = null;
    this.newInvoice = {
      tenantId: '',
      amount: 0,
      currency: 'USD',
      dueDate: '',
      description: ''
    };
    this.showInvoiceModal = true;
  }

  submitManualInvoice(): void {
    if (this.isPlatformAdmin() && !this.newInvoice.tenantId) {
      this.showNotification('Please select an organization', 'error');
      return;
    }
    if (!this.newInvoice.amount || !this.newInvoice.dueDate) {
      this.showNotification('Please fill all required fields', 'error');
      return;
    }
    
    this.tenantService.createManualInvoice(this.newInvoice).subscribe({
      next: () => {
        this.showNotification('Invoice created successfully', 'success');
        this.closeInvoiceModal();
        this.loadInvoices();
      },
      error: () => this.showNotification('Failed to create invoice', 'error')
    });
  }

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = {
      show: true,
      title: type === 'success' ? 'Success' : 'Error',
      message: message,
      type: type
    };
    setTimeout(() => this.notification.show = false, 3000);
  }

  showConfirmation(title: string, message: string, onConfirm: () => void): void {
    this.confirmation = {
      show: true,
      title: title,
      message: message,
      onConfirm: onConfirm
    };
  }

  confirmAction(): void {
    this.confirmation.onConfirm();
    this.confirmation.show = false;
  }

  cancelConfirmation(): void {
    this.confirmation.show = false;
  }

  isPlatformAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('Current user role:', user.role);
    return user.role === 'PLATFORM_ADMIN' || user.role === 'PLATFORM_SUPER_ADMIN' || user.role === 'BILLING_MANAGER';
  }

  exportReport(): void {
    const csv = this.generateCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `billing-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  }

  editInvoice(invoice: Invoice): void {
    this.showNotification('Edit feature coming soon', 'error');
  }

  markAsPaid(invoice: Invoice): void {
    this.showConfirmation(
      'Mark as Paid',
      `Mark invoice ${invoice.invoiceNumber} as paid?`,
      () => {
        this.tenantService.markInvoiceAsPaid(invoice.id).subscribe({
          next: () => {
            this.showNotification('Invoice marked as paid', 'success');
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to mark invoice as paid', 'error')
        });
      }
    );
  }

  voidInvoice(invoice: Invoice): void {
    this.showConfirmation(
      invoice.status === 'DRAFT' ? 'Void Invoice' : 'Cancel Invoice',
      `${invoice.status === 'DRAFT' ? 'Void' : 'Cancel'} invoice ${invoice.invoiceNumber}? This action cannot be undone.`,
      () => {
        this.tenantService.voidInvoice(invoice.id).subscribe({
          next: () => {
            this.showNotification('Invoice cancelled', 'success');
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to cancel invoice', 'error')
        });
      }
    );
  }

  private generateCSV(): string {
    const headers = ['Invoice #', 'Tenant', 'Amount', 'Due Date', 'Paid Date', 'Status'];
    const rows = this.invoices.map(inv => [
      inv.invoiceNumber,
      inv.tenantName,
      inv.amount,
      inv.dueDate,
      inv.paidDate || 'N/A',
      inv.status
    ]);
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadInvoices();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadInvoices();
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 0;
    this.loadInvoices();
  }
}
