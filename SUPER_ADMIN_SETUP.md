# Super Admin Setup Guide

## Overview

The Platform Super Admin is the root administrator account with full system access. This account must be created before the platform can be fully operational.

---

## Setup Methods

### Method 1: Database Seed (Recommended for Production)

Create a database migration/seed file:

```sql
-- Create super admin user
INSERT INTO users (
  id,
  email,
  password_hash,
  first_name,
  last_name,
  role,
  is_email_verified,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'admin@talentforge.com',
  -- Use bcrypt to hash password: 'SuperSecure123!'
  '$2b$10$YourHashedPasswordHere',
  'Super',
  'Admin',
  'PLATFORM_SUPER_ADMIN',
  true,
  NOW(),
  NOW()
);
```

**Steps:**
1. Hash your password using bcrypt (rounds: 10)
2. Replace `$2b$10$YourHashedPasswordHere` with actual hash
3. Run migration during deployment
4. Store credentials securely (password manager)

---

### Method 2: CLI Command (Recommended for Development)

Create a Node.js script: `scripts/create-super-admin.js`

```javascript
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

async function createSuperAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: node create-super-admin.js <email> <password>');
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });

  try {
    await pool.query(`
      INSERT INTO users (email, password_hash, first_name, last_name, role, is_email_verified)
      VALUES ($1, $2, 'Super', 'Admin', 'PLATFORM_SUPER_ADMIN', true)
      ON CONFLICT (email) DO NOTHING
    `, [email, passwordHash]);
    
    console.log('✓ Super admin created successfully');
  } catch (error) {
    console.error('✗ Error:', error.message);
  } finally {
    await pool.end();
  }
}

createSuperAdmin();
```

**Usage:**
```bash
npm run create-super-admin admin@talentforge.com "YourSecurePassword123!"
```

**Add to package.json:**
```json
{
  "scripts": {
    "create-super-admin": "node scripts/create-super-admin.js"
  }
}
```

---

### Method 3: Environment Variable (Auto-Setup)

Add to backend startup code:

```typescript
// src/main.ts or app initialization
async function ensureSuperAdmin() {
  const email = process.env.SUPER_ADMIN_EMAIL;
  const password = process.env.SUPER_ADMIN_PASSWORD;

  if (!email || !password) {
    console.warn('⚠ SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD not set');
    return;
  }

  const existingAdmin = await userRepository.findByEmail(email);
  
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(password, 10);
    
    await userRepository.create({
      email,
      passwordHash,
      firstName: 'Super',
      lastName: 'Admin',
      role: UserRole.PLATFORM_SUPER_ADMIN,
      isEmailVerified: true
    });
    
    console.log('✓ Super admin auto-created');
  }
}

// Call during app bootstrap
await ensureSuperAdmin();
```

**Environment Variables (.env):**
```env
SUPER_ADMIN_EMAIL=admin@talentforge.com
SUPER_ADMIN_PASSWORD=YourSecurePassword123!
```

**⚠️ Security Note:** Remove these env vars after first run in production!

---

## Login Process

1. Navigate to: `http://localhost:4200/auth/login`
2. Enter super admin credentials
3. System recognizes `PLATFORM_SUPER_ADMIN` role
4. Redirects to: `/platform-admin` dashboard

---

## Post-Setup Tasks

### 1. Change Default Password
```typescript
// Implement in settings
PUT /api/users/me/password
{
  "currentPassword": "YourSecurePassword123!",
  "newPassword": "NewSecurePassword456!"
}
```

### 2. Enable Two-Factor Authentication (Recommended)
```typescript
POST /api/users/me/2fa/enable
```

### 3. Create Additional Platform Admins
- Navigate to: `/admin/invite-user`
- Send invitation with role: `PLATFORM_ADMIN`
- They receive email with setup link

### 4. Audit Logging
Ensure all super admin actions are logged:
```typescript
// Log format
{
  userId: 'super-admin-id',
  action: 'CREATE_TENANT',
  resource: 'tenant-123',
  timestamp: '2024-01-15T10:30:00Z',
  ipAddress: '192.168.1.1'
}
```

---

## Security Best Practices

### Password Requirements
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, special chars
- Not in common password lists
- Rotated every 90 days

### Access Control
- Limit super admin accounts (1-2 maximum)
- Use regular `PLATFORM_ADMIN` for daily operations
- Super admin only for critical tasks:
  - Creating platform admins
  - System configuration
  - Emergency access

### Monitoring
- Alert on super admin logins
- Review super admin actions weekly
- Require approval for destructive operations

### Backup Access
- Store recovery codes securely
- Document account recovery process
- Test recovery process quarterly

---

## Troubleshooting

### Cannot Login
1. Verify email is correct
2. Check password (case-sensitive)
3. Confirm role in database:
   ```sql
   SELECT email, role FROM users WHERE email = 'admin@talentforge.com';
   ```
4. Check `is_email_verified = true`

### Wrong Dashboard After Login
1. Verify role is `PLATFORM_SUPER_ADMIN` (not `PLATFORM_ADMIN`)
2. Clear browser cache/cookies
3. Check route guards in `app.routes.ts`

### Locked Out
1. Use database access to reset:
   ```sql
   UPDATE users 
   SET failed_login_attempts = 0, 
       locked_until = NULL 
   WHERE email = 'admin@talentforge.com';
   ```

---

## Production Checklist

- [ ] Super admin created via secure method
- [ ] Strong password set (12+ chars)
- [ ] Email verified
- [ ] 2FA enabled
- [ ] Audit logging active
- [ ] Backup access documented
- [ ] Environment variables removed (if used)
- [ ] Access monitored
- [ ] Recovery process tested
- [ ] Team trained on super admin usage

---

## Support

For issues or questions:
- Check logs: `/var/log/talentforge/`
- Contact: devops@talentforge.com
- Emergency: Use database direct access

---

**Last Updated:** 2024
**Version:** 1.0
