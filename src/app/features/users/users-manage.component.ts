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
  emailTouched = false;
  currentUserRole: UserRole | null = null;
  isRecruiter = false;
  isTenantAdmin = false;
  showActionMenu: number | null = null;
  showDeactivateModal = false;
  showEditRoleModal = false;
  showProfileModal = false;
  showMessageModal = false;
  showPerformanceModal = false;
  showResetPasswordModal = false;
  selectedUser: any = null;
  newRole = '';
  messageSubject = '';
  messageBody = '';
  users: any[] = [];
  loading = false;
  error = '';

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
    }
    this.loadUsers();
  }
  
  loadUsers() {
    this.loading = true;
    this.error = '';
    this.userService.getAllUsers(0, 100).subscribe({
      next: (response) => {
        this.users = response.content.map(user => ({
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
        this.error = 'Failed to load team members';
        this.loading = false;
        this.users = [];
      }
    });
  }
  
  getAvatarForRole(role: string): string {
    const avatars: any = {
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
      'TENANT_ADMIN': 'Admin',
      'RECRUITING_MANAGER': 'Manager',
      'RECRUITER': 'Recruiter'
    };
    return labels[role] || role;
  }

  openInviteModal() {
    this.showInviteModal = true;
    this.inviteEmail = '';
    this.emailTouched = false;
  }

  closeInviteModal() {
    this.showInviteModal = false;
    this.inviteEmail = '';
    this.emailTouched = false;
  }

  sendInvite() {
    if (this.isValidEmail()) {
      console.log('Sending invite to:', this.inviteEmail);
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

  // Role-based permissions
  canInviteUsers(): boolean {
    return this.isTenantAdmin;
  }

  canEditRole(user: any): boolean {
    return this.isTenantAdmin && user.role !== 'TENANT_ADMIN';
  }

  canDeactivateUser(user: any): boolean {
    return this.isTenantAdmin && user.role !== 'TENANT_ADMIN';
  }

  canViewProfile(): boolean {
    return true; // All users can view profiles
  }

  canSendMessage(): boolean {
    return true; // All users can send messages
  }

  canViewPerformance(user: any): boolean {
    return this.isTenantAdmin || user.role === 'RECRUITER';
  }

  canResetPassword(user: any): boolean {
    return this.isTenantAdmin;
  }

  // Action handlers
  toggleActionMenu(userId: number, event: Event) {
    event.stopPropagation();
    this.showActionMenu = this.showActionMenu === userId ? null : userId;
  }

  closeActionMenu() {
    this.showActionMenu = null;
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
      console.log('Deactivate user:', this.selectedUser.id);
      this.selectedUser.status = 'Inactive';
      this.closeDeactivateModal();
    }
  }

  reactivateUser(user: any) {
    console.log('Reactivate user:', user.id);
    user.status = 'Active';
    this.closeActionMenu();
  }

  resetPassword(user: any) {
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
      console.log('Reset password for:', this.selectedUser.id);
      this.closeResetPasswordModal();
    }
  }

  resendInvite(user: any) {
    console.log('Resend invite to:', user);
    this.closeActionMenu();
  }
}
