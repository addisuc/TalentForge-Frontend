import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidate-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="candidate-jobs-page">
      <div class="page-header">
        <h1>Job Search</h1>
        <p>Find your next opportunity</p>
      </div>
      <div class="filters">
        <input type="text" placeholder="Search jobs..." class="search-input">
        <select class="filter-select">
          <option>All Locations</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>
        <select class="filter-select">
          <option>All Types</option>
          <option>Full-time</option>
          <option>Contract</option>
        </select>
      </div>
      <div class="jobs-grid">
        <div *ngFor="let job of paginatedJobs" class="job-card">
          <div class="job-header">
            <h3>{{ job.title }}</h3>
            <button class="btn-save">⭐</button>
          </div>
          <div class="job-company">{{ job.company }}</div>
          <div class="job-details">
            <span>📍 {{ job.location }}</span>
            <span>💰 {{ job.salary }}</span>
            <span>⏰ {{ job.type }}</span>
          </div>
          <p class="job-description">{{ job.description }}</p>
          <button class="btn-apply">Apply Now</button>
        </div>
      </div>
      <div class="pagination">
        <div class="pagination-left">
          <div class="pagination-info">Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalJobs }}</div>
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
    .candidate-jobs-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .filters { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .search-input, .filter-select { padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .search-input { flex: 1; }
    .jobs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .job-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; }
    .job-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem; }
    .job-header h3 { font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0; }
    .btn-save { background: none; border: none; font-size: 1.25rem; cursor: pointer; }
    .job-company { color: #64748b; font-weight: 500; margin-bottom: 0.75rem; }
    .job-details { display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; }
    .job-description { color: #475569; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; }
    .btn-apply { background: #0066ff; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; }
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
export class CandidateJobsComponent {
  currentPage = 1;
  itemsPerPage = 25;

  jobs = [
    { id: 1, title: 'Senior Full Stack Developer', company: 'TechCorp', location: 'Remote', salary: '$120k-$160k', type: 'Full-time', description: 'Join our team to build scalable web applications using modern technologies.' },
    { id: 2, title: 'Frontend Engineer', company: 'StartupXYZ', location: 'San Francisco', salary: '$110k-$150k', type: 'Full-time', description: 'Create beautiful user interfaces with React and TypeScript.' },
    { id: 3, title: 'Backend Developer', company: 'Cloud Systems', location: 'Remote', salary: '$130k-$170k', type: 'Full-time', description: 'Design and implement robust backend services and APIs.' },
    { id: 4, title: 'DevOps Engineer', company: 'Innovation Labs', location: 'New York', salary: '$125k-$165k', type: 'Full-time', description: 'Manage cloud infrastructure and CI/CD pipelines.' },
    { id: 5, title: 'Mobile Developer', company: 'AppWorks', location: 'Remote', salary: '$115k-$155k', type: 'Contract', description: 'Build native mobile applications for iOS and Android.' }
  ];

  get totalJobs() { return this.jobs.length; }
  get totalPages() { return Math.ceil(this.totalJobs / this.itemsPerPage); }
  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs); }
  get paginatedJobs() { return this.jobs.slice(this.startIndex, this.endIndex); }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  previousPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number) { this.currentPage = page; }
  onItemsPerPageChange() { this.currentPage = 1; }
}
