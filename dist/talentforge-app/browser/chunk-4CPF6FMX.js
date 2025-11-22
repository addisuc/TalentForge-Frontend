import {
  AuthFacadeService
} from "./chunk-AHXFDQY2.js";
import "./chunk-7UAQBOGW.js";
import "./chunk-SAOA7EEN.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/auth/components/register/register.component.ts
var _c0 = () => ["/legal/terms"];
var _c1 = () => ["/legal/privacy"];
function RegisterComponent_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "First name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_13_span_1_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.firstName == null ? null : ctx_r0.firstName.errors == null ? null : ctx_r0.firstName.errors["required"]);
  }
}
function RegisterComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Last name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_18_span_1_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.lastName == null ? null : ctx_r0.lastName.errors == null ? null : ctx_r0.lastName.errors["required"]);
  }
}
function RegisterComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_23_span_1_Template, 2, 0, "span", 31)(2, RegisterComponent_div_23_span_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37)(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "span");
    \u0275\u0275text(7, "\u2713 8+ characters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\u2713 Upper & lowercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u2713 Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "\u2713 Special character");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.passwordStrength);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.passwordStrengthText);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r0.hasMinLength);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r0.hasUpperLower);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r0.hasNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r0.hasSpecial);
  }
}
function RegisterComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_29_span_1_Template, 2, 0, "span", 31)(2, RegisterComponent_div_29_span_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function RegisterComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_34_span_1_Template, 2, 0, "span", 31)(2, RegisterComponent_div_34_span_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.errors == null ? null : ctx_r0.confirmPassword.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.errors == null ? null : ctx_r0.confirmPassword.errors["passwordMismatch"]);
  }
}
function RegisterComponent_div_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a role");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_45_span_1_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role == null ? null : ctx_r0.role.errors == null ? null : ctx_r0.role.errors["required"]);
  }
}
function RegisterComponent_div_46_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Company name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, RegisterComponent_div_46_div_4_span_1_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.companyName == null ? null : ctx_r0.companyName.errors == null ? null : ctx_r0.companyName.errors["required"]);
  }
}
function RegisterComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 40);
    \u0275\u0275text(2, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 41);
    \u0275\u0275template(4, RegisterComponent_div_46_div_4_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", (ctx_r0.companyName == null ? null : ctx_r0.companyName.invalid) && (ctx_r0.companyName == null ? null : ctx_r0.companyName.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.companyName == null ? null : ctx_r0.companyName.invalid) && (ctx_r0.companyName == null ? null : ctx_r0.companyName.touched));
  }
}
function RegisterComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span");
    \u0275\u0275text(2, "You must accept the terms and conditions");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Creating Account...");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, authFacade, router) {
    this.fb = fb;
    this.authFacade = authFacade;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.passwordStrength = "";
    this.passwordStrengthText = "";
    this.hasMinLength = false;
    this.hasUpperLower = false;
    this.hasNumber = false;
    this.hasSpecial = false;
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      role: ["", Validators.required],
      companyName: [""],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
    this.role?.valueChanges.subscribe((role) => {
      if (role === "TENANT_ADMIN") {
        this.companyName?.setValidators([Validators.required]);
      } else {
        this.companyName?.clearValidators();
      }
      this.companyName?.updateValueAndValidity();
    });
    this.password?.valueChanges.subscribe((value) => {
      this.updatePasswordStrength(value);
    });
  }
  get firstName() {
    return this.registerForm.get("firstName");
  }
  get lastName() {
    return this.registerForm.get("lastName");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }
  get role() {
    return this.registerForm.get("role");
  }
  get companyName() {
    return this.registerForm.get("companyName");
  }
  get acceptTerms() {
    return this.registerForm.get("acceptTerms");
  }
  passwordMatchValidator(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (!password || !confirmPassword)
      return null;
    if (confirmPassword.value && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    if (confirmPassword.hasError("passwordMismatch")) {
      confirmPassword.setErrors(null);
    }
    return null;
  }
  updatePasswordStrength(password) {
    this.hasMinLength = password.length >= 8;
    this.hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecial = /[^a-zA-Z0-9]/.test(password);
    const score = [this.hasMinLength, this.hasUpperLower, this.hasNumber, this.hasSpecial].filter(Boolean).length;
    if (score <= 1) {
      this.passwordStrength = "weak";
      this.passwordStrengthText = "Weak";
    } else if (score === 2) {
      this.passwordStrength = "fair";
      this.passwordStrengthText = "Fair";
    } else if (score === 3) {
      this.passwordStrength = "good";
      this.passwordStrengthText = "Good";
    } else {
      this.passwordStrength = "strong";
      this.passwordStrengthText = "Strong";
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      const userData = {
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        email: this.email?.value,
        password: this.password?.value,
        role: this.role?.value
      };
      if (this.role?.value === "TENANT_ADMIN") {
        userData.companyName = this.companyName?.value;
      }
      this.authFacade.register(userData);
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(["/auth/login"]);
      }, 1500);
    }
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthFacadeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 30, consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "placeholder", "John", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Doe", 1, "form-control"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "john@example.com", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Create a strong password", 1, "form-control"], ["class", "password-strength", 4, "ngIf"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Re-enter your password", 1, "form-control"], ["for", "role"], ["id", "role", "formControlName", "role", 1, "form-control"], ["value", ""], ["value", "CANDIDATE"], ["value", "TENANT_ADMIN"], ["class", "form-group", 4, "ngIf"], [1, "form-group", "checkbox-group"], ["for", "terms", 2, "font-size", "0.875rem", "color", "#475569", "display", "block", "margin-bottom", "0.5rem"], [2, "display", "flex", "align-items", "center", "gap", "0.5rem"], ["type", "checkbox", "formControlName", "acceptTerms", "id", "terms"], [2, "font-size", "0.75rem"], ["target", "_blank", 2, "color", "#0066ff", "cursor", "pointer", "text-decoration", "underline", 3, "routerLink"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login", 1, "link"], [1, "error-message"], [1, "password-strength"], [1, "strength-bar"], [1, "strength-details"], [1, "strength-text"], [1, "requirements"], ["for", "companyName"], ["id", "companyName", "type", "text", "formControlName", "companyName", "placeholder", "Acme Corporation", 1, "form-control"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Join TalentForge today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 7);
        \u0275\u0275template(13, RegisterComponent_div_13_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5)(15, "label", 9);
        \u0275\u0275text(16, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 10);
        \u0275\u0275template(18, RegisterComponent_div_18_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "label", 11);
        \u0275\u0275text(21, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 12);
        \u0275\u0275template(23, RegisterComponent_div_23_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 5)(25, "label", 13);
        \u0275\u0275text(26, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 14);
        \u0275\u0275template(28, RegisterComponent_div_28_Template, 14, 11, "div", 15)(29, RegisterComponent_div_29_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 5)(31, "label", 16);
        \u0275\u0275text(32, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 17);
        \u0275\u0275template(34, RegisterComponent_div_34_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 5)(36, "label", 18);
        \u0275\u0275text(37, "I am a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 19)(39, "option", 20);
        \u0275\u0275text(40, "Select your role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 21);
        \u0275\u0275text(42, "Job Seeker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "option", 22);
        \u0275\u0275text(44, "Employer");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, RegisterComponent_div_45_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, RegisterComponent_div_46_Template, 5, 3, "div", 23);
        \u0275\u0275elementStart(47, "div", 24)(48, "label", 25);
        \u0275\u0275text(49, "I agree to the Terms of Service and Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 26);
        \u0275\u0275element(51, "input", 27);
        \u0275\u0275elementStart(52, "div", 28)(53, "a", 29);
        \u0275\u0275text(54, "Terms of Service");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " \u2022 ");
        \u0275\u0275elementStart(56, "a", 29);
        \u0275\u0275text(57, "Privacy Policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(58, RegisterComponent_div_58_Template, 3, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(59, RegisterComponent_div_59_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(60, "button", 30);
        \u0275\u0275template(61, RegisterComponent_span_61_Template, 2, 0, "span", 31)(62, RegisterComponent_span_62_Template, 2, 0, "span", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 32)(64, "span");
        \u0275\u0275text(65, "Already have an account? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 33);
        \u0275\u0275text(67, "Sign in");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", (ctx.firstName == null ? null : ctx.firstName.invalid) && (ctx.firstName == null ? null : ctx.firstName.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.firstName == null ? null : ctx.firstName.invalid) && (ctx.firstName == null ? null : ctx.firstName.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.lastName == null ? null : ctx.lastName.invalid) && (ctx.lastName == null ? null : ctx.lastName.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.lastName == null ? null : ctx.lastName.invalid) && (ctx.lastName == null ? null : ctx.lastName.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.password == null ? null : ctx.password.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.role == null ? null : ctx.role.invalid) && (ctx.role == null ? null : ctx.role.touched));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (ctx.role == null ? null : ctx.role.invalid) && (ctx.role == null ? null : ctx.role.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.role == null ? null : ctx.role.value) === "TENANT_ADMIN");
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.acceptTerms == null ? null : ctx.acceptTerms.invalid) && (ctx.acceptTerms == null ? null : ctx.acceptTerms.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 500px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.password-strength[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 2px;\n  transition: all 0.3s;\n  margin-bottom: 0.5rem;\n}\n.strength-bar.weak[_ngcontent-%COMP%] {\n  width: 25%;\n  background: #ef4444;\n}\n.strength-bar.fair[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #f59e0b;\n}\n.strength-bar.good[_ngcontent-%COMP%] {\n  width: 75%;\n  background: #3b82f6;\n}\n.strength-bar.strong[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #10b981;\n}\n.strength-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.requirements[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.65rem;\n  color: #94a3b8;\n}\n.requirements[_ngcontent-%COMP%]   span.met[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #475569;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #0066ff;\n  color: white;\n  margin-bottom: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent" });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-4CPF6FMX.js.map
