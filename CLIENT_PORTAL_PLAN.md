# Client Portal Enhancement Plan - Backend Integration

**Status**: Planning Phase  
**Current State**: Frontend exists with mock data  
**Target**: 2-week backend integration  
**Reference**: Based on industry-leading ATS client portals (Greenhouse, Lever, Workday)

---

## 📋 Industry Standard Client Portal Features

### Core Capabilities (Must-Have)
1. **Dashboard Overview** - Real-time hiring metrics
2. **Job Requisition Management** - Create, edit, approve job postings
3. **Candidate Pipeline View** - Visual hiring pipeline per job
4. **Candidate Review & Feedback** - Rate and comment on candidates
5. **Interview Scheduling** - Calendar integration for interviews
6. **Offer Management** - Approve/decline offers
7. **Reporting & Analytics** - Hiring metrics and KPIs
8. **Communication Hub** - Message recruiters and candidates

---

## 🏗️ Architecture Design

### User Roles & Permissions
```
CLIENT_ADMIN (Hiring Manager)
├── Full access to company jobs
├── Approve job requisitions
├── Review all candidates
├── Approve offers
└── View analytics

CLIENT_HIRING_MANAGER
├── View assigned jobs only
├── Review candidates for their jobs
├── Provide interview feedback
└── Request offer approvals

CLIENT_INTERVIEWER
├── View scheduled interviews
├── Submit interview feedback
└── View candidate profiles (limited)
```

### Route Structure
```
/client-portal
├── /dashboard              # Overview metrics
├── /jobs                   # Job requisitions
│   ├── /active            # Active jobs
│   ├── /draft             # Draft requisitions
│   ├── /filled            # Completed jobs
│   └── /:id               # Job details
├── /candidates            # Candidate pipeline
│   ├── /pipeline          # Kanban view
│   ├── /shortlist         # Shortlisted candidates
│   └── /:id               # Candidate profile
├── /interviews            # Interview management
│   ├── /scheduled         # Upcoming interviews
│   ├── /feedback          # Pending feedback
│   └── /:id               # Interview details
├── /offers                # Offer management
│   ├── /pending           # Pending approvals
│   ├── /approved          # Approved offers
│   └── /:id               # Offer details
├── /analytics             # Reports & metrics
│   ├── /overview          # Executive dashboard
│   ├── /time-to-fill      # Hiring speed metrics
│   └── /source-quality    # Source effectiveness
├── /messages              # Communication
│   ├── /inbox             # Messages from recruiters
│   └── /compose           # New message
└── /settings              # Client preferences
    ├── /profile           # Company profile
    ├── /team              # Team management
    └── /notifications     # Notification settings
```

---

## 📊 Dashboard Components (Industry Standard)

### 1. Executive Summary Cards
```typescript
- Active Job Openings (count + trend)
- Candidates in Pipeline (count + stage breakdown)
- Pending Actions (approvals needed)
- Time to Fill (average days)
- Offer Acceptance Rate (percentage)
- Interviews This Week (count + calendar)
```

### 2. Hiring Pipeline Overview
```
Visual funnel chart:
Applied → Screening → Interview → Offer → Hired
(with counts and conversion rates)
```

### 3. Recent Activity Feed
```
- New candidate applications
- Interview scheduled/completed
- Offer extended/accepted
- Recruiter messages
- Job status changes
```

### 4. Upcoming Interviews
```
Calendar widget showing:
- Today's interviews
- This week's schedule
- Pending feedback submissions
```

### 5. Top Performing Jobs
```
Table showing:
- Job title
- Applications received
- Qualified candidates
- Days open
- Status
```

---

## 🎨 UI/UX Design Principles

### Industry Standards (Greenhouse/Lever Style)
1. **Clean, Professional Design** - White background, blue accents
2. **Card-Based Layout** - Modular, scannable information
3. **Data Visualization** - Charts for metrics (Chart.js/D3.js)
4. **Responsive Design** - Mobile-friendly for on-the-go access
5. **Quick Actions** - One-click approve/reject buttons
6. **Status Indicators** - Color-coded badges (green/yellow/red)
7. **Search & Filters** - Advanced filtering on all lists
8. **Bulk Actions** - Multi-select for batch operations

