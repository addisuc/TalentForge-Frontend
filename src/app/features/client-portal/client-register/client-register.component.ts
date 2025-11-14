import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../shared/material/material.module';
import { ClientService } from '../../../core/services/client.service';

@Component({
  selector: 'app-client-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  template: `
    <div class="register-page">
      <div class="register-container">
        <div class="register-card">
          <!-- Header -->
          <div class="header">
            <div class="logo">
              <h1>TalentForge</h1>
              <p>Client Portal</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content">
            <div *ngIf="errorMessage" class="alert error">
              <span class="icon">⚠️</span>
              {{ errorMessage }}
            </div>

            <div *ngIf="isLoading && !invitationData" class="loading">
              <div class="spinner"></div>
              <p>Verifying invitation...</p>
            </div>

            <div *ngIf="invitationData && !isRegistered">
              <div class="welcome">
                <h2>Complete Your Registration</h2>
                <p>Welcome to {{ invitationData.companyName }}</p>
              </div>

              <div class="invitation-info">
                <div class="info-item">
                  <span class="label">Company:</span>
                  <span class="value">{{ invitationData.companyName }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Email:</span>
                  <span class="value">{{ invitationData.email }}</span>
                </div>
              </div>

              <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="register-form">
                <div class="form-group">
                  <label>Create Password</label>
                  <div class="input-group">
                    <input 
                      [type]="hidePassword ? 'password' : 'text'" 
                      formControlName="password" 
                      class="form-control"
                      placeholder="Enter your password">
                    <button type="button" class="toggle-password" (click)="hidePassword = !hidePassword">
                      {{ hidePassword ? '👁️' : '🙈' }}
                    </button>
                  </div>
                  <div *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched" class="error-text">
                    <span *ngIf="registerForm.get('password')?.errors?.['required']">Password is required</span>
                    <span *ngIf="registerForm.get('password')?.errors?.['minlength']">Password must be at least 8 characters</span>
                  </div>
                </div>

                <div class="form-group">
                  <label>Confirm Password</label>
                  <input 
                    type="password" 
                    formControlName="confirmPassword" 
                    class="form-control"
                    placeholder="Confirm your password">
                  <div *ngIf="registerForm.get('confirmPassword')?.invalid && registerForm.get('confirmPassword')?.touched" class="error-text">
                    <span *ngIf="registerForm.get('confirmPassword')?.errors?.['required']">Please confirm your password</span>
                    <span *ngIf="registerForm.get('confirmPassword')?.errors?.['mismatch']">Passwords do not match</span>
                  </div>
                </div>

                <button type="submit" class="btn-primary" [disabled]="registerForm.invalid || isSubmitting">
                  <span *ngIf="isSubmitting" class="spinner-small"></span>
                  {{ isSubmitting ? 'Creating Account...' : 'Complete Registration' }}
                </button>
              </form>
            </div>

            <div *ngIf="isRegistered" class="success">
              <div class="success-icon">✅</div>
              <h2>Registration Complete!</h2>
              <p>Your account has been created successfully.</p>
              <button class="btn-primary" (click)="goToLogin()">Sign In Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .register-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      font-family: 'Inter', sans-serif;
    }

    .register-container {
      width: 100%;
      max-width: 480px;
    }

    .register-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #0066ff, #00d4ff);
      color: white;
      padding: 2rem;
      text-align: center;
    }

    .logo h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.25rem 0;
    }

    .logo p {
      margin: 0;
      opacity: 0.9;
      font-size: 0.875rem;
    }

    .content {
      padding: 2rem;
    }

    .welcome {
      text-align: center;
      margin-bottom: 2rem;
    }

    .welcome h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #0f172a;
      margin: 0 0 0.5rem 0;
    }

    .welcome p {
      color: #64748b;
      margin: 0;
    }

    .invitation-info {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1.25rem;
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      margin-bottom: 0.75rem;
    }

    .info-item:last-child {
      margin-bottom: 0;
    }

    .label {
      font-weight: 600;
      color: #374151;
      min-width: 80px;
      margin-right: 1rem;
    }

    .value {
      color: #0f172a;
      flex: 1;
    }

    .register-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .input-group {
      position: relative;
      display: flex;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .form-control:focus {
      outline: none;
      border-color: #0066ff;
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    }

    .toggle-password {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .error-text {
      color: #dc2626;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0066ff, #00d4ff);
      color: white;
      border: none;
      padding: 0.875rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .alert {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .alert.error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }

    .loading {
      text-align: center;
      padding: 3rem 0;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top: 3px solid #0066ff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    .spinner-small {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .success {
      text-align: center;
      padding: 2rem 0;
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .success h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #0f172a;
      margin: 0 0 0.5rem 0;
    }

    .success p {
      color: #64748b;
      margin: 0 0 2rem 0;
    }

    @media (max-width: 640px) {
      .register-page {
        padding: 1rem;
      }
      
      .header {
        padding: 1.5rem;
      }
      
      .content {
        padding: 1.5rem;
      }
    }
  `]
})
export class ClientRegisterComponent implements OnInit {
  registerForm: FormGroup;
  invitationData: any = null;
  isLoading = true;
  isSubmitting = false;
  isRegistered = false;
  errorMessage = '';
  hidePassword = true;
  token = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.registerForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];
    if (!this.token) {
      this.errorMessage = 'Invalid invitation link';
      this.isLoading = false;
      return;
    }

    this.verifyInvitation();
  }

  verifyInvitation(): void {
    this.clientService.verifyInvitation(this.token).subscribe({
      next: (data) => {
        this.invitationData = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.error || 'Invalid or expired invitation';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const password = this.registerForm.get('password')?.value;
      
      this.clientService.registerInvitedClient(this.token, password).subscribe({
        next: () => {
          this.isRegistered = true;
          this.isSubmitting = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.error || 'Registration failed';
          this.isSubmitting = false;
        }
      });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/client-login']);
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    }
    
    return null;
  }
}