import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApplicationService, JobApplication, ApplicationPage } from '../../core/services/application.service';

@Component({
  selector: 'app-applications-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
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

  cardsPerColumn = 25;
  applications: JobApplication[] = [];
  stages = [
    { name: 'Applied', visibleCount: 25, applications: [] as any[] },
    { name: 'Screening', visibleCount: 25, applications: [] as any[] },
    { name: 'Interview', visibleCount: 25, applications: [] as any[] },
    { name: 'Offer', visibleCount: 25, applications: [] as any[] }
  ];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.loadApplications();
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

  organizeApplicationsByStage() {
    this.stages.forEach(stage => stage.applications = []);
    
    this.applications.forEach(app => {
      const mappedApp = {
        id: app.id,
        name: app.candidateName || 'Unknown Candidate',
        initials: this.getInitials(app.candidateName || 'UC'),
        jobTitle: app.jobTitle || 'Unknown Position',
        email: app.candidateEmail || '',
        phone: '',
        daysAgo: this.getDaysAgo(app.appliedAt),
        skills: []
      };

      const stageMap: { [key: string]: string } = {
        'APPLIED': 'Applied',
        'SCREENING': 'Screening', 
        'INTERVIEW': 'Interview',
        'OFFER': 'Offer'
      };

      const stageName = stageMap[app.status] || 'Applied';
      const stage = this.stages.find(s => s.name === stageName);
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
    console.log('View application:', id);
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
}
