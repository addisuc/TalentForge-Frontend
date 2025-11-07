# Client Portal - Complete Implementation Plan

**Priority**: HIGH (Competitive Advantage)  
**Estimated Time**: 2-3 weeks  
**Status**: Ready to implement

---

## 🎯 Business Value

### For Recruiters:
- ✅ 40% reduction in client communication overhead
- ✅ Faster candidate approvals (instant vs 24-48 hours)
- ✅ Premium feature to charge 20-30% more
- ✅ Competitive advantage over basic ATS platforms

### For Clients (Hiring Companies):
- ✅ 24/7 access to their hiring pipeline
- ✅ Real-time candidate reviews
- ✅ Self-service reduces dependency on recruiters
- ✅ Better hiring team collaboration

---

## 📋 Implementation Phases

### Phase 1: Foundation (Week 1)
**Backend:**
- [ ] Add CLIENT role to UserRole enum
- [ ] Update user-service to support CLIENT role
- [ ] Add clientId field to User entity
- [ ] Create client user invitation API
- [ ] Add data isolation filters (clients see only their data)

**Frontend:**
- [ ] Add CLIENT to UserRole enum
- [ ] Update role-based routing
- [ ] Add CLIENT role guard
- [ ] Update navigation service for CLIENT role

### Phase 2: Client User Management (Week 1-2)
**Backend:**
- [ ] POST /api/clients/:id/users/invite - Invite client user
- [ ] GET /api/clients/:id/users - List client users
- [ ] DELETE /api/clients/:id/users/:userId - Remove client user
- [ ] PUT /api/clients/:id/users/:userId/role - Change client user role

**Frontend:**
- [ ] Add "Invite Client User" button in client details page
- [ ] Client user invitation modal
- [ ] List client users in client details
- [ ] Manage client user permissions

### Phase 3: Client Portal Dashboard (Week 2)
**Backend:**
- [ ] GET /api/client/dashboard/metrics - Client-specific metrics
- [ ] GET /api/client/jobs - Jobs for this client only
- [ ] GET /api/client/candidates - Candidates for client's jobs
- [ ] GET /api/client/interviews - Interviews for client's jobs

**Frontend:**
- [ ] Integrate existing client-dashboard with real APIs
- [ ] Replace mock data with backend calls
- [ ] Add loading states
- [ ] Add error handling

### Phase 4: Candidate Review (Week 2-3)
**Backend:**
- [ ] POST /api/client/candidates/:id/approve - Approve candidate
- [ ] POST /api/client/candidates/:id/reject - Reject candidate
- [ ] POST /api/client/candidates/:id/feedback - Add feedback
- [ ] GET /api/client/candidates/:id - View candidate details

**Frontend:**
- [ ] Candidate pipeline view for clients
- [ ] Approve/reject buttons
- [ ] Feedback form
- [ ] Candidate profile view (read-only)

### Phase 5: Interview Management (Week 3)
**Backend:**
- [ ] GET /api/client/interviews - List interviews
- [ ] POST /api/client/interviews/:id/feedback - Submit feedback
- [ ] PUT /api/client/interviews/:id/reschedule - Request reschedule

**Frontend:**
- [ ] Interview calendar view
- [ ] Interview feedback form
- [ ] Reschedule request

### Phase 6: Analytics & Reporting (Week 3)
**Backend:**
- [ ] GET /api/client/analytics/time-to-fill
- [ ] GET /api/client/analytics/offer-acceptance-rate
- [ ] GET /api/client/analytics/source-effectiveness

**Frontend:**
- [ ] Analytics dashboard with charts
- [ ] Export reports (PDF/Excel)

---

## 🏗️ Technical Architecture

### User Hierarchy
```
Tenant (Recruiting Agency)
├── TENANT_ADMIN
├── RECRUITER
└── Clients (Companies)
    └── CLIENT Users (Hiring Managers)
        ├── CLIENT_ADMIN (full access to their company)
        └── CLIENT_USER (limited access)
```

