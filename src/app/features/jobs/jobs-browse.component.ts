import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobService, Job, JobPage } from '../../core/services/job.service';

@Component({
  selector: 'app-jobs-browse',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs-browse.component.html',
  styleUrls: ['./jobs-browse.component.scss']
})
export class JobsBrowseComponent implements OnInit {
  showPostModal = false;
  showViewModal = false;
  showDeleteModal = false;
  editingJob: Job | null = null;
  viewingJob: Job | null = null;
  deletingJob: Job | null = null;
  jobTitle = '';
  jobCompany = '';
  jobLocation = '';
  jobType = 'full-time';
  jobSalary = '';
  jobDescription = '';
  jobSkills = '';

  searchQuery = '';
  selectedType = 'all';
  selectedClient = 'all';
  selectedPosition = 'all';
  selectedLocation = 'all';
  selectedStatus = 'all';
  
  currentPage = 1;
  itemsPerPage = 25;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  jobs: Job[] = [];
  loading = false;
  error = '';
  totalJobs = 0;
  totalPages = 0;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
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
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs);
  }

  get paginatedJobs() {
    return this.jobs;
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
    this.jobTitle = '';
    this.jobCompany = '';
    this.jobLocation = '';
    this.jobType = 'full-time';
    this.jobSalary = '';
    this.jobDescription = '';
    this.jobSkills = '';
  }

  editJob(job: Job) {
    this.editingJob = job;
    this.showPostModal = true;
    this.error = '';
    this.jobTitle = job.title;
    this.jobCompany = this.getCompanyName(job);
    this.jobLocation = this.getLocationString(job);
    this.jobType = job.jobType?.toLowerCase().replace('_', '-') || 'full-time';
    this.jobSalary = job.salary || this.getSalaryRange(job);
    let description = job.description || '';
    if (description.includes('Company:')) {
      description = description.replace(/Company: [^\n]+\n\n/, '');
    }
    this.jobDescription = description;
    this.jobSkills = job.requirements || '';
  }

  deleteJob(jobId: string) {
    const job = this.jobs.find(j => j.id === jobId);
    this.deletingJob = job || null;
    this.showDeleteModal = true;
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
    if (this.jobTitle && this.jobCompany && this.jobLocation) {
      this.loading = true;
      
      const processedJobType = this.jobType.toUpperCase().replace(/-/g, '_');
      const processedDescription = `Company: ${this.jobCompany}\n\n${this.jobDescription || 'Job description'}`;
      
      const jobRequest = {
        title: this.jobTitle,
        description: processedDescription,
        requirements: this.jobSkills || '',
        location: this.jobLocation,
        salaryMin: this.parseSalaryMin(this.jobSalary),
        salaryMax: this.parseSalaryMax(this.jobSalary),
        jobType: processedJobType,
        companyId: 'dddddddd-dddd-dddd-dddd-dddddddddddd'
      };

      if (this.editingJob) {
        this.jobService.updateJob(this.editingJob.id, jobRequest).subscribe({
          next: (job) => {
            this.closePostModal();
            this.loadJobs();
            this.loading = false;
          },
          error: (err) => {
            this.error = err.error?.message || 'Failed to update job. Please try again.';
            this.loading = false;
          }
        });
      } else {
        this.jobService.createJob(jobRequest).subscribe({
          next: (job) => {
            this.closePostModal();
            this.loadJobs();
            this.loading = false;
          },
          error: (err) => {
            this.error = err.error?.message || 'Failed to create job. Please try again.';
            this.loading = false;
          }
        });
      }
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