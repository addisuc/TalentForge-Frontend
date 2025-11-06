# Candidate-User Separation Refactoring Plan

## 🎯 Objective
Separate candidate-specific data from platform user data for proper data normalization and scalability.

---

## 📊 Current State Analysis

### Backend - Users Table (auth-service)
**Current Fields:**
- ✅ id, tenant_id, email, password_hash
- ✅ first_name, last_name, role, status
- ✅ permissions, last_login
- ✅ is_email_verified, email_verification_token
- ✅ password_reset_token
- ✅ Audit fields (created_at, updated_at, etc.)

**Status:** ✅ Clean - No candidate-specific fields

### Backend - Candidates Table (database)
**Current Fields:**
- ✅ id, tenant_id, user_id (FK to users)
- ✅ first_name, last_name, email, phone
- ✅ address, current_title, current_company
- ✅ current_salary, desired_salary
- ✅ availability_date, work_authorization
- ✅ willing_to_relocate, skills (JSONB)
- ✅ experience_years, education (JSONB)
- ✅ source, status, notes
- ✅ Audit fields

**Missing Fields:**
- ❌ headline
- ❌ summary/bio
- ❌ linkedin_url
- ❌ github_url
- ❌ portfolio_url
- ❌ resume_url
- ❌ profile_photo_url
- ❌ is_public (profile visibility)
- ❌ location (separate from address)

### Frontend - User Model
**Current Fields (user.model.ts):**
- ✅ id, email, firstName, lastName, role
- ✅ isEmailVerified, createdAt, updatedAt
- ❌ headline, profilePhotoUrl, isPublic (SHOULD BE IN CANDIDATE)
- ❌ linkedinUrl, githubUrl, portfolioUrl (SHOULD BE IN CANDIDATE)
- ❌ phoneNumber, location, experience, skills (SHOULD BE IN CANDIDATE)

**Status:** ❌ Mixed - Has candidate-specific fields

---

## 🔧 Required Changes

### BACKEND CHANGES

#### 1. Database Migration (V055__enhance_candidates_table.sql)
```sql
-- Add missing candidate profile fields
ALTER TABLE candidates
ADD COLUMN headline VARCHAR(255),
ADD COLUMN summary TEXT,
ADD COLUMN linkedin_url VARCHAR(500),
ADD COLUMN github_url VARCHAR(500),
ADD COLUMN portfolio_url VARCHAR(500),
ADD COLUMN resume_url VARCHAR(500),
ADD COLUMN profile_photo_url VARCHAR(500),
ADD COLUMN is_public BOOLEAN DEFAULT TRUE,
ADD COLUMN location VARCHAR(255);

-- Add index for user_id lookup
CREATE INDEX idx_candidates_user_id ON candidates(user_id);

-- Add constraint to ensure user_id is unique for CANDIDATE role
CREATE UNIQUE INDEX idx_candidates_user_id_unique 
ON candidates(user_id) 
WHERE user_id IS NOT NULL;
```

#### 2. Create Candidate Entity (application-service or user-service)
**File:** `src/main/java/com/talentforge/application/entity/Candidate.java`
```java
@Entity
@Table(name = "candidates")
public class Candidate {
    @Id
    private UUID id;
    
    @Column(name = "tenant_id")
    private UUID tenantId;
    
    @Column(name = "user_id")
    private UUID userId;
    
    // Basic info
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String location;
    
    // Profile fields
    private String headline;
    private String summary;
    
    // Social links
    @Column(name = "linkedin_url")
    private String linkedinUrl;
    
    @Column(name = "github_url")
    private String githubUrl;
    
    @Column(name = "portfolio_url")
    private String portfolioUrl;
    
    // Files
    @Column(name = "resume_url")
    private String resumeUrl;
    
    @Column(name = "profile_photo_url")
    private String profilePhotoUrl;
    
    // Skills and experience
    @Column(columnDefinition = "jsonb")
    private List<String> skills;
    
    @Column(name = "experience_years")
    private Integer experienceYears;
    
    @Column(columnDefinition = "jsonb")
    private List<Education> education;
    
    // Settings
    @Column(name = "is_public")
    private Boolean isPublic = true;
    
    private String status;
    
    // Audit fields
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    
    // Getters and setters...
}
```

