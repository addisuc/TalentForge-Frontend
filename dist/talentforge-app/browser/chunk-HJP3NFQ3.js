import {
  UserService
} from "./chunk-AJCMZTKQ.js";
import {
  UserRole
} from "./chunk-BAFRGCFI.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/features/users/users-manage.component.ts
function UsersManageComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UsersManageComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openInviteModal());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Invite User ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMessage(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Send Message ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewPerformance(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " View Performance ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function UsersManageComponent_div_30_div_35_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditRoleModal(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Change Role ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetPassword(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reset Password ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reactivateUser(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reactivate ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const user_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeactivateModal(user_r4));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u{1F6AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Deactivate ");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_30_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("clickOutside", function UsersManageComponent_div_30_div_35_Template_div_clickOutside_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeActionMenu());
    });
    \u0275\u0275elementStart(1, "button", 36);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewProfile(user_r4));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " View Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UsersManageComponent_div_30_div_35_button_5_Template, 4, 0, "button", 37)(6, UsersManageComponent_div_30_div_35_button_6_Template, 4, 0, "button", 37)(7, UsersManageComponent_div_30_div_35_div_7_Template, 1, 0, "div", 38)(8, UsersManageComponent_div_30_div_35_button_8_Template, 4, 0, "button", 37)(9, UsersManageComponent_div_30_div_35_button_9_Template, 4, 0, "button", 37)(10, UsersManageComponent_div_30_div_35_button_10_Template, 4, 0, "button", 37)(11, UsersManageComponent_div_30_div_35_button_11_Template, 4, 0, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.canSendMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canViewPerformance(user_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTenantAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditRole(user_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canResetPassword(user_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r4.status === "Inactive" && ctx_r1.isTenantAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeactivateUser(user_r4) && user_r4.status === "Active");
  }
}
function UsersManageComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24)(12, "span", 5);
    \u0275\u0275text(13, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 26)(17, "span", 27);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 28);
    \u0275\u0275text(20, "Active Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "span", 27);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 28);
    \u0275\u0275text(25, "Placements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 29)(27, "span", 30);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 31)(31, "button", 32);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_Template_button_click_31_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewProfile(user_r4));
    });
    \u0275\u0275text(32, "View Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 33);
    \u0275\u0275listener("click", function UsersManageComponent_div_30_Template_button_click_33_listener($event) {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActionMenu(user_r4.id, $event));
    });
    \u0275\u0275text(34, "\u22EE");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, UsersManageComponent_div_30_div_35_Template, 12, 7, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", user_r4.status === "Active")("inactive", user_r4.status === "Inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.status, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleLabel(user_r4.role), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r4.activeJobs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r4.placements);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Last active ", \u0275\u0275pipeBind2(29, 13, user_r4.lastActive, "MMM d, h:mm a"), "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.showActionMenu === user_r4.id);
  }
}
function UsersManageComponent_div_31_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UsersManageComponent_div_31_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.sendMessage(ctx_r1.selectedUser);
      return \u0275\u0275resetView(ctx_r1.closeProfileModal());
    });
    \u0275\u0275text(1, "Send Message");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileModal());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function UsersManageComponent_div_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Team Member Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "div", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 49)(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 50);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 51)(21, "h4");
    \u0275\u0275text(22, "Performance Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 52)(24, "div", 53)(25, "span", 54);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 55);
    \u0275\u0275text(28, "Active Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 53)(30, "span", 54);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 55);
    \u0275\u0275text(33, "Total Placements");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 51)(35, "h4");
    \u0275\u0275text(36, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 56)(38, "span", 28);
    \u0275\u0275text(39, "Last Active:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 27);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 51)(44, "h4");
    \u0275\u0275text(45, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 56)(47, "span", 28);
    \u0275\u0275text(48, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 27);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 57)(52, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_31_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileModal());
    });
    \u0275\u0275text(53, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, UsersManageComponent_div_31_button_54_Template, 2, 0, "button", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.role));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.status) === "Active")("inactive", (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.status) === "Inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.status, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.activeJobs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.placements);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 14, ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.lastActive, "MMM d, yyyy h:mm a"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.canSendMessage());
  }
}
function UsersManageComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMessageModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function UsersManageComponent_div_32_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Send Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMessageModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "div", 61)(9, "span", 5);
    \u0275\u0275text(10, "\u{1F4E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "To: ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "label");
    \u0275\u0275text(18, "Subject (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_div_32_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.messageSubject, $event) || (ctx_r1.messageSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "label");
    \u0275\u0275text(22, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 64);
    \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_div_32_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 57)(25, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_32_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMessageModal());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 65);
    \u0275\u0275listener("click", function UsersManageComponent_div_32_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMessageSubmit());
    });
    \u0275\u0275text(28, "Send Message");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.messageSubject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.messageBody);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.messageBody.trim());
  }
}
function UsersManageComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePerformanceModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function UsersManageComponent_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Performance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePerformanceModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "div", 67)(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 68);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 69)(17, "h4");
    \u0275\u0275text(18, "Current Period (This Month)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 52)(20, "div", 53)(21, "span", 54);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 55);
    \u0275\u0275text(24, "Active Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 53)(26, "span", 54);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 55);
    \u0275\u0275text(29, "Total Placements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 53)(31, "span", 54);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 55);
    \u0275\u0275text(35, "Interviews Scheduled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 53)(37, "span", 54);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 55);
    \u0275\u0275text(41, "Candidates Sourced");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 69)(43, "h4");
    \u0275\u0275text(44, "Key Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 70)(46, "span", 28);
    \u0275\u0275text(47, "Success Rate:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 71);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 70)(51, "span", 28);
    \u0275\u0275text(52, "Avg. Time to Fill:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 27);
    \u0275\u0275text(54, "18 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 70)(56, "span", 28);
    \u0275\u0275text(57, "Client Satisfaction:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 71);
    \u0275\u0275text(59, "4.8/5.0");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 57)(61, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_33_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePerformanceModal());
    });
    \u0275\u0275text(62, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 72);
    \u0275\u0275text(64, "Export Report");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.role));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.activeJobs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.placements);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 8, ((ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.placements) || 0) * 0.85, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 11, ((ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.placements) || 0) * 2.5, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.placements) ? 72 : 0, "%");
  }
}
function UsersManageComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResetPasswordModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function UsersManageComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResetPasswordModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "div", 73)(9, "span", 5);
    \u0275\u0275text(10, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "p", 74);
    \u0275\u0275text(13, "Send Password Reset Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 75);
    \u0275\u0275text(15, "A password reset link will be sent to ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ". The link will expire in 24 hours.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 57)(20, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_34_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResetPasswordModal());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275listener("click", function UsersManageComponent_div_34_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmResetPassword());
    });
    \u0275\u0275text(23, "Send Reset Link");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.email);
  }
}
function UsersManageComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditRoleModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function UsersManageComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Change Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditRoleModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "p", 76);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 62)(11, "label");
    \u0275\u0275text(12, "New Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_div_35_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRole, $event) || (ctx_r1.newRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15, "Recruiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 10);
    \u0275\u0275text(17, "Recruiting Manager");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 57)(19, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_35_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditRoleModal());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function UsersManageComponent_div_35_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRole());
    });
    \u0275\u0275text(22, "Save Changes");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.name, " (", ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRole);
  }
}
function UsersManageComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeactivateModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function UsersManageComponent_div_36_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Deactivate User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_36_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeactivateModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "p", 75);
    \u0275\u0275text(9, "\u26A0\uFE0F Are you sure you want to deactivate ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 78);
    \u0275\u0275text(14, "They will lose access to the system but their data will be preserved. You can reactivate them later.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 57)(16, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_36_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeactivateModal());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 79);
    \u0275\u0275listener("click", function UsersManageComponent_div_36_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeactivate());
    });
    \u0275\u0275text(19, "Deactivate User");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.name);
  }
}
function UsersManageComponent_div_37_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_37_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, "You can only invite other recruiters");
    \u0275\u0275elementEnd();
  }
}
function UsersManageComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UsersManageComponent_div_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function UsersManageComponent_div_37_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h2");
    \u0275\u0275text(4, "Invite Team Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function UsersManageComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "div", 62)(9, "label");
    \u0275\u0275text(10, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_div_37_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteEmail, $event) || (ctx_r1.inviteEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function UsersManageComponent_div_37_Template_input_blur_11_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmailBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UsersManageComponent_div_37_p_12_Template, 2, 0, "p", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 62)(14, "label");
    \u0275\u0275text(15, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 82);
    \u0275\u0275template(17, UsersManageComponent_div_37_p_17_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 57)(19, "button", 58);
    \u0275\u0275listener("click", function UsersManageComponent_div_37_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInviteModal());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 65);
    \u0275\u0275listener("click", function UsersManageComponent_div_37_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendInvite());
    });
    \u0275\u0275text(22, "Send Invitation");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("error", ctx_r1.emailTouched && !ctx_r1.isValidEmail());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.emailTouched && !ctx_r1.isValidEmail());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isRecruiter);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isValidEmail());
  }
}
var UsersManageComponent = class _UsersManageComponent {
  constructor(authService, userService) {
    this.authService = authService;
    this.userService = userService;
    this.showInviteModal = false;
    this.inviteEmail = "";
    this.emailTouched = false;
    this.currentUserRole = null;
    this.isRecruiter = false;
    this.isTenantAdmin = false;
    this.showActionMenu = null;
    this.showDeactivateModal = false;
    this.showEditRoleModal = false;
    this.showProfileModal = false;
    this.showMessageModal = false;
    this.showPerformanceModal = false;
    this.showResetPasswordModal = false;
    this.selectedUser = null;
    this.newRole = "";
    this.messageSubject = "";
    this.messageBody = "";
    this.users = [];
    this.loading = false;
    this.error = "";
    this.searchQuery = "";
    this.selectedRole = "all";
    this.selectedStatus = "all";
  }
  ngOnInit() {
    const user = this.authService.getCurrentUserValue();
    if (user) {
      this.currentUserRole = user.role;
      this.isRecruiter = user.role === UserRole.RECRUITER;
      this.isTenantAdmin = user.role === UserRole.TENANT_ADMIN;
    }
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.error = "";
    this.userService.getAllUsers(0, 100).subscribe({
      next: (response) => {
        this.users = response.content.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
          avatar: this.getAvatarForRole(user.role),
          status: user.status === "ACTIVE" ? "Active" : "Inactive",
          activeJobs: 0,
          placements: 0,
          lastActive: user.updatedAt
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load users:", err);
        this.error = "Failed to load team members";
        this.loading = false;
        this.users = [];
      }
    });
  }
  getAvatarForRole(role) {
    const avatars = {
      "TENANT_ADMIN": "\u{1F468}\u{1F3EB}",
      "RECRUITER": "\u{1F468}\u{1F4BB}",
      "RECRUITING_MANAGER": "\u{1F469}\u{1F4BC}",
      "CANDIDATE": "\u{1F464}"
    };
    return avatars[role] || "\u{1F464}";
  }
  get filteredUsers() {
    return this.users.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = this.selectedRole === "all" || user.role === this.selectedRole;
      const matchesStatus = this.selectedStatus === "all" || user.status === this.selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }
  getRoleLabel(role) {
    const labels = {
      "TENANT_ADMIN": "Admin",
      "RECRUITING_MANAGER": "Manager",
      "RECRUITER": "Recruiter"
    };
    return labels[role] || role;
  }
  openInviteModal() {
    this.showInviteModal = true;
    this.inviteEmail = "";
    this.emailTouched = false;
  }
  closeInviteModal() {
    this.showInviteModal = false;
    this.inviteEmail = "";
    this.emailTouched = false;
  }
  sendInvite() {
    if (this.isValidEmail()) {
      console.log("Sending invite to:", this.inviteEmail);
      this.closeInviteModal();
    }
  }
  isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.inviteEmail);
  }
  onEmailBlur() {
    this.emailTouched = true;
  }
  // Role-based permissions
  canInviteUsers() {
    return this.isTenantAdmin;
  }
  canEditRole(user) {
    return this.isTenantAdmin && user.role !== "TENANT_ADMIN";
  }
  canDeactivateUser(user) {
    return this.isTenantAdmin && user.role !== "TENANT_ADMIN";
  }
  canViewProfile() {
    return true;
  }
  canSendMessage() {
    return true;
  }
  canViewPerformance(user) {
    return this.isTenantAdmin || user.role === "RECRUITER";
  }
  canResetPassword(user) {
    return this.isTenantAdmin;
  }
  // Action handlers
  toggleActionMenu(userId, event) {
    event.stopPropagation();
    this.showActionMenu = this.showActionMenu === userId ? null : userId;
  }
  closeActionMenu() {
    this.showActionMenu = null;
  }
  viewProfile(user) {
    this.selectedUser = user;
    this.showProfileModal = true;
    this.closeActionMenu();
  }
  closeProfileModal() {
    this.showProfileModal = false;
    this.selectedUser = null;
  }
  sendMessage(user) {
    this.selectedUser = user;
    this.showMessageModal = true;
    this.messageSubject = "";
    this.messageBody = "";
    this.closeActionMenu();
  }
  closeMessageModal() {
    this.showMessageModal = false;
    this.selectedUser = null;
    this.messageSubject = "";
    this.messageBody = "";
  }
  sendMessageSubmit() {
    if (this.messageBody.trim()) {
      console.log("Send message:", { to: this.selectedUser, subject: this.messageSubject, body: this.messageBody });
      this.closeMessageModal();
    }
  }
  viewPerformance(user) {
    this.selectedUser = user;
    this.showPerformanceModal = true;
    this.closeActionMenu();
  }
  closePerformanceModal() {
    this.showPerformanceModal = false;
    this.selectedUser = null;
  }
  openEditRoleModal(user) {
    this.selectedUser = user;
    this.newRole = user.role;
    this.showEditRoleModal = true;
    this.closeActionMenu();
  }
  closeEditRoleModal() {
    this.showEditRoleModal = false;
    this.selectedUser = null;
    this.newRole = "";
  }
  saveRole() {
    if (this.selectedUser && this.newRole) {
      console.log("Update role:", this.selectedUser.id, this.newRole);
      this.selectedUser.role = this.newRole;
      this.closeEditRoleModal();
    }
  }
  openDeactivateModal(user) {
    this.selectedUser = user;
    this.showDeactivateModal = true;
    this.closeActionMenu();
  }
  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedUser = null;
  }
  confirmDeactivate() {
    if (this.selectedUser) {
      console.log("Deactivate user:", this.selectedUser.id);
      this.selectedUser.status = "Inactive";
      this.closeDeactivateModal();
    }
  }
  reactivateUser(user) {
    console.log("Reactivate user:", user.id);
    user.status = "Active";
    this.closeActionMenu();
  }
  resetPassword(user) {
    this.selectedUser = user;
    this.showResetPasswordModal = true;
    this.closeActionMenu();
  }
  closeResetPasswordModal() {
    this.showResetPasswordModal = false;
    this.selectedUser = null;
  }
  confirmResetPassword() {
    if (this.selectedUser) {
      console.log("Reset password for:", this.selectedUser.id);
      this.closeResetPasswordModal();
    }
  }
  resendInvite(user) {
    console.log("Resend invite to:", user);
    this.closeActionMenu();
  }
  static {
    this.\u0275fac = function UsersManageComponent_Factory(t) {
      return new (t || _UsersManageComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersManageComponent, selectors: [["app-users-manage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 12, consts: [[1, "users-page"], [1, "header"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "filters"], [1, "search-bar"], [1, "icon"], ["type", "text", "placeholder", "Search team members...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "TENANT_ADMIN"], ["value", "RECRUITING_MANAGER"], ["value", "RECRUITER"], ["value", "Active"], ["value", "Inactive"], [1, "users-grid"], ["class", "user-card", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn-primary", 3, "click"], [1, "user-card"], [1, "card-header"], [1, "avatar"], [1, "info"], [1, "email"], [1, "status"], [1, "role-badge"], [1, "stats"], [1, "stat"], [1, "value"], [1, "label"], [1, "footer"], [1, "last-active"], [1, "actions"], [1, "btn-link", 3, "click"], [1, "action-menu-btn", 3, "click"], ["class", "action-menu", 3, "clickOutside", 4, "ngIf"], [1, "action-menu", 3, "clickOutside"], [1, "menu-item", 3, "click"], ["class", "menu-item", 3, "click", 4, "ngIf"], ["class", "divider", 4, "ngIf"], ["class", "menu-item danger", 3, "click", 4, "ngIf"], [1, "divider"], [1, "menu-item", "danger", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "profile-modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body", "profile-body"], [1, "profile-header"], [1, "avatar-large"], [1, "profile-info"], [1, "status-badge"], [1, "profile-section"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-value"], [1, "metric-label"], [1, "info-row"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "modal", 3, "click"], [1, "modal-body"], [1, "recipient-info"], [1, "form-group"], ["type", "text", "placeholder", "Enter subject", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "6", "placeholder", "Type your message here...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [1, "modal", "performance-modal", 3, "click"], [1, "performance-header"], [1, "role"], [1, "performance-section"], [1, "metric-row"], [1, "value", "success"], [1, "btn-primary"], [1, "warning-box"], [1, "warning-title"], [1, "warning-text"], [1, "user-info"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "help-text"], [1, "btn-danger", 3, "click"], ["type", "email", "placeholder", "colleague@example.com", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], ["class", "error-text", 4, "ngIf"], ["type", "text", "value", "Recruiter", "readonly", "", 1, "form-control"], ["class", "help-text", 4, "ngIf"], [1, "error-text"]], template: function UsersManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Team Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage your recruiting team and permissions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UsersManageComponent_button_7_Template, 4, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "span", 5);
        \u0275\u0275text(11, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
          return $event;
        });
        \u0275\u0275elementStart(14, "option", 8);
        \u0275\u0275text(15, "All Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Recruiter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UsersManageComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(23, "option", 8);
        \u0275\u0275text(24, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 14);
        \u0275\u0275template(30, UsersManageComponent_div_30_Template, 36, 16, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, UsersManageComponent_div_31_Template, 55, 17, "div", 16)(32, UsersManageComponent_div_32_Template, 29, 5, "div", 16)(33, UsersManageComponent_div_33_Template, 65, 14, "div", 16)(34, UsersManageComponent_div_34_Template, 24, 1, "div", 16)(35, UsersManageComponent_div_35_Template, 23, 3, "div", 16)(36, UsersManageComponent_div_36_Template, 20, 1, "div", 16)(37, UsersManageComponent_div_37_Template, 23, 6, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.canInviteUsers());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.filteredUsers);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showProfileModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMessageModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPerformanceModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResetPasswordModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditRoleModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeactivateModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showInviteModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.users-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 1rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 0.75rem 0;\n  font-size: 0.95rem;\n  outline: none;\n}\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.users-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.user-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: all 0.3s;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  border-color: #0066ff;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.user-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.user-card[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #eff6ff;\n  color: #1e40af;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0066ff;\n}\n.user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .last-active[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.875rem;\n  padding: 0.25rem 0.5rem;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  line-height: 1;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  margin-top: 0.5rem;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  min-width: 200px;\n  z-index: 100;\n  overflow: hidden;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #0f172a;\n  transition: background 0.2s;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .menu-item.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .menu-item.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.user-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 0.25rem 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.warning-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.profile-modal[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.profile-body[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 1.5rem;\n}\n.profile-header[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1rem 0;\n  display: block;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%], .profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-right: 0.5rem;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .status-badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .status-badge.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.profile-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 8px;\n  text-align: center;\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0066ff;\n  margin-bottom: 0.5rem;\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.info-row[_ngcontent-%COMP%]   .value.success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.recipient-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.recipient-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.performance-modal[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.performance-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 1.5rem;\n}\n.performance-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 50%;\n}\n.performance-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.performance-header[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.performance-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.performance-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n}\n.performance-section[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.performance-section[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.performance-section[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.performance-section[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.performance-section[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #fef3c7;\n  border: 1px solid #fbbf24;\n  border-radius: 8px;\n}\n.warning-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.warning-box[_ngcontent-%COMP%]   .warning-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n}\n.warning-box[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=users-manage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersManageComponent, { className: "UsersManageComponent" });
})();
export {
  UsersManageComponent
};
//# sourceMappingURL=chunk-HJP3NFQ3.js.map
