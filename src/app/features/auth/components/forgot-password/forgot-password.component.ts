import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1>Reset Password</h1>
          <p>Enter your email address and we'll send you a link to reset your password</p>
        </div>

        <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" *ngIf="!emailSent">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              class="form-control"
              [class.error]="email?.invalid && email?.touched"
              placeholder="Enter your email"
            />
            <div class="error-message" *ngIf="email?.invalid && email?.touched">
              <span *ngIf="email?.errors?.['required']">Email is required</span>
              <span *ngIf="email?.errors?.['email']">Please enter a valid email</span>
            </div>
          </div>

          <div class="error-message" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn-primary" [disabled]="forgotPasswordForm.invalid || loading">
            <span *ngIf="!loading">Send Reset Link</span>
            <span *ngIf="loading">Sending...</span>
          </button>

          <div class="auth-footer">
            <a routerLink="/auth/login" class="link">Back to Login</a>
          </div>
        </form>

        <div class="success-message" *ngIf="emailSent">
          <div class="success-icon">✓</div>
          <h2>Check Your Email</h2>
          <p>We've sent a password reset link to <strong>{{ submittedEmail }}</strong></p>
          <p class="hint">If you don't see the email, check your spam folder</p>
          <button (click)="resendEmail()" class="btn-secondary" [disabled]="resendCooldown > 0">
            <span *ngIf="resendCooldown === 0">Resend Email</span>
            <span *ngIf="resendCooldown > 0">Resend in {{ resendCooldown }}s</span>
          </button>
          <a routerLink="/auth/login" class="link">Back to Login</a>
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
    .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .btn-primary, .btn-secondary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-primary { background: #0066ff; color: white; margin-bottom: 1rem; }
    .btn-primary:hover:not(:disabled) { background: #0052cc; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; margin-bottom: 1rem; }
    .btn-secondary:hover:not(:disabled) { background: #f0f7ff; }
    .btn-secondary:disabled { opacity: 0.6; cursor: not-allowed; }
    .auth-footer { text-align: center; margin-top: 1.5rem; }
    .link { color: #0066ff; text-decoration: none; font-size: 0.875rem; display: block; margin-top: 1rem; }
    .link:hover { text-decoration: underline; }
    .success-message { text-align: center; }
    .success-icon { width: 64px; height: 64px; background: #d1fae5; color: #065f46; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    .success-message h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }
    .success-message p { color: #64748b; margin-bottom: 0.5rem; }
    .success-message .hint { font-size: 0.875rem; margin-bottom: 1.5rem; }
  `]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading = false;
  errorMessage = '';
  emailSent = false;
  submittedEmail = '';
  resendCooldown = 0;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacadeService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.submittedEmail = this.email?.value;

      this.authFacade.forgotPassword(this.email?.value).subscribe({
        next: () => {
          this.loading = false;
          this.emailSent = true;
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 404 || error.error?.errorCode === 'USER_NOT_FOUND') {
            this.errorMessage = 'No account found with this email address.';
          } else if (error.status === 401) {
            this.errorMessage = 'Unable to process request. Please try again.';
          } else {
            this.errorMessage = 'Failed to send reset email. Please try again later.';
          }
        }
      });
    }
  }

  resendEmail() {
    this.resendCooldown = 60;
    const interval = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1000);

    this.authFacade.forgotPassword(this.submittedEmail).subscribe();
  }
}
