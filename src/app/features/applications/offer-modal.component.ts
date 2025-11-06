import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService, OfferDetails } from '../../core/services/application.service';

@Component({
  selector: 'app-offer-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Extend Job Offer</h2>
          <button class="close-btn" (click)="close()">&times;</button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label>Annual Salary *</label>
            <input type="number" [(ngModel)]="offer.salary" class="form-control" placeholder="e.g., 75000" required>
          </div>

          <div class="form-group">
            <label>Start Date *</label>
            <input type="date" [(ngModel)]="offer.startDate" class="form-control" required>
          </div>

          <div class="form-group">
            <label>Offer Letter URL</label>
            <input type="url" [(ngModel)]="offer.offerLetterUrl" class="form-control" placeholder="https://...">
            <small>Upload offer letter and paste the URL here</small>
          </div>

          <div class="form-group">
            <label>Offer Expires At</label>
            <input type="datetime-local" [(ngModel)]="offer.expiresAt" class="form-control">
            <small>Default: 7 days from now</small>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" (click)="close()">Cancel</button>
          <button class="btn btn-primary" (click)="extend()" [disabled]="!canExtend()">Extend Offer</button>
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
    small {
      color: #666;
      font-size: 12px;
    }
  `]
})
export class OfferModalComponent {
  @Input() applicationId!: string;
  @Output() closed = new EventEmitter<void>();
  @Output() extended = new EventEmitter<void>();

  offer: OfferDetails = {
    salary: undefined,
    startDate: '',
    offerLetterUrl: '',
    expiresAt: this.getDefaultExpiry()
  };

  constructor(private applicationService: ApplicationService) {}

  getDefaultExpiry(): string {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().slice(0, 16);
  }

  canExtend(): boolean {
    return !!this.offer.salary && !!this.offer.startDate;
  }

  extend() {
    this.applicationService.extendOffer(this.applicationId, this.offer).subscribe({
      next: () => {
        this.extended.emit();
        this.close();
      },
      error: (err) => {
        console.error('Failed to extend offer:', err);
        alert('Failed to extend offer');
      }
    });
  }

  close() {
    this.closed.emit();
  }
}