#### 3. Create CandidateRepository
```java
public interface CandidateRepository extends JpaRepository<Candidate, UUID> {
    Optional<Candidate> findByUserId(UUID userId);
    Optional<Candidate> findByEmail(String email);
    List<Candidate> findByTenantId(UUID tenantId);
}
```

#### 4. Create CandidateService
```java
@Service
public class CandidateService {
    public Candidate getCandidateByUserId(UUID userId);
    public Candidate updateCandidateProfile(UUID candidateId, UpdateCandidateRequest request);
    public String uploadResume(UUID candidateId, MultipartFile file);
    public String uploadProfilePhoto(UUID candidateId, MultipartFile file);
}
```

#### 5. Create CandidateController
```java
@RestController
@RequestMapping("/api/candidates")
public class CandidateController {
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<CandidateResponse> getCandidateByUserId(@PathVariable UUID userId);
    
    @PutMapping("/{candidateId}")
    public ResponseEntity<CandidateResponse> updateProfile(
        @PathVariable UUID candidateId,
        @RequestBody UpdateCandidateRequest request
    );
    
    @PostMapping("/{candidateId}/resume")
    public ResponseEntity<FileUploadResponse> uploadResume(
        @PathVariable UUID candidateId,
        @RequestParam("file") MultipartFile file
    );
    
    @PostMapping("/{candidateId}/photo")
    public ResponseEntity<FileUploadResponse> uploadPhoto(
        @PathVariable UUID candidateId,
        @RequestParam("file") MultipartFile file
    );
}
```

#### 6. Update UserService
- Remove candidate-specific field handling
- Keep only: firstName, lastName, email, role, status

---

### FRONTEND CHANGES

#### 1. Clean User Model (user.model.ts)
```typescript
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;
  tenantId?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### 2. Create Candidate Model (candidate.model.ts) ✅ DONE
Already created with all necessary fields.

#### 3. Create CandidateService ✅ DONE
Already created with API methods.

#### 4. Update CandidateProfileComponent
- Use UserService for basic user info (name, email)
- Use CandidateService for profile data
- Implement file upload for resume and photo
- Save to candidates table via API

#### 5. Update UserService
- Remove UpdateUserRequest fields: phoneNumber, location, experience, skills
- Keep only: firstName, lastName

---

## 📋 Implementation Steps

### Phase 1: Backend (2-3 hours)
1. ✅ Create database migration V055
2. ✅ Create Candidate entity
3. ✅ Create CandidateRepository
4. ✅ Create CandidateService
5. ✅ Create CandidateController
6. ✅ Add file upload service (S3 or local)
7. ✅ Test endpoints with Postman

### Phase 2: Frontend (1-2 hours)
1. ✅ Clean User model (remove candidate fields)
2. ✅ Update Candidate model (already done)
3. ✅ Update CandidateService (already done)
4. ✅ Update CandidateProfileComponent
5. ✅ Test profile page functionality

### Phase 3: Data Migration (1 hour)
1. ✅ Create script to migrate existing user data to candidates table
2. ✅ Run migration on development database
3. ✅ Verify data integrity

### Phase 4: Testing (1 hour)
1. ✅ Test candidate registration flow
2. ✅ Test profile update
3. ✅ Test file uploads
4. ✅ Test data retrieval

---

## 🎯 Success Criteria

- ✅ Users table contains only authentication/platform data
- ✅ Candidates table contains all candidate-specific data
- ✅ Profile page loads and saves correctly
- ✅ File uploads work (resume, photo)
- ✅ No breaking changes to existing functionality
- ✅ All tests pass

---

## 🚨 Breaking Changes

### API Changes
- `PUT /api/users/{id}` - Will no longer accept: phoneNumber, location, experience, skills
- `GET /api/users/profile/{id}` - Will no longer return candidate-specific fields
- New endpoints:
  - `GET /api/candidates/user/{userId}`
  - `PUT /api/candidates/{candidateId}`
  - `POST /api/candidates/{candidateId}/resume`
  - `POST /api/candidates/{candidateId}/photo`

### Data Migration Required
- Existing candidate data in users table needs to be migrated to candidates table

---

## 📝 Rollback Plan

If issues arise:
1. Keep V055 migration but don't drop user table columns yet
2. Revert frontend to use UserService
3. Fix issues
4. Re-deploy

---

**Estimated Total Time:** 5-7 hours
**Priority:** High
**Risk Level:** Medium (requires data migration)
**Status:** Ready to implement
