import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) {
    this.initializePageTracking();
  }

  private initializePageTracking(): void {
    if (!environment.production) return;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.trackPageView(event.urlAfterRedirects);
    });
  }

  trackPageView(url: string): void {
    if (environment.production && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url
      });
    }
  }

  trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (environment.production && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  // Track user actions
  trackLogin(method: string): void {
    this.trackEvent('Authentication', 'login', method);
  }

  trackRegistration(userType: string): void {
    this.trackEvent('Authentication', 'register', userType);
  }

  trackJobView(jobId: string): void {
    this.trackEvent('Jobs', 'view', jobId);
  }

  trackJobApplication(jobId: string): void {
    this.trackEvent('Jobs', 'apply', jobId);
  }

  trackSearch(searchTerm: string): void {
    this.trackEvent('Search', 'query', searchTerm);
  }

  // Track errors
  trackError(errorMessage: string): void {
    this.trackEvent('Error', 'exception', errorMessage);
  }

  // Track performance
  trackTiming(category: string, variable: string, time: number): void {
    if (environment.production && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: variable,
        value: time,
        event_category: category
      });
    }
  }
}
