import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-login-standalone',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your TalentForge account</p>
        </div>

        <!-- Account Locked Warning -->
        <div *ngIf="isLocked" class="lockout-warning">
          <div class="lockout-icon">🔒</div>
          <h3>Account Temporarily Locked</h3>
          <p>Too many failed login attempts.</p>
          <div class="countdown">
            <span class="time">{{ remainingLockoutTime }}</span>
            <span class="label">remaining</span>
          </div>
          <p class="hint">Try again after the timer expires or <a routerLink="/auth/forgot-password">reset your password</a></p>
        </div>

        <!-- Attempts Warning -->
        <div *ngIf="showAttemptsWarning && !isLocked" class="attempts-warning">
          <span class="warning-icon">⚠️</span>
          <div>
            <span *ngIf="remainingAttempts > 1">
              Invalid credentials. {{ remainingAttempts }} attempts remaining before account lockout.
            </span>
            <span *ngIf="remainingAttempts === 1" class="final-warning">
              Last attempt! Account will be locked for 15 minutes after next failed login.
            </span>
          </div>
        </div>

        <div *ngIf="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" *ngIf="!isLocked">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              class="form-control"
              [class.error]="email?.invalid && email?.touched"
              placeholder="Enter your email"
              autocomplete="email"
            />
            <div class="error-text" *ngIf="email?.invalid && email?.touched">
              <span *ngIf="email?.errors?.['required']">Email is required</span>
              <span *ngIf="email?.errors?.['email']">Please enter a valid email</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-wrapper">
              <input
                id="password"
                [type]="hidePassword ? 'password' : 'text'"
                formControlName="password"
                class="form-control"
                [class.error]="password?.invalid && password?.touched"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <button type="button" class="toggle-password" (click)="hidePassword = !hidePassword">
                {{ hidePassword ? '👁️' : '🙈' }}
              </button>
            </div>
            <div class="error-text" *ngIf="password?.invalid && password?.touched">
              <span *ngIf="password?.errors?.['required']">Password is required</span>
              <span *ngIf="password?.errors?.['minlength']">Password must be at least 6 characters</span>
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="rememberMe" />
              <span>Remember me</span>
            </label>
            <a routerLink="/auth/forgot-password" class="link">Forgot password?</a>
          </div>

          <button type="submit" class="btn-primary" [disabled]="loginForm.invalid || loading">
            <span *ngIf="!loading">Sign In</span>
            <span *ngIf="loading">Signing in...</span>
          </button>

          <div class="auth-footer">
            <span>Don't have an account? </span>
            <a routerLink="/auth/register" class="link">Create one here</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); padding: 2rem; position: relative; overflow: hidden; }
    .auth-container::before { content: ''; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); }
    .auth-container::after { content: ''; position: absolute; bottom: -50%; left: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); }
    .auth-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); padding: 3rem; max-width: 450px; width: 100%; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.2); }
    .auth-header { text-align: center; margin-bottom: 2.5rem; }
    .auth-header h1 { font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.75rem 0; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .auth-header p { color: #64748b; font-size: 0.9375rem; margin: 0; }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; transition: all 0.2s; box-sizing: border-box; }
    .form-control:focus { outline: none; border-color: #0066ff; box-shadow: 0 0 0 3px rgba(0,102,255,0.15); }
    .form-control.error { border-color: #ef4444; }
    .password-wrapper { position: relative; }
    .password-wrapper .form-control { padding-right: 45px; }
    .toggle-password { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.25rem; padding: 0; line-height: 1; }
    .error-text { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .form-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .checkbox-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #475569; cursor: pointer; }
    .btn-primary { width: 100%; padding: 14px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); color: white; margin-bottom: 1rem; font-size: 0.9375rem; box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4); }
    .btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 102, 255, 0.6); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    .auth-footer { text-align: center; font-size: 0.875rem; color: #64748b; }
    .link { color: #0066ff; text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: all 0.2s; }
    .link:hover { color: #0052cc; text-decoration: underline; }
    .error-message { background: #fee2e2; color: #991b1b; padding: 12px; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.875rem; }
    .lockout-warning { background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); border: 2px solid #ef4444; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 1.5rem; }
    .lockout-icon { font-size: 3rem; margin-bottom: 12px; }
    .lockout-warning h3 { color: #991b1b; font-size: 1.25rem; font-weight: 600; margin: 0 0 8px 0; }
    .lockout-warning p { color: #7f1d1d; margin: 0 0 16px 0; font-size: 0.875rem; }
    .countdown { background: white; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
    .countdown .time { display: block; font-size: 2rem; font-weight: 700; color: #dc2626; font-family: monospace; }
    .countdown .label { display: block; font-size: 0.75rem; color: #7f1d1d; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    .lockout-warning .hint { font-size: 0.8125rem; color: #7f1d1d; }
    .lockout-warning .hint a { color: #dc2626; font-weight: 600; text-decoration: none; }
    .lockout-warning .hint a:hover { text-decoration: underline; }
    .attempts-warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 12px; font-size: 0.875rem; color: #92400e; line-height: 1.5; }
    .warning-icon { font-size: 1.25rem; flex-shrink: 0; }
    .final-warning { font-weight: 600; color: #dc2626; }
    @media (max-width: 768px) {
      .auth-container { padding: 1rem; }
      .auth-card { padding: 2rem 1.5rem; }
      .auth-header h1 { font-size: 1.5rem; }
      .lockout-icon { font-size: 2.5rem; }
      .countdown .time { font-size: 1.5rem; }
    }
  `]
})
export class LoginStandaloneComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  hidePassword = true;
  
  failedAttempts = 0;
  maxAttempts = 5;
  isLocked = false;
  lockoutEndTime: Date | null = null;
  remainingLockoutTime = '';
  private lockoutSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacadeService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    this.checkExistingLockout();
  }

  ngOnDestroy(): void {
    this.lockoutSubscription?.unsubscribe();
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get remainingAttempts() { return Math.max(0, this.maxAttempts - this.failedAttempts); }
  get showAttemptsWarning() { return this.failedAttempts > 0 && !this.isLocked; }

  private checkExistingLockout(): void {
    const lockoutData = localStorage.getItem('loginLockout');
    if (lockoutData) {
      const { endTime, attempts } = JSON.parse(lockoutData);
      this.lockoutEndTime = new Date(endTime);
      this.failedAttempts = attempts;
      
      if (this.lockoutEndTime > new Date()) {
        this.isLocked = true;
        this.startLockoutTimer();
      } else {
        this.clearLockout();
      }
    }
  }

  private startLockoutTimer(): void {
    this.lockoutSubscription = interval(1000).subscribe(() => {
      if (this.lockoutEndTime) {
        const now = new Date();
        const diff = this.lockoutEndTime.getTime() - now.getTime();
        
        if (diff <= 0) {
          this.clearLockout();
        } else {
          const minutes = Math.floor(diff / 60000);
          const seconds = Math.floor((diff % 60000) / 1000);
          this.remainingLockoutTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      }
    });
  }

  private clearLockout(): void {
    this.isLocked = false;
    this.failedAttempts = 0;
    this.lockoutEndTime = null;
    this.remainingLockoutTime = '';
    localStorage.removeItem('loginLockout');
    this.lockoutSubscription?.unsubscribe();
  }

  private handleFailedLogin(): void {
    this.failedAttempts++;
    
    if (this.failedAttempts >= this.maxAttempts) {
      this.lockAccount();
    } else {
      localStorage.setItem('loginLockout', JSON.stringify({
        attempts: this.failedAttempts,
        endTime: new Date().getTime()
      }));
    }
  }

  private lockAccount(): void {
    this.isLocked = true;
    const lockoutDuration = 15 * 60 * 1000;
    this.lockoutEndTime = new Date(Date.now() + lockoutDuration);
    
    localStorage.setItem('loginLockout', JSON.stringify({
      endTime: this.lockoutEndTime.getTime(),
      attempts: this.failedAttempts
    }));
    
    this.startLockoutTimer();
  }

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLocked) {
      this.loading = true;
      this.errorMessage = '';
      
      // Simulate login - replace with actual auth
      setTimeout(() => {
        this.loading = false;
        this.errorMessage = 'Invalid email or password';
        this.handleFailedLogin();
      }, 1000);
    }
  }
}
