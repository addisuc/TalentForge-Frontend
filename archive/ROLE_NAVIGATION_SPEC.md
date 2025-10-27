# TalentForge Role-Based Navigation Specification

## Role Definitions & Navigation

### 1. PLATFORM_SUPER_ADMIN / PLATFORM_ADMIN
**Context**: Cross-tenant platform management
**Navigation**:
- Dashboard
- Tenants
- System Settings
- Billing Overview
- Analytics
- Audit Logs

**Dashboard Widgets**:
- Total Tenants (Active/Suspended/Trial)
- Platform Revenue (MRR, ARR)
- System Health (Uptime, Performance)
- User Growth Metrics
- Support Tickets

**Key Actions**:
- Create/Suspend/Delete Tenant
- Send Platform Announcements
- View System Logs
- Manage Billing Plans
- Configure Platform Settings

---

### 2. BILLING_MANAGER
**Context**: Financial operations across platform
**Navigation**:
- Dashboard
- Subscriptions
- Invoices
- Payments
- Commission Payouts
- Financial Reports

**Dashboard Widgets**:
- Monthly Recurring Revenue
- Subscription Status (Active/Pending/Cancelled)
- Outstanding Payments
- Commission Summary
- Revenue Trends

**Key Actions**:
- Process Payments
- Generate Invoices
- Manage Subscriptions
- Calculate Commissions
- Export Financial Reports

---

### 3. TENANT_ADMIN
**Context**: Organization-level management
**Navigation**:
- Dashboard
- Team Management
- Subscription & Billing
- Integrations
- Settings
- Reports

**Dashboard Widgets**:
- Team Size & Active Users
- Subscription Status & Usage
- Active Jobs Count
- Candidates in Pipeline
- Monthly Placements

**Key Actions**:
- Invite/Remove Users
- Assign Roles
- Manage Subscription
- Configure Integrations
- View Organization Reports

---

### 4. RECRUITER
**Context**: Day-to-day recruitment operations
**Navigation**:
- Dashboard
- Jobs
- Candidates
- Applications
- Clients
- Calendar
- Analytics
- Settings

**Dashboard Widgets**:
- My Active Jobs
- Candidates in Pipeline (by stage)
- Recent Applications
- Upcoming Interviews
- This Month's Placements
- Performance Metrics

**Key Actions**:
- Post Job
- Add Candidate
- Review Applications
- Schedule Interviews
- Update Pipeline Status
- Generate Reports

---

### 5. CANDIDATE
**Context**: Job seeker portal
**Navigation**:
- Dashboard
- Job Search
- My Applications
- Interviews
- Profile
- Messages
- Saved Jobs

**Dashboard Widgets**:
- Application Status Overview
- Job Recommendations
- Upcoming Interviews
- Profile Completion %
- Recent Messages
- Job Alerts

**Key Actions**:
- Search Jobs
- Apply to Jobs
- Update Profile
- Upload Resume
- Message Recruiters
- Manage Preferences

---

## Implementation Strategy

### Phase 1: Core Infrastructure
1. **Auth State Management**
   - Centralized user state in AuthService
   - Observable pattern for reactive updates
   - Persistent storage (localStorage)
   - Automatic token refresh

2. **Route Guards**
   - AuthGuard: Authentication check
   - RoleGuard: Role-based access control
   - Redirect to appropriate dashboard on login

3. **Layout System**
   - Dynamic navigation based on role
   - Role-specific header/footer
   - Conditional rendering of UI elements

### Phase 2: Role-Specific Dashboards
1. Create dedicated dashboard for each role
2. Role-specific widgets and metrics
3. Quick actions relevant to role
4. Real-time data updates

### Phase 3: Navigation & Routing
1. Role-based menu items
2. Dynamic route generation
3. Breadcrumb navigation
4. Deep linking support

### Phase 4: Testing & Validation
1. Unit tests for role guards
2. Integration tests for navigation
3. E2E tests for user flows
4. Performance testing

---

## Technical Architecture

### Directory Structure
```
src/app/
├── core/
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── auth.interceptor.ts
│   ├── guards/
│   │   └── role.guard.ts
│   ├── models/
│   │   ├── user.model.ts
│   │   └── role.model.ts
│   └── services/
│       └── navigation.service.ts
├── layouts/
│   ├── main-layout/
│   ├── auth-layout/
│   └── components/
│       ├── sidebar/
│       ├── header/
│       └── footer/
├── features/
│   ├── platform-admin/
│   │   ├── dashboard/
│   │   ├── tenants/
│   │   ├── billing/
│   │   └── system/
│   ├── billing/
│   │   ├── dashboard/
│   │   ├── subscriptions/
│   │   └── reports/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── team/
│   │   └── settings/
│   ├── recruiter/
│   │   ├── dashboard/
│   │   ├── jobs/
│   │   ├── candidates/
│   │   └── applications/
│   └── candidate/
│       ├── dashboard/
│       ├── jobs/
│       └── profile/
└── shared/
    ├── components/
    ├── directives/
    └── pipes/
```

### Navigation Service
```typescript
@Injectable({ providedIn: 'root' })
export class NavigationService {
  getNavigationForRole(role: UserRole): NavigationItem[] {
    // Returns role-specific navigation items
  }
  
  getDashboardRoute(role: UserRole): string {
    // Returns role-specific dashboard route
  }
  
  canAccessRoute(role: UserRole, route: string): boolean {
    // Checks if role can access specific route
  }
}
```

### Role Guard Implementation
```typescript
export const roleGuard = (allowedRoles: UserRole[]) => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    return authService.currentUser$.pipe(
      map(user => {
        if (!user) return router.createUrlTree(['/auth/login']);
        if (!allowedRoles.includes(user.role)) {
          return router.createUrlTree([getDashboardRoute(user.role)]);
        }
        return true;
      })
    );
  };
};
```

---

## Best Practices

1. **Separation of Concerns**
   - Each role has dedicated components
   - Shared components are truly reusable
   - No role-specific logic in shared code

2. **Security**
   - Server-side validation of permissions
   - Client-side guards for UX only
   - No sensitive data in frontend

3. **Performance**
   - Lazy load role-specific modules
   - Cache navigation items
   - Optimize bundle size per role

4. **Maintainability**
   - Clear naming conventions
   - Comprehensive documentation
   - Type safety throughout

5. **Scalability**
   - Easy to add new roles
   - Modular architecture
   - Configurable permissions

---

## Migration Plan

### Step 1: Audit Current State
- [ ] Document all existing routes
- [ ] Identify shared vs role-specific components
- [ ] Map current navigation structure

### Step 2: Refactor Auth System
- [ ] Centralize user state management
- [ ] Implement proper role guards
- [ ] Fix login redirect logic

### Step 3: Rebuild Navigation
- [ ] Create NavigationService
- [ ] Implement role-based menus
- [ ] Update main-layout component

### Step 4: Create Role Dashboards
- [ ] Platform Admin dashboard
- [ ] Billing Manager dashboard
- [ ] Tenant Admin dashboard
- [ ] Recruiter dashboard
- [ ] Candidate dashboard

### Step 5: Testing
- [ ] Test each role independently
- [ ] Test role switching
- [ ] Test refresh behavior
- [ ] Test unauthorized access

### Step 6: Documentation
- [ ] Update README
- [ ] Create role-specific guides
- [ ] Document API endpoints per role
