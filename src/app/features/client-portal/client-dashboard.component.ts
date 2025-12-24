import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  stats = [
    { label: 'Active Jobs', value: '0', icon: '💼' },
    { label: 'Candidates Submitted', value: '0', icon: '👥' },
    { label: 'Interviews Scheduled', value: '0', icon: '📅' },
    { label: 'Hires Made', value: '0', icon: '✅' }
  ];

  myJobs: any[] = [];
  recentCandidates: any[] = [];
  companyId: string = '';

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.getCompanyIdFromAuth();
    this.loadCandidates();
  }
  
  private getCompanyIdFromAuth(): void {
    const clientUser = localStorage.getItem('clientUser');
    if (clientUser) {
      const user = JSON.parse(clientUser);
      this.companyId = user.companyId || user.id || '';
    }
    if (!this.companyId) {
      console.error('No company ID found in auth');
    }
  }

  loadCandidates() {
    if (!this.companyId) return;
    this.applicationService.getClientSubmissions(this.companyId, 0, 100).subscribe({
      next: (data) => {
        const candidates = data.content;
        this.stats[1].value = candidates.length.toString();
        
        // Get recent 5 candidates
        this.recentCandidates = candidates.slice(0, 5).map(app => ({
          id: app.id,
          name: app.candidateName || 'Unknown',
          position: app.jobTitle || 'Unknown Position',
          status: this.formatStatus(app.status),
          submittedDays: this.getDaysAgo(app.updatedAt)
        }));
        
        // Count interviews and hires
        this.stats[2].value = candidates.filter(c => c.status === 'CLIENT_INTERVIEW').length.toString();
        this.stats[3].value = candidates.filter(c => c.status === 'HIRED').length.toString();
      },
      error: (err) => console.error('Failed to load candidates:', err)
    });
  }

  formatStatus(status: string): string {
    if (status === 'SUBMITTED_TO_CLIENT') return 'Review';
    if (status === 'CLIENT_INTERVIEW') return 'Interview';
    if (status === 'OFFER_PENDING') return 'Offer';
    if (status === 'HIRED') return 'Hired';
    return status.replace(/_/g, ' ');
  }

  getDaysAgo(dateString: string): number {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