### Data Isolation
```sql
-- All client queries filtered by clientId
WHERE client_id = :currentUserClientId

-- Example: Client can only see their jobs
SELECT * FROM jobs 
WHERE client_id = (SELECT client_id FROM users WHERE id = :currentUserId)
```

### Role-Based Routing
```typescript
// After login, redirect based on role
switch(user.role) {
  case 'PLATFORM_ADMIN': return '/platform-admin';
  case 'TENANT_ADMIN': return '/admin';
  case 'RECRUITER': return '/dashboard';
  case 'CLIENT': return '/client';  // NEW
  case 'CANDIDATE': return '/candidate';
}
```

---

## 🔐 Security Considerations

### Access Control
- ✅ Clients can ONLY see their own data
- ✅ Clients CANNOT see other clients' data
- ✅ Clients CANNOT see recruiter commission/pricing
- ✅ Clients CANNOT delete jobs (only recruiters can)
- ✅ Clients CAN approve/reject candidates
- ✅ Clients CAN provide feedback
- ✅ Clients CAN schedule interviews

### Permission Matrix
| Action | RECRUITER | CLIENT_ADMIN | CLIENT_USER |
|--------|-----------|--------------|-------------|
| View jobs | All | Own company | Own company |
| Create jobs | ✅ | ❌ | ❌ |
| Edit jobs | ✅ | ❌ | ❌ |
| Delete jobs | ✅ | ❌ | ❌ |
| View candidates | All | Own jobs | Own jobs |
| Approve candidates | ✅ | ✅ | ✅ |
| Reject candidates | ✅ | ✅ | ✅ |
| Schedule interviews | ✅ | ✅ | ❌ |
| View analytics | All | Own company | Own company |
| Invite client users | ✅ | ✅ | ❌ |

---

## 📊 Database Changes

### Users Table
```sql
ALTER TABLE users 
ADD COLUMN client_id UUID REFERENCES clients(id);

-- Index for performance
CREATE INDEX idx_users_client_id ON users(client_id);
```

### Client Users Table (Optional - for better tracking)
```sql
CREATE TABLE client_users (
  id UUID PRIMARY KEY,
  client_id UUID REFERENCES clients(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(50) DEFAULT 'CLIENT_USER',
  invited_by UUID REFERENCES users(id),
  invited_at TIMESTAMP DEFAULT NOW(),
  accepted_at TIMESTAMP,
  status VARCHAR(50) DEFAULT 'PENDING',
  UNIQUE(client_id, user_id)
);
```

---

## 🎨 UI/UX Design

### Client Portal Layout
```
┌─────────────────────────────────────────────────┐
│ Header: Logo | Company Name | Notifications | 👤│
├──────────┬──────────────────────────────────────┤
│ Sidebar  │ Main Content                         │
│          │                                      │
│ 📊 Dash  │ ┌────────────────────────────────┐  │
│ 💼 Jobs  │ │ Metrics Cards                  │  │
│ 👥 Cand  │ ├────────────────────────────────┤  │
│ 📅 Inter │ │ Active Jobs List               │  │
│ 📈 Analy │ ├────────────────────────────────┤  │
│ ⚙️ Sett  │ │ Recent Candidates              │  │
│          │ └────────────────────────────────┘  │
└──────────┴──────────────────────────────────────┘
```

### Recruiter's Client Management Enhancement
```
Clients List Page
├── Client Card
    ├── Company Info
    ├── Active Jobs Count
    ├── Candidates Count
    └── Actions:
        ├── View Details (existing)
        ├── 🆕 Invite Client User
        └── 🆕 View as Client (impersonate)
```

---

## 🔄 User Flows

### Flow 1: Recruiter Invites Client User
```
1. Recruiter goes to /clients/:id (client details)
2. Clicks "Invite Client User" button
3. Modal opens with form:
   - Email
   - First Name
   - Last Name
   - Role (CLIENT_ADMIN or CLIENT_USER)
4. System sends invitation email
5. Client user clicks link in email
6. Sets password and accepts invitation
7. Logs in and sees client portal dashboard
```

