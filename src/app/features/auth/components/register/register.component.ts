import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1>Create Account</h1>
          <p>Join TalentForge today</p>
        </div>

        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
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
            <label for="email">Email Address</label>
            <input id="email" type="email" formControlName="email" class="form-control" 
                   [class.error]="email?.invalid && email?.touched" placeholder="john@example.com" />
            <div class="error-message" *ngIf="email?.invalid && email?.touched">
              <span *ngIf="email?.errors?.['required']">Email is required</span>
              <span *ngIf="email?.errors?.['email']">Please enter a valid email</span>
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

          <div class="form-group">
            <label for="role">I am a</label>
            <select id="role" formControlName="role" class="form-control" 
                    [class.error]="role?.invalid && role?.touched">
              <option value="">Select your role</option>
              <option value="CANDIDATE">Job Seeker</option>
              <option value="RECRUITER">Recruiter</option>
            </select>
            <div class="error-message" *ngIf="role?.invalid && role?.touched">
              <span *ngIf="role?.errors?.['required']">Please select a role</span>
            </div>
          </div>

          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="acceptTerms" />
              <span>I agree to the <a href="#" class="link">Terms of Service</a> and <a href="#" class="link">Privacy Policy</a></span>
            </label>
            <div class="error-message" *ngIf="acceptTerms?.invalid && acceptTerms?.touched">
              <span>You must accept the terms and conditions</span>
            </div>
          </div>

          <div class="error-message" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn-primary" [disabled]="registerForm.invalid || loading">
            <span *ngIf="!loading">Create Account</span>
            <span *ngIf="loading">Creating Account...</span>
          </button>

          <div class="auth-footer">
            <span>Already have an account? </span>
            <a routerLink="/auth/login" class="link">Sign in</a>
          </div>
        </form>
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
    .auth-header p { color: #64748b; font-size: 0.875rem; }
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
    .checkbox-group { margin-bottom: 1.5rem; }
    .checkbox-label { display: flex; align-items: start; gap: 0.5rem; font-size: 0.875rem; color: #475569; cursor: pointer; }
    .checkbox-label input { margin-top: 0.25rem; }
    .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .btn-primary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: #0066ff; color: white; margin-bottom: 1rem; }
    .btn-primary:hover:not(:disabled) { background: #0052cc; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .auth-footer { text-align: center; font-size: 0.875rem; color: #64748b; }
    .link { color: #0066ff; text-decoration: none; }
    .link:hover { text-decoration: underline; }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMessage = '';
  passwordStrength = '';
  passwordStrengthText = '';
  hasMinLength = false;
  hasUpperLower = false;
  hasNumber = false;
  hasSpecial = false;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacadeService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });

    this.password?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get role() { return this.registerForm.get('role'); }
  get acceptTerms() { return this.registerForm.get('acceptTerms'); }

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
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const userData = {
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        email: this.email?.value,
        password: this.password?.value,
        role: this.role?.value
      };

      this.authFacade.register(userData);
      
      // TODO: Handle success/error from store
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/auth/login']);
      }, 1500);
    }
  }
}