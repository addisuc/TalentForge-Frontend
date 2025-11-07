# Week 2: Client Portal Foundation - Implementation Guide

**Status**: Ready to Start  
**Duration**: 7 days  
**Priority**: HIGH  
**Based on**: CLIENT_PORTAL_PLAN.md + CLIENT_PORTAL_IMPLEMENTATION.md

---

## 📋 What's Already Done

### ✅ Client Management (100% Complete)
- Client CRUD operations
- Client details page with activity timeline
- Client notes system
- Email client functionality
- Create job from client
- Backend integration (job-service)
- Database: `clients` and `client_activities` tables

### ✅ Client Portal UI (Mock Data)
- `/client` - Dashboard with metrics cards
- `/client/jobs` - Job orders list
- `/client/candidates` - Candidate submissions
- `/client/interviews` - Interview schedule
- All components exist with mock data

### ✅ Infrastructure
- Routing configured
- Standalone components created
- Basic styling implemented

---

## 🎯 Week 2 Goals

Transform the client portal from mock data to fully functional with:
1. CLIENT user role and authentication
2. Real backend API integration
3. Data filtering by client
4. Candidate review system
5. Interview management

---

## 📅 Day-by-Day Plan

### Day 1: CLIENT Role Setup
**Backend Tasks:**
- [ ] Add CLIENT to UserRole enum (user-service)
- [ ] Add `clientId` field to User entity
- [ ] Update authentication to support CLIENT role
- [ ] Create client user invitation endpoint
- [ ] Test CLIENT user registration/login

**Frontend Tasks:**
- [x] Add CLIENT to UserRole enum ✅ (DONE)
- [ ] Update role-redirect guard for CLIENT role
- [ ] Update navigation service for CLIENT role
- [ ] Test CLIENT role routing

**Deliverable**: CLIENT users can register/login and see client portal

---

### Day 2: Client Dashboard Integration
**Backend Tasks:**
- [ ] GET /api/client/dashboard/metrics
  - Active jobs count
  - Candidates submitted count
  - Interviews scheduled count
  - Hires made count
- [ ] Add data filtering by clientId

**Frontend Tasks:**
- [ ] Update ClientDashboardComponent
- [ ] Replace mock stats with API calls
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test with real data

**Deliverable**: Dashboard shows real metrics for logged-in client

---

### Day 3: Client Jobs Page
**Backend Tasks:**
- [ ] GET /api/client/jobs (filtered by clientId)
- [ ] GET /api/client/jobs/:id (job details)
- [ ] PUT /api/client/jobs/:id/status (update job status)

**Frontend Tasks:**
- [ ] Update ClientJobsComponent
- [ ] Connect to real API
- [ ] Implement job details view
- [ ] Add job status management
- [ ] Add search and filters
- [ ] Test pagination

**Deliverable**: Clients can view and manage their job orders

---

