import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ClientService, ClientDashboard, ClientApproval } from '../../../core/services/client.service';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule],
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

  mockCandidates = [
    { name: 'John Smith', position: 'Software Engineer', status: 'interview', initials: 'JS' },
    { name: 'Sarah Johnson', position: 'Product Manager', status: 'screening', initials: 'SJ' },
    { name: 'Mike Chen', position: 'Designer', status: 'offer', initials: 'MC' }
  ];

  mockPositions = [
    { title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', applicants: 12, daysOpen: 5, status: 'Active' },
    { title: 'Product Manager', department: 'Product', location: 'New York', applicants: 8, daysOpen: 3, status: 'Active' },
    { title: 'UX Designer', department: 'Design', location: 'San Francisco', applicants: 15, daysOpen: 7, status: 'Active' }
  ];

  scheduledInterviews = [
    {
      id: '1',
      candidateName: 'Maria Chen',
      position: 'Product Manager',
      date: 'Today, Nov 13',
      time: '2:00 PM - 3:00 PM',
      duration: '60 min',
      type: 'Video Call',
      round: 'Final Round',
      interviewers: ['You', 'Sarah Wilson (PM)', 'Mike Johnson (Engineering)'],
      location: null,
      meetingLink: 'https://zoom.us/j/123456789',
      meetingId: '123 456 789',
      status: 'SCHEDULED'
    },
    {
      id: '2', 
      candidateName: 'Alex Rodriguez',
      position: 'Senior Software Engineer',
      date: 'Tomorrow, Nov 14',
      time: '10:00 AM - 11:30 AM',
      duration: '90 min',
      type: 'Technical Interview',
      round: 'Round 2',
      interviewers: ['You', 'David Kim (Tech Lead)', 'Lisa Park (Senior Dev)'],
      location: null,
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      meetingId: 'abc-defg-hij',
      status: 'SCHEDULED'
    },
    {
      id: '3',
      candidateName: 'James Wilson',
      position: 'UX Designer',
      date: 'Friday, Nov 15',
      time: '3:00 PM - 4:00 PM', 
      duration: '60 min',
      type: 'In-Person',
      round: 'Portfolio Review',
      interviewers: ['You', 'Emma Davis (Design Director)'],
      location: 'Conference Room A, 5th Floor',
      meetingLink: null,
      meetingId: null,
      status: 'SCHEDULED'
    }
  ];

  mockJobRequests = [
    { title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', status: 'Active', requestedDate: 'Nov 1, 2024', recruiter: 'Jane Smith' },
    { title: 'Product Manager', department: 'Product', location: 'New York', status: 'Pending', requestedDate: 'Nov 5, 2024', recruiter: 'Mike Johnson' }
  ];

  mockFeedback = [
    { candidateName: 'John Smith', position: 'Software Engineer', date: 'Nov 10, 2024', notes: 'Strong technical skills, good cultural fit. Recommend for final round.' },
    { candidateName: 'Sarah Johnson', position: 'Product Manager', date: 'Nov 8, 2024', notes: 'Excellent communication skills, needs more experience in our industry.' }
  ];

  candidateSubmissions = [
    {
      id: '1',
      candidateName: 'Alex Rodriguez',
      position: 'Senior Software Engineer',
      recruiterName: 'Jane Smith',
      status: 'SUBMITTED',
      stage: 'Client Review',
      experience: '8 years',
      currentCompany: 'Microsoft',
      education: 'BS Computer Science - Stanford',
      expectedSalary: '$180,000',
      availability: '2 weeks notice',
      recruiterRating: 'A+ Candidate',
      keyStrengths: ['Technical Leadership', 'System Architecture', 'Team Management'],
      submittedDate: '2024-11-12',
      resumeUrl: '/resumes/alex-rodriguez.pdf',
      portfolioUrl: 'https://alexrodriguez.dev'
    },
    {
      id: '2', 
      candidateName: 'Maria Chen',
      position: 'Product Manager',
      recruiterName: 'Mike Johnson',
      status: 'APPROVED_FOR_INTERVIEW',
      experience: '6 years in product management',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
      recruiterNotes: 'Strong product sense with proven track record of launching successful products. Great communication skills and stakeholder management.',
      submittedDate: '2024-11-10',
      clientDecision: 'Approved for Interview',
      clientFeedback: 'Impressive background, would like to discuss product vision in interview.'
    },
    {
      id: '3',
      candidateName: 'David Kim',
      position: 'UX Designer', 
      recruiterName: 'Sarah Wilson',
      status: 'REJECTED',
      experience: '4 years in UX design',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      recruiterNotes: 'Creative designer with good portfolio. Experience in B2B products and mobile design.',
      submittedDate: '2024-11-08',
      clientDecision: 'Not Interested',
      clientFeedback: 'Portfolio doesn\'t align with our design standards. Looking for more enterprise experience.'
    }
  ];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
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

  requestNewPosition(): void {
    this.snackBar.open('Job request form coming soon', 'Close', { duration: 3000 });
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