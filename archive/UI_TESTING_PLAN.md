# UI Testing Plan - Complete System Verification

## 🚀 Pre-Testing Setup

### 1. Start Backend Services
```bash
cd TalentForge-Backend
# Terminal 1
cd auth-service && mvn spring-boot:run

# Terminal 2  
cd user-service && mvn spring-boot:run

# Terminal 3
cd job-service && mvn spring-boot:run

# Terminal 4
cd application-service && mvn spring-boot:run
```

### 2. Start Frontend
```bash
cd TalentForge-Frontend
npm start
```

### 3. Database Check
```bash
# Verify sample data exists
docker exec -it postgres psql -U postgres -d talentforge
\dt
SELECT COUNT(*) FROM job_orders;
SELECT COUNT(*) FROM job_applications;
SELECT COUNT(*) FROM users WHERE role = 'CANDIDATE';
```

## 🧪 Testing Scenarios

### **Test 1: Authentication Flow**
1. Navigate to `http://localhost:4200`
2. Click "Login"
3. Use test credentials:
   - Email: `candidate@test.com`
   - Password: `password123`
4. **Expected**: Redirect to candidate dashboard
5. **Verify**: Navigation shows candidate menu items

### **Test 2: Job Browsing (Session 3)**
1. Navigate to "Job Search" 
2. **Expected**: Real jobs load from database (not hardcoded)
3. **Verify**: 
   - Jobs display with real titles, companies, locations
   - Pagination works (Previous/Next buttons)
   - Search box filters results
   - Loading spinner appears during requests
4. **Test Search**: Type "Developer" in search
5. **Expected**: Filtered results from backend

### **Test 3: Job Application Flow**
1. Click on any job from job list
2. Click "Apply" button
3. **Expected**: Application submitted to backend
4. Navigate to "My Applications"
5. **Expected**: New application appears in list

### **Test 4: My Applications (Session 4)**
1. Navigate to "My Applications"
2. **Expected**: Real applications load (not hardcoded data)
3. **Verify**:
   - Applications show real job titles and companies
   - Applied dates are real timestamps
   - Status badges show correct colors
   - Pagination works if >25 applications

### **Test 5: My Interviews**
1. Navigate to "Interviews"
2. **Expected**: Real interview data loads
3. **Verify**:
   - Interview details from database
   - Reschedule functionality works
   - Meeting links are clickable

### **Test 6: Candidate Profile (Session 4)**
1. Navigate to "Profile"
2. **Expected**: Real user data loads (not hardcoded)
3. **Verify**:
   - Name, email, phone from database
   - Skills array displays correctly
   - Location field populated
4. **Test Update**: Change phone number, click "Save"
5. **Expected**: Success message, data persists on refresh

### **Test 7: Recruiter Dashboard**
1. Logout, login as recruiter:
   - Email: `recruiter@test.com`
   - Password: `password123`
2. **Expected**: Redirect to recruiter dashboard
3. Navigate to "Applications"
4. **Expected**: Applications organized by stage (not hardcoded)
5. **Verify**:
   - Applied, Screening, Interview, Offer columns
   - Real candidate data in cards
   - Drag/drop or status update works

### **Test 8: Job Management**
1. As recruiter, navigate to "Jobs"
2. **Expected**: Real job listings load
3. Click "Post New Job"
4. Fill form and submit
5. **Expected**: New job appears in list
6. **Test Edit**: Click edit on existing job
7. **Expected**: Form pre-populated with real data

### **Test 9: Error Handling**
1. Stop one backend service (e.g., job-service)
2. Try to browse jobs
3. **Expected**: Error message displays, no crash
4. **Verify**: Loading states work correctly

### **Test 10: Data Persistence**
1. Create job application as candidate
2. Logout and login as recruiter
3. **Expected**: Application visible in recruiter view
4. Update application status
5. Logout and login as candidate
6. **Expected**: Status change reflected

## ✅ Success Criteria

### **Session 1 & 2: Interviews** ✅
- [ ] Interview list loads from database
- [ ] Reschedule requests work
- [ ] No hardcoded interview data visible

### **Session 3: Job Integration** ✅
- [ ] Job browsing uses real API data
- [ ] Job search functionality works
- [ ] Job creation/editing works
- [ ] No hardcoded job data visible
- [ ] Pagination works with backend

### **Session 4: Candidate Profile** ✅
- [ ] Profile loads real user data
- [ ] Profile updates save to database
- [ ] Applications load real data
- [ ] Application management works
- [ ] No hardcoded profile/application data

### **General Requirements** ✅
- [ ] All loading states work
- [ ] Error handling displays properly
- [ ] Authentication required for protected routes
- [ ] Role-based navigation works
- [ ] Data persists across sessions
- [ ] No console errors
- [ ] Responsive design works

## 🐛 Common Issues to Check

### **Data Loading Issues**
- Services not injected properly
- HTTP interceptors not adding auth headers
- CORS issues between frontend/backend
- Database connection problems

### **Authentication Issues**
- JWT tokens not being sent
- Token expiration handling
- Role-based access not working
- Redirect loops

### **UI Issues**
- Hardcoded data still visible
- Loading states not showing
- Error messages not displaying
- Pagination not working

## 📊 Test Results Template

```
## Test Results - [Date]

### Authentication Flow: ✅/❌
- Login works: ✅/❌
- Role-based redirect: ✅/❌
- Navigation updates: ✅/❌

### Job Integration: ✅/❌
- Real job data loads: ✅/❌
- Search functionality: ✅/❌
- Pagination works: ✅/❌
- Job creation: ✅/❌

### Candidate Profile: ✅/❌
- Profile loads real data: ✅/❌
- Profile updates save: ✅/❌
- Applications load: ✅/❌
- No hardcoded data: ✅/❌

### Interview Management: ✅/❌
- Interview list loads: ✅/❌
- Reschedule works: ✅/❌
- Real data displayed: ✅/❌

### Overall Status: ✅/❌
- All hardcoded data removed: ✅/❌
- Error handling works: ✅/❌
- Loading states work: ✅/❌
- Data persistence: ✅/❌
```

## 🎯 Quick Verification Commands

### Check Services Running
```bash
curl http://localhost:8081/api/auth/health
curl http://localhost:8082/api/users/health  
curl http://localhost:8083/api/jobs/health
curl http://localhost:8084/api/applications/health
```

### Check Database Data
```sql
-- Verify sample data exists
SELECT COUNT(*) FROM job_orders WHERE is_active = true;
SELECT COUNT(*) FROM job_applications WHERE is_active = true;
SELECT COUNT(*) FROM interviews WHERE is_active = true;
SELECT COUNT(*) FROM users WHERE role = 'CANDIDATE';
```

This testing plan will verify that Sessions 1-4 are completely implemented with no hardcoded data remaining in the UI.