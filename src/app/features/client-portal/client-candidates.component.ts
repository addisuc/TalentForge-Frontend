import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-candidates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="client-candidates-page">
      <div class="page-header">
        <h1>Submitted Candidates</h1>
        <p>Candidates submitted by recruiters for your review</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Position</th>
              <th>Status</th>
              <th>Submitted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let candidate of paginatedCandidates">
              <td><strong>{{ candidate.name }}</strong></td>
              <td>{{ candidate.position }}</td>
              <td><span class="badge" [class]="candidate.status.toLowerCase()">{{ candidate.status }}</span></td>
              <td>{{ candidate.submitted | date:'MMM d, yyyy' }}</td>
              <td>
                <button class="btn-action">Review</button>
                <button class="btn-action secondary">Schedule</button>
                <button class="btn-action secondary">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <div class="pagination-info">Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ totalCandidates }} candidates</div>
        <div class="pagination-controls">
          <select [(ngModel)]="itemsPerPage" (change)="onItemsPerPageChange()"><option [value]="25">25</option><option [value]="50">50</option><option [value]="100">100</option></select>
          <button [disabled]="currentPage === 1" (click)="previousPage()">Previous</button>
          <span class="page-numbers"><button *ngFor="let page of pageNumbers" [class.active]="page === currentPage" (click)="goToPage(page)">{{ page }}</button></span>
          <button [disabled]="currentPage === totalPages" (click)="nextPage()">Next</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .client-candidates-page { padding: 2rem; }
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
    .badge.review { background: #fef3c7; color: #92400e; }
    .badge.interview { background: #dbeafe; color: #1e40af; }
    .badge.shortlisted { background: #e0e7ff; color: #4338ca; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 8px; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .pagination { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 24px; }
    .pagination-info { font-size: 0.875rem; color: #64748b; }
    .pagination-controls { display: flex; gap: 12px; align-items: center; }
    .pagination-controls select { padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .pagination-controls button { padding: 8px 16px; border: 1px solid #e2e8f0; background: white; border-radius: 6px; font-size: 0.875rem; cursor: pointer; }
    .pagination-controls button:hover:not(:disabled) { background: #f8fafc; }
    .pagination-controls button:disabled { opacity: 0.5; cursor: not-allowed; }
    .pagination-controls button.active { background: #0066ff; color: white; border-color: #0066ff; }
    .page-numbers { display: flex; gap: 4px; }
  `]
})
export class ClientCandidatesComponent {
  currentPage = 1;
  itemsPerPage = 25;

  candidates = [
    { id: 1, name: 'Sarah Johnson', position: 'Senior Developer', status: 'Review', submitted: '2024-01-26' },
    { id: 2, name: 'Michael Chen', position: 'Product Manager', status: 'Interview', submitted: '2024-01-27' },
    { id: 3, name: 'Emily Davis', position: 'UX Designer', status: 'Shortlisted', submitted: '2024-01-25' }
  ];

  get totalCandidates() { return this.candidates.length; }
  get totalPages() { return Math.ceil(this.totalCandidates / this.itemsPerPage); }
  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalCandidates); }
  get paginatedCandidates() { return this.candidates.slice(this.startIndex, this.endIndex); }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  previousPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number) { this.currentPage = page; }
  onItemsPerPageChange() { this.currentPage = 1; }
}
