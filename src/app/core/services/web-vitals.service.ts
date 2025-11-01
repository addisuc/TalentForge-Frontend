import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebVitalsService {

  initializeWebVitals(): void {
    if (!environment.production) return;

    // Load web-vitals library dynamically
    this.loadWebVitalsLibrary().then(() => {
      this.measureWebVitals();
    });
  }

  private loadWebVitalsLibrary(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).webVitals) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  private measureWebVitals(): void {
    const webVitals = (window as any).webVitals;
    if (!webVitals) return;

    // Largest Contentful Paint (LCP) - Target: < 2.5s
    webVitals.onLCP((metric: any) => {
      this.sendToAnalytics('LCP', metric.value);
    });

    // First Input Delay (FID) - Target: < 100ms
    webVitals.onFID((metric: any) => {
      this.sendToAnalytics('FID', metric.value);
    });

    // Cumulative Layout Shift (CLS) - Target: < 0.1
    webVitals.onCLS((metric: any) => {
      this.sendToAnalytics('CLS', metric.value);
    });

    // First Contentful Paint (FCP) - Target: < 1.8s
    webVitals.onFCP((metric: any) => {
      this.sendToAnalytics('FCP', metric.value);
    });

    // Time to First Byte (TTFB) - Target: < 600ms
    webVitals.onTTFB((metric: any) => {
      this.sendToAnalytics('TTFB', metric.value);
    });
  }

  private sendToAnalytics(metricName: string, value: number): void {
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metricName, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true
      });
    }

    // Log in development
    if (!environment.production) {
      console.log(`[Web Vitals] ${metricName}:`, value);
    }

    // Check against thresholds
    this.checkThresholds(metricName, value);
  }

  private checkThresholds(metricName: string, value: number): void {
    const thresholds: { [key: string]: { good: number; poor: number } } = {
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      TTFB: { good: 600, poor: 1500 }
    };

    const threshold = thresholds[metricName];
    if (!threshold) return;

    let rating = 'good';
    if (value > threshold.poor) {
      rating = 'poor';
    } else if (value > threshold.good) {
      rating = 'needs-improvement';
    }

    if (!environment.production) {
      console.log(`[Web Vitals] ${metricName} rating: ${rating}`);
    }
  }
}
