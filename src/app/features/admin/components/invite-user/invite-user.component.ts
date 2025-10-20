import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFacadeService } from '../../../auth/services/auth-facade.service';

@Component({
  selector: 'app-invite-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="invite-container">
      <div class="invite-card">
        <h2>Invite User</h2>
        <p>Send an invitation to create an account</p>

        <form [formGroup]="inviteForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" formControlName="email" class="form-control" 
                   [class.error]="email?.invalid && email?.touched" placeholder="user@example.com" />
            <div class="error-message" *ngIf="email?.invalid && email?.touched">
              <span *ngIf="email?.errors?.['required']">Email is required</span>
              <span *ngIf="email?.errors?.['email']">Please enter a valid email</span>
            </div>
          </div>

          <div class="form-group">
            <label for="role">Role</label>
            <select id="role" formControlName="role" class="form-control" 
                    [class.error]="role?.invalid && role?.touched">
              <option value="">Select role</option>
              <option value="RECRUITER">Recruiter</option>
              <option value="TENANT_ADMIN">Tenant Admin</option>
              <option value="BILLING_MANAGER">Billing Manager</option>
              <option value="PLATFORM_ADMIN" *ngIf="canInvitePlatformAdmin">Platform Admin</option>
            </select>
            <div class="error-message" *ngIf="role?.invalid && role?.touched">
              <span *ngIf="role?.errors?.['required']">Please select a role</span>
            </div>
          </div>

          <div class="success-message" *ngIf="successMessage">
            {{ successMessage }}
          </div>

          <div class="error-message" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn-primary" [disabled]="inviteForm.invalid || loading">
            <span *ngIf="!loading">Send Invitation</span>
            <span *ngIf="loading">Sending...</span>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .invite-container { padding: 2rem; }
    .invite-card { background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 2rem; max-width: 500px; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    p { color: #64748b; margin-bottom: 2rem; }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.5rem; }
    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; transition: all 0.2s; }
    .form-control:focus { outline: none; border-color: #0066ff; box-shadow: 0 0 0 3px rgba(0,102,255,0.1); }
    .form-control.error { border-color: #ef4444; }
    .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.5rem; }
    .success-message { color: #10b981; font-size: 0.875rem; margin-bottom: 1rem; padding: 0.75rem; background: #d1fae5; border-radius: 8px; }
    .btn-primary { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: #0066ff; color: white; }
    .btn-primary:hover:not(:disabled) { background: #0052cc; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  `]
})
export class InviteUserComponent {
  inviteForm: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';
  canInvitePlatformAdmin = false; // Set based on current user role

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacadeService
  ) {
    this.inviteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });

    // TODO: Check if current user is PLATFORM_SUPER_ADMIN
    this.canInvitePlatformAdmin = true; // Mock for now
  }

  get email() { return this.inviteForm.get('email'); }
  get role() { return this.inviteForm.get('role'); }

  onSubmit() {
    if (this.inviteForm.valid) {
      this.loading = true;
      this.successMessage = '';
      this.errorMessage = '';

      const invitationData = {
        email: this.email?.value,
        role: this.role?.value
      };

      this.authFacade.sendInvitation(invitationData).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = `Invitation sent to ${invitationData.email}`;
          this.inviteForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || 'Failed to send invitation';
        }
      });
    }
  }
}
