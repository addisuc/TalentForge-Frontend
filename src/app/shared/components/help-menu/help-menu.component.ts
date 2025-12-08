import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-help-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="helpMenu" aria-label="Help">
      <mat-icon>help_outline</mat-icon>
    </button>
    <mat-menu #helpMenu="matMenu">
      <button mat-menu-item (click)="openUserManual()">
        <mat-icon>menu_book</mat-icon>
        <span>User Manual</span>
      </button>
      <button mat-menu-item (click)="openSupport()">
        <mat-icon>support_agent</mat-icon>
        <span>Contact Support</span>
      </button>
    </mat-menu>
  `,
  styles: []
})
export class HelpMenuComponent {
  constructor(private authService: AuthService) {}

  openUserManual(): void {
    const user = this.authService.getCurrentUser();
    let manualPath = '';

    switch (user?.role) {
      case 'CANDIDATE':
        manualPath = '/assets/docs/candidate-user-manual.md';
        break;
      case 'RECRUITER':
      case 'TENANT_ADMIN':
        manualPath = '/assets/docs/recruiter-user-manual.md';
        break;
      case 'CLIENT':
        manualPath = '/assets/docs/client-user-manual.md';
        break;
      case 'PLATFORM_ADMIN':
      case 'PLATFORM_SUPER_ADMIN':
      case 'BILLING_MANAGER':
        manualPath = '/assets/docs/platform-admin-user-manual.md';
        break;
      default:
        manualPath = '/assets/docs/candidate-user-manual.md';
    }

    window.open(manualPath, '_blank');
  }

  openSupport(): void {
    window.location.href = 'mailto:support@talentforge.com';
  }
}
