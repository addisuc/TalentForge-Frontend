import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { TenantService } from '../../core/services/tenant.service';
import { Tenant, CreateTenantRequest } from '../../core/models/tenant.model';

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
  selectedTenant: Tenant | null = null;
  tenantToDelete: Tenant | null = null;
  editTenantForm!: FormGroup;
  addTenantForm!: FormGroup;
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
    private fb: FormBuilder
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
        const errorMsg = err.error?.message || err.message || 'Unknown error occurred';
        alert('Error: ' + errorMsg);
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
        alert('Error: ' + (err.error?.message || err.message || 'Failed to update tenant'));
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
}
