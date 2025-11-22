import {
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/platform-admin/platform-admin-dashboard.component.ts
var _c0 = (a0) => ["/platform-admin/tenants", a0];
function PlatformAdminDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.trend);
  }
}
function PlatformAdminDashboardComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tenant_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, tenant_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r2.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r2.users);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tenant_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, tenant_r2.created, "MMM d, yyyy"));
  }
}
function PlatformAdminDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    \u0275\u0275classMap(alert_r3.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r3.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r3.time);
  }
}
function PlatformAdminDashboardComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r4.label);
  }
}
var PlatformAdminDashboardComponent = class _PlatformAdminDashboardComponent {
  constructor() {
    this.stats = [
      { label: "Total Tenants", value: "156", trend: "+12", icon: "\u{1F3E2}" },
      { label: "Active Users", value: "4,523", trend: "+234", icon: "\u{1F465}" },
      { label: "Monthly Revenue", value: "$125K", trend: "+18%", icon: "\u{1F4B0}" },
      { label: "System Health", value: "99.9%", trend: "+0.1%", icon: "\u2705" }
    ];
    this.recentTenants = [
      { id: 1, name: "TechCorp Recruiting", plan: "Enterprise", users: 45, status: "Active", created: "2024-01-15" },
      { id: 2, name: "Global Staffing Inc", plan: "Professional", users: 23, status: "Active", created: "2024-01-18" },
      { id: 3, name: "HR Solutions Ltd", plan: "Starter", users: 8, status: "Trial", created: "2024-01-20" }
    ];
    this.systemAlerts = [
      { type: "warning", message: "High API usage detected for tenant: TechCorp", time: "10 mins ago" },
      { type: "info", message: "New tenant signup: HR Solutions Ltd", time: "2 hours ago" }
    ];
    this.quickActions = [
      { icon: "\u2795", label: "Add Tenant" },
      { icon: "\u23F8\uFE0F", label: "Suspend Tenant" },
      { icon: "\u{1F4E7}", label: "Send Message" },
      { icon: "\u{1F4CA}", label: "View Reports" },
      { icon: "\u2699\uFE0F", label: "System Settings" },
      { icon: "\u{1F514}", label: "Announcements" }
    ];
  }
  static {
    this.\u0275fac = function PlatformAdminDashboardComponent_Factory(t) {
      return new (t || _PlatformAdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformAdminDashboardComponent, selectors: [["app-platform-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 4, consts: [[1, "platform-admin-dashboard"], [1, "page-header"], [1, "header-actions"], ["routerLink", "/platform-admin/tenants", 1, "btn-secondary"], ["routerLink", "/platform-admin/tenants", 1, "btn-primary"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "section"], [1, "section-header"], ["routerLink", "/platform-admin/tenants", 1, "btn-link"], [1, "table-container"], [1, "data-table"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "alerts-list"], ["class", "alert-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "actions-grid"], ["class", "action-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "icon"], [1, "stat-content"], [1, "value"], [1, "label"], [1, "trend", "positive"], [3, "routerLink"], [1, "badge"], [1, "alert-item"], [1, "alert-content"], [1, "alert-message"], [1, "alert-time"], [1, "action-card"], [1, "action-icon"], [1, "action-label"]], template: function PlatformAdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Platform Administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage tenants, monitor system health, and oversee platform operations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
        \u0275\u0275text(9, "\u{1F4CA} View All Tenants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275text(11, "\u2795 Add Tenant");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275template(13, PlatformAdminDashboardComponent_div_13_Template, 10, 4, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "h2");
        \u0275\u0275text(18, "Recent Tenants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 10);
        \u0275\u0275text(20, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "table", 12)(23, "thead")(24, "tr")(25, "th");
        \u0275\u0275text(26, "Tenant Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Created");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "tbody");
        \u0275\u0275template(36, PlatformAdminDashboardComponent_tr_36_Template, 14, 13, "tr", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "h2");
        \u0275\u0275text(40, "System Alerts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14);
        \u0275\u0275template(42, PlatformAdminDashboardComponent_div_42_Template, 6, 4, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "h2");
        \u0275\u0275text(46, "Quick Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 16);
        \u0275\u0275template(48, PlatformAdminDashboardComponent_button_48_Template, 5, 2, "button", 17);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.recentTenants);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.systemAlerts);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.quickActions);
      }
    }, dependencies: [CommonModule, NgForOf, DatePipe, RouterModule, RouterLink], styles: ["\n\n.platform-admin-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  font-size: 0.875rem;\n}\n.page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.page-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n}\n.page-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  gap: 1rem;\n}\n.stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.trial[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.alerts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.alert-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 4px solid;\n}\n.alert-item.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-color: #f59e0b;\n}\n.alert-item.info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #3b82f6;\n}\n.alert-item[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.alert-item[_ngcontent-%COMP%]   .alert-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  transform: translateY(-2px);\n}\n.action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.action-card[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n/*# sourceMappingURL=platform-admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformAdminDashboardComponent, { className: "PlatformAdminDashboardComponent" });
})();
export {
  PlatformAdminDashboardComponent
};
//# sourceMappingURL=chunk-IT4PMOYL.js.map
