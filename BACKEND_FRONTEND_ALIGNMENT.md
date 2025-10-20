# Backend-Frontend Alignment Analysis

## ❌ MISMATCHES FOUND

### 1. User Roles - CRITICAL MISMATCH

**Frontend Roles** (TalentForge-Frontend):
```typescript
export enum UserRole {
  CANDIDATE = 'CANDIDATE',
  RECRUITER = 'RECRUITER',
  TENANT_ADMIN = 'TENANT_ADMIN',
  BILLING_MANAGER = 'BILLING_MANAGER',
  PLATFORM_ADMIN = 'PLATFORM_ADMIN',
  PLATFORM_SUPER_ADMIN = 'PLATFORM_SUPER_ADMIN'
}
```

**Backend Roles** (TalentForge-Backend):
```java
public enum UserRole {
    SUPER_ADMIN,
    TENANT_ADMIN,
    HR_MANAGER,
    RECRUITER,
    HIRING_MANAGER,
    CANDIDATE
}
```

**Issues:**
- ❌ Backend has `SUPER_ADMIN` vs Frontend has `PLATFORM_SUPER_ADMIN`
- ❌ Backend has `HR_MANAGER` - not in frontend
- ❌ Backend has `HIRING_MANAGER` - not in frontend
- ❌ Backend missing `PLATFORM_ADMIN` - exists in frontend
- ❌ Backend missing `BILLING_MANAGER` - exists in frontend

---

### 2. User Entity Fields

**Frontend User Model**:
```typescript
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;  // ❌ Missing in backend
  createdAt: Date;
  updatedAt: Date;
}
```

**Backend User Entity**:
```java
- id: UUID ✓
- tenantId: UUID (not in frontend)
- email: String ✓
- firstName: String ✓
- lastName: String ✓
- passwordHash: String (not exposed to frontend)
- role: String ✓
- status: String (not in frontend)
- lastLogin: LocalDateTime (not in frontend)
- permissions: Map<String, Object> (not in frontend)
- createdAt: LocalDateTime ✓
- updatedAt: LocalDateTime ✓
- isActive: Boolean (not in frontend)
```

**Issues:**
- ❌ Frontend expects `isEmailVerified` - backend doesn't have it
- ⚠️ Backend has `tenantId` - frontend should include this
- ⚠️ Backend has `status` - frontend should include this
- ⚠️ Backend has `permissions` - frontend should include this

---

### 3. Authentication Endpoints

**Frontend Expects**:
```typescript
POST /api/auth/login ✓
POST /api/auth/register ✓
POST /api/auth/logout ✓
POST /api/auth/forgot-password ❌
POST /api/auth/reset-password ❌
GET  /api/auth/verify-email/:token ❌
POST /api/auth/refresh ✓
GET  /api/auth/me ⚠️ (backend has /profile)
```

**Backend Provides**:
```java
POST /api/auth/login ✓
POST /api/auth/register ✓
POST /api/auth/logout ✓
POST /api/auth/refresh ✓
GET  /api/auth/profile ✓
GET  /api/auth/health ✓
```

**Missing in Backend:**
- ❌ Forgot password endpoint
- ❌ Reset password endpoint
- ❌ Email verification endpoint
- ❌ Resend verification email endpoint

---

### 4. Invitation System - COMPLETELY MISSING

**Frontend Expects**:
```typescript
GET  /api/invitations/:token (validate invitation)
POST /api/invitations/:token/accept (accept invitation)
POST /api/admin/invitations (send invitation)
```

**Backend Provides**:
- ❌ No invitation endpoints
- ❌ No invitation entity
- ❌ No invitation service

---

### 5. Registration Request

**Frontend RegisterRequest**:
```typescript
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  acceptTerms?: boolean;
}
```

**Backend RegisterRequest**:
```java
// Need to check the DTO file
```

---

## ✅ MATCHES

1. **Login/Logout** - Endpoints exist ✓
2. **Token Refresh** - Endpoint exists ✓
3. **Basic User Fields** - id, email, firstName, lastName, role ✓
4. **JWT Authentication** - Both use JWT ✓

---

## 🔧 REQUIRED BACKEND CHANGES

### Priority 1: Critical (Blocking)

1. **Update UserRole Enum**
```java
public enum UserRole {
    CANDIDATE,
    RECRUITER,
    TENANT_ADMIN,
    BILLING_MANAGER,
    PLATFORM_ADMIN,
    PLATFORM_SUPER_ADMIN
}
```

2. **Add Email Verification Fields to User**
```java
@Column(name = "is_email_verified", nullable = false)
private Boolean isEmailVerified = false;

@Column(name = "email_verification_token")
private String emailVerificationToken;

@Column(name = "email_verification_token_expires_at")
private LocalDateTime emailVerificationTokenExpiresAt;
```

