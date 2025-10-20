import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  currentUser = {
    tenantName: 'Acme Recruiting',
    name: 'John Doe',
    initials: 'JD',
    role:'TENANT_ADMIN'//'CANDIDATE' //'CLIENT'//'RECRUITER','RECRUITING_MANAGER','TENANT_ADMIN'// PLATFORM_ADMIN,
  };

  get isPlatformAdmin() {
    return this.currentUser.role === 'PLATFORM_ADMIN';
  }

  get isRecruiter() {
    return ['RECRUITER', 'RECRUITING_MANAGER', 'TENANT_ADMIN'].includes(this.currentUser.role);
  }

  get isClient() {
    return this.currentUser.role === 'CLIENT';
  }

  get isCandidate() {
    return this.currentUser.role === 'CANDIDATE';
  }

  get searchPlaceholder() {
    if (this.isCandidate) return 'Search jobs or companies...';
    if (this.isClient) return 'Search candidates or jobs...';
    if (this.isRecruiter) return 'Search candidates, jobs, or companies...';
    return 'Search...';
  }

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/home']);
  }
}
