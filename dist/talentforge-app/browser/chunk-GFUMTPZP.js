import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  FormsModule
} from "./chunk-Z6TDORLQ.js";
import "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/client-portal/client-candidates.component.ts
function ClientCandidatesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ClientCandidatesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "No candidates have been submitted yet.");
    \u0275\u0275elementEnd()();
  }
}
function ClientCandidatesComponent_div_8_div_9_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 17);
    \u0275\u0275text(14, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275text(16, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 18);
    \u0275\u0275text(18, "Reject");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(candidate_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getBadgeClass(candidate_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(candidate_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 5, candidate_r4.submitted, "MMM d, yyyy"));
  }
}
function ClientCandidatesComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Candidate Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Submitted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ClientCandidatesComponent_div_8_div_9_tr_15_Template, 19, 8, "tr", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const jobGroup_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", jobGroup_r2.candidates);
  }
}
function ClientCandidatesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275listener("click", function ClientCandidatesComponent_div_8_Template_div_click_1_listener() {
      const jobGroup_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleJob(jobGroup_r2.jobId));
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientCandidatesComponent_div_8_div_9_Template, 16, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jobGroup_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(jobGroup_r2.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", jobGroup_r2.candidates.length, " candidate(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jobGroup_r2.expanded ? "\u25BC" : "\u25B6");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", jobGroup_r2.expanded);
  }
}
var ClientCandidatesComponent = class _ClientCandidatesComponent {
  constructor(applicationService, authService) {
    this.applicationService = applicationService;
    this.authService = authService;
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.loading = false;
    this.applications = [];
    this.totalCandidates = 0;
    this.companyId = "";
    this.candidatesByJob = [];
  }
  ngOnInit() {
    console.log("ClientCandidatesComponent ngOnInit called");
    this.companyId = "d5ffee58-f341-41ce-b2a8-4458f175ab33";
    console.log("Company ID:", this.companyId);
    this.loadSubmissions();
  }
  loadSubmissions() {
    console.log("loadSubmissions called with companyId:", this.companyId);
    if (!this.companyId) {
      console.log("No companyId, returning");
      return;
    }
    this.loading = true;
    console.log("Making API call to getClientSubmissions");
    this.applicationService.getClientSubmissions(this.companyId, 0, 100).subscribe({
      next: (data) => {
        this.applications = data.content;
        this.totalCandidates = data.totalElements;
        this.groupCandidatesByJob();
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load submissions:", err);
        this.loading = false;
      }
    });
  }
  groupCandidatesByJob() {
    const jobMap = /* @__PURE__ */ new Map();
    this.applications.forEach((app) => {
      const jobId = app.jobId;
      const jobTitle = app.jobTitle || "Unknown Position";
      if (!jobMap.has(jobId)) {
        jobMap.set(jobId, {
          jobId,
          jobTitle,
          candidates: [],
          expanded: true
        });
      }
      jobMap.get(jobId).candidates.push({
        id: app.id,
        name: app.candidateName || "Unknown",
        email: app.candidateEmail || "N/A",
        status: this.formatStatus(app.status),
        submitted: app.updatedAt
      });
    });
    this.candidatesByJob = Array.from(jobMap.values());
  }
  toggleJob(jobId) {
    const job = this.candidatesByJob.find((j) => j.jobId === jobId);
    if (job) {
      job.expanded = !job.expanded;
    }
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
  getBadgeClass(status) {
    if (status === "Review")
      return "badge-review";
    if (status === "Interview")
      return "badge-interview";
    if (status === "Offer")
      return "badge-offer";
    if (status === "Hired")
      return "badge-hired";
    return "";
  }
  static {
    this.\u0275fac = function ClientCandidatesComponent_Factory(t) {
      return new (t || _ClientCandidatesComponent)(\u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientCandidatesComponent, selectors: [["app-client-candidates"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "client-candidates-page"], [1, "page-header"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "job-group", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "empty-state"], [1, "job-group"], [1, "job-header", 3, "click"], [1, "job-info"], [1, "candidate-count"], [1, "toggle-icon"], ["class", "table-container", 4, "ngIf"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "btn-action"], [1, "btn-action", "secondary"]], template: function ClientCandidatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Submitted Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Candidates submitted by recruiters for your review");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, ClientCandidatesComponent_div_6_Template, 2, 0, "div", 2)(7, ClientCandidatesComponent_div_7_Template, 3, 0, "div", 3)(8, ClientCandidatesComponent_div_8_Template, 10, 4, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.candidatesByJob.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.candidatesByJob);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule], styles: ["\n\n.client-candidates-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1rem;\n}\n.job-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.job-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.job-header[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.job-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.candidate-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-offer[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-hired[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 8px;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=client-candidates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientCandidatesComponent, { className: "ClientCandidatesComponent" });
})();
export {
  ClientCandidatesComponent
};
//# sourceMappingURL=chunk-GFUMTPZP.js.map
