import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidates-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './candidates-search.component.html',
  styleUrls: ['./candidates-search.component.scss']
})
export class CandidatesSearchComponent {
  showAddModal = false;
  candidateName = '';
  candidateEmail = '';
  candidatePhone = '';
  candidatePosition = '';
  candidateSkills = '';
  candidateResume: File | null = null;
  emailTouched = false;

  candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      initials: 'SJ',
      role: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      experience: 8,
      salary: '$150k-$180k',
      status: 'Available',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      lastActive: 2
    },
    {
      id: 2,
      name: 'Michael Chen',
      initials: 'MC',
      role: 'DevOps Engineer',
      location: 'Seattle, WA',
      experience: 6,
      salary: '$130k-$160k',
      status: 'Interviewing',
      skills: ['Kubernetes', 'AWS', 'Terraform', 'Python'],
      lastActive: 1
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      initials: 'ER',
      role: 'Product Manager',
      location: 'Austin, TX',
      experience: 10,
      salary: '$140k-$170k',
      status: 'Available',
      skills: ['Agile', 'Product Strategy', 'Analytics', 'UX'],
      lastActive: 3
    },
    {
      id: 4,
      name: 'David Kim',
      initials: 'DK',
      role: 'UX/UI Designer',
      location: 'New York, NY',
      experience: 5,
      salary: '$110k-$140k',
      status: 'Placed',
      skills: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
      lastActive: 7
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      initials: 'LA',
      role: 'Data Scientist',
      location: 'Boston, MA',
      experience: 7,
      salary: '$135k-$165k',
      status: 'Available',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      lastActive: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      initials: 'JW',
      role: 'Backend Developer',
      location: 'Chicago, IL',
      experience: 4,
      salary: '$120k-$150k',
      status: 'Interviewing',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices'],
      lastActive: 1
    }
  ];

  searchQuery = '';
  selectedClient = 'all';
  selectedPosition = 'all';
  selectedLocation = 'all';
  selectedExperience = 'all';
  selectedStatus = 'all';
  
  currentPage = 1;
  itemsPerPage = 25;

  get totalCandidates() {
    return this.candidates.length;
  }

  get totalPages() {
    return Math.ceil(this.totalCandidates / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalCandidates);
  }

  get paginatedCandidates() {
    return this.candidates.slice(this.startIndex, this.endIndex);
  }

  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
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

  viewCandidate(id: number) {
    console.log('View candidate:', id);
  }

  openAddModal() {
    this.showAddModal = true;
    this.candidateName = '';
    this.candidateEmail = '';
    this.candidatePhone = '';
    this.candidatePosition = '';
    this.candidateSkills = '';
    this.candidateResume = null;
    this.emailTouched = false;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.candidateEmail);
  }

  onEmailBlur() {
    this.emailTouched = true;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.candidateResume = file;
    }
  }

  addCandidate() {
    if (this.candidateName && this.isValidEmail()) {
      console.log('Adding candidate:', { 
        name: this.candidateName, 
        email: this.candidateEmail, 
        phone: this.candidatePhone,
        position: this.candidatePosition,
        skills: this.candidateSkills,
        resume: this.candidateResume?.name
      });
      this.closeAddModal();
    }
  }
}
