import {
  UserRole
} from "./chunk-BAFRGCFI.js";
import {
  ɵɵdefineInjectable
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/navigation.service.ts
var NavigationService = class _NavigationService {
  constructor() {
    this.navigationMap = {
      [UserRole.PLATFORM_SUPER_ADMIN]: [
        { label: "Dashboard", route: "/platform-admin", icon: "\u{1F4CA}" },
        { label: "Tenants", route: "/platform-admin/tenants", icon: "\u{1F3E2}" },
        { label: "Billing", route: "/platform-admin/billing", icon: "\u{1F4B3}" },
        { label: "System", route: "/platform-admin/system", icon: "\u2699\uFE0F" }
      ],
      [UserRole.PLATFORM_ADMIN]: [
        { label: "Dashboard", route: "/platform-admin", icon: "\u{1F4CA}" },
        { label: "Tenants", route: "/platform-admin/tenants", icon: "\u{1F3E2}" },
        { label: "Billing", route: "/platform-admin/billing", icon: "\u{1F4B3}" },
        { label: "System", route: "/platform-admin/system", icon: "\u2699\uFE0F" }
      ],
      [UserRole.BILLING_MANAGER]: [
        { label: "Dashboard", route: "/billing", icon: "\u{1F4CA}" },
        { label: "Subscriptions", route: "/billing/subscriptions", icon: "\u{1F4B3}" },
        { label: "Reports", route: "/billing/reports", icon: "\u{1F4C8}" }
      ],
      [UserRole.TENANT_ADMIN]: [
        { label: "Dashboard", route: "/admin", icon: "\u{1F4CA}" },
        { label: "Jobs", route: "/jobs", icon: "\u{1F4BC}" },
        { label: "Applications", route: "/applications", icon: "\u{1F4DD}" },
        { label: "Candidates", route: "/candidates", icon: "\u{1F464}" },
        { label: "Clients", route: "/clients", icon: "\u{1F3E2}" },
        { label: "Team", route: "/users", icon: "\u{1F465}" }
      ],
      [UserRole.RECRUITER]: [
        { label: "Dashboard", route: "/dashboard", icon: "\u{1F4CA}" },
        { label: "Jobs", route: "/jobs", icon: "\u{1F4BC}" },
        { label: "Applications", route: "/applications", icon: "\u{1F4DD}" },
        { label: "Candidates", route: "/candidates", icon: "\u{1F465}" },
        { label: "Clients", route: "/clients", icon: "\u{1F3E2}" },
        { label: "Team", route: "/users", icon: "\u{1F464}" },
        { label: "Analytics", route: "/analytics", icon: "\u{1F4C8}" }
      ],
      [UserRole.CANDIDATE]: [
        { label: "Dashboard", route: "/candidate", icon: "\u{1F4CA}" },
        { label: "Job Search", route: "/candidate/jobs", icon: "\u{1F50D}" },
        { label: "My Applications", route: "/candidate/applications", icon: "\u{1F4DD}" },
        { label: "Interviews", route: "/candidate/interviews", icon: "\u{1F4C5}" },
        { label: "Profile", route: "/candidate/profile", icon: "\u{1F464}" },
        { label: "Messages", route: "/candidate/messages", icon: "\u{1F4AC}" }
      ],
      [UserRole.CLIENT]: [
        { label: "Dashboard", route: "/client", icon: "\u{1F4CA}" },
        { label: "My Jobs", route: "/client/jobs", icon: "\u{1F4BC}" },
        { label: "Candidates", route: "/client/candidates", icon: "\u{1F465}" },
        { label: "Interviews", route: "/client/interviews", icon: "\u{1F4C5}" }
      ]
    };
    this.dashboardRoutes = {
      [UserRole.PLATFORM_SUPER_ADMIN]: "/platform-admin",
      [UserRole.PLATFORM_ADMIN]: "/platform-admin",
      [UserRole.BILLING_MANAGER]: "/billing",
      [UserRole.TENANT_ADMIN]: "/admin",
      [UserRole.RECRUITER]: "/dashboard",
      [UserRole.CANDIDATE]: "/candidate",
      [UserRole.CLIENT]: "/client"
    };
  }
  getNavigationForRole(role) {
    return this.navigationMap[role] || [];
  }
  getDashboardRoute(role) {
    return this.dashboardRoutes[role] || "/dashboard";
  }
  isPlatformRole(role) {
    return [
      UserRole.PLATFORM_SUPER_ADMIN,
      UserRole.PLATFORM_ADMIN,
      UserRole.BILLING_MANAGER
    ].includes(role);
  }
  isTenantRole(role) {
    return [
      UserRole.TENANT_ADMIN,
      UserRole.RECRUITER
    ].includes(role);
  }
  static {
    this.\u0275fac = function NavigationService_Factory(t) {
      return new (t || _NavigationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavigationService, factory: _NavigationService.\u0275fac, providedIn: "root" });
  }
};

export {
  NavigationService
};
//# sourceMappingURL=chunk-4MPRBMJL.js.map
