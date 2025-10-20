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
}