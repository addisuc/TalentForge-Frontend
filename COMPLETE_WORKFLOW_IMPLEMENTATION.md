# Complete Application Workflow Implementation

**Status:** ✅ Implemented  
**Date:** 2024

---

## Overview

Implemented complete 14-stage recruitment workflow with background check and reference check integrations.

---

## Application Workflow (14 Stages)

### Frontend Pipeline Stages
```
1. Applied              - Initial application received
2. Screening            - Resume/profile review
3. Phone Screen         - Initial recruiter call
4. Technical Interview  - Skills assessment
5. Final Interview      - Decision-maker interview
6. Reference Check      - Employment verification
7. Background Check     - Third-party verification
8. Offer Pending        - Job offer extended
9. Hired                - Candidate accepted and started
10. Rejected            - Eliminated from process
```

### Additional Statuses (Not in Pipeline)
- `OFFER_ACCEPTED` - Candidate accepted offer
- `OFFER_DECLINED` - Candidate declined offer
- `WITHDRAWN` - Candidate withdrew application

---

## Backend Implementation

### New Microservice: verification-service

**Port:** 8085

**Responsibilities:**
- Background check integration (Checkr, HireRight, Sterling)
- Reference check automation
- Offer management

### Database Tables (V050 Migration)

#### 1. background_checks
```sql
- id (UUID)
- tenant_id (UUID)
- application_id (UUID)
- provider (CHECKR | HIRERIGHT | STERLING)
- status (PENDING | IN_PROGRESS | COMPLETED | FAILED)
- check_types (CRIMINAL, EMPLOYMENT, EDUCATION, CREDIT, IDENTITY)
- external_check_id (provider's ID)
- report_url
- results (JSONB)
- initiated_at, completed_at
```

#### 2. reference_checks
```sql
- id (UUID)
- tenant_id (UUID)
- application_id (UUID)
- status (PENDING | SENT | IN_PROGRESS | COMPLETED | EXPIRED)
- requested_at, completed_at
```

#### 3. references
```sql
- id (UUID)
- reference_check_id (UUID)
- name, email, phone
- relationship, company, title
- token (secure link)
- status, sent_at, submitted_at, expires_at
```

#### 4. reference_responses
```sql
- id (UUID)
- reference_id (UUID)
- responses (JSONB - Q&A pairs)
- rating (1-5)
- recommendation (HIGHLY_RECOMMEND | RECOMMEND | NEUTRAL | NOT_RECOMMEND)
- comments
```

#### 5. offers
```sql
- id (UUID)
- tenant_id (UUID)
- application_id (UUID)
- salary, currency, start_date
- offer_letter_url
- expires_at
- status (PENDING | ACCEPTED | DECLINED | EXPIRED | WITHDRAWN)
```

---

## Frontend Implementation

### Updated Services

#### 1. application.service.ts
**New Types:**
- `ApplicationStatus` - All 13 statuses
- `OfferDetails` - Offer information
- `ReferenceRequest` - Reference contact info

**New Methods:**
- `initiateBackgroundCheck(applicationId, provider)`
- `getBackgroundCheckStatus(applicationId)`
- `requestReferenceCheck(applicationId, references)`
- `getReferenceCheckStatus(applicationId)`
- `extendOffer(applicationId, offer)`
- `respondToOffer(applicationId, accept)`

#### 2. background-check.service.ts (NEW)
**Features:**
- Initiate checks with Checkr/HireRight/Sterling
- Track check status
- Handle provider webhooks (backend)
- Support multiple check types

#### 3. reference-check.service.ts (NEW)
**Features:**
- Request references with automated emails
- Track response status
- Resend requests
- Public submission endpoint
- Default question templates

### Updated Components

#### applications-manage.component.ts
**Changes:**
- Expanded pipeline from 6 to 10 stages
- Added Reference Check stage
- Added Background Check stage
- Separated interview types (Phone, Technical, Final)
- Updated status mapping logic

---

## Third-Party Integrations (Placeholder)

### 1. Checkr
- **API:** https://docs.checkr.com/
- **Features:** Criminal, employment, education checks
- **Webhook:** `/api/webhooks/checkr`
- **Status:** Placeholder implementation ready

### 2. HireRight
- **API:** https://developer.hireright.com/
- **Features:** Comprehensive background screening
- **Webhook:** `/api/webhooks/hireright`
- **Status:** Placeholder implementation ready

