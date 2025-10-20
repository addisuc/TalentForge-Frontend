import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginRequest, RegisterRequest, User } from '../../../core/models/user.model';
import { AppState } from '../../../store';
import * as AuthActions from '../store/auth.actions';
import { selectUser, selectIsAuthenticated, selectAuthLoading, selectAuthError } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  
  // Selectors
  user$: Observable<User | null> = this.store.select(selectUser);
  isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  loading$: Observable<boolean> = this.store.select(selectAuthLoading);
  error$: Observable<string | null> = this.store.select(selectAuthError);

  constructor(private store: Store<AppState>) {}

  // Actions
  login(credentials: LoginRequest): void {
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  register(userData: RegisterRequest): void {
    this.store.dispatch(AuthActions.register({ userData }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  clearError(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  forgotPassword(email: string): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.post('/api/auth/forgot-password', { email });
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Password reset email sent' });
        observer.complete();
      }, 1000);
    });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.post('/api/auth/reset-password', { token, newPassword });
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Password reset successful' });
        observer.complete();
      }, 1000);
    });
  }

  verifyEmail(token: string): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.get(`/api/auth/verify-email/${token}`);
    return new Observable(observer => {
      setTimeout(() => {
        if (token === 'valid-token') {
          observer.next({ message: 'Email verified successfully' });
          observer.complete();
        } else {
          observer.error({ message: 'The verification link is invalid or has expired' });
        }
      }, 2000);
    });
  }

  resendVerificationEmail(token: string): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.post('/api/auth/resend-verification', { token });
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Verification email sent' });
        observer.complete();
      }, 1000);
    });
  }

  validateInvitation(token: string): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.get(`/api/invitations/${token}`);
    return new Observable(observer => {
      setTimeout(() => {
        if (token === 'valid-invitation') {
          observer.next({ email: 'invited@example.com', role: 'TENANT_ADMIN' });
          observer.complete();
        } else {
          observer.error({ message: 'Invalid or expired invitation' });
        }
      }, 1000);
    });
  }

  acceptInvitation(data: any): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.post(`/api/invitations/${data.token}/accept`, data);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Invitation accepted successfully' });
        observer.complete();
      }, 1500);
    });
  }

  sendInvitation(data: any): Observable<any> {
    // TODO: Implement when backend is ready
    // return this.http.post('/api/admin/invitations', data);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Invitation sent successfully' });
        observer.complete();
      }, 1000);
    });
  }
}