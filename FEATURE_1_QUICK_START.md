# Feature 1: Job Request Workflow - Quick Start Guide

## 🎯 What We're Building

**Client** requests a new position → **Recruiter** reviews and approves/rejects

---

## 📁 Files Changed

### Frontend
1. `/src/app/core/models/client.model.ts` - NEW
2. `/src/app/core/services/job-request.service.ts` - NEW
3. `/src/app/features/client-portal/client-dashboard/client-dashboard.component.ts` - UPDATED
4. `/src/app/features/clients/client-details.component.ts` - UPDATED

### Backend (To Create)
1. `JobRequest.java` - Entity
2. `JobRequestRepository.java` - Repository  
3. `JobRequestService.java` - Service
4. `JobRequestController.java` - Controller
5. Database migration for `job_requests` table

---

## 🔧 Backend Setup (5 Steps)

### Step 1: Create Database Table
```sql
CREATE TABLE job_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    client_id BIGINT NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    tenant_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    employment_type ENUM('FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY') NOT NULL,
    priority ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') NOT NULL,
    number_of_openings INT NOT NULL DEFAULT 1,
    salary_range VARCHAR(100),
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    status ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by BIGINT,
    FOREIGN KEY (client_id) REFERENCES users(id),
    FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);
```

### Step 2: Copy Backend Code
See `BACKEND_IMPLEMENTATION.md` for complete code

### Step 3: Test Endpoints with Postman

**Create Job Request**
```
POST http://localhost:8080/api/job-requests
Headers:
  X-Tenant-ID: 1
  X-User-ID: 5
Body:
{
  "title": "Senior Developer",
  "department": "Engineering",
  "location": "Remote",
  "employmentType": "FULL_TIME",
  "priority": "HIGH",
  "numberOfOpenings": 2,
  "salaryRange": "$150k-$180k",
  "description": "We need a senior developer...",
  "requirements": "5+ years experience\nReact expertise\nNode.js knowledge"
}
```

**Get Client Requests**
```
GET http://localhost:8080/api/job-requests/client/5
Headers:
  X-Tenant-ID: 1
```

**Get Recruiter Requests**
```
GET http://localhost:8080/api/job-requests/recruiter
Headers:
  X-Tenant-ID: 1
```

**Update Status**
```
PATCH http://localhost:8080/api/job-requests/1/status
Headers:
  X-Tenant-ID: 1
Body:
{
  "status": "IN_PROGRESS"
}
```

### Step 4: Deploy to Dev Environment

### Step 5: Update Frontend API URL
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'  // or your dev server URL
};
```

---

## 🧪 Testing (10 Minutes)

### Test as Client
1. Login as CLIENT user
2. Go to Job Requests section
3. Click "Request New Position"
4. Fill form:
   - Title: "Senior Full Stack Developer"
   - Department: "Engineering"
   - Location: "Remote"
   - Type: "Full-time"
   - Priority: "High"
   - Openings: 2
   - Salary: "$150,000 - $180,000"
   - Description: "We need experienced developers..."
   - Requirements: "React\nNode.js\n5+ years"
5. Submit
6. ✅ Should see success message
7. ✅ Should see request in list with PENDING status

### Test as Recruiter
1. Login as RECRUITER user
2. Go to Clients → Select client
3. Click "Job Requests" tab
4. ✅ Should see client's request
5. ✅ Badge should show "1"
6. Click "Approve"
7. ✅ Status should change to IN_PROGRESS
8. ✅ Badge should show "0"

### Test Status Sync
1. Go back to CLIENT view
2. Refresh page
3. ✅ Should see status changed to IN_PROGRESS

---

## 🐛 Common Issues

### Issue: "Failed to load job requests"
**Fix:** Check backend is running and API URL is correct

### Issue: "Access denied"
**Fix:** Verify X-Tenant-ID and X-User-ID headers are sent

### Issue: Status not updating
**Fix:** Check enum values match (PENDING, IN_PROGRESS, REJECTED)

### Issue: Requirements not saving
**Fix:** Split by newline: `requirements.split('\n')`

---

## ✅ Success Criteria

- [ ] Client can create job request
- [ ] Request appears in client's list
- [ ] Request appears in recruiter's view
- [ ] Recruiter can approve request
- [ ] Recruiter can reject request
- [ ] Status updates reflect in both views
- [ ] Badge counts are accurate
- [ ] No console errors

---

## 📞 Need Help?

1. Check `BACKEND_IMPLEMENTATION.md` for complete code
2. Check `WORKFLOW_IMPLEMENTATION_STATUS.md` for detailed testing
3. Check browser console for errors
4. Check backend logs for API errors

---

**Once Feature 1 is working perfectly, we'll move to Feature 2: Candidate Submissions**
