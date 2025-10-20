import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-interviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="client-interviews-page">
      <div class="page-header">
        <h1>Interview Schedule</h1>
        <p>Upcoming and past interviews</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Position</th>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let interview of paginatedInterviews">
              <td><strong>{{ interview.candidate }}</strong></td>
              <td>{{ interview.position }}</td>
              <td>{{ interview.datetime }}</td>
              <td>{{ interview.type }}</td>
              <td><span class="badge" [class]="interview.status.toLowerCase()">{{ interview.status }}</span></td>
              <td>
                <button class="btn-action">Join</button>
                <button class="btn-action secondary">Reschedule</button>
                <button class="btn-action secondary">Cancel</button>
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
    </div>
  `,
  styles: [`
    .client-interviews-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table thead { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
    .data-table th { padding: 16px; text-align: left; font-weight: 600; font-size: 0.875rem; color: #475569; }
    .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 16px; font-size: 0.875rem; color: #0f172a; }
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge.scheduled { background: #dbeafe; color: #1e40af; }
    .badge.completed { background: #d1fae5; color: #065f46; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 8px; white-space: nowrap; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .pagination { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border-top: 1px solid #e2e8f0; }
    .pagination-left { display: flex; align-items: center; gap: 1rem; }
    .pagination-info { color: #64748b; font-size: 0.875rem; }
    .items-per-page { padding: 6px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; color: #64748b; background: white; cursor: pointer; }
    .pagination-controls { display: flex; gap: 0.5rem; }
    .btn-page { background: white; color: #64748b; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .btn-page:hover:not(:disabled) { background: #f8fafc; }
    .btn-page.active { background: #0066ff; color: white; border-color: #0066ff; }
    .btn-page:disabled { opacity: 0.5; cursor: not-allowed; }
  `]
})
export class ClientInterviewsComponent {
  currentPage = 1;
  itemsPerPage = 25;

  interviews = [
    { id: 1, candidate: 'Sarah Johnson', position: 'Senior Developer', datetime: 'Jan 30, 2024 - 2:00 PM', type: 'Video', status: 'Scheduled' },
    { id: 2, candidate: 'Michael Chen', position: 'Product Manager', datetime: 'Jan 31, 2024 - 10:00 AM', type: 'Video', status: 'Scheduled' },
    { id: 3, candidate: 'Emily Davis', position: 'UX Designer', datetime: 'Jan 25, 2024 - 3:00 PM', type: 'Phone', status: 'Completed' }
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
}
