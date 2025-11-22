import {
  AuthFacadeService
} from "./chunk-AHXFDQY2.js";
import "./chunk-7UAQBOGW.js";
import "./chunk-SAOA7EEN.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/auth/components/verify-email/verify-email.component.ts
function VerifyEmailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Verifying Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Please wait while we verify your email address...");
    \u0275\u0275elementEnd()();
  }
}
function VerifyEmailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Email Verified!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your email has been successfully verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function VerifyEmailComponent_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(8, "Continue to Login");
    \u0275\u0275elementEnd()();
  }
}
function VerifyEmailComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Resend Verification Email");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_div_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sending...");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_div_4_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Resend in ", ctx_r1.resendCooldown, "s");
  }
}
function VerifyEmailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Verification Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function VerifyEmailComponent_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendVerification());
    });
    \u0275\u0275template(8, VerifyEmailComponent_div_4_span_8_Template, 2, 0, "span", 13)(9, VerifyEmailComponent_div_4_span_9_Template, 2, 0, "span", 13)(10, VerifyEmailComponent_div_4_span_10_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 14);
    \u0275\u0275text(12, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.resending || ctx_r1.resendCooldown > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.resending && ctx_r1.resendCooldown === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendCooldown > 0);
  }
}
function VerifyEmailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Email Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We've sent a new verification email. Please check your inbox.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 14);
    \u0275\u0275text(8, "Back to Login");
    \u0275\u0275elementEnd()();
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  constructor(route, router, authFacade) {
    this.route = route;
    this.router = router;
    this.authFacade = authFacade;
    this.verifying = true;
    this.verificationSuccess = false;
    this.verificationFailed = false;
    this.resendSuccess = false;
    this.resending = false;
    this.errorMessage = "";
    this.token = "";
    this.resendCooldown = 0;
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    if (!this.token) {
      this.verifying = false;
      this.verificationFailed = true;
      this.errorMessage = "Invalid verification link";
      return;
    }
    this.verifyEmail();
  }
  verifyEmail() {
    this.authFacade.verifyEmail(this.token).subscribe({
      next: () => {
        this.verifying = false;
        this.verificationSuccess = true;
      },
      error: (error) => {
        this.verifying = false;
        this.verificationFailed = true;
        this.errorMessage = error.message || "The verification link is invalid or has expired";
      }
    });
  }
  resendVerification() {
    this.resending = true;
    this.authFacade.resendVerificationEmail(this.token).subscribe({
      next: () => {
        this.resending = false;
        this.verificationFailed = false;
        this.resendSuccess = true;
        this.startResendCooldown();
      },
      error: () => {
        this.resending = false;
        this.errorMessage = "Failed to resend verification email";
      }
    });
  }
  startResendCooldown() {
    this.resendCooldown = 60;
    const interval = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1e3);
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function VerifyEmailComponent_Factory(t) {
      return new (t || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthFacadeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "auth-container"], [1, "auth-card"], ["class", "verifying-state", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "verifying-state"], [1, "spinner"], [1, "success-message"], [1, "success-icon"], [1, "btn-primary", 3, "click"], [1, "error-state"], [1, "error-icon"], [1, "btn-secondary", 3, "click", "disabled"], [4, "ngIf"], ["routerLink", "/auth/login", 1, "link"]], template: function VerifyEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, VerifyEmailComponent_div_2_Template, 6, 0, "div", 2)(3, VerifyEmailComponent_div_3_Template, 9, 0, "div", 3)(4, VerifyEmailComponent_div_4_Template, 13, 5, "div", 4)(5, VerifyEmailComponent_div_5_Template, 9, 0, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.verifying);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.verificationSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.verificationFailed);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resendSuccess);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 450px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.verifying-state[_ngcontent-%COMP%], .success-message[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #0066ff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #fee2e2;\n  color: #991b1b;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\np[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f7ff;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  display: block;\n  margin-top: 1rem;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=verify-email.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent" });
})();
export {
  VerifyEmailComponent
};
//# sourceMappingURL=chunk-OPQIFFSE.js.map
