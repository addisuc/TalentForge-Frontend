import {
  MaterialModule
} from "./chunk-WM4JIUPE.js";
import "./chunk-NY622NM3.js";
import "./chunk-AK7Q3UBH.js";
import {
  ClientService
} from "./chunk-HDDOCNXX.js";
import "./chunk-3CPV5NE5.js";
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
  Router
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

// src/app/features/client-portal/client-register/client-register.component.ts
function ClientRegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ClientRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Verifying invitation...");
    \u0275\u0275elementEnd()();
  }
}
function ClientRegisterComponent_div_12_div_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ClientRegisterComponent_div_12_div_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ClientRegisterComponent_div_12_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ClientRegisterComponent_div_12_div_25_span_1_Template, 2, 0, "span", 8)(2, ClientRegisterComponent_div_12_div_25_span_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function ClientRegisterComponent_div_12_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function ClientRegisterComponent_div_12_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function ClientRegisterComponent_div_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ClientRegisterComponent_div_12_div_30_span_1_Template, 2, 0, "span", 8)(2, ClientRegisterComponent_div_12_div_30_span_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["mismatch"]);
  }
}
function ClientRegisterComponent_div_12_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 29);
  }
}
function ClientRegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "Complete Your Registration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "Company:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "form", 19);
    \u0275\u0275listener("ngSubmit", function ClientRegisterComponent_div_12_Template_form_ngSubmit_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(18, "div", 20)(19, "label");
    \u0275\u0275text(20, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 21);
    \u0275\u0275element(22, "input", 22);
    \u0275\u0275elementStart(23, "button", 23);
    \u0275\u0275listener("click", function ClientRegisterComponent_div_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ClientRegisterComponent_div_12_div_25_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 20)(27, "label");
    \u0275\u0275text(28, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 25);
    \u0275\u0275template(30, ClientRegisterComponent_div_12_div_30_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 26);
    \u0275\u0275template(32, ClientRegisterComponent_div_12_span_32_Template, 1, 0, "span", 27);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Welcome to ", ctx_r0.invitationData.companyName, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invitationData.companyName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invitationData.email);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.registerForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hidePassword ? "\u{1F441}\uFE0F" : "\u{1F648}", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.registerForm.invalid || ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting ? "Creating Account..." : "Complete Registration", " ");
  }
}
function ClientRegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Registration Complete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your account has been created successfully.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function ClientRegisterComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToLogin());
    });
    \u0275\u0275text(8, "Sign In Now");
    \u0275\u0275elementEnd()();
  }
}
var ClientRegisterComponent = class _ClientRegisterComponent {
  constructor(fb, route, router, clientService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.clientService = clientService;
    this.invitationData = null;
    this.isLoading = true;
    this.isSubmitting = false;
    this.isRegistered = false;
    this.errorMessage = "";
    this.hidePassword = true;
    this.token = "";
    this.registerForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"];
    if (!this.token) {
      this.errorMessage = "Invalid invitation link";
      this.isLoading = false;
      return;
    }
    this.verifyInvitation();
  }
  verifyInvitation() {
    this.clientService.verifyInvitation(this.token).subscribe({
      next: (data) => {
        this.invitationData = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.error || "Invalid or expired invitation";
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.registerForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const password = this.registerForm.get("password")?.value;
      this.clientService.registerInvitedClient(this.token, password).subscribe({
        next: () => {
          this.isRegistered = true;
          this.isSubmitting = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.error || "Registration failed";
          this.isSubmitting = false;
        }
      });
    }
  }
  goToLogin() {
    this.router.navigate(["/client-login"]);
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    }
    return null;
  }
  static {
    this.\u0275fac = function ClientRegisterComponent_Factory(t) {
      return new (t || _ClientRegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientRegisterComponent, selectors: [["app-client-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 4, consts: [[1, "register-page"], [1, "register-container"], [1, "register-card"], [1, "header"], [1, "logo"], [1, "content"], ["class", "alert error", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "alert", "error"], [1, "icon"], [1, "loading"], [1, "spinner"], [1, "welcome"], [1, "invitation-info"], [1, "info-item"], [1, "label"], [1, "value"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "input-group"], ["formControlName", "password", "placeholder", "Enter your password", 1, "form-control", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["class", "error-text", 4, "ngIf"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm your password", 1, "form-control"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "spinner-small", 4, "ngIf"], [1, "error-text"], [1, "spinner-small"], [1, "success"], [1, "success-icon"], [1, "btn-primary", 3, "click"]], template: function ClientRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
        \u0275\u0275text(6, "TalentForge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Client Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, ClientRegisterComponent_div_10_Template, 4, 1, "div", 6)(11, ClientRegisterComponent_div_11_Template, 4, 0, "div", 7)(12, ClientRegisterComponent_div_12_Template, 34, 11, "div", 8)(13, ClientRegisterComponent_div_13_Template, 9, 0, "div", 9);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading && !ctx.invitationData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.invitationData && !ctx.isRegistered);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isRegistered);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MaterialModule], styles: ['\n\n.register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  font-family: "Inter", sans-serif;\n}\n.register-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n  padding: 2rem;\n  text-align: center;\n}\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n}\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 0.875rem;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.welcome[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.invitation-info[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.25rem;\n  margin-bottom: 2rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.75rem;\n}\n.info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  min-width: 80px;\n  margin-right: 1rem;\n}\n.value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  flex: 1;\n}\n.register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n  border: none;\n  padding: 0.875rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #0066ff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 0;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 2rem 0;\n}\n@media (max-width: 640px) {\n  .register-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=client-register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientRegisterComponent, { className: "ClientRegisterComponent" });
})();
export {
  ClientRegisterComponent
};
//# sourceMappingURL=chunk-HMPVGRDJ.js.map
