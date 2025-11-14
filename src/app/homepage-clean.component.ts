import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="homepage">
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <svg class="logo-icon" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g class="logo-t">
                <path d="M6 8 L26 8" stroke="#0066ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M16 8 L16 36" stroke="#0066ff" stroke-width="4.5" stroke-linecap="round"/>
              </g>
              <g class="logo-forge">
                <circle cx="32" cy="22" r="8" stroke="url(#logo-gradient)" stroke-width="3.5" fill="none"/>
                <circle cx="32" cy="22" r="3" fill="url(#logo-gradient)"/>
                <circle cx="32" cy="14" r="1.5" fill="#00d4ff" opacity="0.8"/>
                <circle cx="32" cy="30" r="1.5" fill="#00d4ff" opacity="0.8"/>
                <circle cx="24" cy="22" r="1.5" fill="#0066ff" opacity="0.8"/>
                <circle cx="40" cy="22" r="1.5" fill="#00d4ff" opacity="0.8"/>
              </g>
              <g class="logo-f">
                <path d="M48 8 L48 36" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M48 8 L62 8" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M48 20 L58 20" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
              </g>
              <path d="M16 22 L24 22" stroke="#0066ff" stroke-width="2" stroke-linecap="round" opacity="0.4" stroke-dasharray="2 2"/>
              <path d="M40 22 L48 22" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.4" stroke-dasharray="2 2"/>
              <defs>
                <linearGradient id="logo-gradient" x1="24" y1="14" x2="40" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#0066ff"/>
                  <stop offset="50%" stop-color="#0088ff"/>
                  <stop offset="100%" stop-color="#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
            <span>TalentForge</span>
          </div>
          <div class="nav-actions">
            <div class="nav-links">
              <a routerLink="/client-login" class="nav-link client-portal-link">
                <span class="link-icon">🏢</span>
                <span>Client Portal</span>
              </a>
              <a routerLink="/auth/login" class="nav-link sign-in-link">
                <span class="link-icon">🔐</span>
                <span>Sign In</span>
              </a>
            </div>
            <button class="btn-nav" routerLink="/auth/register">
              <span>Get Started Free</span>
              <span class="btn-icon">→</span>
            </button>
          </div>
        </div>
      </nav>
      <!-- Rest of homepage content remains the same -->
    </div>
  `,
  styles: [`
    .nav-link {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #475569;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9375rem;
      padding: 10px 16px;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .nav-link:hover {
      color: #0066ff;
      background: rgba(0, 102, 255, 0.08);
    }
    .link-icon {
      font-size: 1rem;
    }
  `]
})
export class HomepageComponent {
  // Component data remains the same
}