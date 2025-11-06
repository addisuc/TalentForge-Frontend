import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackgroundCheckService, BackgroundCheckProvider, CheckType } from '../../core/services/background-check.service';
import { ToastService } from '../../shared/components/toast/toast.service';

@Component({
  selector: 'app-background-check-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Initiate Background Check</h2>
          <button class="close-btn" (click)="close()">&times;</button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label>Provider</label>
            <select [(ngModel)]="provider" class="form-control">
              <option value="CHECKR">Checkr</option>
              <option value="HIRERIGHT">HireRight</option>
              <option value="STERLING">Sterling</option>
            </select>
          </div>

          <div class="form-group">
            <label>Check Types</label>
            <div class="checkbox-group">
              <label><input type="checkbox" [(ngModel)]="checkTypes.CRIMINAL"> Criminal History</label>
              <label><input type="checkbox" [(ngModel)]="checkTypes.EMPLOYMENT"> Employment Verification</label>
              <label><input type="checkbox" [(ngModel)]="checkTypes.EDUCATION"> Education Verification</label>
              <label><input type="checkbox" [(ngModel)]="checkTypes.CREDIT"> Credit Check</label>
              <label><input type="checkbox" [(ngModel)]="checkTypes.IDENTITY"> Identity Verification</label>
            </div>
          </div>

          <div class="form-group">
            <label class="consent-label">
              <input type="checkbox" [(ngModel)]="candidateConsent"> 
              <strong>Candidate has provided consent *</strong>
            </label>
            <small>Required: Candidate must sign FCRA disclosure forms</small>
          </div>

          <div class="alert alert-info">
            <strong>FCRA Compliance:</strong> Ensure candidate has signed disclosure and authorization forms before initiating background check.
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" (click)="close()">Cancel</button>
          <button class="btn btn-primary" (click)="initiate()" [disabled]="!canInitiate()">Initiate Check</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal-header {
      padding: 20px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-body {
      padding: 20px;
    }
    .modal-footer {
      padding: 20px;
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .checkbox-group label {
      display: block;
      margin-bottom: 8px;
    }
    .alert {
      padding: 12px;
      border-radius: 4px;
      margin-top: 15px;
    }
    .alert-info {
      background: #e3f2fd;
      border: 1px solid #2196f3;
      color: #1976d2;
    }
    .consent-label {
      color: #d32f2f;
      font-weight: bold;
    }
    .consent-label input {
      margin-right: 8px;
    }
  `]
})
export class BackgroundCheckModalComponent {
  @Input() applicationId!: string;
  @Output() closed = new EventEmitter<void>();
  @Output() initiated = new EventEmitter<void>();

  provider: BackgroundCheckProvider = 'CHECKR';
  checkTypes = {
    CRIMINAL: true,
    EMPLOYMENT: true,
    EDUCATION: false,
    CREDIT: false,
    IDENTITY: true
  };
  candidateConsent = false;

  constructor(
    private backgroundCheckService: BackgroundCheckService,
    private toastService: ToastService
  ) {}

  canInitiate(): boolean {
    const hasSelectedTypes = Object.values(this.checkTypes).some(v => v);
    const canProceed = this.candidateConsent && hasSelectedTypes;
    console.log('Can initiate:', { candidateConsent: this.candidateConsent, hasSelectedTypes, canProceed });
    return canProceed;
  }

  initiate() {
    const selectedTypes = Object.entries(this.checkTypes)
      .filter(([_, selected]) => selected)
      .map(([type, _]) => type as CheckType);

    this.backgroundCheckService.initiateCheck({
      applicationId: this.applicationId,
      provider: this.provider,
      checkTypes: selectedTypes,
      candidateConsent: this.candidateConsent
    }).subscribe({
      next: () => {
        this.toastService.success('Background check initiated successfully! The application will be moved to the background check stage.');
        this.initiated.emit();
        this.close();
      },
      error: (err) => {
        console.error('Failed to initiate background check:', err);
        this.toastService.error('Failed to initiate background check. Please try again.');
      }
    });
  }

  close() {
    this.closed.emit();
  }
}
