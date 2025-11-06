# Settings Implementation Guide

**Status:** ✅ Complete  
**Date:** 2024

---

## Overview

Comprehensive settings system for TalentForge with role-based access and persistent storage.

---

## Features Implemented

### 1. User Settings (All Roles)
- **Appearance:** Theme selection (light/dark/auto)
- **Localization:** Language, timezone, date/time formats
- **Notifications:** Email, push, SMS preferences
- **Security:** Password change, session management

### 2. Organization Settings (Admin Only)
- **Company Information:** Name, email, phone, website, address
- **Company Details:** Industry, size, logo
- **Job Posting Rules:** Public visibility, approval requirements, auto-archive

---

## Frontend Implementation

### Files Created

1. **Models** (`src/app/core/models/settings.model.ts`)
   - UserSettings
   - OrganizationSettings
   - NotificationSettings
   - PrivacySettings
   - SecuritySettings

2. **Service** (`src/app/core/services/settings.service.ts`)
   - getUserSettings()
   - updateUserSettings()
   - getOrganizationSettings()
   - updateOrganizationSettings()
   - changePassword()

3. **Component** (`src/app/features/settings/`)
   - settings.component.ts
   - settings.component.html
   - settings.component.scss

### UI Features

- **Tab Navigation:** Profile, Notifications, Security, Organization
- **Responsive Design:** Mobile-friendly layout
- **Form Validation:** Real-time validation with error messages
- **Save Feedback:** Success/error messages
- **Role-Based Access:** Organization tab only for admins
- **Accessibility:** ARIA labels, keyboard navigation

---

## Backend Requirements

### API Endpoints Needed

```
GET    /api/settings/user                    - Get user settings
PUT    /api/settings/user                    - Update user settings
GET    /api/settings/organization            - Get organization settings
PUT    /api/settings/organization            - Update organization settings
POST   /api/settings/change-password         - Change password
```

### Database Schema

See `DATABASE_SCHEMA.sql` for complete schema including:

**Tables:**
- `user_settings` - User preferences
- `organization_settings` - Company settings
- `notification_settings` - Notification preferences
- `privacy_settings` - Privacy controls
- `security_settings` - Security options

**Features:**
- Foreign key constraints
- Unique constraints per user/organization
- Automatic timestamp updates
- Default settings on user creation
- Indexes for performance

---

## Settings Categories

### Profile & Preferences
| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| theme | select | light | UI theme |
| language | select | en | Interface language |
| timezone | select | UTC | User timezone |
| dateFormat | select | MM/DD/YYYY | Date display format |
| timeFormat | select | 12h | Time display format |

### Notifications
| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| emailNotifications | boolean | true | Email alerts |
| pushNotifications | boolean | true | Browser notifications |
| smsNotifications | boolean | false | SMS alerts |

### Security
| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| currentPassword | string | - | Current password |
| newPassword | string | - | New password (min 8 chars) |
| sessionTimeout | number | 1800 | Timeout in seconds |

### Organization (Admin Only)
| Setting | Type | Required | Description |
|---------|------|----------|-------------|
| companyName | string | Yes | Company name |
| companyEmail | email | Yes | Company email |
| companyPhone | string | No | Phone number |
| companyWebsite | url | No | Website URL |
| companyAddress | text | No | Physical address |
| industry | select | No | Industry type |
| companySize | select | No | Employee count |
| allowPublicJobPostings | boolean | No | Public job visibility |
| requireApprovalForJobPostings | boolean | No | Admin approval required |
| autoArchiveJobsAfterDays | number | No | Auto-archive duration |

---

## Usage

### For Users
1. Navigate to Settings from main menu
2. Select desired tab (Profile/Notifications/Security)
3. Update settings
4. Click "Save Changes"

### For Admins
1. Access Organization tab (additional to user settings)
2. Update company information
3. Configure job posting rules
4. Save changes

---

## Backend Implementation Guide

### 1. Create Settings Tables
```sql
-- Run DATABASE_SCHEMA.sql
psql -U postgres -d talentforge < DATABASE_SCHEMA.sql
```

### 2. Create Settings Service (Spring Boot)
```java
@Service
public class SettingsService {
    @Autowired
    private UserSettingsRepository userSettingsRepo;
    
    @Autowired
    private OrganizationSettingsRepository orgSettingsRepo;
    
    public UserSettings getUserSettings(UUID userId) {
        return userSettingsRepo.findByUserId(userId)
            .orElseGet(() -> createDefaultUserSettings(userId));
    }
    
    public UserSettings updateUserSettings(UUID userId, UserSettings settings) {
        settings.setUserId(userId);
        return userSettingsRepo.save(settings);
    }
    
    // Similar methods for organization settings
}
```

### 3. Create REST Controller
```java
@RestController
@RequestMapping("/api/settings")
public class SettingsController {
    @Autowired
    private SettingsService settingsService;
    
    @GetMapping("/user")
    public ResponseEntity<UserSettings> getUserSettings() {
        UUID userId = getCurrentUserId();
        return ResponseEntity.ok(settingsService.getUserSettings(userId));
    }
    
    @PutMapping("/user")
    public ResponseEntity<UserSettings> updateUserSettings(@RequestBody UserSettings settings) {
        UUID userId = getCurrentUserId();
        return ResponseEntity.ok(settingsService.updateUserSettings(userId, settings));
    }
    
    // Similar endpoints for organization settings
}
```

---

## Testing

### Manual Testing Checklist
- [ ] Load settings page
- [ ] Update profile preferences
- [ ] Change theme and verify UI updates
- [ ] Update notification preferences
- [ ] Change password successfully
- [ ] Admin: Update organization settings
- [ ] Verify settings persist after logout/login
- [ ] Test form validation
- [ ] Test error handling

### Unit Tests Needed
- [ ] SettingsService tests
- [ ] SettingsComponent tests
- [ ] Form validation tests

---

## Security Considerations

1. **Authorization:** Only user can update their own settings
2. **Organization Settings:** Only admins can access/update
3. **Password Change:** Requires current password verification
4. **Input Validation:** All inputs validated on frontend and backend
5. **SQL Injection:** Use parameterized queries
6. **XSS Prevention:** Sanitize all user inputs

---

## Future Enhancements

- [ ] Two-factor authentication toggle
- [ ] Email notification frequency settings
- [ ] Custom notification rules
- [ ] API key management
- [ ] Webhook configurations
- [ ] Data export/import
- [ ] Account deletion
- [ ] Activity log

---

**Status:** Frontend complete, backend implementation required.
