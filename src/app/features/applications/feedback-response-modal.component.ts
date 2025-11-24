import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from '../../core/services/feedback.service';

@Component({
  selector: 'app-feedback-response-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" (click)="close()" (submit)="$event.preventDefault()">
      <div class="modal" (click)="$event.stopPropagation()" (submit)="$event.preventDefault()">
        <div class="modal-header">
          <h2>Respond to Client Feedback</h2>
          <button class="close-btn" (click)="close()">✕</button>
        </div>
        <div class="modal-body">
          <div class="feedback-context">
            <h4>Client's Feedback:</h4>
            <div class="feedback-box">
              <pre>{{ clientFeedback }}</pre>
            </div>
          </div>
          
          <div class="form-group">
            <label>Your Response *</label>
            <textarea 
              [(ngModel)]="response" 
              class="form-control" 
              rows="6" 
              placeholder="Type your response to the client's feedback...">
            </textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-secondary" (click)="close(); $event.stopPropagation(); $event.preventDefault()" [disabled]="submitting">Cancel</button>
          <button type="button" class="btn-primary" (click)="submit(); $event.stopPropagation(); $event.preventDefault()" [disabled]="!response.trim() || submitting">
            {{ submitting ? 'Sending...' : 'Send Response' }}
          </button>
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
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      color: #333;
    }

    .modal-body {
      padding: 20px;
    }

    .feedback-context {
      margin-bottom: 20px;
    }

    .feedback-context h4 {
      margin: 0 0 10px 0;
      color: #555;
      font-size: 1rem;
    }

    .feedback-box {
      background: #f5f5f5;
      border-left: 4px solid #2196F3;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .feedback-box pre {
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: inherit;
      color: #333;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      font-family: inherit;
      resize: vertical;
    }

    .form-control:focus {
      outline: none;
      border-color: #2196F3;
      box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding: 20px;
      border-top: 1px solid #e0e0e0;
    }

    .btn-secondary, .btn-primary {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #333;
    }

    .btn-secondary:hover:not(:disabled) {
      background: #e0e0e0;
    }

    .btn-primary {
      background: #2196F3;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: #1976D2;
    }

    .btn-secondary:disabled, .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class FeedbackResponseModalComponent {
  @Input() applicationId!: string;
  @Input() clientFeedback!: string;
  @Input() clientId!: string;
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  response = '';
  submitting = false;

  constructor(private feedbackService: FeedbackService) {}

  close(): void {
    if (!this.submitting) {
      this.closed.emit();
    }
  }

  submit(): void {
    if (!this.response.trim() || this.submitting) return;

    this.submitting = true;
    const recruiterId = localStorage.getItem('userId');

    const request = {
      clientId: this.clientId,
      recruiterId: recruiterId || undefined,
      applicationId: this.applicationId || undefined,
      feedbackType: 'RESPONSE',
      subject: 'Response to your feedback',
      message: this.response,
      priority: 'Normal'
    };

    this.feedbackService.sendRecruiterFeedback(request).subscribe({
      next: (response) => {
        this.submitting = false;
        this.submitted.emit();
        this.close();
      },
      error: (err) => {
        console.error('Failed to send response:', err);
        this.submitting = false;
      }
    });
  }
}