3. **Add Password Reset Fields to User**
```java
@Column(name = "password_reset_token")
private String passwordResetToken;

@Column(name = "password_reset_token_expires_at")
private LocalDateTime passwordResetTokenExpiresAt;
```

### Priority 2: High (Required for MVP)

4. **Create Invitation Entity**
```java
@Entity
@Table(name = "invitations")
public class Invitation {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String role;
    
    @Column(nullable = false, unique = true)
    private String token;
    
    @Column(name = "expires_at", nullable = false)
    private LocalDateTime expiresAt;
    
    @Column(name = "invited_by", nullable = false)
    private UUID invitedBy;
    
    @Column(name = "accepted_at")
    private LocalDateTime acceptedAt;
    
    @Column(name = "tenant_id")
    private UUID tenantId;
    
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
```

5. **Add Password Reset Endpoints**
```java
@PostMapping("/forgot-password")
public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request)

@PostMapping("/reset-password")
public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request)
```

6. **Add Email Verification Endpoints**
```java
@GetMapping("/verify-email/{token}")
public ResponseEntity<?> verifyEmail(@PathVariable String token)

@PostMapping("/resend-verification")
public ResponseEntity<?> resendVerification(@RequestBody ResendVerificationRequest request)
```

7. **Add Invitation Endpoints**
```java
@GetMapping("/invitations/{token}")
public ResponseEntity<?> validateInvitation(@PathVariable String token)

@PostMapping("/invitations/{token}/accept")
public ResponseEntity<?> acceptInvitation(@PathVariable String token, @RequestBody AcceptInvitationRequest request)

@PostMapping("/admin/invitations")
public ResponseEntity<?> sendInvitation(@RequestBody SendInvitationRequest request)
```

### Priority 3: Medium (Enhancement)

8. **Update User Response DTO**
```java
public class UserResponse {
    private UUID id;
    private String email;
    private String firstName;
    private String lastName;
    private String role;
    private Boolean isEmailVerified;
    private UUID tenantId;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

9. **Add Email Service**
```java
@Service
public class EmailService {
    public void sendVerificationEmail(String email, String token);
    public void sendPasswordResetEmail(String email, String token);
    public void sendInvitationEmail(String email, String token, String role);
}
```

---

## 🔧 REQUIRED FRONTEND CHANGES

### Priority 1: Update User Model

```typescript
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;
  tenantId?: string;  // ADD
  status?: string;    // ADD
  createdAt: Date;
  updatedAt: Date;
}
```

### Priority 2: Update API Endpoint

Change `/api/auth/me` to `/api/auth/profile` in AuthFacadeService

---

## 📋 IMPLEMENTATION CHECKLIST

### Backend Tasks
- [ ] Update UserRole enum (6 roles)
- [ ] Add isEmailVerified to User entity
- [ ] Add password reset fields to User entity
- [ ] Create Invitation entity
- [ ] Create InvitationRepository
- [ ] Create InvitationService
- [ ] Add forgot-password endpoint
- [ ] Add reset-password endpoint
- [ ] Add verify-email endpoint
- [ ] Add resend-verification endpoint
- [ ] Add invitation endpoints (3 endpoints)
- [ ] Create EmailService
- [ ] Update RegisterRequest to include role
- [ ] Update UserResponse DTO
- [ ] Add database migrations

### Frontend Tasks
- [ ] Update User interface (add tenantId, status)
- [ ] Change /me to /profile endpoint
- [ ] Test all auth flows with real backend

---

## 🎯 RECOMMENDED APPROACH

1. **Phase 1: Fix Role Mismatch** (1 day)
   - Update backend UserRole enum
   - Update database migration
   - Test login/register with new roles

2. **Phase 2: Email Verification** (2 days)
   - Add fields to User entity
   - Implement verification endpoints
   - Setup email service (use mock for dev)
   - Test verification flow

3. **Phase 3: Password Reset** (1 day)
   - Add password reset endpoints
   - Test reset flow

4. **Phase 4: Invitation System** (3 days)
   - Create Invitation entity
   - Implement invitation endpoints
   - Test invitation flow

5. **Phase 5: Integration Testing** (2 days)
   - Connect frontend to backend
   - End-to-end testing
   - Fix any issues

**Total Estimated Time: 9 days**

---

## 🚨 BREAKING CHANGES

1. **UserRole enum change** - Will break existing users in database
   - Need migration script to map old roles to new roles:
     - SUPER_ADMIN → PLATFORM_SUPER_ADMIN
     - HR_MANAGER → TENANT_ADMIN (or RECRUITER?)
     - HIRING_MANAGER → TENANT_ADMIN (or remove?)

2. **User entity changes** - Need database migrations

---

## 📞 NEXT STEPS

1. Review this document
2. Decide on role mapping strategy
3. Create backend implementation plan
4. Start with Priority 1 changes
5. Test incrementally

---

**Last Updated:** 2024
**Status:** ⚠️ Mismatches Identified - Action Required
