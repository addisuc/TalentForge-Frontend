# TalentForge - Architecture Document

**Version:** 1.0  
**Last Updated:** 2024  
**Status:** Implemented

---

## 1. System Overview

TalentForge is a multi-tenant recruiting platform built with Angular 17+ frontend and Spring Boot microservices backend. The system uses JWT authentication, role-based access control, and RESTful APIs.

---

## 2. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Angular 17+)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Auth       │  │   Jobs       │  │  Applications│      │
│  │   Module     │  │   Module     │  │   Module     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Interviews  │  │   Users      │  │  Candidates  │      │
│  │   Module     │  │   Module     │  │   Module     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    │  HTTP/REST    │
                    │  (JWT Auth)   │
                    └───────┬───────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                Backend (Spring Boot Microservices)           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Auth Service │  │ User Service │  │  Job Service │      │
│  │   :8081      │  │   :8082      │  │   :8083      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐                                           │
│  │ Application  │                                           │
│  │   Service    │                                           │
│  │   :8084      │                                           │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    │   PostgreSQL  │
                    │   Database    │
                    └───────────────┘
```

---

## 3. Frontend Architecture

### 3.1 Technology Stack
- **Framework**: Angular 17+ (Standalone Components)
- **Language**: TypeScript 5+
- **State Management**: NgRx 17
- **UI Library**: Angular Material
- **Routing**: Angular Router with Guards
- **Forms**: Angular Reactive Forms
- **HTTP**: HttpClient with Interceptors

### 3.2 Project Structure
```
src/app/
├── core/                      # Singleton services, guards, interceptors
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── guest.guard.ts
│   ├── guards/
│   │   ├── role.guard.ts
│   │   └── role-redirect.guard.ts
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   ├── models/
│   │   └── user.model.ts
│   └── services/
│       ├── navigation.service.ts
│       ├── job.service.ts
│       ├── application.service.ts
│       ├── interview.service.ts
│       └── user.service.ts
├── features/                  # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   └── store/
│   ├── jobs/
│   ├── applications/
│   ├── interviews/
│   ├── candidates/
│   ├── users/
│   ├── platform-admin/
│   ├── billing/
│   ├── admin/
│   ├── candidate-portal/
│   └── client-portal/
├── layouts/                   # Layout components
│   ├── main-layout/
│   └── auth-layout/
├── shared/                    # Shared components, directives, pipes
│   ├── components/
│   └── material/
└── store/                     # Global NgRx store
    └── index.ts
