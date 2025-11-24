import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ClientService, ClientDashboard, ClientApproval } from '../../../core/services/client.service';
import { JobRequestService } from '../../../core/services/job-request.service';
import { ApplicationService } from '../../../core/services/application.service';
import { InterviewService } from '../../../core/services/interview.service';
import { FeedbackService } from '../../../core/services/feedback.service';
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
  activeSection: any = 'overview';



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
  selectedThread: any = null;
  showThreadView = false;

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
  approvedCandidates: any[] = [];
  companyId = 'd5ffee58-f341-41ce-b2a8-4458f175ab33'; // TODO: Get from auth
  
  // Action modals
  showApproveModal = false;
  showHoldModal = false;
  showRejectModal = false;
  selectedSubmission: any = null;
  actionReason = '';
  actionNotes = '';

  constructor(
    private clientService: ClientService,
    private jobRequestService: JobRequestService,
    private applicationService: ApplicationService,
    private interviewService: InterviewService,
    private feedbackService: FeedbackService,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  loadApprovedCandidates(): void {
    console.log('loadApprovedCandidates called with companyId:', this.companyId);
    this.applicationService.getClientApprovedCandidates(this.companyId, 0, 100).subscribe({
      next: (data) => {
        this.approvedCandidates = data.content;
        console.log('Loaded approved candidates:', this.approvedCandidates.length);
      },
      error: (err) => {
        console.error('Failed to load approved candidates:', err);
      }
    });
  }
  
  loadCandidateSubmissions(): void {
    console.log('loadCandidateSubmissions called with companyId:', this.companyId);
    this.applicationService.getClientSubmissions(this.companyId, 0, 100).subscribe({
      next: (data) => {
        this.candidateSubmissions = data.content.map(app => {
          const submission = {
            id: app.id,
            candidateId: app.candidateId,
            candidateName: app.candidateName || 'Unknown Candidate',
            position: app.jobTitle || 'Position Not Specified',
            status: app.status === 'SUBMITTED_TO_CLIENT' ? 'SUBMITTED' : app.status,
            recruiterName: 'Your Recruiter',
            experience: '5+ years',
            currentCompany: 'Previous Company',
            education: 'Bachelor\'s Degree',
            expectedSalary: 'Competitive',
            keyStrengths: ['Skills not provided'],
            recruiterRating: this.formatRating(0),
            resumeUrl: null,
            coverLetter: app.coverLetter || null,
            portfolioUrl: null
          };
          
          // Fetch candidate details to get resume URL and skills
          this.http.get<any>(`/api/candidates/user/${app.candidateId}`).subscribe({
            next: (candidate) => {
              submission.resumeUrl = candidate.resumeUrl;
              submission.keyStrengths = candidate.skills || ['Skills not provided'];
              submission.portfolioUrl = candidate.portfolioUrl;
            },
            error: (err) => console.error('Failed to load candidate details:', err)
          });
          
          return submission;
        });
        console.log('Loaded candidate submissions:', this.candidateSubmissions.length);
      },
      error: (err) => {
        console.error('Failed to load candidate submissions:', err);
      }
    });
  }

  ngOnInit(): void {
    console.log('ClientDashboardComponent ngOnInit called');
    this.loadUserProfile();
    this.loadDashboard();
    this.loadJobRequests();
    this.loadCandidateSubmissions();
    this.loadApprovedCandidates();
    this.loadInterviews();
    this.loadFeedbackHistory();
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
  
  openThread(thread: any): void {
    this.selectedThread = thread;
    this.showThreadView = true;
    
    // Mark unread messages as read
    thread.messages.forEach((msg: any) => {
      if (msg.status === 'Pending' && msg.senderType === 'RECRUITER') {
        this.feedbackService.markAsRead(msg.id).subscribe();
      }
    });
    
    // Update thread to remove unread indicator
    thread.hasUnread = false;
  }
  
  closeThreadView(): void {
    this.showThreadView = false;
    this.selectedThread = null;
  }
  
  replyToThread(): void {
    this.showThreadView = false;
    this.feedbackData.candidateId = this.selectedThread.messages[0].candidateName ? this.selectedThread.threadId : '';
    this.feedbackData.type = this.selectedThread.type;
    this.feedbackData.subject = 'Re: ' + this.selectedThread.messages[0].subject;
    this.openFeedbackForm();
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
    let candidate = this.candidateSubmissions.find(c => c.id === this.feedbackData.candidateId);
    if (!candidate) {
      candidate = this.approvedCandidates.find(c => c.id === this.feedbackData.candidateId);
    }
    if (candidate) {
      this.feedbackData.subject = `Feedback on ${candidate.candidateName || candidate.candidateName}`;
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

    const request = {
      clientId: this.companyId,
      recruiterId: undefined,
      applicationId: this.feedbackData.candidateId || undefined,
      jobId: this.feedbackData.positionId || undefined,
      feedbackType: this.feedbackData.type,
      subject: this.feedbackData.subject,
      message: this.feedbackData.message,
      priority: this.feedbackData.priority || 'Normal'
    };
    
    this.feedbackService.sendClientFeedback(request).subscribe({
      next: () => {
        this.snackBar.open('Feedback sent successfully! Your recruiter will be notified.', 'Close', { 
          duration: 4000,
          panelClass: ['success-snackbar']
        });
        this.closeFeedbackForm();
        this.loadFeedbackHistory();
      },
      error: (err) => {
        console.error('Failed to send feedback:', err);
        this.snackBar.open('Failed to send feedback', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }
  
  loadFeedbackHistory(): void {
    this.feedbackService.getClientFeedback(this.companyId).subscribe({
      next: (feedbacks) => {
        // Group by application or job or general
        const grouped = new Map<string, any[]>();
        
        feedbacks.forEach(f => {
          const key = f.applicationId || f.jobId || 'general';
          if (!grouped.has(key)) {
            grouped.set(key, []);
          }
          grouped.get(key)!.push({
            id: f.id,
            type: f.feedbackType || 'General',
            subject: f.subject,
            message: f.message,
            date: new Date(f.createdAt).toLocaleDateString(),
            time: new Date(f.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            candidateName: f.candidateName,
            positionTitle: f.jobTitle,
            senderName: f.senderName || 'Unknown',
            status: f.status === 'READ' ? 'Read' : 'Pending',
            senderType: f.senderType,
            timestamp: new Date(f.createdAt).getTime()
          });
        });
        
        // Convert to array of threads
        this.feedbackHistory = Array.from(grouped.entries()).map(([key, messages]) => {
          // Sort messages by timestamp descending (latest first)
          const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp);
          const latestMsg = sortedMessages[0];
          const hasUnread = sortedMessages.some(m => m.status === 'Pending' && m.senderType === 'RECRUITER');
          
          return {
            threadId: key,
            candidateName: latestMsg.candidateName,
            positionTitle: latestMsg.positionTitle,
            type: latestMsg.type,
            messageCount: messages.length,
            lastMessage: latestMsg,
            messages: sortedMessages,
            hasUnread: hasUnread
          };
        }).sort((a, b) => b.lastMessage.timestamp - a.lastMessage.timestamp);
      },
      error: (err) => {
        console.error('Failed to load feedback history:', err);
      }
    });
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
    this.selectedSubmission = submission;
    this.actionReason = '';
    this.actionNotes = '';
    this.showApproveModal = true;
  }

  putOnHold(submission: any): void {
    this.selectedSubmission = submission;
    this.actionReason = '';
    this.actionNotes = '';
    this.showHoldModal = true;
  }
  
  confirmApprove(): void {
    if (!this.actionReason) {
      this.snackBar.open('Please select a reason', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    const request = {
      action: 'APPROVE',
      reason: this.actionReason,
      notes: this.actionNotes
    };
    
    this.applicationService.handleClientAction(this.selectedSubmission.id, request).subscribe({
      next: () => {
        this.snackBar.open(`${this.selectedSubmission.candidateName} approved for interview!`, 'Close', { 
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.showApproveModal = false;
        this.loadCandidateSubmissions();
      },
      error: (err) => {
        console.error('Failed to approve candidate:', err);
        this.snackBar.open('Failed to approve candidate', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }
  
  confirmHold(): void {
    if (!this.actionReason) {
      this.snackBar.open('Please select a reason', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    const request = {
      action: 'HOLD',
      reason: this.actionReason,
      notes: this.actionNotes
    };
    
    this.applicationService.handleClientAction(this.selectedSubmission.id, request).subscribe({
      next: () => {
        this.snackBar.open(`${this.selectedSubmission.candidateName} put on hold`, 'Close', { duration: 3000 });
        this.showHoldModal = false;
        this.loadCandidateSubmissions();
      },
      error: (err) => {
        console.error('Failed to put candidate on hold:', err);
        this.snackBar.open('Failed to update status', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }

  viewResume(submission: any): void {
    if (!submission.resumeUrl || submission.resumeUrl === '#') {
      this.snackBar.open('Resume not available', 'Close', { duration: 3000 });
      return;
    }
    this.http.get(submission.resumeUrl, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${submission.candidateName.replace(/\s+/g, '_')}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.snackBar.open('Failed to download resume', 'Close', { duration: 3000 });
      }
    });
  }

  previewResume(submission: any): void {
    if (!submission.resumeUrl || submission.resumeUrl === '#') {
      this.snackBar.open('Resume not available', 'Close', { duration: 3000 });
      return;
    }
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
    this.selectedSubmission = submission;
    this.actionReason = '';
    this.actionNotes = '';
    this.showRejectModal = true;
  }
  
  confirmReject(): void {
    if (!this.actionReason) {
      this.snackBar.open('Please select a reason', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }
    
    const request = {
      action: 'REJECT',
      reason: this.actionReason,
      notes: this.actionNotes
    };
    
    this.applicationService.handleClientAction(this.selectedSubmission.id, request).subscribe({
      next: () => {
        this.snackBar.open(`Feedback sent to recruiter`, 'Close', { 
          duration: 3000,
          panelClass: ['info-snackbar']
        });
        this.showRejectModal = false;
        this.loadCandidateSubmissions();
      },
      error: (err) => {
        console.error('Failed to reject candidate:', err);
        this.snackBar.open('Failed to update status', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }
  
  closeActionModals(): void {
    this.showApproveModal = false;
    this.showHoldModal = false;
    this.showRejectModal = false;
    this.selectedSubmission = null;
    this.actionReason = '';
    this.actionNotes = '';
  }
  
  formatStatus(status: string): string {
    const statusMap: any = {
      'CLIENT_INTERVIEW': 'Interview',
      'OFFER_PENDING': 'Offer Pending',
      'OFFER_ACCEPTED': 'Offer Accepted',
      'HIRED': 'Hired'
    };
    return statusMap[status] || status;
  }
  
  getStatusClass(status: string): string {
    if (status === 'CLIENT_INTERVIEW') return 'interview';
    if (status === 'OFFER_PENDING') return 'pending';
    if (status === 'OFFER_ACCEPTED' || status === 'HIRED') return 'active';
    return '';
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

  setActiveSection(section: any): void {
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

  getTenantName(): string {
    const clientCompanyName = localStorage.getItem('clientCompanyName');
    return clientCompanyName || 'Client Company';
  }

  formatRating(rating: number): string {
    if (!rating || rating === 0) return 'Not rated';
    return '⭐'.repeat(Math.min(Math.max(Math.round(rating), 1), 5));
  }

  getPendingReviewsCount(): number {
    return this.candidateSubmissions.filter(s => s.status === 'SUBMITTED').length;
  }

  getHiredCount(): number {
    return this.approvedCandidates.filter(c => c.status === 'HIRED').length;
  }

  isStepCompleted(currentStatus: string, stepStatus: string): boolean {
    const stages = ['CLIENT_INTERVIEW', 'REFERENCE_CHECK', 'BACKGROUND_CHECK', 'OFFER_PENDING', 'HIRED'];
    const currentIndex = stages.indexOf(currentStatus);
    const stepIndex = stages.indexOf(stepStatus);
    return currentIndex > stepIndex;
  }

  loadInterviews(): void {
    this.interviewService.getInterviewsByClient(this.companyId).subscribe({
      next: (interviews) => {
        console.log('My interviews:', interviews);
        this.scheduledInterviews = interviews.map((interview: any) => ({
          candidateName: interview.candidateName || 'Unknown',
          position: interview.jobTitle || 'Position',
          date: this.datePipe.transform(interview.scheduledAt, 'MMM d, yyyy') || '',
          time: this.datePipe.transform(interview.scheduledAt, 'h:mm a') || '',
          duration: interview.durationMinutes ? `${interview.durationMinutes} min` : '60 min',
          type: interview.interviewType || 'VIDEO',
          round: 'Client Interview',
          interviewers: interview.interviewerName ? [interview.interviewerName] : ['Hiring Manager'],
          location: interview.location,
          meetingLink: interview.meetingLink,
          meetingId: interview.meetingId,
          passcode: interview.passcode,
          status: interview.status || 'SCHEDULED'
        }));
      },
      error: (err) => {
        console.error('Failed to load interviews:', err);
        this.scheduledInterviews = [];
      }
    });
  }
}