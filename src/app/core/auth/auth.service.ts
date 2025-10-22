import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, LoginRequest, RegisterRequest, AuthResponse, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = '/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

  public currentUser$ = this.currentUserSubject.asObservable();
  public token$ = this.tokenSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStoredAuth();
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<any>(`${this.API_URL}/login`, credentials)
      .pipe(
        map(response => this.mapLoginResponse(response)),
        tap(response => this.setAuthData(response)),
        catchError(error => this.handleAuthError(error))
      );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<any>(`${this.API_URL}/register`, userData)
      .pipe(
        map(response => this.mapLoginResponse(response)),
        tap(response => this.setAuthData(response)),
        catchError(error => this.handleAuthError(error))
      );
  }

  logout(): void {
    const token = this.getToken();
    if (token) {
      this.http.post(`${this.API_URL}/logout`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).subscribe();
    }
    this.clearAuthData();
    this.router.navigate(['/auth/login']);
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/refresh`, {})
      .pipe(
        tap(response => this.setAuthData(response)),
        catchError(error => {
          this.logout();
          return throwError(error);
        })
      );
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/me`);
  }

  hasRole(role: UserRole): boolean {
    const user = this.currentUserSubject.value;
    return user?.role === role || false;
  }

  isAuthenticated(): boolean {
    return !!this.tokenSubject.value && !!this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getCurrentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  private setAuthData(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.tokenSubject.next(response.token);
    this.currentUserSubject.next(response.user);
  }

  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
  }

  private loadStoredAuth(): void {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.tokenSubject.next(token);
        this.currentUserSubject.next(user);
      } catch {
        this.clearAuthData();
      }
    }
  }

  private mapLoginResponse(response: any): AuthResponse {
    return {
      user: {
        id: response.userId,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        role: response.role,
        isEmailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      token: response.accessToken,
      refreshToken: response.refreshToken,
      expiresIn: response.expiresIn
    };
  }

  private handleAuthError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    
    if (error.status === 401) {
      errorMessage = 'Invalid email or password';
    } else if (error.status === 403) {
      errorMessage = 'Please verify your email before logging in';
    } else if (error.status === 422) {
      errorMessage = 'Password has expired. Please reset your password';
    } else if (error.status === 423) {
      errorMessage = 'Account temporarily locked. Try again later';
    } else if (error.status === 500) {
      errorMessage = 'Service temporarily unavailable. Please try again';
    } else if (!navigator.onLine) {
      errorMessage = 'Connection lost. Check your internet connection';
    }
    
    return throwError({ message: errorMessage, originalError: error });
  }
}