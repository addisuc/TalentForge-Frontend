# UI Testing Plan - Create Data Through UI

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

## 🧪 Testing Plan - Create Data via UI

### **Phase 1: Authentication & Setup**
1. Navigate to `http://localhost:4200`
2. Register/Login as recruiter:
   - Email: `recruiter@test.com`
   - Password: `password123`
3. **Expected**: Redirect to recruiter dashboard

### **Phase 2: Create Jobs via UI (Session 3 Test)**
1. Navigate to "Jobs" section
2. Click "Post New Job"
3. Create 3-5 sample jobs:
   - **Job 1**: Senior Full Stack Developer, Tech Corp, San Francisco, $120k-180k
   - **Job 2**: Product Manager, Innovation Labs, Remote, $130k-160k
   - **Job 3**: UX/UI Designer, Design Studio, New York, $90k-120k
4. **Verify**: Jobs appear in job list (no hardcoded data)
5. **Test Search**: Search for "Developer" - should filter results
6. **Test Pagination**: If >20 jobs, pagination should work

### **Phase 3: Register Candidates**
1. Logout from recruiter account
2. Register 3-5 candidate accounts:
   - **Candidate 1**: sarah@test.com / Sarah Johnson
   - **Candidate 2**: michael@test.com / Michael Chen  
   - **Candidate 3**: emily@test.com / Emily Davis

### **Phase 4: Candidate Profile Testing (Session 4)**
1. Login as candidate (sarah@test.com)
2. Navigate to "Profile"
3. **Verify**: Profile loads with real user data (not hardcoded)
4. **Update Profile**:
   - Add phone: 555-0101
   - Add skills: React, Node.js, TypeScript
   - Add location: San Francisco, CA
5. Click "Save Changes"
6. **Expected**: Success message, data persists on refresh

### **Phase 5: Job Applications (Session 4)**
1. As candidate, navigate to "Job Search"
2. **Verify**: Real jobs load from database (created in Phase 2)
3. Apply to 2-3 jobs
4. Navigate to "My Applications"
5. **Verify**: Applications show real data (not hardcoded)
   - Real job titles and companies
   - Real applied dates
   - Correct status badges

### **Phase 6: Interview Management (Sessions 1 & 2)**
1. Login as recruiter
2. Navigate to "Applications"
3. **Verify**: Applications organized by stage (real data)
4. Click on an application → "Schedule Interview"
5. Create interview with:
   - Type: Technical
   - Date: Tomorrow 2:00 PM
   - Platform: Zoom
   - Meeting link: https://zoom.us/j/test
6. **Verify**: Interview appears in system

### **Phase 7: Candidate Interview View**
1. Login as candidate
2. Navigate to "Interviews"
3. **Verify**: Real interview data loads (not hardcoded)
4. Test "Request Reschedule" functionality
5. **Expected**: Reschedule request submitted

### **Phase 8: Recruiter Application Management**
1. Login as recruiter
2. Navigate to "Applications"
3. **Verify**: Applications in correct stages
   - Applied, Screening, Interview, Offer columns
   - Real candidate data in cards
4. Move application between stages
5. **Expected**: Status updates persist

## ✅ Success Criteria

### **No Hardcoded Data Visible**
- [ ] Job listings show real created jobs
- [ ] Applications show real submitted applications
- [ ] Profiles show real user data
- [ ] Interviews show real scheduled interviews

### **Full CRUD Operations Work**
- [ ] Create: Jobs, applications, interviews, profiles
- [ ] Read: All data loads from database
- [ ] Update: Profile updates, status changes
- [ ] Delete: Cancel interviews, withdraw applications

### **Sessions 1-4 Complete**
- [ ] **Session 1 & 2**: Interview management works end-to-end
- [ ] **Session 3**: Job integration works with real data
- [ ] **Session 4**: Candidate profiles and applications work

### **UI/UX Quality**
- [ ] Loading states display during API calls
- [ ] Error messages show for failures
- [ ] Success messages confirm actions
- [ ] Pagination works with real data
- [ ] Search filters real results

## 🎯 Quick Verification Commands

### Check Services Running
```bash
curl http://localhost:8081/api/auth/health
curl http://localhost:8082/api/users/health  
curl http://localhost:8083/api/jobs/health
curl http://localhost:8084/api/applications/health
```

### Check Database After UI Testing
```sql
-- Verify data was created via UI
SELECT COUNT(*) FROM job_orders WHERE is_active = true;
SELECT COUNT(*) FROM job_applications WHERE is_active = true;
SELECT COUNT(*) FROM interviews WHERE is_active = true;
SELECT COUNT(*) FROM users WHERE role = 'CANDIDATE';
```

## 📊 Expected Results

After completing this testing plan:

1. **Database populated** with real data created through UI
2. **No hardcoded data** visible anywhere in the application
3. **All 4 sessions working** with real database integration
4. **Complete job management workflow** from posting to hiring
5. **Full candidate experience** from registration to interviews

This approach tests both the UI functionality AND the database integration simultaneously, ensuring everything works end-to-end with real data flow.