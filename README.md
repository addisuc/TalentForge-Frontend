# TalentForge Frontend

**Version:** 1.0  
**Status:** MVP Complete - Production Readiness Phase  
**Framework:** Angular 17+

---

## 📚 Documentation

### Core Documents
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current status, completed features, and remaining tasks
- **[REQUIREMENTS.md](./REQUIREMENTS.md)** - Functional and non-functional requirements
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and technical design

### Additional Documents
- **[AUTH_ARCHITECTURE.md](./AUTH_ARCHITECTURE.md)** - Authentication system details
- **[BACKEND_FRONTEND_ALIGNMENT.md](./BACKEND_FRONTEND_ALIGNMENT.md)** - API alignment status
- **[PHASE1_REMAINING_ITEMS.md](./PHASE1_REMAINING_ITEMS.md)** - Production readiness checklist
- **[SUPER_ADMIN_SETUP.md](./SUPER_ADMIN_SETUP.md)** - Super admin setup guide
- **[UI_DESIGN_PHASE1.md](./UI_DESIGN_PHASE1.md)** - UI design specifications
- **[UI_DESIGN_PLAN.md](./UI_DESIGN_PLAN.md)** - UI design plan
- **[UI_TESTING_PLAN_UPDATED.md](./UI_TESTING_PLAN_UPDATED.md)** - Testing plan

### Archived Documents
Old tracking documents have been moved to `archive/` folder.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 17+
- Backend services running (see TalentForge-Backend)

### Installation
```bash
npm install
```

### Development Server
```bash
ng serve
# or with proxy
ng serve --proxy-config proxy.conf.json
```

Navigate to `http://localhost:4200/`

### Build
```bash
# Development build
ng build

# Production build
ng build --configuration production
```

### Running Tests
```bash
# Unit tests
ng test

# E2E tests
ng e2e
```

---

## 🏗️ Project Structure

```
src/app/
├── core/                      # Singleton services, guards, interceptors
│   ├── auth/                  # Authentication services and guards
│   ├── guards/                # Route guards
│   ├── interceptors/          # HTTP interceptors
│   ├── models/                # Data models and interfaces
│   └── services/              # Core services (job, user, interview, etc.)
├── features/                  # Feature modules
│   ├── auth/                  # Authentication module
│   ├── jobs/                  # Job management
│   ├── applications/          # Application tracking
│   ├── candidates/            # Candidate database
│   ├── users/                 # Team management
│   ├── platform-admin/        # Platform admin portal
│   ├── billing/               # Billing management
│   ├── admin/                 # Tenant admin portal
│   ├── candidate-portal/      # Candidate portal
│   └── client-portal/         # Client portal
├── layouts/                   # Layout components
│   ├── main-layout/           # Main application layout
│   └── auth-layout/           # Authentication layout
├── shared/                    # Shared components, directives, pipes
│   ├── components/            # Reusable components
│   └── material/              # Angular Material module
└── store/                     # NgRx global store
```

---

## 🎯 Features

### ✅ Implemented (MVP Complete)
- **Authentication**: Login, Register, Password Reset, Email Verification
- **Role-Based Access**: 6 user roles with dedicated dashboards
- **Job Management**: Create, Edit, Delete, Search jobs
- **Application Tracking**: Kanban pipeline, status updates
- **Interview Scheduling**: Schedule, reschedule, join meetings
- **Candidate Portal**: Job search, apply, profile management
- **Team Management**: View, invite, manage team members
- **Backend Integration**: All APIs connected

### 🚧 In Progress (Production Readiness)
- Security enhancements (rate limiting, session timeout)
- Testing (unit, integration, E2E)
- Accessibility (WCAG 2.1 AA)
- Performance optimization
- Documentation

---

## 👥 User Roles

1. **PLATFORM_SUPER_ADMIN** - Root admin
2. **PLATFORM_ADMIN** - Platform operations
3. **BILLING_MANAGER** - Financial operations
4. **TENANT_ADMIN** - Organization management
5. **RECRUITER** - Day-to-day recruitment
6. **CANDIDATE** - Job seekers

---

## 🔐 Authentication

### Login
- Email and password authentication
- JWT token-based sessions
- Role-based dashboard redirect

### Registration
- Public registration for Candidates and Recruiters
- Email verification required
- Password strength validation

### Invitation System
- Admin-only user invitations
- Token-based invitation acceptance
- Role assignment on invitation

---

## 🛣️ Routes

### Public Routes
- `/home` - Homepage
- `/auth/login` - Login
- `/auth/register` - Register
- `/auth/forgot-password` - Password reset
- `/auth/verify-email/:token` - Email verification
- `/auth/accept-invitation/:token` - Accept invitation

### Protected Routes (Role-Based)
- `/platform-admin` - Platform Admin Dashboard
- `/billing` - Billing Manager Dashboard
- `/admin` - Tenant Admin Dashboard
- `/dashboard` - Recruiter Dashboard
- `/candidate` - Candidate Portal
- `/jobs` - Job Management
- `/applications` - Application Tracking
- `/users` - Team Management
- `/settings` - User Settings

---

## 🔧 Configuration

### Environment Variables
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

### Proxy Configuration
```json
// proxy.conf.json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true
  }
}
```

---

## 🧪 Testing

### Unit Tests
```bash
ng test
# With coverage
ng test --code-coverage
```

### E2E Tests
```bash
ng e2e
```

### Test Coverage Target
- **Minimum**: 80%
- **Current**: TBD (tests to be implemented)

---

## 📦 Dependencies

### Core
- Angular 17+
- TypeScript 5+
- RxJS 7+

### UI
- Angular Material
- Angular CDK

### State Management
- NgRx 17

### Development
- Angular CLI
- ESLint
- Prettier
- Karma/Jasmine

---

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Output
Build artifacts stored in `dist/` directory.

### Deployment Targets
- **Development**: Local development server
- **Staging**: AWS S3 + CloudFront
- **Production**: AWS S3 + CloudFront with custom domain

---

## 📊 Performance Targets

- **Main Bundle**: < 200KB
- **Auth Module**: < 50KB
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTI**: < 3s on 3G

---

## 🔒 Security

- JWT authentication with httpOnly cookies
- CSRF protection (Angular built-in)
- Input sanitization (DOMPurify)
- Rate limiting on auth endpoints
- Password strength requirements
- Session timeout (30 minutes)

---

## 🤝 Contributing

### Code Style
- Follow Angular style guide
- Use ESLint and Prettier
- Write meaningful commit messages
- Add JSDoc comments for services

### Git Workflow
1. Create feature branch from `main`
2. Make changes and commit
3. Push and create pull request
4. Code review required
5. Merge after approval

---

## 📝 License

Proprietary - All rights reserved

---

## 📞 Support

For questions or issues:
1. Check documentation in this repository
2. Review [PROJECT_STATUS.md](./PROJECT_STATUS.md) for current status
3. Contact development team

---

## 🗺️ Roadmap

### Current Phase: Production Readiness
- Security enhancements
- Testing implementation
- Accessibility compliance
- Performance optimization

### Next Phase: Post-MVP Features
- Two-factor authentication
- Social login
- Advanced analytics
- Email notifications
- Real-time messaging

---

**Last Updated:** 2024  
**Status:** ✅ MVP Complete - Production Readiness in Progress
