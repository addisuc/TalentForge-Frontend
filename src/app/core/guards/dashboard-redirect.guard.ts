import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

export const dashboardRedirectGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    map(user => {
      if (!user) {
        return router.createUrlTree(['/auth/login']);
      }

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
        case 'RECRUITER':
          return true;
        default:
          return true;
      }
    })
  );
};
