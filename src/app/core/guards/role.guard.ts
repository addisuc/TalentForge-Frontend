import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NavigationService } from '../services/navigation.service';
import { UserRole } from '../models/user.model';

export const roleGuard = (allowedRoles: UserRole[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const navigationService = inject(NavigationService);
    const router = inject(Router);

    const user = authService.getCurrentUserValue();
    
    if (!user) {
      router.navigate(['/auth/login']);
      return false;
    }

    if (allowedRoles.includes(user.role)) {
      return true;
    }

    const dashboardRoute = navigationService.getDashboardRoute(user.role);
    router.navigate([dashboardRoute]);
    return false;
  };
};
