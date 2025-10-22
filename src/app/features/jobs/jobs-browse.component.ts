import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-browse',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs-browse.component.html',
  styleUrls: ['./jobs-browse.component.scss']
})
export class JobsBrowseComponent {
  showPostModal = false;
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

  jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      companyInitial: 'TC',
      location: 'San Francisco, CA',
      salary: '$120k - $180k',
      type: 'full-time',
      postedDays: 2,
      applicants: 45,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      companyInitial: 'IL',
      location: 'Remote',
      salary: '$130k - $160k',
      type: 'remote',
      postedDays: 5,
      applicants: 32,
      skills: ['Product Strategy', 'Agile', 'Analytics', 'Leadership']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      companyInitial: 'DS',
      location: 'New York, NY',
      salary: '$90k - $120k',
      type: 'contract',
      postedDays: 1,
      applicants: 28,
      skills: ['Figma', 'UI Design', 'Prototyping', 'User Research']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      companyInitial: 'CS',
      location: 'Austin, TX',
      salary: '$110k - $150k',
      type: 'full-time',
      postedDays: 3,
      applicants: 19,
      skills: ['Kubernetes', 'AWS', 'CI/CD', 'Terraform']
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Analytics Inc',
      companyInitial: 'AI',
      location: 'Boston, MA',
      salary: '$125k - $170k',
      type: 'full-time',
      postedDays: 7,
      applicants: 41,
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow']
    },
    {
      id: 6,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      companyInitial: 'WS',
      location: 'Remote',
      salary: '$95k - $130k',
      type: 'remote',
      postedDays: 4,
      applicants: 37,
      skills: ['Vue.js', 'JavaScript', 'CSS', 'REST APIs']
    }
  ];

  get totalJobs() {
    return this.jobs.length;
  }

  get totalPages() {
    return Math.ceil(this.totalJobs / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs);
  }

  get paginatedJobs() {
    return this.jobs.slice(this.startIndex, this.endIndex);
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
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }

  viewJob(id: number) {
    console.log('View job:', id);
  }

  openPostModal() {
    this.showPostModal = true;
    this.jobTitle = '';
    this.jobCompany = '';
    this.jobLocation = '';
    this.jobType = 'full-time';
    this.jobSalary = '';
    this.jobDescription = '';
    this.jobSkills = '';
  }

  closePostModal() {
    this.showPostModal = false;
  }

  postJob() {
    if (this.jobTitle && this.jobCompany && this.jobLocation) {
      console.log('Posting job:', {
        title: this.jobTitle,
        company: this.jobCompany,
        location: this.jobLocation,
        type: this.jobType,
        salary: this.jobSalary,
        description: this.jobDescription,
        skills: this.jobSkills
      });
      this.closePostModal();
    }
  }
}
