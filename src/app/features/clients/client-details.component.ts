import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {
  client = {
    id: 1,
    name: 'TechCorp Solutions',
    logo: '🏢',
    industry: 'Technology',
    status: 'Active',
    contact: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1 (555) 123-4567',
    website: 'www.techcorp.com',
    address: '123 Tech Street, San Francisco, CA 94105',
    since: '2023-01-15',
    description: 'Leading technology solutions provider specializing in enterprise software and cloud infrastructure.'
  };

  stats = [
    { label: 'Active Jobs', value: 8, icon: '💼' },
    { label: 'Total Hires', value: 24, icon: '✅' },
    { label: 'In Pipeline', value: 45, icon: '⏳' },
    { label: 'Success Rate', value: '87%', icon: '📊' }
  ];

  jobs = [
    { id: 1, title: 'Senior Full Stack Developer', status: 'Active', applicants: 23, posted: '2024-01-15' },
    { id: 2, title: 'DevOps Engineer', status: 'Active', applicants: 18, posted: '2024-01-20' },
    { id: 3, title: 'Product Manager', status: 'Active', applicants: 31, posted: '2024-01-22' },
    { id: 4, title: 'UX Designer', status: 'Active', applicants: 15, posted: '2024-01-25' }
  ];

  recentHires = [
    { name: 'John Smith', position: 'Backend Developer', date: '2024-01-10', avatar: '👨‍💻' },
    { name: 'Emma Wilson', position: 'Frontend Developer', date: '2024-01-05', avatar: '👩‍💻' },
    { name: 'Michael Brown', position: 'QA Engineer', date: '2023-12-20', avatar: '👨‍🔬' }
  ];

  constructor(private route: ActivatedRoute) {}
}
