import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../core/services/client.service';
import { EmailService } from '../../core/services/email.service';
import { JobService } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { JobRequestService } from '../../core/services/job-request.service';
import { FeedbackService } from '../../core/services/feedback.service';
import { JobRequest } from '../../core/models/client.model';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FeedbackResponseModalComponent } from '../applications/feedback-response-modal.component';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FeedbackResponseModalComponent],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client: any = null;
  stats: any[] = [];
  jobs: any[] = [];
  applications: any[] = [];
  notes: any[] = [];
  activities: any[] = [];
  showEmailModal = false;
  showNoteModal = false;
  showJobRequestModal = false;
  selectedJobRequest: any = null;
  emailSubject = '';
  emailBody = '';
  noteText = '';
  sending = false;
  loading = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  
  // Tabs
  activeTab = 'overview';
  
  // Job Requests
  jobRequestFilter = 'pending';
  jobRequests: any[] = [];
  
  // Candidate Submissions
  candidateSubmissions: any[] = [];
  
  // Client Feedback
  clientFeedback: any[] = [];
  
  // Shared Interviews
  sharedInterviews: any[] = [];
  
  // Feedback Response Modal
  showFeedbackResponseModal = false;
  selectedFeedback: any = null;
  
  get pendingJobRequests(): number {
    return this.jobRequests.filter(r => r.status === 'PENDING').length;
  }
  
  get approvedJobRequests(): number {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return this.jobRequests.filter(r => 
      r.status === 'COMPLETED' && 
      new Date(r.updatedAt) >= sevenDaysAgo
    ).length;
  }
  
  get pendingApprovals(): number {
    return this.candidateSubmissions.filter(s => s.status === 'SUBMITTED').length;
  }
  
  get unreadFeedback(): number {
    return this.clientFeedback.filter(f => !f.read).length;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private emailService: EmailService,
    private jobService: JobService,
    private applicationService: ApplicationService,
    private jobRequestService: JobRequestService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clientId = params['id'];
      if (clientId) {
        this.loadClient(clientId);
        this.loadJobRequests();
        this.loadClientFeedback(clientId);
      }
    });
  }
  
  loadClientFeedback(clientId: string) {
    this.feedbackService.getClientFeedback(clientId).subscribe({
      next: (feedbacks) => {
        this.clientFeedback = feedbacks.map(f => ({
          id: f.id,
          subject: f.subject,
          message: f.message,
          date: new Date(f.createdAt).toLocaleDateString(),
          time: new Date(f.createdAt).toLocaleTimeString(),
          candidateName: f.candidateName || 'General',
          jobTitle: f.jobTitle || '',
          senderType: f.senderType,
          senderName: f.senderName || 'Client',
          read: f.status === 'READ',
          priority: f.priority || 'Normal',
          type: f.feedbackType || 'General',
          applicationId: f.applicationId,
          jobId: f.jobId
        }));
      },
      error: (err) => {
        console.error('Failed to load client feedback:', err);
      }
    });
  }

  loadClient(id: string) {
    this.loading = true;
    
    forkJoin({
      client: this.clientService.getClientById(id),
      jobs: this.jobService.getJobsByClient(id),
      notes: this.clientService.getNotes(id),
      activities: this.clientService.getActivities(id).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ client, jobs, notes, activities }) => {
        this.client = client;
        this.jobs = jobs;
        this.notes = notes;
        this.activities = activities.map((a: any) => ({
          icon: this.getActivityIcon(a.activityType),
          title: a.title,
          description: a.description,
          date: a.createdAt
        }));
        this.buildActivityTimeline();
        
        this.calculateStats();
        
        // Load applications for all jobs
        if (this.jobs.length > 0) {
          const applicationCalls = this.jobs.map(job => 
            this.applicationService.getApplicationsByJob(job.id, 0, 100)
          );
          
          forkJoin(applicationCalls).subscribe({
            next: (results) => {
              this.applications = results.flatMap(r => r.content);
              this.calculateStats();
            },
            error: (err) => {
              console.error('Error loading applications:', err);
            }
          });
        }
        
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading client data:', err);
        this.showNotification('Failed to load client data', 'error');
        this.loading = false;
      }
    });
  }
  
  calculateStats() {
    const activeJobs = this.jobs.filter(j => j.status === 'OPEN' || j.status === 'ACTIVE').length;
    const hiredCount = this.applications.filter(a => a.status === 'HIRED').length;
    const inPipeline = this.applications.filter(a => 
      !['HIRED', 'REJECTED', 'WITHDRAWN'].includes(a.status)
    ).length;
    
    this.stats = [
      { label: 'Active Jobs', value: activeJobs, icon: '💼' },
      { label: 'Total Hires', value: hiredCount, icon: '✅' },
      { label: 'In Pipeline', value: inPipeline, icon: '⏳' },
      { label: 'Total Applications', value: this.applications.length, icon: '📊' }
    ];
  }

  get recentHires() {
    return this.applications
      .filter(a => a.status === 'HIRED')
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5)
      .map(a => ({
        name: a.candidateName || 'Unknown',
        position: a.jobTitle || 'Unknown Position',
        date: a.updatedAt,
        avatar: this.getInitials(a.candidateName || 'U')
      }));
  }
  
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  
  getApplicationCount(jobId: string): number {
    return this.applications.filter(a => a.jobId === jobId).length;
  }

  contactClient() {
    if (this.client) {
      this.emailSubject = `Regarding ${this.client.name}`;
      this.emailBody = '';
      this.showEmailModal = true;
    }
  }

  closeEmailModal() {
    this.showEmailModal = false;
    this.emailSubject = '';
    this.emailBody = '';
  }

  sendEmail() {
    if (!this.emailSubject || !this.emailBody) {
      this.showNotification('Please fill in subject and message', 'error');
      return;
    }

    this.sending = true;
    this.emailService.sendEmail(this.client.email, this.emailSubject, this.emailBody).subscribe({
      next: () => {
        this.showNotification('Email sent successfully', 'success');
        this.closeEmailModal();
        this.sending = false;
      },
      error: (err: any) => {
        console.error('Error sending email:', err);
        if (err.status === 403) {
          this.showNotification('Email service not available. Please contact administrator.', 'error');
        } else {
          this.showNotification('Failed to send email', 'error');
        }
        this.sending = false;
      }
    });
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  editClient() {
    this.router.navigate(['/clients'], { state: { editClientId: this.client.id } });
  }

  createJob() {
    this.router.navigate(['/jobs/create'], { queryParams: { clientId: this.client.id } });
  }
  
  addNote() {
    this.noteText = '';
    this.showNoteModal = true;
  }
  
  closeNoteModal() {
    this.showNoteModal = false;
    this.noteText = '';
  }
  
  saveNote() {
    if (!this.noteText.trim()) {
      this.showNotification('Please enter a note', 'error');
      return;
    }
    
    this.clientService.addNote(this.client.id, this.noteText).subscribe({
      next: () => {
        this.showNotification('Note saved successfully', 'success');
        this.clientService.getNotes(this.client.id).subscribe({
          next: (notes) => {
            this.notes = notes;
            this.closeNoteModal();
          }
        });
      },
      error: (err: any) => {
        console.error('Error saving note:', err);
        this.showNotification('Failed to save note', 'error');
      }
    });
  }
  
  viewJob(jobId: string) {
    this.router.navigate(['/jobs', jobId]);
  }

  buildActivityTimeline() {
    const timeline: any[] = [...this.activities];

    // Add job creation activities
    this.jobs.forEach(job => {
      timeline.push({
        icon: '💼',
        title: 'Job Posted',
        description: `Posted job: ${job.title}`,
        date: job.createdAt
      });
    });

    // Add application activities
    this.applications.forEach(app => {
      timeline.push({
        icon: '📄',
        title: 'Application Received',
        description: `${app.candidateName || 'Candidate'} applied for ${app.jobTitle || 'position'}`,
        date: app.createdAt
      });

      if (app.status === 'HIRED') {
        timeline.push({
          icon: '✅',
          title: 'Candidate Hired',
          description: `${app.candidateName || 'Candidate'} hired for ${app.jobTitle || 'position'}`,
          date: app.updatedAt
        });
      }
    });

    // Sort by date descending
    this.activities = timeline.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 20); // Show last 20 activities
  }

  getActivityIcon(activityType: string): string {
    const icons: any = {
      'CLIENT_CREATED': '🏢',
      'CLIENT_UPDATED': '✏️',
      'NOTE_ADDED': '📝',
      'JOB_POSTED': '💼',
      'APPLICATION_RECEIVED': '📄',
      'CANDIDATE_HIRED': '✅',
      'EMAIL_SENT': '✉️'
    };
    return icons[activityType] || '📌';
  }
  
  // Job Requests Methods
  loadJobRequests() {
    this.jobRequestService.getJobRequestsForRecruiter().subscribe({
      next: (requests) => {
        const clientId = this.route.snapshot.params['id'];
        this.jobRequests = requests.filter(r => r.clientId === clientId);
      },
      error: (err) => {
        console.error('Error loading job requests:', err);
      }
    });
  }
  
  getPendingJobRequests() {
    return this.jobRequests.filter(r => r.status === 'PENDING');
  }
  
  getFilteredJobRequests() {
    if (this.jobRequestFilter === 'all') return this.jobRequests;
    if (this.jobRequestFilter === 'pending') return this.jobRequests.filter(r => r.status === 'PENDING');
    if (this.jobRequestFilter === 'approved') return this.jobRequests.filter(r => r.status === 'COMPLETED');
    return this.jobRequests;
  }
  
  approveJobRequest(request: JobRequest) {
    // First update status to COMPLETED
    this.jobRequestService.updateJobRequestStatus(request.id, 'COMPLETED').subscribe({
      next: (updated) => {
        // Then create actual job posting
        const jobData = {
          title: request.title,
          description: request.description,
          requirements: request.requirements,
          location: request.location,
          department: request.department,
          employmentType: request.employmentType,
          salaryRange: request.salaryRange,
          clientId: request.clientId,
          clientName: request.clientName,
          jobRequestId: request.id,
          status: 'DRAFT',
          jobType: request.employmentType, // Use employment type as job type
          companyId: request.clientId
        } as any;
        
        this.jobService.createJob(jobData).subscribe({
          next: (job) => {
            this.showNotification(`Job "${request.title}" created as draft. Activate it when ready to go live.`, 'success');
            (request as any).status = 'COMPLETED';
          },
          error: (err) => {
            console.error('Error creating job:', err);
            this.showNotification('Request approved but failed to create job posting', 'error');
          }
        });
      },
      error: (err) => {
        console.error('Error approving job request:', err);
        this.showNotification('Failed to approve job request', 'error');
      }
    });
  }
  
  sendJobLiveNotification(request: JobRequest, job: any) {
    const clientName = this.client.contactPerson || this.client.name;
    
    this.emailService.sendEmail(
      this.client.email,
      `Your Job Request "${request.title}" Has Been Approved!`,
      `Hi ${clientName},\n\nGreat news! Your job request "${request.title}" (${request.requestId}) has been approved and is now active.\n\nWe have published the job posting and will begin sourcing qualified candidates immediately. You'll receive candidate submissions through your client portal as we find suitable matches.\n\nJob Details:\n- Title: ${request.title}\n- Department: ${request.department}\n- Location: ${request.location}\n- Priority: ${request.priority}\n\nWe'll keep you updated on our progress. Thank you for choosing our recruiting services!\n\nBest regards,\nYour Recruiting Team`
    ).subscribe({
      next: () => console.log('Job live notification sent to client'),
      error: (err) => console.error('Failed to send notification email:', err)
    });
  }
  
  rejectJobRequest(request: JobRequest) {
    const reason = prompt(`Please provide a reason for declining "${request.title}":`);
    
    if (reason !== null) { // User didn't cancel
      const declineReason = reason.trim() || 'No reason provided';
      
      this.jobRequestService.updateJobRequestStatus(request.id, 'REJECTED', declineReason).subscribe({
        next: (updated) => {
          this.showNotification(`Job request "${request.title}" declined`, 'success');
          (request as any).status = 'REJECTED';
          
          // Send decline notification to client
          this.sendJobDeclineNotification(request, declineReason);
        },
        error: (err) => {
          console.error('Error rejecting job request:', err);
          this.showNotification('Failed to reject job request', 'error');
        }
      });
    }
  }
  
  sendJobDeclineNotification(request: JobRequest, reason: string) {
    const clientName = this.client.contactPerson || this.client.name;
    
    this.emailService.sendEmail(
      this.client.email,
      `Job Request "${request.title}" Update`,
      `Hi ${clientName},\n\nWe've reviewed your job request "${request.title}" (${request.requestId}).\n\nUnfortunately, we're unable to proceed with this request at this time.\n\nReason: ${reason}\n\nJob Details:\n- Title: ${request.title}\n- Department: ${request.department}\n- Location: ${request.location}\n\nIf you have any questions or would like to discuss alternative approaches, please don't hesitate to reach out.\n\nBest regards,\nYour Recruiting Team`
    ).subscribe({
      next: () => console.log('Job decline notification sent to client'),
      error: (err) => console.error('Failed to send decline notification email:', err)
    });
  }
  
  viewJobRequestDetails(request: any) {
    this.selectedJobRequest = request;
    this.showJobRequestModal = true;
  }
  
  closeJobRequestModal() {
    this.showJobRequestModal = false;
    this.selectedJobRequest = null;
  }
  
  viewCreatedJob(request: any) {
    this.showNotification('Navigating to created job...', 'success');
  }
  
  // Candidate Submissions Methods
  openSubmitCandidateModal() {
    this.showNotification('Submit candidate modal coming soon', 'success');
  }
  
  viewCandidateProfile(submission: any) {
    this.showNotification(`Viewing profile for ${submission.candidateName}`, 'success');
  }
  
  // Client Feedback Methods
  respondToFeedback(feedback: any) {
    this.selectedFeedback = feedback;
    this.showFeedbackResponseModal = true;
  }
  
  closeFeedbackResponseModal() {
    this.showFeedbackResponseModal = false;
    this.selectedFeedback = null;
  }
  
  onFeedbackResponseSubmitted() {
    this.showFeedbackResponseModal = false;
    this.showNotification('Response sent successfully', 'success');
    this.loadClientFeedback(this.client.id);
    this.selectedFeedback = null;
  }
  
  markAsRead(feedback: any) {
    this.feedbackService.markAsRead(feedback.id).subscribe({
      next: () => {
        feedback.read = true;
        this.showNotification('Marked as read', 'success');
      },
      error: (err) => {
        console.error('Failed to mark as read:', err);
      }
    });
  }
  
  // Interview Methods
  scheduleInterview() {
    this.showNotification('Schedule interview modal coming soon', 'success');
  }
  
  editInterview(interview: any) {
    this.showNotification(`Editing interview for ${interview.candidateName}`, 'success');
  }
  
  notifyClient(interview: any) {
    this.showNotification(`Notification sent to client about ${interview.candidateName} interview`, 'success');
  }
  
  cancelInterview(interview: any) {
    if (confirm(`Cancel interview with ${interview.candidateName}?`)) {
      this.showNotification('Interview cancelled', 'success');
      interview.status = 'Cancelled';
    }
  }
}


