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

  // Demo tenant ID - in production, this would come from subdomain or selection
  private readonly tenantId = '12d9dfe7-978a-40e5-b191-082e458c1860';

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
      
      console.log('Attempting login with:', loginRequest, 'tenantId:', this.tenantId);
      
      this.clientService.login(loginRequest, this.tenantId).subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
          
          // Decode JWT to get user info
          const tokenPayload = JSON.parse(atob(response.accessToken.split('.')[1]));
          const clientUserId = tokenPayload.sub;
          const email = tokenPayload.email;
          
          // Store token and user info
          localStorage.setItem('clientToken', response.accessToken);
          localStorage.setItem('tenantId', this.tenantId);
          localStorage.setItem('clientUserId', clientUserId);
          localStorage.setItem('clientUser', JSON.stringify({
            id: clientUserId,
            email: email,
            companyName: (response as any).companyName || 'Client Company',
            contactPerson: (response as any).contactPerson || email
          }));
          
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
}