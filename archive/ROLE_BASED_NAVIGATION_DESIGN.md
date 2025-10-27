# Role-Based Navigation & Dashboard Design

## Core Problem
The application needs a robust role-based system where:
1. Each role sees ONLY their relevant navigation menu
2. Each role has their own dashboard with role-specific content
3. Refreshing the page maintains the correct role context
4. Navigation is dynamic based on authenticated user's role

## 6 Roles & Their Responsibilities

### 1. PLATFORM_SUPER_ADMIN / PLATFORM_ADMIN
**Responsibility**: Manage the entire platform across all tenants
**Navigation**:
- Dashboard → `/platform-admin`
- Tenants → `/platform-admin/tenants`
- Billing → `/platform-admin/billing`
- System → `/platform-admin/system`
- Settings → `/settings`

**Dashboard Content**:
- Total tenants count
- Platform-wide revenue
- System health metrics
- Recent tenant signups
- Quick actions: Add Tenant, Suspend Tenant, Send Announcement

**NO ACCESS TO**: Jobs, Candidates, Applications (these are tenant-specific)

---

### 2. BILLING_MANAGER
**Responsibility**: Manage financial operations across all tenants
**Navigation**:
- Dashboard → `/billing`
- Billing → `/platform-admin/billing`
- Reports → `/billing/reports`
- Settings → `/settings`

**Dashboard Content**:
- Monthly revenue
- Active subscriptions
- Pending payments
- Commission payouts
- Recent transactions

**NO ACCESS TO**: Tenant operations, Jobs, Candidates

---

### 3. TENANT_ADMIN
**Responsibility**: Manage their organization (tenant)
**Navigation**:
- Dashboard → `/admin`
- Team → `/users`
- Jobs → `/jobs`
- Candidates → `/candidates`
- Settings → `/settings`

**Dashboard Content**:
- Team members count
- Active jobs
- Subscription status
- Recent activity
- Quick actions: Invite User, Manage Team, View Reports

**ACCESS TO**: Everything within their tenant

---

### 4. RECRUITER
**Responsibility**: Day-to-day recruitment activities
**Navigation**:
- Dashboard → `/dashboard`
- Jobs → `/jobs`
- Applications → `/applications`
- Candidates → `/candidates`
- Clients → `/clients`
- Team → `/users`
- Analytics → `/analytics`
- Settings → `/settings`

**Dashboard Content**:
- Active jobs
- Candidates in pipeline
- Recent applications
- Placements this month
- Quick actions: Add Candidate, Post Job, Schedule Interview

**ACCESS TO**: Recruitment operations within their tenant

---

### 5. CANDIDATE
**Responsibility**: Job search and application management
**Navigation**:
- Dashboard → `/candidate`
- Job Search → `/candidate/jobs`
- My Applications → `/candidate/applications`
- Interviews → `/candidate/interviews`
- Profile → `/candidate/profile`
- Messages → `/candidate/messages`

**Dashboard Content**:
- Job recommendations
- Application status
- Upcoming interviews
- Profile completion
- Messages from recruiters

**NO ACCESS TO**: Any admin or recruiter features

---

### 6. CLIENT (Future - not in current backend)
**Responsibility**: Hiring manager from client company
**Navigation**:
- Dashboard → `/client`
- My Jobs → `/client/jobs`
- Candidates → `/client/candidates`
- Interviews → `/client/interviews`

**Dashboard Content**:
- Job orders
- Submitted candidates
- Interview schedule
- Hiring pipeline

---

## Technical Implementation

### 1. Auth Service (DONE)
- Stores user in localStorage
- Provides currentUser$ observable
- Loads user on app init

### 2. Main Layout Component
**Current Issue**: Role detection not working on refresh
**Solution**:
- Subscribe to currentUser$ in ngOnInit
- Use optional chaining (?.) for all role checks
- Show loading state until user is loaded
- Hide navigation until role is determined

### 3. Route Guards
**Current Issue**: Multiple guards causing conflicts
**Solution**:
- AuthGuard: Check if user is authenticated
- RoleGuard: Check if user has required role for specific routes
- Remove dashboard redirect guard (causes issues)

### 4. Login Redirect
**Current Issue**: Hardcoded redirects
**Solution**:
- After login, redirect based on role:
  - PLATFORM_ADMIN/SUPER → `/platform-admin`
  - BILLING_MANAGER → `/billing`
  - TENANT_ADMIN → `/admin`
  - RECRUITER → `/dashboard`
  - CANDIDATE → `/candidate`

### 5. Dashboard Button
**Current Issue**: Not dynamic
**Solution**:
- Use dashboardRoute getter in main-layout
- Returns correct path based on currentUser.role
- All dashboard links use [routerLink]="dashboardRoute"

---

## Implementation Checklist

### Phase 1: Fix Core Issues
- [x] Update main-layout to use currentUser$ properly
- [x] Add null checks to all role getters
- [x] Fix login redirect logic
- [x] Create role-specific dashboards
- [ ] Test each role's navigation
- [ ] Test refresh behavior for each role

### Phase 2: Dashboard Content
- [x] Platform Admin dashboard with tenant management actions
- [x] Billing Manager dashboard with financial data
- [x] Tenant Admin dashboard with team management
- [ ] Recruiter dashboard with recruitment metrics
- [ ] Candidate dashboard with job search
- [ ] Client dashboard (future)

### Phase 3: Route Protection
- [ ] Add role guards to all routes
- [ ] Prevent unauthorized access
- [ ] Redirect to appropriate dashboard on unauthorized access

---

## File Structure

```
src/app/
├── core/
│   ├── auth/
│   │   └── auth.service.ts (manages user state)
│   ├── guards/
│   │   ├── auth.guard.ts (check authentication)
│   │   ├── role.guard.ts (check role permissions)
│   │   └── role-redirect.guard.ts (redirect from /dashboard)
│   └── models/
│       └── user.model.ts (UserRole enum)
├── layouts/
│   └── main-layout/
│       ├── main-layout.component.ts (role-based navigation)
│       └── main-layout.component.html (dynamic menu)
├── features/
│   ├── platform-admin/
│   │   └── platform-admin-dashboard.component.ts
│   ├── billing/
│   │   └── billing-dashboard.component.ts
│   ├── admin/
│   │   └── admin-dashboard.component.ts
│   ├── candidate-portal/
│   │   └── candidate-dashboard.component.ts
│   └── auth/
│       └── login-standalone.component.ts (login redirect)
└── dashboard.component.ts (recruiter dashboard)
```

---

## Testing Scenarios

### Scenario 1: Platform Admin Login
1. Login as PLATFORM_ADMIN
2. Should redirect to `/platform-admin`
3. Left menu shows: Dashboard, Tenants, Billing, System
4. Refresh page → stays on `/platform-admin`
5. Click Dashboard → goes to `/platform-admin`

### Scenario 2: Recruiter Login
1. Login as RECRUITER
2. Should redirect to `/dashboard`
3. Left menu shows: Dashboard, Jobs, Applications, Candidates, Clients, Team, Analytics
4. Refresh page → stays on `/dashboard`
5. Click Dashboard → goes to `/dashboard`

### Scenario 3: Tenant Admin Login
1. Login as TENANT_ADMIN
2. Should redirect to `/admin`
3. Left menu shows: Dashboard, Team, Settings
4. Refresh page → stays on `/admin`
5. Click Dashboard → goes to `/admin`

---

## Next Steps
1. Fix main-layout component to properly handle null user state
2. Test all 6 roles thoroughly
3. Add loading spinner while user is being loaded
4. Document any edge cases found during testing
