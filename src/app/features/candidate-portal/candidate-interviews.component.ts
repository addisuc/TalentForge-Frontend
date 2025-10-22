import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-interviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="candidate-interviews-page">
      <div class="page-header">
        <h1>My Interviews</h1>
        <p>Upcoming and past interview schedule</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Company</th>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let interview of paginatedInterviews">
              <td><strong>{{ interview.position }}</strong></td>
              <td>{{ interview.company }}</td>
              <td>{{ interview.datetime }}</td>
              <td>{{ interview.type }}</td>
              <td><span class="badge" [class]="interview.status.toLowerCase()">{{ interview.status }}</span></td>
              <td>
                <button *ngIf="interview.status === 'Scheduled' && interview.meetingLink" class="btn-action" (click)="joinInterview(interview)">Join</button>
                <button class="btn-action secondary">Details</button>
                <button *ngIf="interview.status === 'Scheduled'" class="btn-action secondary" (click)="requestReschedule(interview)">Request Reschedule</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalInterviews }}</div>
          <select [(ngModel)]="itemsPerPage" (change)="onItemsPerPageChange()" class="items-per-page">
            <option [value]="25">25 per page</option>
            <option [value]="50">50 per page</option>
            <option [value]="100">100 per page</option>
          </select>
        </div>
        <div class="pagination-controls">
          <button (click)="previousPage()" [disabled]="currentPage === 1" class="btn-page">Previous</button>
          <button *ngFor="let page of pageNumbers" (click)="goToPage(page)" [class.active]="page === currentPage" class="btn-page">{{ page }}</button>
          <button (click)="nextPage()" [disabled]="currentPage === totalPages" class="btn-page">Next</button>
        </div>
      </div>

      <div class="modal-overlay" *ngIf="showRescheduleModal" (click)="showRescheduleModal = false">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>Request Reschedule</h2>
            <button class="close-btn" (click)="showRescheduleModal = false">✕</button>
          </div>
          <div class="modal-body">
            <p><strong>{{ selectedInterview?.position }}</strong> at {{ selectedInterview?.company }}</p>
            <p>Current: {{ selectedInterview?.datetime }}</p>
            <div class="form-group">
              <label>Reason for Reschedule</label>
              <textarea [(ngModel)]="rescheduleReason" class="form-control" rows="3" placeholder="Please explain why you need to reschedule..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" (click)="showRescheduleModal = false">Cancel</button>
            <button class="btn-primary" (click)="submitReschedule()">Submit Request</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-interviews-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow-x: auto; margin-bottom: 1rem; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table thead { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
    .data-table th { padding: 16px; text-align: left; font-weight: 600; font-size: 0.875rem; color: #475569; }
    .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 16px; font-size: 0.875rem; color: #0f172a; }
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge.scheduled { background: #dbeafe; color: #1e40af; }
    .badge.completed { background: #d1fae5; color: #065f46; }
    .badge.cancelled { background: #fee2e2; color: #991b1b; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 8px; white-space: nowrap; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .pagination { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }
    .pagination-left { display: flex; align-items: center; gap: 1rem; }
    .pagination-info { color: #64748b; font-size: 0.875rem; }
    .items-per-page { padding: 6px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; color: #64748b; background: white; cursor: pointer; }
    .pagination-controls { display: flex; gap: 0.5rem; }
    .btn-page { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .btn-page:hover:not(:disabled) { background: #f8fafc; }
    .btn-page.active { background: #0066ff; color: white; border-color: #0066ff; }
    .btn-page:disabled { opacity: 0.5; cursor: not-allowed; }
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { background: white; border-radius: 12px; width: 90%; max-width: 500px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; }
    .modal-header h2 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0; }
    .close-btn { background: none; border: none; font-size: 1.5rem; color: #64748b; cursor: pointer; padding: 0; width: 32px; height: 32px; }
    .modal-body { padding: 1.5rem; }
    .modal-body p { margin: 0 0 1rem 0; color: #475569; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem; font-size: 0.875rem; }
    .form-control { width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; font-family: inherit; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 0.75rem; padding: 1.5rem; border-top: 1px solid #e2e8f0; }
    .btn-primary { background: #0066ff; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.875rem; }
    .btn-secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.875rem; }
  `]
})
export class CandidateInterviewsComponent {
  currentPage = 1;
  itemsPerPage = 25;

  interviews = [
    { id: 1, position: 'Senior Full Stack Developer', company: 'TechCorp', datetime: 'Jan 30, 2024 - 2:00 PM', type: 'Zoom', status: 'Scheduled', meetingLink: 'https://zoom.us/j/1234567890' },
    { id: 2, position: 'Frontend Engineer', company: 'StartupXYZ', datetime: 'Feb 2, 2024 - 10:00 AM', type: 'Google Meet', status: 'Scheduled', meetingLink: 'https://meet.google.com/abc-defg-hij' },
    { id: 3, position: 'Backend Developer', company: 'Cloud Systems', datetime: 'Jan 25, 2024 - 3:00 PM', type: 'Phone', status: 'Completed', meetingLink: '' },
    { id: 4, position: 'DevOps Engineer', company: 'Innovation Labs', datetime: 'Jan 20, 2024 - 11:00 AM', type: 'MS Teams', status: 'Completed', meetingLink: 'https://teams.microsoft.com/l/meetup-join/xyz' }
  ];

  get totalInterviews() { return this.interviews.length; }
  get totalPages() { return Math.ceil(this.totalInterviews / this.itemsPerPage); }
  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalInterviews); }
  get paginatedInterviews() { return this.interviews.slice(this.startIndex, this.endIndex); }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  previousPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number) { this.currentPage = page; }
  onItemsPerPageChange() { this.currentPage = 1; }

  showRescheduleModal = false;
  selectedInterview: any = null;
  rescheduleReason = '';

  joinInterview(interview: any) {
    if (interview.meetingLink) {
      window.open(interview.meetingLink, '_blank');
    }
  }

  requestReschedule(interview: any) {
    this.selectedInterview = interview;
    this.rescheduleReason = '';
    this.showRescheduleModal = true;
  }

  submitReschedule() {
    alert(`Reschedule request submitted for ${this.selectedInterview.position}`);
    this.showRescheduleModal = false;
  }
}