### Flow 2: Client User Reviews Candidates
```
1. Client logs in → Redirected to /client
2. Sees dashboard with metrics
3. Clicks "Candidates" in sidebar
4. Sees candidate pipeline (Kanban board)
5. Clicks candidate card
6. Reviews profile, resume, feedback
7. Clicks "Approve" or "Reject"
8. Adds optional feedback
9. Candidate moves to next stage
10. Recruiter gets notification
```

### Flow 3: Client User Schedules Interview
```
1. Client goes to /client/candidates
2. Clicks "Schedule Interview" on approved candidate
3. Modal opens with:
   - Interview type (Phone/Video/On-site)
   - Date & time
   - Duration
   - Meeting link (auto-generated for video)
   - Interviewers (from client team)
4. Submits interview
5. Candidate and interviewers get email notification
6. Interview appears in /client/interviews
```

---

## 📝 API Specifications

### Client Dashboard Metrics
```typescript
GET /api/client/dashboard/metrics

Response:
{
  activeJobs: number;
  candidatesSubmitted: number;
  interviewsScheduled: number;
  hiresMade: number;
  avgTimeToFill: number; // days
  offerAcceptanceRate: number; // percentage
}
```

### Client Jobs List
```typescript
GET /api/client/jobs?status=ACTIVE&page=0&size=20

Response:
{
  content: [
    {
      id: string;
      title: string;
      status: string;
      candidatesCount: number;
      postedDate: string;
      recruiterName: string;
    }
  ],
  totalElements: number;
  totalPages: number;
}
```

### Approve/Reject Candidate
```typescript
POST /api/client/candidates/:id/approve
POST /api/client/candidates/:id/reject

Request:
{
  feedback?: string;
  reason?: string; // for rejection
}

Response:
{
  success: boolean;
  message: string;
  candidate: CandidateDTO;
}
```

---

## ✅ Testing Checklist

### Unit Tests
- [ ] CLIENT role guard
- [ ] Client service methods
- [ ] Client dashboard component
- [ ] Data isolation filters

### Integration Tests
- [ ] Client user invitation flow
- [ ] Client login and redirect
- [ ] Candidate approval workflow
- [ ] Interview scheduling

### E2E Tests
- [ ] Complete client user journey
- [ ] Data isolation (client A cannot see client B data)
- [ ] Permission enforcement

---

## 🚀 Deployment Strategy

### Phase 1: Beta Release
- Enable for 5-10 pilot clients
- Gather feedback
- Fix bugs

### Phase 2: General Availability
- Enable for all clients
- Marketing announcement
- Training materials

### Phase 3: Premium Tier
- Make it a paid add-on
- Charge $50-100/month per client company
- Additional revenue stream

---

## 📈 Success Metrics

### Technical Metrics
- [ ] 99.9% uptime for client portal
- [ ] < 2s page load time
- [ ] Zero data leakage incidents

### Business Metrics
- [ ] 40% reduction in recruiter-client emails
- [ ] 30% faster candidate approval time
- [ ] 80% client adoption rate
- [ ] 20% increase in client satisfaction (NPS)

---

## 🎯 Next Steps

1. **Get stakeholder approval** for CLIENT role addition
2. **Backend team**: Start with Phase 1 (add CLIENT role)
3. **Frontend team**: Update role enum and routing
4. **Week 1 Goal**: Client user invitation working
5. **Week 2 Goal**: Client portal dashboard with real data
6. **Week 3 Goal**: Full candidate review workflow

---

**Status**: ✅ Plan Complete - Ready for Implementation  
**Estimated Effort**: 2-3 weeks (120-180 hours)  
**Team Size**: 2 developers (1 backend, 1 frontend)  
**Priority**: HIGH - Competitive advantage feature
