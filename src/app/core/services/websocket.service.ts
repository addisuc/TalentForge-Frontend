import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

export interface Notification {
  type: string;
  title: string;
  message: string;
  timestamp: number;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: CompatClient | null = null;
  private connected = false;
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  private newNotificationSubject = new BehaviorSubject<Notification | null>(null);

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.connect();
      } else {
        this.disconnect();
      }
    });
  }

  connect(): void {
    if (this.connected) return;

    const socket = new SockJS('/ws');
    this.stompClient = Stomp.over(socket);
    
    this.stompClient.connect({}, 
      (frame: any) => {
        console.log('Connected to WebSocket:', frame);
        this.connected = true;
        this.subscribeToNotifications();
      },
      (error: any) => {
        console.error('WebSocket connection error:', error);
        this.connected = false;
        // Retry connection after 5 seconds
        setTimeout(() => this.connect(), 5000);
      }
    );
  }

  private subscribeToNotifications(): void {
    if (!this.stompClient || !this.connected) return;

    this.stompClient.subscribe('/user/queue/notifications', (message) => {
      const notification: Notification = JSON.parse(message.body);
      console.log('Received notification:', notification);
      
      // Add to notifications list
      const currentNotifications = this.notificationsSubject.value;
      this.notificationsSubject.next([notification, ...currentNotifications]);
      
      // Emit new notification
      this.newNotificationSubject.next(notification);
      
      // Show browser notification if permission granted
      this.showBrowserNotification(notification);
    });
  }

  private showBrowserNotification(notification: Notification): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(notification.title, {
        body: notification.message,
        icon: '/favicon.ico'
      });
    }
  }

  disconnect(): void {
    if (this.stompClient && this.connected) {
      this.stompClient.disconnect();
      this.connected = false;
      console.log('Disconnected from WebSocket');
    }
  }

  getNotifications(): Observable<Notification[]> {
    return this.notificationsSubject.asObservable();
  }

  getNewNotification(): Observable<Notification | null> {
    return this.newNotificationSubject.asObservable();
  }

  requestNotificationPermission(): void {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  clearNotifications(): void {
    this.notificationsSubject.next([]);
  }

  isConnected(): boolean {
    return this.connected;
  }
}