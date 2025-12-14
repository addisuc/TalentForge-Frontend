import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';

export interface Message {
  id?: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  sent?: boolean;
  time?: string;
}

export interface Conversation {
  id: string;
  name: string;
  company: string;
  initials: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  messages: Message[];
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = '/api/messages';
  private stompClient?: Client;
  private messageSubject = new Subject<Message>();

  constructor(private http: HttpClient) {}

  // WebSocket connection for real-time messages
  connectWebSocket(userId: string): void {
    console.log('[WS] Connecting for user:', userId);
    
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('/ws') as any,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => console.log('[WS]', str)
    });

    this.stompClient.onConnect = () => {
      console.log('[WS] Connected!');
      
      this.stompClient?.subscribe(`/user/queue/messages`, (message: IMessage) => {
        console.log('[WS] New message received:', message.body);
        const msg = JSON.parse(message.body);
        this.messageSubject.next(msg);
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('[WS] Error:', frame);
    };

    this.stompClient.activate();
  }

  disconnectWebSocket(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }

  // Observable for new messages
  onNewMessage(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

  // Get all conversations
  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(`${this.apiUrl}/conversations`);
  }

  // Get user messages
  getUserMessages(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conversations/${userId}`);
  }

  // Get messages for a conversation
  getMessages(conversationId: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/conversations/${conversationId}/messages`);
  }

  // Send a message
  sendMessage(recipientId: string, content: string, senderId: string, tenantId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send`, {
      senderId,
      recipientId,
      tenantId,
      content
    });
  }

  // Mark messages as read
  markAsRead(conversationId: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/conversations/${conversationId}/read`, {});
  }
}
