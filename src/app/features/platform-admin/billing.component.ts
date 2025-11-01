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
  showRefundsModal = false;
  showRejectModal = false;
  pendingRefunds: any[] = [];
  pendingRefundsCount = 0;
  selectedRefund: any = null;
  rejectionReason = '';
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
  sortField = 'invoiceNumber';
  sortDirection: 'asc' | 'desc' = 'desc';

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
    this.loadPendingRefunds(); // Always load for testing
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
    let invoices$ = this.tenantService.getInvoices(undefined, this.currentPage, this.itemsPerPage);
    
    invoices$.subscribe({
      next: (response) => {
        let invoices = response.content || response;
        
        // Apply filters
        invoices = this.applyFilters(invoices);
        
        // Apply sorting
        invoices = this.applySorting(invoices);
        
        this.invoices = invoices;
        this.totalElements = invoices.length;
        this.calculateStats();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load invoices:', err);
        this.loading = false;
      }
    });
  }

  applyFilters(invoices: Invoice[]): Invoice[] {
    let filtered = [...invoices];
    
    // Search filter
    if (this.searchTenant) {
      const search = this.searchTenant.toLowerCase();
      filtered = filtered.filter(inv => 
        inv.tenantName?.toLowerCase().includes(search) ||
        inv.invoiceNumber?.toLowerCase().includes(search) ||
        inv.status?.toLowerCase().includes(search)
      );
    }
    
    // Status filter
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(inv => inv.status === this.selectedStatus.toUpperCase());
    }
    
    // Period filter
    if (this.selectedPeriod !== 'all') {
      const now = new Date();
      let startDate: Date;
      let endDate: Date | null = null;
      
      if (this.selectedPeriod === '7') {
        startDate = new Date();
        startDate.setDate(now.getDate() - 7);
      } else if (this.selectedPeriod === '30') {
        startDate = new Date();
        startDate.setDate(now.getDate() - 30);
      } else if (this.selectedPeriod === '90') {
        startDate = new Date();
        startDate.setDate(now.getDate() - 90);
      } else if (this.selectedPeriod === '365') {
        startDate = new Date();
        startDate.setFullYear(now.getFullYear() - 1);
      } else if (this.selectedPeriod.startsWith('Q')) {
        const quarter = parseInt(this.selectedPeriod.substring(1));
        const year = now.getFullYear();
        const startMonth = (quarter - 1) * 3;
        const endMonth = startMonth + 3;
        
        startDate = new Date(year, startMonth, 1);
        endDate = new Date(year, endMonth, 0, 23, 59, 59);
      } else {
        return filtered;
      }
      
      filtered = filtered.filter(inv => {
        const createdDate = new Date(inv.createdAt);
        if (endDate) {
          return createdDate >= startDate && createdDate <= endDate;
        }
        return createdDate >= startDate;
      });
    }
    
    return filtered;
  }

  applySorting(invoices: Invoice[]): Invoice[] {
    return invoices.sort((a, b) => {
      let aValue: any = a[this.sortField as keyof Invoice];
      let bValue: any = b[this.sortField as keyof Invoice];
      
      // Handle dates
      if (this.sortField === 'dueDate' || this.sortField === 'paidDate' || this.sortField === 'createdAt') {
        aValue = aValue ? new Date(aValue).getTime() : 0;
        bValue = bValue ? new Date(bValue).getTime() : 0;
      }
      
      // Handle numbers
      if (this.sortField === 'amount') {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
      }
      
      // Handle strings
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue?.toLowerCase() || '';
      }
      
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  sortBy(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.loadInvoices();
  }

  onFilterChange(): void {
    this.currentPage = 0;
    this.loadInvoices();
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
            this.loadPendingRefunds();
          },
          error: () => this.showNotification('Failed to process refund', 'error')
        });
      }
    );
  }

  downloadInvoice(invoice: Invoice): void {
    this.showNotification('PDF generation coming soon', 'error');
  }

  sendInvoice(invoice: Invoice): void {
    this.closeInvoiceModal();
    this.showConfirmation(
      invoice.status === 'SENT' ? 'Resend Invoice' : 'Send Invoice',
      `Send invoice to ${invoice.tenantName}?`,
      () => {
        this.tenantService.sendInvoice(invoice.id).subscribe({
          next: () => {
            this.showNotification('Invoice sent successfully', 'success');
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to send invoice', 'error')
        });
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
    
    if (this.selectedInvoice) {
      // Update existing invoice
      this.tenantService.updateInvoice(this.selectedInvoice.id, { amount: this.newInvoice.amount }).subscribe({
        next: () => {
          this.showNotification('Invoice updated successfully', 'success');
          this.closeInvoiceModal();
          this.loadInvoices();
        },
        error: () => this.showNotification('Failed to update invoice', 'error')
      });
    } else {
      // Create new invoice
      this.tenantService.createManualInvoice(this.newInvoice).subscribe({
        next: () => {
          this.showNotification('Invoice created successfully', 'success');
          this.closeInvoiceModal();
          this.loadInvoices();
        },
        error: () => this.showNotification('Failed to create invoice', 'error')
      });
    }
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
    if (invoice.status !== 'DRAFT') {
      this.showNotification('Only DRAFT invoices can be edited', 'error');
      return;
    }
    this.selectedInvoice = invoice;
    this.newInvoice = {
      tenantId: invoice.tenantId,
      amount: invoice.amount,
      currency: invoice.currency,
      dueDate: invoice.dueDate,
      description: ''
    };
    this.showInvoiceModal = true;
  }

  markAsPaid(invoice: Invoice): void {
    this.closeInvoiceModal();
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

  loadPendingRefunds(): void {
    this.tenantService.getPendingRefunds().subscribe({
      next: (refunds) => {
        console.log('Pending refunds loaded:', refunds);
        this.pendingRefunds = refunds;
        this.pendingRefundsCount = refunds.length;
        console.log('Pending refunds count:', this.pendingRefundsCount);
      },
      error: (err) => {
        console.error('Failed to load pending refunds:', err);
        this.showNotification('Failed to load pending refunds', 'error');
      }
    });
  }

  viewPendingRefunds(): void {
    this.loadPendingRefunds();
    this.showRefundsModal = true;
  }

  closeRefundsModal(): void {
    this.showRefundsModal = false;
  }

  approveRefund(refund: any): void {
    this.showConfirmation(
      'Approve Refund',
      `Approve refund of $${refund.amount} for ${refund.creditNoteNumber}? This will process the refund immediately.`,
      () => {
        this.tenantService.approveRefund(refund.id).subscribe({
          next: () => {
            this.showNotification('Refund approved and processed', 'success');
            this.loadPendingRefunds();
            this.loadInvoices();
          },
          error: () => this.showNotification('Failed to approve refund', 'error')
        });
      }
    );
  }

  rejectRefund(refund: any): void {
    this.selectedRefund = refund;
    this.rejectionReason = '';
    this.showRejectModal = true;
  }

  closeRejectModal(): void {
    this.showRejectModal = false;
    this.selectedRefund = null;
    this.rejectionReason = '';
  }

  confirmRejectRefund(): void {
    if (!this.rejectionReason) {
      this.showNotification('Please provide a rejection reason', 'error');
      return;
    }

    this.tenantService.rejectRefund(this.selectedRefund.id, this.rejectionReason).subscribe({
      next: () => {
        this.showNotification('Refund rejected', 'success');
        this.closeRejectModal();
        this.loadPendingRefunds();
      },
      error: () => this.showNotification('Failed to reject refund', 'error')
    });
  }
}
