import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { TenantService } from '../../core/services/tenant.service';

@Component({
  selector: 'app-users-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss']
})
export class UsersManageComponent implements OnInit {
  users: any[] = [];
  tenants: any[] = [];
  loading = false;
  showUserModal = false;
  showResetPasswordModal = false;
  selectedUser: any = null;
  userForm!: FormGroup;
  Math = Math;
  
  searchQuery = '';
  selectedTenant = 'all';
  selectedRole = 'all';
  selectedStatus = 'all';
  currentPage = 0;
  itemsPerPage = 25;
  totalElements = 0;

  roles = [
    'PLATFORM_SUPER_ADMIN',
    'PLATFORM_ADMIN', 
    'BILLING_MANAGER',
    'TENANT_ADMIN',
    'RECRUITER',
    'CANDIDATE',
    'CLIENT'
  ];

  constructor(
    private userService: UserService,
    private tenantService: TenantService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
    this.loadTenants();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['RECRUITER', Validators.required],
      tenantId: ['', Validators.required],
      status: ['ACTIVE', Validators.required]
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getAllUsers(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.users = response.content || response;
        this.totalElements = response.totalElements || this.users.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  loadTenants(): void {
    this.tenantService.getAllTenants(0, 1000).subscribe({
      next: (response) => {
        this.tenants = response.content || response;
      }
    });
  }

  openUserModal(user?: any): void {
    this.selectedUser = user;
    if (user) {
      this.userForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
        status: user.status
      });
    } else {
      this.userForm.reset({ role: 'RECRUITER', status: 'ACTIVE' });
    }
    this.showUserModal = true;
  }

  closeUserModal(): void {
    this.showUserModal = false;
    this.selectedUser = null;
  }

  saveUser(): void {
    if (this.userForm.invalid) return;

    this.loading = true;
    const userData = this.userForm.value;

    if (this.selectedUser) {
      // Update user
      this.userService.updateUser(this.selectedUser.id, userData).subscribe({
        next: () => {
          this.loadUsers();
          this.closeUserModal();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      // Create user
      this.userService.createUser(userData).subscribe({
        next: () => {
          this.loadUsers();
          this.closeUserModal();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  suspendUser(user: any): void {
    if (confirm(`Suspend ${user.firstName} ${user.lastName}?`)) {
      this.userService.suspendUser(user.id).subscribe({
        next: () => this.loadUsers()
      });
    }
  }

  activateUser(user: any): void {
    this.userService.activateUser(user.id).subscribe({
      next: () => this.loadUsers()
    });
  }

  resetPassword(user: any): void {
    this.selectedUser = user;
    this.showResetPasswordModal = true;
  }

  closeResetPasswordModal(): void {
    this.showResetPasswordModal = false;
    this.selectedUser = null;
  }

  confirmResetPassword(): void {
    if (this.selectedUser) {
      this.userService.resetUserPassword(this.selectedUser.id).subscribe({
        next: () => {
          alert('Password reset email sent successfully');
          this.closeResetPasswordModal();
        }
      });
    }
  }

  deleteUser(user: any): void {
    if (confirm(`Delete ${user.firstName} ${user.lastName}? This action cannot be undone.`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => this.loadUsers()
      });
    }
  }

  getTenantName(tenantId: string): string {
    const tenant = this.tenants.find(t => t.id === tenantId);
    return tenant ? tenant.name : 'Unknown';
  }

  get filteredUsers(): any[] {
    return this.users.filter(user => {
      const matchesSearch = !this.searchQuery || 
        user.firstName?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.lastName?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesTenant = this.selectedTenant === 'all' || user.tenantId === this.selectedTenant;
      const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
      const matchesStatus = this.selectedStatus === 'all' || user.status === this.selectedStatus;
      
      return matchesSearch && matchesTenant && matchesRole && matchesStatus;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 0;
    this.loadUsers();
  }
}