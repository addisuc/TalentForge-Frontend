import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-applications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="candidate-applications-page">
      <div class="page-header">
        <h1>My Applications</h1>
        <p>Track your job applications</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Company</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let app of paginatedApplications">
              <td><strong>{{ app.position }}</strong></td>
              <td>{{ app.company }}</td>
              <td>{{ app.appliedDate }}</td>
              <td><span class="badge" [class]="app.status.toLowerCase()">{{ app.status }}</span></td>
              <td>
                <button class="btn-action">View Details</button>
                <button class="btn-action secondary">Withdraw</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalApplications }}</div>
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
    .candidate-applications-page { padding: 2rem; }
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
    .badge.applied { background: #e0e7ff; color: #3730a3; }
    .badge.review { background: #fef3c7; color: #92400e; }
    .badge.interview { background: #dbeafe; color: #1e40af; }
    .badge.offer { background: #d1fae5; color: #065f46; }
    .badge.rejected { background: #fee2e2; color: #991b1b; }
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
  `]
})
export class CandidateApplicationsComponent {
  currentPage = 1;
  itemsPerPage = 25;

  applications = [
    { id: 1, position: 'Senior Full Stack Developer', company: 'TechCorp', appliedDate: 'Jan 25, 2024', status: 'Interview' },
    { id: 2, position: 'Frontend Engineer', company: 'StartupXYZ', appliedDate: 'Jan 28, 2024', status: 'Review' },
    { id: 3, position: 'Backend Developer', company: 'Cloud Systems', appliedDate: 'Jan 29, 2024', status: 'Applied' },
    { id: 4, position: 'DevOps Engineer', company: 'Innovation Labs', appliedDate: 'Jan 20, 2024', status: 'Rejected' },
    { id: 5, position: 'Mobile Developer', company: 'AppWorks', appliedDate: 'Jan 15, 2024', status: 'Offer' }
  ];

  get totalApplications() { return this.applications.length; }
  get totalPages() { return Math.ceil(this.totalApplications / this.itemsPerPage); }
  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalApplications); }
  get paginatedApplications() { return this.applications.slice(this.startIndex, this.endIndex); }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  previousPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number) { this.currentPage = page; }
  onItemsPerPageChange() { this.currentPage = 1; }
}
