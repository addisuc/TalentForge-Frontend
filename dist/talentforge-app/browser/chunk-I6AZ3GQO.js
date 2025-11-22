import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
import {
  ClientService
} from "./chunk-HDDOCNXX.js";
import "./chunk-5SCB54UF.js";
import "./chunk-2XPUPG4G.js";
import "./chunk-3CPV5NE5.js";
import {
  NavigationService
} from "./chunk-4MPRBMJL.js";
import "./chunk-BAFRGCFI.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  JobService
} from "./chunk-RR3KTTI2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-Z6TDORLQ.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/dashboard.component.ts
function DashboardComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", stat_r1.trend > 0)("negative", stat_r1.trend < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", stat_r1.trend > 0 ? "\u2191" : "\u2193", " ", ctx_r1.Math.abs(stat_r1.trend), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, DashboardComponent_div_10_div_1_Template, 10, 9, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats);
  }
}
function DashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2, "\u{1F4CA} Dashboard analytics coming soon");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(candidate_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.role);
    \u0275\u0275advance();
    \u0275\u0275classMap(candidate_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r3.status, " ");
  }
}
function DashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, DashboardComponent_div_19_div_1_Template, 10, 6, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentCandidates);
  }
}
function DashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " No recent candidates ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", job_r4.applicants, " applicants \u2022 ", job_r4.daysOpen, " days open");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r4.status);
  }
}
function DashboardComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, DashboardComponent_div_27_div_1_Template, 8, 4, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activeJobs);
  }
}
function DashboardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " No active jobs ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stage_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r5.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r5.name);
  }
}
function DashboardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, DashboardComponent_div_35_div_1_Template, 5, 2, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pipelineStages);
  }
}
function DashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " No pipeline data ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function DashboardComponent_button_42_Template_button_click_0_listener() {
      const action_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeAction(action_r7.action));
    });
    \u0275\u0275elementStart(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r7 = ctx.$implicit;
    \u0275\u0275classProp("primary", action_r7.primary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r7.label);
  }
}
function DashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function DashboardComponent_div_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function DashboardComponent_div_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2");
    \u0275\u0275text(4, "Invite Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function DashboardComponent_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 61)(8, "div", 62)(9, "label");
    \u0275\u0275text(10, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_43_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteData.companyName, $event) || (ctx_r1.inviteData.companyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "label");
    \u0275\u0275text(14, "Contact Person *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_43_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteData.contactPerson, $event) || (ctx_r1.inviteData.contactPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "label");
    \u0275\u0275text(18, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_43_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteData.email, $event) || (ctx_r1.inviteData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 66)(21, "button", 67);
    \u0275\u0275listener("click", function DashboardComponent_div_43_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 68);
    \u0275\u0275listener("click", function DashboardComponent_div_43_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendInvitation());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteData.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteData.contactPerson);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteData.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isInviting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isInviting ? "Sending..." : "Send Invitation");
  }
}
function DashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " \u2713 Client invitation sent successfully! ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " \u26A0 Failed to send invitation. Please try again. ");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(authService, navigationService, router, jobService, applicationService, clientService) {
    this.authService = authService;
    this.navigationService = navigationService;
    this.router = router;
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.clientService = clientService;
    this.Math = Math;
    this.userName = "User";
    this.stats = [];
    this.recentCandidates = [];
    this.activeJobs = [];
    this.pipelineStages = [];
    this.loading = true;
    this.showInviteModal = false;
    this.isInviting = false;
    this.showSuccessToast = false;
    this.showErrorToast = false;
    this.inviteData = {
      companyName: "",
      contactPerson: "",
      email: ""
    };
    this.quickActions = [
      { icon: "\u2795", label: "Post New Job", action: () => this.navigateToJobs(), primary: true },
      { icon: "\u{1F464}", label: "Invite Client User", action: () => this.openInviteClientModal(), primary: true },
      { icon: "\u{1F465}", label: "View Candidates", action: () => this.router.navigate(["/candidates"]) },
      { icon: "\u{1F4CB}", label: "View Applications", action: () => this.router.navigate(["/applications"]) },
      { icon: "\u{1F3E2}", label: "Manage Clients", action: () => this.router.navigate(["/clients"]) },
      { icon: "\u2699\uFE0F", label: "Settings", action: () => this.router.navigate(["/settings"]) }
    ];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      if (user) {
        this.userName = `${user.firstName} ${user.lastName}`;
      }
    });
    this.loadDashboardData();
    this.refreshInterval = setInterval(() => {
      this.loadDashboardData();
    }, 1e4);
  }
  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
  loadDashboardData() {
    forkJoin({
      jobs: this.jobService.getAllJobs(0, 100),
      applications: this.applicationService.getAllApplications(0, 100)
    }).subscribe({
      next: ({ jobs, applications }) => {
        this.calculateStats(jobs.content, applications.content);
        this.loadRecentData(jobs.content, applications.content);
      },
      error: (err) => console.error("Failed to load dashboard data:", err)
    });
  }
  calculateStats(jobs, applications) {
    const now = /* @__PURE__ */ new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;
    const activeJobs = jobs.filter((j) => j.status === "ACTIVE").length;
    const newApplicationsThisMonth = applications.filter((app) => {
      const dateStr = app.appliedAt || app.createdAt;
      if (!dateStr)
        return false;
      const date = new Date(dateStr);
      return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
    }).length;
    const newApplicationsLastMonth = applications.filter((app) => {
      const dateStr = app.appliedAt || app.createdAt;
      if (!dateStr)
        return false;
      const date = new Date(dateStr);
      return date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;
    }).length;
    const appTrend = newApplicationsLastMonth > 0 ? Math.round((newApplicationsThisMonth - newApplicationsLastMonth) / newApplicationsLastMonth * 100) : newApplicationsThisMonth > 0 ? 100 : 0;
    const activeInterviews = applications.filter((app) => {
      const interviewStages = ["INTERVIEW", "PHONE_INTERVIEW", "TECHNICAL_INTERVIEW", "FINAL_INTERVIEW"];
      return interviewStages.includes(app.status);
    }).length;
    const placementsThisMonth = applications.filter((app) => {
      const status = app.status || app.stage;
      return status === "HIRED" || status === "OFFER_ACCEPTED";
    }).length;
    this.stats = [
      { icon: "\u{1F4BC}", value: activeJobs.toString(), label: "Open Positions", trend: 0 },
      { icon: "\u{1F4DD}", value: newApplicationsThisMonth.toString(), label: "New Applications", trend: appTrend },
      { icon: "\u{1F3AF}", value: activeInterviews.toString(), label: "Active Interviews", trend: 0 },
      { icon: "\u2705", value: placementsThisMonth.toString(), label: "Placements", trend: 0 }
    ];
  }
  loadRecentData(jobs, applications) {
    this.activeJobs = jobs.filter((j) => j.status === "ACTIVE").slice(0, 4).map((job) => {
      const applicants = applications.filter((app) => app.jobOrderId === job.id).length;
      const daysOpen = this.getDaysAgo(job.createdAt);
      return {
        title: job.title,
        applicants,
        daysOpen,
        status: "Active"
      };
    });
    this.pipelineStages = [
      { name: "Applied", count: applications.filter((app) => app.status === "APPLIED").length },
      { name: "Screening", count: applications.filter((app) => app.status === "SCREENING").length },
      { name: "Interview", count: applications.filter((app) => ["PHONE_INTERVIEW", "TECHNICAL_INTERVIEW", "FINAL_INTERVIEW"].includes(app.status)).length },
      { name: "Offer", count: applications.filter((app) => ["OFFER_PENDING", "OFFER_ACCEPTED", "OFFER_DECLINED"].includes(app.status)).length }
    ];
  }
  getDaysAgo(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  }
  navigateToJobs() {
    this.router.navigate(["/jobs"]);
  }
  executeAction(action) {
    action();
  }
  openInviteClientModal() {
    this.showInviteModal = true;
    this.inviteData = {
      companyName: "",
      contactPerson: "",
      email: ""
    };
  }
  closeInviteModal() {
    this.showInviteModal = false;
    this.inviteData = {
      companyName: "",
      contactPerson: "",
      email: ""
    };
  }
  sendInvitation() {
    if (!this.inviteData.companyName || !this.inviteData.contactPerson || !this.inviteData.email) {
      this.showError("Please fill in all required fields");
      return;
    }
    this.isInviting = true;
    this.clientService.inviteClient(this.inviteData).subscribe({
      next: (response) => {
        this.isInviting = false;
        this.closeInviteModal();
        this.showSuccess("Client invitation sent successfully!");
      },
      error: (error) => {
        this.isInviting = false;
        console.error("Error sending invitation:", error);
        this.showError("Failed to send invitation. Please try again.");
      }
    });
  }
  showSuccess(message) {
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3e3);
  }
  showError(message) {
    this.showErrorToast = true;
    setTimeout(() => {
      this.showErrorToast = false;
    }, 3e3);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(ClientService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 13, consts: [[1, "dashboard-page"], [1, "content"], [1, "page-header"], [1, "page-subtitle"], [1, "btn-primary", 3, "click"], ["class", "stats-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "dashboard-grid"], [1, "card", "recent-candidates"], [1, "card-header"], ["routerLink", "/candidates"], ["class", "candidate-list", 4, "ngIf"], ["class", "empty-message", 4, "ngIf"], [1, "card", "active-jobs"], ["routerLink", "/jobs"], ["class", "job-list", 4, "ngIf"], [1, "card", "pipeline-overview"], ["routerLink", "/pipeline"], ["class", "pipeline-stages", 4, "ngIf"], [1, "card", "quick-actions"], [1, "actions-grid"], ["class", "action-btn", 3, "primary", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "toast success", 4, "ngIf"], ["class", "toast error", 4, "ngIf"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-trend"], [1, "stat-value"], [1, "stat-label"], [1, "empty-state"], [1, "candidate-list"], ["class", "candidate-item", 4, "ngFor", "ngForOf"], [1, "candidate-item"], [1, "candidate-avatar"], [1, "candidate-info"], [1, "candidate-name"], [1, "candidate-role"], [1, "candidate-status"], [1, "empty-message"], [1, "job-list"], ["class", "job-item", 4, "ngFor", "ngForOf"], [1, "job-item"], [1, "job-info"], [1, "job-title"], [1, "job-meta"], [1, "job-status"], [1, "pipeline-stages"], ["class", "stage", 4, "ngFor", "ngForOf"], [1, "stage"], [1, "stage-count"], [1, "stage-name"], [1, "action-btn", 3, "click"], [1, "action-icon"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "Enter company name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter contact person name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Enter email address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "toast", "success"], [1, "toast", "error"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Dashboard Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_8_listener() {
          return ctx.navigateToJobs();
        });
        \u0275\u0275text(9, "+ Post New Job");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, DashboardComponent_div_10_Template, 2, 1, "div", 5)(11, DashboardComponent_div_11_Template, 3, 0, "div", 6);
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "h3");
        \u0275\u0275text(16, "Recent Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 10);
        \u0275\u0275text(18, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, DashboardComponent_div_19_Template, 2, 1, "div", 11)(20, DashboardComponent_div_20_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 9)(23, "h3");
        \u0275\u0275text(24, "Active Job Postings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 14);
        \u0275\u0275text(26, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, DashboardComponent_div_27_Template, 2, 1, "div", 15)(28, DashboardComponent_div_28_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 16)(30, "div", 9)(31, "h3");
        \u0275\u0275text(32, "Hiring Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 17);
        \u0275\u0275text(34, "View Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, DashboardComponent_div_35_Template, 2, 1, "div", 18)(36, DashboardComponent_div_36_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 19)(38, "div", 9)(39, "h3");
        \u0275\u0275text(40, "Quick Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 20);
        \u0275\u0275template(42, DashboardComponent_button_42_Template, 5, 4, "button", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(43, DashboardComponent_div_43_Template, 25, 5, "div", 22)(44, DashboardComponent_div_44_Template, 2, 0, "div", 23)(45, DashboardComponent_div_45_Template, 2, 0, "div", 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Welcome back, ", ctx.userName, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.stats.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stats.length === 0);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.recentCandidates.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.recentCandidates.length === 0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.activeJobs.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeJobs.length === 0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.pipelineStages.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pipelineStages.length === 0);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.quickActions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showInviteModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSuccessToast);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showErrorToast);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.dashboard-page[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n  transform: translateY(-1px);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.stat-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.stat-trend.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.candidate-list[_ngcontent-%COMP%], .job-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.candidate-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  transition: background 0.3s;\n}\n.candidate-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.candidate-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.candidate-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.candidate-role[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.candidate-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.candidate-status.screening[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.candidate-status.interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.candidate-status.offer[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.job-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  border-radius: 8px;\n  transition: background 0.3s;\n}\n.job-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.job-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.job-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #d1fae5;\n  color: #065f46;\n}\n.pipeline-stages[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n.stage[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.stage-count[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0066ff;\n  margin-bottom: 8px;\n}\n.stage-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-weight: 600;\n  color: #0f172a;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  transform: translateY(-2px);\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n  box-shadow: 0 2px 4px rgba(0, 102, 255, 0.2);\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n  box-shadow: 0 4px 8px rgba(0, 102, 255, 0.3);\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  margin-bottom: 32px;\n  color: #64748b;\n  font-size: 1.125rem;\n}\n.empty-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #64748b;\n  padding: 4px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 16px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  z-index: 1001;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.toast.success[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.toast.error[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-I6AZ3GQO.js.map
