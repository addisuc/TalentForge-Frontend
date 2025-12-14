import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule, RouterModule, SessionTimeoutComponent, ToastComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  navigationItems: NavigationItem[] = [];
  private destroy$ = new Subject<void>();
  globalSearchTerm = '';
  showNotifications = false;
  notifications: any[] = [];
  notificationCount = 0;
  hasNotifications = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    // Initialize with current user value immediately
    const currentUser = this.authService.getCurrentUserValue();
    console.log('Initial current user:', currentUser);
    if (currentUser) {
      this.currentUser = currentUser;
      console.log('Setting navigation for role:', currentUser.role);
      this.navigationItems = this.navigationService.getNavigationForRole(currentUser.role);
      console.log('Navigation items after setting:', this.navigationItems);
      this.loadNotifications();
    }

    // Subscribe to changes
    this.authService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        console.log('Main layout received user:', user);
        this.currentUser = user;
        if (user) {
          console.log('User role:', user.role);
          this.navigationItems = this.navigationService.getNavigationForRole(user.role);
          console.log('Navigation items set:', this.navigationItems);
          this.loadNotifications();
        } else {
          this.navigationItems = [];
          this.notifications = [];
          this.notificationCount = 0;
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

  performGlobalSearch() {
    const searchTerm = this.globalSearchTerm.trim();
    if (!searchTerm) return;
    
    console.log('Performing global search:', searchTerm);
    
    if (this.currentUser?.role === 'CANDIDATE') {
      this.router.navigate(['/candidate/jobs'], { queryParams: { search: searchTerm } });
    } else if (this.currentUser?.role === 'RECRUITER') {
      this.router.navigate(['/recruiter/applications'], { queryParams: { search: searchTerm } });
    } else {
      // Default search behavior
      console.log('Global search for:', searchTerm);
    }
  }

  onSearchInput() {
    // Optional: Add real-time search suggestions here
  }

  clearSearch() {
    this.globalSearchTerm = '';
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  closeNotifications() {
    this.showNotifications = false;
  }

  loadNotifications() {
    if (!this.currentUser?.id) return;
    
    // Call notification service API
    fetch(`/api/notifications/in-app/${this.currentUser.id}`)
      .then(response => response.json())
      .then(data => {
        this.notifications = data.notifications || [];
        this.notificationCount = data.unreadCount || 0;
        this.hasNotifications = this.notificationCount > 0;
      })
      .catch(error => {
        console.error('Failed to load notifications:', error);
        // Fallback to empty notifications
        this.notifications = [];
        this.notificationCount = 0;
        this.hasNotifications = false;
      });
  }

  navigateToProfile() {
    if (!this.currentUser) return;
    
    // Navigate based on user role
    switch(this.currentUser.role) {
      case 'CANDIDATE':
        this.router.navigate(['/candidate/profile']);
        break;
      case 'RECRUITER':
        this.router.navigate(['/recruiter/profile']);
        break;
      case 'TENANT_ADMIN':
        this.router.navigate(['/admin/profile']);
        break;
      default:
        this.router.navigate(['/profile']);
    }
  }

  logout() {
    this.authService.logout();
  }
}
