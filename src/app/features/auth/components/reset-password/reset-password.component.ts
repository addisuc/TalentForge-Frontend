import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header" *ngIf="!resetSuccess && !invalidToken">
          <h1>Create New Password</h1>
          <p>Enter your new password below</p>
        </div>

        <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" *ngIf="!resetSuccess && !invalidToken">
          <div class="form-group">
            <label for="password">New Password</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              class="form-control"
              [class.error]="password?.invalid && password?.touched"
              placeholder="Enter new password"
            />
            <div class="password-strength" *ngIf="password?.value">
              <div class="strength-bar" [class]="passwordStrength"></div>
              <span class="strength-text">{{ passwordStrengthText }}</span>
            </div>
            <div class="error-message" *ngIf="password?.invalid && password?.touched">
              <span *ngIf="password?.errors?.['required']">Password is required</span>
              <span *ngIf="password?.errors?.['minlength']">Password must be at least 8 characters</span>
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              formControlName="confirmPassword"
              class="form-control"
              [class.error]="confirmPassword?.invalid && confirmPassword?.touched"
              placeholder="Confirm new password"
            />
            <div class="error-message" *ngIf="confirmPassword?.invalid && confirmPassword?.touched">
              <span *ngIf="confirmPassword?.errors?.['required']">Please confirm your password</span>
              <span *ngIf="confirmPassword?.errors?.['passwordMismatch']">Passwords do not match</span>
            </div>
          </div>

          <div class="error-message" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn-primary" [disabled]="resetPasswordForm.invalid || loading">
            <span *ngIf="!loading">Reset Password</span>
            <span *ngIf="loading">Resetting...</span>
          </button>
        </form>

        <div class="success-message" *ngIf="resetSuccess">
          <div class="success-icon">✓</div>
          <h2>Password Reset Successful</h2>
          <p>Your password has been successfully reset</p>
          <button (click)="goToLogin()" class="btn-primary">Go to Login</button>
        </div>

        <div class="error-state" *ngIf="invalidToken">
          <div class="error-icon">✕</div>
          <h2>Invalid or Expired Link</h2>
          <p>This password reset link is invalid or has expired</p>
          <a routerLink="/auth/forgot-password" class="btn-primary">Request New Link</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); padding: 2rem; position: relative; overflow: hidden; }
    .auth-container::before { content: ''; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); }
    .auth-container::after { content: ''; position: absolute; bottom: -50%; left: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); }
    .auth-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); padding: 3rem; max-width: 450px; width: 100%; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.2); }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .auth-header p { color: #64748b; font-size: 0.875rem; }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; transition: all 0.2s; }
    .form-control:focus { outline: none; border-color: #0066ff; box-shadow: 0 0 0 3px rgba(0,102,255,0.1); }
    .form-control.error { border-color: #ef4444; }
    .password-strength { margin-top: 0.5rem; }
    .strength-bar { height: 4px; border-radius: 2px; transition: all 0.3s; }
    .strength-bar.weak { width: 33%; background: #ef4444; }
    .strength-bar.medium { width: 66%; background: #f59e0b; }
    .strength-bar.strong { width: 100%; background: #10b981; }
    .strength-text { font-size: 0.75rem; color: #64748b; margin-top: 0.25rem; display: block; }
    .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .btn-primary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: #0066ff; color: white; text-decoration: none; display: block; text-align: center; }
    .btn-primary:hover:not(:disabled) { background: #0052cc; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .success-message, .error-state { text-align: center; }
    .success-icon { width: 64px; height: 64px; background: #d1fae5; color: #065f46; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    .error-icon { width: 64px; height: 64px; background: #fee2e2; color: #991b1b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    .success-message h2, .error-state h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }
    .success-message p, .error-state p { color: #64748b; margin-bottom: 1.5rem; }
  `]
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  loading = false;
  errorMessage = '';
  resetSuccess = false;
  invalidToken = false;
  token = '';
  passwordStrength = '';
  passwordStrengthText = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacadeService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    if (!this.token || this.token === 'invalid-token') {
      this.invalidToken = true;
      return;
    }

    this.password?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  updatePasswordStrength(password: string) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) {
      this.passwordStrength = 'weak';
      this.passwordStrengthText = 'Weak password';
    } else if (strength === 3) {
      this.passwordStrength = 'medium';
      this.passwordStrengthText = 'Medium password';
    } else {
      this.passwordStrength = 'strong';
      this.passwordStrengthText = 'Strong password';
    }
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      // TODO: Integrate with backend API
      setTimeout(() => {
        this.loading = false;
        this.resetSuccess = true;
      }, 1500);

      // Uncomment when backend is ready:
      // this.authFacade.resetPassword(this.token, this.password?.value).subscribe({
      //   next: () => {
      //     this.loading = false;
      //     this.resetSuccess = true;
      //   },
      //   error: (error) => {
      //     this.loading = false;
      //     if (error.status === 400 || error.status === 404) {
      //       this.invalidToken = true;
      //     } else {
      //       this.errorMessage = error.message || 'Failed to reset password. Please try again.';
      //     }
      //   }
      // });
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
