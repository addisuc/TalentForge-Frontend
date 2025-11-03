import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SettingsService } from '../../core/services/settings.service';
import { AuthService } from '../../core/auth/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { UserSettings, OrganizationSettings } from '../../core/models/settings.model';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  activeTab: 'profile' | 'notifications' | 'security' | 'organization' = 'profile';
  userSettingsForm!: FormGroup;
  organizationForm!: FormGroup;
  passwordForm!: FormGroup;
  loading = false;
  saveMessage = '';
  currentUser: any;
  isAdmin = false;

  timezones = [
    'UTC', 'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Europe/London', 'Europe/Paris', 'Asia/Tokyo', 'Asia/Shanghai', 'Australia/Sydney'
  ];

  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUserValue();
    this.isAdmin = this.currentUser?.role === 'TENANT_ADMIN' || this.currentUser?.role === 'PLATFORM_ADMIN';
    
    this.initForms();
    this.loadSettings();
  }

  initForms(): void {
    this.userSettingsForm = this.fb.group({
      emailNotifications: [true],
      pushNotifications: [true],
      smsNotifications: [false],
      language: ['en'],
      timezone: ['UTC'],
      theme: ['light'],
      dateFormat: ['MM/DD/YYYY'],
      timeFormat: ['12h']
    });

    this.organizationForm = this.fb.group({
      companyName: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPhone: [''],
      companyWebsite: [''],
      companyAddress: [''],
      industry: [''],
      companySize: [''],
      allowPublicJobPostings: [true],
      requireApprovalForJobPostings: [false],
      autoArchiveJobsAfterDays: [90]
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  loadSettings(): void {
    this.settingsService.getUserSettings().subscribe({
      next: (settings) => {
        this.userSettingsForm.patchValue(settings);
        if (settings.theme) {
          this.applyTheme(settings.theme);
        }
      },
      error: () => {}
    });

    if (this.isAdmin) {
      this.settingsService.getOrganizationSettings().subscribe({
        next: (settings) => this.organizationForm.patchValue(settings),
        error: () => {}
      });
    }
  }

  saveUserSettings(): void {
    if (this.userSettingsForm.valid) {
      this.loading = true;
      const settings = this.userSettingsForm.value;
      this.settingsService.updateUserSettings(settings).subscribe({
        next: () => {
          this.applyTheme(settings.theme);
          this.saveMessage = 'Settings saved successfully';
          this.loading = false;
          setTimeout(() => this.saveMessage = '', 3000);
        },
        error: () => {
          this.saveMessage = 'Failed to save settings';
          this.loading = false;
        }
      });
    }
  }

  applyTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

  saveOrganizationSettings(): void {
    if (this.organizationForm.valid) {
      this.loading = true;
      this.settingsService.updateOrganizationSettings(this.organizationForm.value).subscribe({
        next: () => {
          this.saveMessage = 'Organization settings saved successfully';
          this.loading = false;
          setTimeout(() => this.saveMessage = '', 3000);
        },
        error: () => {
          this.saveMessage = 'Failed to save organization settings';
          this.loading = false;
        }
      });
    }
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
      
      if (newPassword !== confirmPassword) {
        this.saveMessage = 'Passwords do not match';
        return;
      }

      this.loading = true;
      this.settingsService.changePassword(currentPassword, newPassword).subscribe({
        next: () => {
          this.saveMessage = 'Password changed successfully';
          this.loading = false;
          this.passwordForm.reset();
          setTimeout(() => this.saveMessage = '', 3000);
        },
        error: () => {
          this.saveMessage = 'Failed to change password';
          this.loading = false;
        }
      });
    }
  }

  setActiveTab(tab: 'profile' | 'notifications' | 'security' | 'organization'): void {
    this.activeTab = tab;
    this.saveMessage = '';
  }
}
