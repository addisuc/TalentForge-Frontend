import {
  InterviewService
} from "./chunk-3WBYY5QU.js";
import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/candidate-portal/candidate-applications.component.ts
function CandidateApplicationsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "button", 15);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_tr_21_Template_button_click_13_listener() {
      const app_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(app_r2));
    });
    \u0275\u0275text(14, "View Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_tr_21_Template_button_click_15_listener() {
      const app_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.withdrawApplication(app_r2));
    });
    \u0275\u0275text(16, "Withdraw");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.jobTitle || "Job Title");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.companyName || "Company");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, app_r2.appliedAt, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(app_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r2.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", app_r2.status === "WITHDRAWN" || app_r2.status === "REJECTED" || app_r2.status === "OFFER_ACCEPTED");
  }
}
function CandidateApplicationsComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_button_36_Template_button_click_0_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r5 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r5);
  }
}
function CandidateApplicationsComponent_div_39_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "label");
    \u0275\u0275text(2, "Cover Letter:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedApp.coverLetter);
  }
}
function CandidateApplicationsComponent_div_39_div_39_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.formatStatus(activity_r7.oldStatus), " \u2192 ", ctx_r2.formatStatus(activity_r7.newStatus), "");
  }
}
function CandidateApplicationsComponent_div_39_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38)(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CandidateApplicationsComponent_div_39_div_39_div_1_div_11_Template, 3, 2, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getActivityClass(activity_r7.activityType));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getActivityTitle(activity_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, activity_r7.createdAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r7.oldStatus && activity_r7.newStatus);
  }
}
function CandidateApplicationsComponent_div_39_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, CandidateApplicationsComponent_div_39_div_39_div_1_Template, 12, 9, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.activities);
  }
}
function CandidateApplicationsComponent_div_39_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "Loading timeline...");
    \u0275\u0275elementEnd();
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "strong");
    \u0275\u0275text(2, "\u23F1\uFE0F Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", interview_r8.durationMinutes, " minutes");
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "strong");
    \u0275\u0275text(2, "\u{1F517} Meeting Link:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 57);
    \u0275\u0275text(4, "Join Meeting");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", interview_r8.meetingLink, \u0275\u0275sanitizeUrl);
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "strong");
    \u0275\u0275text(2, "\u{1F4CD} Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r8.location);
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", interview_r8.interviewerEmail, ")");
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "strong");
    \u0275\u0275text(2, "\u{1F464} Interviewer:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275template(5, CandidateApplicationsComponent_div_39_div_41_div_3_div_16_span_5_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r8.interviewerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.interviewerEmail);
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "strong");
    \u0275\u0275text(2, "\u{1F4DD} Notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r8.notes);
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "button", 61);
    \u0275\u0275text(2, "Request Reschedule");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
  }
}
function CandidateApplicationsComponent_div_39_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "div", 53)(8, "strong");
    \u0275\u0275text(9, "\u{1F4C5} Date & Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CandidateApplicationsComponent_div_39_div_41_div_3_div_13_Template, 5, 1, "div", 54)(14, CandidateApplicationsComponent_div_39_div_41_div_3_div_14_Template, 5, 1, "div", 54)(15, CandidateApplicationsComponent_div_39_div_41_div_3_div_15_Template, 5, 1, "div", 54)(16, CandidateApplicationsComponent_div_39_div_41_div_3_div_16_Template, 6, 2, "div", 54)(17, CandidateApplicationsComponent_div_39_div_41_div_3_div_17_Template, 5, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CandidateApplicationsComponent_div_39_div_41_div_3_div_18_Template, 3, 1, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r8.interviewType.replace("_", " "));
    \u0275\u0275advance();
    \u0275\u0275classMap(interview_r8.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r8.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 11, interview_r8.scheduledAt, "EEEE, MMM d, y, h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r8.durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.meetingLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.interviewerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r8.status === "SCHEDULED");
  }
}
function CandidateApplicationsComponent_div_39_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "h3");
    \u0275\u0275text(2, "Scheduled Interviews");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CandidateApplicationsComponent_div_39_div_41_div_3_Template, 19, 14, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.interviews);
  }
}
function CandidateApplicationsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_39_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2");
    \u0275\u0275text(4, "Application Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "div", 23)(9, "label");
    \u0275\u0275text(10, "Position:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label");
    \u0275\u0275text(15, "Company:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23)(19, "label");
    \u0275\u0275text(20, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 23)(24, "label");
    \u0275\u0275text(25, "Applied Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "label");
    \u0275\u0275text(31, "Last Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, CandidateApplicationsComponent_div_39_div_35_Template, 5, 1, "div", 24);
    \u0275\u0275elementStart(36, "div", 25)(37, "h3");
    \u0275\u0275text(38, "Application Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, CandidateApplicationsComponent_div_39_div_39_Template, 2, 1, "div", 26)(40, CandidateApplicationsComponent_div_39_div_40_Template, 2, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, CandidateApplicationsComponent_div_39_div_41_Template, 4, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 29)(43, "button", 30);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_39_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275text(44, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.selectedApp.jobTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedApp.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.selectedApp.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedApp.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 11, ctx_r2.selectedApp.appliedAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 14, ctx_r2.selectedApp.updatedAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedApp.coverLetter);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.activities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingActivities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.interviews.length > 0);
  }
}
function CandidateApplicationsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelWithdraw());
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2");
    \u0275\u0275text(4, "Withdraw Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelWithdraw());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "p");
    \u0275\u0275text(9, "Are you sure you want to withdraw your application for ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " at ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 63)(17, "label", 64);
    \u0275\u0275text(18, "Reason for withdrawal (required):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateApplicationsComponent_div_40_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.withdrawalReason, $event) || (ctx_r2.withdrawalReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 66);
    \u0275\u0275text(21, "This action cannot be undone.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 29)(23, "button", 30);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_40_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelWithdraw());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 67);
    \u0275\u0275listener("click", function CandidateApplicationsComponent_div_40_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmWithdraw());
    });
    \u0275\u0275text(26, "Withdraw Application");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.appToWithdraw == null ? null : ctx_r2.appToWithdraw.jobTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.appToWithdraw == null ? null : ctx_r2.appToWithdraw.companyName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.withdrawalReason);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.withdrawalReason || !ctx_r2.withdrawalReason.trim());
  }
}
var CandidateApplicationsComponent = class _CandidateApplicationsComponent {
  constructor(applicationService, interviewService) {
    this.applicationService = applicationService;
    this.interviewService = interviewService;
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.applications = [];
    this.loading = false;
    this.error = "";
    this.totalApplications = 0;
    this.totalPages = 0;
    this.selectedApp = null;
    this.showWithdrawConfirm = false;
    this.appToWithdraw = null;
    this.interviews = [];
    this.loadingInterviews = false;
    this.withdrawalReason = "";
    this.activities = [];
    this.loadingActivities = false;
  }
  ngOnInit() {
    this.loadApplications();
  }
  loadApplications() {
    this.loading = true;
    this.error = "";
    const page = this.currentPage - 1;
    this.applicationService.getMyApplications(page, this.itemsPerPage).subscribe({
      next: (data) => {
        this.applications = data.content;
        this.totalApplications = data.totalElements;
        this.totalPages = data.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading applications:", err);
        this.error = "Failed to load applications";
        this.loading = false;
      }
    });
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalApplications);
  }
  get paginatedApplications() {
    return this.applications;
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++)
      pages.push(i);
    return pages;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadApplications();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadApplications();
    }
  }
  goToPage(page) {
    this.currentPage = page;
    this.loadApplications();
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.loadApplications();
  }
  viewDetails(app) {
    this.selectedApp = app;
    this.loadInterviews(app.id);
    this.loadTimeline(app.id);
  }
  loadInterviews(applicationId) {
    this.loadingInterviews = true;
    this.interviews = [];
    console.log("Loading interviews for application:", applicationId);
    this.interviewService.getInterviewsByApplication(applicationId).subscribe({
      next: (interviews) => {
        console.log("Interviews loaded:", interviews);
        this.interviews = interviews;
        this.loadingInterviews = false;
      },
      error: (err) => {
        console.error("Error loading interviews:", err);
        this.loadingInterviews = false;
      }
    });
  }
  closeDetails() {
    this.selectedApp = null;
    this.interviews = [];
    this.activities = [];
  }
  withdrawApplication(app) {
    this.appToWithdraw = app;
    this.showWithdrawConfirm = true;
  }
  cancelWithdraw() {
    this.showWithdrawConfirm = false;
    this.appToWithdraw = null;
    this.withdrawalReason = "";
  }
  confirmWithdraw() {
    if (this.appToWithdraw && this.withdrawalReason.trim()) {
      const request = {
        reason: this.withdrawalReason.trim()
      };
      this.applicationService.withdrawApplication(this.appToWithdraw.id, request).subscribe({
        next: () => {
          this.showWithdrawConfirm = false;
          this.appToWithdraw = null;
          this.withdrawalReason = "";
          this.loadApplications();
        },
        error: (err) => {
          console.error("Error withdrawing application:", err);
          this.showWithdrawConfirm = false;
          this.appToWithdraw = null;
          this.withdrawalReason = "";
        }
      });
    }
  }
  loadTimeline(applicationId) {
    this.loadingActivities = true;
    this.activities = [];
    this.applicationService.getApplicationTimeline(applicationId).subscribe({
      next: (activities) => {
        this.activities = activities;
        this.loadingActivities = false;
      },
      error: (err) => {
        console.error("Error loading timeline:", err);
        this.loadingActivities = false;
      }
    });
  }
  getActivityClass(activityType) {
    return activityType.toLowerCase().replace("_", "-");
  }
  getActivityTitle(activity) {
    switch (activity.activityType) {
      case "APPLICATION_SUBMITTED":
        return "Application Submitted";
      case "STATUS_CHANGE":
        return "Status Updated";
      case "APPLICATION_WITHDRAWN":
        return "Application Withdrawn";
      default:
        return activity.activityType.replace("_", " ");
    }
  }
  formatStatus(status) {
    return status.replace("_", " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  }
  static {
    this.\u0275fac = function CandidateApplicationsComponent_Factory(t) {
      return new (t || _CandidateApplicationsComponent)(\u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(InterviewService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateApplicationsComponent, selectors: [["app-candidate-applications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 13, consts: [[1, "candidate-applications-page"], [1, "page-header"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-left"], [1, "pagination-info"], [1, "items-per-page", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "pagination-controls"], [1, "btn-page", 3, "click", "disabled"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "badge"], [1, "btn-action", 3, "click"], [1, "btn-action", "secondary", 3, "click", "disabled"], [1, "btn-page", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "detail-row"], ["class", "detail-row full-width", 4, "ngIf"], [1, "timeline-section"], ["class", "timeline", 4, "ngIf"], ["class", "loading-timeline", 4, "ngIf"], ["class", "interview-section", 4, "ngIf"], [1, "modal-footer"], [1, "btn-action", "secondary", 3, "click"], [1, "detail-row", "full-width"], [1, "cover-letter"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-marker"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-title"], [1, "timeline-date"], [1, "timeline-description"], ["class", "timeline-status", 4, "ngIf"], [1, "timeline-status"], [1, "status-change"], [1, "loading-timeline"], [1, "interview-section"], ["class", "interview-card", 4, "ngFor", "ngForOf"], [1, "interview-card"], [1, "interview-header"], [1, "interview-type"], [1, "interview-status"], [1, "interview-details"], [1, "interview-row"], ["class", "interview-row", 4, "ngIf"], ["class", "interview-row full", 4, "ngIf"], ["class", "interview-actions", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "meeting-link", 3, "href"], [4, "ngIf"], [1, "interview-row", "full"], [1, "interview-actions"], ["title", "Coming soon", 1, "btn-action", 3, "disabled"], [1, "modal-content", "small", 3, "click"], [1, "form-group"], ["for", "withdrawalReason"], ["id", "withdrawalReason", "rows", "3", "placeholder", "Please provide a reason for withdrawing your application...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "warning"], [1, "btn-action", "danger", 3, "click", "disabled"]], template: function CandidateApplicationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Track your job applications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "table", 3)(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Applied Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "tbody");
        \u0275\u0275template(21, CandidateApplicationsComponent_tr_21_Template, 17, 10, "tr", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 5)(23, "div", 6)(24, "div", 7);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateApplicationsComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidateApplicationsComponent_Template_select_change_26_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(27, "option", 9);
        \u0275\u0275text(28, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 9);
        \u0275\u0275text(30, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 9);
        \u0275\u0275text(32, "100 per page");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 10)(34, "button", 11);
        \u0275\u0275listener("click", function CandidateApplicationsComponent_Template_button_click_34_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(35, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, CandidateApplicationsComponent_button_36_Template, 2, 3, "button", 12);
        \u0275\u0275elementStart(37, "button", 11);
        \u0275\u0275listener("click", function CandidateApplicationsComponent_Template_button_click_37_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(38, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(39, CandidateApplicationsComponent_div_39_Template, 45, 17, "div", 13)(40, CandidateApplicationsComponent_div_40_Template, 27, 4, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.paginatedApplications);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate3("Showing ", ctx.startIndex + 1, "-", ctx.endIndex, " of ", ctx.totalApplications, "");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pageNumbers);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedApp);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showWithdrawConfirm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.candidate-applications-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.applied[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.badge.review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.offer[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 8px;\n  white-space: nowrap;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn-action.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.items-per-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: white;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.btn-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.modal-content.small[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 2rem;\n  color: #64748b;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n}\n.detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  min-width: 140px;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.detail-row.full-width[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.detail-row.full-width[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.cover-letter[_ngcontent-%COMP%] {\n  color: #0f172a;\n  white-space: pre-wrap;\n  line-height: 1.6;\n  margin: 0;\n}\n.interview-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.interview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\n.interview-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.interview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.interview-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: capitalize;\n}\n.interview-status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.interview-status.scheduled[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.interview-status.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.interview-status.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.interview-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.interview-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  align-items: flex-start;\n}\n.interview-row.full[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.interview-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #475569;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n.interview-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .interview-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0f172a;\n  margin: 0;\n  flex: 1;\n}\n.meeting-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-weight: 600;\n  padding: 4px 12px;\n  background: #eff6ff;\n  border-radius: 6px;\n  display: inline-block;\n}\n.meeting-link[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  text-decoration: none;\n}\n.interview-actions[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  gap: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   p.warning[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  font-family: inherit;\n  resize: vertical;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.timeline-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0.75rem;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e2e8f0;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2rem;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #e2e8f0;\n  background: white;\n}\n.timeline-marker.status-change[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #3b82f6;\n}\n.timeline-marker.application-submitted[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #10b981;\n}\n.timeline-marker.application-withdrawn[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background: #f59e0b;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n}\n.timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.5rem;\n}\n.timeline-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.timeline-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n.timeline-description[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.875rem;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.status-change[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.loading-timeline[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-style: italic;\n  text-align: center;\n  padding: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=candidate-applications.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateApplicationsComponent, { className: "CandidateApplicationsComponent" });
})();
export {
  CandidateApplicationsComponent
};
//# sourceMappingURL=chunk-CLA2FA55.js.map
