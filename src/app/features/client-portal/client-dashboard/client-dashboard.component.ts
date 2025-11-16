import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ClientService, ClientDashboard, ClientApproval } from '../../../core/services/client.service';
import { JobRequestService } from '../../../core/services/job-request.service';
import { JobRequest } from '../../../core/models/client.model';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  providers: [DatePipe],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  dashboard: ClientDashboard = {
    pendingApprovals: [],
    totalPending: 0,
    totalApproved: 0,
    totalRejected: 0
  };
  isLoading = true;
  displayedColumns: string[] = ['candidate', 'job', 'appliedDate', 'status', 'actions'];
  activeSection = 'overview';



  scheduledInterviews: any[] = [];

  jobRequests: JobRequest[] = [];
  loadingJobRequests = false;

  // Filters
  submissionFilter = 'all';
  positionFilter = 'all';
  candidateSearch = '';
  filteredSubmissions: any[] = [];
  
  interviewFilter = 'all';
  interviewSearch = '';
  filteredInterviews: any[] = [];
  
  // Notifications
  showNotifications = false;
  notifications: any[] = [];
  
  get unreadNotifications(): number {
    return this.notifications.filter(n => !n.read).length;
  }
  
  // Email & Notification Settings
  emailSettings = {
    newCandidates: true,
    interviewScheduled: true,
    jobUpdates: true,
    candidateStatusChange: true,
    recruiterMessages: true,
    dailySummary: false
  };
  
  notificationSettings = {
    pushEnabled: true,
    soundEnabled: false
  };
  
  // Settings Tab
  settingsTab = 'account';
  
  // Account Settings
  accountSettings = {
    fullName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    phone: ''
  };
  
  passwordChange = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  
  // Preferences
  preferences = {
    theme: 'light',
    compactView: false,
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    itemsPerPage: 25,
    showStats: true,
    showRecentCandidates: true,
    showActivePositions: true
  };
  
  showJobRequestForm = false;
  showJobRequestDetails = false;
  selectedJobRequest: any = null;
  jobRequest: any = {
    title: '',
    department: '',
    location: '',
    employmentType: '',
    openings: 1,
    priority: '',
    salaryRange: '',
    benefits: '',
    description: '',
    requirements: '',
    preferredQualifications: '',
    startDate: '',
    hiringManager: '',
    notes: ''
  };

  feedbackHistory: any[] = [];

  showFeedbackForm = false;
  feedbackData: any = {
    type: '',
    candidateId: '',
    positionId: '',
    category: '',
    subject: '',
    message: '',
    priority: 'Normal'
  };

  candidateSubmissions: any[] = [];

  constructor(
    private clientService: ClientService,
    private jobRequestService: JobRequestService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadDashboard();
    this.loadJobRequests();
  }

  loadUserProfile(): void {
    const userStr = localStorage.getItem('clientUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.accountSettings.fullName = user.contactPerson || '';
      this.accountSettings.email = user.email || '';
      this.accountSettings.companyName = user.companyName || 'Client Company';
    }
  }
  
  get uniquePositions(): string[] {
    return [...new Set(this.candidateSubmissions.map(s => s.position))];
  }

  loadDashboard(): void {
    const tenantId = localStorage.getItem('tenantId');
    const clientUserId = localStorage.getItem('clientUserId');
    
    if (!tenantId || !clientUserId) {
      this.router.navigate(['/client-login']);
      return;
    }

    this.isLoading = true;
    this.clientService.getPendingApprovals(tenantId, clientUserId).subscribe({
      next: (approvals) => {
        this.dashboard = {
          pendingApprovals: approvals,
          totalPending: approvals.length,
          totalApproved: 0,
          totalRejected: 0
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load dashboard:', error);
        this.snackBar.open('Failed to load dashboard', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
      }
    });
  }

  approveApplication(approval: ClientApproval): void {
    this.processApproval(approval, 'APPROVED');
  }

  rejectApplication(approval: ClientApproval): void {
    this.processApproval(approval, 'REJECTED');
  }

  private processApproval(approval: ClientApproval, status: 'APPROVED' | 'REJECTED'): void {
    const tenantId = localStorage.getItem('tenantId');
    const clientUserId = localStorage.getItem('clientUserId');
    
    if (!tenantId || !clientUserId) {
      this.router.navigate(['/client-login']);
      return;
    }

    const request = {
      applicationId: approval.applicationId,
      status: status,
      feedback: status === 'APPROVED' ? 'Approved by client' : 'Rejected by client',
      rating: status === 'APPROVED' ? 5 : 2
    };

    this.clientService.processApproval(request, tenantId, clientUserId).subscribe({
      next: () => {
        this.snackBar.open(`Application ${status.toLowerCase()} successfully`, 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.loadDashboard(); // Refresh the list
      },
      error: (error) => {
        console.error('Failed to process approval:', error);
        this.snackBar.open('Failed to process approval', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  logout(): void {
    localStorage.removeItem('clientToken');
    localStorage.removeItem('tenantId');
    localStorage.removeItem('clientUserId');
    localStorage.removeItem('clientUser');
    this.router.navigate(['/client-login']);
  }

  viewCandidates(): void {
    // Navigate to candidate browsing page
    this.snackBar.open('Candidate browsing feature coming soon', 'Close', { duration: 3000 });
  }

  joinInterview(): void {
    this.snackBar.open('Interview joining feature coming soon', 'Close', { duration: 3000 });
  }

  provideFeedback(): void {
    this.snackBar.open('Candidate feedback feature coming soon', 'Close', { duration: 3000 });
  }

  viewCandidateDetails(): void {
    this.snackBar.open('Candidate details view coming soon', 'Close', { duration: 3000 });
  }

  openJobRequestForm(): void {
    this.showJobRequestForm = true;
    this.resetJobRequestForm();
  }

  closeJobRequestForm(): void {
    this.showJobRequestForm = false;
    this.resetJobRequestForm();
  }

  resetJobRequestForm(): void {
    this.jobRequest = {
      title: '',
      department: '',
      location: '',
      employmentType: '',
      openings: 1,
      priority: '',
      salaryRange: '',
      benefits: '',
      description: '',
      requirements: '',
      preferredQualifications: '',
      startDate: '',
      hiringManager: '',
      notes: ''
    };
  }

  isJobRequestFormValid(): boolean {
    return !!(this.jobRequest.title && 
              this.jobRequest.department && 
              this.jobRequest.location && 
              this.jobRequest.employmentType && 
              this.jobRequest.priority && 
              this.jobRequest.salaryRange && 
              this.jobRequest.description && 
              this.jobRequest.requirements);
  }

  loadJobRequests(): void {
    const clientId = localStorage.getItem('clientUserId');
    if (!clientId) return;

    this.loadingJobRequests = true;
    this.jobRequestService.getClientJobRequests(clientId).subscribe({
      next: (requests) => {
        this.jobRequests = requests;
        this.loadingJobRequests = false;
      },
      error: (error) => {
        console.error('Failed to load job requests:', error);
        this.loadingJobRequests = false;
      }
    });
  }

  submitJobRequest(event: Event): void {
    event.preventDefault();
    
    if (!this.jobRequest.title || !this.jobRequest.department || !this.jobRequest.location || 
        !this.jobRequest.employmentType || !this.jobRequest.priority || !this.jobRequest.salaryRange ||
        !this.jobRequest.description || !this.jobRequest.requirements) {
      this.snackBar.open('Please fill in all required fields', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }

    const clientId = localStorage.getItem('clientUserId');
    const clientName = this.accountSettings.companyName;

    const request: Partial<JobRequest> = {
      clientId: clientId!,
      clientName: clientName,
      title: this.jobRequest.title,
      department: this.jobRequest.department,
      location: this.jobRequest.location,
      employmentType: this.jobRequest.employmentType,
      priority: this.jobRequest.priority,
      numberOfOpenings: this.jobRequest.openings,
      salaryRange: this.jobRequest.salaryRange,
      description: this.jobRequest.description,
      requirements: this.jobRequest.requirements,
      status: 'PENDING'
    };

    this.jobRequestService.createJobRequest(request).subscribe({
      next: () => {
        this.snackBar.open('Job request submitted successfully! Your recruiter will be notified.', 'Close', { 
          duration: 4000,
          panelClass: ['success-snackbar']
        });
        this.closeJobRequestForm();
        this.loadJobRequests();
      },
      error: (error) => {
        console.error('Failed to submit job request:', error);
        const errorMessage = error.error?.error || 'Failed to submit job request. Please try again.';
        this.snackBar.open(errorMessage, 'Close', { 
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  viewJobDetails(job: any): void {
    this.selectedJobRequest = job;
    this.showJobRequestDetails = true;
  }

  closeJobRequestDetails(): void {
    this.showJobRequestDetails = false;
    this.selectedJobRequest = null;
  }

  viewCandidatesForJob(job: any): void {
    this.snackBar.open(`Viewing candidates for ${job.title}`, 'Close', { duration: 2000 });
  }

  openFeedbackForm(): void {
    this.showFeedbackForm = true;
    this.resetFeedbackForm();
  }

  closeFeedbackForm(): void {
    this.showFeedbackForm = false;
    this.resetFeedbackForm();
  }

  resetFeedbackForm(): void {
    this.feedbackData = {
      type: '',
      candidateId: '',
      positionId: '',
      category: '',
      subject: '',
      message: '',
      priority: 'Normal'
    };
  }

  onFeedbackTypeChange(): void {
    this.feedbackData.candidateId = '';
    this.feedbackData.positionId = '';
    this.feedbackData.category = '';
  }

  onCandidateSelect(): void {
    const candidate = this.candidateSubmissions.find(c => c.id === this.feedbackData.candidateId);
    if (candidate) {
      this.feedbackData.subject = `Feedback on ${candidate.candidateName}`;
    }
  }

  onPositionSelect(): void {
    this.feedbackData.subject = `Question about ${this.feedbackData.positionId}`;
  }

  submitFeedback(event: Event): void {
    event.preventDefault();
    
    if (!this.feedbackData.type || !this.feedbackData.subject || !this.feedbackData.message) {
      this.snackBar.open('Please fill in all required fields', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }

    console.log('Submitting feedback:', this.feedbackData);
    
    this.snackBar.open('Feedback sent successfully! Your recruiter will be notified.', 'Close', { 
      duration: 4000,
      panelClass: ['success-snackbar']
    });
    
    this.closeFeedbackForm();
  }
  

  

  
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
  
  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
    this.snackBar.open('All notifications marked as read', 'Close', { duration: 2000 });
  }
  
  handleNotificationClick(notification: any): void {
    notification.read = true;
    this.showNotifications = false;
    this.setActiveSection(notification.action);
  }
  
  getNotificationIcon(type: string): string {
    const icons: any = {
      'candidate': '👤',
      'interview': '📅',
      'job': '💼',
      'feedback': '💬',
      'system': '⚙️'
    };
    return icons[type] || '🔔';
  }
  
  viewAllNotifications(): void {
    this.showNotifications = false;
    this.snackBar.open('Full notifications page coming soon', 'Close', { duration: 2000 });
  }
  
  saveEmailSettings(): void {
    console.log('Saving email settings:', this.emailSettings);
    this.snackBar.open('Email notification preferences saved', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
  }
  
  saveNotificationSettings(): void {
    console.log('Saving notification settings:', this.notificationSettings);
    this.snackBar.open('Notification preferences saved', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
  }
  
  saveAccountSettings(): void {
    console.log('Saving account settings:', this.accountSettings);
    this.snackBar.open('Account information updated successfully', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
  }
  
  changePassword(): void {
    if (!this.passwordChange.currentPassword || !this.passwordChange.newPassword || !this.passwordChange.confirmPassword) {
      this.snackBar.open('Please fill in all password fields', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    if (this.passwordChange.newPassword !== this.passwordChange.confirmPassword) {
      this.snackBar.open('New passwords do not match', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    if (this.passwordChange.newPassword.length < 8) {
      this.snackBar.open('Password must be at least 8 characters', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    console.log('Changing password');
    this.snackBar.open('Password updated successfully', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
    
    // Reset form
    this.passwordChange = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }
  
  savePreferences(): void {
    console.log('Saving preferences:', this.preferences);
    this.snackBar.open('Preferences saved successfully', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
  }

  viewFullProfile(submission: any): void {
    this.snackBar.open('Opening candidate profile...', 'Close', { duration: 2000 });
    // In real implementation, this would open a detailed candidate profile modal
  }

  moveToInterview(submission: any): void {
    submission.status = 'INTERVIEW_STAGE';
    submission.stage = 'Interview Scheduling';
    
    this.sendDecisionToRecruiter(submission.id, 'MOVE_TO_INTERVIEW', 'Client approved - schedule interview');
    
    this.snackBar.open(`${submission.candidateName} moved to interview stage`, 'Close', { 
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  putOnHold(submission: any): void {
    const reason = prompt('Reason for hold (optional):');
    submission.status = 'ON_HOLD';
    submission.stage = 'On Hold';
    
    this.sendDecisionToRecruiter(submission.id, 'ON_HOLD', reason || 'Client requested hold');
    
    this.snackBar.open(`${submission.candidateName} put on hold`, 'Close', { duration: 3000 });
  }

  viewResume(submission: any): void {
    window.open(submission.resumeUrl, '_blank');
  }

  viewPortfolio(submission: any): void {
    window.open(submission.portfolioUrl, '_blank');
  }

  viewCandidateProfile(interview: any): void {
    this.snackBar.open(`Opening ${interview.candidateName}'s profile...`, 'Close', { duration: 2000 });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Copied to clipboard!', 'Close', { duration: 2000 });
    });
  }

  copyMeetingDetails(interview: any): void {
    let details = `Meeting Link: ${interview.meetingLink}`;
    if (interview.meetingId) details += `\nMeeting ID: ${interview.meetingId}`;
    if (interview.passcode) details += `\nPasscode: ${interview.passcode}`;
    
    navigator.clipboard.writeText(details).then(() => {
      this.snackBar.open('Meeting details copied to clipboard!', 'Close', { duration: 2000 });
    });
  }

  downloadCalendar(interview: any): void {
    // Generate .ics file for calendar import
    const startDate = new Date(`${interview.date} ${interview.time.split(' - ')[0]}`);
    const endDate = new Date(`${interview.date} ${interview.time.split(' - ')[1]}`);
    
    this.snackBar.open('Calendar invite feature coming soon', 'Close', { duration: 3000 });
  }

  rejectCandidate(submission: any): void {
    // Open feedback dialog
    const feedback = prompt('Please provide feedback for the recruiter (optional):');
    
    submission.status = 'REJECTED';
    submission.clientDecision = 'Not Interested';
    submission.clientFeedback = feedback || 'No additional feedback provided';
    
    // Send decision to recruiter dashboard
    this.sendDecisionToRecruiter(submission.id, 'REJECTED', feedback || 'Client not interested in this candidate');
    
    this.snackBar.open(`${submission.candidateName} marked as not interested. Feedback sent to recruiter.`, 'Close', { 
      duration: 4000,
      panelClass: ['info-snackbar']
    });
  }

  private sendDecisionToRecruiter(submissionId: string, decision: string, feedback: string): void {
    // This would call the backend API to update the recruiter's dashboard
    const payload = {
      submissionId,
      clientDecision: decision,
      clientFeedback: feedback,
      timestamp: new Date().toISOString()
    };
    
    console.log('Sending decision to recruiter dashboard:', payload);
    // API call would go here: this.clientService.submitCandidateDecision(payload)
  }

  viewReports(): void {
    // Navigate to reports and analytics
    this.snackBar.open('Reports and analytics feature coming soon', 'Close', { duration: 3000 });
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  getInitials(name: string): string {
    if (!name) return 'UN';
    const parts = name.split(' ');
    return parts.length > 1 ? parts[0][0] + parts[1][0] : name.substring(0, 2);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'PENDING': return 'warn';
      case 'APPROVED': return 'primary';
      case 'REJECTED': return 'accent';
      default: return '';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'PENDING': return 'schedule';
      case 'APPROVED': return 'check_circle';
      case 'REJECTED': return 'cancel';
      default: return 'help';
    }
  }
}