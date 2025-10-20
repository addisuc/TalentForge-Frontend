# TalentForge - Authentication Architecture

## Role Hierarchy

### Public Roles (Self-Registration)
1. **CANDIDATE** - Job seekers looking for opportunities
2. **RECRUITER** - Recruitment professionals (belong to a tenant)

### Invitation-Only Roles
3. **TENANT_ADMIN** - Manages their organization/tenant
4. **BILLING_MANAGER** - Handles billing and subscriptions for tenant
5. **PLATFORM_ADMIN** - Manages platform operations and tenants
6. **PLATFORM_SUPER_ADMIN** - Root admin with full system access

---

## Authentication Flows

### 1. Public Registration Flow
**URL:** `/auth/register`

**Allowed Roles:**
- CANDIDATE
- RECRUITER

**Process:**
1. User fills registration form
2. Selects role (Job Seeker or Recruiter)
3. Receives email verification link
4. Verifies email
5. Can login

**Note:** Recruiters who self-register may need tenant assignment by Platform Admin.

---

### 2. Invitation Flow
**URL:** `/auth/accept-invitation/:token`

**Applicable Roles:**
- TENANT_ADMIN
- BILLING_MANAGER
- PLATFORM_ADMIN
- RECRUITER (when invited by Tenant Admin)

**Process:**
1. Admin sends invitation via platform
2. Invitee receives email with unique token link
3. Clicks link → redirected to `/auth/accept-invitation/:token`
4. Fills in: First Name, Last Name, Password
5. Email is pre-filled from invitation
6. Account created with assigned role
7. Can login immediately

---

### 3. Platform Super Admin Setup
**Initial Setup (One-time):**

**Option A: Database Seed**
```sql
INSERT INTO users (email, role, firstName, lastName, password_hash, isEmailVerified)
VALUES ('admin@talentforge.com', 'PLATFORM_SUPER_ADMIN', 'Super', 'Admin', '<hashed_password>', true);
```

**Option B: CLI Command (Recommended)**
```bash
npm run create-super-admin -- --email=admin@talentforge.com --password=<secure_password>
```

**Option C: Environment Variable**
- Set `SUPER_ADMIN_EMAIL` and `SUPER_ADMIN_PASSWORD` in `.env`
- Backend creates account on first startup if not exists

**Login:**
- Platform Super Admin logs in via standard login page
- System recognizes role and routes to admin dashboard

---

## Permission Matrix

| Feature | Candidate | Recruiter | Tenant Admin | Billing Manager | Platform Admin | Super Admin |
|---------|-----------|-----------|--------------|-----------------|----------------|-------------|
| Apply for jobs | ✓ | - | - | - | - | - |
| Post jobs | - | ✓ | ✓ | - | - | - |
| Manage recruiters | - | - | ✓ | - | - | - |
| View billing | - | - | ✓ | ✓ | - | - |
| Manage billing | - | - | - | ✓ | - | - |
| Manage tenants | - | - | - | - | ✓ | ✓ |
| Invite platform admins | - | - | - | - | - | ✓ |
| System settings | - | - | - | - | - | ✓ |

---

## Implementation Checklist

### Phase 1: Core Authentication ✓
- [x] Public registration (Candidate, Recruiter)
- [x] Login with rate limiting
- [x] Password reset
- [x] Email verification
- [x] Session management

### Phase 2: Invitation System (TODO)
- [ ] Create invitation component (`/auth/accept-invitation/:token`)
- [ ] Add invitation service methods
- [ ] Email invitation templates
- [ ] Token generation and validation
- [ ] Admin UI to send invitations

### Phase 3: Super Admin Setup (TODO)
- [ ] Database migration for super admin
- [ ] CLI command for super admin creation
- [ ] Environment-based super admin setup
- [ ] Documentation for deployment

### Phase 4: Role-Based Access Control (TODO)
- [ ] Route guards by role
- [ ] Component-level permission checks
- [ ] API authorization
- [ ] Admin dashboards by role

---

## Routes Structure

```
/auth
  /login                    - All users
  /register                 - Public (Candidate, Recruiter)
  /forgot-password          - All users
  /reset-password/:token    - All users
  /verify-email/:token      - All users
  /accept-invitation/:token - Invited users only

/dashboard
  /candidate                - CANDIDATE
  /recruiter                - RECRUITER
  /tenant-admin             - TENANT_ADMIN
  /billing                  - BILLING_MANAGER
  /platform-admin           - PLATFORM_ADMIN, PLATFORM_SUPER_ADMIN
```

---

## Security Considerations

1. **Invitation Tokens:**
   - Single-use tokens
   - Expire after 7 days
   - Cryptographically secure (UUID v4 or JWT)

2. **Super Admin:**
   - Never exposed in public registration
   - Strong password requirements
   - 2FA recommended
   - Audit logging for all actions

3. **Role Assignment:**
   - Only higher roles can invite lower roles
   - Tenant isolation enforced
   - Role changes logged

4. **Email Verification:**
   - Required for all users
   - Prevents spam registrations
   - Validates email ownership

---

## Backend API Endpoints (Required)

```typescript
// Invitation endpoints
POST   /api/admin/invitations              - Send invitation
GET    /api/admin/invitations              - List invitations
GET    /api/invitations/:token             - Validate invitation token
POST   /api/invitations/:token/accept      - Accept invitation
DELETE /api/admin/invitations/:id          - Revoke invitation

// Super admin setup
POST   /api/setup/super-admin              - Create super admin (one-time, secured)
```

---

## Next Steps

1. **Immediate:** Update role model ✓
2. **Next:** Create accept-invitation component
3. **Then:** Implement invitation management UI for admins
4. **Finally:** Setup super admin creation process

---

**Questions or clarifications needed?**
Contact the development team.
