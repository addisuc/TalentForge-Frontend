import {
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/candidate-portal/candidate-dashboard.component.ts
function CandidateDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16);
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
function CandidateDashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.company);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(app_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", app_r2.appliedDays, "d ago");
  }
}
function CandidateDashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275text(12, "Apply");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r3.company);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", job_r3.location, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", job_r3.salary, "");
  }
}
var CandidateDashboardComponent = class _CandidateDashboardComponent {
  constructor() {
    this.stats = [
      { label: "Applications", value: "12", icon: "\u{1F4DD}" },
      { label: "Interviews", value: "3", icon: "\u{1F4C5}" },
      { label: "Profile Views", value: "45", icon: "\u{1F441}\uFE0F" },
      { label: "Saved Jobs", value: "8", icon: "\u2B50" }
    ];
    this.myApplications = [
      { id: 1, company: "TechCorp", position: "Senior Developer", status: "Interview", appliedDays: 5 },
      { id: 2, company: "StartupXYZ", position: "Full Stack Engineer", status: "Review", appliedDays: 2 },
      { id: 3, company: "BigCo Inc", position: "Tech Lead", status: "Applied", appliedDays: 1 }
    ];
    this.recommendedJobs = [
      { id: 1, title: "Senior Developer", company: "Innovation Labs", location: "Remote", salary: "$120k-$160k" },
      { id: 2, title: "Backend Engineer", company: "Cloud Systems", location: "San Francisco", salary: "$130k-$170k" }
    ];
  }
  static {
    this.\u0275fac = function CandidateDashboardComponent_Factory(t) {
      return new (t || _CandidateDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateDashboardComponent, selectors: [["app-candidate-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 3, consts: [[1, "candidate-dashboard"], [1, "page-header"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "section"], [1, "section-header"], ["routerLink", "/candidate/applications", 1, "btn-link"], [1, "applications-list"], ["class", "application-item", 4, "ngFor", "ngForOf"], ["routerLink", "/candidate/jobs", 1, "btn-link"], [1, "jobs-list"], ["class", "job-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "icon"], [1, "value"], [1, "label"], [1, "application-item"], [1, "app-info"], [1, "company"], [1, "app-meta"], [1, "badge"], [1, "time"], [1, "job-item"], [1, "job-info"], [1, "job-details"], [1, "btn-apply"]], template: function CandidateDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Job Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Track applications and discover new opportunities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275template(7, CandidateDashboardComponent_div_7_Template, 8, 3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
        \u0275\u0275text(12, "My Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 7);
        \u0275\u0275text(14, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275template(16, CandidateDashboardComponent_div_16_Template, 11, 6, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 6)(19, "h2");
        \u0275\u0275text(20, "Recommended Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 10);
        \u0275\u0275text(22, "Browse All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275template(24, CandidateDashboardComponent_div_24_Template, 13, 4, "div", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.myApplications);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.recommendedJobs);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ["\n\n.candidate-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.stat-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.applications-list[_ngcontent-%COMP%], .jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.application-item[_ngcontent-%COMP%], .job-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.application-item[_ngcontent-%COMP%]:hover, .job-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.app-info[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.app-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.app-info[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.app-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%], .job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.app-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.app-meta[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.applied[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n/*# sourceMappingURL=candidate-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateDashboardComponent, { className: "CandidateDashboardComponent" });
})();
export {
  CandidateDashboardComponent
};
//# sourceMappingURL=chunk-CZ5FKCJU.js.map
