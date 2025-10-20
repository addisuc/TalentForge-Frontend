import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/auth/auth.service';
import { UserRole } from '../../../core/models/user.model';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  template: `
    <div class="register-container">
      <mat-card class="register-card">
        <mat-card-header>
          <mat-card-title>Join TalentForge</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div class="name-row">
              <mat-form-field appearance="outline" class="half-width">
                <mat-label>First Name</mat-label>
                <input matInput formControlName="firstName" required>
                <mat-error *ngIf="registerForm.get('firstName')?.hasError('required')">
                  First name is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="half-width">
                <mat-label>Last Name</mat-label>
                <input matInput formControlName="lastName" required>
                <mat-error *ngIf="registerForm.get('lastName')?.hasError('required')">
                  Last name is required
                </mat-error>
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email" required>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Please enter a valid email
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <input matInput type="password" formControlName="password" required>
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Password must be at least 8 characters
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Confirm Password</mat-label>
              <input matInput type="password" formControlName="confirmPassword" required>
              <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('required')">
                Please confirm your password
              </mat-error>
              <mat-error *ngIf="registerForm.hasError('passwordMismatch')">
                Passwords do not match
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>I am a...</mat-label>
              <mat-select formControlName="role" required>
                <mat-option [value]="UserRole.CANDIDATE">
                  <div class="role-option">
                    <strong>Job Seeker</strong>
                    <small>Looking for opportunities</small>
                  </div>
                </mat-option>
                <mat-option [value]="UserRole.RECRUITER">
                  <div class="role-option">
                    <strong>Recruiter</strong>
                    <small>Talent acquisition professional</small>
                  </div>
                </mat-option>
                <mat-option [value]="UserRole.CLIENT">
                  <div class="role-option">
                    <strong>Hiring Manager</strong>
                    <small>Company representative</small>
                  </div>
                </mat-option>
              </mat-select>
              <mat-error *ngIf="registerForm.get('role')?.hasError('required')">
                Please select your role
              </mat-error>
            </mat-form-field>

            <mat-checkbox formControlName="acceptTerms" class="terms-checkbox">
              I agree to the <a href="/terms" target="_blank">Terms of Service</a> 
              and <a href="/privacy" target="_blank">Privacy Policy</a>
            </mat-checkbox>

            <button mat-raised-button color="primary" type="submit" 
                    class="full-width register-button" 
                    [disabled]="registerForm.invalid || loading">
              <mat-spinner diameter="20" *ngIf="loading"></mat-spinner>
              <span *ngIf="!loading">Create Account</span>
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions align="center">
          <p>Already have an account? 
            <a routerLink="/auth/login" mat-button color="primary">Sign In</a>
          </p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .register-card {
      width: 100%;
      max-width: 500px;
      padding: 20px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .name-row {
      display: flex;
      gap: 16px;
    }

    .half-width {
      flex: 1;
      margin-bottom: 16px;
    }

    .register-button {
      margin-top: 16px;
      height: 48px;
    }

    .terms-checkbox {
      margin-bottom: 16px;
    }

    .role-option {
      display: flex;
      flex-direction: column;
    }

    .role-option small {
      color: rgba(0,0,0,0.6);
      font-size: 12px;
    }

    mat-card-title {
      text-align: center;
      margin-bottom: 20px;
    }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  UserRole = UserRole;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
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
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      const { firstName, lastName, email, password, role } = this.registerForm.value;

      this.authService.register({ firstName, lastName, email, password, role }).subscribe({
        next: (response) => {
          this.loading = false;
          this.snackBar.open('Registration successful! Welcome to TalentForge!', 'Close', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;
          this.snackBar.open('Registration failed. Please try again.', 'Close', { duration: 5000 });
        }
      });
    }
  }
}