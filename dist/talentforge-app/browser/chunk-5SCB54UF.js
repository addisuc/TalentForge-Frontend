import {
  ToastService
} from "./chunk-2XPUPG4G.js";
import {
  NavigationService
} from "./chunk-4MPRBMJL.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-Z6TDORLQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-OEVDKEI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Subject,
  interval,
  takeUntil,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";

// src/app/shared/components/session-timeout/session-timeout.component.ts
function SessionTimeoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Session Expiring Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your session will expire in:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 5);
    \u0275\u0275text(11, "You will be automatically logged out for security reasons.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
    \u0275\u0275listener("click", function SessionTimeoutComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.extendSession());
    });
    \u0275\u0275text(14, "Stay Logged In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function SessionTimeoutComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(16, "Logout Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.remainingTime);
  }
}
var SessionTimeoutComponent = class _SessionTimeoutComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.showWarning = false;
    this.remainingTime = "";
    this.warningTime = 5 * 60 * 1e3;
    this.sessionDuration = 30 * 60 * 1e3;
    this.extendedSessionDuration = 30 * 24 * 60 * 60 * 1e3;
    this.lastActivityTime = Date.now();
  }
  ngOnInit() {
    this.checkRememberMe();
    this.startActivityTracking();
    this.startSessionCheck();
  }
  checkRememberMe() {
    const rememberMe = localStorage.getItem("rememberMe");
    const expiry = localStorage.getItem("rememberMeExpiry");
    if (rememberMe === "true" && expiry) {
      const expiryTime = parseInt(expiry);
      if (Date.now() < expiryTime) {
        this.sessionDuration = this.extendedSessionDuration;
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberMeExpiry");
      }
    }
  }
  ngOnDestroy() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
  }
  startActivityTracking() {
    ["mousedown", "keydown", "scroll", "touchstart"].forEach((event) => {
      document.addEventListener(event, () => this.updateActivity(), true);
    });
  }
  updateActivity() {
    if (!this.showWarning) {
      this.lastActivityTime = Date.now();
    }
  }
  startSessionCheck() {
    this.checkInterval = interval(1e3).subscribe(() => {
      const elapsed = Date.now() - this.lastActivityTime;
      const remaining = this.sessionDuration - elapsed;
      if (remaining <= 0) {
        this.forceLogout();
      } else if (remaining <= this.warningTime && !this.showWarning) {
        this.showWarning = true;
        this.startCountdown();
      }
    });
  }
  startCountdown() {
    this.countdownInterval = interval(1e3).subscribe(() => {
      const elapsed = Date.now() - this.lastActivityTime;
      const remaining = this.sessionDuration - elapsed;
      if (remaining <= 0) {
        this.forceLogout();
      } else {
        const minutes = Math.floor(remaining / 6e4);
        const seconds = Math.floor(remaining % 6e4 / 1e3);
        this.remainingTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      }
    });
  }
  extendSession() {
    this.lastActivityTime = Date.now();
    this.showWarning = false;
    this.countdownInterval?.unsubscribe();
  }
  logout() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
  forceLogout() {
    this.checkInterval?.unsubscribe();
    this.countdownInterval?.unsubscribe();
    this.authService.logout();
    this.router.navigate(["/auth/login"], {
      queryParams: { reason: "session-expired" }
    });
  }
  static {
    this.\u0275fac = function SessionTimeoutComponent_Factory(t) {
      return new (t || _SessionTimeoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionTimeoutComponent, selectors: [["app-session-timeout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "session-warning-overlay", 4, "ngIf"], [1, "session-warning-overlay"], [1, "session-warning-modal"], [1, "warning-icon"], [1, "countdown"], [1, "hint"], [1, "actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"]], template: function SessionTimeoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SessionTimeoutComponent_div_0_Template, 17, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.showWarning);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.session-warning-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.session-warning-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideUp 0.3s;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\np[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1rem;\n}\n.countdown[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #ef4444;\n  font-family: monospace;\n  margin: 1rem 0;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n@media (max-width: 480px) {\n  .session-warning-modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .warning-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .countdown[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=session-timeout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionTimeoutComponent, { className: "SessionTimeoutComponent" });
})();

// src/app/shared/components/toast/toast.component.ts
function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ToastComponent_div_1_Template_button_click_5_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(toast_r2.id));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("toast-" + toast_r2.type);
    \u0275\u0275property("@slideIn", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getIcon(toast_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts = [];
  }
  ngOnInit() {
    this.toastService.toasts$.subscribe((toast) => {
      this.toasts.push(toast);
      setTimeout(() => this.remove(toast.id), toast.duration);
    });
  }
  remove(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
  getIcon(type) {
    const icons = {
      success: "\u2705",
      error: "\u274C",
      warning: "\u26A0\uFE0F",
      info: "\u2139\uFE0F"
    };
    return icons[type] || icons.info;
  }
  static {
    this.\u0275fac = function ToastComponent_Factory(t) {
      return new (t || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "toast-container"], ["class", "toast", 3, "class", 4, "ngFor", "ngForOf"], [1, "toast"], [1, "icon"], [1, "message"], [1, "close", 3, "click"]], template: function ToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ToastComponent_div_1_Template, 7, 5, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.toasts);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10001;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 400px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  min-width: 300px;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  border-left: 4px solid #10b981;\n  color: #065f46;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-left: 4px solid #ef4444;\n  color: #991b1b;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-left: 4px solid #f59e0b;\n  color: #92400e;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-left: 4px solid #0066ff;\n  color: #1e40af;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  opacity: 0.6;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%] {\n    left: 20px;\n    right: 20px;\n    max-width: none;\n  }\n  .toast[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent" });
})();

// src/app/layouts/main-layout/main-layout.component.ts
function MainLayoutComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentUser.tenantName || "My Company");
  }
}
function MainLayoutComponent_div_0_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function MainLayoutComponent_div_0_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_div_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notificationCount);
  }
}
function MainLayoutComponent_div_0_div_46_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r6.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r6.time);
  }
}
function MainLayoutComponent_div_0_div_46_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p");
    \u0275\u0275text(2, "No new notifications");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h4");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_div_46_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNotifications());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275template(7, MainLayoutComponent_div_0_div_46_div_7_Template, 7, 3, "div", 44)(8, MainLayoutComponent_div_0_div_46_div_8_Template, 3, 0, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length === 0);
  }
}
function MainLayoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-session-timeout")(2, "app-toast");
    \u0275\u0275elementStart(3, "aside", 2)(4, "div", 3)(5, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5)(7, "defs")(8, "linearGradient", 6);
    \u0275\u0275element(9, "stop", 7)(10, "stop", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "text", 9);
    \u0275\u0275text(12, "T");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "circle", 10)(14, "circle", 11)(15, "circle", 12)(16, "circle", 13);
    \u0275\u0275elementStart(17, "text", 14);
    \u0275\u0275text(18, "F");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span", 15);
    \u0275\u0275text(20, "TalentForge");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, MainLayoutComponent_div_0_div_21_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "nav", 17);
    \u0275\u0275template(23, MainLayoutComponent_div_0_a_23_Template, 5, 3, "a", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "a", 20)(26, "span", 21);
    \u0275\u0275text(27, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a", 22);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(31, "span", 21);
    \u0275\u0275text(32, "\u{1F6AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Logout");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "main", 23)(36, "header", 24)(37, "div", 25)(38, "span", 26);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_Template_span_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performGlobalSearch());
    });
    \u0275\u0275text(39, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function MainLayoutComponent_div_0_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.globalSearchTerm, $event) || (ctx_r1.globalSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MainLayoutComponent_div_0_Template_input_keyup_enter_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performGlobalSearch());
    })("input", function MainLayoutComponent_div_0_Template_input_input_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, MainLayoutComponent_div_0_button_41_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 29)(43, "button", 30);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275text(44, " \u{1F514} ");
    \u0275\u0275template(45, MainLayoutComponent_div_0_span_45_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, MainLayoutComponent_div_0_div_46_Template, 9, 2, "div", 32);
    \u0275\u0275elementStart(47, "div", 33);
    \u0275\u0275listener("click", function MainLayoutComponent_div_0_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToProfile());
    });
    \u0275\u0275elementStart(48, "div", 34);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 35);
    \u0275\u0275element(53, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r1.showTenantName && ctx_r1.currentUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.navigationItems);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.globalSearchTerm);
    \u0275\u0275property("placeholder", ctx_r1.searchPlaceholder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-notifications", ctx_r1.hasNotifications);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.notificationCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNotifications);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userName);
  }
}
var MainLayoutComponent = class _MainLayoutComponent {
  constructor(router, authService, navigationService) {
    this.router = router;
    this.authService = authService;
    this.navigationService = navigationService;
    this.currentUser = null;
    this.navigationItems = [];
    this.destroy$ = new Subject();
    this.globalSearchTerm = "";
    this.showNotifications = false;
    this.notifications = [];
    this.notificationCount = 0;
    this.hasNotifications = false;
  }
  ngOnInit() {
    const currentUser = this.authService.getCurrentUserValue();
    if (currentUser) {
      this.currentUser = currentUser;
      this.navigationItems = this.navigationService.getNavigationForRole(currentUser.role);
      this.loadNotifications();
    }
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.currentUser = user;
      if (user) {
        this.navigationItems = this.navigationService.getNavigationForRole(user.role);
        this.loadNotifications();
      } else {
        this.navigationItems = [];
        this.notifications = [];
        this.notificationCount = 0;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get userName() {
    return this.currentUser ? `${this.currentUser.firstName} ${this.currentUser.lastName}` : "User";
  }
  get userInitials() {
    return this.currentUser ? `${this.currentUser.firstName[0]}${this.currentUser.lastName[0]}` : "U";
  }
  get showTenantName() {
    return this.currentUser ? this.navigationService.isTenantRole(this.currentUser.role) : false;
  }
  get searchPlaceholder() {
    if (!this.currentUser)
      return "Search...";
    switch (this.currentUser.role) {
      case "CANDIDATE":
        return "Search jobs or companies...";
      case "RECRUITER":
        return "Search candidates, jobs, or companies...";
      case "TENANT_ADMIN":
        return "Search team, jobs, or candidates...";
      case "PLATFORM_ADMIN":
      case "PLATFORM_SUPER_ADMIN":
        return "Search tenants...";
      case "BILLING_MANAGER":
        return "Search subscriptions or invoices...";
      default:
        return "Search...";
    }
  }
  performGlobalSearch() {
    const searchTerm = this.globalSearchTerm.trim();
    if (!searchTerm)
      return;
    console.log("Performing global search:", searchTerm);
    if (this.currentUser?.role === "CANDIDATE") {
      this.router.navigate(["/candidate/jobs"], { queryParams: { search: searchTerm } });
    } else if (this.currentUser?.role === "RECRUITER") {
      this.router.navigate(["/recruiter/applications"], { queryParams: { search: searchTerm } });
    } else {
      console.log("Global search for:", searchTerm);
    }
  }
  onSearchInput() {
  }
  clearSearch() {
    this.globalSearchTerm = "";
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  closeNotifications() {
    this.showNotifications = false;
  }
  loadNotifications() {
    if (!this.currentUser?.id)
      return;
    fetch(`/api/notifications/in-app/${this.currentUser.id}`).then((response) => response.json()).then((data) => {
      this.notifications = data.notifications || [];
      this.notificationCount = data.unreadCount || 0;
      this.hasNotifications = this.notificationCount > 0;
    }).catch((error) => {
      console.error("Failed to load notifications:", error);
      this.notifications = [];
      this.notificationCount = 0;
      this.hasNotifications = false;
    });
  }
  navigateToProfile() {
    if (!this.currentUser)
      return;
    switch (this.currentUser.role) {
      case "CANDIDATE":
        this.router.navigate(["/candidate/profile"]);
        break;
      case "RECRUITER":
        this.router.navigate(["/recruiter/profile"]);
        break;
      case "TENANT_ADMIN":
        this.router.navigate(["/admin/profile"]);
        break;
      default:
        this.router.navigate(["/profile"]);
    }
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.\u0275fac = function MainLayoutComponent_Factory(t) {
      return new (t || _MainLayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NavigationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "layout", 4, "ngIf"], [1, "layout"], [1, "sidebar"], [1, "logo-section"], [1, "logo"], ["width", "32", "height", "32", "viewBox", "0 0 100 100", 2, "display", "inline-block", "vertical-align", "middle", "margin-right", "8px"], ["id", "logoGradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#0066ff", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "#00d4ff", "stop-opacity", "1"], ["x", "15", "y", "45", "font-family", "Arial, sans-serif", "font-size", "48", "font-weight", "bold", "fill", "url(#logoGradient)"], ["cx", "50", "cy", "50", "r", "12", "fill", "none", "stroke", "url(#logoGradient)", "stroke-width", "3"], ["cx", "47", "cy", "47", "r", "2", "fill", "#ff6b35"], ["cx", "53", "cy", "47", "r", "2", "fill", "#ff6b35"], ["cx", "50", "cy", "53", "r", "2", "fill", "#ff6b35"], ["x", "62", "y", "75", "font-family", "Arial, sans-serif", "font-size", "48", "font-weight", "bold", "fill", "url(#logoGradient)"], [2, "font-weight", "700", "font-size", "1.25rem"], ["class", "tenant-name", 4, "ngIf"], [1, "nav-menu"], ["class", "nav-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-item"], [1, "icon"], [1, "nav-item", 3, "click"], [1, "main-content"], [1, "top-bar"], [1, "search-bar"], [1, "icon", "search-icon", 3, "click"], ["type", "text", 3, "ngModelChange", "keyup.enter", "input", "ngModel", "placeholder"], ["class", "clear-search", 3, "click", 4, "ngIf"], [1, "top-actions"], [1, "icon-btn", "notification-bell", 3, "click"], ["class", "notification-badge", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "user-profile", 3, "click"], [1, "avatar"], [1, "content"], [1, "tenant-name"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "clear-search", 3, "click"], [1, "notification-badge"], [1, "notification-dropdown"], [1, "notification-header"], [1, "close-btn", 3, "click"], [1, "notification-list"], ["class", "notification-item", 4, "ngFor", "ngForOf"], ["class", "no-notifications", 4, "ngIf"], [1, "notification-item"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], [1, "no-notifications"]], template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MainLayoutComponent_div_0_Template, 54, 11, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.currentUser);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, SessionTimeoutComponent, ToastComponent], styles: ['\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family: "Inter", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #0f172a;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n}\n.logo-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 8px;\n}\n.tenant-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  color: #94a3b8;\n  text-decoration: none;\n  border-radius: 8px;\n  margin-bottom: 4px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 16px 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8fafc;\n  padding: 10px 16px;\n  border-radius: 8px;\n  width: 400px;\n  position: relative;\n}\n.search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  opacity: 0.7;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.875rem;\n}\n.search-bar[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-bar[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.25rem;\n  transition: all 0.3s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.top-actions[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notification-bell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  width: 300px;\n  z-index: 1001;\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.notification-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  color: #64748b;\n  cursor: pointer;\n}\n.notification-list[_ngcontent-%COMP%] {\n  max-height: 250px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n  font-size: 0.8rem;\n}\n.notification-message[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 6px 0;\n  font-size: 0.75rem;\n  line-height: 1.3;\n}\n.notification-time[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.7rem;\n}\n.no-notifications[_ngcontent-%COMP%] {\n  padding: 30px 16px;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent" });
})();

export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-5SCB54UF.js.map
