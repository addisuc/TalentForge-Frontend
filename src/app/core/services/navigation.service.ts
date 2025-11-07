import { Injectable } from '@angular/core';
import { UserRole } from '../models/user.model';

export interface NavigationItem {
  label: string;
  route: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigationMap: Record<UserRole, NavigationItem[]> = {
    [UserRole.PLATFORM_SUPER_ADMIN]: [
      { label: 'Dashboard', route: '/platform-admin', icon: '📊' },
      { label: 'Tenants', route: '/platform-admin/tenants', icon: '🏢' },
      { label: 'Billing', route: '/platform-admin/billing', icon: '💳' },
      { label: 'System', route: '/platform-admin/system', icon: '⚙️' }
    ],
    [UserRole.PLATFORM_ADMIN]: [
      { label: 'Dashboard', route: '/platform-admin', icon: '📊' },
      { label: 'Tenants', route: '/platform-admin/tenants', icon: '🏢' },
      { label: 'Billing', route: '/platform-admin/billing', icon: '💳' },
      { label: 'System', route: '/platform-admin/system', icon: '⚙️' }
    ],
    [UserRole.BILLING_MANAGER]: [
      { label: 'Dashboard', route: '/billing', icon: '📊' },
      { label: 'Subscriptions', route: '/billing/subscriptions', icon: '💳' },
      { label: 'Reports', route: '/billing/reports', icon: '📈' }
    ],
    [UserRole.TENANT_ADMIN]: [
      { label: 'Dashboard', route: '/admin', icon: '📊' },
      { label: 'Team', route: '/users', icon: '👥' },
      { label: 'Jobs', route: '/jobs', icon: '💼' },
      { label: 'Candidates', route: '/candidates', icon: '👤' },
      { label: 'Settings', route: '/settings', icon: '⚙️' }
    ],
    [UserRole.RECRUITER]: [
      { label: 'Dashboard', route: '/dashboard', icon: '📊' },
      { label: 'Jobs', route: '/jobs', icon: '💼' },
      { label: 'Applications', route: '/applications', icon: '📝' },
      { label: 'Candidates', route: '/candidates', icon: '👥' },
      { label: 'Clients', route: '/clients', icon: '🏢' },
      { label: 'Team', route: '/users', icon: '👤' },
      { label: 'Analytics', route: '/analytics', icon: '📈' }
    ],
    [UserRole.CANDIDATE]: [
      { label: 'Dashboard', route: '/candidate', icon: '📊' },
      { label: 'Job Search', route: '/candidate/jobs', icon: '🔍' },
      { label: 'My Applications', route: '/candidate/applications', icon: '📝' },
      { label: 'Interviews', route: '/candidate/interviews', icon: '📅' },
      { label: 'Profile', route: '/candidate/profile', icon: '👤' },
      { label: 'Messages', route: '/candidate/messages', icon: '💬' }
    ],
    [UserRole.CLIENT]: [
      { label: 'Dashboard', route: '/client', icon: '📊' },
      { label: 'My Jobs', route: '/client/jobs', icon: '💼' },
      { label: 'Candidates', route: '/client/candidates', icon: '👥' },
      { label: 'Interviews', route: '/client/interviews', icon: '📅' }
    ]
  };

  private dashboardRoutes: Record<UserRole, string> = {
    [UserRole.PLATFORM_SUPER_ADMIN]: '/platform-admin',
    [UserRole.PLATFORM_ADMIN]: '/platform-admin',
    [UserRole.BILLING_MANAGER]: '/billing',
    [UserRole.TENANT_ADMIN]: '/admin',
    [UserRole.RECRUITER]: '/dashboard',
    [UserRole.CANDIDATE]: '/candidate',
    [UserRole.CLIENT]: '/client'
  };

  getNavigationForRole(role: UserRole): NavigationItem[] {
    return this.navigationMap[role] || [];
  }

  getDashboardRoute(role: UserRole): string {
    return this.dashboardRoutes[role] || '/dashboard';
  }

  isPlatformRole(role: UserRole): boolean {
    return [
      UserRole.PLATFORM_SUPER_ADMIN,
      UserRole.PLATFORM_ADMIN,
      UserRole.BILLING_MANAGER
    ].includes(role);
  }

  isTenantRole(role: UserRole): boolean {
    return [
      UserRole.TENANT_ADMIN,
      UserRole.RECRUITER
    ].includes(role);
  }
}
