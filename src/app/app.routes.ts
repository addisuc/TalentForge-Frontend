import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'jobs',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/jobs/jobs-browse.component').then(m => m.JobsBrowseComponent)
  },
  {
    path: 'jobs/create',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/jobs/jobs-create.component').then(m => m.JobsCreateComponent)
  },
  {
    path: 'jobs/:id',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/jobs/job-details.component').then(m => m.JobDetailsComponent)
  },
  {
    path: 'applications',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/applications/applications-manage.component').then(m => m.ApplicationsManageComponent)
  },
  {
    path: 'candidates',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidates/candidates-search.component').then(m => m.CandidatesSearchComponent)
  },
  {
    path: 'clients',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/clients/clients-manage.component').then(m => m.ClientsManageComponent)
  },
  {
    path: 'clients/:id',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/clients/client-details.component').then(m => m.ClientDetailsComponent)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/users/users-manage.component').then(m => m.UsersManageComponent)
  },
  {
    path: 'analytics',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/analytics/analytics.component').then(m => m.AnalyticsComponent)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'platform-admin',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/platform-admin/platform-admin-dashboard.component').then(m => m.PlatformAdminDashboardComponent)
  },
  {
    path: 'platform-admin/tenants',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/platform-admin/tenants-manage.component').then(m => m.TenantsManageComponent)
  },
  {
    path: 'platform-admin/billing',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/platform-admin/billing.component').then(m => m.BillingComponent)
  },
  {
    path: 'platform-admin/system',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/platform-admin/system.component').then(m => m.SystemComponent)
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/client-portal/client-dashboard.component').then(m => m.ClientDashboardComponent)
  },
  {
    path: 'client/jobs',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/client-portal/client-jobs.component').then(m => m.ClientJobsComponent)
  },
  {
    path: 'client/candidates',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/client-portal/client-candidates.component').then(m => m.ClientCandidatesComponent)
  },
  {
    path: 'client/interviews',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/client-portal/client-interviews.component').then(m => m.ClientInterviewsComponent)
  },
  {
    path: 'candidate',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-dashboard.component').then(m => m.CandidateDashboardComponent)
  },
  {
    path: 'candidate/jobs',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-jobs.component').then(m => m.CandidateJobsComponent)
  },
  {
    path: 'candidate/applications',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-applications.component').then(m => m.CandidateApplicationsComponent)
  },
  {
    path: 'candidate/profile',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-profile.component').then(m => m.CandidateProfileComponent)
  },
  {
    path: 'candidate/interviews',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-interviews.component').then(m => m.CandidateInterviewsComponent)
  },
  {
    path: 'candidate/messages',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/candidate-portal/candidate-messages.component').then(m => m.CandidateMessagesComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];
