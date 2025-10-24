import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

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
    return this.http.post('/api/auth/forgot-password', { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post('/api/auth/reset-password', { token, newPassword });
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.get(`/api/auth/verify-email/${token}`);
  }

  resendVerificationEmail(token: string): Observable<any> {
    return this.http.post('/api/auth/resend-verification', { token });
  }

  validateInvitation(token: string): Observable<any> {
    return this.http.get(`/api/auth/invitations/${token}`);
  }

  acceptInvitation(data: any): Observable<any> {
    return this.http.post(`/api/auth/invitations/${data.token}/accept`, data);
  }

  sendInvitation(data: any): Observable<any> {
    return this.http.post('/api/auth/invitations', data);
  }
}