### Color Scheme
```scss
Primary: #0066ff (Actions, CTAs)
Success: #10b981 (Approved, Hired)
Warning: #f59e0b (Pending, Review)
Danger: #ef4444 (Rejected, Urgent)
Neutral: #64748b (Info, Secondary)
Background: #f8fafc (Page background)
```

---

## 🔧 Technical Implementation

### Phase 1: Foundation (Week 1)
**Backend APIs Needed:**
```
GET    /api/client/dashboard/metrics
GET    /api/client/jobs
GET    /api/client/jobs/:id/candidates
POST   /api/client/jobs/:id/approve
GET    /api/client/candidates/:id
POST   /api/client/candidates/:id/feedback
GET    /api/client/interviews
POST   /api/client/interviews/:id/feedback
GET    /api/client/offers
POST   /api/client/offers/:id/approve
POST   /api/client/offers/:id/reject
```

**Frontend Components:**
```
src/app/features/client-portal/
├── client-dashboard/
│   ├── client-dashboard.component.ts
│   ├── client-dashboard.component.html
│   ├── client-dashboard.component.scss
│   └── components/
│       ├── metrics-cards.component.ts
│       ├── pipeline-chart.component.ts
│       ├── activity-feed.component.ts
│       └── upcoming-interviews.component.ts
├── client-jobs/
│   ├── client-jobs-list.component.ts
│   ├── client-job-details.component.ts
│   └── job-approval-modal.component.ts
├── client-candidates/
│   ├── candidate-pipeline.component.ts
│   ├── candidate-profile.component.ts
│   └── candidate-feedback-modal.component.ts
├── client-interviews/
│   ├── interview-list.component.ts
│   ├── interview-details.component.ts
│   └── interview-feedback-form.component.ts
├── client-offers/
│   ├── offer-list.component.ts
│   ├── offer-details.component.ts
│   └── offer-approval-modal.component.ts
└── shared/
    ├── client-header.component.ts
    ├── client-sidebar.component.ts
    └── client-layout.component.ts
```

### Phase 2: Core Features (Week 2)
1. **Job Requisition Management**
   - View all jobs assigned to client
   - Filter by status (draft, active, filled)
   - Approve/reject job postings
   - Request modifications

2. **Candidate Pipeline**
   - Kanban board view (like Trello)
   - Drag-and-drop to change stages
   - Quick candidate preview
   - Bulk actions (approve/reject)

3. **Candidate Review System**
   - Star rating (1-5 stars)
   - Structured feedback form
   - Thumbs up/down quick actions
   - Comments and notes

### Phase 3: Advanced Features (Week 3)
1. **Interview Management**
   - Calendar integration (Google/Outlook)
   - Interview scheduling interface
   - Feedback submission forms
   - Interview scorecard templates

2. **Offer Management**
   - Offer approval workflow
   - Offer letter preview
   - Negotiation tracking
   - Digital signature integration

3. **Analytics Dashboard**
   - Time-to-fill metrics
   - Source effectiveness
   - Recruiter performance
   - Cost-per-hire tracking

### Phase 4: Polish & Integration (Week 4)
1. **Communication Hub**
   - Real-time messaging with recruiters
   - Email notifications
   - In-app notifications
   - Message templates

2. **Settings & Preferences**
   - Company profile management
   - Team member invitations
   - Notification preferences
   - Branding customization

---

## 📱 Responsive Design Breakpoints

```scss
// Mobile First Approach
$mobile: 320px;      // Mobile devices
$tablet: 768px;      // Tablets
$desktop: 1024px;    // Desktop
$wide: 1440px;       // Wide screens

// Dashboard Layout
Mobile: Single column, stacked cards
Tablet: 2-column grid
Desktop: 3-column grid with sidebar
Wide: 4-column grid with expanded sidebar
```

---

## 🔐 Security & Permissions

### Access Control
```typescript
// Client can only see:
- Jobs assigned to their company
- Candidates for their jobs
- Interviews for their team
- Offers for their positions

// Client cannot see:
- Other clients' data
- Recruiter commission details
- Platform admin functions
- Other companies' candidates
```

