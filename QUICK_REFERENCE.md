# TalentForge - Quick Reference Guide

**Last Updated:** 2024

---

## 📚 Documentation Map

### 🎯 Start Here
| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[README.md](./README.md)** | Project overview & quick start | First time setup, general info |
| **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** | Current status & progress | Check what's done, what's next |

### 📋 Core Documentation
| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[REQUIREMENTS.md](./REQUIREMENTS.md)** | All requirements (functional & non-functional) | Understand features, verify completion |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Technical architecture & design | Understand system design, make technical decisions |

### 🔐 Specialized Guides
| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[AUTH_ARCHITECTURE.md](./AUTH_ARCHITECTURE.md)** | Authentication system details | Working on auth features |
| **[SUPER_ADMIN_SETUP.md](./SUPER_ADMIN_SETUP.md)** | Super admin setup guide | Initial system setup |
| **[BACKEND_FRONTEND_ALIGNMENT.md](./BACKEND_FRONTEND_ALIGNMENT.md)** | API alignment status | Check API compatibility |
| **[PHASE1_REMAINING_ITEMS.md](./PHASE1_REMAINING_ITEMS.md)** | Production readiness checklist | Prepare for production |

### 🎨 Design Documentation
| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[UI_DESIGN_PHASE1.md](./UI_DESIGN_PHASE1.md)** | UI design specifications | Implement UI components |
| **[UI_DESIGN_PLAN.md](./UI_DESIGN_PLAN.md)** | UI design plan | Understand design system |
| **[UI_TESTING_PLAN_UPDATED.md](./UI_TESTING_PLAN_UPDATED.md)** | Testing plan | Plan testing strategy |

---

## 🚀 Common Tasks

### Starting Development
```bash
# 1. Install dependencies
npm install

# 2. Start dev server
ng serve --proxy-config proxy.conf.json

# 3. Open browser
http://localhost:4200
```

### Checking Project Status
1. Open **[PROJECT_STATUS.md](./PROJECT_STATUS.md)**
2. See "MVP Status" section for completed features
3. See "Production Readiness Tasks" for remaining work

### Understanding a Feature
1. Check **[REQUIREMENTS.md](./REQUIREMENTS.md)** for requirements
2. Check **[ARCHITECTURE.md](./ARCHITECTURE.md)** for implementation
3. Check code in `src/app/features/`

### Adding a New Feature
1. Check **[REQUIREMENTS.md](./REQUIREMENTS.md)** - Is it in scope?
2. Check **[ARCHITECTURE.md](./ARCHITECTURE.md)** - How does it fit?
3. Update **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** when complete

---

## 👥 User Roles Quick Reference

| Role | Dashboard | Key Permissions |
|------|-----------|-----------------|
| **PLATFORM_SUPER_ADMIN** | `/platform-admin` | Full system access |
| **PLATFORM_ADMIN** | `/platform-admin` | Platform operations |
| **BILLING_MANAGER** | `/billing` | Financial operations |
| **TENANT_ADMIN** | `/admin` | Organization management, invite users, change roles |
| **RECRUITER** | `/dashboard` | Job management, applications, candidates |
| **CANDIDATE** | `/candidate` | Job search, apply, profile |

---

## 🛣️ Routes Quick Reference

### Public Routes
- `/home` - Homepage
- `/auth/login` - Login
- `/auth/register` - Register

### Protected Routes
- `/dashboard` - Recruiter Dashboard
- `/jobs` - Job Management
- `/applications` - Application Tracking
- `/candidates` - Candidate Database
- `/users` - Team Management
- `/candidate` - Candidate Portal
- `/platform-admin` - Platform Admin
- `/admin` - Tenant Admin
- `/billing` - Billing Manager

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `angular.json` | Angular CLI configuration |
| `tsconfig.json` | TypeScript configuration |
| `proxy.conf.json` | Development proxy for API calls |
| `package.json` | Dependencies and scripts |
| `.eslintrc.json` | Code linting rules |

---

## 📦 Key Services

| Service | Location | Purpose |
|---------|----------|---------|
| **AuthService** | `core/auth/` | Authentication |
| **JobService** | `core/services/` | Job operations |
| **ApplicationService** | `core/services/` | Application operations |
| **InterviewService** | `core/services/` | Interview operations |
| **UserService** | `core/services/` | User operations |
| **NavigationService** | `core/services/` | Role-based navigation |

---

## 🔐 API Endpoints Quick Reference

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token

### Jobs
- `GET /api/jobs` - List jobs
- `POST /api/jobs` - Create job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Applications
- `GET /api/applications` - List applications
- `POST /api/applications` - Submit application
- `PUT /api/applications/:id` - Update application

### Interviews
- `GET /api/interviews` - List interviews
- `POST /api/interviews` - Schedule interview
- `POST /api/interviews/:id/reschedule` - Request reschedule

### Users
- `GET /api/users/profile/:id` - Get profile
- `PUT /api/users/:id` - Update user
- `GET /api/users/search` - Search users

---

## 🎯 Current Sprint Focus

### Week 1-2: Security & Testing
- [ ] Rate limiting UI
- [ ] Session timeout warnings
- [ ] Unit testing setup
- [ ] Critical component tests

### Week 3-4: Accessibility & Performance
- [ ] WCAG 2.1 AA compliance
- [ ] Bundle optimization
- [ ] Performance monitoring
- [ ] Core Web Vitals

### Week 5-6: Documentation & Deployment
- [ ] Code documentation
- [ ] User guides
- [ ] CI/CD pipeline
- [ ] Staging deployment

---

## 🆘 Troubleshooting

### Can't find a document?
- Check `archive/` folder for old tracking docs
- Use this quick reference guide
- Check README.md for links

### Need to understand a feature?
1. **REQUIREMENTS.md** - What it should do
2. **ARCHITECTURE.md** - How it's built
3. **Code** - Implementation details

### Need to track progress?
- **PROJECT_STATUS.md** - Single source of truth

### Need technical details?
- **ARCHITECTURE.md** - System design
- **AUTH_ARCHITECTURE.md** - Auth specifics
- **Code comments** - Implementation details

---

## 📞 Getting Help

1. **Check documentation** (start with README.md)
2. **Review PROJECT_STATUS.md** for current state
3. **Check ARCHITECTURE.md** for technical design
4. **Review code comments** in relevant files
5. **Contact development team**

---

**Tip:** Bookmark this page for quick access to all documentation!
