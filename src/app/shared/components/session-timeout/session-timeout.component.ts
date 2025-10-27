import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-session-timeout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="session-warning-overlay" *ngIf="showWarning">
      <div class="session-warning-modal">
        <div class="warning-icon">⏰</div>
        <h2>Session Expiring Soon</h2>
        <p>Your session will expire in:</p>
        <div class="countdown">{{ remainingTime }}</div>
        <p class="hint">You will be automatically logged out for security reasons.</p>
        <div class="actions">
          <button (click)="extendSession()" class="btn-primary">Stay Logged In</button>
          <button (click)="logout()" class="btn-secondary">Logout Now</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .session-warning-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .session-warning-modal {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      max-width: 400px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .warning-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    p {
      color: #64748b;
      margin-bottom: 1rem;
    }

    .countdown {
      font-size: 3rem;
      font-weight: 700;
      color: #ef4444;
      font-family: monospace;
      margin: 1rem 0;
    }

    .hint {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      gap: 1rem;
    }

    .btn-primary, .btn-secondary {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-primary {
      background: #0066ff;
      color: white;
    }

    .btn-primary:hover {
      background: #0052cc;
    }

    .btn-secondary {
      background: white;
      color: #64748b;
      border: 1px solid #e2e8f0;
    }

    .btn-secondary:hover {
      background: #f8fafc;
    }

    @media (max-width: 480px) {
      .session-warning-modal {
        padding: 1.5rem;
      }

      .warning-icon {
        font-size: 3rem;
      }

      .countdown {
        font-size: 2rem;
      }

      .actions {
        flex-direction: column;
      }
    }
  `]
})
export class SessionTimeoutComponent implements OnInit, OnDestroy {
  showWarning = false;
  remainingTime = '';
  private warningTime = 5 * 60 * 1000; // Show warning 5 minutes before expiry
  private sessionDuration = 30 * 60 * 1000; // 30 minutes default
  private extendedSessionDuration = 30 * 24 * 60 * 60 * 1000; // 30 days for remember me
  private lastActivityTime = Date.now();
  private checkInterval?: Subscription;
  private countdownInterval?: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.checkRememberMe();
    this.startActivityTracking();
    this.startSessionCheck();
  }

  private checkRememberMe() {
    const rememberMe = localStorage.getItem('rememberMe');
    const expiry = localStorage.getItem('rememberMeExpiry');
    
    if (rememberMe === 'true' && expiry) {
      const expiryTime = parseInt(expiry);
      if (Date.now() < expiryTime) {
        this.sessionDuration = this.extendedSessionDuration;
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('rememberMeExpiry');
      }
    }
  }

  ngOnDestroy() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
  }

  private startActivityTracking() {
    ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, () => this.updateActivity(), true);
    });
  }

  private updateActivity() {
    if (!this.showWarning) {
      this.lastActivityTime = Date.now();
    }
  }

  private startSessionCheck() {
    this.checkInterval = interval(1000).subscribe(() => {
      const elapsed = Date.now() - this.lastActivityTime;
      const remaining = this.sessionDuration - elapsed;

      if (remaining <= 0) {
        this.forceLogout();
      } else if (remaining <= this.warningTime && !this.showWarning) {
        this.showWarning = true;
        this.startCountdown();
      }
    });
  }

  private startCountdown() {
    this.countdownInterval = interval(1000).subscribe(() => {
      const elapsed = Date.now() - this.lastActivityTime;
      const remaining = this.sessionDuration - elapsed;

      if (remaining <= 0) {
        this.forceLogout();
      } else {
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        this.remainingTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    });
  }

  extendSession() {
    this.lastActivityTime = Date.now();
    this.showWarning = false;
    this.countdownInterval?.unsubscribe();
  }

  logout() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  private forceLogout() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
    this.authService.logout();
    this.router.navigate(['/auth/login'], { 
      queryParams: { reason: 'session-expired' } 
    });
  }
}
