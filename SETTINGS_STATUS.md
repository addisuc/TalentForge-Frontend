# Settings Implementation Status

**Date:** 2024  
**Status:** Frontend Complete, Backend Needed

---

## Current Status

### ✅ Frontend (Complete)
- Settings page UI implemented
- Tab navigation (Profile, Notifications, Security, Organization)
- Forms with validation
- Role-based access (Organization tab for admins)
- Responsive design
- Accessibility features
- Route configured: `/settings`

### ⚠️ Backend (Needs Implementation)
- **Database:** Partial (notification_settings table exists, but incomplete)
- **API Endpoints:** Not implemented
- **Service Layer:** Not implemented

---

## What Exists in Backend

### Database Tables (Partial)
From `V010__add_user_preferences.sql`:
- `notification_settings` table ✅
- `users.preferences` JSONB column ✅

**Missing Tables:**
- `user_settings` (theme, language, timezone, date/time formats)
- `organization_settings` (company info, job posting rules)
- `privacy_settings` (profile visibility, search indexing)
- `security_settings` (2FA, session timeout, login alerts)

### API Endpoints
**Status:** None exist

**Needed:**
```
GET    /api/settings/user
PUT    /api/settings/user
GET    /api/settings/organization
PUT    /api/settings/organization
POST   /api/settings/change-password
```

---

## Implementation Plan

### Option 1: Use Existing Structure (Recommended)
Leverage existing `users.preferences` JSONB column and `notification_settings` table.

**Advantages:**
- Minimal database changes
- Flexible schema (JSONB)
- Faster implementation

**Implementation:**
1. Add endpoints to `user-service/UserController.java`
2. Store user settings in `users.preferences` JSONB
3. Use existing `notification_settings` table
4. Add organization settings to tenant table or new JSONB column

### Option 2: Full Schema Implementation
Create all dedicated tables from `DATABASE_SCHEMA.sql`.

**Advantages:**
- Structured data
- Better query performance
- Type safety

**Implementation:**
1. Run `DATABASE_SCHEMA.sql` migration
2. Create Settings entities and repositories
3. Create SettingsService
4. Create SettingsController
5. Add to user-service or create new settings-service

---

## Quick Implementation (Option 1)

### 1. Add to UserController.java

```java
@GetMapping("/settings")
public ResponseEntity<Map<String, Object>> getUserSettings(HttpServletRequest request) {
    UUID userId = extractUserId(request);
    UUID tenantId = extractTenantId(request);
    
    // Get user preferences from JSONB column
    Map<String, Object> settings = userService.getUserSettings(userId, tenantId);
    return ResponseEntity.ok(settings);
}

@PutMapping("/settings")
public ResponseEntity<Map<String, Object>> updateUserSettings(
        @RequestBody Map<String, Object> settings,
        HttpServletRequest request) {
    UUID userId = extractUserId(request);
    UUID tenantId = extractTenantId(request);
    
    Map<String, Object> updated = userService.updateUserSettings(userId, tenantId, settings);
    return ResponseEntity.ok(updated);
}

@GetMapping("/settings/organization")
@PreAuthorize("hasAnyRole('TENANT_ADMIN', 'PLATFORM_ADMIN')")
public ResponseEntity<Map<String, Object>> getOrganizationSettings(HttpServletRequest request) {
    UUID tenantId = extractTenantId(request);
    Map<String, Object> settings = userService.getOrganizationSettings(tenantId);
    return ResponseEntity.ok(settings);
}

@PutMapping("/settings/organization")
@PreAuthorize("hasAnyRole('TENANT_ADMIN', 'PLATFORM_ADMIN')")
public ResponseEntity<Map<String, Object>> updateOrganizationSettings(
        @RequestBody Map<String, Object> settings,
        HttpServletRequest request) {
    UUID tenantId = extractTenantId(request);
    Map<String, Object> updated = userService.updateOrganizationSettings(tenantId, settings);
    return ResponseEntity.ok(updated);
}

@PostMapping("/settings/change-password")
public ResponseEntity<Map<String, String>> changePassword(
        @RequestBody ChangePasswordRequest request,
        HttpServletRequest httpRequest) {
    UUID userId = extractUserId(httpRequest);
    userService.changePassword(userId, request.getCurrentPassword(), request.getNewPassword());
    return ResponseEntity.ok(Map.of("message", "Password changed successfully"));
}
```

### 2. Add to UserService.java

```java
public Map<String, Object> getUserSettings(UUID userId, UUID tenantId) {
    User user = userRepository.findByIdAndTenantId(userId, tenantId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    
    // Return preferences JSONB as Map
    return user.getPreferences() != null ? user.getPreferences() : new HashMap<>();
}

public Map<String, Object> updateUserSettings(UUID userId, UUID tenantId, Map<String, Object> settings) {
    User user = userRepository.findByIdAndTenantId(userId, tenantId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    
    user.setPreferences(settings);
    userRepository.save(user);
    return settings;
}

// Similar methods for organization settings
```

### 3. Update Frontend API URL

Change in `settings.service.ts`:
```typescript
private apiUrl = '/api/users/settings';  // Instead of '/api/settings'
```

---

## Recommendation

**Use Option 1 (Quick Implementation)** because:
1. Leverages existing database structure
2. Minimal changes required
3. Can be implemented in 1-2 hours
4. Frontend already complete and ready
5. Can migrate to dedicated tables later if needed

---

## Next Steps

1. Implement endpoints in `user-service/UserController.java`
2. Add service methods in `UserService.java`
3. Update frontend API URL
4. Test settings functionality
5. Deploy

**Estimated Time:** 2-3 hours for backend implementation
