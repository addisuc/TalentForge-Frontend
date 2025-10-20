import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div *ngIf="verifying" class="verifying-state">
          <div class="spinner"></div>
          <h2>Verifying Your Email</h2>
          <p>Please wait while we verify your email address...</p>
        </div>

        <div *ngIf="verificationSuccess" class="success-message">
          <div class="success-icon">✓</div>
          <h2>Email Verified!</h2>
          <p>Your email has been successfully verified</p>
          <button (click)="goToLogin()" class="btn-primary">Continue to Login</button>
        </div>

        <div *ngIf="verificationFailed" class="error-state">
          <div class="error-icon">✕</div>
          <h2>Verification Failed</h2>
          <p>{{ errorMessage }}</p>
          <button (click)="resendVerification()" class="btn-secondary" [disabled]="resending || resendCooldown > 0">
            <span *ngIf="!resending && resendCooldown === 0">Resend Verification Email</span>
            <span *ngIf="resending">Sending...</span>
            <span *ngIf="resendCooldown > 0">Resend in {{ resendCooldown }}s</span>
          </button>
          <a routerLink="/auth/login" class="link">Back to Login</a>
        </div>

        <div *ngIf="resendSuccess" class="success-message">
          <div class="success-icon">✓</div>
          <h2>Email Sent!</h2>
          <p>We've sent a new verification email. Please check your inbox.</p>
          <a routerLink="/auth/login" class="link">Back to Login</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); padding: 2rem; position: relative; overflow: hidden; }
    .auth-container::before { content: ''; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); }
    .auth-container::after { content: ''; position: absolute; bottom: -50%; left: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); }
    .auth-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); padding: 3rem; max-width: 450px; width: 100%; text-align: center; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.2); }
    .verifying-state, .success-message, .error-state { text-align: center; }
    .spinner { width: 48px; height: 48px; border: 4px solid #e2e8f0; border-top-color: #0066ff; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1.5rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .success-icon { width: 64px; height: 64px; background: #d1fae5; color: #065f46; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    .error-icon { width: 64px; height: 64px; background: #fee2e2; color: #991b1b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }
    p { color: #64748b; margin-bottom: 1.5rem; }
    .btn-primary, .btn-secondary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; margin-bottom: 1rem; }
    .btn-primary { background: #0066ff; color: white; }
    .btn-primary:hover { background: #0052cc; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; }
    .btn-secondary:hover:not(:disabled) { background: #f0f7ff; }
    .btn-secondary:disabled { opacity: 0.6; cursor: not-allowed; }
    .link { color: #0066ff; text-decoration: none; font-size: 0.875rem; display: block; margin-top: 1rem; }
    .link:hover { text-decoration: underline; }
  `]
})
export class VerifyEmailComponent implements OnInit {
  verifying = true;
  verificationSuccess = false;
  verificationFailed = false;
  resendSuccess = false;
  resending = false;
  errorMessage = '';
  token = '';
  resendCooldown = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacadeService
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    
    if (!this.token) {
      this.verifying = false;
      this.verificationFailed = true;
      this.errorMessage = 'Invalid verification link';
      return;
    }

    this.verifyEmail();
  }

  verifyEmail() {
    this.authFacade.verifyEmail(this.token).subscribe({
      next: () => {
        this.verifying = false;
        this.verificationSuccess = true;
      },
      error: (error) => {
        this.verifying = false;
        this.verificationFailed = true;
        this.errorMessage = error.message || 'The verification link is invalid or has expired';
      }
    });
  }

  resendVerification() {
    this.resending = true;
    this.authFacade.resendVerificationEmail(this.token).subscribe({
      next: () => {
        this.resending = false;
        this.verificationFailed = false;
        this.resendSuccess = true;
        this.startResendCooldown();
      },
      error: () => {
        this.resending = false;
        this.errorMessage = 'Failed to resend verification email';
      }
    });
  }

  startResendCooldown() {
    this.resendCooldown = 60;
    const interval = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
