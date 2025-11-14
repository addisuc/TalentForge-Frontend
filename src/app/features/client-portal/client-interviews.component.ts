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
        <h1>My Interviews</h1>
        <p>Review and manage scheduled candidate interviews</p>
      </div>

      <div class="filters">
        <div class="filter-group">
          <label>Status</label>
          <select [(ngModel)]="filterStatus" (change)="applyFilters()">
            <option value="all">All Interviews</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Time Range</label>
          <select [(ngModel)]="filterTime" (change)="applyFilters()">
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
        <div class="search-box">
          <input type="text" [(ngModel)]="searchTerm" (input)="applyFilters()" placeholder="Search candidate or position...">
        </div>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Position Applied</th>
              <th>Interview Round</th>
              <th>Date & Time</th>
              <th>Duration</th>
              <th>Interviewer</th>
              <th>Meeting Info</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="filteredInterviews.length === 0">
              <td colspan="9" style="text-align: center; padding: 2rem; color: #64748b;">No interviews found</td>
            </tr>
            <tr *ngFor="let interview of paginatedInterviews">
              <td>
                <div class="candidate-cell">
                  <strong>{{ interview.candidateName }}</strong>
                  <span class="email">{{ interview.candidateEmail }}</span>
                </div>
              </td>
              <td><strong>{{ interview.position }}</strong></td>
              <td><span class="round-badge">{{ interview.round }}</span></td>
              <td>
                <div class="datetime-cell">
                  <span class="date">{{ interview.date }}</span>
                  <span class="time">{{ interview.time }}</span>
                </div>
              </td>
              <td>{{ interview.duration }}</td>
              <td>
                <div class="interviewer-cell">
                  <strong>{{ interview.interviewer }}</strong>
                  <span class="role">{{ interview.interviewerRole }}</span>
                </div>
              </td>
              <td>
                <div *ngIf="interview.meetingLink" class="meeting-info">
                  <span class="platform">{{ interview.platform }}</span>
                  <span class="meeting-id">{{ interview.meetingId }}</span>
                </div>
                <span *ngIf="!interview.meetingLink" class="text-muted">{{ interview.location || 'TBD' }}</span>
              </td>
              <td><span class="badge" [class]="interview.status.toLowerCase()">{{ interview.status }}</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn-action" (click)="viewDetails(interview)" title="View Details">👁️</button>
                  <button *ngIf="interview.status === 'Scheduled'" class="btn-action" (click)="provideFeedback(interview)" title="Provide Feedback">📝</button>
                  <button *ngIf="interview.status === 'Scheduled'" class="btn-action secondary" (click)="requestReschedule(interview)" title="Request Reschedule">📅</button>
                </div>
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
    .client-interviews-page { padding: 2rem; background: #f8fafc; min-height: 100vh; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    
    .filters { display: flex; gap: 1rem; margin-bottom: 1.5rem; background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; }
    .filter-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .filter-group label { font-size: 0.875rem; font-weight: 600; color: #475569; }
    .filter-group select { padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; background: white; cursor: pointer; }
    .search-box { flex: 1; display: flex; align-items: flex-end; }
    .search-box input { width: 100%; padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.875rem; }
    
    .table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table thead { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
    .data-table th { padding: 16px; text-align: left; font-weight: 600; font-size: 0.875rem; color: #475569; white-space: nowrap; }
    .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
    .data-table tbody tr:hover { background: #f8fafc; }
    .data-table td { padding: 16px; font-size: 0.875rem; color: #0f172a; }
    
    .candidate-cell { display: flex; flex-direction: column; gap: 0.25rem; }
    .candidate-cell strong { color: #0f172a; }
    .candidate-cell .email { font-size: 0.75rem; color: #64748b; }
    
    .datetime-cell { display: flex; flex-direction: column; gap: 0.25rem; }
    .datetime-cell .date { color: #0f172a; font-weight: 500; }
    .datetime-cell .time { font-size: 0.75rem; color: #64748b; }
    
    .interviewer-cell { display: flex; flex-direction: column; gap: 0.25rem; }
    .interviewer-cell strong { color: #0f172a; }
    .interviewer-cell .role { font-size: 0.75rem; color: #64748b; }
    
    .round-badge { background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; }
    
    .meeting-info { display: flex; flex-direction: column; gap: 0.25rem; }
    .meeting-info .platform { color: #0f172a; font-weight: 500; font-size: 0.875rem; }
    .meeting-info .meeting-id { color: #64748b; font-size: 0.75rem; font-family: monospace; }
    
    .text-muted { color: #94a3b8; font-size: 0.875rem; }
    
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; }
    .badge.scheduled { background: #dbeafe; color: #1e40af; }
    .badge.completed { background: #d1fae5; color: #065f46; }
    .badge.cancelled { background: #fee2e2; color: #991b1b; }
    
    .action-buttons { display: flex; gap: 6px; }
    .btn-action { background: #0066ff; color: white; border: none; padding: 6px 10px; border-radius: 6px; font-size: 1rem; cursor: pointer; white-space: nowrap; }
    .btn-action:hover { background: #0052cc; }
    .btn-action.secondary { background: white; color: #64748b; border: 1px solid #e2e8f0; }
    .btn-action.secondary:hover { background: #f8fafc; }
    
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
  filterStatus = 'all';
  filterTime = 'all';
  searchTerm = '';

  interviews = [
    { 
      id: 1, 
      candidateName: 'Sarah Johnson', 
      candidateEmail: 'sarah.j@email.com',
      position: 'Senior Full Stack Developer', 
      round: 'Technical Round',
      date: 'Jan 30, 2024', 
      time: '2:00 PM - 3:30 PM',
      duration: '90 min',
      interviewer: 'John Smith',
      interviewerRole: 'Engineering Manager',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      platform: 'Google Meet',
      meetingId: 'abc-defg-hij',
      location: null,
      status: 'Scheduled',
      notes: 'Focus on React and Node.js experience'
    },
    { 
      id: 2, 
      candidateName: 'Michael Chen', 
      candidateEmail: 'mchen@email.com',
      position: 'Product Manager', 
      round: 'Final Round',
      date: 'Jan 31, 2024', 
      time: '10:00 AM - 11:00 AM',
      duration: '60 min',
      interviewer: 'Lisa Anderson',
      interviewerRole: 'VP of Product',
      meetingLink: 'https://zoom.us/j/123456789',
      platform: 'Zoom',
      meetingId: 'ID: 123 456 789',
      location: null,
      status: 'Scheduled',
      notes: 'Product strategy discussion'
    },
    { 
      id: 3, 
      candidateName: 'Emily Davis', 
      candidateEmail: 'emily.d@email.com',
      position: 'UX Designer', 
      round: 'Portfolio Review',
      date: 'Jan 25, 2024', 
      time: '3:00 PM - 4:00 PM',
      duration: '60 min',
      interviewer: 'Mark Wilson',
      interviewerRole: 'Design Lead',
      meetingLink: null,
      platform: null,
      meetingId: null,
      location: 'Office - Conference Room A',
      status: 'Completed',
      notes: 'Review design portfolio and case studies'
    },
    { 
      id: 4, 
      candidateName: 'David Martinez', 
      candidateEmail: 'dmartinez@email.com',
      position: 'Senior Full Stack Developer', 
      round: 'HR Screening',
      date: 'Feb 1, 2024', 
      time: '9:00 AM - 9:30 AM',
      duration: '30 min',
      interviewer: 'Rachel Green',
      interviewerRole: 'HR Manager',
      meetingLink: 'https://teams.microsoft.com/l/meetup',
      platform: 'MS Teams',
      meetingId: 'Meeting ID: 345 678 901',
      location: null,
      status: 'Scheduled',
      notes: 'Initial screening call'
    },
    { 
      id: 5, 
      candidateName: 'Jennifer Lee', 
      candidateEmail: 'jlee@email.com',
      position: 'Product Manager', 
      round: 'Technical Round',
      date: 'Jan 28, 2024', 
      time: '2:00 PM - 3:00 PM',
      duration: '60 min',
      interviewer: 'Tom Brown',
      interviewerRole: 'Senior PM',
      meetingLink: null,
      platform: null,
      meetingId: null,
      location: null,
      status: 'Cancelled',
      notes: 'Candidate requested reschedule'
    }
  ];

  filteredInterviews = [...this.interviews];

  get totalInterviews() { return this.filteredInterviews.length; }
  get totalPages() { return Math.ceil(this.totalInterviews / this.itemsPerPage); }
  get startIndex() { return (this.currentPage - 1) * this.itemsPerPage; }
  get endIndex() { return Math.min(this.startIndex + this.itemsPerPage, this.totalInterviews); }
  get paginatedInterviews() { return this.filteredInterviews.slice(this.startIndex, this.endIndex); }
  get pageNumbers() { const pages = []; for (let i = 1; i <= this.totalPages; i++) pages.push(i); return pages; }
  
  previousPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  goToPage(page: number) { this.currentPage = page; }
  onItemsPerPageChange() { this.currentPage = 1; }

  applyFilters() {
    this.filteredInterviews = this.interviews.filter(interview => {
      const matchesStatus = this.filterStatus === 'all' || interview.status.toLowerCase() === this.filterStatus;
      const matchesSearch = !this.searchTerm || 
        interview.candidateName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        interview.position.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
    this.currentPage = 1;
  }

  viewDetails(interview: any) {
    alert(`Interview Details:\n\nCandidate: ${interview.candidateName}\nPosition: ${interview.position}\nRound: ${interview.round}\nDate: ${interview.date} ${interview.time}\nInterviewer: ${interview.interviewer}\nNotes: ${interview.notes}`);
  }

  provideFeedback(interview: any) {
    alert('Feedback form will open here');
  }

  requestReschedule(interview: any) {
    if (confirm(`Request to reschedule interview with ${interview.candidateName}?`)) {
      alert('Reschedule request sent to recruiter');
    }
  }
}
