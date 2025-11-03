import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApplicationService, JobApplication, ApplicationPage } from '../../core/services/application.service';
import { InterviewService, InterviewRequest } from '../../core/services/interview.service';

@Component({
  selector: 'app-applications-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DragDropModule],
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

  cardsPerColumn = 25;
  applications: JobApplication[] = [];
  stages = [
    { name: 'Applied', status: 'APPLIED', visibleCount: 25, applications: [] as any[] },
    { name: 'Screening', status: 'SCREENING', visibleCount: 25, applications: [] as any[] },
    { name: 'Interview', status: 'INTERVIEW', visibleCount: 25, applications: [] as any[] },
    { name: 'Offer', status: 'OFFER', visibleCount: 25, applications: [] as any[] },
    { name: 'Hired', status: 'HIRED', visibleCount: 25, applications: [] as any[] },
    { name: 'Rejected', status: 'REJECTED', visibleCount: 25, applications: [] as any[] }
  ];

  statusOptions = [
    { value: 'APPLIED', label: 'Applied' },
    { value: 'SCREENING', label: 'Screening' },
    { value: 'PHONE_INTERVIEW', label: 'Phone Interview' },
    { value: 'TECHNICAL_INTERVIEW', label: 'Technical Interview' },
    { value: 'FINAL_INTERVIEW', label: 'Final Interview' },
    { value: 'REFERENCE_CHECK', label: 'Reference Check' },
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
    this.http.get<any[]>('/api/clients').subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err: any) => {
        console.error('Failed to load clients:', err);
      }
    });
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
        originalApp: app
      };

      // Map interview statuses to INTERVIEW stage
      let stageStatus = app.status;
      if (['PHONE_INTERVIEW', 'TECHNICAL_INTERVIEW', 'FINAL_INTERVIEW'].includes(app.status)) {
        stageStatus = 'INTERVIEW';
      } else if (['OFFER_PENDING', 'OFFER_ACCEPTED', 'OFFER_DECLINED'].includes(app.status)) {
        stageStatus = 'OFFER';
      }

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
      this.showStatusModal = true;
    }
  }

  updateApplicationStatus(application: any) {
    this.selectedApplication = application.originalApp || application;
    this.statusNotes = '';
    this.showStatusModal = true;
  }

  closeStatusModal() {
    this.showStatusModal = false;
    this.selectedApplication = null;
    this.statusNotes = '';
  }

  handleStatusChange(newStatus: string) {
    const isInterviewStatus = ['PHONE_INTERVIEW', 'TECHNICAL_INTERVIEW', 'FINAL_INTERVIEW'].includes(newStatus);
    
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
    } else {
      this.submitStatusUpdate(newStatus);
    }
  }

  submitStatusUpdate(newStatus: string) {
    if (!this.selectedApplication) return;

    this.updatingStatus = true;
    this.applicationService.updateApplicationStatus(this.selectedApplication.id, newStatus).subscribe({
      next: (updatedApp) => {
        const index = this.applications.findIndex(app => app.id === this.selectedApplication!.id);
        if (index !== -1) {
          this.applications[index] = updatedApp;
        }
        this.organizeApplicationsByStage();
        this.closeStatusModal();
        this.updatingStatus = false;
      },
      error: (err) => {
        console.error('Error updating status:', err);
        alert('Failed to update application status');
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
      alert('Please select interview date and time');
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
        // Then update application status
        if (this.pendingStatusChange.previousContainer) {
          transferArrayItem(
            this.pendingStatusChange.previousContainer,
            this.pendingStatusChange.currentContainer,
            this.pendingStatusChange.previousIndex,
            this.pendingStatusChange.currentIndex
          );
        }
        
        this.applicationService.updateApplicationStatus(app.originalApp.id, status).subscribe({
          next: (updatedApp) => {
            app.originalApp = updatedApp;
            this.closeScheduleModal();
          },
          error: (err) => {
            console.error('Error updating status:', err);
            if (this.pendingStatusChange.previousContainer) {
              transferArrayItem(
                this.pendingStatusChange.currentContainer,
                this.pendingStatusChange.previousContainer,
                this.pendingStatusChange.currentIndex,
                this.pendingStatusChange.previousIndex
              );
            }
            this.closeScheduleModal();
          }
        });
      },
      error: (err) => {
        console.error('Error creating interview:', err);
        alert('Failed to schedule interview');
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
      const isInterviewStage = targetStage.status === 'INTERVIEW';
      
      if (isInterviewStage) {
        // Revert the drag and show schedule modal
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
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        
        this.applicationService.updateApplicationStatus(app.originalApp.id, newStatus).subscribe({
          next: (updatedApp) => {
            app.originalApp = updatedApp;
          },
          error: (err) => {
            console.error('Error updating status:', err);
            transferArrayItem(
              event.container.data,
              event.previousContainer.data,
              event.currentIndex,
              event.previousIndex
            );
          }
        });
      }
    }
  }

  getStatusForStage(stageStatus: string): string {
    const statusMap: any = {
      'APPLIED': 'APPLIED',
      'SCREENING': 'SCREENING',
      'INTERVIEW': 'PHONE_INTERVIEW',
      'OFFER': 'OFFER_PENDING',
      'HIRED': 'HIRED',
      'REJECTED': 'REJECTED'
    };
    return statusMap[stageStatus] || stageStatus;
  }
}
