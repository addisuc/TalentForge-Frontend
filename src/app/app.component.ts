import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './core/services/analytics.service';
import { WebVitalsService } from './core/services/web-vitals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'talentforge-app';
  showLayout = false;

  constructor(
    private router: Router,
    private analytics: AnalyticsService,
    private webVitals: WebVitalsService
  ) {
    // Listen to navigation changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.url;
      this.showLayout = !url.includes('/auth') && !url.includes('/home') && !url.includes('/legal') && !url.includes('/client-login') && !url.includes('/client-register') && !url.includes('/client-dashboard') && url !== '/';
    });
  }

  ngOnInit(): void {
    // Initialize monitoring services
    this.webVitals.initializeWebVitals();
  }
}
