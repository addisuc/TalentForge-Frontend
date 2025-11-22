import {
  JobRequestService
} from "./chunk-OA4SEQZO.js";
import {
  EmailService
} from "./chunk-3OPJ2QOJ.js";
import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
import {
  ClientService
} from "./chunk-HDDOCNXX.js";
import "./chunk-3CPV5NE5.js";
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
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  catchError,
  forkJoin,
  of,
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

// src/app/features/clients/client-details.component.ts
function ClientDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p");
    \u0275\u0275text(2, "Failed to load client details. Please try again.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 26)(10, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editClient());
    });
    \u0275\u0275text(11, "\u270F\uFE0F Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.contactClient());
    });
    \u0275\u0275text(13, "\u2709\uFE0F Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_5_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addNote());
    });
    \u0275\u0275text(15, "\u{1F4DD} Add Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_5_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createJob());
    });
    \u0275\u0275text(17, "\u2795 New Job");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.client.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.client.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.client.industry || "Industry");
  }
}
function ClientDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.label);
  }
}
function ClientDetailsComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingJobRequests);
  }
}
function ClientDetailsComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingApprovals);
  }
}
function ClientDetailsComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadFeedback);
  }
}
function ClientDetailsComponent_div_24_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_24_div_10_div_1_Template_div_click_0_listener() {
      const job_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewJob(job_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getApplicationCount(job_r5.id), " applications \u2022 Posted ", \u0275\u0275pipeBind2(6, 6, job_r5.createdAt, "MMM d, yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", job_r5.status === "OPEN" || job_r5.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r5.status);
  }
}
function ClientDetailsComponent_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ClientDetailsComponent_div_24_div_10_div_1_Template, 9, 9, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.jobs);
  }
}
function ClientDetailsComponent_div_24_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No jobs posted for this client yet.");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_24_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r6.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, note_r6.createdAt, "MMM d, yyyy h:mm a"));
  }
}
function ClientDetailsComponent_div_24_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, ClientDetailsComponent_div_24_div_16_div_1_Template, 6, 5, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.notes);
  }
}
function ClientDetailsComponent_div_24_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, 'No notes yet. Click "Add Note" to add one.');
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_24_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hire_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hire_r7.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hire_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hire_r7.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, hire_r7.date, "MMM d, yyyy"));
  }
}
function ClientDetailsComponent_div_24_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, ClientDetailsComponent_div_24_div_21_div_1_Template, 11, 7, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentHires);
  }
}
function ClientDetailsComponent_div_24_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No hires yet.");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_24_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "div", 63)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r8.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(activity_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, activity_r8.date, "MMM d, yyyy h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r8.description);
  }
}
function ClientDetailsComponent_div_24_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, ClientDetailsComponent_div_24_div_26_div_1_Template, 12, 7, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activities);
  }
}
function ClientDetailsComponent_div_24_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No activity yet.");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 31)(2, "h2");
    \u0275\u0275text(3, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32)(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ClientDetailsComponent_div_24_div_10_Template, 2, 1, "div", 33)(11, ClientDetailsComponent_div_24_p_11_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "div", 32)(14, "h2");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ClientDetailsComponent_div_24_div_16_Template, 2, 1, "div", 35)(17, ClientDetailsComponent_div_24_p_17_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 31)(19, "h2");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ClientDetailsComponent_div_24_div_21_Template, 2, 1, "div", 36)(22, ClientDetailsComponent_div_24_p_22_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 31)(24, "h2");
    \u0275\u0275text(25, "Activity Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ClientDetailsComponent_div_24_div_26_Template, 2, 1, "div", 37)(27, ClientDetailsComponent_div_24_p_27_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.client.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Job Orders (", ctx_r1.jobs.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobs.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Notes (", ctx_r1.notes.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notes.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Recent Hires (", ctx_r1.recentHires.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recentHires.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recentHires.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activities.length === 0);
  }
}
function ClientDetailsComponent_div_25_div_13_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81)(1, "small");
    \u0275\u0275text(2, "Request ID: ");
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r10.requestId);
  }
}
function ClientDetailsComponent_div_25_div_13_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_div_13_div_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const request_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveJobRequest(request_r10));
    });
    \u0275\u0275text(2, "\u2713 Approve & Create Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_div_13_div_41_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const request_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewJobRequestDetails(request_r10));
    });
    \u0275\u0275text(4, "View Full Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 83);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_div_13_div_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const request_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectJobRequest(request_r10));
    });
    \u0275\u0275text(6, "\u2717 Decline");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_25_div_13_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_div_13_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const request_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewCreatedJob(request_r10));
    });
    \u0275\u0275text(2, "View Created Job");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_25_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ClientDetailsComponent_div_25_div_13_p_7_Template, 5, 1, "p", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 75)(11, "div", 76)(12, "span", 17);
    \u0275\u0275text(13, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 76)(17, "span", 17);
    \u0275\u0275text(18, "Openings:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 76)(22, "span", 17);
    \u0275\u0275text(23, "Salary Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 76)(27, "span", 17);
    \u0275\u0275text(28, "Requested:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 18);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 78)(32, "strong");
    \u0275\u0275text(33, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 79)(37, "strong");
    \u0275\u0275text(38, "Requirements:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, ClientDetailsComponent_div_25_div_13_div_41_Template, 7, 0, "div", 80)(42, ClientDetailsComponent_div_25_div_13_div_42_Template, 3, 0, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", request_r10.department, " \u2022 ", request_r10.location, " \u2022 ", request_r10.employmentType, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r10.requestId);
    \u0275\u0275advance();
    \u0275\u0275classMap(request_r10.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r10.status);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(request_r10.priority.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r10.priority);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r10.openings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r10.salaryRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r10.requestedDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r10.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r10.requirements);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r10.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r10.status === "Approved");
  }
}
function ClientDetailsComponent_div_25_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 84);
    \u0275\u0275text(2, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Job Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("No ", ctx_r1.jobRequestFilter === "all" ? "" : ctx_r1.jobRequestFilter, " job requests from this client");
  }
}
function ClientDetailsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 31)(2, "div", 32)(3, "h2");
    \u0275\u0275text(4, "Job Requests from Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66)(6, "button", 67);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jobRequestFilter = "pending");
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 67);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jobRequestFilter = "approved");
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_25_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jobRequestFilter = "all");
    });
    \u0275\u0275text(11, "All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 68);
    \u0275\u0275template(13, ClientDetailsComponent_div_25_div_13_Template, 43, 18, "div", 69)(14, ClientDetailsComponent_div_25_div_14_Template, 7, 1, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.jobRequestFilter === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pending (", ctx_r1.getPendingJobRequests().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.jobRequestFilter === "approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Approved (", ctx_r1.approvedJobRequests, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.jobRequestFilter === "all");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredJobRequests());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFilteredJobRequests().length === 0);
  }
}
function ClientDetailsComponent_div_26_div_8_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "strong");
    \u0275\u0275text(2, "Your Notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const submission_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(submission_r15.recruiterNotes);
  }
}
function ClientDetailsComponent_div_26_div_8_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98)(2, "strong");
    \u0275\u0275text(3, "Client Response:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const submission_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r15.responseDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r15.clientFeedback);
  }
}
function ClientDetailsComponent_div_26_div_8_button_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275text(1, "Send Reminder");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89)(3, "div", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 74);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 90)(13, "div", 91)(14, "span", 17);
    \u0275\u0275text(15, "Submitted:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 91)(19, "span", 17);
    \u0275\u0275text(20, "Your Rating:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ClientDetailsComponent_div_26_div_8_div_23_Template, 5, 1, "div", 92)(24, ClientDetailsComponent_div_26_div_8_div_24_Template, 8, 2, "div", 93);
    \u0275\u0275elementStart(25, "div", 94)(26, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_26_div_8_Template_button_click_26_listener() {
      const submission_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewCandidateProfile(submission_r15));
    });
    \u0275\u0275text(27, "View Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ClientDetailsComponent_div_26_div_8_button_28_Template, 2, 0, "button", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const submission_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(submission_r15.candidateName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(submission_r15.candidateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r15.position);
    \u0275\u0275advance();
    \u0275\u0275classMap(submission_r15.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submission_r15.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(submission_r15.submittedDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r15.recruiterRating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r15.recruiterNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r15.clientFeedback);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", submission_r15.status === "Pending Review");
  }
}
function ClientDetailsComponent_div_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 84);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Submissions Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Submit candidates to this client for review");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 31)(2, "div", 32)(3, "h2");
    \u0275\u0275text(4, "Candidate Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSubmitCandidateModal());
    });
    \u0275\u0275text(6, "\u2795 Submit New Candidate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 85);
    \u0275\u0275template(8, ClientDetailsComponent_div_26_div_8_Template, 29, 11, "div", 86)(9, ClientDetailsComponent_div_26_div_9_Template, 7, 0, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.candidateSubmissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.candidateSubmissions.length === 0);
  }
}
function ClientDetailsComponent_div_27_div_6_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedback_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} ", feedback_r17.candidateName, "");
  }
}
function ClientDetailsComponent_div_27_div_6_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedback_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4BC} ", feedback_r17.positionTitle, "");
  }
}
function ClientDetailsComponent_div_27_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, ClientDetailsComponent_div_27_div_6_div_9_span_1_Template, 2, 1, "span", 12)(2, ClientDetailsComponent_div_27_div_6_div_9_span_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedback_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r17.candidateName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r17.positionTitle);
  }
}
function ClientDetailsComponent_div_27_div_6_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_27_div_6_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const feedback_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsRead(feedback_r17));
    });
    \u0275\u0275text(1, "\u2713 Mark as Read");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div")(3, "span", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 106);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientDetailsComponent_div_27_div_6_div_9_Template, 3, 2, "div", 107);
    \u0275\u0275elementStart(10, "div", 108)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 109)(14, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_27_div_6_Template_button_click_14_listener() {
      const feedback_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.respondToFeedback(feedback_r17));
    });
    \u0275\u0275text(15, "\u{1F4AC} Respond");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ClientDetailsComponent_div_27_div_6_button_16_Template, 2, 0, "button", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feedback_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(feedback_r17.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feedback_r17.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r17.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r17.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r17.candidateName || feedback_r17.positionTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r17.message);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !feedback_r17.read);
  }
}
function ClientDetailsComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 84);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Feedback Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Client feedback will appear here");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 31)(2, "div", 32)(3, "h2");
    \u0275\u0275text(4, "Feedback from Client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 101);
    \u0275\u0275template(6, ClientDetailsComponent_div_27_div_6_Template, 17, 8, "div", 102)(7, ClientDetailsComponent_div_27_div_7_Template, 7, 0, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.clientFeedback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientFeedback.length === 0);
  }
}
function ClientDetailsComponent_div_28_div_8_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 17);
    \u0275\u0275text(2, "Meeting:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", interview_r21.meetingLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r21.platform);
  }
}
function ClientDetailsComponent_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "div", 116)(3, "div", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 117);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 118)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 74);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 119)(15, "div", 91)(16, "span", 17);
    \u0275\u0275text(17, "Interviewer:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 91)(21, "span", 17);
    \u0275\u0275text(22, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 18);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ClientDetailsComponent_div_28_div_8_div_25_Template, 5, 2, "div", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 121)(27, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_28_div_8_Template_button_click_27_listener() {
      const interview_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editInterview(interview_r21));
    });
    \u0275\u0275text(28, "\u270F\uFE0F Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_28_div_8_Template_button_click_29_listener() {
      const interview_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.notifyClient(interview_r21));
    });
    \u0275\u0275text(30, "\u{1F514} Notify Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 83);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_28_div_8_Template_button_click_31_listener() {
      const interview_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelInterview(interview_r21));
    });
    \u0275\u0275text(32, "\u2717 Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const interview_r21 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r21.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r21.time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r21.candidateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", interview_r21.position, " \u2022 ", interview_r21.round, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(interview_r21.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r21.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(interview_r21.interviewer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(interview_r21.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r21.meetingLink);
  }
}
function ClientDetailsComponent_div_28_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 84);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Interviews Scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Schedule interviews to share with client");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 31)(2, "div", 32)(3, "h2");
    \u0275\u0275text(4, "Shared Interviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleInterview());
    });
    \u0275\u0275text(6, "\u{1F4C5} Schedule Interview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 112);
    \u0275\u0275template(8, ClientDetailsComponent_div_28_div_8_Template, 33, 11, "div", 113)(9, ClientDetailsComponent_div_28_div_9_Template, 7, 0, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.sharedInterviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sharedInterviews.length === 0);
  }
}
function ClientDetailsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEmailModal());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_73_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 125)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 126);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_73_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEmailModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 127)(8, "div", 128)(9, "label");
    \u0275\u0275text(10, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 128)(13, "label");
    \u0275\u0275text(14, "Subject *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDetailsComponent_div_73_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailSubject, $event) || (ctx_r1.emailSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 128)(17, "label");
    \u0275\u0275text(18, "Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 131);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDetailsComponent_div_73_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailBody, $event) || (ctx_r1.emailBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 132)(21, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_73_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEmailModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 133);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_73_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendEmail());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Send Email to ", ctx_r1.client == null ? null : ctx_r1.client.name, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.client == null ? null : ctx_r1.client.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailSubject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailBody);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.sending);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sending ? "Sending..." : "Send Email");
  }
}
function ClientDetailsComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_74_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNoteModal());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_74_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 125)(3, "h2");
    \u0275\u0275text(4, "Add Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 126);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_74_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNoteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 127)(8, "div", 128)(9, "label");
    \u0275\u0275text(10, "Note *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 134);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDetailsComponent_div_74_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.noteText, $event) || (ctx_r1.noteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 132)(13, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_74_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNoteModal());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_74_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNote());
    });
    \u0275\u0275text(16, "Save Note");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.noteText);
  }
}
function ClientDetailsComponent_div_75_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 138)(2, "div", 139)(3, "div", 32)(4, "span", 140);
    \u0275\u0275text(5, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 141)(9, "div", 91)(10, "label");
    \u0275\u0275text(11, "Job Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 142);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 91)(15, "label");
    \u0275\u0275text(16, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 91)(20, "label");
    \u0275\u0275text(21, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 91)(25, "label");
    \u0275\u0275text(26, "Employment Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 91)(30, "label");
    \u0275\u0275text(31, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 143);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 91)(35, "label");
    \u0275\u0275text(36, "Number of Openings:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 91)(40, "label");
    \u0275\u0275text(41, "Salary Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 91)(45, "label");
    \u0275\u0275text(46, "Request ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span")(48, "code");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 139)(51, "div", 32)(52, "span", 140);
    \u0275\u0275text(53, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3");
    \u0275\u0275text(55, "Job Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 144);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 139)(59, "div", 32)(60, "span", 140);
    \u0275\u0275text(61, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "h3");
    \u0275\u0275text(63, "Requirements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 145);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 139)(67, "div", 32)(68, "span", 140);
    \u0275\u0275text(69, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h3");
    \u0275\u0275text(71, "Request Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 141)(73, "div", 91)(74, "label");
    \u0275\u0275text(75, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 74);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 91)(79, "label");
    \u0275\u0275text(80, "Requested Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 91)(85, "label");
    \u0275\u0275text(86, "Client:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.department);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.employmentType);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.selectedJobRequest.priority == null ? null : ctx_r1.selectedJobRequest.priority.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.priority);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.numberOfOpenings || ctx_r1.selectedJobRequest.openings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.salaryRange);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.requestId);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedJobRequest.description, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedJobRequest.requirements, " ");
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r1.selectedJobRequest.status == null ? null : ctx_r1.selectedJobRequest.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 17, ctx_r1.selectedJobRequest.createdAt, "MMM d, yyyy h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedJobRequest.clientName);
  }
}
function ClientDetailsComponent_div_75_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "button", 28);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.approveJobRequest(ctx_r1.selectedJobRequest);
      return \u0275\u0275resetView(ctx_r1.closeJobRequestModal());
    });
    \u0275\u0275text(2, "\u2713 Approve & Create Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 83);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.rejectJobRequest(ctx_r1.selectedJobRequest);
      return \u0275\u0275resetView(ctx_r1.closeJobRequestModal());
    });
    \u0275\u0275text(4, "\u2717 Decline");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeJobRequestModal());
    });
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 125)(3, "h2");
    \u0275\u0275text(4, "Job Request Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 126);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeJobRequestModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ClientDetailsComponent_div_75_div_7_Template, 89, 20, "div", 136);
    \u0275\u0275elementStart(8, "div", 132)(9, "button", 27);
    \u0275\u0275listener("click", function ClientDetailsComponent_div_75_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeJobRequestModal());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ClientDetailsComponent_div_75_div_11_Template, 5, 0, "div", 137);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedJobRequest);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedJobRequest == null ? null : ctx_r1.selectedJobRequest.status) === "PENDING");
  }
}
var ClientDetailsComponent = class _ClientDetailsComponent {
  get pendingJobRequests() {
    return this.jobRequests.filter((r) => r.status === "PENDING").length;
  }
  get approvedJobRequests() {
    const sevenDaysAgo = /* @__PURE__ */ new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return this.jobRequests.filter((r) => r.status === "COMPLETED" && new Date(r.updatedAt) >= sevenDaysAgo).length;
  }
  get pendingApprovals() {
    return this.candidateSubmissions.filter((s) => s.status === "SUBMITTED").length;
  }
  get unreadFeedback() {
    return this.clientFeedback.filter((f) => !f.read).length;
  }
  constructor(route, router, clientService, emailService, jobService, applicationService, jobRequestService) {
    this.route = route;
    this.router = router;
    this.clientService = clientService;
    this.emailService = emailService;
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.jobRequestService = jobRequestService;
    this.client = null;
    this.stats = [];
    this.jobs = [];
    this.applications = [];
    this.notes = [];
    this.activities = [];
    this.showEmailModal = false;
    this.showNoteModal = false;
    this.showJobRequestModal = false;
    this.selectedJobRequest = null;
    this.emailSubject = "";
    this.emailBody = "";
    this.noteText = "";
    this.sending = false;
    this.loading = false;
    this.showToast = false;
    this.toastMessage = "";
    this.toastType = "success";
    this.activeTab = "overview";
    this.jobRequestFilter = "pending";
    this.jobRequests = [];
    this.candidateSubmissions = [];
    this.clientFeedback = [];
    this.sharedInterviews = [];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const clientId = params["id"];
      if (clientId) {
        this.loadClient(clientId);
        this.loadJobRequests();
      }
    });
  }
  loadClient(id) {
    this.loading = true;
    forkJoin({
      client: this.clientService.getClientById(id),
      jobs: this.jobService.getJobsByClient(id),
      notes: this.clientService.getNotes(id),
      activities: this.clientService.getActivities(id).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ client, jobs, notes, activities }) => {
        this.client = client;
        this.jobs = jobs;
        this.notes = notes;
        this.activities = activities.map((a) => ({
          icon: this.getActivityIcon(a.activityType),
          title: a.title,
          description: a.description,
          date: a.createdAt
        }));
        this.buildActivityTimeline();
        this.calculateStats();
        if (this.jobs.length > 0) {
          const applicationCalls = this.jobs.map((job) => this.applicationService.getApplicationsByJob(job.id, 0, 100));
          forkJoin(applicationCalls).subscribe({
            next: (results) => {
              this.applications = results.flatMap((r) => r.content);
              this.calculateStats();
            },
            error: (err) => {
              console.error("Error loading applications:", err);
            }
          });
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading client data:", err);
        this.showNotification("Failed to load client data", "error");
        this.loading = false;
      }
    });
  }
  calculateStats() {
    const activeJobs = this.jobs.filter((j) => j.status === "OPEN" || j.status === "ACTIVE").length;
    const hiredCount = this.applications.filter((a) => a.status === "HIRED").length;
    const inPipeline = this.applications.filter((a) => !["HIRED", "REJECTED", "WITHDRAWN"].includes(a.status)).length;
    this.stats = [
      { label: "Active Jobs", value: activeJobs, icon: "\u{1F4BC}" },
      { label: "Total Hires", value: hiredCount, icon: "\u2705" },
      { label: "In Pipeline", value: inPipeline, icon: "\u23F3" },
      { label: "Total Applications", value: this.applications.length, icon: "\u{1F4CA}" }
    ];
  }
  get recentHires() {
    return this.applications.filter((a) => a.status === "HIRED").sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5).map((a) => ({
      name: a.candidateName || "Unknown",
      position: a.jobTitle || "Unknown Position",
      date: a.updatedAt,
      avatar: this.getInitials(a.candidateName || "U")
    }));
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  }
  getApplicationCount(jobId) {
    return this.applications.filter((a) => a.jobId === jobId).length;
  }
  contactClient() {
    if (this.client) {
      this.emailSubject = `Regarding ${this.client.name}`;
      this.emailBody = "";
      this.showEmailModal = true;
    }
  }
  closeEmailModal() {
    this.showEmailModal = false;
    this.emailSubject = "";
    this.emailBody = "";
  }
  sendEmail() {
    if (!this.emailSubject || !this.emailBody) {
      this.showNotification("Please fill in subject and message", "error");
      return;
    }
    this.sending = true;
    this.emailService.sendEmail(this.client.email, this.emailSubject, this.emailBody).subscribe({
      next: () => {
        this.showNotification("Email sent successfully", "success");
        this.closeEmailModal();
        this.sending = false;
      },
      error: (err) => {
        console.error("Error sending email:", err);
        if (err.status === 403) {
          this.showNotification("Email service not available. Please contact administrator.", "error");
        } else {
          this.showNotification("Failed to send email", "error");
        }
        this.sending = false;
      }
    });
  }
  showNotification(message, type) {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3e3);
  }
  editClient() {
    this.router.navigate(["/clients"], { state: { editClientId: this.client.id } });
  }
  createJob() {
    this.router.navigate(["/jobs/create"], { queryParams: { clientId: this.client.id } });
  }
  addNote() {
    this.noteText = "";
    this.showNoteModal = true;
  }
  closeNoteModal() {
    this.showNoteModal = false;
    this.noteText = "";
  }
  saveNote() {
    if (!this.noteText.trim()) {
      this.showNotification("Please enter a note", "error");
      return;
    }
    this.clientService.addNote(this.client.id, this.noteText).subscribe({
      next: () => {
        this.showNotification("Note saved successfully", "success");
        this.clientService.getNotes(this.client.id).subscribe({
          next: (notes) => {
            this.notes = notes;
            this.closeNoteModal();
          }
        });
      },
      error: (err) => {
        console.error("Error saving note:", err);
        this.showNotification("Failed to save note", "error");
      }
    });
  }
  viewJob(jobId) {
    this.router.navigate(["/jobs", jobId]);
  }
  buildActivityTimeline() {
    const timeline = [...this.activities];
    this.jobs.forEach((job) => {
      timeline.push({
        icon: "\u{1F4BC}",
        title: "Job Posted",
        description: `Posted job: ${job.title}`,
        date: job.createdAt
      });
    });
    this.applications.forEach((app) => {
      timeline.push({
        icon: "\u{1F4C4}",
        title: "Application Received",
        description: `${app.candidateName || "Candidate"} applied for ${app.jobTitle || "position"}`,
        date: app.createdAt
      });
      if (app.status === "HIRED") {
        timeline.push({
          icon: "\u2705",
          title: "Candidate Hired",
          description: `${app.candidateName || "Candidate"} hired for ${app.jobTitle || "position"}`,
          date: app.updatedAt
        });
      }
    });
    this.activities = timeline.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 20);
  }
  getActivityIcon(activityType) {
    const icons = {
      "CLIENT_CREATED": "\u{1F3E2}",
      "CLIENT_UPDATED": "\u270F\uFE0F",
      "NOTE_ADDED": "\u{1F4DD}",
      "JOB_POSTED": "\u{1F4BC}",
      "APPLICATION_RECEIVED": "\u{1F4C4}",
      "CANDIDATE_HIRED": "\u2705",
      "EMAIL_SENT": "\u2709\uFE0F"
    };
    return icons[activityType] || "\u{1F4CC}";
  }
  // Job Requests Methods
  loadJobRequests() {
    this.jobRequestService.getJobRequestsForRecruiter().subscribe({
      next: (requests) => {
        const clientId = this.route.snapshot.params["id"];
        this.jobRequests = requests.filter((r) => r.clientId === clientId);
      },
      error: (err) => {
        console.error("Error loading job requests:", err);
      }
    });
  }
  getPendingJobRequests() {
    return this.jobRequests.filter((r) => r.status === "PENDING");
  }
  getFilteredJobRequests() {
    if (this.jobRequestFilter === "all")
      return this.jobRequests;
    if (this.jobRequestFilter === "pending")
      return this.jobRequests.filter((r) => r.status === "PENDING");
    if (this.jobRequestFilter === "approved")
      return this.jobRequests.filter((r) => r.status === "COMPLETED");
    return this.jobRequests;
  }
  approveJobRequest(request) {
    this.jobRequestService.updateJobRequestStatus(request.id, "COMPLETED").subscribe({
      next: (updated) => {
        const jobData = {
          title: request.title,
          description: request.description,
          requirements: request.requirements,
          location: request.location,
          department: request.department,
          employmentType: request.employmentType,
          salaryRange: request.salaryRange,
          clientId: request.clientId,
          clientName: request.clientName,
          jobRequestId: request.id,
          status: "DRAFT",
          jobType: request.employmentType,
          // Use employment type as job type
          companyId: request.clientId
        };
        this.jobService.createJob(jobData).subscribe({
          next: (job) => {
            this.showNotification(`Job "${request.title}" created as draft. Activate it when ready to go live.`, "success");
            request.status = "COMPLETED";
          },
          error: (err) => {
            console.error("Error creating job:", err);
            this.showNotification("Request approved but failed to create job posting", "error");
          }
        });
      },
      error: (err) => {
        console.error("Error approving job request:", err);
        this.showNotification("Failed to approve job request", "error");
      }
    });
  }
  sendJobLiveNotification(request, job) {
    const clientName = this.client.contactPerson || this.client.name;
    this.emailService.sendEmail(this.client.email, `Your Job Request "${request.title}" Has Been Approved!`, `Hi ${clientName},

Great news! Your job request "${request.title}" (${request.requestId}) has been approved and is now active.

We have published the job posting and will begin sourcing qualified candidates immediately. You'll receive candidate submissions through your client portal as we find suitable matches.

Job Details:
- Title: ${request.title}
- Department: ${request.department}
- Location: ${request.location}
- Priority: ${request.priority}

We'll keep you updated on our progress. Thank you for choosing our recruiting services!

Best regards,
Your Recruiting Team`).subscribe({
      next: () => console.log("Job live notification sent to client"),
      error: (err) => console.error("Failed to send notification email:", err)
    });
  }
  rejectJobRequest(request) {
    const reason = prompt(`Please provide a reason for declining "${request.title}":`);
    if (reason !== null) {
      const declineReason = reason.trim() || "No reason provided";
      this.jobRequestService.updateJobRequestStatus(request.id, "REJECTED", declineReason).subscribe({
        next: (updated) => {
          this.showNotification(`Job request "${request.title}" declined`, "success");
          request.status = "REJECTED";
          this.sendJobDeclineNotification(request, declineReason);
        },
        error: (err) => {
          console.error("Error rejecting job request:", err);
          this.showNotification("Failed to reject job request", "error");
        }
      });
    }
  }
  sendJobDeclineNotification(request, reason) {
    const clientName = this.client.contactPerson || this.client.name;
    this.emailService.sendEmail(this.client.email, `Job Request "${request.title}" Update`, `Hi ${clientName},

We've reviewed your job request "${request.title}" (${request.requestId}).

Unfortunately, we're unable to proceed with this request at this time.

Reason: ${reason}

Job Details:
- Title: ${request.title}
- Department: ${request.department}
- Location: ${request.location}

If you have any questions or would like to discuss alternative approaches, please don't hesitate to reach out.

Best regards,
Your Recruiting Team`).subscribe({
      next: () => console.log("Job decline notification sent to client"),
      error: (err) => console.error("Failed to send decline notification email:", err)
    });
  }
  viewJobRequestDetails(request) {
    this.selectedJobRequest = request;
    this.showJobRequestModal = true;
  }
  closeJobRequestModal() {
    this.showJobRequestModal = false;
    this.selectedJobRequest = null;
  }
  viewCreatedJob(request) {
    this.showNotification("Navigating to created job...", "success");
  }
  // Candidate Submissions Methods
  openSubmitCandidateModal() {
    this.showNotification("Submit candidate modal coming soon", "success");
  }
  viewCandidateProfile(submission) {
    this.showNotification(`Viewing profile for ${submission.candidateName}`, "success");
  }
  // Client Feedback Methods
  respondToFeedback(feedback) {
    this.showNotification("Opening response form...", "success");
  }
  markAsRead(feedback) {
    feedback.read = true;
    this.showNotification("Marked as read", "success");
  }
  // Interview Methods
  scheduleInterview() {
    this.showNotification("Schedule interview modal coming soon", "success");
  }
  editInterview(interview) {
    this.showNotification(`Editing interview for ${interview.candidateName}`, "success");
  }
  notifyClient(interview) {
    this.showNotification(`Notification sent to client about ${interview.candidateName} interview`, "success");
  }
  cancelInterview(interview) {
    if (confirm(`Cancel interview with ${interview.candidateName}?`)) {
      this.showNotification("Interview cancelled", "success");
      interview.status = "Cancelled";
    }
  }
  static {
    this.\u0275fac = function ClientDetailsComponent_Factory(t) {
      return new (t || _ClientDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(JobRequestService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsComponent, selectors: [["app-client-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 36, consts: [[1, "client-details-page"], [1, "breadcrumb"], ["routerLink", "/clients"], ["class", "error", 4, "ngIf"], ["class", "header", 4, "ngIf"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "tabs"], [1, "tab", 3, "click"], ["class", "tab-badge", 4, "ngIf"], [1, "content-grid"], [1, "main-content"], [4, "ngIf"], [1, "sidebar"], [1, "info-card"], [1, "info-item"], [1, "icon"], [1, "label"], [1, "value"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "toast"], [1, "error"], [1, "header"], [1, "client-info"], [1, "logo"], [1, "industry"], [1, "actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "stat-card"], [1, "tab-badge"], [1, "section"], [1, "section-header"], ["class", "jobs-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notes-list", 4, "ngIf"], ["class", "hires-list", 4, "ngIf"], ["class", "timeline", 4, "ngIf"], [1, "jobs-list"], ["class", "job-item", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "job-item", 2, "cursor", "pointer", 3, "click"], [1, "job-info"], [1, "meta"], [1, "status"], [1, "empty-state"], [1, "notes-list"], ["class", "note-item", 4, "ngFor", "ngForOf"], [1, "note-item"], [1, "note-text"], [1, "note-date"], [1, "hires-list"], ["class", "hire-item", 4, "ngFor", "ngForOf"], [1, "hire-item"], [1, "avatar"], [1, "hire-info"], [1, "name"], [1, "position"], [1, "date"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-icon"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-date"], [1, "timeline-description"], [1, "filter-tabs"], [3, "click"], [1, "job-requests-list"], ["class", "job-request-card", 4, "ngFor", "ngForOf"], [1, "job-request-card"], [1, "request-header"], [1, "request-meta"], ["class", "request-id", "style", "margin-top: 4px;", 4, "ngIf"], [1, "status-badge"], [1, "request-details"], [1, "detail-row"], [1, "value", "priority"], [1, "request-description"], [1, "request-requirements"], ["class", "request-actions", 4, "ngIf"], [1, "request-id", 2, "margin-top", "4px"], [1, "request-actions"], [1, "btn-secondary", "danger", 3, "click"], [1, "empty-icon"], [1, "submissions-list"], ["class", "submission-card", 4, "ngFor", "ngForOf"], [1, "submission-card"], [1, "submission-header"], [1, "candidate-info"], [1, "submission-details"], [1, "detail-item"], ["class", "recruiter-notes", 4, "ngIf"], ["class", "client-response", 4, "ngIf"], [1, "submission-actions"], ["class", "btn-secondary", 4, "ngIf"], [1, "recruiter-notes"], [1, "client-response"], [1, "response-header"], [1, "response-date"], [1, "btn-secondary"], [1, "feedback-list"], ["class", "feedback-card", 4, "ngFor", "ngForOf"], [1, "feedback-card"], [1, "feedback-header"], [1, "feedback-type"], [1, "feedback-date"], ["class", "feedback-context", 4, "ngIf"], [1, "feedback-message"], [1, "feedback-actions"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], [1, "feedback-context"], [1, "interviews-list"], ["class", "interview-card", 4, "ngFor", "ngForOf"], [1, "interview-card"], [1, "interview-header"], [1, "interview-datetime"], [1, "time"], [1, "interview-info"], [1, "interview-details"], ["class", "detail-item", 4, "ngIf"], [1, "interview-actions"], ["target", "_blank", 1, "meeting-link", 3, "href"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "email", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "Email subject", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "8", "placeholder", "Enter your message...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"], ["rows", "6", "placeholder", "Enter your note about this client...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal", "large", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], [1, "job-request-details"], [1, "detail-section"], [1, "section-icon"], [1, "detail-grid"], [1, "value-highlight"], [1, "priority"], [1, "description-content"], [1, "requirements-content"], [1, "action-buttons"]], template: function ClientDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Clients");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ClientDetailsComponent_div_4_Template, 3, 0, "div", 3)(5, ClientDetailsComponent_div_5_Template, 18, 3, "div", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, ClientDetailsComponent_div_7_Template, 8, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
        \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_9_listener() {
          return ctx.activeTab = "overview";
        });
        \u0275\u0275text(10, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_11_listener() {
          return ctx.activeTab = "job-requests";
        });
        \u0275\u0275text(12, " Job Requests ");
        \u0275\u0275template(13, ClientDetailsComponent_span_13_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "submissions";
        });
        \u0275\u0275text(15, " Candidate Submissions ");
        \u0275\u0275template(16, ClientDetailsComponent_span_16_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_17_listener() {
          return ctx.activeTab = "feedback";
        });
        \u0275\u0275text(18, " Client Feedback ");
        \u0275\u0275template(19, ClientDetailsComponent_span_19_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 8);
        \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_20_listener() {
          return ctx.activeTab = "interviews";
        });
        \u0275\u0275text(21, "Interviews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 10)(23, "div", 11);
        \u0275\u0275template(24, ClientDetailsComponent_div_24_Template, 28, 12, "div", 12)(25, ClientDetailsComponent_div_25_Template, 15, 10, "div", 12)(26, ClientDetailsComponent_div_26_Template, 10, 2, "div", 12)(27, ClientDetailsComponent_div_27_Template, 8, 2, "div", 12)(28, ClientDetailsComponent_div_28_Template, 10, 2, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 13)(30, "div", 14)(31, "h3");
        \u0275\u0275text(32, "Contact Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 15)(34, "span", 16);
        \u0275\u0275text(35, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div")(37, "div", 17);
        \u0275\u0275text(38, "Primary Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 18);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 15)(42, "span", 16);
        \u0275\u0275text(43, "\u2709\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div")(45, "div", 17);
        \u0275\u0275text(46, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 18);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 15)(50, "span", 16);
        \u0275\u0275text(51, "\u{1F4DE}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div")(53, "div", 17);
        \u0275\u0275text(54, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 18);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 15)(58, "span", 16);
        \u0275\u0275text(59, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div")(61, "div", 17);
        \u0275\u0275text(62, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 18);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 15)(66, "span", 16);
        \u0275\u0275text(67, "\u{1F4CD}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div")(69, "div", 17);
        \u0275\u0275text(70, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 18);
        \u0275\u0275text(72);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(73, ClientDetailsComponent_div_73_Template, 25, 6, "div", 19)(74, ClientDetailsComponent_div_74_Template, 17, 1, "div", 19)(75, ClientDetailsComponent_div_75_Template, 12, 2, "div", 19);
        \u0275\u0275elementStart(76, "div", 20);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.client);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.client);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "overview");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "job-requests");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.pendingJobRequests > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "submissions");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.pendingApprovals > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "feedback");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.unreadFeedback > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "interviews");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.activeTab === "overview");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "job-requests");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "submissions");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "feedback");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "interviews");
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.client.contactPerson || ctx.client.contact);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.client.email);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.client.phone);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.client.website);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.client.address);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEmailModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNoteModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showJobRequestModal);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.showToast)("success", ctx.toastType === "success")("error", ctx.toastType === "error");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.client-details-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.95rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0066ff;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n}\n.header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   .industry[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0066ff;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 2rem;\n}\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n}\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.6;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .status.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]   .hire-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]   .hire-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]   .hire-info[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.hires-list[_ngcontent-%COMP%]   .hire-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #0f172a;\n  font-weight: 500;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.25rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-text[_ngcontent-%COMP%] {\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.5;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 2rem;\n  font-style: italic;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.25rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-text[_ngcontent-%COMP%] {\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.5;\n}\n.notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 2rem;\n  font-style: italic;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  display: none;\n  align-items: center;\n  gap: 0.75rem;\n  z-index: 2000;\n  min-width: 300px;\n  border-left: 4px solid;\n}\n.toast.show[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n  color: #065f46;\n}\n.toast.error[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n  color: #991b1b;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.tab[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 12px 24px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #0066ff;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #0066ff;\n  border-bottom-color: #0066ff;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  font-size: 0.75rem;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.filter-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 6px 16px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n}\n.filter-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.job-requests-list[_ngcontent-%COMP%], .submissions-list[_ngcontent-%COMP%], .feedback-list[_ngcontent-%COMP%], .interviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.job-request-card[_ngcontent-%COMP%], .submission-card[_ngcontent-%COMP%], .feedback-card[_ngcontent-%COMP%], .interview-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  border-left: 4px solid #0066ff;\n}\n.request-header[_ngcontent-%COMP%], .submission-header[_ngcontent-%COMP%], .feedback-header[_ngcontent-%COMP%], .interview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.request-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .submission-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .feedback-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .interview-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.request-meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-badge.scheduled[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.request-details[_ngcontent-%COMP%], .submission-details[_ngcontent-%COMP%], .interview-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 1rem;\n}\n.detail-row[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.detail-row[_ngcontent-%COMP%]   .value.priority[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .value.priority[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.detail-row[_ngcontent-%COMP%]   .value.priority.high[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .value.priority.high[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.detail-row[_ngcontent-%COMP%]   .value.priority.medium[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .value.priority.medium[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.detail-row[_ngcontent-%COMP%]   .value.priority.low[_ngcontent-%COMP%], .detail-item[_ngcontent-%COMP%]   .value.priority.low[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.request-description[_ngcontent-%COMP%], .request-requirements[_ngcontent-%COMP%], .recruiter-notes[_ngcontent-%COMP%], .feedback-message[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.request-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .request-requirements[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .recruiter-notes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .feedback-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.request-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .request-requirements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .recruiter-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .feedback-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.request-actions[_ngcontent-%COMP%], .submission-actions[_ngcontent-%COMP%], .feedback-actions[_ngcontent-%COMP%], .interview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.request-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%], .submission-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%], .feedback-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%], .interview-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.request-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]:hover, .submission-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]:hover, .feedback-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]:hover, .interview-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.candidate-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.125rem;\n}\n.candidate-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n}\n.candidate-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.client-response[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.client-response[_ngcontent-%COMP%]   .response-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.client-response[_ngcontent-%COMP%]   .response-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.client-response[_ngcontent-%COMP%]   .response-header[_ngcontent-%COMP%]   .response-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n.client-response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.feedback-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.feedback-type.candidate[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.feedback-type.position[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.feedback-context[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.feedback-date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.interview-datetime[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n  min-width: 120px;\n}\n.interview-datetime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.875rem;\n  margin-bottom: 4px;\n}\n.interview-datetime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.interview-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.meeting-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-weight: 600;\n}\n.meeting-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.modal.large[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 95%;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #0f172a;\n  font-weight: 500;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span.value-highlight[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0066ff;\n  font-size: 1.125rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-family:\n    "SF Mono",\n    Monaco,\n    monospace;\n  font-size: 0.875rem;\n  color: #0066ff;\n}\n.job-request-details[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%], .job-request-details[_ngcontent-%COMP%]   .requirements-content[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 1rem;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #374151;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=client-details.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsComponent, { className: "ClientDetailsComponent" });
})();
export {
  ClientDetailsComponent
};
//# sourceMappingURL=chunk-GNZWX7QG.js.map
