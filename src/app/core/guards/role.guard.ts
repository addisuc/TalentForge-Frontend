import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectUser } from '../../features/auth/store/auth.selectors';
import { UserRole } from '../models/user.model';

export const roleGuard = (allowedRoles: UserRole[]): CanActivateFn => {
  return () => {
    const store = inject(Store);
    const router = inject(Router);

    return store.select(selectUser).pipe(
      take(1),
      map(user => {
        if (!user) {
          router.navigate(['/auth/login']);
          return false;
        }

        if (allowedRoles.includes(user.role)) {
          return true;
        }

        router.navigate(['/dashboard']);
        return false;
      })
    );
  };
};
