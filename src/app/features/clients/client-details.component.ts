import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../core/services/client.service';
import { EmailService } from '../../core/services/email.service';
import { JobService } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
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
  emailSubject = '';
  emailBody = '';
  noteText = '';
  sending = false;
  loading = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private emailService: EmailService,
    private jobService: JobService,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clientId = +params['id'];
      if (clientId) {
        this.loadClient(clientId);
      }
    });
  }

  loadClient(id: number) {
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
        
        // Load applications for all jobs
        if (this.jobs.length > 0) {
          const applicationCalls = this.jobs.map(job => 
            this.applicationService.getApplicationsByJob(job.id, 0, 100)
          );
          
          forkJoin(applicationCalls).subscribe({
            next: (results) => {
              this.applications = results.flatMap(r => r.content);
              this.calculateStats();
              this.loading = false;
            },
            error: (err) => {
              console.error('Error loading applications:', err);
              this.calculateStats();
              this.loading = false;
            }
          });
        } else {
          this.calculateStats();
          this.loading = false;
        }
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
}


