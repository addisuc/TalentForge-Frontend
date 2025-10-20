import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="auth-layout">
      <div class="auth-content">
        <div class="auth-branding">
          <div class="logo">⚡ TalentForge</div>
          <h1>Welcome to TalentForge</h1>
          <p>Connect talent with opportunity</p>
        </div>
        <router-outlet></router-outlet>
      </div>
      <footer class="auth-footer">
        <div class="footer-links">
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        <p>&copy; 2024 TalentForge. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .auth-layout { min-height: 100vh; display: flex; flex-direction: column; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .auth-content { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; }
    .auth-branding { text-align: center; margin-bottom: 2rem; color: white; }
    .logo { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
    .auth-branding h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .auth-branding p { font-size: 1.125rem; opacity: 0.9; }
    .auth-footer { background: rgba(0,0,0,0.1); padding: 1.5rem; text-align: center; color: white; }
    .footer-links { display: flex; justify-content: center; gap: 2rem; margin-bottom: 1rem; }
    .footer-links a { color: white; text-decoration: none; font-size: 0.875rem; opacity: 0.8; transition: opacity 0.2s; }
    .footer-links a:hover { opacity: 1; }
    .auth-footer p { font-size: 0.875rem; opacity: 0.7; margin: 0; }
  `]
})
export class AuthLayoutComponent {}
