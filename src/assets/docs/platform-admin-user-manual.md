# TalentForge - Platform Admin User Manual

**Version:** 1.0  
**Last Updated:** December 2024

---

## Welcome Platform Administrators!

This guide covers platform administration and system management operations.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Tenant Management](#tenant-management)
4. [User Management](#user-management)
5. [Billing Management](#billing-management)
6. [System Configuration](#system-configuration)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Security & Compliance](#security--compliance)

---

## Getting Started

### Platform Admin Role

As a platform administrator, you can:
- Manage all tenants (organizations)
- Oversee user accounts across platform
- Configure billing and subscriptions
- Monitor system performance
- Manage platform-wide settings
- Handle security and compliance
- Generate platform analytics

---

## Dashboard Overview

### Main Dashboard

1. **Platform Metrics**: System-wide statistics
2. **Active Tenants**: Total organizations
3. **Total Users**: All platform users
4. **Revenue Metrics**: Subscription revenue
5. **System Health**: Performance indicators
6. **Recent Activity**: Platform events

### Quick Actions

- Create new tenant
- Manage subscriptions
- View system logs
- Generate reports
- Configure settings

---

## Tenant Management

### View All Tenants

1. Go to **"Tenants"**
2. View list of all organizations
3. Filter by:
   - Status (Active, Suspended, Trial)
   - Subscription tier
   - Registration date
   - User count

### Create New Tenant

1. Click **"Create Tenant"**
2. Enter organization details:
   - **Company Name**
   - **Domain**: Subdomain or custom
   - **Admin Email**: Primary contact (becomes Tenant Admin)
   - **Subscription Plan**: Select tier
   - **Trial Period**: Enable/disable
3. Configure settings:
   - User limits
   - Feature access
   - Storage quota
   - API limits
4. Click **"Create"**
5. Activation email sent to Tenant Admin
6. Tenant Admin sets up account and can then:
   - Invite recruiters to main platform
   - Create client accounts for Client Portal access

### Edit Tenant

1. Open tenant details
2. Click **"Edit"**
3. Update:
   - Company information
   - Subscription plan
   - Feature flags
   - Limits and quotas
4. Click **"Save Changes"**

### Suspend Tenant

1. Open tenant details
2. Click **"Suspend"**
3. Select reason:
   - Payment failure
   - Terms violation
   - Security concern
   - Requested by tenant
4. Add notes
5. Confirm suspension
6. Tenant notified

### Delete Tenant

1. Open tenant details
2. Click **"Delete"**
3. Confirm data deletion
4. Enter admin password
5. Confirm deletion
6. All tenant data removed

---

## User Management

### View All Users

1. Go to **"Users"**
2. View platform-wide user list
3. Filter by:
   - Role
   - Tenant
   - Status
   - Registration date

### User Details

View user information:
- Personal details
- Tenant affiliation
- Role and permissions (TENANT_ADMIN, RECRUITER, CLIENT, CANDIDATE)
- Activity history
- Login history
- Portal access (Main Platform or Client Portal)
- Subscription status

### User Role Overview

**TENANT_ADMIN**: Organization administrator, manages team and clients  
**RECRUITER**: Recruitment operations, creates client accounts  
**CLIENT**: Client portal access for job requests and candidate review  
**CANDIDATE**: Job seekers using main platform

### Manage User Account

**Activate/Deactivate:**
1. Open user profile
2. Click **"Deactivate"** or **"Activate"**
3. Provide reason
4. Confirm

**Reset Password:**
1. Open user profile
2. Click **"Reset Password"**
3. Send reset link to user
4. Or set temporary password

**Change Role:**
1. Open user profile
2. Click **"Change Role"**
3. Select new role
4. Confirm change

### Bulk User Operations

1. Select multiple users
2. Choose action:
   - Export data
   - Send notification
   - Update status
   - Assign to tenant
3. Confirm bulk action

---

## Billing Management

### Subscription Plans

**View Plans:**
1. Go to **"Billing"** → **"Plans"**
2. View all subscription tiers:
   - Free Trial
   - Starter
   - Professional
   - Enterprise
   - Custom

**Edit Plan:**
1. Click plan to edit
2. Update:
   - Pricing
   - Features
   - Limits
   - Billing cycle
3. Click **"Save"**

### Manage Subscriptions

**View Subscriptions:**
1. Go to **"Subscriptions"**
2. View all active subscriptions
3. Filter by:
   - Plan
   - Status
   - Renewal date
   - Payment method

**Update Subscription:**
1. Open subscription
2. Click **"Edit"**
3. Change:
   - Plan tier
   - Billing cycle
   - Add-ons
4. Click **"Update"**

**Cancel Subscription:**
1. Open subscription
2. Click **"Cancel"**
3. Select cancellation reason
4. Choose:
   - Immediate cancellation
   - End of billing period
5. Confirm

### Payment Management

**View Payments:**
1. Go to **"Payments"**
2. View transaction history
3. Filter by:
   - Date range
   - Status
   - Amount
   - Tenant

**Process Refund:**
1. Open payment
2. Click **"Refund"**
3. Enter refund amount
4. Provide reason
5. Confirm refund

**Handle Failed Payments:**
1. View failed payments
2. Contact tenant
3. Update payment method
4. Retry payment
5. Or suspend account

---

## System Configuration

### Platform Settings

**General Settings:**
1. Go to **"Settings"** → **"General"**
2. Configure:
   - Platform name
   - Default language
   - Time zone
   - Date format
   - Currency

**Email Settings:**
1. Go to **"Settings"** → **"Email"**
2. Configure:
   - SMTP server
   - From address
   - Email templates
   - Notification rules

**Security Settings:**
1. Go to **"Settings"** → **"Security"**
2. Configure:
   - Password policy
   - Session timeout
   - Two-factor authentication
   - IP whitelist
   - Rate limiting

### Feature Flags

1. Go to **"Settings"** → **"Features"**
2. Enable/disable features:
   - New features
   - Beta features
   - Experimental features
3. Set per-tenant or platform-wide
4. Click **"Save"**

### API Configuration

1. Go to **"Settings"** → **"API"**
2. Configure:
   - API keys
   - Rate limits
   - Webhooks
   - OAuth settings
3. Generate API documentation

---

## Monitoring & Analytics

### System Health

**Dashboard Metrics:**
- Server uptime
- Response times
- Error rates
- Database performance
- Cache hit rates
- Queue status

**View Logs:**
1. Go to **"Monitoring"** → **"Logs"**
2. Filter by:
   - Log level (Error, Warning, Info)
   - Service
   - Date range
   - User/Tenant
3. Export logs

**Set Alerts:**
1. Go to **"Monitoring"** → **"Alerts"**
2. Create alert rule:
   - Metric to monitor
   - Threshold
   - Notification channel
3. Click **"Create Alert"**

### Platform Analytics

**Usage Statistics:**
1. Go to **"Analytics"**
2. View metrics:
   - Active users
   - Job postings
   - Applications
   - Interviews
   - API calls

**Revenue Analytics:**
1. Go to **"Analytics"** → **"Revenue"**
2. View:
   - Monthly recurring revenue (MRR)
   - Annual recurring revenue (ARR)
   - Churn rate
   - Customer lifetime value (CLV)
   - Revenue by plan

**Generate Reports:**
1. Select report type
2. Set date range
3. Apply filters
4. Click **"Generate"**
5. Export as PDF or Excel

---

## Security & Compliance

### Security Monitoring

**View Security Events:**
1. Go to **"Security"** → **"Events"**
2. Monitor:
   - Failed login attempts
   - Suspicious activity
   - Data access logs
   - Permission changes

**Manage IP Whitelist:**
1. Go to **"Security"** → **"IP Whitelist"**
2. Add allowed IP ranges
3. Block suspicious IPs
4. Set rules per tenant

### Compliance

**Data Privacy:**
1. Go to **"Compliance"** → **"Privacy"**
2. Manage:
   - GDPR compliance
   - Data retention policies
   - User consent records
   - Data export requests

**Audit Logs:**
1. Go to **"Compliance"** → **"Audit"**
2. View all system changes
3. Track:
   - User actions
   - Configuration changes
   - Data modifications
   - Access logs

**Backup & Recovery:**
1. Go to **"Compliance"** → **"Backups"**
2. Configure:
   - Backup schedule
   - Retention period
   - Storage location
3. Test recovery procedures

---

## User Support

### Support Tickets

**View Tickets:**
1. Go to **"Support"**
2. View all support requests
3. Filter by:
   - Priority
   - Status
   - Tenant
   - Category

**Manage Ticket:**
1. Open ticket
2. Review details
3. Assign to team member
4. Add response
5. Update status
6. Close when resolved

### System Announcements

**Create Announcement:**
1. Go to **"Support"** → **"Announcements"**
2. Click **"New Announcement"**
3. Enter:
   - Title
   - Message
   - Target audience (All/Specific tenants)
   - Priority
   - Display duration
4. Click **"Publish"**

---

## Best Practices

### Tenant Management

✅ Regular tenant health checks  
✅ Proactive subscription management  
✅ Monitor usage patterns  
✅ Respond to issues quickly  
✅ Maintain clear communication

### Security

✅ Regular security audits  
✅ Monitor suspicious activity  
✅ Keep systems updated  
✅ Enforce strong password policies  
✅ Regular backup verification

### Performance

✅ Monitor system metrics  
✅ Optimize database queries  
✅ Scale resources proactively  
✅ Regular performance testing  
✅ Maintain documentation

---

## Troubleshooting

### System Issues

**High Server Load:**
1. Check active users
2. Review resource usage
3. Scale infrastructure
4. Optimize queries
5. Enable caching

**Database Performance:**
1. Check slow queries
2. Review indexes
3. Optimize connections
4. Consider read replicas
5. Archive old data

**Email Delivery Issues:**
1. Check SMTP settings
2. Verify DNS records
3. Review bounce rates
4. Check spam scores
5. Contact email provider

---

## Support

**Platform Admin Support**

**Email**: admin-support@talentforge.app  
**Phone**: 1-800-TALENT-0  
**Hours**: 24/7  
**Emergency**: emergency@talentforge.app  
**Documentation**: https://docs.talentforge.app

---

**Thank you for managing TalentForge!**
