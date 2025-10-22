import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../../core/auth/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this.authService.login(action.credentials).pipe(
          map(response => AuthActions.loginSuccess({ response })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap(action =>
        this.authService.register(action.userData).pipe(
          map(response => AuthActions.registerSuccess({ response })),
          catchError(error => of(AuthActions.registerFailure({ error: error.message })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ response }) => {
        const role = response.user.role;
        switch (role) {
          case 'CANDIDATE':
            this.router.navigate(['/candidate/dashboard']);
            break;
          case 'RECRUITER':
            this.router.navigate(['/recruiter/dashboard']);
            break;
          case 'TENANT_ADMIN':
          case 'BILLING_MANAGER':
            this.router.navigate(['/admin/dashboard']);
            break;
          case 'PLATFORM_ADMIN':
          case 'PLATFORM_SUPER_ADMIN':
            this.router.navigate(['/platform-admin/dashboard']);
            break;
          default:
            this.router.navigate(['/dashboard']);
        }
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/auth/login']);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}