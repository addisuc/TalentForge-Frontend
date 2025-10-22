# Dashboard Views by Role - Implementation Plan

## Roles from Backend (auth-service/UserRole.java)
```java
CANDIDATE
RECRUITER
TENANT_ADMIN
BILLING_MANAGER
PLATFORM_ADMIN
PLATFORM_SUPER_ADMIN
```

## Dashboard Requirements by Role

### 1. PLATFORM_SUPER_ADMIN & PLATFORM_ADMIN
**Route**: `/platform-admin`
**Status**: ✅ Already exists
**Dashboard**: Platform Admin Dashboard
**Features**:
- Total tenants (active/suspended)
- Monthly revenue (platform-wide)
- System health metrics
- Support tickets
- Top performing tenants
- Usage analytics by tier

---

### 2. BILLING_MANAGER
**Route**: `/billing` (NEW)
**Status**: ❌ Needs to be created
**Dashboard**: Billing Dashboard
**Features**:
- Subscriptions overview
- Payments & refunds
- Commission payouts
- Financial reports
- Revenue analytics

---

### 3. TENANT_ADMIN
**Route**: `/admin` (NEW)
**Status**: ❌ Needs to be created
**Dashboard**: Tenant Admin Dashboard
**Features**:
- Team members overview
- User management quick actions
- Tenant settings summary
- Subscription/billing status
- System health for tenant
- Recent activity log

---

### 4. RECRUITER
**Route**: `/dashboard`
**Status**: ✅ Already exists
**Dashboard**: Recruiter Dashboard
**Features**:
- Active job orders
- Candidates in pipeline
- Recent applications
- Placements this month
- Quick actions (add candidate, schedule interview)

---

### 5. CANDIDATE
**Route**: `/candidate`
**Status**: ✅ Already exists (placeholder)
**Dashboard**: Candidate Dashboard
**Features**:
- Job recommendations
- Application status tracking
- Interview schedule
- Profile completion status
- Messages from recruiters

---

### 6. CLIENT (Not in backend enum, but in architecture docs)
**Note**: Architecture mentions CLIENT_ADMIN and CLIENT_USER roles, but backend only has 6 roles
**Route**: `/client`
**Status**: ✅ Already exists (placeholder)
**Dashboard**: Client Dashboard
**Features**:
- My job orders
- Submitted candidates
- Interview schedule
- Hiring pipeline

---

## Implementation Priority

### Phase 1: Fix Current Issue (TENANT_ADMIN)
1. Create `/admin` route
2. Create Tenant Admin Dashboard component
3. Update main-layout to route TENANT_ADMIN to `/admin`

### Phase 2: Add Missing Dashboards
1. Create Billing Manager Dashboard (`/billing`)
2. Update Candidate Dashboard (`/candidate`)
3. Update Client Dashboard (`/client`)

### Phase 3: Dynamic Dashboard Routing
Update main-layout.component.ts to route based on role:
```typescript
get dashboardRoute() {
  switch(this.currentUser.role) {
    case 'PLATFORM_ADMIN':
    case 'PLATFORM_SUPER_ADMIN':
      return '/platform-admin';
    case 'BILLING_MANAGER':
      return '/billing';
    case 'TENANT_ADMIN':
      return '/admin';
    case 'RECRUITER':
      return '/dashboard';
    case 'CANDIDATE':
      return '/candidate';
    default:
      return '/dashboard';
  }
}
```

---

## Current Status

### ✅ Existing Dashboards
- `/platform-admin` - Platform Admin Dashboard
- `/dashboard` - Recruiter Dashboard
- `/candidate` - Candidate Dashboard (placeholder)
- `/client` - Client Dashboard (placeholder)

### ❌ Missing Dashboards
- `/admin` - Tenant Admin Dashboard
- `/billing` - Billing Manager Dashboard

---

## Next Steps
1. Confirm which roles need separate dashboards
2. Create missing dashboard components
3. Update routing logic in main-layout
4. Add route guards for each dashboard
