import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Auth interceptor called for:', req.url);
    // Skip auth for public endpoints
    const publicEndpoints = [
      '/api/auth/login',
      '/api/auth/register',
      '/api/auth/forgot-password',
      '/api/auth/reset-password',
      '/api/auth/verify-email',
      '/api/auth/resend-verification',
      '/api/auth/invitations',
      '/api/clients/login',
      '/api/clients/register',
      '/api/clients/verify-invitation',
      '/api/clients/register-invited'
    ];

    const isPublicEndpoint = publicEndpoints.some(endpoint => req.url === endpoint || req.url.startsWith(endpoint + '?'));
    console.log('Is public endpoint?', isPublicEndpoint, 'for URL:', req.url);
    
    if (isPublicEndpoint) {
      return next.handle(req);
    }

    // Check for client token first (for client portal)
    const clientToken = localStorage.getItem('clientToken');
    if (clientToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${clientToken}`)
      });
      return next.handle(authReq);
    }

    // Fall back to regular auth token
    const token = this.authService.getToken();
    const localToken = localStorage.getItem('token');
    console.log('Token from authService:', token);
    console.log('Token from localStorage:', localToken);
    if (token) {
      let authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      console.log('Added Authorization header:', authReq.headers.get('Authorization'));
      
      // Add tenant ID header for API calls that need it
      if (req.url.includes('/api/') && !isPublicEndpoint) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const tenantId = payload.tenantId;
          if (tenantId) {
            authReq = authReq.clone({
              headers: authReq.headers.set('X-Tenant-ID', tenantId)
            });
          }
        } catch (e) {
          console.warn('Failed to extract tenant ID from token:', e);
        }
      }
      
      return next.handle(authReq);
    }
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          // Token expired or unauthorized
          const isClientPortal = req.url.includes('/client/');
          
          if (isClientPortal) {
            localStorage.removeItem('clientToken');
            localStorage.removeItem('tenantId');
            localStorage.removeItem('clientUserId');
            localStorage.removeItem('clientUser');
            this.router.navigate(['/client-login']);
          } else {
            this.authService.logout();
            this.router.navigate(['/auth/login']);
          }
          
          // Show warning and auto-logout after 5 seconds
          if (confirm('Your session has expired. Click OK to login again or Cancel to stay (you will be logged out in 5 seconds).')) {
            // User clicked OK - logout immediately
          } else {
            // User clicked Cancel - logout after 5 seconds
            setTimeout(() => {
              if (isClientPortal) {
                this.router.navigate(['/client-login']);
              } else {
                this.router.navigate(['/auth/login']);
              }
            }, 5000);
          }
        }
        return throwError(() => error);
      })
    );
  }
}