import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toasts" 
           class="toast" 
           [class]="'toast-' + toast.type"
           [@slideIn]>
        <span class="icon">{{ getIcon(toast.type) }}</span>
        <span class="message">{{ toast.message }}</span>
        <button class="close" (click)="remove(toast.id)">\u2715</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10001;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 400px;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: slideIn 0.3s ease-out;
      min-width: 300px;
    }
    @keyframes slideIn {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .toast-success {
      background: #d1fae5;
      border-left: 4px solid #10b981;
      color: #065f46;
    }
    .toast-error {
      background: #fee2e2;
      border-left: 4px solid #ef4444;
      color: #991b1b;
    }
    .toast-warning {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      color: #92400e;
    }
    .toast-info {
      background: #dbeafe;
      border-left: 4px solid #0066ff;
      color: #1e40af;
    }
    .icon {
      font-size: 1.25rem;
      flex-shrink: 0;
    }
    .message {
      flex: 1;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .close {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      opacity: 0.6;
      padding: 0;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    .close:hover {
      opacity: 1;
    }
    @media (max-width: 768px) {
      .toast-container {
        left: 20px;
        right: 20px;
        max-width: none;
      }
      .toast {
        min-width: auto;
      }
    }
  `]
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toasts$.subscribe(toast => {
      this.toasts.push(toast);
      setTimeout(() => this.remove(toast.id), toast.duration);
    });
  }

  remove(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  getIcon(type: string): string {
    const icons = {
      success: '\u2705',
      error: '\u274c',
      warning: '\u26a0\ufe0f',
      info: '\u2139\ufe0f'
    };
    return icons[type as keyof typeof icons] || icons.info;
  }
}