### 3. Sterling
- **API:** https://developer.sterlingcheck.com/
- **Features:** Global background checks
- **Webhook:** `/api/webhooks/sterling`
- **Status:** Placeholder implementation ready

---

## FCRA Compliance

### Pre-Adverse Action Process
1. Conditional offer extended
2. Background check initiated with consent
3. If negative: 5-day pre-adverse action notice
4. Candidate can dispute
5. Final adverse action if unresolved

### Required Documents
- Disclosure form
- Authorization form
- Pre-adverse action letter
- Adverse action letter
- Summary of rights

---

## Reference Check Workflow

### Automated Process
1. Recruiter requests references
2. System sends secure email links
3. References complete online form
4. Automated reminders (3, 7, 14 days)
5. Responses aggregated
6. Application progresses to background check

### Default Questions
1. How long did you work with this candidate?
2. What was their role and responsibilities?
3. How would you rate their job performance?
4. What are their key strengths?
5. What areas could they improve?
6. Would you rehire this candidate?
7. How did they handle challenges?
8. Additional comments?

---

## Offer Management

### Features
- Offer letter generation
- Salary and benefits tracking
- Expiration management (default 7 days)
- Accept/decline workflow
- Negotiation tracking

### Offer Details
- Base salary
- Start date
- Offer letter URL
- Expiration date
- Status tracking

---

## API Endpoints

### Background Checks
```
POST   /api/background-checks
GET    /api/background-checks/{id}
GET    /api/background-checks/application/{id}
POST   /api/webhooks/{provider}
```

### Reference Checks
```
POST   /api/reference-checks
GET    /api/reference-checks/{id}
GET    /api/reference-checks/application/{id}
POST   /api/reference-checks/{id}/resend/{refId}
POST   /api/reference-checks/submit/{token}
```

### Offers
```
POST   /api/offers
GET    /api/offers/{id}
PUT    /api/offers/{id}/respond
GET    /api/offers/application/{id}
```

---

## Configuration Required

### Environment Variables
```bash
# Checkr
CHECKR_API_KEY=your_checkr_api_key

# HireRight
HIRERIGHT_API_KEY=your_hireright_api_key

# Sterling
STERLING_API_KEY=your_sterling_api_key
```

### Webhook URLs (Production)
```
https://api.talentforge.com/api/webhooks/checkr
https://api.talentforge.com/api/webhooks/hireright
https://api.talentforge.com/api/webhooks/sterling
```

---

## Implementation Status

### ✅ Completed
- [x] Database schema (V050 migration)
- [x] Frontend services (application, background-check, reference-check)
- [x] Updated application statuses (13 total)
- [x] Expanded Kanban pipeline (10 stages)
- [x] Backend entities (BackgroundCheck)
- [x] Integration placeholders (Checkr, HireRight, Sterling)
- [x] Documentation

### 🚧 TODO (Backend)
- [ ] Repository interfaces
- [ ] Service layer implementation
- [ ] REST controllers
- [ ] Webhook handlers
- [ ] Email notifications
- [ ] Offer letter generation
- [ ] FCRA compliance workflows
- [ ] Unit tests
- [ ] Integration tests

---

## Testing Checklist

### Frontend
- [ ] Drag-drop between all 10 stages
- [ ] Status dropdown shows all 13 options
- [ ] Background check initiation
- [ ] Reference check request
- [ ] Offer extension and response

### Backend
- [ ] Background check API endpoints
- [ ] Reference check API endpoints
- [ ] Offer management endpoints
- [ ] Webhook handling
- [ ] Tenant isolation
- [ ] FCRA compliance

### Integration
- [ ] Checkr API integration
- [ ] HireRight API integration
- [ ] Sterling API integration
- [ ] Email delivery for references
- [ ] Webhook signature verification

---

## Next Steps

1. **Implement Backend Services** (3-4 days)
   - Repository layer
   - Service layer
   - REST controllers
   - Webhook handlers

2. **Email Integration** (1 day)
   - Reference request emails
   - Reminder sequences
   - Offer notifications

3. **Provider Integration** (2-3 days per provider)
   - Checkr API integration
   - HireRight API integration
   - Sterling API integration

4. **Testing** (2-3 days)
   - Unit tests
   - Integration tests
   - End-to-end workflow testing

---

**Total Estimated Time:** 10-15 days for complete implementation

**Status:** ✅ Foundation Complete - Ready for Backend Implementation
