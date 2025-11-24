import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService, Conversation } from '../../core/services/message.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-candidate-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="candidate-messages-page">
      <div class="page-header">
        <h1>Messages</h1>
        <p>Communicate with recruiters and hiring managers</p>
      </div>
      <div class="messages-container">
        <div class="conversations-list">
          <div class="search-box">
            <input type="text" placeholder="Search messages..." class="search-input">
          </div>
          <div *ngFor="let conv of conversations" 
               [class.active]="selectedConversation?.id === conv.id"
               (click)="selectConversation(conv)"
               class="conversation-item">
            <div class="conv-avatar">{{ conv.initials }}</div>
            <div class="conv-details">
              <div class="conv-header">
                <strong>{{ conv.name }}</strong>
                <span class="conv-time">{{ conv.lastMessageTime }}</span>
              </div>
              <div class="conv-preview">{{ conv.lastMessage }}</div>
            </div>
            <span *ngIf="conv.unread" class="unread-badge">{{ conv.unread }}</span>
          </div>
        </div>
        <div class="message-thread">
          <div *ngIf="selectedConversation" class="thread-header">
            <div class="thread-avatar">{{ selectedConversation.initials }}</div>
            <div>
              <h3>{{ selectedConversation.name }}</h3>
              <p>{{ selectedConversation.company }}</p>
            </div>
          </div>
          <div *ngIf="selectedConversation" class="messages-list">
            <div *ngFor="let msg of selectedConversation.messages" 
                 [class.sent]="msg.sent"
                 class="message-bubble">
              <div class="message-content">{{ msg.content }}</div>
              <div class="message-time">{{ msg.time }}</div>
            </div>
          </div>
          <div *ngIf="selectedConversation" class="message-input-container">
            <input type="text" [(ngModel)]="newMessage" placeholder="Type a message..." class="message-input">
            <button (click)="sendMessage()" class="btn-send">Send</button>
          </div>
          <div *ngIf="!selectedConversation" class="empty-state">
            <p>Select a conversation to start messaging</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .candidate-messages-page { padding: 2rem; height: calc(100vh - 140px); display: flex; flex-direction: column; }
    .page-header { margin-bottom: 1.5rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .page-header p { color: #64748b; }
    .messages-container { display: grid; grid-template-columns: 350px 1fr; gap: 1.5rem; flex: 1; overflow: hidden; }
    .conversations-list { background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow-y: auto; }
    .search-box { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    .search-input { width: 100%; padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .conversation-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid #f1f5f9; cursor: pointer; }
    .conversation-item:hover { background: #f8fafc; }
    .conversation-item.active { background: #eff6ff; }
    .conv-avatar { width: 40px; height: 40px; border-radius: 50%; background: #e0e7ff; color: #3730a3; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem; flex-shrink: 0; }
    .conv-details { flex: 1; min-width: 0; }
    .conv-header { display: flex; justify-content: space-between; margin-bottom: 0.25rem; }
    .conv-header strong { font-size: 0.875rem; color: #0f172a; }
    .conv-time { font-size: 0.75rem; color: #94a3b8; }
    .conv-preview { font-size: 0.875rem; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .unread-badge { background: #0066ff; color: white; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 12px; }
    .message-thread { background: white; border: 1px solid #e2e8f0; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; }
    .thread-header { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; }
    .thread-avatar { width: 48px; height: 48px; border-radius: 50%; background: #e0e7ff; color: #3730a3; display: flex; align-items: center; justify-content: center; font-weight: 600; }
    .thread-header h3 { font-size: 1rem; font-weight: 600; color: #0f172a; margin: 0; }
    .thread-header p { font-size: 0.875rem; color: #64748b; margin: 0; }
    .messages-list { flex: 1; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .message-bubble { max-width: 70%; }
    .message-bubble.sent { align-self: flex-end; }
    .message-content { background: #f1f5f9; padding: 12px 16px; border-radius: 12px; font-size: 0.875rem; color: #0f172a; }
    .message-bubble.sent .message-content { background: #0066ff; color: white; }
    .message-time { font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem; padding: 0 4px; }
    .message-input-container { display: flex; gap: 1rem; padding: 1.5rem; border-top: 1px solid #e2e8f0; }
    .message-input { flex: 1; padding: 10px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; }
    .btn-send { background: #0066ff; color: white; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .empty-state { flex: 1; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
  `]
})
export class CandidateMessagesComponent implements OnInit, OnDestroy {
  newMessage = '';
  selectedConversation: any = null;
  private pollingInterval: any;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  conversations: any[] = [];

  selectConversation(conv: any) {
    this.selectedConversation = conv;
    conv.unread = 0;
    
    // Mark messages as read
    this.messageService.markAsRead(conv.id).subscribe();
  }

  ngOnInit() {
    console.log('[INIT] Component initialized');
    
    // Load conversations immediately
    this.loadConversations();

    // Connect to WebSocket
    const user = this.authService.getCurrentUserValue();
    if (user?.id) {
      this.messageService.connectWebSocket(user.id);
      
      // Subscribe to new messages
      this.messageService.onNewMessage().subscribe(message => {
        console.log('[INIT] New message via WebSocket:', message);
        this.loadConversations();
      });
    }

    // Backup polling every 5 seconds
    this.pollingInterval = setInterval(() => {
      this.loadConversations();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
    this.messageService.disconnectWebSocket();
  }

  loadConversations() {
    const user = this.authService.getCurrentUserValue();
    if (!user?.id) {
      console.log('[LOAD] No user ID found');
      return;
    }
    
    console.log('[LOAD] Fetching messages for user:', user.id);
    this.messageService.getUserMessages(user.id).subscribe({
      next: (messages) => {
        console.log('[LOAD] Received messages:', messages);
        this.conversations = messages;
      },
      error: (err) => {
        console.error('[LOAD] API Error:', err);
      }
    });
  }

  handleNewMessage(message: any) {
    this.loadConversations();
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedConversation) {
      const content = this.newMessage;
      this.newMessage = '';
      
      const user = this.authService.getCurrentUserValue();
      if (!user?.id || !user?.tenantId) {
        console.error('User not logged in');
        return;
      }
      
      console.log('Sending message:', {
        senderId: user.id,
        recipientId: this.selectedConversation.id,
        content
      });
      
      // Send via API
      this.messageService.sendMessage(
        this.selectedConversation.id,
        content,
        user.id,
        user.tenantId
      ).subscribe({
        next: (message) => {
          console.log('Message sent successfully:', message);
          this.loadConversations();
        },
        error: (err) => {
          console.error('Failed to send message:', err);
        }
      });
    }
  }
}
