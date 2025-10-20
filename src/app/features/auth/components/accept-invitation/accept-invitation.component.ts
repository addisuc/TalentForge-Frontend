import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-accept-invitation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div *ngIf="validating" class="validating-state">
          <div class="spinner"></div>
          <h2>Validating Invitation</h2>
          <p>Please wait...</p>
        </div>

        <div *ngIf="invalidToken" class="error-state">
          <div class="error-icon">✕</div>
          <h2>Invalid Invitation</h2>
          <p>This invitation link is invalid or has expired.</p>
          <a routerLink="/auth/login" class="btn-secondary">Go to Login</a>
        </div>

        <div *ngIf="validToken && !submitted">
          <div class="auth-header">
            <h1>Accept Invitation</h1>
            <p>Complete your account setup</p>
            <div class="invitation-info">
              <span class="role-badge">{{ invitationRole }}</span>
              <span class="email">{{ invitationEmail }}</span>
            </div>
          </div>

          <form [formGroup]="acceptForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" formControlName="firstName" class="form-control" 
                       [class.error]="firstName?.invalid && firstName?.touched" placeholder="John" />
                <div class="error-message" *ngIf="firstName?.invalid && firstName?.touched">
                  <span *ngIf="firstName?.errors?.['required']">First name is required</span>
                </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" formControlName="lastName" class="form-control" 
                       [class.error]="lastName?.invalid && lastName?.touched" placeholder="Doe" />
                <div class="error-message" *ngIf="lastName?.invalid && lastName?.touched">
                  <span *ngIf="lastName?.errors?.['required']">Last name is required</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input id="password" type="password" formControlName="password" class="form-control" 
                     [class.error]="password?.invalid && password?.touched" placeholder="Create a strong password" />
              <div class="password-strength" *ngIf="password?.value">
                <div class="strength-bar" [class]="passwordStrength"></div>
                <div class="strength-details">
                  <span class="strength-text">{{ passwordStrengthText }}</span>
                  <div class="requirements">
                    <span [class.met]="hasMinLength">✓ 8+ characters</span>
                    <span [class.met]="hasUpperLower">✓ Upper & lowercase</span>
                    <span [class.met]="hasNumber">✓ Number</span>
                    <span [class.met]="hasSpecial">✓ Special character</span>
                  </div>
                </div>
              </div>
              <div class="error-message" *ngIf="password?.invalid && password?.touched">
                <span *ngIf="password?.errors?.['required']">Password is required</span>
                <span *ngIf="password?.errors?.['minlength']">Password must be at least 8 characters</span>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" formControlName="confirmPassword" class="form-control" 
                     [class.error]="confirmPassword?.invalid && confirmPassword?.touched" placeholder="Re-enter your password" />
              <div class="error-message" *ngIf="confirmPassword?.invalid && confirmPassword?.touched">
                <span *ngIf="confirmPassword?.errors?.['required']">Please confirm your password</span>
                <span *ngIf="confirmPassword?.errors?.['passwordMismatch']">Passwords do not match</span>
              </div>
            </div>

            <div class="error-message" *ngIf="errorMessage">
              {{ errorMessage }}
            </div>

            <button type="submit" class="btn-primary" [disabled]="acceptForm.invalid || loading">
              <span *ngIf="!loading">Accept Invitation</span>
              <span *ngIf="loading">Setting up account...</span>
            </button>
          </form>
        </div>

        <div *ngIf="submitted" class="success-state">
          <div class="success-icon">✓</div>
          <h2>Account Created!</h2>
          <p>Your account has been successfully created.</p>
          <button (click)="goToLogin()" class="btn-primary">Continue to Login</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%); padding: 2rem; position: relative; overflow: hidden; }
    .auth-container::before { content: ''; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); }
    .auth-container::after { content: ''; position: absolute; bottom: -50%; left: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); }
    .auth-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); padding: 3rem; max-width: 500px; width: 100%; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.2); }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .auth-header p { color: #64748b; font-size: 0.875rem; margin-bottom: 1rem; }
    .invitation-info { display: flex; flex-direction: column; gap: 0.5rem; align-items: center; }
    .role-badge { background: #0066ff; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .email { color: #64748b; font-size: 0.875rem; }
    .validating-state, .error-state, .success-state { text-align: center; }
    .spinner { width: 48px; height: 48px; border: 4px solid #e2e8f0; border-top-color: #0066ff; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1.5rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .success-icon { width: 64px; height: 64px; background: #d1fae5; color: #065f46; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    .error-icon { width: 64px; height: 64px; background: #fee2e2; color: #991b1b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; margin: 0 auto 1.5rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }
    p { color: #64748b; margin-bottom: 1.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; transition: all 0.2s; }
    .form-control:focus { outline: none; border-color: #0066ff; box-shadow: 0 0 0 3px rgba(0,102,255,0.1); }
    .form-control.error { border-color: #ef4444; }
    .password-strength { margin-top: 0.5rem; }
    .strength-bar { height: 4px; border-radius: 2px; transition: all 0.3s; margin-bottom: 0.5rem; }
    .strength-bar.weak { width: 25%; background: #ef4444; }
    .strength-bar.fair { width: 50%; background: #f59e0b; }
    .strength-bar.good { width: 75%; background: #3b82f6; }
    .strength-bar.strong { width: 100%; background: #10b981; }
    .strength-details { display: flex; justify-content: space-between; align-items: center; }
    .strength-text { font-size: 0.75rem; font-weight: 600; }
    .requirements { display: flex; gap: 0.5rem; font-size: 0.65rem; color: #94a3b8; }
    .requirements span.met { color: #10b981; }
    .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .btn-primary, .btn-secondary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-primary { background: #0066ff; color: white; }
    .btn-primary:hover:not(:disabled) { background: #0052cc; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-secondary { background: white; color: #0066ff; border: 1px solid #0066ff; text-decoration: none; display: block; text-align: center; }
    .btn-secondary:hover { background: #f0f7ff; }
  `]
})
export class AcceptInvitationComponent implements OnInit {
  acceptForm: FormGroup;
  validating = true;
  validToken = false;
  invalidToken = false;
  submitted = false;
  loading = false;
  errorMessage = '';
  token = '';
  invitationEmail = '';
  invitationRole = '';
  passwordStrength = '';
  passwordStrengthText = '';
  hasMinLength = false;
  hasUpperLower = false;
  hasNumber = false;
  hasSpecial = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacadeService
  ) {
    this.acceptForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.password?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    
    if (!this.token) {
      this.validating = false;
      this.invalidToken = true;
      return;
    }

    this.validateInvitation();
  }

  validateInvitation() {
    this.authFacade.validateInvitation(this.token).subscribe({
      next: (data) => {
        this.validating = false;
        this.validToken = true;
        this.invitationEmail = data.email;
        this.invitationRole = this.formatRole(data.role);
      },
      error: () => {
        this.validating = false;
        this.invalidToken = true;
      }
    });
  }

  formatRole(role: string): string {
    const roleMap: { [key: string]: string } = {
      'TENANT_ADMIN': 'Tenant Admin',
      'BILLING_MANAGER': 'Billing Manager',
      'PLATFORM_ADMIN': 'Platform Admin',
      'RECRUITER': 'Recruiter'
    };
    return roleMap[role] || role;
  }

  get firstName() { return this.acceptForm.get('firstName'); }
  get lastName() { return this.acceptForm.get('lastName'); }
  get password() { return this.acceptForm.get('password'); }
  get confirmPassword() { return this.acceptForm.get('confirmPassword'); }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (!password || !confirmPassword) return null;
    
    if (confirmPassword.value && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    if (confirmPassword.hasError('passwordMismatch')) {
      confirmPassword.setErrors(null);
    }
    
    return null;
  }

  updatePasswordStrength(password: string) {
    this.hasMinLength = password.length >= 8;
    this.hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecial = /[^a-zA-Z0-9]/.test(password);

    const score = [this.hasMinLength, this.hasUpperLower, this.hasNumber, this.hasSpecial].filter(Boolean).length;

    if (score <= 1) {
      this.passwordStrength = 'weak';
      this.passwordStrengthText = 'Weak';
    } else if (score === 2) {
      this.passwordStrength = 'fair';
      this.passwordStrengthText = 'Fair';
    } else if (score === 3) {
      this.passwordStrength = 'good';
      this.passwordStrengthText = 'Good';
    } else {
      this.passwordStrength = 'strong';
      this.passwordStrengthText = 'Strong';
    }
  }

  onSubmit() {
    if (this.acceptForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const acceptData = {
        token: this.token,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        password: this.password?.value
      };

      this.authFacade.acceptInvitation(acceptData).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || 'Failed to accept invitation';
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
