import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SessionTimeoutComponent } from '../../shared/components/session-timeout/session-timeout.component';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { AuthService } from '../../core/auth/auth.service';
import { NavigationService, NavigationItem } from '../../core/services/navigation.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SessionTimeoutComponent, ToastComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  navigationItems: NavigationItem[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    // Initialize with current user value immediately
    const currentUser = this.authService.getCurrentUserValue();
    if (currentUser) {
      this.currentUser = currentUser;
      this.navigationItems = this.navigationService.getNavigationForRole(currentUser.role);
    }

    // Subscribe to changes
    this.authService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
        if (user) {
          this.navigationItems = this.navigationService.getNavigationForRole(user.role);
        } else {
          this.navigationItems = [];
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get userName(): string {
    return this.currentUser 
      ? `${this.currentUser.firstName} ${this.currentUser.lastName}`
      : 'User';
  }

  get userInitials(): string {
    return this.currentUser
      ? `${this.currentUser.firstName[0]}${this.currentUser.lastName[0]}`
      : 'U';
  }

  get showTenantName(): boolean {
    return this.currentUser 
      ? this.navigationService.isTenantRole(this.currentUser.role)
      : false;
  }

  get searchPlaceholder(): string {
    if (!this.currentUser) return 'Search...';
    
    switch(this.currentUser.role) {
      case 'CANDIDATE':
        return 'Search jobs or companies...';
      case 'RECRUITER':
        return 'Search candidates, jobs, or companies...';
      case 'TENANT_ADMIN':
        return 'Search team, jobs, or candidates...';
      case 'PLATFORM_ADMIN':
      case 'PLATFORM_SUPER_ADMIN':
        return 'Search tenants...';
      case 'BILLING_MANAGER':
        return 'Search subscriptions or invoices...';
      default:
        return 'Search...';
    }
  }

  logout() {
    this.authService.logout();
  }
}
