import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface NotificationConfig {
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<NotificationConfig>();
  notification$ = this.notificationSubject.asObservable();

  success(message: string, title: string = 'Success'): void {
    this.notificationSubject.next({ title, message, type: 'success' });
  }

  error(message: string, title: string = 'Error'): void {
    this.notificationSubject.next({ title, message, type: 'error' });
  }

  info(message: string, title: string = 'Info'): void {
    this.notificationSubject.next({ title, message, type: 'info' });
  }

  warning(message: string, title: string = 'Warning'): void {
    this.notificationSubject.next({ title, message, type: 'warning' });
  }
}
