import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
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
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/client-portal/client-dashboard.component.ts
var _c0 = (a0) => ["/client/jobs", a0];
function ClientDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
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
  }
}
function ClientDashboardComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, job_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r2.candidates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 5, job_r2.posted, "MMM d, yyyy"));
  }
}
function ClientDashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const candidate_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(candidate_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.position);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(candidate_r3.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(candidate_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", candidate_r3.submittedDays, "d ago");
  }
}
var ClientDashboardComponent = class _ClientDashboardComponent {
  constructor(applicationService) {
    this.applicationService = applicationService;
    this.stats = [
      { label: "Active Jobs", value: "0", icon: "\u{1F4BC}" },
      { label: "Candidates Submitted", value: "0", icon: "\u{1F465}" },
      { label: "Interviews Scheduled", value: "0", icon: "\u{1F4C5}" },
      { label: "Hires Made", value: "0", icon: "\u2705" }
    ];
    this.myJobs = [];
    this.recentCandidates = [];
    this.companyId = "d5ffee58-f341-41ce-b2a8-4458f175ab33";
  }
  ngOnInit() {
    this.loadCandidates();
  }
  loadCandidates() {
    this.applicationService.getClientSubmissions(this.companyId, 0, 100).subscribe({
      next: (data) => {
        const candidates = data.content;
        this.stats[1].value = candidates.length.toString();
        this.recentCandidates = candidates.slice(0, 5).map((app) => ({
          id: app.id,
          name: app.candidateName || "Unknown",
          position: app.jobTitle || "Unknown Position",
          status: this.formatStatus(app.status),
          submittedDays: this.getDaysAgo(app.updatedAt)
        }));
        this.stats[2].value = candidates.filter((c) => c.status === "CLIENT_INTERVIEW").length.toString();
        this.stats[3].value = candidates.filter((c) => c.status === "HIRED").length.toString();
      },
      error: (err) => console.error("Failed to load candidates:", err)
    });
  }
  formatStatus(status) {
    if (status === "SUBMITTED_TO_CLIENT")
      return "Review";
    if (status === "CLIENT_INTERVIEW")
      return "Interview";
    if (status === "OFFER_PENDING")
      return "Offer";
    if (status === "HIRED")
      return "Hired";
    return status.replace(/_/g, " ");
  }
  getDaysAgo(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  }
  static {
    this.\u0275fac = function ClientDashboardComponent_Factory(t) {
      return new (t || _ClientDashboardComponent)(\u0275\u0275directiveInject(ApplicationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDashboardComponent, selectors: [["app-client-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 3, consts: [[1, "client-dashboard"], [1, "page-header"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "section"], [1, "section-header"], ["routerLink", "/client/jobs", 1, "btn-link"], [1, "table-container"], [1, "data-table"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/client/candidates", 1, "btn-link"], [1, "candidates-list"], ["class", "candidate-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "icon"], [1, "value"], [1, "label"], [3, "routerLink"], [1, "badge", "active"], [1, "candidate-item"], [1, "candidate-info"], [1, "position"], [1, "candidate-meta"], [1, "badge"], [1, "time"]], template: function ClientDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Hiring Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Track your job orders and candidate submissions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275template(7, ClientDashboardComponent_div_7_Template, 8, 3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
        \u0275\u0275text(12, "My Active Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 7);
        \u0275\u0275text(14, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "table", 9)(17, "thead")(18, "tr")(19, "th");
        \u0275\u0275text(20, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Posted");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "tbody");
        \u0275\u0275template(28, ClientDashboardComponent_tr_28_Template, 12, 10, "tr", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "h2");
        \u0275\u0275text(32, "Recent Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 11);
        \u0275\u0275text(34, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 12);
        \u0275\u0275template(36, ClientDashboardComponent_div_36_Template, 11, 6, "div", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.myJobs);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.recentCandidates);
      }
    }, dependencies: [CommonModule, NgForOf, DatePipe, RouterModule, RouterLink], styles: ["\n\n.client-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.stat-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.shortlisted[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.candidates-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.candidate-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.candidate-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.candidate-item[_ngcontent-%COMP%]   .candidate-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.candidate-item[_ngcontent-%COMP%]   .candidate-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.candidate-item[_ngcontent-%COMP%]   .candidate-info[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.candidate-item[_ngcontent-%COMP%]   .candidate-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.candidate-item[_ngcontent-%COMP%]   .candidate-meta[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=client-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDashboardComponent, { className: "ClientDashboardComponent" });
})();
export {
  ClientDashboardComponent
};
//# sourceMappingURL=chunk-GI4LWVAJ.js.map
