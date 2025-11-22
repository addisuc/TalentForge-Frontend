import {
  JobRequestService
} from "./chunk-OA4SEQZO.js";
import {
  MatDialog,
  MatSnackBar,
  MaterialModule
} from "./chunk-WM4JIUPE.js";
import "./chunk-NY622NM3.js";
import "./chunk-AK7Q3UBH.js";
import {
  ClientService
} from "./chunk-HDDOCNXX.js";
import "./chunk-3CPV5NE5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  Router
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/client-portal/client-dashboard/client-dashboard.component.ts
function ClientDashboardComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dashboard.totalPending);
  }
}
function ClientDashboardComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.jobRequests.length);
  }
}
function ClientDashboardComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadNotifications);
  }
}
function ClientDashboardComponent_div_78_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_78_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1, "Mark all as read");
    \u0275\u0275elementEnd();
  }
}
function ClientDashboardComponent_div_78_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function ClientDashboardComponent_div_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_78_div_6_Template_div_click_0_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.handleNotificationClick(notification_r5));
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ClientDashboardComponent_div_78_div_6_div_10_Template, 1, 0, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notification_r5.read);
    \u0275\u0275advance();
    \u0275\u0275classMap(notification_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getNotificationIcon(notification_r5.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notification_r5.read);
  }
}
function ClientDashboardComponent_div_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No notifications yet");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h3");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClientDashboardComponent_div_78_button_4_Template, 2, 0, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275template(6, ClientDashboardComponent_div_78_div_6_Template, 11, 9, "div", 42)(7, ClientDashboardComponent_div_78_div_7_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44)(9, "a", 45);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_78_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewAllNotifications());
    });
    \u0275\u0275text(10, "View All Notifications");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.unreadNotifications > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
  }
}
function ClientDashboardComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard...");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_86_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "p");
    \u0275\u0275text(2, "No recent candidates");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_86_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "p");
    \u0275\u0275text(2, "No active positions");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Dashboard Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Welcome to your client portal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 62)(8, "div", 63)(9, "div", 64)(10, "span", 65);
    \u0275\u0275text(11, "\u23F3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 67);
    \u0275\u0275text(15, "Pending Reviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 63)(17, "div", 64)(18, "span", 65);
    \u0275\u0275text(19, "\u{1F4BC}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 66);
    \u0275\u0275text(21, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 67);
    \u0275\u0275text(23, "Active Positions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 63)(25, "div", 64)(26, "span", 65);
    \u0275\u0275text(27, "\u{1F465}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 66);
    \u0275\u0275text(29, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 67);
    \u0275\u0275text(31, "Scheduled Interviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 63)(33, "div", 64)(34, "span", 65);
    \u0275\u0275text(35, "\u2705");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 66);
    \u0275\u0275text(37, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 67);
    \u0275\u0275text(39, "Recent Hires");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 68)(41, "div", 69)(42, "div", 70)(43, "h3");
    \u0275\u0275text(44, "Recent Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 45);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_86_Template_a_click_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveSection("submissions"));
    });
    \u0275\u0275text(46, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 71);
    \u0275\u0275template(48, ClientDashboardComponent_div_86_div_48_Template, 3, 0, "div", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 73)(50, "div", 70)(51, "h3");
    \u0275\u0275text(52, "Active Positions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "a", 45);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_86_Template_a_click_53_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveSection("positions"));
    });
    \u0275\u0275text(54, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 74);
    \u0275\u0275template(56, ClientDashboardComponent_div_86_div_56_Template, 3, 0, "div", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.dashboard.totalPending);
    \u0275\u0275advance(35);
    \u0275\u0275property("ngIf", ctx_r0.candidateSubmissions.length === 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.jobRequests.length === 0);
  }
}
function ClientDashboardComponent_div_87_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Candidate Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your recruiter hasn't submitted any candidates yet.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const strength_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(strength_r8);
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_87_div_9_div_1_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const submission_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewPortfolio(submission_r9));
    });
    \u0275\u0275text(1, " \u{1F517} Portfolio ");
    \u0275\u0275elementEnd();
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "button", 107);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_87_div_9_div_1_div_51_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const submission_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.moveToInterview(submission_r9));
    });
    \u0275\u0275text(2, " \u2713 Move to Interview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_87_div_9_div_1_div_51_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const submission_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.putOnHold(submission_r9));
    });
    \u0275\u0275text(4, " \u23F8 Put on Hold ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 109);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_87_div_9_div_1_div_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const submission_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.rejectCandidate(submission_r9));
    });
    \u0275\u0275text(6, " \u2717 Reject ");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_div_52_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submission_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submission_r9.clientFeedback);
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_div_52_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "p");
    \u0275\u0275text(2, "\u2705 Recruiter will coordinate interview scheduling");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "strong");
    \u0275\u0275text(3, "Your Decision:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275template(5, ClientDashboardComponent_div_87_div_9_div_1_div_52_p_5_Template, 2, 1, "p", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientDashboardComponent_div_87_div_9_div_1_div_52_div_6_Template, 3, 0, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submission_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", submission_r9.clientDecision, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r9.clientFeedback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r9.status === "APPROVED_FOR_INTERVIEW");
  }
}
function ClientDashboardComponent_div_87_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "div", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 84)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 87);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 88)(15, "div", 89)(16, "div", 90)(17, "span", 91);
    \u0275\u0275text(18, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 92);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 90)(22, "span", 91);
    \u0275\u0275text(23, "Current Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 92);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 90)(27, "span", 91);
    \u0275\u0275text(28, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 92);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 90)(32, "span", 91);
    \u0275\u0275text(33, "Expected Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 92);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 93)(37, "span", 91);
    \u0275\u0275text(38, "Key Strengths");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 94);
    \u0275\u0275template(40, ClientDashboardComponent_div_87_div_9_div_1_span_40_Template, 2, 1, "span", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 96)(42, "span", 97);
    \u0275\u0275text(43, "Recruiter Rating:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 98);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 99)(47, "div", 100)(48, "button", 101);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_87_div_9_div_1_Template_button_click_48_listener() {
      const submission_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewResume(submission_r9));
    });
    \u0275\u0275text(49, " \u{1F4C4} Resume ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, ClientDashboardComponent_div_87_div_9_div_1_button_50_Template, 2, 0, "button", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ClientDashboardComponent_div_87_div_9_div_1_div_51_Template, 7, 0, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, ClientDashboardComponent_div_87_div_9_div_1_div_52_Template, 7, 3, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submission_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(submission_r9.candidateName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(submission_r9.candidateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r9.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Submitted by: ", submission_r9.recruiterName, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(submission_r9.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submission_r9.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(submission_r9.experience);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r9.currentCompany);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r9.education);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r9.expectedSalary);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", submission_r9.keyStrengths);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(submission_r9.recruiterRating);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", submission_r9.portfolioUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r9.status === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r9.status !== "PENDING_REVIEW");
  }
}
function ClientDashboardComponent_div_87_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, ClientDashboardComponent_div_87_div_9_div_1_Template, 53, 16, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.candidateSubmissions);
  }
}
function ClientDashboardComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Candidate Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Review candidates submitted by your recruiter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 76);
    \u0275\u0275template(8, ClientDashboardComponent_div_87_div_8_Template, 7, 0, "div", 72)(9, ClientDashboardComponent_div_87_div_9_Template, 2, 1, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.candidateSubmissions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.candidateSubmissions.length > 0);
  }
}
function ClientDashboardComponent_div_88_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 127)(2, "strong");
    \u0275\u0275text(3, "Request ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedJobRequest.requestId);
  }
}
function ClientDashboardComponent_div_88_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "div", 120)(3, "h2");
    \u0275\u0275text(4, "Job Request Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 121);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeJobRequestDetails());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 122);
    \u0275\u0275template(8, ClientDashboardComponent_div_88_div_9_div_8_Template, 6, 1, "div", 123);
    \u0275\u0275elementStart(9, "div", 124)(10, "h3");
    \u0275\u0275text(11, "Position Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 125)(13, "strong");
    \u0275\u0275text(14, "Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 125)(17, "strong");
    \u0275\u0275text(18, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 125)(21, "strong");
    \u0275\u0275text(22, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 125)(25, "strong");
    \u0275\u0275text(26, "Employment Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 125)(29, "strong");
    \u0275\u0275text(30, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 125)(33, "strong");
    \u0275\u0275text(34, "Number of Openings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 125)(37, "strong");
    \u0275\u0275text(38, "Salary Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 124)(41, "h3");
    \u0275\u0275text(42, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 124)(46, "h3");
    \u0275\u0275text(47, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 126);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 124)(51, "h3");
    \u0275\u0275text(52, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 125)(54, "strong");
    \u0275\u0275text(55, "Current Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 87);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 125)(59, "strong");
    \u0275\u0275text(60, "Requested Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.selectedJobRequest.requestId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.title, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.department, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.location, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.employmentType, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.priority, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.numberOfOpenings, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedJobRequest.salaryRange, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedJobRequest.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedJobRequest.requirements);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r0.selectedJobRequest.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedJobRequest.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 14, ctx_r0.selectedJobRequest.createdAt, "MMM d, yyyy"), "");
  }
}
function ClientDashboardComponent_div_88_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Job Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't submitted any job requests yet.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_88_div_10_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 139)(1, "small");
    \u0275\u0275text(2, "Request ID: ");
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.requestId);
  }
}
function ClientDashboardComponent_div_88_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 133);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ClientDashboardComponent_div_88_div_10_div_2_p_7_Template, 5, 1, "p", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 135)(11, "div", 136)(12, "span", 91);
    \u0275\u0275text(13, "Requested:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 92);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 136)(18, "span", 91);
    \u0275\u0275text(19, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 92);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 137)(23, "button", 138);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_div_10_div_2_Template_button_click_23_listener() {
      const job_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewJobDetails(job_r15));
    });
    \u0275\u0275text(24, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r15 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", job_r15.department, " \u2022 ", job_r15.location, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.requestId);
    \u0275\u0275advance();
    \u0275\u0275classMap(job_r15.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r15.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 9, job_r15.createdAt, "MMM d, yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(job_r15.status);
  }
}
function ClientDashboardComponent_div_88_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275template(1, ClientDashboardComponent_div_88_div_10_div_1_Template, 7, 0, "div", 72)(2, ClientDashboardComponent_div_88_div_10_div_2_Template, 25, 12, "div", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.jobRequests.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.jobRequests);
  }
}
function ClientDashboardComponent_div_88_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "div", 120)(3, "h2");
    \u0275\u0275text(4, "Request New Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 121);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeJobRequestForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 140)(8, "div", 141)(9, "h3");
    \u0275\u0275text(10, "Position Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 142)(12, "div", 143)(13, "label");
    \u0275\u0275text(14, "Job Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.title, $event) || (ctx_r0.jobRequest.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 143)(17, "label");
    \u0275\u0275text(18, "Department *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.department, $event) || (ctx_r0.jobRequest.department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 142)(21, "div", 143)(22, "label");
    \u0275\u0275text(23, "Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.location, $event) || (ctx_r0.jobRequest.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 143)(26, "label");
    \u0275\u0275text(27, "Employment Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 147);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.employmentType, $event) || (ctx_r0.jobRequest.employmentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 148);
    \u0275\u0275text(30, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 149);
    \u0275\u0275text(32, "Full-time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 150);
    \u0275\u0275text(34, "Part-time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 151);
    \u0275\u0275text(36, "Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 152);
    \u0275\u0275text(38, "Temporary");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 142)(40, "div", 143)(41, "label");
    \u0275\u0275text(42, "Number of Openings *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.openings, $event) || (ctx_r0.jobRequest.openings = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 143)(45, "label");
    \u0275\u0275text(46, "Priority *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 154);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.priority, $event) || (ctx_r0.jobRequest.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "option", 148);
    \u0275\u0275text(49, "Select priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 155);
    \u0275\u0275text(51, "High - Urgent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 156);
    \u0275\u0275text(53, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 157);
    \u0275\u0275text(55, "Medium - Normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 158);
    \u0275\u0275text(57, "Low - When possible");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 141)(59, "h3");
    \u0275\u0275text(60, "Compensation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 142)(62, "div", 143)(63, "label");
    \u0275\u0275text(64, "Salary Range *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.salaryRange, $event) || (ctx_r0.jobRequest.salaryRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 143)(67, "label");
    \u0275\u0275text(68, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.benefits, $event) || (ctx_r0.jobRequest.benefits = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 141)(71, "h3");
    \u0275\u0275text(72, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 161)(74, "label");
    \u0275\u0275text(75, "Job Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "textarea", 162);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_textarea_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.description, $event) || (ctx_r0.jobRequest.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 161)(78, "label");
    \u0275\u0275text(79, "Required Skills & Qualifications *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "textarea", 163);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_textarea_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.requirements, $event) || (ctx_r0.jobRequest.requirements = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 161)(82, "label");
    \u0275\u0275text(83, "Preferred Qualifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "textarea", 164);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_textarea_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.preferredQualifications, $event) || (ctx_r0.jobRequest.preferredQualifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 141)(86, "h3");
    \u0275\u0275text(87, "Timeline & Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 142)(89, "div", 143)(90, "label");
    \u0275\u0275text(91, "Target Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "input", 165);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.startDate, $event) || (ctx_r0.jobRequest.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 143)(94, "label");
    \u0275\u0275text(95, "Hiring Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_input_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.hiringManager, $event) || (ctx_r0.jobRequest.hiringManager = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 161)(98, "label");
    \u0275\u0275text(99, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "textarea", 167);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_88_div_11_Template_textarea_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobRequest.notes, $event) || (ctx_r0.jobRequest.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "div", 168)(102, "button", 169);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_div_11_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeJobRequestForm());
    });
    \u0275\u0275text(103, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 170);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_div_11_Template_button_click_104_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitJobRequest($event));
    });
    \u0275\u0275text(105, "Submit Request");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.department);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.employmentType);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.openings);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.priority);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.salaryRange);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.benefits);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.requirements);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.preferredQualifications);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.hiringManager);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobRequest.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.isJobRequestFormValid());
  }
}
function ClientDashboardComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Job Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Manage your hiring requests and open positions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_88_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openJobRequestForm());
    });
    \u0275\u0275text(8, " \u2795 Request New Position ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientDashboardComponent_div_88_div_9_Template, 63, 17, "div", 116)(10, ClientDashboardComponent_div_88_div_10_Template, 3, 2, "div", 117)(11, ClientDashboardComponent_div_88_div_11_Template, 106, 15, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.showJobRequestDetails && ctx_r0.selectedJobRequest);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showJobRequestForm && !ctx_r0.showJobRequestDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showJobRequestForm);
  }
}
function ClientDashboardComponent_div_89_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No candidates available");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Browse and manage candidates");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 171);
    \u0275\u0275template(8, ClientDashboardComponent_div_89_div_8_Template, 7, 0, "div", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.candidateSubmissions.length === 0);
  }
}
function ClientDashboardComponent_div_90_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Scheduled Interviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your recruiter will coordinate interview scheduling.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 91);
    \u0275\u0275text(2, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r18.location);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199)(1, "span", 200);
    \u0275\u0275text(2, "Meeting ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 204);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r18.meetingId);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199)(1, "span", 200);
    \u0275\u0275text(2, "Passcode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 204);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r18.passcode);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198)(2, "div", 199)(3, "span", 200);
    \u0275\u0275text(4, "Meeting Link:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 201);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ClientDashboardComponent_div_90_div_9_div_1_div_28_div_7_Template, 5, 1, "div", 202)(8, ClientDashboardComponent_div_90_div_9_div_1_div_28_div_8_Template, 5, 1, "div", 202);
    \u0275\u0275elementStart(9, "button", 203);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_90_div_9_div_1_div_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const interview_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copyMeetingDetails(interview_r18));
    });
    \u0275\u0275text(10, "\u{1F4CB} Copy All Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("href", interview_r18.meetingLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r18.meetingLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r18.meetingId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r18.passcode);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "span", 91);
    \u0275\u0275text(2, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 92);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r18.location);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "span", 207);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(interview_r18.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r18.status);
  }
}
function ClientDashboardComponent_div_90_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177)(2, "div", 178)(3, "div", 179);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 180);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 181);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 182)(10, "div", 183)(11, "div", 184);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 185)(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 85);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 186);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 187)(21, "div", 188)(22, "span", 91);
    \u0275\u0275text(23, "Interviewers:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 189);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ClientDashboardComponent_div_90_div_9_div_1_div_26_Template, 5, 1, "div", 190);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 191);
    \u0275\u0275template(28, ClientDashboardComponent_div_90_div_9_div_1_div_28_Template, 11, 4, "div", 192)(29, ClientDashboardComponent_div_90_div_9_div_1_div_29_Template, 5, 1, "div", 193);
    \u0275\u0275elementStart(30, "div", 194)(31, "button", 138);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_90_div_9_div_1_Template_button_click_31_listener() {
      const interview_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewCandidateProfile(interview_r18));
    });
    \u0275\u0275text(32, " \u{1F464} View Candidate Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 138);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_90_div_9_div_1_Template_button_click_33_listener() {
      const interview_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadCalendar(interview_r18));
    });
    \u0275\u0275text(34, " \u{1F4C5} Add to Calendar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, ClientDashboardComponent_div_90_div_9_div_1_div_35_Template, 3, 3, "div", 195);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r18.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r18.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r18.duration);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(interview_r18.candidateName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r18.candidateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r18.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", interview_r18.type, " \u2022 ", interview_r18.round, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(interview_r18.interviewers.join(", "));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r18.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r18.meetingLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r18.location);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", interview_r18.status !== "SCHEDULED");
  }
}
function ClientDashboardComponent_div_90_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275template(1, ClientDashboardComponent_div_90_div_9_div_1_Template, 36, 13, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.scheduledInterviews);
  }
}
function ClientDashboardComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "My Interviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Upcoming candidate interviews");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 172);
    \u0275\u0275template(8, ClientDashboardComponent_div_90_div_8_Template, 7, 0, "div", 72)(9, ClientDashboardComponent_div_90_div_9_Template, 2, 1, "div", 173);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.scheduledInterviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.scheduledInterviews.length > 0);
  }
}
function ClientDashboardComponent_div_91_div_9_div_1_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feedback_r21 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feedback_r21.candidateName);
  }
}
function ClientDashboardComponent_div_91_div_9_div_1_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feedback_r21 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feedback_r21.positionTitle);
  }
}
function ClientDashboardComponent_div_91_div_9_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 221);
    \u0275\u0275template(1, ClientDashboardComponent_div_91_div_9_div_1_div_9_div_1_Template, 5, 1, "div", 222)(2, ClientDashboardComponent_div_91_div_9_div_1_div_9_div_2_Template, 5, 1, "div", 222);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedback_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r21.candidateName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r21.positionTitle);
  }
}
function ClientDashboardComponent_div_91_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212)(1, "div", 213)(2, "div", 214)(3, "span", 215);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 216);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientDashboardComponent_div_91_div_9_div_1_div_9_Template, 3, 2, "div", 217);
    \u0275\u0275elementStart(10, "div", 218)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 219)(14, "span", 220);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 207);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r21 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(feedback_r21.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feedback_r21.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r21.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r21.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feedback_r21.candidateName || feedback_r21.positionTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r21.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Sent to: ", feedback_r21.recruiterName, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(feedback_r21.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feedback_r21.status === "Read" ? "\u2713 Read" : "\u23F3 Pending", " ");
  }
}
function ClientDashboardComponent_div_91_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 56);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Feedback Sent Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Send feedback to your recruiter about candidates or positions");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_div_91_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210);
    \u0275\u0275template(1, ClientDashboardComponent_div_91_div_9_div_1_Template, 18, 11, "div", 211)(2, ClientDashboardComponent_div_91_div_9_div_2_Template, 7, 0, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.feedbackHistory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feedbackHistory.length === 0);
  }
}
function ClientDashboardComponent_div_91_div_10_div_23_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 241);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r24 = ctx.$implicit;
    \u0275\u0275property("value", candidate_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", candidate_r24.candidateName, " - ", candidate_r24.position, " ");
  }
}
function ClientDashboardComponent_div_91_div_10_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label");
    \u0275\u0275text(2, "Select Candidate *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 239);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_div_23_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.candidateId, $event) || (ctx_r0.feedbackData.candidateId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_91_div_10_div_23_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onCandidateSelect());
    });
    \u0275\u0275elementStart(4, "option", 148);
    \u0275\u0275text(5, "Choose a candidate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientDashboardComponent_div_91_div_10_div_23_option_6_Template, 2, 3, "option", 240);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.candidateId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.candidateSubmissions);
  }
}
function ClientDashboardComponent_div_91_div_10_div_24_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 241);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r26 = ctx.$implicit;
    \u0275\u0275property("value", job_r26.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", job_r26.title, " - ", job_r26.department, " ");
  }
}
function ClientDashboardComponent_div_91_div_10_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label");
    \u0275\u0275text(2, "Select Position *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 242);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_div_24_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.positionId, $event) || (ctx_r0.feedbackData.positionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_91_div_10_div_24_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPositionSelect());
    });
    \u0275\u0275elementStart(4, "option", 148);
    \u0275\u0275text(5, "Choose a position");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientDashboardComponent_div_91_div_10_div_24_option_6_Template, 2, 3, "option", 240);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.positionId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.jobRequests);
  }
}
function ClientDashboardComponent_div_91_div_10_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label");
    \u0275\u0275text(2, "Feedback Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 243);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_div_25_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.category, $event) || (ctx_r0.feedbackData.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 148);
    \u0275\u0275text(5, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 244);
    \u0275\u0275text(7, "\u2705 Interested - Move Forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 245);
    \u0275\u0275text(9, "\u274C Not Interested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 246);
    \u0275\u0275text(11, "\u2753 Need More Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 247);
    \u0275\u0275text(13, "\u{1F4C5} Ready to Schedule Interview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 248);
    \u0275\u0275text(15, "\u26A0\uFE0F Have Concerns");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.category);
  }
}
function ClientDashboardComponent_div_91_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 119)(2, "div", 120)(3, "h2");
    \u0275\u0275text(4, "Send Feedback to Recruiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 121);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_91_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeFeedbackForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 225)(8, "div", 141)(9, "div", 143)(10, "label");
    \u0275\u0275text(11, "Feedback Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 226);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.type, $event) || (ctx_r0.feedbackData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_91_div_10_Template_select_change_12_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFeedbackTypeChange());
    });
    \u0275\u0275elementStart(13, "option", 148);
    \u0275\u0275text(14, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 227);
    \u0275\u0275text(16, "Candidate Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 228);
    \u0275\u0275text(18, "Position/Job Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 229);
    \u0275\u0275text(20, "Hiring Process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 230);
    \u0275\u0275text(22, "General Inquiry");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ClientDashboardComponent_div_91_div_10_div_23_Template, 7, 2, "div", 231)(24, ClientDashboardComponent_div_91_div_10_div_24_Template, 7, 2, "div", 231)(25, ClientDashboardComponent_div_91_div_10_div_25_Template, 16, 1, "div", 231);
    \u0275\u0275elementStart(26, "div", 143)(27, "label");
    \u0275\u0275text(28, "Subject *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 232);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.subject, $event) || (ctx_r0.feedbackData.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 161)(31, "label");
    \u0275\u0275text(32, "Your Feedback/Notes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 233);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.message, $event) || (ctx_r0.feedbackData.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 143)(35, "label");
    \u0275\u0275text(36, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 234);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_91_div_10_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.feedbackData.priority, $event) || (ctx_r0.feedbackData.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 235);
    \u0275\u0275text(39, "Normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 236);
    \u0275\u0275text(41, "High - Needs Quick Response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 237);
    \u0275\u0275text(43, "Urgent - Time Sensitive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 168)(45, "button", 169);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_91_div_10_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeFeedbackForm());
    });
    \u0275\u0275text(46, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 238);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_91_div_10_Template_button_click_47_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitFeedback($event));
    });
    \u0275\u0275text(48, "Send Feedback");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.type);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.feedbackData.type === "Candidate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feedbackData.type === "Position");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feedbackData.type === "Candidate");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.subject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.message);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.feedbackData.priority);
  }
}
function ClientDashboardComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Feedback & Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Communicate with your recruiter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_91_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openFeedbackForm());
    });
    \u0275\u0275text(8, " \u270D\uFE0F Send Feedback ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientDashboardComponent_div_91_div_9_Template, 3, 2, "div", 208)(10, ClientDashboardComponent_div_91_div_10_Template, 49, 7, "div", 209);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r0.showFeedbackForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showFeedbackForm);
  }
}
function ClientDashboardComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Reports & Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Track your hiring performance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 249)(8, "div", 250)(9, "h3");
    \u0275\u0275text(10, "\u{1F4CA} Hiring Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Track time-to-hire, conversion rates, and more");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 251);
    \u0275\u0275text(14, "View Report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 250)(16, "h3");
    \u0275\u0275text(17, "\u{1F4B0} Cost Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Analyze hiring costs and ROI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 251);
    \u0275\u0275text(21, "View Report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 250)(23, "h3");
    \u0275\u0275text(24, "\u{1F4C8} Pipeline Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Monitor candidate pipeline performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 251);
    \u0275\u0275text(28, "View Report");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientDashboardComponent_div_93_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 255)(2, "h3");
    \u0275\u0275text(3, "\u{1F464} Profile Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 256);
    \u0275\u0275text(5, "Update your personal information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 141)(7, "div", 142)(8, "div", 143)(9, "label");
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 257);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.accountSettings.fullName, $event) || (ctx_r0.accountSettings.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 143)(13, "label");
    \u0275\u0275text(14, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 258);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.accountSettings.email, $event) || (ctx_r0.accountSettings.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 142)(17, "div", 143)(18, "label");
    \u0275\u0275text(19, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 259);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.accountSettings.companyName, $event) || (ctx_r0.accountSettings.companyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 143)(22, "label");
    \u0275\u0275text(23, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 260);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.accountSettings.jobTitle, $event) || (ctx_r0.accountSettings.jobTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 143)(26, "label");
    \u0275\u0275text(27, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 261);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.accountSettings.phone, $event) || (ctx_r0.accountSettings.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 115);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_93_div_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAccountSettings());
    });
    \u0275\u0275text(30, "Save Changes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 255)(32, "h3");
    \u0275\u0275text(33, "\u{1F512} Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 256);
    \u0275\u0275text(35, "Update your login password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 141)(37, "div", 143)(38, "label");
    \u0275\u0275text(39, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordChange.currentPassword, $event) || (ctx_r0.passwordChange.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 143)(42, "label");
    \u0275\u0275text(43, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 263);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordChange.newPassword, $event) || (ctx_r0.passwordChange.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 143)(46, "label");
    \u0275\u0275text(47, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 264);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_15_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordChange.confirmPassword, $event) || (ctx_r0.passwordChange.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 115);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_93_div_15_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePassword());
    });
    \u0275\u0275text(50, "Update Password");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.accountSettings.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.accountSettings.email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.accountSettings.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.accountSettings.jobTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.accountSettings.phone);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordChange.currentPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordChange.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordChange.confirmPassword);
  }
}
function ClientDashboardComponent_div_93_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 255)(2, "h3");
    \u0275\u0275text(3, "\u{1F4E7} Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 256);
    \u0275\u0275text(5, "Choose which updates you want to receive via email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 265)(7, "div", 266)(8, "div", 267)(9, "strong");
    \u0275\u0275text(10, "New Candidate Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Get notified when recruiter submits a new candidate for your review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 268)(14, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.newCandidates, $event) || (ctx_r0.emailSettings.newCandidates = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 266)(17, "div", 267)(18, "strong");
    \u0275\u0275text(19, "Interview Scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Receive email when an interview is scheduled or rescheduled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 268)(23, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.interviewScheduled, $event) || (ctx_r0.emailSettings.interviewScheduled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_23_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 266)(26, "div", 267)(27, "strong");
    \u0275\u0275text(28, "Job Request Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Get updates on your job posting status and candidate progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 268)(32, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.jobUpdates, $event) || (ctx_r0.emailSettings.jobUpdates = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_32_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 266)(35, "div", 267)(36, "strong");
    \u0275\u0275text(37, "Candidate Status Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Notify when candidate moves to different stage (interview, offer, hired)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "label", 268)(41, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.candidateStatusChange, $event) || (ctx_r0.emailSettings.candidateStatusChange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_41_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 266)(44, "div", 267)(45, "strong");
    \u0275\u0275text(46, "Recruiter Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, "Receive email when recruiter responds to your feedback or messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "label", 268)(50, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.recruiterMessages, $event) || (ctx_r0.emailSettings.recruiterMessages = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_50_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 266)(53, "div", 267)(54, "strong");
    \u0275\u0275text(55, "Daily Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, "Get a daily digest of all activities and pending actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "label", 268)(59, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSettings.dailySummary, $event) || (ctx_r0.emailSettings.dailySummary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_59_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmailSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "span", 270);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 255)(62, "h3");
    \u0275\u0275text(63, "\u{1F514} In-App Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 256);
    \u0275\u0275text(65, "Control notifications within the portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 265)(67, "div", 266)(68, "div", 267)(69, "strong");
    \u0275\u0275text(70, "Push Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72, "Show browser notifications for important updates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "label", 268)(74, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.notificationSettings.pushEnabled, $event) || (ctx_r0.notificationSettings.pushEnabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_74_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveNotificationSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 266)(77, "div", 267)(78, "strong");
    \u0275\u0275text(79, "Sound Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p");
    \u0275\u0275text(81, "Play sound when new notification arrives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "label", 268)(83, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_16_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.notificationSettings.soundEnabled, $event) || (ctx_r0.notificationSettings.soundEnabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_16_Template_input_change_83_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveNotificationSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "span", 270);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.newCandidates);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.interviewScheduled);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.jobUpdates);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.candidateStatusChange);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.recruiterMessages);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSettings.dailySummary);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notificationSettings.pushEnabled);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notificationSettings.soundEnabled);
  }
}
function ClientDashboardComponent_div_93_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 255)(2, "h3");
    \u0275\u0275text(3, "\u{1F3A8} Display Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 256);
    \u0275\u0275text(5, "Customize your portal appearance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 265)(7, "div", 266)(8, "div", 267)(9, "strong");
    \u0275\u0275text(10, "Theme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Choose your preferred color theme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "select", 271);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.theme, $event) || (ctx_r0.preferences.theme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_select_change_13_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(14, "option", 272);
    \u0275\u0275text(15, "Light");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 273);
    \u0275\u0275text(17, "Dark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 274);
    \u0275\u0275text(19, "Auto (System)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 266)(21, "div", 267)(22, "strong");
    \u0275\u0275text(23, "Compact View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Show more content with reduced spacing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 268)(27, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.compactView, $event) || (ctx_r0.preferences.compactView = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_input_change_27_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 266)(30, "div", 267)(31, "strong");
    \u0275\u0275text(32, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, "Select your preferred language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 271);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.language, $event) || (ctx_r0.preferences.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_select_change_35_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(36, "option", 275);
    \u0275\u0275text(37, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 276);
    \u0275\u0275text(39, "Spanish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 277);
    \u0275\u0275text(41, "French");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 278);
    \u0275\u0275text(43, "German");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 266)(45, "div", 267)(46, "strong");
    \u0275\u0275text(47, "Date Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49, "Choose how dates are displayed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "select", 271);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_select_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.dateFormat, $event) || (ctx_r0.preferences.dateFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_select_change_50_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(51, "option", 279);
    \u0275\u0275text(52, "MM/DD/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 280);
    \u0275\u0275text(54, "DD/MM/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 281);
    \u0275\u0275text(56, "YYYY-MM-DD");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 266)(58, "div", 267)(59, "strong");
    \u0275\u0275text(60, "Time Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, "12-hour or 24-hour time display");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "select", 271);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.timeFormat, $event) || (ctx_r0.preferences.timeFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_select_change_63_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(64, "option", 282);
    \u0275\u0275text(65, "12-hour (2:00 PM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 283);
    \u0275\u0275text(67, "24-hour (14:00)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 266)(69, "div", 267)(70, "strong");
    \u0275\u0275text(71, "Items Per Page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73, "Default number of items to show in lists");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "select", 271);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_select_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.itemsPerPage, $event) || (ctx_r0.preferences.itemsPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_select_change_74_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(75, "option", 284);
    \u0275\u0275text(76, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "option", 285);
    \u0275\u0275text(78, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "option", 286);
    \u0275\u0275text(80, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "option", 287);
    \u0275\u0275text(82, "100");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(83, "div", 255)(84, "h3");
    \u0275\u0275text(85, "\u{1F4E9} Dashboard Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 256);
    \u0275\u0275text(87, "Customize your dashboard view");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 265)(89, "div", 266)(90, "div", 267)(91, "strong");
    \u0275\u0275text(92, "Show Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94, "Display stats cards on dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "label", 268)(96, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_input_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.showStats, $event) || (ctx_r0.preferences.showStats = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_input_change_96_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 266)(99, "div", 267)(100, "strong");
    \u0275\u0275text(101, "Show Recent Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p");
    \u0275\u0275text(103, "Display recent candidate submissions on dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "label", 268)(105, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_input_ngModelChange_105_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.showRecentCandidates, $event) || (ctx_r0.preferences.showRecentCandidates = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_input_change_105_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "span", 270);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 266)(108, "div", 267)(109, "strong");
    \u0275\u0275text(110, "Show Active Positions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "Display active job positions on dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "label", 268)(114, "input", 269);
    \u0275\u0275twoWayListener("ngModelChange", function ClientDashboardComponent_div_93_div_17_Template_input_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.preferences.showActivePositions, $event) || (ctx_r0.preferences.showActivePositions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientDashboardComponent_div_93_div_17_Template_input_change_114_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "span", 270);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.theme);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.compactView);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.language);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.dateFormat);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.timeFormat);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.itemsPerPage);
    \u0275\u0275advance(22);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.showStats);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.showRecentCandidates);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.preferences.showActivePositions);
  }
}
function ClientDashboardComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Manage your account and preferences");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 252)(8, "button", 253);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_93_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.settingsTab = "account");
    });
    \u0275\u0275text(9, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 253);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_93_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.settingsTab = "notifications");
    });
    \u0275\u0275text(11, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 253);
    \u0275\u0275listener("click", function ClientDashboardComponent_div_93_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.settingsTab = "preferences");
    });
    \u0275\u0275text(13, "Preferences");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 254);
    \u0275\u0275template(15, ClientDashboardComponent_div_93_div_15_Template, 51, 8, "div", 112)(16, ClientDashboardComponent_div_93_div_16_Template, 85, 8, "div", 112)(17, ClientDashboardComponent_div_93_div_17_Template, 116, 9, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r0.settingsTab === "account");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.settingsTab === "notifications");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.settingsTab === "preferences");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.settingsTab === "account");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.settingsTab === "notifications");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.settingsTab === "preferences");
  }
}
var ClientDashboardComponent = class _ClientDashboardComponent {
  get unreadNotifications() {
    return this.notifications.filter((n) => !n.read).length;
  }
  constructor(clientService, jobRequestService, router, snackBar, dialog, datePipe) {
    this.clientService = clientService;
    this.jobRequestService = jobRequestService;
    this.router = router;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.dashboard = {
      pendingApprovals: [],
      totalPending: 0,
      totalApproved: 0,
      totalRejected: 0
    };
    this.isLoading = true;
    this.displayedColumns = ["candidate", "job", "appliedDate", "status", "actions"];
    this.activeSection = "overview";
    this.scheduledInterviews = [];
    this.jobRequests = [];
    this.loadingJobRequests = false;
    this.submissionFilter = "all";
    this.positionFilter = "all";
    this.candidateSearch = "";
    this.filteredSubmissions = [];
    this.interviewFilter = "all";
    this.interviewSearch = "";
    this.filteredInterviews = [];
    this.showNotifications = false;
    this.notifications = [];
    this.emailSettings = {
      newCandidates: true,
      interviewScheduled: true,
      jobUpdates: true,
      candidateStatusChange: true,
      recruiterMessages: true,
      dailySummary: false
    };
    this.notificationSettings = {
      pushEnabled: true,
      soundEnabled: false
    };
    this.settingsTab = "account";
    this.accountSettings = {
      fullName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      phone: ""
    };
    this.passwordChange = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.preferences = {
      theme: "light",
      compactView: false,
      language: "en",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
      itemsPerPage: 25,
      showStats: true,
      showRecentCandidates: true,
      showActivePositions: true
    };
    this.showJobRequestForm = false;
    this.showJobRequestDetails = false;
    this.selectedJobRequest = null;
    this.jobRequest = {
      title: "",
      department: "",
      location: "",
      employmentType: "",
      openings: 1,
      priority: "",
      salaryRange: "",
      benefits: "",
      description: "",
      requirements: "",
      preferredQualifications: "",
      startDate: "",
      hiringManager: "",
      notes: ""
    };
    this.feedbackHistory = [];
    this.showFeedbackForm = false;
    this.feedbackData = {
      type: "",
      candidateId: "",
      positionId: "",
      category: "",
      subject: "",
      message: "",
      priority: "Normal"
    };
    this.candidateSubmissions = [];
  }
  ngOnInit() {
    this.loadUserProfile();
    this.loadDashboard();
    this.loadJobRequests();
  }
  loadUserProfile() {
    const userStr = localStorage.getItem("clientUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      this.accountSettings.fullName = user.contactPerson || "";
      this.accountSettings.email = user.email || "";
      this.accountSettings.companyName = user.companyName || "Client Company";
    }
  }
  get uniquePositions() {
    return [...new Set(this.candidateSubmissions.map((s) => s.position))];
  }
  loadDashboard() {
    const tenantId = localStorage.getItem("tenantId");
    const clientUserId = localStorage.getItem("clientUserId");
    if (!tenantId || !clientUserId) {
      this.router.navigate(["/client-login"]);
      return;
    }
    this.isLoading = true;
    this.clientService.getPendingApprovals(tenantId, clientUserId).subscribe({
      next: (approvals) => {
        this.dashboard = {
          pendingApprovals: approvals,
          totalPending: approvals.length,
          totalApproved: 0,
          totalRejected: 0
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Failed to load dashboard:", error);
        this.snackBar.open("Failed to load dashboard", "Close", {
          duration: 5e3,
          panelClass: ["error-snackbar"]
        });
        this.isLoading = false;
      }
    });
  }
  approveApplication(approval) {
    this.processApproval(approval, "APPROVED");
  }
  rejectApplication(approval) {
    this.processApproval(approval, "REJECTED");
  }
  processApproval(approval, status) {
    const tenantId = localStorage.getItem("tenantId");
    const clientUserId = localStorage.getItem("clientUserId");
    if (!tenantId || !clientUserId) {
      this.router.navigate(["/client-login"]);
      return;
    }
    const request = {
      applicationId: approval.applicationId,
      status,
      feedback: status === "APPROVED" ? "Approved by client" : "Rejected by client",
      rating: status === "APPROVED" ? 5 : 2
    };
    this.clientService.processApproval(request, tenantId, clientUserId).subscribe({
      next: () => {
        this.snackBar.open(`Application ${status.toLowerCase()} successfully`, "Close", {
          duration: 3e3,
          panelClass: ["success-snackbar"]
        });
        this.loadDashboard();
      },
      error: (error) => {
        console.error("Failed to process approval:", error);
        this.snackBar.open("Failed to process approval", "Close", {
          duration: 5e3,
          panelClass: ["error-snackbar"]
        });
      }
    });
  }
  logout() {
    localStorage.removeItem("clientToken");
    localStorage.removeItem("tenantId");
    localStorage.removeItem("clientUserId");
    localStorage.removeItem("clientUser");
    this.router.navigate(["/client-login"]);
  }
  viewCandidates() {
    this.snackBar.open("Candidate browsing feature coming soon", "Close", { duration: 3e3 });
  }
  joinInterview() {
    this.snackBar.open("Interview joining feature coming soon", "Close", { duration: 3e3 });
  }
  provideFeedback() {
    this.snackBar.open("Candidate feedback feature coming soon", "Close", { duration: 3e3 });
  }
  viewCandidateDetails() {
    this.snackBar.open("Candidate details view coming soon", "Close", { duration: 3e3 });
  }
  openJobRequestForm() {
    this.showJobRequestForm = true;
    this.resetJobRequestForm();
  }
  closeJobRequestForm() {
    this.showJobRequestForm = false;
    this.resetJobRequestForm();
  }
  resetJobRequestForm() {
    this.jobRequest = {
      title: "",
      department: "",
      location: "",
      employmentType: "",
      openings: 1,
      priority: "",
      salaryRange: "",
      benefits: "",
      description: "",
      requirements: "",
      preferredQualifications: "",
      startDate: "",
      hiringManager: "",
      notes: ""
    };
  }
  isJobRequestFormValid() {
    return !!(this.jobRequest.title && this.jobRequest.department && this.jobRequest.location && this.jobRequest.employmentType && this.jobRequest.priority && this.jobRequest.salaryRange && this.jobRequest.description && this.jobRequest.requirements);
  }
  loadJobRequests() {
    const clientId = localStorage.getItem("clientUserId");
    if (!clientId)
      return;
    this.loadingJobRequests = true;
    this.jobRequestService.getClientJobRequests(clientId).subscribe({
      next: (requests) => {
        this.jobRequests = requests;
        this.loadingJobRequests = false;
      },
      error: (error) => {
        console.error("Failed to load job requests:", error);
        this.loadingJobRequests = false;
      }
    });
  }
  submitJobRequest(event) {
    event.preventDefault();
    if (!this.jobRequest.title || !this.jobRequest.department || !this.jobRequest.location || !this.jobRequest.employmentType || !this.jobRequest.priority || !this.jobRequest.salaryRange || !this.jobRequest.description || !this.jobRequest.requirements) {
      this.snackBar.open("Please fill in all required fields", "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      return;
    }
    const clientId = localStorage.getItem("clientUserId");
    const clientName = this.accountSettings.companyName;
    const request = {
      clientId,
      clientName,
      title: this.jobRequest.title,
      department: this.jobRequest.department,
      location: this.jobRequest.location,
      employmentType: this.jobRequest.employmentType,
      priority: this.jobRequest.priority,
      numberOfOpenings: this.jobRequest.openings,
      salaryRange: this.jobRequest.salaryRange,
      description: this.jobRequest.description,
      requirements: this.jobRequest.requirements,
      status: "PENDING"
    };
    this.jobRequestService.createJobRequest(request).subscribe({
      next: () => {
        this.snackBar.open("Job request submitted successfully! Your recruiter will be notified.", "Close", {
          duration: 4e3,
          panelClass: ["success-snackbar"]
        });
        this.closeJobRequestForm();
        this.loadJobRequests();
      },
      error: (error) => {
        console.error("Failed to submit job request:", error);
        const errorMessage = error.error?.error || "Failed to submit job request. Please try again.";
        this.snackBar.open(errorMessage, "Close", {
          duration: 5e3,
          panelClass: ["error-snackbar"]
        });
      }
    });
  }
  viewJobDetails(job) {
    this.selectedJobRequest = job;
    this.showJobRequestDetails = true;
  }
  closeJobRequestDetails() {
    this.showJobRequestDetails = false;
    this.selectedJobRequest = null;
  }
  viewCandidatesForJob(job) {
    this.snackBar.open(`Viewing candidates for ${job.title}`, "Close", { duration: 2e3 });
  }
  openFeedbackForm() {
    this.showFeedbackForm = true;
    this.resetFeedbackForm();
  }
  closeFeedbackForm() {
    this.showFeedbackForm = false;
    this.resetFeedbackForm();
  }
  resetFeedbackForm() {
    this.feedbackData = {
      type: "",
      candidateId: "",
      positionId: "",
      category: "",
      subject: "",
      message: "",
      priority: "Normal"
    };
  }
  onFeedbackTypeChange() {
    this.feedbackData.candidateId = "";
    this.feedbackData.positionId = "";
    this.feedbackData.category = "";
  }
  onCandidateSelect() {
    const candidate = this.candidateSubmissions.find((c) => c.id === this.feedbackData.candidateId);
    if (candidate) {
      this.feedbackData.subject = `Feedback on ${candidate.candidateName}`;
    }
  }
  onPositionSelect() {
    this.feedbackData.subject = `Question about ${this.feedbackData.positionId}`;
  }
  submitFeedback(event) {
    event.preventDefault();
    if (!this.feedbackData.type || !this.feedbackData.subject || !this.feedbackData.message) {
      this.snackBar.open("Please fill in all required fields", "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      return;
    }
    console.log("Submitting feedback:", this.feedbackData);
    this.snackBar.open("Feedback sent successfully! Your recruiter will be notified.", "Close", {
      duration: 4e3,
      panelClass: ["success-snackbar"]
    });
    this.closeFeedbackForm();
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  markAllAsRead() {
    this.notifications.forEach((n) => n.read = true);
    this.snackBar.open("All notifications marked as read", "Close", { duration: 2e3 });
  }
  handleNotificationClick(notification) {
    notification.read = true;
    this.showNotifications = false;
    this.setActiveSection(notification.action);
  }
  getNotificationIcon(type) {
    const icons = {
      "candidate": "\u{1F464}",
      "interview": "\u{1F4C5}",
      "job": "\u{1F4BC}",
      "feedback": "\u{1F4AC}",
      "system": "\u2699\uFE0F"
    };
    return icons[type] || "\u{1F514}";
  }
  viewAllNotifications() {
    this.showNotifications = false;
    this.snackBar.open("Full notifications page coming soon", "Close", { duration: 2e3 });
  }
  saveEmailSettings() {
    console.log("Saving email settings:", this.emailSettings);
    this.snackBar.open("Email notification preferences saved", "Close", { duration: 2e3, panelClass: ["success-snackbar"] });
  }
  saveNotificationSettings() {
    console.log("Saving notification settings:", this.notificationSettings);
    this.snackBar.open("Notification preferences saved", "Close", { duration: 2e3, panelClass: ["success-snackbar"] });
  }
  saveAccountSettings() {
    console.log("Saving account settings:", this.accountSettings);
    this.snackBar.open("Account information updated successfully", "Close", { duration: 2e3, panelClass: ["success-snackbar"] });
  }
  changePassword() {
    if (!this.passwordChange.currentPassword || !this.passwordChange.newPassword || !this.passwordChange.confirmPassword) {
      this.snackBar.open("Please fill in all password fields", "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      return;
    }
    if (this.passwordChange.newPassword !== this.passwordChange.confirmPassword) {
      this.snackBar.open("New passwords do not match", "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      return;
    }
    if (this.passwordChange.newPassword.length < 8) {
      this.snackBar.open("Password must be at least 8 characters", "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      return;
    }
    console.log("Changing password");
    this.snackBar.open("Password updated successfully", "Close", { duration: 2e3, panelClass: ["success-snackbar"] });
    this.passwordChange = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  }
  savePreferences() {
    console.log("Saving preferences:", this.preferences);
    this.snackBar.open("Preferences saved successfully", "Close", { duration: 2e3, panelClass: ["success-snackbar"] });
  }
  viewFullProfile(submission) {
    this.snackBar.open("Opening candidate profile...", "Close", { duration: 2e3 });
  }
  moveToInterview(submission) {
    submission.status = "INTERVIEW_STAGE";
    submission.stage = "Interview Scheduling";
    this.sendDecisionToRecruiter(submission.id, "MOVE_TO_INTERVIEW", "Client approved - schedule interview");
    this.snackBar.open(`${submission.candidateName} moved to interview stage`, "Close", {
      duration: 3e3,
      panelClass: ["success-snackbar"]
    });
  }
  putOnHold(submission) {
    const reason = prompt("Reason for hold (optional):");
    submission.status = "ON_HOLD";
    submission.stage = "On Hold";
    this.sendDecisionToRecruiter(submission.id, "ON_HOLD", reason || "Client requested hold");
    this.snackBar.open(`${submission.candidateName} put on hold`, "Close", { duration: 3e3 });
  }
  viewResume(submission) {
    window.open(submission.resumeUrl, "_blank");
  }
  viewPortfolio(submission) {
    window.open(submission.portfolioUrl, "_blank");
  }
  viewCandidateProfile(interview) {
    this.snackBar.open(`Opening ${interview.candidateName}'s profile...`, "Close", { duration: 2e3 });
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open("Copied to clipboard!", "Close", { duration: 2e3 });
    });
  }
  copyMeetingDetails(interview) {
    let details = `Meeting Link: ${interview.meetingLink}`;
    if (interview.meetingId)
      details += `
Meeting ID: ${interview.meetingId}`;
    if (interview.passcode)
      details += `
Passcode: ${interview.passcode}`;
    navigator.clipboard.writeText(details).then(() => {
      this.snackBar.open("Meeting details copied to clipboard!", "Close", { duration: 2e3 });
    });
  }
  downloadCalendar(interview) {
    const startDate = /* @__PURE__ */ new Date(`${interview.date} ${interview.time.split(" - ")[0]}`);
    const endDate = /* @__PURE__ */ new Date(`${interview.date} ${interview.time.split(" - ")[1]}`);
    this.snackBar.open("Calendar invite feature coming soon", "Close", { duration: 3e3 });
  }
  rejectCandidate(submission) {
    const feedback = prompt("Please provide feedback for the recruiter (optional):");
    submission.status = "REJECTED";
    submission.clientDecision = "Not Interested";
    submission.clientFeedback = feedback || "No additional feedback provided";
    this.sendDecisionToRecruiter(submission.id, "REJECTED", feedback || "Client not interested in this candidate");
    this.snackBar.open(`${submission.candidateName} marked as not interested. Feedback sent to recruiter.`, "Close", {
      duration: 4e3,
      panelClass: ["info-snackbar"]
    });
  }
  sendDecisionToRecruiter(submissionId, decision, feedback) {
    const payload = {
      submissionId,
      clientDecision: decision,
      clientFeedback: feedback,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Sending decision to recruiter dashboard:", payload);
  }
  viewReports() {
    this.snackBar.open("Reports and analytics feature coming soon", "Close", { duration: 3e3 });
  }
  setActiveSection(section) {
    this.activeSection = section;
  }
  getInitials(name) {
    if (!name)
      return "UN";
    const parts = name.split(" ");
    return parts.length > 1 ? parts[0][0] + parts[1][0] : name.substring(0, 2);
  }
  getStatusColor(status) {
    switch (status) {
      case "PENDING":
        return "warn";
      case "APPROVED":
        return "primary";
      case "REJECTED":
        return "accent";
      default:
        return "";
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case "PENDING":
        return "schedule";
      case "APPROVED":
        return "check_circle";
      case "REJECTED":
        return "cancel";
      default:
        return "help";
    }
  }
  getTenantName() {
    const clientCompanyName = localStorage.getItem("clientCompanyName");
    return clientCompanyName || "Client Company";
  }
  static {
    this.\u0275fac = function ClientDashboardComponent_Factory(t) {
      return new (t || _ClientDashboardComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(JobRequestService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDashboardComponent, selectors: [["app-client-dashboard"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 94, vars: 28, consts: [[1, "layout"], [1, "sidebar"], [1, "logo-section"], [1, "logo"], ["width", "32", "height", "32", "viewBox", "0 0 100 100", 2, "display", "inline-block", "vertical-align", "middle", "margin-right", "8px"], ["id", "logoGradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#0066ff", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "#00d4ff", "stop-opacity", "1"], ["x", "15", "y", "45", "font-family", "Arial, sans-serif", "font-size", "48", "font-weight", "bold", "fill", "url(#logoGradient)"], ["cx", "50", "cy", "50", "r", "12", "fill", "none", "stroke", "url(#logoGradient)", "stroke-width", "3"], ["cx", "47", "cy", "47", "r", "2", "fill", "#ff6b35"], ["cx", "53", "cy", "47", "r", "2", "fill", "#ff6b35"], ["cx", "50", "cy", "53", "r", "2", "fill", "#ff6b35"], ["x", "62", "y", "75", "font-family", "Arial, sans-serif", "font-size", "48", "font-weight", "bold", "fill", "url(#logoGradient)"], [2, "font-weight", "700", "font-size", "1.25rem"], [1, "tenant-name"], [1, "nav-menu"], [1, "nav-item", 3, "click"], [1, "icon"], ["class", "badge", 4, "ngIf"], [1, "badge"], [1, "sidebar-footer"], [1, "main-content"], [1, "top-bar"], [1, "search-bar"], [1, "icon", "search-icon"], ["type", "text", "placeholder", "Search candidates, positions, interviews..."], [1, "top-actions"], [1, "notification-wrapper"], [1, "icon-btn", "notification-bell", 3, "click"], ["class", "notification-badge", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "user-profile"], [1, "avatar"], [1, "content"], ["class", "loading-container", 4, "ngIf"], ["class", "content-section", 4, "ngIf"], [1, "notification-badge"], [1, "notification-dropdown"], [1, "notification-header"], ["class", "mark-all-read", 3, "click", 4, "ngIf"], [1, "notification-list"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "empty-notifications", 4, "ngIf"], [1, "notification-footer"], [3, "click"], [1, "mark-all-read", 3, "click"], [1, "notification-item", 3, "click"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], ["class", "notification-dot", 4, "ngIf"], [1, "notification-dot"], [1, "empty-notifications"], [1, "empty-icon"], [1, "loading-container"], [1, "spinner"], [1, "content-section"], [1, "page-header"], [1, "page-subtitle"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "dashboard-grid"], [1, "card", "recent-candidates"], [1, "card-header"], [1, "candidate-list"], ["class", "empty-state", 4, "ngIf"], [1, "card", "active-jobs"], [1, "job-list"], [1, "empty-state"], [1, "submissions-container"], ["class", "submissions-grid", 4, "ngIf"], [1, "submissions-grid"], ["class", "card candidate-submission", 4, "ngFor", "ngForOf"], [1, "card", "candidate-submission"], [1, "submission-header"], [1, "candidate-basic-info"], [1, "candidate-avatar", "large"], [1, "candidate-details"], [1, "position"], [1, "recruiter"], [1, "status-badge"], [1, "candidate-summary"], [1, "summary-grid"], [1, "summary-item"], [1, "label"], [1, "value"], [1, "key-strengths"], [1, "strengths-tags"], ["class", "strength-tag", 4, "ngFor", "ngForOf"], [1, "recruiter-assessment"], [1, "assessment-label"], [1, "rating-badge"], [1, "candidate-actions"], [1, "document-actions"], [1, "btn-document", 3, "click"], ["class", "btn-document", 3, "click", 4, "ngIf"], ["class", "decision-actions", 4, "ngIf"], ["class", "submission-feedback", 4, "ngIf"], [1, "strength-tag"], [1, "decision-actions"], [1, "btn-approve", 3, "click"], [1, "btn-hold", 3, "click"], [1, "btn-reject", 3, "click"], [1, "submission-feedback"], [1, "feedback-section"], [4, "ngIf"], ["class", "next-steps", 4, "ngIf"], [1, "next-steps"], [1, "btn-primary", 3, "click"], ["class", "job-request-form-container", 4, "ngIf"], ["class", "job-requests-list", 4, "ngIf"], [1, "job-request-form-container"], [1, "form-card"], [1, "form-header"], [1, "close-btn", 3, "click"], [1, "job-request-details-content"], ["class", "detail-section", 4, "ngIf"], [1, "detail-section"], [1, "detail-row"], [2, "white-space", "pre-wrap"], [1, "request-id-banner"], [2, "font-size", "1.1em", "padding", "4px 8px", "background", "#f0f0f0", "border-radius", "4px"], [1, "job-requests-list"], ["class", "card job-request-card", 4, "ngFor", "ngForOf"], [1, "card", "job-request-card"], [1, "job-request-header"], [1, "job-meta"], ["class", "request-id", "style", "margin-top: 4px;", 4, "ngIf"], [1, "job-request-details"], [1, "detail-item"], [1, "job-request-actions"], [1, "btn-secondary", 3, "click"], [1, "request-id", 2, "margin-top", "4px"], [1, "job-request-form"], [1, "form-section"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "title", "placeholder", "e.g. Senior Software Engineer", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "department", "placeholder", "e.g. Engineering", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "location", "placeholder", "e.g. Remote, New York, Hybrid", "required", "", 3, "ngModelChange", "ngModel"], ["name", "employmentType", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "FULL_TIME"], ["value", "PART_TIME"], ["value", "CONTRACT"], ["value", "TEMPORARY"], ["type", "number", "name", "openings", "min", "1", "value", "1", "required", "", 3, "ngModelChange", "ngModel"], ["name", "priority", "required", "", 3, "ngModelChange", "ngModel"], ["value", "URGENT"], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], ["type", "text", "name", "salaryRange", "placeholder", "e.g. $120,000 - $150,000", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "benefits", "placeholder", "e.g. Health, 401k, Stock options", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["name", "description", "rows", "4", "placeholder", "Describe the role, responsibilities, and what the candidate will be doing...", "required", "", 3, "ngModelChange", "ngModel"], ["name", "requirements", "rows", "4", "placeholder", "List required skills, experience, education, certifications...", "required", "", 3, "ngModelChange", "ngModel"], ["name", "preferredQualifications", "rows", "3", "placeholder", "Nice-to-have skills or experience...", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "startDate", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "hiringManager", "placeholder", "Your name or hiring manager name", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "3", "placeholder", "Any additional information for the recruiter...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "click", "disabled"], [1, "candidates-grid"], [1, "interviews-container"], ["class", "interviews-list", 4, "ngIf"], [1, "interviews-list"], ["class", "interview-card", 4, "ngFor", "ngForOf"], [1, "interview-card"], [1, "interview-main"], [1, "interview-datetime"], [1, "date"], [1, "time"], [1, "duration"], [1, "interview-details"], [1, "candidate-info"], [1, "candidate-avatar"], [1, "candidate-data"], [1, "interview-type"], [1, "interview-meta"], [1, "interviewer-list"], [1, "interviewers"], ["class", "location", 4, "ngIf"], [1, "meeting-details"], ["class", "meeting-info", 4, "ngIf"], ["class", "location-info", 4, "ngIf"], [1, "interview-actions"], ["class", "interview-status", 4, "ngIf"], [1, "location"], [1, "meeting-info"], [1, "meeting-details-box"], [1, "meeting-detail-row"], [1, "detail-label"], ["target", "_blank", 1, "meeting-link-text", 3, "href"], ["class", "meeting-detail-row", 4, "ngIf"], [1, "copy-all-btn", 3, "click"], [1, "detail-value"], [1, "location-info"], [1, "interview-status"], [1, "status-indicator"], ["class", "feedback-list", 4, "ngIf"], ["class", "feedback-form-container", 4, "ngIf"], [1, "feedback-list"], ["class", "feedback-card", 4, "ngFor", "ngForOf"], [1, "feedback-card"], [1, "feedback-header"], [1, "feedback-subject"], [1, "feedback-type-badge"], [1, "feedback-date"], ["class", "feedback-context", 4, "ngIf"], [1, "feedback-content"], [1, "feedback-footer"], [1, "sent-to"], [1, "feedback-context"], ["class", "context-item", 4, "ngIf"], [1, "context-item"], [1, "feedback-form-container"], [1, "feedback-form"], ["name", "type", "required", "", 3, "ngModelChange", "change", "ngModel"], ["value", "Candidate"], ["value", "Position"], ["value", "Process"], ["value", "General"], ["class", "form-group", 4, "ngIf"], ["type", "text", "name", "subject", "placeholder", "Brief subject line", "required", "", 3, "ngModelChange", "ngModel"], ["name", "message", "rows", "6", "placeholder", "Share your thoughts, questions, or feedback with your recruiter...", "required", "", 3, "ngModelChange", "ngModel"], ["name", "priority", 3, "ngModelChange", "ngModel"], ["value", "Normal"], ["value", "High"], ["value", "Urgent"], ["type", "submit", 1, "btn-primary", 3, "click"], ["name", "candidateId", "required", "", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "positionId", "required", "", 3, "ngModelChange", "change", "ngModel"], ["name", "category", "required", "", 3, "ngModelChange", "ngModel"], ["value", "Interested"], ["value", "Not Interested"], ["value", "Need More Info"], ["value", "Schedule Interview"], ["value", "Concerns"], [1, "reports-grid"], [1, "card", "report-card"], [1, "btn-primary"], [1, "settings-tabs"], [1, "tab-btn", 3, "click"], [1, "settings-container"], [1, "card", "settings-card"], [1, "settings-description"], ["type", "text", "placeholder", "Your full name", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "your.email@company.com", "disabled", "", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Your company", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Hiring Manager", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+1 (555) 000-0000", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter current password", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter new password", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Confirm new password", 3, "ngModelChange", "ngModel"], [1, "settings-list"], [1, "setting-item"], [1, "setting-info"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "slider"], [1, "preference-select", 3, "ngModelChange", "change", "ngModel"], ["value", "light"], ["value", "dark"], ["value", "auto"], ["value", "en"], ["value", "es"], ["value", "fr"], ["value", "de"], ["value", "MM/DD/YYYY"], ["value", "DD/MM/YYYY"], ["value", "YYYY-MM-DD"], ["value", "12h"], ["value", "24h"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"]], template: function ClientDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4)(5, "defs")(6, "linearGradient", 5);
        \u0275\u0275element(7, "stop", 6)(8, "stop", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "text", 8);
        \u0275\u0275text(10, "T");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "circle", 9)(12, "circle", 10)(13, "circle", 11)(14, "circle", 12);
        \u0275\u0275elementStart(15, "text", 13);
        \u0275\u0275text(16, "F");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "span", 14);
        \u0275\u0275text(18, "TalentForge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 15);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "nav", 16)(22, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_22_listener() {
          return ctx.setActiveSection("overview");
        });
        \u0275\u0275elementStart(23, "span", 18);
        \u0275\u0275text(24, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_27_listener() {
          return ctx.setActiveSection("submissions");
        });
        \u0275\u0275elementStart(28, "span", 18);
        \u0275\u0275text(29, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Candidate Submissions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, ClientDashboardComponent_span_32_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_33_listener() {
          return ctx.setActiveSection("interviews");
        });
        \u0275\u0275elementStart(34, "span", 18);
        \u0275\u0275text(35, "\u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "My Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 20);
        \u0275\u0275text(39, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_40_listener() {
          return ctx.setActiveSection("positions");
        });
        \u0275\u0275elementStart(41, "span", 18);
        \u0275\u0275text(42, "\u{1F4BC}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Job Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, ClientDashboardComponent_span_45_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_46_listener() {
          return ctx.setActiveSection("feedback");
        });
        \u0275\u0275elementStart(47, "span", 18);
        \u0275\u0275text(48, "\u{1F4AC}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50, "Feedback & Notes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_51_listener() {
          return ctx.setActiveSection("reports");
        });
        \u0275\u0275elementStart(52, "span", 18);
        \u0275\u0275text(53, "\u{1F4C8}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span");
        \u0275\u0275text(55, "Hiring Progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_56_listener() {
          return ctx.setActiveSection("settings");
        });
        \u0275\u0275elementStart(57, "span", 18);
        \u0275\u0275text(58, "\u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span");
        \u0275\u0275text(60, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 21)(62, "a", 17);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_a_click_62_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(63, "span", 18);
        \u0275\u0275text(64, "\u{1F6AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span");
        \u0275\u0275text(66, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "main", 22)(68, "header", 23)(69, "div", 24)(70, "span", 25);
        \u0275\u0275text(71, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 27)(74, "div", 28)(75, "button", 29);
        \u0275\u0275listener("click", function ClientDashboardComponent_Template_button_click_75_listener() {
          return ctx.toggleNotifications();
        });
        \u0275\u0275text(76, " \u{1F514} ");
        \u0275\u0275template(77, ClientDashboardComponent_span_77_Template, 2, 1, "span", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275template(78, ClientDashboardComponent_div_78_Template, 11, 3, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 32)(80, "div", 33);
        \u0275\u0275text(81, "CU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span");
        \u0275\u0275text(83, "Client User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 34);
        \u0275\u0275template(85, ClientDashboardComponent_div_85_Template, 4, 0, "div", 35)(86, ClientDashboardComponent_div_86_Template, 57, 3, "div", 36)(87, ClientDashboardComponent_div_87_Template, 10, 2, "div", 36)(88, ClientDashboardComponent_div_88_Template, 12, 3, "div", 36)(89, ClientDashboardComponent_div_89_Template, 9, 1, "div", 36)(90, ClientDashboardComponent_div_90_Template, 10, 2, "div", 36)(91, ClientDashboardComponent_div_91_Template, 11, 2, "div", 36)(92, ClientDashboardComponent_div_92_Template, 29, 0, "div", 36)(93, ClientDashboardComponent_div_93_Template, 18, 9, "div", 36);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.getTenantName());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeSection === "overview");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeSection === "submissions");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.dashboard.totalPending > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeSection === "interviews");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeSection === "positions");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.jobRequests.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeSection === "feedback");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeSection === "reports");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeSection === "settings");
        \u0275\u0275advance(21);
        \u0275\u0275property("ngIf", ctx.unreadNotifications > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifications);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.activeSection === "overview");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "submissions");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "positions");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "candidates");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "interviews");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "feedback");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "reports");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeSection === "settings");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, MaterialModule], styles: ['\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Inter", sans-serif;\n  background: #f8fafc;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background:\n    linear-gradient(\n      180deg,\n      #1e293b 0%,\n      #334155 100%);\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 100%);\n}\n.logo-section[_ngcontent-%COMP%] {\n  padding: 32px 24px 24px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.tenant-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n  background: rgba(0, 102, 255, 0.2);\n  padding: 4px 12px;\n  border-radius: 12px;\n  display: inline-block;\n  margin-top: 8px;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  margin: 2px 0;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  transform: translateX(4px);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -18px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 24px;\n  background: #00d4ff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 20px;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 12px;\n  min-width: 20px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 20px 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  position: relative;\n  z-index: 10;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  width: 400px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #64748b;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  flex: 1;\n  font-size: 0.875rem;\n}\n.top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 18px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.user-profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n  overflow-y: auto;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  min-height: calc(100vh - 80px);\n}\n.content-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.candidate-list[_ngcontent-%COMP%], .job-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.candidate-item[_ngcontent-%COMP%], .job-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  transition: background 0.3s;\n}\n.candidate-item[_ngcontent-%COMP%]:hover, .job-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.candidate-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.candidate-avatar.large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 1rem;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-role[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.candidate-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.candidate-status.screening[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.candidate-status.interview[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.candidate-status.offer[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.job-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-info[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.job-info[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.job-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n  font-size: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 0.875rem;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-approve[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.btn-approve[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.btn-reject[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.job-requests-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.job-request-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-left: 4px solid #0066ff;\n  transition: all 0.3s ease;\n}\n.job-request-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.job-request-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.job-request-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.job-request-header[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.job-request-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.job-request-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.job-request-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.job-request-form-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 32px;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.form-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.form-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.job-request-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.positions-grid[_ngcontent-%COMP%], .candidates-grid[_ngcontent-%COMP%], .reports-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n}\n.position-card[_ngcontent-%COMP%], .candidate-card[_ngcontent-%COMP%], .report-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.position-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .candidate-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .report-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-weight: 600;\n  color: #0f172a;\n}\n.position-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .candidate-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .report-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.position-stats[_ngcontent-%COMP%], .position-actions[_ngcontent-%COMP%], .candidate-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 16px;\n}\n.position-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.candidate-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.interviews-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.interviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.interview-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  border-left: 4px solid #0066ff;\n  transition: all 0.3s ease;\n}\n.interview-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.interview-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 20px;\n}\n.interview-datetime[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 12px;\n  min-width: 120px;\n  border: 1px solid #e2e8f0;\n}\n.interview-datetime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.875rem;\n  text-align: center;\n  margin-bottom: 4px;\n}\n.interview-datetime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 4px;\n}\n.interview-datetime[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n  text-align: center;\n}\n.interview-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.candidate-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.candidate-data[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #0066ff;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.candidate-data[_ngcontent-%COMP%]   .interview-type[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.interview-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.interview-meta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.interview-meta[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  min-width: 80px;\n  font-size: 0.875rem;\n}\n.interview-meta[_ngcontent-%COMP%]   .interviewers[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 0.875rem;\n}\n.meeting-details[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.meeting-info[_ngcontent-%COMP%], .location-info[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.meeting-info[_ngcontent-%COMP%]:last-child, .location-info[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.meeting-details-box[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 16px;\n}\n.meeting-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n  align-items: flex-start;\n}\n.meeting-detail-row[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 16px;\n}\n.meeting-detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  min-width: 100px;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.meeting-detail-row[_ngcontent-%COMP%]   .meeting-link-text[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  word-break: break-all;\n  flex: 1;\n}\n.meeting-detail-row[_ngcontent-%COMP%]   .meeting-link-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.meeting-detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 0.875rem;\n  font-family: monospace;\n  flex: 1;\n}\n.copy-all-btn[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.copy-all-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 4px;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.location-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.location-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.location-info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 0.875rem;\n}\n.interview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n.interview-status[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.interview-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.interview-status[_ngcontent-%COMP%]   .status-indicator.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.interview-status[_ngcontent-%COMP%]   .status-indicator.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 24px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-weight: 600;\n  font-size: 1.125rem;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #0066ff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #64748b;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.submissions-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.submissions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.candidate-submission[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-left: 4px solid #0066ff;\n  transition: all 0.3s ease;\n}\n.candidate-submission[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.submission-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.candidate-basic-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.candidate-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.candidate-details[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-weight: 600;\n  color: #0066ff;\n  font-size: 1rem;\n}\n.candidate-details[_ngcontent-%COMP%]   .recruiter[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.submission-summary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.submission-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.submission-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.submission-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 600;\n}\n.submission-summary[_ngcontent-%COMP%]   .recruiter-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  color: #4b5563;\n  font-style: italic;\n  line-height: 1.5;\n}\n.submission-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.submission-feedback[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  padding: 16px;\n  border-radius: 8px;\n  border-left: 4px solid #0066ff;\n}\n.submission-feedback[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.submission-feedback[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.submission-feedback[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  color: #374151;\n  font-style: italic;\n}\n.submission-feedback[_ngcontent-%COMP%]   .next-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #059669;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.pending_review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.approved_for_interview[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .positions-grid[_ngcontent-%COMP%], .candidates-grid[_ngcontent-%COMP%], .reports-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n    padding: 16px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    padding: 16px;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .submission-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .submission-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .candidate-basic-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .interview-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .interview-datetime[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .interview-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .interview-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n  .success-snackbar {\n  background-color: #4caf50 !important;\n  color: white !important;\n}\n  .success-snackbar .mat-mdc-snack-bar-label {\n  color: white !important;\n}\n  .success-snackbar .mat-mdc-button {\n  color: white !important;\n}\n  .error-snackbar {\n  background-color: #f44336 !important;\n  color: white !important;\n}\n  .error-snackbar .mat-mdc-snack-bar-label {\n  color: white !important;\n}\n  .error-snackbar .mat-mdc-button {\n  color: white !important;\n}\n  .info-snackbar {\n  background-color: #2196f3 !important;\n  color: white !important;\n}\n  .info-snackbar .mat-mdc-snack-bar-label {\n  color: white !important;\n}\n  .info-snackbar .mat-mdc-button {\n  color: white !important;\n}\n/*# sourceMappingURL=client-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDashboardComponent, { className: "ClientDashboardComponent" });
})();
export {
  ClientDashboardComponent
};
//# sourceMappingURL=chunk-UWYYAQTJ.js.map
