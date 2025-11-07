import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { take, map } from 'rxjs/operators';

export const roleRedirectGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    take(1),
    map(user => {
      if (!user) {
        return router.createUrlTree(['/auth/login']);
      }

      const currentPath = router.url;
      
      // If on /dashboard, redirect based on role
      if (currentPath === '/dashboard') {
        switch(user.role) {
          case 'PLATFORM_ADMIN':
          case 'PLATFORM_SUPER_ADMIN':
            return router.createUrlTree(['/platform-admin']);
          case 'BILLING_MANAGER':
            return router.createUrlTree(['/billing']);
          case 'TENANT_ADMIN':
            return router.createUrlTree(['/admin']);
          case 'CANDIDATE':
            return router.createUrlTree(['/candidate']);
          case 'CLIENT':
            return router.createUrlTree(['/client']);
          default:
            return true;
        }
      }
      
      return true;
    })
  );
};
