import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent {
  stats = [
    { label: 'Applications', value: '12', icon: '📝' },
    { label: 'Interviews', value: '3', icon: '📅' },
    { label: 'Profile Views', value: '45', icon: '👁️' },
    { label: 'Saved Jobs', value: '8', icon: '⭐' }
  ];

  myApplications = [
    { id: 1, company: 'TechCorp', position: 'Senior Developer', status: 'Interview', appliedDays: 5 },
    { id: 2, company: 'StartupXYZ', position: 'Full Stack Engineer', status: 'Review', appliedDays: 2 },
    { id: 3, company: 'BigCo Inc', position: 'Tech Lead', status: 'Applied', appliedDays: 1 }
  ];

  recommendedJobs = [
    { id: 1, title: 'Senior Developer', company: 'Innovation Labs', location: 'Remote', salary: '$120k-$160k' },
    { id: 2, title: 'Backend Engineer', company: 'Cloud Systems', location: 'San Francisco', salary: '$130k-$170k' }
  ];
}
