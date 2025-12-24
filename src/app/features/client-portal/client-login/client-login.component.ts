import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../core/services/client.service';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-client-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  hidePassword = true;
  showHelp = false;
  errorMessage = '';

  // Get tenant ID from subdomain or URL parameter
  private getTenantId(): string {
    // In production, extract from subdomain: subdomain.talentforge.com
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    
    // For development, check URL parameter or use default
    const urlParams = new URLSearchParams(window.location.search);
    const tenantParam = urlParams.get('tenant');
    
    if (tenantParam) return tenantParam;
    if (subdomain && subdomain !== 'localhost' && subdomain !== 'www') {
      // Map subdomain to tenant ID via API call or lookup
      return subdomain; // This would be resolved to actual tenant ID
    }
    
    // Fallback for development
    return 'e7a0c920-e4c3-4e34-90b3-15ae51f86eb9';
  }

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const loginRequest = this.loginForm.value;
      const tenantId = this.getTenantId();
      
      console.log('Attempting login with:', loginRequest, 'tenantId:', tenantId);
      
      this.clientService.login(loginRequest, tenantId).subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
          
          // Decode JWT to get user info
          const tokenPayload = JSON.parse(atob(response.token.split('.')[1]));
          const clientUserId = tokenPayload.sub;
          const email = tokenPayload.email;
          
          // Store token and user info
          localStorage.setItem('clientToken', response.token);
          localStorage.setItem('tenantId', tenantId);
          localStorage.setItem('clientUserId', clientUserId);
          localStorage.setItem('clientUser', JSON.stringify({
            id: clientUserId,
            email: email,
            companyName: response.clientCompanyName || 'Client Company',
            contactPerson: response.firstName + ' ' + response.lastName || email
          }));
          
          // Store client company name separately
          localStorage.setItem('clientCompanyName', response.companyName || 'Client Company');
          
          // Store tenant name separately for easy access
          localStorage.setItem('tenantName', response.contactPerson || 'Client Portal');
          
          this.isLoading = false;
          
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          
          this.router.navigate(['/client-dashboard']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
          this.isLoading = false;
        }
      });
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Copied to clipboard!', 'Close', {
        duration: 2000,
        panelClass: ['success-snackbar']
      });
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.snackBar.open('Copied to clipboard!', 'Close', {
        duration: 2000,
        panelClass: ['success-snackbar']
      });
    });
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters long';
    }
    return '';
  }

  getClientName(): string {
    const tenantName = localStorage.getItem('tenantName');
    return tenantName || 'Client Portal';
  }
}