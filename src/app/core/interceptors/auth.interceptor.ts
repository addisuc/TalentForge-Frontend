import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
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
      '/api/clients/register'
    ];

    const isPublicEndpoint = publicEndpoints.some(endpoint => req.url.includes(endpoint));
    
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
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }
    
    return next.handle(req);
  }
}