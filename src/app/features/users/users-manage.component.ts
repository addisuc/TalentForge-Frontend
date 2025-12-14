import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { UserRole } from '../../core/models/user.model';
import { UserService, User as ApiUser } from '../../core/services/user.service';

@Component({
  selector: 'app-users-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss']
})
export class UsersManageComponent implements OnInit {
  showInviteModal = false;
  inviteEmail = '';
  inviteRole = 'PLATFORM_ADMIN';
  emailTouched = false;
  currentUserRole: UserRole | null = null;
  isRecruiter = false;
  isTenantAdmin = false;
  isPlatformAdmin = false;
  isPlatformAdminContext = false;
  showActionMenu: number | null = null;
  showDeactivateModal = false;
  showEditRoleModal = false;
  showProfileModal = false;
  showMessageModal = false;
  showPerformanceModal = false;
  showResetPasswordModal = false;
  showAddUserModal = false;
  showEditUserModal = false;
  showDeleteModal = false;
  selectedUser: any = null;
  newRole = '';
  messageSubject = '';
  messageBody = '';
  users: any[] = [];
  loading = false;
  error = '';
  
  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'PLATFORM_ADMIN',
    status: 'ACTIVE'
  };

  searchQuery = '';
  selectedRole = 'all';
  selectedStatus = 'all';

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const user = this.authService.getCurrentUserValue();
    if (user) {
      this.currentUserRole = user.role;
      this.isRecruiter = user.role === UserRole.RECRUITER;
      this.isTenantAdmin = user.role === UserRole.TENANT_ADMIN;
      this.isPlatformAdmin = user.role === UserRole.PLATFORM_ADMIN || user.role === UserRole.PLATFORM_SUPER_ADMIN || user.role === UserRole.BILLING_MANAGER;
    }
    
    this.isPlatformAdminContext = window.location.pathname.includes('/platform-admin/');
    this.loadUsers();
  }
  
  loadUsers() {
    this.loading = true;
    this.error = '';
    
    const userService$ = this.isPlatformAdminContext 
      ? this.userService.getPlatformAdmins(0, 100)
      : this.userService.getAllUsers(0, 100);
    
    userService$.subscribe({
      next: (response) => {
        let users = response.content || response;
        
        if (!this.isPlatformAdminContext) {
          const tenantRoles = ['TENANT_ADMIN', 'RECRUITER', 'RECRUITING_MANAGER', 'CANDIDATE'];
          users = users.filter((user: any) => tenantRoles.includes(user.role));
        }
        
        this.users = users.map((user: any) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
          avatar: this.getAvatarForRole(user.role),
          status: user.status === 'ACTIVE' ? 'Active' : 'Inactive',
          activeJobs: 0,
          placements: 0,
          lastActive: user.updatedAt
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load users:', err);
        this.error = 'Failed to load users';
        this.loading = false;
        this.users = [];
      }
    });
  }
  
  getAvatarForRole(role: string): string {
    const avatars: any = {
      'PLATFORM_SUPER_ADMIN': '👑',
      'PLATFORM_ADMIN': '🛡️',
      'BILLING_MANAGER': '💳',
      'TENANT_ADMIN': '👨🏫',
      'RECRUITER': '👨💻',
      'RECRUITING_MANAGER': '👩💼',
      'CANDIDATE': '👤'
    };
    return avatars[role] || '👤';
  }

  get filteredUsers() {
    return this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
      const matchesStatus = this.selectedStatus === 'all' || user.status === this.selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  getRoleLabel(role: string): string {
    const labels: any = {
      'PLATFORM_SUPER_ADMIN': 'Super Admin',
      'PLATFORM_ADMIN': 'Platform Admin',
      'BILLING_MANAGER': 'Billing Manager',
      'TENANT_ADMIN': 'Admin',
      'RECRUITING_MANAGER': 'Manager',
      'RECRUITER': 'Recruiter'
    };
    return labels[role] || role;
  }

  // Role-based permissions
  canInviteUsers(): boolean {
    return this.isPlatformAdmin;
  }

  canEditRole(user: any): boolean {
    return this.isPlatformAdmin;
  }

  canDeactivateUser(user: any): boolean {
    return this.isPlatformAdmin;
  }

  canViewProfile(): boolean {
    return true;
  }

  canSendMessage(): boolean {
    return true;
  }

  canViewPerformance(user: any): boolean {
    return this.isTenantAdmin || user.role === 'RECRUITER';
  }

  canResetPassword(user: any): boolean {
    return this.isPlatformAdmin;
  }

  canDeleteUser(user: any): boolean {
    return this.isPlatformAdmin;
  }

  // Invite Modal
  openInviteModal() {
    this.showInviteModal = true;
    this.inviteEmail = '';
    this.inviteRole = this.isPlatformAdminContext ? 'PLATFORM_ADMIN' : 'RECRUITER';
    this.emailTouched = false;
  }

  closeInviteModal() {
    this.showInviteModal = false;
    this.inviteEmail = '';
    this.inviteRole = this.isPlatformAdminContext ? 'PLATFORM_ADMIN' : 'RECRUITER';
    this.emailTouched = false;
  }

  sendInvite() {
    if (this.isValidEmail()) {
      console.log('Sending invite to:', this.inviteEmail, 'with role:', this.inviteRole);
      this.closeInviteModal();
    }
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.inviteEmail);
  }

  onEmailBlur() {
    this.emailTouched = true;
  }

  // Add User Modal
  openAddUserModal(): void {
    this.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      role: this.isPlatformAdminContext ? 'PLATFORM_ADMIN' : 'RECRUITER',
      status: 'ACTIVE'
    };
    this.showAddUserModal = true;
  }

  closeAddUserModal(): void {
    this.showAddUserModal = false;
  }

  saveNewUser(): void {
    if (this.newUser.firstName && this.newUser.lastName && this.newUser.email) {
      this.userService.createUser(this.newUser).subscribe({
        next: (createdUser) => {
          console.log('User created successfully:', createdUser);
          this.loadUsers();
          this.closeAddUserModal();
        },
        error: (err) => {
          console.error('Failed to create user:', err);
          this.error = 'Failed to create user';
        }
      });
    }
  }

  // Edit User Modal
  openEditUserModal(user: any): void {
    this.selectedUser = user;
    this.newUser = {
      firstName: user.name.split(' ')[0],
      lastName: user.name.split(' ').slice(1).join(' '),
      email: user.email,
      role: user.role,
      status: user.status === 'Active' ? 'ACTIVE' : 'INACTIVE'
    };
    this.showEditUserModal = true;
    this.closeActionMenu();
  }

  closeEditUserModal(): void {
    this.showEditUserModal = false;
    this.selectedUser = null;
  }

  saveEditUser(): void {
    if (this.selectedUser && this.newUser.firstName && this.newUser.lastName && this.newUser.email) {
      this.userService.updateUser(this.selectedUser.id, {
        firstName: this.newUser.firstName,
        lastName: this.newUser.lastName,
        email: this.newUser.email
      }).subscribe({
        next: (updatedUser) => {
          console.log('User updated successfully:', updatedUser);
          this.loadUsers();
          this.closeEditUserModal();
        },
        error: (err) => {
          console.error('Failed to update user:', err);
          this.error = 'Failed to update user';
        }
      });
    }
  }

  // Delete User Modal
  openDeleteModal(user: any): void {
    this.selectedUser = user;
    this.showDeleteModal = true;
    this.closeActionMenu();
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedUser = null;
  }

  confirmDeleteUser(): void {
    if (this.selectedUser) {
      this.userService.deleteUser(this.selectedUser.id).subscribe({
        next: () => {
          console.log('User deleted successfully');
          this.loadUsers();
          this.closeDeleteModal();
        },
        error: (err) => {
          console.error('Failed to delete user:', err);
          this.error = 'Failed to delete user';
        }
      });
    }
  }

  // Deactivate User Modal
  openDeactivateModal(user: any) {
    this.selectedUser = user;
    this.showDeactivateModal = true;
    this.closeActionMenu();
  }

  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedUser = null;
  }

  confirmDeactivate() {
    if (this.selectedUser) {
      this.userService.suspendUser(this.selectedUser.id).subscribe({
        next: () => {
          console.log('User deactivated successfully');
          this.loadUsers();
          this.closeDeactivateModal();
        },
        error: (err) => {
          console.error('Failed to deactivate user:', err);
          this.error = 'Failed to deactivate user';
        }
      });
    }
  }

  // Reset Password Modal
  openResetPasswordModal(user: any) {
    this.selectedUser = user;
    this.showResetPasswordModal = true;
    this.closeActionMenu();
  }

  closeResetPasswordModal() {
    this.showResetPasswordModal = false;
    this.selectedUser = null;
  }

  confirmResetPassword() {
    if (this.selectedUser) {
      this.userService.resetUserPassword(this.selectedUser.id).subscribe({
        next: () => {
          console.log('Password reset successfully');
          this.closeResetPasswordModal();
        },
        error: (err) => {
          console.error('Failed to reset password:', err);
          this.error = 'Failed to reset password';
        }
      });
    }
  }

  // Action Menu
  toggleActionMenu(userId: number, event: Event) {
    event.stopPropagation();
    this.showActionMenu = this.showActionMenu === userId ? null : userId;
  }

  closeActionMenu() {
    this.showActionMenu = null;
  }

  // User Actions
  reactivateUser(user: any) {
    this.userService.activateUser(user.id).subscribe({
      next: () => {
        console.log('User reactivated successfully');
        this.loadUsers();
      },
      error: (err) => {
        console.error('Failed to reactivate user:', err);
        this.error = 'Failed to reactivate user';
      }
    });
    this.closeActionMenu();
  }

  viewProfile(user: any) {
    this.selectedUser = user;
    this.showProfileModal = true;
    this.closeActionMenu();
  }

  closeProfileModal() {
    this.showProfileModal = false;
    this.selectedUser = null;
  }

  sendMessage(user: any) {
    this.selectedUser = user;
    this.showMessageModal = true;
    this.messageSubject = '';
    this.messageBody = '';
    this.closeActionMenu();
  }

  closeMessageModal() {
    this.showMessageModal = false;
    this.selectedUser = null;
    this.messageSubject = '';
    this.messageBody = '';
  }

  sendMessageSubmit() {
    if (this.messageBody.trim()) {
      console.log('Send message:', { to: this.selectedUser, subject: this.messageSubject, body: this.messageBody });
      this.closeMessageModal();
    }
  }

  viewPerformance(user: any) {
    this.selectedUser = user;
    this.showPerformanceModal = true;
    this.closeActionMenu();
  }

  closePerformanceModal() {
    this.showPerformanceModal = false;
    this.selectedUser = null;
  }

  openEditRoleModal(user: any) {
    this.selectedUser = user;
    this.newRole = user.role;
    this.showEditRoleModal = true;
    this.closeActionMenu();
  }

  closeEditRoleModal() {
    this.showEditRoleModal = false;
    this.selectedUser = null;
    this.newRole = '';
  }

  saveRole() {
    if (this.selectedUser && this.newRole) {
      console.log('Update role:', this.selectedUser.id, this.newRole);
      this.selectedUser.role = this.newRole;
      this.closeEditRoleModal();
    }
  }

  resetPassword(user: any) {
    this.openResetPasswordModal(user);
  }
}