### Day 4: Client Candidates Page (Part 1)
**Backend Tasks:**
- [ ] GET /api/client/candidates (filtered by client's jobs)
- [ ] GET /api/client/candidates/:id (candidate details)
- [ ] POST /api/client/candidates/:id/approve
- [ ] POST /api/client/candidates/:id/reject

**Frontend Tasks:**
- [ ] Update ClientCandidatesComponent
- [ ] Connect to real API
- [ ] Display candidate profiles
- [ ] Add approve/reject buttons
- [ ] Add loading states

**Deliverable**: Clients can view candidates submitted for their jobs

---

### Day 5: Client Candidates Page (Part 2)
**Backend Tasks:**
- [ ] POST /api/client/candidates/:id/feedback
- [ ] GET /api/client/candidates/:id/resume (download)
- [ ] Add candidate status tracking

**Frontend Tasks:**
- [ ] Create feedback modal
- [ ] Implement resume download
- [ ] Add candidate comparison
- [ ] Add status badges
- [ ] Test approval workflow

**Deliverable**: Clients can review and provide feedback on candidates

---

### Day 6: Client Interviews Page
**Backend Tasks:**
- [ ] GET /api/client/interviews (filtered by clientId)
- [ ] GET /api/client/interviews/:id
- [ ] POST /api/client/interviews/:id/feedback
- [ ] PUT /api/client/interviews/:id/reschedule

**Frontend Tasks:**
- [ ] Update ClientInterviewsComponent
- [ ] Connect to real API
- [ ] Add interview feedback form
- [ ] Implement reschedule request
- [ ] Add join meeting functionality
- [ ] Test interview workflow

**Deliverable**: Clients can manage their interview schedule

---

### Day 7: Testing & Polish
**Tasks:**
- [ ] End-to-end testing of all flows
- [ ] Data isolation testing (client A can't see client B data)
- [ ] Permission testing
- [ ] Mobile responsive testing
- [ ] Error handling verification
- [ ] Performance optimization
- [ ] Documentation updates

**Deliverable**: Production-ready client portal

---

## 🔧 Technical Implementation

### 1. Add CLIENT Role to Backend

**user-service/src/main/java/com/talentforge/user/model/UserRole.java**
```java
public enum UserRole {
    CANDIDATE,
    RECRUITER,
    CLIENT,  // NEW
    TENANT_ADMIN,
    BILLING_MANAGER,
    PLATFORM_ADMIN,
    PLATFORM_SUPER_ADMIN
}
```

**user-service/src/main/java/com/talentforge/user/entity/User.java**
```java
@Column(name = "client_id")
private UUID clientId;  // NEW - links user to client company
```

### 2. Update Frontend Role Redirect

**src/app/core/guards/role-redirect.guard.ts**
```typescript
case 'CLIENT':
  return router.createUrlTree(['/client']);
```

### 3. Create Client-Specific API Endpoints

**job-service/src/main/java/com/talentforge/job/controller/ClientPortalController.java**
```java
@RestController
@RequestMapping("/api/client")
public class ClientPortalController {
    
    @GetMapping("/dashboard/metrics")
    public ClientMetricsDTO getDashboardMetrics(@AuthenticationPrincipal User user) {
        // Return metrics filtered by user.getClientId()
    }
    
    @GetMapping("/jobs")
    public Page<JobDTO> getClientJobs(@AuthenticationPrincipal User user, Pageable pageable) {
        // Return jobs where clientId = user.getClientId()
    }
    
    @GetMapping("/candidates")
    public Page<ApplicationDTO> getClientCandidates(@AuthenticationPrincipal User user, Pageable pageable) {
        // Return applications for jobs belonging to user.getClientId()
    }
}
```

### 4. Update Frontend Services

**src/app/core/services/client-portal.service.ts** (NEW)
```typescript
@Injectable({ providedIn: 'root' })
export class ClientPortalService {
  private apiUrl = `${environment.apiUrl}/client`;

  getDashboardMetrics(): Observable<ClientMetrics> {
    return this.http.get<ClientMetrics>(`${this.apiUrl}/dashboard/metrics`);
  }

  getJobs(params: any): Observable<PagedResponse<Job>> {
    return this.http.get<PagedResponse<Job>>(`${this.apiUrl}/jobs`, { params });
  }

  getCandidates(params: any): Observable<PagedResponse<Application>> {
    return this.http.get<PagedResponse<Application>>(`${this.apiUrl}/candidates`, { params });
  }

  approveCandidate(id: string, feedback?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/candidates/${id}/approve`, { feedback });
  }

  rejectCandidate(id: string, reason: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/candidates/${id}/reject`, { reason });
  }
}
```

---

## 🔐 Security Requirements

### Data Isolation
```sql
-- All queries must filter by clientId
WHERE client_id = :currentUserClientId

-- Example: Jobs query
SELECT * FROM jobs 
WHERE client_id = (SELECT client_id FROM users WHERE id = :currentUserId)
```

### Permission Matrix
| Action | RECRUITER | CLIENT |
|--------|-----------|--------|
| View all jobs | ✅ | ❌ |
| View own jobs | ✅ | ✅ |
| Create jobs | ✅ | ❌ |
| Edit jobs | ✅ | ❌ |
| View all candidates | ✅ | ❌ |
| View own candidates | ✅ | ✅ |
| Approve candidates | ✅ | ✅ |
| Reject candidates | ✅ | ✅ |
| Schedule interviews | ✅ | ✅ |

---

## 📊 API Specifications

### Dashboard Metrics
```typescript
GET /api/client/dashboard/metrics

Response: {
  activeJobs: number;
  candidatesSubmitted: number;
  interviewsScheduled: number;
  hiresMade: number;
}
```

### Client Jobs
```typescript
GET /api/client/jobs?page=0&size=25&status=ACTIVE

Response: {
  content: Job[];
  totalElements: number;
  totalPages: number;
}
```

### Client Candidates
```typescript
GET /api/client/candidates?page=0&size=25

Response: {
  content: Application[];
  totalElements: number;
  totalPages: number;
}
```

### Approve/Reject Candidate
```typescript
POST /api/client/candidates/:id/approve
POST /api/client/candidates/:id/reject

Request: {
  feedback?: string;
  reason?: string;
}

Response: {
  success: boolean;
  message: string;
}
```

---

## ✅ Success Criteria

- [ ] CLIENT users can log in and access portal
- [ ] Dashboard shows real metrics (not mock data)
- [ ] Clients see only their jobs (data isolation)
- [ ] Clients can approve/reject candidates
- [ ] Clients can manage interviews
- [ ] All pages have loading states
- [ ] All pages have error handling
- [ ] Mobile responsive
- [ ] No data leakage between clients

---

## 🧪 Testing Checklist

### Unit Tests
- [ ] CLIENT role guard
- [ ] ClientPortalService methods
- [ ] Data filtering logic

### Integration Tests
- [ ] CLIENT user login flow
- [ ] Dashboard metrics API
- [ ] Jobs list API
- [ ] Candidates list API
- [ ] Approve/reject workflow

### E2E Tests
- [ ] Complete client user journey
- [ ] Data isolation (Client A can't see Client B data)
- [ ] Permission enforcement

---

## 📈 Success Metrics

### Technical
- [ ] < 2s page load time
- [ ] 99.9% uptime
- [ ] Zero data leakage incidents

### Business
- [ ] 40% reduction in recruiter-client emails
- [ ] 30% faster candidate approval time
- [ ] 80% client adoption rate

---

## 🚀 Next Steps

1. **Start Day 1**: Add CLIENT role to backend
2. **Daily standup**: Review progress and blockers
3. **End of week**: Demo to stakeholders
4. **Week 3**: Advanced features (analytics, messaging)

---

**Status**: Ready to implement  
**Estimated Effort**: 7 days (56 hours)  
**Team**: 1-2 developers  
**Priority**: HIGH - Competitive advantage
