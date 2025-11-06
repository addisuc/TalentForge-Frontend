import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-candidates-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './candidates-search.component.html',
  styleUrls: ['./candidates-search.component.scss']
})
export class CandidatesSearchComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.availableJobs = [];
    this.loadCandidates();
  }

  loadCandidates() {
    this.http.get<any>('/api/candidates').subscribe({
      next: (response) => {
        console.log('Loaded candidates from API:', response);
        this.candidates = (response.content || response).map((candidate: any) => {
          console.log('Mapping candidate:', candidate.id, candidate.userId, candidate.resumeUrl);
          return {
            id: candidate.userId,
            name: `${candidate.firstName || ''} ${candidate.lastName || ''}`.trim() || 'Unknown',
            initials: `${(candidate.firstName || 'U')[0]}${(candidate.lastName || 'N')[0]}`,
            role: 'Candidate',
            location: candidate.location || 'N/A',
            experience: candidate.experience || 0,
            salary: candidate.expectedSalary || 'N/A',
            status: 'Available',
            skills: candidate.skills || [],
            lastActive: Math.floor(Math.random() * 30),
            resumeUrl: candidate.resumeUrl
          };
        });
        console.log('Final candidates array:', this.candidates);
      },
      error: (err) => {
        console.error('Failed to load candidates:', err);
        this.candidates = [];
      }
    });
  }
  showAddModal = false;
  candidateName = '';
  candidateEmail = '';
  candidatePhone = '';
  candidatePosition = '';
  candidateSkills = '';
  candidateResume: File | null = null;
  emailTouched = false;

  candidates: any[] = [];

  searchQuery = '';
  selectedPosition = 'all';
  selectedLocation = 'all';
  selectedExperience = 'all';
  selectedStatus = 'all';
  
  currentPage = 1;
  itemsPerPage = 25;

  get filteredCandidates() {
    return this.candidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          candidate.skills.some((s: string) => s.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const matchesPosition = this.selectedPosition === 'all' || candidate.role === this.selectedPosition;
      const matchesLocation = this.selectedLocation === 'all' || candidate.location.toLowerCase().includes(this.selectedLocation.toLowerCase());
      const matchesExperience = this.selectedExperience === 'all' || this.checkExperience(candidate.experience);
      const matchesStatus = this.selectedStatus === 'all' || candidate.status === this.selectedStatus;
      return matchesSearch && matchesPosition && matchesLocation && matchesExperience && matchesStatus;
    });
  }

  checkExperience(exp: number): boolean {
    if (this.selectedExperience === '0-2') return exp >= 0 && exp <= 2;
    if (this.selectedExperience === '3-5') return exp >= 3 && exp <= 5;
    if (this.selectedExperience === '6-10') return exp >= 6 && exp <= 10;
    if (this.selectedExperience === '10+') return exp > 10;
    return true;
  }

  get totalCandidates() {
    return this.filteredCandidates.length;
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
    return this.filteredCandidates.slice(this.startIndex, this.endIndex);
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

  onFilterChange() {
    this.currentPage = 1;
  }

  showViewModal = false;
  showContactModal = false;
  showScheduleModal = false;
  showAddToJobModal = false;
  selectedCandidate: any = null;
  notification = { show: false, message: '', type: 'success' };
  
  emailSubject: string = '';
  emailMessage: string = '';
  interviewType: string = 'PHONE';
  interviewDateTime: string = '';
  interviewMeetingLink: string = '';
  selectedJobId: string = '';
  applicationNotes: string = '';
  availableJobs: any[] = [];

  viewCandidate(id: number) {
    this.selectedCandidate = this.candidates.find(c => c.id === id);
    if (this.selectedCandidate) {
      this.showViewModal = true;
    }
  }

  closeViewModal() {
    this.showViewModal = false;
  }

  contactCandidate(id: number) {
    this.selectedCandidate = this.candidates.find(c => c.id === id);
    if (this.selectedCandidate) {
      this.emailSubject = 'Job Opportunity';
      this.emailMessage = `Hi ${this.selectedCandidate.name},\n\nI have an exciting opportunity that matches your profile...`;
      this.showContactModal = true;
      console.log('Contact modal opened:', this.showContactModal);
    }
  }

  sendEmail() {
    if (!this.selectedCandidate || !this.emailSubject || !this.emailMessage) {
      this.showNotification('Please fill in all required fields', 'error');
      return;
    }
    
    const candidateEmail = `${this.selectedCandidate.name.toLowerCase().split(' ').join('.')}@example.com`;
    
    console.log('Sending email to:', candidateEmail);
    
    this.emailService.sendCandidateEmail(
      candidateEmail,
      this.selectedCandidate.name,
      this.emailSubject,
      this.emailMessage
    ).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.showNotification('Email sent successfully!', 'success');
        this.closeContactModal();
      },
      error: (err) => {
        console.error('Failed to send email:', err);
        alert(`Failed to send email: ${err.error?.message || err.message || 'Unknown error'}`);
      }
    });
  }

  closeContactModal() {
    console.log('Closing contact modal');
    this.showContactModal = false;
    this.selectedCandidate = null;
  }

  scheduleInterview(id: number) {
    this.selectedCandidate = this.candidates.find(c => c.id === id);
    if (this.selectedCandidate) {
      this.interviewType = 'PHONE';
      this.interviewDateTime = '';
      this.interviewMeetingLink = '';
      this.showScheduleModal = true;
    }
  }

  createInterview() {
    if (!this.selectedCandidate || !this.interviewDateTime) return;

    const interviewData = {
      applicationId: null,
      interviewType: this.interviewType,
      scheduledAt: this.interviewDateTime,
      meetingLink: this.interviewMeetingLink || null,
      notes: `Interview with ${this.selectedCandidate.name}`
    };

    console.log('Sending interview request:', interviewData);
    
    this.http.post('/api/interviews', interviewData).subscribe({
      next: () => {
        this.showNotification('Interview scheduled successfully!', 'success');
        this.closeScheduleModal();
      },
      error: (err) => {
        console.error('Interview error:', err);
        console.error('Status:', err.status, 'Message:', err.message);
        const msg = err.status === 403 ? 'Permission denied - check user role' : 'Failed to schedule interview';
        this.showNotification(msg, 'error');
      }
    });
  }

  closeScheduleModal() {
    this.showScheduleModal = false;
    this.selectedCandidate = null;
  }

  addToJob(id: number) {
    this.selectedCandidate = this.candidates.find(c => c.id === id);
    if (this.selectedCandidate) {
      this.loadAvailableJobs();
      this.selectedJobId = '';
      this.applicationNotes = '';
      this.showAddToJobModal = true;
    }
  }

  loadAvailableJobs() {
    this.http.get<any>('/api/jobs?status=ACTIVE').subscribe({
      next: (response) => {
        this.availableJobs = response.content || response;
      },
      error: (err) => {
        console.error('Failed to load jobs:', err);
        this.availableJobs = [];
      }
    });
  }

  submitApplication() {
    if (!this.selectedCandidate || !this.selectedJobId) return;

    const applicationData = {
      jobId: this.selectedJobId,
      candidateId: this.selectedCandidate.id,
      candidateName: this.selectedCandidate.name,
      candidateEmail: `${this.selectedCandidate.name.toLowerCase().split(' ').join('.')}@example.com`,
      notes: this.applicationNotes,
      status: 'APPLIED'
    };

    console.log('=== SUBMITTING APPLICATION ===');
    console.log('Selected Candidate ID:', this.selectedCandidate.id);
    console.log('Selected Candidate Name:', this.selectedCandidate.name);
    console.log('Selected Job ID:', this.selectedJobId);
    console.log('Application Data:', JSON.stringify(applicationData, null, 2));
    console.log('============================');

    this.http.post('/api/applications', applicationData).subscribe({
      next: () => {
        this.showNotification('Candidate added to job successfully!', 'success');
        this.closeAddToJobModal();
      },
      error: (err) => {
        console.error('Failed to add candidate to job:', err);
        let message = err.error?.message || 'Failed to add candidate to job';
        if (message.includes('already exists')) {
          message = 'Candidate has already applied to this job';
        }
        this.showNotification(message, 'error');
      }
    });
  }

  closeAddToJobModal() {
    this.showAddToJobModal = false;
    this.selectedCandidate = null;
  }

  downloadResume(id: number) {
    const candidate = this.candidates.find(c => c.id === id);
    if (candidate?.resumeUrl) {
      const link = document.createElement('a');
      link.href = candidate.resumeUrl;
      link.download = `${candidate.name.replace(/\s+/g, '_')}_Resume.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      this.showNotification('Resume not available', 'error');
    }
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

  showNotification(message: string, type: 'success' | 'error') {
    this.notification = { show: true, message, type };
    setTimeout(() => {
      this.notification.show = false;
    }, 3000);
  }
}
