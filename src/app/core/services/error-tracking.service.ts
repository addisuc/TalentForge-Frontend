import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorTrackingService implements ErrorHandler {
  
  handleError(error: Error): void {
    // Log to console in development
    if (!environment.production) {
      console.error('Error caught by ErrorHandler:', error);
    }

    // Send to error tracking service in production
    if (environment.production && (window as any).Sentry) {
      (window as any).Sentry.captureException(error);
    }

    // Log critical errors
    this.logError(error);
  }

  private logError(error: Error): void {
    const errorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    // Store in localStorage for debugging (last 10 errors)
    try {
      const errors = JSON.parse(localStorage.getItem('error_log') || '[]');
      errors.unshift(errorLog);
      localStorage.setItem('error_log', JSON.stringify(errors.slice(0, 10)));
    } catch (e) {
      console.error('Failed to log error:', e);
    }
  }

  // Track custom events
  trackEvent(eventName: string, data?: any): void {
    if (environment.production && (window as any).Sentry) {
      (window as any).Sentry.captureMessage(eventName, {
        level: 'info',
        extra: data
      });
    }
  }

  // Set user context
  setUser(userId: string, email?: string): void {
    if (environment.production && (window as any).Sentry) {
      (window as any).Sentry.setUser({ id: userId, email });
    }
  }

  // Clear user context on logout
  clearUser(): void {
    if (environment.production && (window as any).Sentry) {
      (window as any).Sentry.setUser(null);
    }
  }
}
