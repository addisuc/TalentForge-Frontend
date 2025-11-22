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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/auth/components/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h1");
    \u0275\u0275text(2, "Create New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Enter your new password below");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_form_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.passwordStrength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.passwordStrengthText);
  }
}
function ResetPasswordComponent_form_3_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ResetPasswordComponent_form_3_div_6_span_1_Template, 2, 0, "span", 16)(2, ResetPasswordComponent_form_3_div_6_span_2_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.password == null ? null : ctx_r1.password.errors == null ? null : ctx_r1.password.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.password == null ? null : ctx_r1.password.errors == null ? null : ctx_r1.password.errors["minlength"]);
  }
}
function ResetPasswordComponent_form_3_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ResetPasswordComponent_form_3_div_11_span_1_Template, 2, 0, "span", 16)(2, ResetPasswordComponent_form_3_div_11_span_2_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.errors == null ? null : ctx_r1.confirmPassword.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.errors == null ? null : ctx_r1.confirmPassword.errors["passwordMismatch"]);
  }
}
function ResetPasswordComponent_form_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ResetPasswordComponent_form_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Resetting...");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275template(5, ResetPasswordComponent_form_3_div_5_Template, 4, 3, "div", 11)(6, ResetPasswordComponent_form_3_div_6_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "label", 13);
    \u0275\u0275text(9, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 14);
    \u0275\u0275template(11, ResetPasswordComponent_form_3_div_11_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ResetPasswordComponent_form_3_div_12_Template, 2, 1, "div", 12);
    \u0275\u0275elementStart(13, "button", 15);
    \u0275\u0275template(14, ResetPasswordComponent_form_3_span_14_Template, 2, 0, "span", 16)(15, ResetPasswordComponent_form_3_span_15_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r1.password == null ? null : ctx_r1.password.invalid) && (ctx_r1.password == null ? null : ctx_r1.password.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.password == null ? null : ctx_r1.password.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.password == null ? null : ctx_r1.password.invalid) && (ctx_r1.password == null ? null : ctx_r1.password.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.invalid) && (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.invalid) && (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.resetPasswordForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Password Reset Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your password has been successfully reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function ResetPasswordComponent_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(8, "Go to Login");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Invalid or Expired Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This password reset link is invalid or has expired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 26);
    \u0275\u0275text(8, "Request New Link");
    \u0275\u0275elementEnd()();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(fb, route, router, authFacade) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.authFacade = authFacade;
    this.loading = false;
    this.errorMessage = "";
    this.resetSuccess = false;
    this.invalidToken = false;
    this.token = "";
    this.passwordStrength = "";
    this.passwordStrengthText = "";
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    if (!this.token || this.token === "invalid-token") {
      this.invalidToken = true;
      return;
    }
    this.password?.valueChanges.subscribe((value) => {
      this.updatePasswordStrength(value);
    });
  }
  get password() {
    return this.resetPasswordForm.get("password");
  }
  get confirmPassword() {
    return this.resetPasswordForm.get("confirmPassword");
  }
  passwordMatchValidator(group) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  updatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8)
      strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password))
      strength++;
    if (/\d/.test(password))
      strength++;
    if (/[^a-zA-Z0-9]/.test(password))
      strength++;
    if (strength <= 2) {
      this.passwordStrength = "weak";
      this.passwordStrengthText = "Weak password";
    } else if (strength === 3) {
      this.passwordStrength = "medium";
      this.passwordStrengthText = "Medium password";
    } else {
      this.passwordStrength = "strong";
      this.passwordStrengthText = "Strong password";
    }
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      setTimeout(() => {
        this.loading = false;
        this.resetSuccess = true;
      }, 1500);
    }
  }
  goToLogin() {
    this.router.navigate(["/client-login"]);
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(t) {
      return new (t || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthFacadeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "auth-container"], [1, "auth-card"], ["class", "auth-header", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "auth-header"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter new password", 1, "form-control"], ["class", "password-strength", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm new password", 1, "form-control"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "password-strength"], [1, "strength-bar"], [1, "strength-text"], [1, "error-message"], [1, "success-message"], [1, "success-icon"], [1, "btn-primary", 3, "click"], [1, "error-state"], [1, "error-icon"], ["routerLink", "/auth/forgot-password", 1, "btn-primary"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ResetPasswordComponent_div_2_Template, 5, 0, "div", 2)(3, ResetPasswordComponent_form_3_Template, 16, 12, "form", 3)(4, ResetPasswordComponent_div_4_Template, 9, 0, "div", 4)(5, ResetPasswordComponent_div_5_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.resetSuccess && !ctx.invalidToken);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.resetSuccess && !ctx.invalidToken);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resetSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.invalidToken);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 450px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.password-strength[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.strength-bar.weak[_ngcontent-%COMP%] {\n  width: 33%;\n  background: #ef4444;\n}\n.strength-bar.medium[_ngcontent-%COMP%] {\n  width: 66%;\n  background: #f59e0b;\n}\n.strength-bar.strong[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #10b981;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n  display: block;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #0066ff;\n  color: white;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.success-message[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #fee2e2;\n  color: #991b1b;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\n.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=reset-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent" });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-452PA24W.js.map
