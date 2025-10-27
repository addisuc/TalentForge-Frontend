import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<Toast>();
  public toasts$ = this.toastSubject.asObservable();
  private idCounter = 0;

  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', duration?: number) {
    const defaultDuration = type === 'success' ? 5000 : type === 'error' ? 8000 : 5000;
    const toast: Toast = {
      id: this.idCounter++,
      message,
      type,
      duration: duration || defaultDuration
    };
    this.toastSubject.next(toast);
  }

  success(message: string, duration?: number) {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    this.show(message, 'error', duration);
  }

  info(message: string, duration?: number) {
    this.show(message, 'info', duration);
  }

  warning(message: string, duration?: number) {
    this.show(message, 'warning', duration);
  }
}
