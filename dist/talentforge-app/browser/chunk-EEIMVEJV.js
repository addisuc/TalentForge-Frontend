import {
  AuthFacadeService
} from "./chunk-AHXFDQY2.js";
import "./chunk-7UAQBOGW.js";
import "./chunk-SAOA7EEN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-Z6TDORLQ.js";
import {
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
  ɵɵclassProp,
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

// src/app/features/auth/components/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_form_7_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_7_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ForgotPasswordComponent_form_7_div_5_span_1_Template, 2, 0, "span", 11)(2, ForgotPasswordComponent_form_7_div_5_span_2_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["email"]);
  }
}
function ForgotPasswordComponent_form_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ForgotPasswordComponent_form_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sending...");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 8);
    \u0275\u0275template(5, ForgotPasswordComponent_form_7_div_5_Template, 3, 2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ForgotPasswordComponent_form_7_div_6_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275template(8, ForgotPasswordComponent_form_7_span_8_Template, 2, 0, "span", 11)(9, ForgotPasswordComponent_form_7_span_9_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12)(11, "a", 13);
    \u0275\u0275text(12, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.forgotPasswordForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r1.email == null ? null : ctx_r1.email.invalid) && (ctx_r1.email == null ? null : ctx_r1.email.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.email == null ? null : ctx_r1.email.invalid) && (ctx_r1.email == null ? null : ctx_r1.email.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.forgotPasswordForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function ForgotPasswordComponent_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Resend Email");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_8_span_13_Template(rf, ctx) {
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
function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Check Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We've sent a password reset link to ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 17);
    \u0275\u0275text(10, "If you don't see the email, check your spam folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275listener("click", function ForgotPasswordComponent_div_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendEmail());
    });
    \u0275\u0275template(12, ForgotPasswordComponent_div_8_span_12_Template, 2, 0, "span", 11)(13, ForgotPasswordComponent_div_8_span_13_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 13);
    \u0275\u0275text(15, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.submittedEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.resendCooldown > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendCooldown === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendCooldown > 0);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(fb, authFacade, router) {
    this.fb = fb;
    this.authFacade = authFacade;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.emailSent = false;
    this.submittedEmail = "";
    this.resendCooldown = 0;
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  get email() {
    return this.forgotPasswordForm.get("email");
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      this.submittedEmail = this.email?.value;
      this.authFacade.forgotPassword(this.email?.value).subscribe({
        next: () => {
          this.loading = false;
          this.emailSent = true;
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 404 || error.error?.errorCode === "USER_NOT_FOUND") {
            this.errorMessage = "No account found with this email address.";
          } else if (error.status === 401) {
            this.errorMessage = "Unable to process request. Please try again.";
          } else {
            this.errorMessage = "Failed to send reset email. Please try again later.";
          }
        }
      });
    }
  }
  resendEmail() {
    this.resendCooldown = 60;
    const interval = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1e3);
    this.authFacade.forgotPassword(this.submittedEmail).subscribe();
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthFacadeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login", 1, "link"], [1, "error-message"], [1, "success-message"], [1, "success-icon"], [1, "hint"], [1, "btn-secondary", 3, "click", "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Enter your email address and we'll send you a link to reset your password");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ForgotPasswordComponent_form_7_Template, 13, 8, "form", 3)(8, ForgotPasswordComponent_div_8_Template, 16, 4, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.emailSent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.emailSent);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 450px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  margin-bottom: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  margin-bottom: 1rem;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f7ff;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  display: block;\n  margin-top: 1rem;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\n.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.success-message[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent" });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-EEIMVEJV.js.map
