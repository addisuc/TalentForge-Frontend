import {
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/client-portal/client-login/client-login.component.ts
function ClientLoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ClientLoginComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ClientLoginComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ClientLoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ClientLoginComponent_div_23_span_1_Template, 2, 0, "span", 41)(2, ClientLoginComponent_div_23_span_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function ClientLoginComponent_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ClientLoginComponent_div_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ClientLoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ClientLoginComponent_div_32_span_1_Template, 2, 0, "span", 43)(2, ClientLoginComponent_div_32_span_2_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function ClientLoginComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In to Portal");
    \u0275\u0275elementEnd();
  }
}
function ClientLoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
var ClientLoginComponent = class _ClientLoginComponent {
  constructor(fb, clientService, router, snackBar) {
    this.fb = fb;
    this.clientService = clientService;
    this.router = router;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.hidePassword = true;
    this.showHelp = false;
    this.errorMessage = "";
    this.tenantId = "12d9dfe7-978a-40e5-b191-082e458c1860";
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      const loginRequest = this.loginForm.value;
      console.log("Attempting login with:", loginRequest, "tenantId:", this.tenantId);
      this.clientService.login(loginRequest, this.tenantId).subscribe({
        next: (response) => {
          console.log("Login response:", response);
          const tokenPayload = JSON.parse(atob(response.accessToken.split(".")[1]));
          const clientUserId = tokenPayload.sub;
          const email = tokenPayload.email;
          localStorage.setItem("clientToken", response.accessToken);
          localStorage.setItem("tenantId", this.tenantId);
          localStorage.setItem("clientUserId", clientUserId);
          localStorage.setItem("clientUser", JSON.stringify({
            id: clientUserId,
            email,
            companyName: response.clientCompanyName || "Client Company",
            contactPerson: response.firstName + " " + response.lastName || email
          }));
          localStorage.setItem("clientCompanyName", response.clientCompanyName || "Client Company");
          localStorage.setItem("tenantName", response.tenantName || "Client Portal");
          this.isLoading = false;
          this.snackBar.open("Login successful!", "Close", {
            duration: 3e3,
            panelClass: ["success-snackbar"]
          });
          this.router.navigate(["/client-dashboard"]);
        },
        error: (error) => {
          console.error("Login failed:", error);
          this.errorMessage = "Login failed. Please check your credentials and try again.";
          this.isLoading = false;
        }
      });
    }
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open("Copied to clipboard!", "Close", {
        duration: 2e3,
        panelClass: ["success-snackbar"]
      });
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      this.snackBar.open("Copied to clipboard!", "Close", {
        duration: 2e3,
        panelClass: ["success-snackbar"]
      });
    });
  }
  getErrorMessage(field) {
    const control = this.loginForm.get(field);
    if (control?.hasError("required")) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control?.hasError("email")) {
      return "Please enter a valid email address";
    }
    if (control?.hasError("minlength")) {
      return "Password must be at least 8 characters long";
    }
    return "";
  }
  getClientName() {
    const tenantName = localStorage.getItem("tenantName");
    return tenantName || "Client Portal";
  }
  static {
    this.\u0275fac = function ClientLoginComponent_Factory(t) {
      return new (t || _ClientLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientLoginComponent, selectors: [["app-client-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 69, vars: 20, consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [1, "brand-logo"], [1, "logo-icon"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "40", "height", "40", "rx", "8", "fill", "url(#gradient)"], ["d", "M12 14h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z", "fill", "white"], ["id", "gradient", "x1", "0", "y1", "0", "x2", "40", "y2", "40", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#0066ff"], ["offset", "1", "stop-color", "#00d4ff"], [1, "brand-text"], ["class", "error-message", "role", "alert", "aria-live", "assertive", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", "autocomplete", "email", "aria-required", "true", 1, "form-control"], ["class", "error-text", "role", "alert", 4, "ngIf"], ["for", "password"], [1, "password-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", "aria-required", "true", 1, "form-control", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["aria-hidden", "true"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "forgot-password"], ["routerLink", "/auth/forgot-password", 1, "forgot-link"], [1, "help-section"], ["type", "button", 1, "help-link", 3, "click"], [1, "help-icon"], [1, "demo-section"], [1, "demo-header"], [1, "demo-icon"], [1, "demo-content"], [1, "credential-item"], ["type", "button", "title", "Copy email", 1, "copy-btn", 3, "click"], ["type", "button", "title", "Copy password", 1, "copy-btn", 3, "click"], [1, "demo-note"], [1, "note-icon"], ["role", "alert", "aria-live", "assertive", 1, "error-message"], ["role", "alert", 1, "error-text"], ["id", "email-error", 4, "ngIf"], ["id", "email-error"], ["id", "password-error", 4, "ngIf"], ["id", "password-error"]], template: function ClientLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "rect", 6)(7, "path", 7);
        \u0275\u0275elementStart(8, "defs")(9, "linearGradient", 8);
        \u0275\u0275element(10, "stop", 9)(11, "stop", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 11)(13, "h1");
        \u0275\u0275text(14, "Client Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Sign in to review and manage candidates");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(17, ClientLoginComponent_div_17_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(18, "form", 13);
        \u0275\u0275listener("ngSubmit", function ClientLoginComponent_Template_form_ngSubmit_18_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(19, "div", 14)(20, "label", 15);
        \u0275\u0275text(21, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 16);
        \u0275\u0275template(23, ClientLoginComponent_div_23_Template, 3, 2, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14)(25, "label", 18);
        \u0275\u0275text(26, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 19);
        \u0275\u0275element(28, "input", 20);
        \u0275\u0275elementStart(29, "button", 21);
        \u0275\u0275listener("click", function ClientLoginComponent_Template_button_click_29_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(30, "span", 22);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(32, ClientLoginComponent_div_32_Template, 3, 2, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 23);
        \u0275\u0275template(34, ClientLoginComponent_span_34_Template, 2, 0, "span", 24)(35, ClientLoginComponent_span_35_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 25)(37, "a", 26);
        \u0275\u0275text(38, "Forgot your password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 27)(40, "button", 28);
        \u0275\u0275listener("click", function ClientLoginComponent_Template_button_click_40_listener() {
          return ctx.showHelp = !ctx.showHelp;
        });
        \u0275\u0275elementStart(41, "span", 29);
        \u0275\u0275text(42, "\u2753");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " Need Help? ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 30)(45, "div", 31)(46, "span", 32);
        \u0275\u0275text(47, "\u{1F511}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "h3");
        \u0275\u0275text(49, "Demo Credentials");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 33)(51, "div", 34)(52, "label");
        \u0275\u0275text(53, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "code");
        \u0275\u0275text(55, "client@test.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 35);
        \u0275\u0275listener("click", function ClientLoginComponent_Template_button_click_56_listener() {
          return ctx.copyToClipboard("client@test.com");
        });
        \u0275\u0275text(57, " \u{1F4CB} ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 34)(59, "label");
        \u0275\u0275text(60, "Password:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "code");
        \u0275\u0275text(62, "password123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 36);
        \u0275\u0275listener("click", function ClientLoginComponent_Template_button_click_63_listener() {
          return ctx.copyToClipboard("password123");
        });
        \u0275\u0275text(64, " \u{1F4CB} ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "p", 37)(66, "span", 38);
        \u0275\u0275text(67, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " Use these credentials to explore the client portal features ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_12_0;
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
        \u0275\u0275attribute("aria-invalid", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched))("aria-describedby", ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched) ? "email-error" : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.loginForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("email")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched));
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275attribute("aria-invalid", ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.touched))("aria-describedby", ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.touched) ? "password-error" : null);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.hidePassword ? "Show password" : "Hide password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "\u{1F441}\uFE0F" : "\u{1F648}");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.loginForm.get("password")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.loginForm.get("password")) == null ? null : tmp_12_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("expanded", ctx.showHelp);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MaterialModule], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 450px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.75rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.brand-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9375rem;\n  margin: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 45px;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  padding: 0;\n  line-height: 1;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  margin-bottom: 1.5rem;\n  font-size: 0.9375rem;\n  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.6);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.help-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.help-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 auto;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.help-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 102, 255, 0.1);\n  color: #0052cc;\n}\n.help-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.demo-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem;\n  margin-top: 1rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  opacity: 0;\n}\n.demo-section.expanded[_ngcontent-%COMP%] {\n  max-height: 300px;\n  opacity: 1;\n}\n.demo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.demo-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.demo-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.demo-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.credential-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.credential-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n  min-width: 70px;\n  margin: 0;\n}\n.credential-item[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Inconsolata",\n    "Roboto Mono",\n    monospace;\n  font-size: 0.8125rem;\n  color: #0066ff;\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  border: 1px solid #cbd5e1;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.demo-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  color: #64748b;\n  line-height: 1.4;\n  margin: 0.5rem 0 0 0;\n  padding: 0.75rem;\n  background: rgba(0, 102, 255, 0.05);\n  border-radius: 6px;\n  border-left: 3px solid #0066ff;\n}\n.note-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #0052cc;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .credential-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .credential-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .credential-item[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]     .success-snackbar {\n  background: #10b981;\n  color: white;\n}\n[_nghost-%COMP%]     .error-snackbar {\n  background: #ef4444;\n  color: white;\n}\n/*# sourceMappingURL=client-login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientLoginComponent, { className: "ClientLoginComponent" });
})();
export {
  ClientLoginComponent
};
//# sourceMappingURL=chunk-MLI3JEXG.js.map
