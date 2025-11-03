import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobService, Job, JobPage } from '../../core/services/job.service';

@Component({
  selector: 'app-jobs-browse',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs-browse.component.html',
  styleUrls: ['./jobs-browse.component.scss', './jobs-browse-stepper.scss']
})
export class JobsBrowseComponent implements OnInit {
  showPostModal = false;
  showViewModal = false;
  showDeleteModal = false;
  editingJob: Job | null = null;
  viewingJob: Job | null = null;
  deletingJob: Job | null = null;
  currentStep = 1;
  skillInput = '';
  jobData = {
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

  searchQuery = '';
  selectedType = 'all';
  selectedClient = 'all';
  selectedPosition = 'all';
  selectedLocation = 'all';
  selectedStatus = 'all';
  clients: any[] = [];
  
  currentPage = 1;
  itemsPerPage = 25;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  jobs: Job[] = [];
  loading = false;
  error = '';
  totalJobs = 0;
  totalPages = 0;

  constructor(
    private jobService: JobService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadClients();
    this.loadJobs();
  }

  loadClients() {
    this.http.get<any[]>('/api/clients').subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error('Failed to load clients:', err);
      }
    });
  }

  loadJobs() {
    this.loading = true;
    this.error = '';
    const page = this.currentPage - 1;
    
    if (this.searchQuery) {
      this.jobService.searchJobs(this.searchQuery, page, this.itemsPerPage).subscribe({
        next: (data: JobPage) => {
          this.jobs = data.content;
          this.totalJobs = data.totalElements;
          this.totalPages = data.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load jobs';
          this.loading = false;
        }
      });
    } else {
      this.jobService.getAllJobs(page, this.itemsPerPage).subscribe({
        next: (data: JobPage) => {
          this.jobs = data.content;
          this.totalJobs = data.totalElements;
          this.totalPages = data.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load jobs';
          this.loading = false;
        }
      });
    }
  }

  get startIndex() {
    return 0;
  }

  get endIndex() {
    return this.filteredJobs.length;
  }

  get filteredJobs() {
    return this.jobs.filter(job => {
      const matchesClient = this.selectedClient === 'all' || job.clientId?.toString() === this.selectedClient;
      const matchesType = this.selectedType === 'all' || job.jobType === this.selectedType.toUpperCase().replace('-', '_');
      const matchesLocation = this.selectedLocation === 'all' || this.getLocationString(job).toLowerCase().includes(this.selectedLocation.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || job.status === this.selectedStatus;
      return matchesClient && matchesType && matchesLocation && matchesStatus;
    });
  }

  get paginatedJobs() {
    return this.filteredJobs;
  }

  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadJobs();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadJobs();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadJobs();
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.loadJobs();
  }

  onFilterChange() {
    this.currentPage = 1;
  }

  onSearch() {
    this.currentPage = 1;
    this.loadJobs();
  }

  getJobSkills(job: Job): string[] {
    return job.requirements ? job.requirements.split(',').map(s => s.trim()) : [];
  }

  getCompanyName(job: Job): string {
    if (job.description && job.description.includes('Company:')) {
      const match = job.description.match(/Company: ([^\n]+)/);
      if (match) return match[1];
    }
    return 'Company';
  }

  getLocationString(job: Job): string {
    if (typeof job.location === 'string') {
      let location = job.location.replace(/^"|"$/g, '');
      try {
        const parsed = JSON.parse(location);
        if (parsed.city && parsed.state) return `${parsed.city}, ${parsed.state}`;
        if (parsed.remote) return 'Remote';
        return location;
      } catch {
        return location;
      }
    }
    const loc = job.location as any;
    if (loc?.city && loc?.state) return `${loc.city}, ${loc.state}`;
    if (loc?.remote) return 'Remote';
    return 'Location TBD';
  }

  getSalaryRange(job: Job): string {
    if (job.salary) {
      return job.salary;
    }
    if (job.salaryMin && job.salaryMax) {
      return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
    }
    if (job.salaryMin) {
      return `$${job.salaryMin.toLocaleString()}+`;
    }
    return 'Salary TBD';
  }

  getApplicantCount(job: Job): number {
    return 0;
  }

  getDaysAgo(dateString: string): number {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  getJobTypeDisplay(job: Job): string {
    if (!job.jobType) return 'Full Time';
    return job.jobType.replace('_', ' ').toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase());
  }

  getJobTypeClass(job: Job): string {
    return job.jobType?.toLowerCase().replace('_', '-') || 'full-time';
  }

  viewJob(id: string) {
    console.log('View job:', id);
  }

  viewJobDetails(event: Event, id: string) {
    event.stopPropagation();
    this.jobService.getJobById(id).subscribe({
      next: (job) => {
        this.viewingJob = job;
        this.showViewModal = true;
      },
      error: (err) => {
        alert('Failed to load job details');
      }
    });
  }

  editJobDetails(event: Event, job: Job) {
    event.stopPropagation();
    this.editJob(job);
  }

  deleteJobDetails(event: Event, jobId: string) {
    event.stopPropagation();
    this.deleteJob(jobId);
  }

  openPostModal() {
    this.editingJob = null;
    this.showPostModal = true;
    this.error = '';
    this.currentStep = 1;
    this.jobData = {
      title: '',
      clientId: '',
      department: '',
      location: '',
      type: 'full-time',
      description: '',
      salaryMin: '',
      salaryMax: '',
      benefits: '',
      skills: [],
      experienceLevel: 'mid',
      education: ''
    };
  }

  editJob(job: Job) {
    this.editingJob = job;
    this.showPostModal = true;
    this.error = '';
    this.currentStep = 1;
    this.jobData = {
      title: job.title,
      clientId: job.clientId?.toString() || '',
      department: '',
      location: this.getLocationString(job),
      type: job.jobType?.toLowerCase().replace('_', '-') || 'full-time',
      description: job.description || '',
      salaryMin: job.salaryMin?.toString() || '',
      salaryMax: job.salaryMax?.toString() || '',
      benefits: '',
      skills: job.requirements ? job.requirements.split(',').map(s => s.trim()) : [],
      experienceLevel: 'mid',
      education: ''
    };
  }

  deleteJob(jobId: string) {
    const job = this.jobs.find(j => j.id === jobId);
    this.deletingJob = job || null;
    this.showDeleteModal = true;
  }

  activateJob(event: Event, jobId: string) {
    event.stopPropagation();
    this.loading = true;
    this.jobService.updateJobStatus(jobId, 'ACTIVE').subscribe({
      next: () => {
        this.loadJobs();
        this.loading = false;
      },
      error: (err) => {
        alert('Failed to activate job: ' + (err.error?.message || 'Unknown error'));
        this.loading = false;
      }
    });
  }

  confirmDelete() {
    if (this.deletingJob) {
      this.loading = true;
      this.jobService.deleteJob(this.deletingJob.id).subscribe({
        next: () => {
          this.loadJobs();
          this.loading = false;
          this.closeDeleteModal();
        },
        error: (err) => {
          alert('Failed to delete job: ' + (err.error?.message || 'Unknown error'));
          this.loading = false;
        }
      });
    }
  }

  closePostModal() {
    this.showPostModal = false;
    this.currentStep = 1;
  }

  nextStep() {
    if (!this.validateStep()) {
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateStep(): boolean {
    if (this.currentStep === 1) {
      if (!this.jobData.title || !this.jobData.location) {
        this.error = 'Please fill in Job Title and Location';
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.jobData.description) {
        this.error = 'Please fill in Job Description';
        return false;
      }
    } else if (this.currentStep === 3) {
      if (this.jobData.skills.length === 0) {
        this.error = 'Please add at least one skill';
        return false;
      }
    }
    this.error = '';
    return true;
  }

  addSkill() {
    const skill = this.skillInput.trim();
    if (skill && !this.jobData.skills.includes(skill)) {
      this.jobData.skills.push(skill);
      this.skillInput = '';
      this.error = '';
    }
  }

  removeSkill(skill: string) {
    this.jobData.skills = this.jobData.skills.filter(s => s !== skill);
  }

  closeViewModal() {
    this.showViewModal = false;
    this.viewingJob = null;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deletingJob = null;
  }

  editFromView() {
    if (this.viewingJob) {
      this.editJob(this.viewingJob);
      this.closeViewModal();
    }
  }

  postJob() {
    if (!this.validateStep()) {
      return;
    }

    this.loading = true;
    const jobRequest = {
      title: this.jobData.title,
      description: this.jobData.description || 'Job description',
      requirements: this.jobData.skills.join(', '),
      location: this.jobData.location,
      salaryMin: this.jobData.salaryMin ? parseInt(this.jobData.salaryMin) : null,
      salaryMax: this.jobData.salaryMax ? parseInt(this.jobData.salaryMax) : null,
      jobType: this.jobData.type.toUpperCase().replace('-', '_'),
      companyId: 'dddddddd-dddd-dddd-dddd-dddddddddddd'
    };

    if (this.editingJob) {
      this.jobService.updateJob(this.editingJob.id, jobRequest).subscribe({
        next: () => {
          this.closePostModal();
          this.loadJobs();
          this.loading = false;
        },
        error: (err: any) => {
          this.error = err.error?.message || 'Failed to update job';
          this.loading = false;
        }
      });
    } else {
      this.jobService.createJob(jobRequest).subscribe({
        next: () => {
          this.closePostModal();
          this.loadJobs();
          this.loading = false;
        },
        error: (err: any) => {
          this.error = err.error?.message || 'Failed to create job';
          this.loading = false;
        }
      });
    }
  }

  parseSalaryMin(salaryRange: string): number | null {
    if (!salaryRange || salaryRange.toLowerCase().includes('competitive') || salaryRange.toLowerCase().includes('doe')) {
      return null;
    }
    
    const match = salaryRange.match(/\$?([\d,]+)k?/i);
    if (match) {
      const cleanValue = match[1].replace(/,/g, '');
      let value = parseInt(cleanValue);
      if (salaryRange.toLowerCase().includes('k') && value < 1000) {
        value *= 1000;
      }
      return value;
    }
    return null;
  }

  parseSalaryMax(salaryRange: string): number | null {
    if (!salaryRange || salaryRange.toLowerCase().includes('competitive') || salaryRange.toLowerCase().includes('doe')) {
      return null;
    }
    
    const rangeMatch = salaryRange.match(/\$?([\d,]+)k?[\s]*[-–—][\s]*\$?([\d,]+)k?/i);
    if (rangeMatch && rangeMatch[2]) {
      const cleanValue = rangeMatch[2].replace(/,/g, '');
      let value = parseInt(cleanValue);
      if (salaryRange.toLowerCase().includes('k') && value < 1000) {
        value *= 1000;
      }
      return value;
    }
    
    return this.parseSalaryMin(salaryRange);
  }
}