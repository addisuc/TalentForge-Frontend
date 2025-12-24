import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobService } from '../../core/services/job.service';

@Component({
  selector: 'app-jobs-create',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.scss']
})
export class JobsCreateComponent implements OnInit {
  currentStep = 1;
  skillInput = '';
  saving = false;
  error = '';
  clients: any[] = [];

  job = {
    title: '',
    clientId: '',
    department: '',
    location: '',
    type: 'full-time',
    description: '',
    salaryMin: '',
    salaryMax: '',
    benefits: '',
    skills: [] as string[],
    experienceLevel: 'mid',
    education: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadClients();
    this.route.queryParams.subscribe(params => {
      if (params['clientId']) {
        this.job.clientId = params['clientId'];
      }
    });
  }

  loadClients() {
    const token = localStorage.getItem('token');
    const tenantId = this.extractTenantId(token);
    
    if (!tenantId) {
      console.error('No tenant ID found in token');
      return;
    }
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'X-Tenant-ID': tenantId
    };
    
    this.http.get<any[]>('/api/clients', { headers }).subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err: any) => {
        console.error('Failed to load clients:', err);
      }
    });
  }

  private extractTenantId(token: string | null): string {
    if (!token) {
      console.error('No token provided');
      return '';
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.tenantId || '';
    } catch (error) {
      console.error('Error extracting tenant ID from token:', error);
      return '';
    }
  }

  nextStep() {
    if (!this.validateStep()) {
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  validateStep(): boolean {
    if (this.currentStep === 1) {
      if (!this.job.title || !this.job.location || !this.job.clientId) {
        this.error = 'Please fill in Job Title, Client, and Location';
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.job.description) {
        this.error = 'Please fill in Job Description';
        return false;
      }
    } else if (this.currentStep === 3) {
      if (this.job.skills.length === 0) {
        this.error = 'Please add at least one skill';
        return false;
      }
    }
    this.error = '';
    return true;
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  addSkill() {
    const skill = this.skillInput.trim();
    if (skill && !this.job.skills.includes(skill)) {
      this.job.skills.push(skill);
      this.skillInput = '';
      this.error = '';
    }
  }

  removeSkill(skill: string) {
    this.job.skills = this.job.skills.filter(s => s !== skill);
  }

  saveJob() {
    console.log('Selected clientId:', this.job.clientId);
    console.log('Full job object:', this.job);
    
    if (!this.job.title || !this.job.location || !this.job.clientId) {
      this.error = 'Please select a client and fill in required fields';
      return;
    }

    this.saving = true;
    this.error = '';

    const jobRequest = {
      title: this.job.title,
      description: this.job.description || 'Job description',
      requirements: this.job.skills.join(', '),
      location: this.job.location,
      salaryMin: this.job.salaryMin ? parseInt(this.job.salaryMin) : null,
      salaryMax: this.job.salaryMax ? parseInt(this.job.salaryMax) : null,
      jobType: this.job.type.toUpperCase().replace('-', '_'),
      companyId: this.job.clientId
    };
    
    console.log('Selected clientId value:', this.job.clientId);
    console.log('Available clients:', this.clients);
    console.log('Job request being sent:', jobRequest);

    this.jobService.createJob(jobRequest).subscribe({
      next: (job) => {
        this.router.navigate(['/jobs']);
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Failed to create job';
        this.saving = false;
      }
    });
  }
}
