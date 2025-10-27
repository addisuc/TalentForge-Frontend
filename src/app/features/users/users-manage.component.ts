import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { UserRole } from '../../core/models/user.model';

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
  users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      role: 'RECRUITING_MANAGER',
      avatar: '👩💼',
      status: 'Active',
      activeJobs: 12,
      placements: 45,
      lastActive: '2024-01-28T10:30:00'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'mchen@company.com',
      role: 'RECRUITER',
      avatar: '👨💻',
      status: 'Active',
      activeJobs: 8,
      placements: 28,
      lastActive: '2024-01-28T09:15:00'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@company.com',
      role: 'RECRUITER',
      avatar: '👩🦱',
      status: 'Active',
      activeJobs: 10,
      placements: 32,
      lastActive: '2024-01-28T11:00:00'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'dkim@company.com',
      role: 'TENANT_ADMIN',
      avatar: '👨🏫',
      status: 'Active',
      activeJobs: 0,
      placements: 0,
      lastActive: '2024-01-27T16:45:00'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'landerson@company.com',
      role: 'RECRUITER',
      avatar: '👩🏼',
      status: 'Inactive',
      activeJobs: 0,
      placements: 15,
      lastActive: '2024-01-20T14:20:00'
    }
  ];

  searchQuery = '';
  selectedRole = 'all';
  selectedStatus = 'all';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getCurrentUserValue();
    if (user) {
      this.currentUserRole = user.role;
      this.isRecruiter = user.role === UserRole.RECRUITER;
      this.isTenantAdmin = user.role === UserRole.TENANT_ADMIN;
    }
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
