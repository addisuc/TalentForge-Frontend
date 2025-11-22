import {
  UserService
} from "./chunk-AJCMZTKQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/admin/admin-dashboard.component.ts
function AdminDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AdminDashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35);
    \u0275\u0275text(9, "Active");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
  }
}
function AdminDashboardComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 36);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", app_r3.candidateName, " - ", app_r3.jobTitle, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", app_r3.status, " \u2022 ", app_r3.appliedAt, "");
  }
}
function AdminDashboardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AdminDashboardComponent_div_40_div_1_Template, 8, 4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.recentApplications);
  }
}
function AdminDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p");
    \u0275\u0275text(2, "No applications yet");
    \u0275\u0275elementEnd()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(userService, http) {
    this.userService = userService;
    this.http = http;
    this.stats = [
      { icon: "\u{1F465}", value: "0", label: "Team Members" },
      { icon: "\u{1F4BC}", value: "0", label: "Active Jobs" },
      { icon: "\u{1F4CA}", value: "0", label: "Total Candidates" },
      { icon: "\u2705", value: "0", label: "Placements" }
    ];
    this.loading = true;
    this.teamMembers = [
      { name: "Alice Johnson", role: "Recruiter", initials: "AJ" },
      { name: "Bob Smith", role: "Recruiter", initials: "BS" },
      { name: "Carol White", role: "Recruiter", initials: "CW" }
    ];
    this.recentApplications = [];
  }
  ngOnInit() {
    this.loadDashboardStats();
  }
  loadDashboardStats() {
    this.loading = true;
    forkJoin({
      users: this.userService.getAllUsers(0, 1e3),
      jobs: this.http.get("/api/jobs?page=0&size=1000"),
      candidates: this.http.get("/api/candidates?page=0&size=1000"),
      applications: this.http.get("/api/applications?page=0&size=1000")
    }).subscribe({
      next: (data) => {
        this.stats[0].value = data.users.totalElements.toString();
        this.stats[1].value = data.jobs.totalElements?.toString() || "0";
        this.stats[2].value = data.candidates.totalElements?.toString() || "0";
        const placements = data.applications.content?.filter((app) => app.status === "HIRED" || app.status === "PLACED").length || 0;
        this.stats[3].value = placements.toString();
        this.teamMembers = data.users.content.slice(0, 3).map((user) => ({
          name: `${user.firstName} ${user.lastName}`,
          role: this.getRoleLabel(user.role),
          initials: `${user.firstName[0]}${user.lastName[0]}`
        }));
        this.recentApplications = (data.applications.content || []).slice(0, 5).map((app) => ({
          candidateName: app.candidateName || "Candidate",
          jobTitle: app.jobTitle || "Position",
          status: app.status,
          appliedAt: this.formatDate(app.appliedAt || app.createdAt)
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load dashboard stats:", err);
        this.loading = false;
      }
    });
  }
  getRoleLabel(role) {
    const labels = {
      "TENANT_ADMIN": "Admin",
      "RECRUITER": "Recruiter",
      "RECRUITING_MANAGER": "Manager"
    };
    return labels[role] || role;
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 60)
      return `${diffMins} min ago`;
    if (diffHours < 24)
      return `${diffHours} hours ago`;
    if (diffDays < 7)
      return `${diffDays} days ago`;
    return date.toLocaleDateString();
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 4, consts: [[1, "dashboard-page"], [1, "content"], [1, "page-header"], [1, "page-subtitle"], ["routerLink", "/admin/invite-user", 1, "btn-primary"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "dashboard-grid"], [1, "card"], [1, "card-header"], ["routerLink", "/users"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "subscription"], [1, "plan"], [1, "price"], [1, "usage-bar"], [1, "fill", 2, "width", "68%"], [1, "usage"], ["routerLink", "/applications"], ["class", "list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "actions"], ["routerLink", "/admin/invite-user", 1, "action"], ["routerLink", "/users", 1, "action"], ["routerLink", "/settings", 1, "action"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "list-item"], [1, "avatar"], [1, "info"], [1, "name"], [1, "meta"], [1, "badge", "active"], [1, "icon"], [1, "empty-state"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Organization Overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275text(9, "+ Invite User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, AdminDashboardComponent_div_11_Template, 7, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "h3");
        \u0275\u0275text(16, "Team Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 10);
        \u0275\u0275text(18, "Manage");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11);
        \u0275\u0275template(20, AdminDashboardComponent_div_20_Template, 10, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9)(23, "h3");
        \u0275\u0275text(24, "Subscription");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13)(26, "div", 14);
        \u0275\u0275text(27, "Professional Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 15);
        \u0275\u0275text(29, "$299/month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 16);
        \u0275\u0275element(31, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18);
        \u0275\u0275text(33, "34 of 50 users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9)(36, "h3");
        \u0275\u0275text(37, "Recent Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 19);
        \u0275\u0275text(39, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, AdminDashboardComponent_div_40_Template, 2, 1, "div", 20)(41, AdminDashboardComponent_div_41_Template, 3, 0, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 8)(43, "div", 9)(44, "h3");
        \u0275\u0275text(45, "Quick Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 22)(47, "button", 23)(48, "span");
        \u0275\u0275text(49, "\u2795");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " Invite User ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 24)(52, "span");
        \u0275\u0275text(53, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " Manage Team ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 25)(56, "span");
        \u0275\u0275text(57, "\u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " Settings ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.teamMembers);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngIf", ctx.recentApplications.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.recentApplications.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.dashboard-page[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 12px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n}\n.list-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 2px;\n  font-size: 0.875rem;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.subscription[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.plan[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.price[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.usage-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #0066ff;\n}\n.usage[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #0f172a;\n  text-align: left;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #94a3b8;\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent" });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-GVLAQCW6.js.map
