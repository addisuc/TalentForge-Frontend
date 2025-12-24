import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApplicationService, JobApplication, ApplicationPage } from '../../core/services/application.service';
import { InterviewService, InterviewRequest } from '../../core/services/interview.service';
import { BackgroundCheckModalComponent } from './background-check-modal.component';
import { ReferenceCheckModalComponent } from './reference-check-modal.component';
import { OfferModalComponent } from './offer-modal.component';
import { FeedbackResponseModalComponent } from './feedback-response-modal.component';

@Component({
  selector: 'app-applications-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DragDropModule, BackgroundCheckModalComponent, ReferenceCheckModalComponent, OfferModalComponent, FeedbackResponseModalComponent],
  templateUrl: './applications-manage.component.html',
  styleUrls: ['./applications-manage.component.scss']
})
export class ApplicationsManageComponent implements OnInit {
  totalApplications = 0;
  selectedClient = 'all';
  selectedJob = 'all';
  selectedPosition = 'all';
  compactView = false;
  loading = false;
  error = '';
  clients: any[] = [];
  showStatusModal = false;
  selectedApplication: JobApplication | null = null;
  statusNotes = '';
  updatingStatus = false;
  showScheduleModal = false;
  pendingStatusChange: any = null;
  interviewType = 'PHONE_INTERVIEW';
  interviewDateTime = '';
  meetingLink = '';
  duration = 60;
  location = '';
  interviewerName = '';
  interviewerEmail = '';
  notes = '';
  showBackgroundCheckModal = false;
  showReferenceCheckModal = false;
  showOfferModal = false;
  selectedApplicationForAction: JobApplication | null = null;
  showReferenceResponsesModal = false;
  referenceResponses: any[] = [];
  toastMessage = '';
  toastType = '';
  showToastFlag = false;
  timelineActivities: any[] = [];
  loadingTimeline = false;
  showFeedbackResponseModal = false;
  clientFeedbackText = '';

  cardsPerColumn = 25;
  applications: JobApplication[] = [];
  stages = [
    { name: 'Applied', status: 'APPLIED', visibleCount: 25, applications: [] as any[] },
    { name: 'Screening', status: 'SCREENING', visibleCount: 25, applications: [] as any[] },
    { name: 'Phone Screen', status: 'PHONE_INTERVIEW', visibleCount: 25, applications: [] as any[] },
    { name: 'Submitted to Client', status: 'SUBMITTED_TO_CLIENT', visibleCount: 25, applications: [] as any[] },
    { name: 'Client Interview', status: 'CLIENT_INTERVIEW', visibleCount: 25, applications: [] as any[] },
    { name: 'Reference Check', status: 'REFERENCE_CHECK', visibleCount: 25, applications: [] as any[] },
    { name: 'Background Check', status: 'BACKGROUND_CHECK', visibleCount: 25, applications: [] as any[] },
    { name: 'Offer', status: 'OFFER_PENDING', visibleCount: 25, applications: [] as any[] },
    { name: 'Offer Declined', status: 'OFFER_DECLINED', visibleCount: 25, applications: [] as any[] },
    { name: 'Hired', status: 'HIRED', visibleCount: 25, applications: [] as any[] },
    { name: 'Rejected', status: 'REJECTED', visibleCount: 25, applications: [] as any[] }
  ];

  statusOptions = [
    { value: 'APPLIED', label: 'Applied' },
    { value: 'SCREENING', label: 'Screening' },
    { value: 'PHONE_INTERVIEW', label: 'Phone Interview' },
    { value: 'SUBMITTED_TO_CLIENT', label: 'Submitted to Client' },
    { value: 'CLIENT_INTERVIEW', label: 'Client Interview' },
    { value: 'REFERENCE_CHECK', label: 'Reference Check' },
    { value: 'BACKGROUND_CHECK', label: 'Background Check' },
    { value: 'OFFER_PENDING', label: 'Offer Pending' },
    { value: 'OFFER_ACCEPTED', label: 'Offer Accepted' },
    { value: 'OFFER_DECLINED', label: 'Offer Declined' },
    { value: 'HIRED', label: 'Hired' },
    { value: 'REJECTED', label: 'Rejected' },
    { value: 'WITHDRAWN', label: 'Withdrawn' }
  ];

