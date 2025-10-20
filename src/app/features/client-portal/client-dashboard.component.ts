import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {
  stats = [
    { label: 'Active Jobs', value: '8', icon: '💼' },
    { label: 'Candidates Submitted', value: '45', icon: '👥' },
    { label: 'Interviews Scheduled', value: '12', icon: '📅' },
    { label: 'Hires Made', value: '3', icon: '✅' }
  ];

  myJobs = [
    { id: 1, title: 'Senior Developer', candidates: 12, status: 'Active', posted: '2024-01-15' },
    { id: 2, title: 'Product Manager', candidates: 8, status: 'Active', posted: '2024-01-20' },
    { id: 3, title: 'UX Designer', candidates: 15, status: 'Active', posted: '2024-01-22' }
  ];

  recentCandidates = [
    { id: 1, name: 'Sarah Johnson', position: 'Senior Developer', status: 'Interview', submittedDays: 2 },
    { id: 2, name: 'Michael Chen', position: 'Product Manager', status: 'Review', submittedDays: 1 },
    { id: 3, name: 'Emily Davis', position: 'UX Designer', status: 'Shortlisted', submittedDays: 3 }
  ];
}
