import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/platform-admin/system.component.ts
function SystemComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.service);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(service_r1.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.uptime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.responseTime);
  }
}
function SystemComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    \u0275\u0275classMap(log_r2.level);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.timestamp);
  }
}
var SystemComponent = class _SystemComponent {
  constructor() {
    this.systemHealth = [
      { service: "API Server", status: "Healthy", uptime: "99.9%", responseTime: "45ms" },
      { service: "Database", status: "Healthy", uptime: "99.8%", responseTime: "12ms" },
      { service: "Cache", status: "Healthy", uptime: "100%", responseTime: "3ms" },
      { service: "Storage", status: "Warning", uptime: "98.5%", responseTime: "120ms" }
    ];
    this.systemLogs = [
      { level: "info", message: "System backup completed successfully", timestamp: "2024-01-28 10:30:00" },
      { level: "warning", message: "High memory usage detected on server-02", timestamp: "2024-01-28 09:15:00" },
      { level: "info", message: "Database optimization completed", timestamp: "2024-01-28 08:00:00" }
    ];
  }
  static {
    this.\u0275fac = function SystemComponent_Factory(t) {
      return new (t || _SystemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemComponent, selectors: [["app-system"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 2, consts: [[1, "system-page"], [1, "page-header"], [1, "section"], [1, "section-header"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "logs-list"], ["class", "log-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "badge"], [1, "log-item"], [1, "log-content"], [1, "log-message"], [1, "log-time"]], template: function SystemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "System Health");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Monitor platform infrastructure and performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "h2");
        \u0275\u0275text(9, "Service Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "table", 5)(12, "thead")(13, "tr")(14, "th");
        \u0275\u0275text(15, "Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Uptime");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Response Time");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275template(23, SystemComponent_tr_23_Template, 11, 6, "tr", 6);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "h2");
        \u0275\u0275text(27, "System Logs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7);
        \u0275\u0275template(29, SystemComponent_div_29_Template, 6, 4, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.systemHealth);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.systemLogs);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.system-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.healthy[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.logs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.log-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 4px solid;\n}\n.log-item.info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #3b82f6;\n}\n.log-item.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-color: #f59e0b;\n}\n.log-item[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.log-item[_ngcontent-%COMP%]   .log-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=system.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemComponent, { className: "SystemComponent" });
})();
export {
  SystemComponent
};
//# sourceMappingURL=chunk-S5235LQC.js.map
