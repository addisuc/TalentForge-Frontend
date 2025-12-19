import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { TenantService } from '../../core/services/tenant.service';
import { Tenant, CreateTenantRequest } from '../../core/models/tenant.model';
import { ToastService } from '../../shared/components/toast/toast.service';

@Component({
  selector: 'app-tenants-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './tenants-manage.component.html',
  styleUrls: ['./tenants-manage.component.scss']
})
export class TenantsManageComponent implements OnInit {
  tenants: Tenant[] = [];
  loading = false;
  showAddModal = false;
  showDetailsModal = false;
  showDeleteModal = false;
  showEditModal = false;
  showMessageModal = false;
  showUsersModal = false;
  selectedTenant: Tenant | null = null;
  tenantToDelete: Tenant | null = null;
  editTenantForm!: FormGroup;
  addTenantForm!: FormGroup;
  messageForm!: FormGroup;
  tenantUsers: any[] = [];
  Math = Math;
  
  searchQuery = '';
  selectedPlan = 'all';
  selectedStatus = 'all';
  currentPage = 0;
  itemsPerPage = 25;
  totalElements = 0;

  plans = [
    { value: 'Starter', label: 'Starter - $500/month', price: 500 },
    { value: 'Professional', label: 'Professional - $1,200/month', price: 1200 },
    { value: 'Enterprise', label: 'Enterprise - $2,500/month', price: 2500 }
  ];

  constructor(
    private tenantService: TenantService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadTenants();
  }

  initForm(): void {
    this.addTenantForm = this.fb.group({
      name: ['', Validators.required],
      subdomain: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      plan: ['Professional', Validators.required],
      adminEmail: ['', [Validators.required, Validators.email]],
      adminFirstName: ['', Validators.required],
      adminLastName: ['', Validators.required]
    });

    this.editTenantForm = this.fb.group({
      name: ['', Validators.required],
      subdomain: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      plan: ['', Validators.required]
    });

    this.messageForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required],
      priority: ['normal']
    });
  }

  loadTenants(): void {
    this.loading = true;
    this.tenantService.getAllTenants(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.tenants = response.content || response;
        this.totalElements = response.totalElements || this.tenants.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.addTenantForm.reset({ plan: 'Professional' });
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addTenant(): void {
    if (this.addTenantForm.invalid) {
      Object.keys(this.addTenantForm.controls).forEach(key => {
        this.addTenantForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const request: CreateTenantRequest = this.addTenantForm.value;
    
    this.tenantService.createTenant(request).subscribe({
      next: (newTenant) => {
        this.tenants.unshift(newTenant);
        this.totalElements++;
        this.loading = false;
        this.closeAddModal();
      },
      error: (err) => {
        console.error('Error creating tenant:', err);
        let userFriendlyMsg = 'Failed to create tenant. Please try again.';
        
        if (err.status === 400) {
          userFriendlyMsg = 'Invalid tenant information. Please check your inputs.';
        } else if (err.status === 409) {
          userFriendlyMsg = 'A tenant with this name or subdomain already exists.';
        } else if (err.status === 500) {
          userFriendlyMsg = 'Server error. Please contact support if this persists.';
        } else if (err.error?.message && !err.error.message.includes('SQL') && !err.error.message.includes('column')) {
          userFriendlyMsg = err.error.message;
        }
        
        this.toastService.error(userFriendlyMsg);
        this.loading = false;
      }
    });
  }

  viewDetails(tenant: Tenant): void {
    this.selectedTenant = tenant;
    this.showDetailsModal = true;
  }

  closeDetailsModal(): void {
    this.showDetailsModal = false;
    this.selectedTenant = null;
  }

  suspendTenant(tenant: Tenant): void {
    if (confirm(`Suspend ${tenant.name}? Users will lose access immediately.`)) {
      this.tenantService.suspendTenant(tenant.id).subscribe({
        next: () => this.loadTenants()
      });
    }
  }

  activateTenant(tenant: Tenant): void {
    this.tenantService.activateTenant(tenant.id).subscribe({
      next: () => this.loadTenants()
    });
  }

  deleteTenant(tenant: Tenant): void {
    this.tenantToDelete = tenant;
    this.showDeleteModal = true;
  }

  confirmDelete(): void {
    if (this.tenantToDelete) {
      this.tenantService.deleteTenant(this.tenantToDelete.id).subscribe({
        next: () => {
          this.loadTenants();
          this.closeDeleteModal();
        }
      });
    }
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.tenantToDelete = null;
  }

  openEditModal(tenant: Tenant): void {
    this.selectedTenant = tenant;
    this.editTenantForm.patchValue({
      name: tenant.name,
      subdomain: tenant.subdomain,
      plan: tenant.plan
    });
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedTenant = null;
  }

  updateTenant(): void {
    if (this.editTenantForm.invalid || !this.selectedTenant) return;

    this.loading = true;
    const updates = this.editTenantForm.value;
    
    this.tenantService.updateTenant(this.selectedTenant.id, updates).subscribe({
      next: (updatedTenant) => {
        const index = this.tenants.findIndex(t => t.id === updatedTenant.id);
        if (index !== -1) {
          this.tenants[index] = updatedTenant;
        }
        this.loading = false;
        this.closeEditModal();
      },
      error: (err) => {
        console.error('Error updating tenant:', err);
        let userFriendlyMsg = 'Failed to update tenant. Please try again.';
        
        if (err.status === 400) {
          userFriendlyMsg = 'Invalid tenant information. Please check your inputs.';
        } else if (err.status === 404) {
          userFriendlyMsg = 'Tenant not found.';
        } else if (err.status === 500) {
          userFriendlyMsg = 'Server error. Please contact support if this persists.';
        } else if (err.error?.message && !err.error.message.includes('SQL') && !err.error.message.includes('column')) {
          userFriendlyMsg = err.error.message;
        }
        
        this.toastService.error(userFriendlyMsg);
        this.loading = false;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadTenants();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadTenants();
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 0;
    this.loadTenants();
  }

  // Non-billing actions
  sendMessage(tenant: Tenant): void {
    this.selectedTenant = tenant;
    this.messageForm.reset({ priority: 'normal' });
    this.showMessageModal = true;
  }

  closeMessageModal(): void {
    this.showMessageModal = false;
    this.selectedTenant = null;
  }

  sendTenantMessage(): void {
    if (this.messageForm.invalid || !this.selectedTenant) return;
    
    const messageData = {
      ...this.messageForm.value,
      tenantId: this.selectedTenant.id,
      recipientEmail: this.selectedTenant.adminEmail
    };
    
    // TODO: Implement message service
    console.log('Sending message:', messageData);
    this.toastService.success('Message sent successfully!');
    this.closeMessageModal();
  }

  viewUsers(tenant: Tenant): void {
    this.selectedTenant = tenant;
    this.loadTenantUsers(tenant.id);
    this.showUsersModal = true;
  }

  closeUsersModal(): void {
    this.showUsersModal = false;
    this.selectedTenant = null;
    this.tenantUsers = [];
  }

  loadTenantUsers(tenantId: string): void {
    // TODO: Implement user service call
    this.tenantUsers = [
      { name: 'John Admin', email: 'admin@company.com', role: 'TENANT_ADMIN', status: 'Active' },
      { name: 'Jane Recruiter', email: 'jane@company.com', role: 'RECRUITER', status: 'Active' }
    ];
  }

  exportData(tenant: Tenant): void {
    const data = {
      tenant: tenant,
      exportDate: new Date().toISOString(),
      users: this.tenantUsers.length || tenant.users,
      jobs: tenant.jobs
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tenant.subdomain}-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  }
}
