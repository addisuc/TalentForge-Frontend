import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService, Notification } from '../../core/services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-container">
      <div *ngFor="let notification of visibleNotifications; trackBy: trackByTimestamp" 
           class="notification-toast" 
           [class]="'toast-' + getNotificationType(notification.type)"
           [@slideIn]>
        <div class="toast-content">
          <div class="toast-icon">{{ getNotificationIcon(notification.type) }}</div>
          <div class="toast-text">
            <div class="toast-title">{{ notification.title }}</div>
            <div class="toast-message">{{ notification.message }}</div>
          </div>
          <button class="toast-close" (click)="dismissNotification(notification)">×</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 400px;
    }
    .notification-toast {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 12px;
      border-left: 4px solid #0066ff;
      animation: slideIn 0.3s ease-out;
    }
    .toast-success { border-left-color: #10b981; }
    .toast-error { border-left-color: #ef4444; }
    .toast-warning { border-left-color: #f59e0b; }
    .toast-info { border-left-color: #3b82f6; }
    .toast-content {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      gap: 12px;
    }
    .toast-icon {
      font-size: 20px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .toast-text {
      flex: 1;
      min-width: 0;
    }
    .toast-title {
      font-weight: 600;
      color: #0f172a;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .toast-message {
      color: #64748b;
      font-size: 13px;
      line-height: 1.4;
    }
    .toast-close {
      background: none;
      border: none;
      font-size: 20px;
      color: #94a3b8;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    .toast-close:hover {
      color: #64748b;
    }
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class NotificationToastComponent implements OnInit, OnDestroy {
  visibleNotifications: Notification[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.subscription.add(
      this.webSocketService.getNewNotification().subscribe(notification => {
        if (notification) {
          this.showNotification(notification);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private showNotification(notification: Notification) {
    this.visibleNotifications.unshift(notification);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      this.dismissNotification(notification);
    }, 5000);
  }

  dismissNotification(notification: Notification) {
    const index = this.visibleNotifications.findIndex(n => n.timestamp === notification.timestamp);
    if (index > -1) {
      this.visibleNotifications.splice(index, 1);
    }
  }

  getNotificationType(type: string): string {
    switch (type) {
      case 'APPLICATION_STATUS_UPDATE': return 'info';
      case 'INTERVIEW_SCHEDULED': return 'success';
      case 'APPLICATION_REJECTED': return 'error';
      case 'APPLICATION_WITHDRAWN': return 'warning';
      default: return 'info';
    }
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'APPLICATION_STATUS_UPDATE': return '📋';
      case 'INTERVIEW_SCHEDULED': return '📅';
      case 'APPLICATION_REJECTED': return '❌';
      case 'APPLICATION_WITHDRAWN': return '⚠️';
      default: return 'ℹ️';
    }
  }

  trackByTimestamp(index: number, notification: Notification): number {
    return notification.timestamp;
  }
}