### Data Isolation
```sql
-- All queries filtered by client_id
WHERE client_id = :currentClientId
AND tenant_id = :currentTenantId
```

---

## 📊 Key Metrics & KPIs (Industry Standard)

### Dashboard Metrics
1. **Time to Fill** - Average days from job posting to hire
2. **Time to Interview** - Days from application to first interview
3. **Interview to Offer Ratio** - Conversion rate
4. **Offer Acceptance Rate** - Percentage of accepted offers
5. **Source Quality** - Applications by source (LinkedIn, Indeed, etc.)
6. **Candidate Pipeline Health** - Stage distribution
7. **Recruiter Response Time** - Average response time
8. **Cost per Hire** - Total recruitment cost / hires

### Benchmark Targets (Industry Average)
```
Time to Fill: 23-42 days
Interview to Offer: 3:1 ratio
Offer Acceptance: 85-90%
First Year Retention: 75-85%
```

---

## 🎯 User Stories (Industry Standard)

### As a Hiring Manager, I want to:
1. See all open positions for my department
2. Review candidate profiles with recruiter notes
3. Approve or reject candidates at each stage
4. Schedule interviews with my team
5. Provide structured interview feedback
6. Approve job offers within budget
7. Track hiring progress against goals
8. Communicate with recruiters efficiently

### As a Client Admin, I want to:
1. Manage team member access and permissions
2. View company-wide hiring metrics
3. Approve job requisitions before posting
4. Set hiring budgets and approval limits
5. Generate compliance reports
6. Customize notification preferences
7. Export data for internal reporting

---

## 🚀 Implementation Checklist

### Week 1: Foundation
- [ ] Create client portal routing structure
- [ ] Build client layout component (header, sidebar, footer)
- [ ] Implement client dashboard with metrics cards
- [ ] Create client service for API calls
- [ ] Add client role guard
- [ ] Design responsive layout

### Week 2: Core Features
- [ ] Job requisition list and details
- [ ] Candidate pipeline Kanban board
- [ ] Candidate profile view
- [ ] Feedback submission forms
- [ ] Quick approve/reject actions
- [ ] Search and filter functionality

### Week 3: Advanced Features
- [ ] Interview scheduling interface
- [ ] Interview feedback forms
- [ ] Offer approval workflow
- [ ] Analytics dashboard with charts
- [ ] Real-time notifications
- [ ] Email integration

### Week 4: Polish & Testing
- [ ] Mobile responsive testing
- [ ] Cross-browser compatibility
- [ ] Performance optimization
- [ ] User acceptance testing
- [ ] Documentation
- [ ] Production deployment

---

## 📚 Reference Implementations

### Industry Leaders to Study:
1. **Greenhouse** - Clean UI, excellent candidate pipeline
2. **Lever** - Modern design, great analytics
3. **Workday Recruiting** - Enterprise-grade features
4. **SmartRecruiters** - Intuitive UX, mobile-first
5. **iCIMS** - Comprehensive reporting

### Key Features to Emulate:
- One-click candidate actions
- Visual pipeline management
- Real-time collaboration
- Mobile-optimized interface
- Customizable dashboards
- Automated workflows

---

## 🎨 Wireframe Structure

### Dashboard Layout
```
┌─────────────────────────────────────────────────┐
│ Header: Logo | Client Name | Notifications | 👤 │
├─────────────────────────────────────────────────┤
│ Sidebar │ Main Content Area                     │
│         │ ┌─────────────────────────────────┐   │
│ 📊 Dash │ │ Metrics Cards (4 across)        │   │
│ 💼 Jobs │ ├─────────────────────────────────┤   │
│ 👥 Cand │ │ Pipeline Chart                  │   │
│ 📅 Inter│ ├─────────────────────────────────┤   │
│ 💰 Offer│ │ Activity Feed | Interviews      │   │
│ 📈 Analy│ └─────────────────────────────────┘   │
│ 💬 Msgs │                                       │
│ ⚙️ Sett │                                       │
└─────────────────────────────────────────────────┘
```

---

**Status**: ✅ Plan Complete - Ready for Implementation  
**Next Step**: Begin Week 1 - Foundation Development  
**Estimated Effort**: 4 weeks (160 hours)  
**Team Size**: 1-2 developers
