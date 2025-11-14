import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ClientService } from '../../core/services/client.service';

@Component({
  selector: 'app-invite-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  template: `
    <div class="invite-container">
      <mat-card class="invite-card">
        <mat-card-header>
          <mat-card-title>
            <mat-icon>send</mat-icon>
            Invite Client
          </mat-card-title>
          <mat-card-subtitle>Send an invitation to a new client</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="inviteForm" (ngSubmit)="onSubmit()" class="invite-form">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Company Name</mat-label>
              <input matInput formControlName="companyName" placeholder="Enter company name">
              <mat-icon matSuffix>business</mat-icon>
              <mat-error *ngIf="inviteForm.get('companyName')?.invalid && inviteForm.get('companyName')?.touched">
                Company name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Contact Person</mat-label>
              <input matInput formControlName="contactPerson" placeholder="Enter contact person name">
              <mat-icon matSuffix>person</mat-icon>
              <mat-error *ngIf="inviteForm.get('contactPerson')?.invalid && inviteForm.get('contactPerson')?.touched">
                Contact person is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email Address</mat-label>
              <input matInput type="email" formControlName="email" placeholder="Enter email address">
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="inviteForm.get('email')?.invalid && inviteForm.get('email')?.touched">
                <span *ngIf="inviteForm.get('email')?.errors?.['required']">Email is required</span>
                <span *ngIf="inviteForm.get('email')?.errors?.['email']">Please enter a valid email</span>
              </mat-error>
            </mat-form-field>

            <div class="form-actions">
              <button mat-button type="button" (click)="onCancel()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" [disabled]="inviteForm.invalid || isLoading">
                <mat-spinner *ngIf="isLoading" diameter="20"></mat-spinner>
                <span *ngIf="!isLoading">Send Invitation</span>
                <span *ngIf="isLoading">Sending...</span>
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>

      <div *ngIf="successMessage" class="success-message">
        <mat-icon>check_circle</mat-icon>
        {{ successMessage }}
      </div>
    </div>
  `,
  styles: [`
    .invite-container {
      max-width: 500px;
      margin: 2rem auto;
      padding: 1rem;
    }

    .invite-card {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .invite-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .full-width {
      width: 100%;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 1rem;
    }

    .success-message {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #e8f5e8;
      color: #2e7d32;
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1rem;
    }

    mat-card-header mat-icon {
      margin-right: 0.5rem;
    }
  `]
})
export class InviteClientComponent {
  inviteForm: FormGroup;
  isLoading = false;
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.inviteForm = this.fb.group({
      companyName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.inviteForm.valid && !this.isLoading) {
      this.isLoading = true;
      
      this.clientService.inviteClient(this.inviteForm.value).subscribe({
        next: (response) => {
          this.successMessage = `Invitation sent successfully to ${this.inviteForm.value.email}`;
          this.inviteForm.reset();
          this.isLoading = false;
          
          // Navigate back after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/clients']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error sending invitation:', error);
          this.isLoading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/clients']);
  }
}