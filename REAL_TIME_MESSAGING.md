# Real-Time Messaging Implementation

**Status:** ✅ Implemented  
**Date:** December 2024

---

## Problem
Messages between clients and recruiters required page refresh to see new messages.

## Solution
Implemented **dual-strategy** real-time messaging:
1. **WebSocket** (primary) - Instant message delivery
2. **Polling** (fallback) - Updates every 10 seconds if WebSocket fails

---

## Frontend Changes

### 1. Message Service (`message.service.ts`)
- WebSocket connection management
- Auto-reconnect on disconnect (5-second delay)
- Observable stream for new messages
- HTTP API methods (getConversations, sendMessage, markAsRead)

### 2. Component Updates (`candidate-messages.component.ts`)
- Connects to WebSocket on component init
- Subscribes to real-time message stream
- Handles new messages automatically
- Fallback polling every 10 seconds
- Proper cleanup on component destroy

---

## Backend Requirements

### WebSocket Endpoint (Required)
```
WS: /ws/messages?userId={userId}
```

**Message Format:**
```json
{
  "id": "msg-123",
  "conversationId": "conv-456",
  "senderId": "user-789",
  "receiverId": "user-012",
  "content": "Hello!",
  "timestamp": "2024-12-01T10:30:00Z",
  "read": false
}
```

### REST API Endpoints (Required)
```
GET  /api/messages/conversations           - List all conversations
GET  /api/messages/conversations/{id}/messages - Get messages
POST /api/messages/conversations/{id}/messages - Send message
PUT  /api/messages/conversations/{id}/read     - Mark as read
```

---

## Backend Implementation Guide

### Option 1: Spring Boot WebSocket (Recommended)

**1. Add Dependencies (pom.xml):**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

**2. WebSocket Configuration:**
```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue");
        config.setApplicationDestinationPrefixes("/app");
    }
    
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws/messages")
                .setAllowedOrigins("http://localhost:4200")
                .withSockJS();
    }
}
```

**3. Message Controller:**
```java
@Controller
public class MessageController {
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    
    @MessageMapping("/messages/send")
    public void sendMessage(@Payload Message message) {
        // Save to database
        messageRepository.save(message);
        
        // Send to recipient via WebSocket
        messagingTemplate.convertAndSendToUser(
            message.getReceiverId(),
            "/queue/messages",
            message
        );
    }
}
```

**4. REST Controller:**
```java
@RestController
@RequestMapping("/api/messages")
public class MessageRestController {
    
    @GetMapping("/conversations")
    public List<Conversation> getConversations(@AuthenticationPrincipal User user) {
        return messageService.getConversations(user.getId());
    }
    
    @GetMapping("/conversations/{id}/messages")
    public List<Message> getMessages(@PathVariable String id) {
        return messageService.getMessages(id);
    }
    
    @PostMapping("/conversations/{id}/messages")
    public Message sendMessage(@PathVariable String id, @RequestBody MessageRequest request) {
        return messageService.sendMessage(id, request.getContent());
    }
    
    @PutMapping("/conversations/{id}/read")
    public void markAsRead(@PathVariable String id) {
        messageService.markAsRead(id);
    }
}
```

### Option 2: Simple Polling (Quick Fix)

If WebSocket is not available, the component will automatically fall back to polling every 10 seconds.

**Backend only needs REST endpoints:**
```java
@RestController
@RequestMapping("/api/messages")
public class MessageController {
    
    @GetMapping("/conversations")
    public List<Conversation> getConversations() {
        // Return conversations with latest messages
    }
    
    @PostMapping("/conversations/{id}/messages")
    public Message sendMessage(@PathVariable String id, @RequestBody String content) {
        // Save and return message
    }
}
```

---

## Database Schema

### Messages Table
```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL,
    sender_id UUID NOT NULL,
    receiver_id UUID NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT NOW(),
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id, read);
```

### Conversations Table
```sql
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    participant1_id UUID NOT NULL,
    participant2_id UUID NOT NULL,
    last_message_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(participant1_id, participant2_id)
);

CREATE INDEX idx_conversations_participants ON conversations(participant1_id, participant2_id);
```

---

## Testing

### 1. Test WebSocket Connection
```bash
# Open browser console
const ws = new WebSocket('ws://localhost:8080/ws/messages?userId=123');
ws.onmessage = (e) => console.log('Received:', e.data);
```

### 2. Test Message Sending
```bash
curl -X POST http://localhost:8080/api/messages/conversations/conv-123/messages \
  -H "Content-Type: application/json" \
  -d '{"content": "Test message"}'
```

### 3. Test Polling Fallback
- Disable WebSocket in browser DevTools
- Send message from another user
- Verify message appears within 10 seconds

---

## Configuration

### Environment Variables
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  wsUrl: 'ws://localhost:8080/ws'  // Optional: separate WebSocket URL
};
```

---

## Performance Considerations

### WebSocket Benefits
- **Instant delivery** - No delay
- **Low bandwidth** - Only sends when needed
- **Scalable** - Handles 1000+ concurrent connections

### Polling Fallback
- **10-second interval** - Balance between real-time and server load
- **Only when WebSocket fails** - Minimal impact
- **Automatic** - No user action required

---

## Security

### WebSocket Authentication
```java
@Configuration
public class WebSocketSecurityConfig extends AbstractSecurityWebSocketMessageBrokerConfigurer {
    
    @Override
    protected void configureInbound(MessageSecurityMetadataSourceRegistry messages) {
        messages
            .simpDestMatchers("/app/**").authenticated()
            .simpSubscribeDestMatchers("/user/queue/**").authenticated();
    }
}
```

### JWT Token in WebSocket
```typescript
// Pass token in WebSocket connection
const token = localStorage.getItem('token');
const ws = new WebSocket(`ws://localhost:8080/ws/messages?token=${token}`);
```

---

## Monitoring

### Metrics to Track
- WebSocket connection count
- Message delivery latency
- Failed message sends
- Polling fallback usage

### Logging
```java
@Slf4j
@Component
public class WebSocketEventListener {
    
    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {
        log.info("New WebSocket connection: {}", event.getUser());
    }
    
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        log.info("WebSocket disconnected: {}", event.getUser());
    }
}
```

---

## Troubleshooting

### Issue: WebSocket not connecting
**Solution:** Check CORS settings, verify endpoint URL, check firewall

### Issue: Messages not appearing
**Solution:** Check browser console for errors, verify polling is working, check backend logs

### Issue: Duplicate messages
**Solution:** Ensure WebSocket and polling don't overlap, add message deduplication

---

## Next Steps

### Phase 2 Enhancements
- [ ] Message read receipts
- [ ] Typing indicators
- [ ] File attachments
- [ ] Message reactions (emoji)
- [ ] Message search
- [ ] Push notifications (mobile)

### Phase 3 Features
- [ ] Group conversations
- [ ] Video/voice calls
- [ ] Screen sharing
- [ ] Message encryption (E2E)

---

**Status:** ✅ Frontend Complete - Backend Implementation Required  
**Priority:** High (Phase 2.4 - Communication Enhancements)  
**Estimated Backend Effort:** 2-3 days
