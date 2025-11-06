import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReferenceCheckService, Reference } from '../../core/services/reference-check.service';

@Component({
  selector: 'app-reference-check-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Request Reference Checks</h2>
          <button class="close-btn" (click)="close()">&times;</button>
        </div>

        <div class="modal-body">
          <div class="info-note" *ngIf="references.length === 1 && !references[0].name">
            <p><strong>Note:</strong> No references provided by candidate. Please contact the candidate to obtain reference information before proceeding.</p>
          </div>
          
          <div *ngFor="let ref of references; let i = index" class="reference-card">
            <h4>Reference {{i + 1}}</h4>
            <div class="form-row">
              <div class="form-group">
                <label>Name *</label>
                <input type="text" [(ngModel)]="ref.name" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" [(ngModel)]="ref.email" class="form-control" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Phone</label>
                <input type="tel" [(ngModel)]="ref.phone" class="form-control">
              </div>
              <div class="form-group">
                <label>Relationship *</label>
                <input type="text" [(ngModel)]="ref.relationship" class="form-control" placeholder="e.g., Manager, Colleague" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Company</label>
                <input type="text" [(ngModel)]="ref.company" class="form-control">
              </div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" [(ngModel)]="ref.title" class="form-control">
              </div>
            </div>
            <button *ngIf="references.length > 1" class="btn btn-sm btn-danger" (click)="removeReference(i)">Remove</button>
          </div>

          <button class="btn btn-secondary" (click)="addReference()">+ Add Another Reference</button>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" (click)="close()">Cancel</button>
          <button class="btn btn-primary" (click)="submit()" [disabled]="!canSubmit()">Send Requests</button>
        </div>
      </div>
      
      <!-- Toast Notification -->
      <div class="toast" *ngIf="showToastFlag" [class]="'toast-' + toastType">
        <div class="toast-content">
          <span class="toast-icon">{{ toastType === 'success' ? '✓' : toastType === 'error' ? '✗' : '⚠' }}</span>
          <span class="toast-message">{{ toastMessage }}</span>
          <button class="toast-close" (click)="closeToast()">×</button>
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
      max-width: 700px;
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
    .reference-card {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 15px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .info-note {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 15px;
    }
    .info-note p {
      margin: 0;
      color: #856404;
    }
  `]
})
export class ReferenceCheckModalComponent implements OnInit {
  @Input() applicationId!: string;
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();
  
  toastMessage = '';
  toastType = '';
  showToastFlag = false;

  references: Reference[] = [
    { name: '', email: '', phone: '', relationship: '', company: '', title: '' }
  ];

  constructor(
    private referenceCheckService: ReferenceCheckService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadCandidateReferences();
  }

  loadCandidateReferences() {
    // Load candidate's references from their application
    this.http.get<any>(`/api/applications/${this.applicationId}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }).subscribe({
      next: (application) => {
        console.log('Application data:', application);
        if (application.referencesData) {
          try {
            const candidateRefs = JSON.parse(application.referencesData);
            console.log('Parsed references:', candidateRefs);
            if (candidateRefs && candidateRefs.length > 0) {
              this.references = candidateRefs;
            }
          } catch (e) {
            console.warn('Failed to parse candidate references:', e);
          }
        } else {
          console.log('No referencesData found in application');
        }
      },
      error: (err) => {
        console.error('Failed to load candidate references:', err);
      }
    });
  }

  addReference() {
    this.references.push({ name: '', email: '', phone: '', relationship: '', company: '', title: '' });
  }

  removeReference(index: number) {
    this.references.splice(index, 1);
  }

  canSubmit(): boolean {
    return this.references.every(ref => ref.name && ref.email && ref.relationship);
  }

  submit() {
    this.referenceCheckService.requestReferences({
      applicationId: this.applicationId,
      references: this.references
    }).subscribe({
      next: () => {
        this.submitted.emit();
        // Don't close modal immediately, let parent handle success message
      },
      error: (err) => {
        console.error('Failed to request references:', err);
        alert('Failed to send reference requests. Please try again.');
      }
    });
  }

  close() {
    this.closed.emit();
  }

  showToast(type: 'success' | 'error' | 'warning', title: string, message: string) {
    this.toastType = type;
    this.toastMessage = `${title}: ${message}`;
    this.showToastFlag = true;
    setTimeout(() => {
      this.showToastFlag = false;
    }, 4000);
  }

  closeToast() {
    this.showToastFlag = false;
  }
}
