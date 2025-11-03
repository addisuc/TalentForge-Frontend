import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../core/services/client.service';
import { EmailService } from '../../core/services/email.service';
import { FormsModule } from '@angular/forms';

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
  recentHires: any[] = [];
  showEmailModal = false;
  emailSubject = '';
  emailBody = '';
  sending = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clientId = +params['id'];
      this.loadClient(clientId);
    });
  }

  loadClient(id: number) {
    this.clientService.getClientById(id).subscribe({
      next: (data) => {
        this.client = data;
        if (this.client) {
          this.stats = [
            { label: 'Active Jobs', value: this.client.activeJobs || 0, icon: '💼' },
            { label: 'Total Hires', value: this.client.totalHires || 0, icon: '✅' },
            { label: 'In Pipeline', value: (this.client.activeJobs || 0) * 5, icon: '⏳' },
            { label: 'Success Rate', value: '87%', icon: '📊' }
          ];
          this.jobs = this.generateMockJobs();
          this.recentHires = this.generateMockHires();
        }
      },
      error: (err) => console.error('Error loading client:', err)
    });
  }

  generateMockJobs() {
    return [
      { id: 1, title: 'Senior Full Stack Developer', status: 'Active', applicants: 23, posted: '2024-01-15' },
      { id: 2, title: 'DevOps Engineer', status: 'Active', applicants: 18, posted: '2024-01-20' },
      { id: 3, title: 'Product Manager', status: 'Active', applicants: 31, posted: '2024-01-22' },
      { id: 4, title: 'UX Designer', status: 'Active', applicants: 15, posted: '2024-01-25' }
    ];
  }

  generateMockHires() {
    return [
      { name: 'John Smith', position: 'Backend Developer', date: '2024-01-10', avatar: '👨💻' },
      { name: 'Emma Wilson', position: 'Frontend Developer', date: '2024-01-05', avatar: '👩💻' },
      { name: 'Michael Brown', position: 'QA Engineer', date: '2023-12-20', avatar: '👨🔬' }
    ];
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
        this.showNotification('Failed to send email', 'error');
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

  createJob() {
    this.router.navigate(['/jobs/create'], { queryParams: { clientId: this.client.id } });
  }
}