  constructor(
    private applicationService: ApplicationService,
    private interviewService: InterviewService,
    private http: HttpClient
  ) {}

  onFilterChange() {
    this.organizeApplicationsByStage();
  }

  ngOnInit() {
    this.loadClients();
    this.loadApplications();
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

  loadApplications() {
    this.loading = true;
    this.error = '';
    this.applicationService.getAllApplications(0, 100).subscribe({
      next: (data: ApplicationPage) => {
        this.applications = data.content;
        this.totalApplications = data.totalElements;
        this.organizeApplicationsByStage();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading applications:', err);
        this.error = 'Failed to load applications';
        this.loading = false;
      }
    });
  }

  get filteredApplications() {
    return this.applications.filter(app => {
      const matchesClient = this.selectedClient === 'all' || app.clientId?.toString() === this.selectedClient;
      const matchesJob = this.selectedJob === 'all' || app.jobId === this.selectedJob;
      const matchesPosition = this.selectedPosition === 'all' || app.jobTitle?.toLowerCase().includes(this.selectedPosition.toLowerCase());
      return matchesClient && matchesJob && matchesPosition;
    });
  }

  organizeApplicationsByStage() {
    this.stages.forEach(stage => stage.applications = []);
    
    this.filteredApplications.forEach(app => {
      const mappedApp = {
        id: app.id,
        name: app.candidateName || 'Unknown Candidate',
        initials: this.getInitials(app.candidateName || 'Unknown Candidate'),
        jobTitle: app.jobTitle || 'Unknown Position',
        email: app.candidateEmail || '',
        phone: '',
        daysAgo: this.getDaysAgo(app.appliedAt),
        skills: [],
        resumeUrl: (app as any).resumeUrl,
        originalApp: app
      };

      // Map offer statuses properly
      let stageStatus = app.status;
      if (app.status === 'OFFER_ACCEPTED') {
        stageStatus = 'HIRED';
      }
      // OFFER_DECLINED stays as is and goes to Offer Declined lane

      const stage = this.stages.find(s => s.status === stageStatus);
      if (stage) {
        stage.applications.push(mappedApp);
      }
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getDaysAgo(dateString: string): number {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  viewApplication(id: string) {
    const application = this.applications.find(app => app.id === id);
    if (application) {
      this.selectedApplication = application;
      this.loadTimeline(id);
      this.showStatusModal = true;
    }
  }

  loadTimeline(applicationId: string) {
    this.loadingTimeline = true;
    this.applicationService.getApplicationTimeline(applicationId).subscribe({
      next: (activities) => {
        this.timelineActivities = activities;
        this.loadingTimeline = false;
      },
      error: (err) => {
        console.error('Failed to load timeline:', err);
        this.timelineActivities = [];
        this.loadingTimeline = false;
      }
    });
  }

  updateApplicationStatus(application: any) {
    this.selectedApplication = application.originalApp || application;
    this.statusNotes = '';
    console.log('Status options:', this.statusOptions);
    console.log('Selected application:', this.selectedApplication);
    this.showStatusModal = true;
  }

  closeStatusModal() {
    this.showStatusModal = false;
    this.selectedApplication = null;
    this.statusNotes = '';
  }

  handleStatusChange(newStatus: string) {
    const isInterviewStatus = ['PHONE_INTERVIEW', 'CLIENT_INTERVIEW'].includes(newStatus);
    const isBackgroundCheck = newStatus === 'BACKGROUND_CHECK';
    const isReferenceCheck = newStatus === 'REFERENCE_CHECK';
    const isOfferPending = newStatus === 'OFFER_PENDING';
    
    if (isInterviewStatus) {
      this.pendingStatusChange = {
        app: { originalApp: this.selectedApplication },
        status: newStatus
      };
      this.interviewType = newStatus;
      this.interviewDateTime = '';
      this.meetingLink = '';
      this.closeStatusModal();
      this.showScheduleModal = true;
    } else if (isBackgroundCheck) {
      this.selectedApplicationForAction = this.selectedApplication;
      this.closeStatusModal();
      this.showBackgroundCheckModal = true;
    } else if (isReferenceCheck) {
      this.selectedApplicationForAction = this.selectedApplication;
      this.closeStatusModal();
      this.showReferenceCheckModal = true;
    } else if (isOfferPending) {
      this.selectedApplicationForAction = this.selectedApplication;
      this.closeStatusModal();
      this.showOfferModal = true;
    } else {
      this.submitStatusUpdate(newStatus);
    }
  }

  submitStatusUpdate(newStatus: string) {
    if (!this.selectedApplication) return;

    this.updatingStatus = true;
    this.applicationService.updateApplicationStatus(this.selectedApplication.id, newStatus).subscribe({
      next: (updatedApp) => {
        // Update the main applications array
        const index = this.applications.findIndex(app => app.id === this.selectedApplication!.id);
        if (index !== -1) {
          this.applications[index] = updatedApp;
        }
        
        // Update the selected application to refresh the timeline
        this.selectedApplication = updatedApp;
        
        // Reorganize applications by stage to reflect the change
        this.organizeApplicationsByStage();
        
        this.closeStatusModal();
        this.updatingStatus = false;
      },
      error: (err) => {
        console.error('Error updating status:', err);
        this.showToast('error', 'Update Failed', 'Failed to update application status. Please try again.');
        this.updatingStatus = false;
      }
    });
  }

  closeScheduleModal() {
    this.showScheduleModal = false;
    this.pendingStatusChange = null;
  }

  confirmScheduleInterview() {
    if (!this.interviewDateTime) {
      this.showToast('warning', 'Required Field', 'Please select interview date and time');
      return;
    }

    const app = this.pendingStatusChange.app;
    const status = this.pendingStatusChange.status;
    const appId = app.originalApp?.id || app.id;
    
    const interviewRequest: any = {
      applicationId: appId,
      interviewType: this.interviewType,
      scheduledAt: this.interviewDateTime,
      durationMinutes: this.duration,
      meetingLink: this.meetingLink || undefined,
      location: this.location || undefined,
      interviewerName: this.interviewerName || undefined,
      interviewerEmail: this.interviewerEmail || undefined,
      notes: this.notes || undefined
    };

    this.interviewService.createInterview(interviewRequest).subscribe({
      next: () => {
        // Update application status after interview is created
        this.applicationService.updateApplicationStatus(app.originalApp.id, status).subscribe({
          next: (updatedApp) => {
            // Update the app object
            app.originalApp = updatedApp;
            
            // Update main applications array
            const index = this.applications.findIndex(a => a.id === updatedApp.id);
            if (index !== -1) {
              this.applications[index] = updatedApp;
            }
            
            // Move the item in UI
            if (this.pendingStatusChange.previousContainer) {
              transferArrayItem(
                this.pendingStatusChange.previousContainer,
                this.pendingStatusChange.currentContainer,
                this.pendingStatusChange.previousIndex,
                this.pendingStatusChange.currentIndex
              );
            }
            
            // Refresh lanes to ensure consistency
            this.organizeApplicationsByStage();
            
            this.closeScheduleModal();
          },
          error: (err) => {
            console.error('Error updating status:', err);
            this.showToast('error', 'Update Failed', 'Failed to update application status');
            this.closeScheduleModal();
          }
        });
      },
      error: (err) => {
        console.error('Error creating interview:', err);
        this.showToast('error', 'Schedule Failed', 'Failed to schedule interview');
        this.closeScheduleModal();
      }
    });
  }

  scheduleInterview(event: Event, id: string) {
    event.stopPropagation();
    console.log('Schedule interview:', id);
  }

  sendEmail(event: Event, id: string) {
    event.stopPropagation();
    console.log('Send email:', id);
  }

  viewResume(event: Event, id: string) {
    event.stopPropagation();
    console.log('View resume:', id);
  }

  getVisibleApplications(stage: any) {
    return stage.applications.slice(0, stage.visibleCount);
  }

  getVisibleCount(stage: any) {
    return Math.min(stage.visibleCount, stage.applications.length);
  }

  hasMore(stage: any) {
    return stage.applications.length > stage.visibleCount;
  }

  getRemainingCount(stage: any) {
    return stage.applications.length - stage.visibleCount;
  }

  loadMore(stage: any) {
    stage.visibleCount += this.cardsPerColumn;
  }

  toggleView() {
    this.compactView = !this.compactView;
  }

  drop(event: CdkDragDrop<any[]>, targetStage: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const app = event.previousContainer.data[event.previousIndex];
      const newStatus = this.getStatusForStage(targetStage.status);
      const isInterviewStage = ['PHONE_INTERVIEW', 'CLIENT_INTERVIEW'].includes(newStatus);
      
      if (isInterviewStage) {
        // Don't move the item yet, show schedule modal first
        this.selectedApplication = app.originalApp;
        this.pendingStatusChange = {
          app: app,
          status: newStatus,
          previousContainer: event.previousContainer.data,
          currentContainer: event.container.data,
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex
        };
        this.interviewType = newStatus;
        this.interviewDateTime = '';
        this.meetingLink = '';
        this.showScheduleModal = true;
      } else {
        // Optimistically update UI
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        
        // Call backend API
        console.log(`Drag-and-drop: Moving application ${app.originalApp.id} to status ${newStatus}`);
        this.applicationService.updateApplicationStatus(app.originalApp.id, newStatus).subscribe({
          next: (updatedApp) => {
            console.log('Drag-and-drop API success:', updatedApp);
            // Update the app object with latest data
            app.originalApp = updatedApp;
            
            // Update the main applications array
            const index = this.applications.findIndex(a => a.id === updatedApp.id);
            if (index !== -1) {
              this.applications[index] = updatedApp;
            }
            
            // Refresh the lanes to ensure consistency
            this.organizeApplicationsByStage();
            
            // Update selected application if it's the same one
            if (this.selectedApplication && this.selectedApplication.id === updatedApp.id) {
              this.selectedApplication = updatedApp;
            }
          },
          error: (err) => {
            console.error('Error updating status:', err);
            // Revert the UI change on error
            transferArrayItem(
              event.container.data,
              event.previousContainer.data,
              event.currentIndex,
              event.previousIndex
            );
            this.showToast('error', 'Update Failed', 'Failed to update application status. Please try again.');
          }
        });
      }
    }
  }

  getStatusForStage(stageStatus: string): string {
    return stageStatus;
  }

  closeBackgroundCheckModal() {
    this.showBackgroundCheckModal = false;
    this.selectedApplicationForAction = null;
  }

  onBackgroundCheckInitiated() {
    if (this.selectedApplicationForAction) {
      // Set the selected application for status update
      this.selectedApplication = this.selectedApplicationForAction;
      this.submitStatusUpdate('BACKGROUND_CHECK');
      // Keep modal open to show updated timeline
      this.selectedApplicationForAction = null;
    }
  }

  closeReferenceCheckModal() {
    this.showReferenceCheckModal = false;
    this.selectedApplicationForAction = null;
  }

  onReferenceCheckSubmitted() {
    if (this.selectedApplicationForAction) {
      this.selectedApplication = this.selectedApplicationForAction;
      this.submitStatusUpdate('REFERENCE_CHECK');
      this.showToast('success', 'References Sent', 'Reference requests have been sent successfully!');
      // Keep modal open to show updated timeline
      this.selectedApplicationForAction = null;
    }
  }

  closeOfferModal() {
    this.showOfferModal = false;
    this.selectedApplicationForAction = null;
  }

  onOfferExtended() {
    if (this.selectedApplicationForAction) {
      this.selectedApplication = this.selectedApplicationForAction;
      this.submitStatusUpdate('OFFER_PENDING');
      // Keep modal open to show updated timeline
      this.selectedApplicationForAction = null;
    }
  }

  viewReferenceResponses(application: JobApplication) {
    this.selectedApplication = application;
    this.referenceResponses = [];
    this.showReferenceResponsesModal = true;
    
    // Load reference responses from backend
    this.http.get<any[]>(`/api/reference-checks/application/${application.id}`).subscribe({
      next: (checks) => {
        if (checks.length > 0) {
          const latestCheck = checks[0];
          this.http.get<any[]>(`/api/reference-checks/${latestCheck.id}/references`).subscribe({
            next: (references) => {
              this.referenceResponses = references;
            },
            error: (err) => console.error('Failed to load references:', err)
          });
        }
      },
      error: (err) => console.error('Failed to load reference checks:', err)
    });
  }

  closeReferenceResponsesModal() {
    this.showReferenceResponsesModal = false;
    this.selectedApplication = null;
    this.referenceResponses = [];
  }

  getApplicationSteps(application: JobApplication | null) {
    if (!application) return [];

    const allSteps = [
      { name: 'Applied', status: 'APPLIED', date: application.appliedAt },
      { name: 'Screening', status: 'SCREENING', date: null },
      { name: 'Phone Interview', status: 'PHONE_INTERVIEW', date: null },
      { name: 'Submitted to Client', status: 'SUBMITTED_TO_CLIENT', date: null },
      { name: 'Client Interview', status: 'CLIENT_INTERVIEW', date: null },
      { name: 'Reference Check', status: 'REFERENCE_CHECK', date: null },
      { name: 'Background Check', status: 'BACKGROUND_CHECK', date: null },
      { name: 'Offer Pending', status: 'OFFER_PENDING', date: null },
      { name: 'Hired', status: 'HIRED', date: null }
    ];

    // Map timeline activities to steps
    if (this.timelineActivities.length > 0) {
      this.timelineActivities.forEach(activity => {
        if (activity.newStatus) {
          const step = allSteps.find(s => s.status === activity.newStatus);
          if (step && !step.date) {
            step.date = activity.createdAt;
          }
        }
      });
    }

    const currentStatusIndex = allSteps.findIndex(step => step.status === application.status);
    
    return allSteps.map((step, index) => ({
      ...step,
      completed: index < currentStatusIndex,
      current: index === currentStatusIndex,
      date: step.date ? new Date(step.date) : null
    }));
  }

  getReferenceStatusBadge(status: string): string {
    switch(status) {
      case 'COMPLETED': return 'badge-success';
      case 'SENT': return 'badge-warning';
      case 'PENDING': return 'badge-secondary';
      case 'EXPIRED': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  showToast(type: 'success' | 'error' | 'warning', title: string, message: string) {
    this.toastType = type;
    this.toastMessage = `${title}: ${message}`;
    this.showToastFlag = true;
    setTimeout(() => {
      this.showToastFlag = false;
    }, 4000);
  }

  closeToast() {
    this.showToastFlag = false;
  }

  getCompanyName(application: JobApplication): string {
    if (application.clientId) {
      const client = this.clients.find(c => c.id === application.clientId);
      if (client) return client.name;
    }
    return 'Company';
  }
  
  getClientFeedback(stageNotes: string): string {
    if (!stageNotes) return '';
    const clientActions = stageNotes.split('\n').filter(line => line.includes('CLIENT ACTION'));
    return clientActions.join('\n\n');
  }

  respondToFeedback(): void {
    if (!this.selectedApplication) return;
    this.clientFeedbackText = this.getClientFeedback(this.selectedApplication.stageNotes || '');
    if (!this.clientFeedbackText) {
      this.showToast('warning', 'No Feedback', 'No client feedback found to respond to.');
      return;
    }
    this.showFeedbackResponseModal = true;
  }

  closeFeedbackResponseModal(): void {
    this.showFeedbackResponseModal = false;
    this.clientFeedbackText = '';
  }

  onFeedbackResponseSubmitted(): void {
    this.showFeedbackResponseModal = false;
    this.showToast('success', 'Response Sent', 'Your response has been sent to the client.');
    if (this.selectedApplication) {
      this.loadTimeline(this.selectedApplication.id);
    }
  }

  scheduleClientInterview() {
    if (!this.selectedApplication) return;
    
    this.pendingStatusChange = {
      app: { originalApp: this.selectedApplication },
      status: 'CLIENT_INTERVIEW'
    };
    this.interviewType = 'CLIENT_INTERVIEW';
    this.interviewDateTime = '';
    this.meetingLink = '';
    this.duration = 60;
    this.location = '';
    this.interviewerName = '';
    this.interviewerEmail = '';
    this.notes = '';
    this.closeStatusModal();
    this.showScheduleModal = true;
  }
}
