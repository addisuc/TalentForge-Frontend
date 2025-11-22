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

// src/app/features/auth/components/accept-invitation/accept-invitation.component.ts
function AcceptInvitationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Validating Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Please wait...");
    \u0275\u0275elementEnd()();
  }
}
function AcceptInvitationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Invalid Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This invitation link is invalid or has expired.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275text(8, "Go to Login");
    \u0275\u0275elementEnd()();
  }
}
function AcceptInvitationComponent_div_4_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "First name is required");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AcceptInvitationComponent_div_4_div_17_span_1_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstName == null ? null : ctx_r1.firstName.errors == null ? null : ctx_r1.firstName.errors["required"]);
  }
}
function AcceptInvitationComponent_div_4_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Last name is required");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AcceptInvitationComponent_div_4_div_22_span_1_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastName == null ? null : ctx_r1.lastName.errors == null ? null : ctx_r1.lastName.errors["required"]);
  }
}
function AcceptInvitationComponent_div_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "span");
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
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.passwordStrength);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.passwordStrengthText);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasMinLength);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasUpperLower);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasSpecial);
  }
}
function AcceptInvitationComponent_div_4_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AcceptInvitationComponent_div_4_div_28_span_1_Template, 2, 0, "span", 4)(2, AcceptInvitationComponent_div_4_div_28_span_2_Template, 2, 0, "span", 4);
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
function AcceptInvitationComponent_div_4_div_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_33_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AcceptInvitationComponent_div_4_div_33_span_1_Template, 2, 0, "span", 4)(2, AcceptInvitationComponent_div_4_div_33_span_2_Template, 2, 0, "span", 4);
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
function AcceptInvitationComponent_div_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function AcceptInvitationComponent_div_4_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Accept Invitation");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Setting up account...");
    \u0275\u0275elementEnd();
  }
}
function AcceptInvitationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "h1");
    \u0275\u0275text(3, "Accept Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Complete your account setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "form", 15);
    \u0275\u0275listener("ngSubmit", function AcceptInvitationComponent_div_4_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(12, "div", 16)(13, "div", 17)(14, "label", 18);
    \u0275\u0275text(15, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 19);
    \u0275\u0275template(17, AcceptInvitationComponent_div_4_div_17_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "label", 21);
    \u0275\u0275text(20, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 22);
    \u0275\u0275template(22, AcceptInvitationComponent_div_4_div_22_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 17)(24, "label", 23);
    \u0275\u0275text(25, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 24);
    \u0275\u0275template(27, AcceptInvitationComponent_div_4_div_27_Template, 14, 11, "div", 25)(28, AcceptInvitationComponent_div_4_div_28_Template, 3, 2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "label", 26);
    \u0275\u0275text(31, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 27);
    \u0275\u0275template(33, AcceptInvitationComponent_div_4_div_33_Template, 3, 2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, AcceptInvitationComponent_div_4_div_34_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(35, "button", 28);
    \u0275\u0275template(36, AcceptInvitationComponent_div_4_span_36_Template, 2, 0, "span", 4)(37, AcceptInvitationComponent_div_4_span_37_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.invitationRole);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invitationEmail);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.acceptForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", (ctx_r1.firstName == null ? null : ctx_r1.firstName.invalid) && (ctx_r1.firstName == null ? null : ctx_r1.firstName.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.firstName == null ? null : ctx_r1.firstName.invalid) && (ctx_r1.firstName == null ? null : ctx_r1.firstName.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r1.lastName == null ? null : ctx_r1.lastName.invalid) && (ctx_r1.lastName == null ? null : ctx_r1.lastName.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.lastName == null ? null : ctx_r1.lastName.invalid) && (ctx_r1.lastName == null ? null : ctx_r1.lastName.touched));
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
    \u0275\u0275property("disabled", ctx_r1.acceptForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function AcceptInvitationComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Account Created!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your account has been successfully created.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function AcceptInvitationComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(8, "Continue to Login");
    \u0275\u0275elementEnd()();
  }
}
var AcceptInvitationComponent = class _AcceptInvitationComponent {
  constructor(fb, route, router, authFacade) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.authFacade = authFacade;
    this.validating = true;
    this.validToken = false;
    this.invalidToken = false;
    this.submitted = false;
    this.loading = false;
    this.errorMessage = "";
    this.token = "";
    this.invitationEmail = "";
    this.invitationRole = "";
    this.passwordStrength = "";
    this.passwordStrengthText = "";
    this.hasMinLength = false;
    this.hasUpperLower = false;
    this.hasNumber = false;
    this.hasSpecial = false;
    this.acceptForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: this.passwordMatchValidator });
    this.password?.valueChanges.subscribe((value) => {
      this.updatePasswordStrength(value);
    });
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    if (!this.token) {
      this.validating = false;
      this.invalidToken = true;
      return;
    }
    this.validateInvitation();
  }
  validateInvitation() {
    this.authFacade.validateInvitation(this.token).subscribe({
      next: (data) => {
        this.validating = false;
        this.validToken = true;
        this.invitationEmail = data.email;
        this.invitationRole = this.formatRole(data.role);
      },
      error: () => {
        this.validating = false;
        this.invalidToken = true;
      }
    });
  }
  formatRole(role) {
    const roleMap = {
      "TENANT_ADMIN": "Tenant Admin",
      "BILLING_MANAGER": "Billing Manager",
      "PLATFORM_ADMIN": "Platform Admin",
      "RECRUITER": "Recruiter"
    };
    return roleMap[role] || role;
  }
  get firstName() {
    return this.acceptForm.get("firstName");
  }
  get lastName() {
    return this.acceptForm.get("lastName");
  }
  get password() {
    return this.acceptForm.get("password");
  }
  get confirmPassword() {
    return this.acceptForm.get("confirmPassword");
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
    if (this.acceptForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      const acceptData = {
        token: this.token,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        password: this.password?.value
      };
      this.authFacade.acceptInvitation(acceptData).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || "Failed to accept invitation";
        }
      });
    }
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function AcceptInvitationComponent_Factory(t) {
      return new (t || _AcceptInvitationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthFacadeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcceptInvitationComponent, selectors: [["app-accept-invitation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "auth-container"], [1, "auth-card"], ["class", "validating-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["class", "success-state", 4, "ngIf"], [1, "validating-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"], ["routerLink", "/auth/login", 1, "btn-secondary"], [1, "auth-header"], [1, "invitation-info"], [1, "role-badge"], [1, "email"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "placeholder", "John", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Doe", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Create a strong password", 1, "form-control"], ["class", "password-strength", 4, "ngIf"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Re-enter your password", 1, "form-control"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "error-message"], [1, "password-strength"], [1, "strength-bar"], [1, "strength-details"], [1, "strength-text"], [1, "requirements"], [1, "success-state"], [1, "success-icon"], [1, "btn-primary", 3, "click"]], template: function AcceptInvitationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, AcceptInvitationComponent_div_2_Template, 6, 0, "div", 2)(3, AcceptInvitationComponent_div_3_Template, 9, 0, "div", 3)(4, AcceptInvitationComponent_div_4_Template, 38, 20, "div", 4)(5, AcceptInvitationComponent_div_5_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.validating);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.invalidToken);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.validToken && !ctx.submitted);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 500px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.invitation-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.email[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.validating-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%], .success-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #0066ff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #fee2e2;\n  color: #991b1b;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 1rem;\n}\np[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.password-strength[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 2px;\n  transition: all 0.3s;\n  margin-bottom: 0.5rem;\n}\n.strength-bar.weak[_ngcontent-%COMP%] {\n  width: 25%;\n  background: #ef4444;\n}\n.strength-bar.fair[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #f59e0b;\n}\n.strength-bar.good[_ngcontent-%COMP%] {\n  width: 75%;\n  background: #3b82f6;\n}\n.strength-bar.strong[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #10b981;\n}\n.strength-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.requirements[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.65rem;\n  color: #94a3b8;\n}\n.requirements[_ngcontent-%COMP%]   span.met[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n/*# sourceMappingURL=accept-invitation.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcceptInvitationComponent, { className: "AcceptInvitationComponent" });
})();
export {
  AcceptInvitationComponent
};
//# sourceMappingURL=chunk-OE7VOBNJ.js.map