```

### 3.3 State Management

#### NgRx Store Structure
```typescript
{
  auth: {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }
}
```

#### State Flow
1. Component dispatches action
2. Effect intercepts action, calls service
3. Service makes HTTP request
4. Effect dispatches success/failure action
5. Reducer updates state
6. Component receives updated state via selector

### 3.4 Routing Strategy

#### Route Guards
- **AuthGuard**: Checks if user is authenticated
- **RoleGuard**: Checks if user has required role
- **GuestGuard**: Redirects authenticated users away from auth pages

#### Route Structure
```typescript
/home                          → Homepage (public)
/auth/login                    → Login (guest only)
/auth/register                 → Register (guest only)
/dashboard                     → Recruiter Dashboard (auth required)
/platform-admin                → Platform Admin (PLATFORM_ADMIN only)
/admin                         → Tenant Admin (TENANT_ADMIN only)
/billing                       → Billing Manager (BILLING_MANAGER only)
/candidate                     → Candidate Portal (CANDIDATE only)
/jobs                          → Job Listing (auth required)
/applications                  → Applications (auth required)
/users                         → Team Management (auth required)
```

### 3.5 Authentication Flow

```
1. User enters credentials
2. Component dispatches login action
3. Effect calls AuthService.login()
4. Service sends POST /api/auth/login
5. Backend validates and returns JWT + user
6. Effect dispatches loginSuccess
7. Reducer stores user and token
8. Token stored in localStorage
9. AuthInterceptor adds token to all requests
10. NavigationService redirects to role-specific dashboard
```

### 3.6 HTTP Interceptor

```typescript
AuthInterceptor:
1. Intercepts all HTTP requests
2. Adds Authorization header with JWT token
3. Handles 401 errors (token expired)
4. Triggers token refresh if needed
5. Retries failed request with new token
```

---

## 4. Backend Architecture

### 4.1 Microservices

#### Auth Service (:8081)
- User authentication
- JWT token generation/validation
- Password reset
- Email verification

#### User Service (:8082)
- User profile management
- User search
- Role management
- Team management

#### Job Service (:8083)
- Job CRUD operations
- Job search and filtering
- Job status management

#### Application Service (:8084)
- Application submission
- Application tracking
- Interview scheduling
- Pipeline management

### 4.2 Database Schema

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'ACTIVE',
  phone_number VARCHAR(20),
  location VARCHAR(255),
  skills TEXT[],
  experience TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Jobs Table
```sql
CREATE TABLE job_orders (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  requirements TEXT,
  location VARCHAR(255),
  salary_min INTEGER,
  salary_max INTEGER,
  job_type VARCHAR(50),
  status VARCHAR(50) DEFAULT 'OPEN',
  company_id UUID,
  recruiter_id UUID,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Applications Table
```sql
CREATE TABLE job_applications (
  id UUID PRIMARY KEY,
  job_id UUID REFERENCES job_orders(id),
  candidate_id UUID REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'APPLIED',
  cover_letter TEXT,
  resume_url VARCHAR(500),
  applied_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Interviews Table
```sql
CREATE TABLE interviews (
  id UUID PRIMARY KEY,
  application_id UUID REFERENCES job_applications(id),
  interview_type VARCHAR(50),
  scheduled_at TIMESTAMP,
  duration_minutes INTEGER,
  meeting_link VARCHAR(500),
  meeting_platform VARCHAR(50),
  status VARCHAR(50) DEFAULT 'SCHEDULED',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 5. Security Architecture

### 5.1 Authentication
- **JWT Tokens**: Signed with HS256 algorithm
- **Token Storage**: httpOnly cookies with SameSite=Strict
- **Token Expiration**: 1 hour (access token), 7 days (refresh token)
- **Password Hashing**: BCrypt with salt rounds = 10

### 5.2 Authorization
- **Role-Based Access Control (RBAC)**
- **Route Guards**: Frontend route protection
- **API Guards**: Backend endpoint protection
- **Permission Hierarchy**: PLATFORM_ADMIN > TENANT_ADMIN > RECRUITER > CANDIDATE

### 5.3 Security Measures
- **CSRF Protection**: Angular built-in XSRF token
- **XSS Prevention**: Input sanitization with DOMPurify
- **SQL Injection**: Parameterized queries (JPA)
- **Rate Limiting**: 5 login attempts per 15 minutes
- **Password Policy**: 8+ chars, uppercase, lowercase, number, special char
- **Session Management**: 30-minute inactivity timeout

---

## 6. API Design

### 6.1 REST Principles
- **Resource-based URLs**: `/api/jobs`, `/api/applications`
- **HTTP Methods**: GET (read), POST (create), PUT (update), DELETE (delete)
- **Status Codes**: 200 (success), 201 (created), 400 (bad request), 401 (unauthorized), 404 (not found), 500 (server error)
- **Pagination**: Query params `page` and `size`
- **Filtering**: Query params for filters

### 6.2 Request/Response Format
```typescript
// Request
POST /api/jobs
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Senior Developer",
  "description": "...",
  "location": "Remote",
  "jobType": "FULL_TIME"
}

// Response
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "uuid",
  "title": "Senior Developer",
  "status": "OPEN",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

### 6.3 Error Response Format
```typescript
{
  "timestamp": "2024-01-01T00:00:00Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/api/jobs"
}
```

---

## 7. Data Flow

### 7.1 Job Application Flow
```
1. Candidate searches jobs (GET /api/jobs)
2. Candidate views job details (GET /api/jobs/:id)
3. Candidate submits application (POST /api/applications)
4. Recruiter views applications (GET /api/applications)
5. Recruiter schedules interview (POST /api/interviews)
6. Candidate receives notification
7. Candidate joins interview (meeting link)
8. Recruiter updates application status (PUT /api/applications/:id)
```

### 7.2 User Invitation Flow
```
1. Admin sends invitation (POST /api/invitations)
2. System generates unique token
3. Email sent with invitation link
4. User clicks link (/auth/accept-invitation/:token)
5. User sets password and completes profile
6. Account activated (POST /api/invitations/:token/accept)
7. User can login
```

---

## 8. Performance Optimization

### 8.1 Frontend
- **Lazy Loading**: Feature modules loaded on demand
- **Code Splitting**: Separate bundles per route
- **Tree Shaking**: Remove unused code
- **AOT Compilation**: Ahead-of-time compilation
- **OnPush Change Detection**: Optimize Angular change detection
- **Virtual Scrolling**: For large lists (Angular CDK)

### 8.2 Backend
- **Database Indexing**: On frequently queried columns
- **Connection Pooling**: Reuse database connections
- **Caching**: Redis for frequently accessed data
- **Pagination**: Limit result sets
- **Async Processing**: Background jobs for heavy tasks

---

## 9. Deployment Architecture

### 9.1 Development
- **Frontend**: `ng serve` on localhost:4200
- **Backend**: Spring Boot apps on localhost:8081-8084
- **Database**: PostgreSQL on localhost:5432
- **Proxy**: Angular proxy config for CORS

### 9.2 Production
- **Frontend**: Nginx serving static files
- **Backend**: Docker containers on Kubernetes
- **Database**: Managed PostgreSQL (AWS RDS)
- **Load Balancer**: AWS ALB
- **CDN**: CloudFront for static assets
- **SSL**: Let's Encrypt certificates

---

## 10. Monitoring & Logging

### 10.1 Frontend Monitoring
- **Error Tracking**: Sentry or Rollbar
- **Performance**: Google Analytics, Core Web Vitals
- **User Analytics**: Mixpanel or Amplitude

### 10.2 Backend Monitoring
- **APM**: New Relic or Datadog
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Metrics**: Prometheus + Grafana
- **Health Checks**: Spring Boot Actuator

---

## 11. Scalability

### 11.1 Horizontal Scaling
- **Frontend**: Multiple Nginx instances behind load balancer
- **Backend**: Multiple service instances (Kubernetes pods)
- **Database**: Read replicas for read-heavy operations

### 11.2 Vertical Scaling
- **Increase CPU/Memory**: For individual services
- **Database Optimization**: Query optimization, indexing

---

## 12. Disaster Recovery

### 12.1 Backup Strategy
- **Database**: Daily automated backups
- **Retention**: 30 days
- **Point-in-time Recovery**: Available

### 12.2 High Availability
- **Multi-AZ Deployment**: AWS availability zones
- **Failover**: Automatic failover for database
- **Redundancy**: Multiple instances of each service

---

**Document Status:** Complete - Architecture implemented and operational
