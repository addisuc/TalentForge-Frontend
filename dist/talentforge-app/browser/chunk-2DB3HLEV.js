import {
  AuthFacadeService
} from "./chunk-AHXFDQY2.js";
import "./chunk-7UAQBOGW.js";
import "./chunk-SAOA7EEN.js";
import {
  NavigationService
} from "./chunk-4MPRBMJL.js";
import "./chunk-BAFRGCFI.js";
import {
  CheckboxControlValueAccessor,
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
  interval,
  take,
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
import {
  __async
} from "./chunk-CPNXOV62.js";

// src/app/features/auth/components/login/login-standalone.component.ts
function LoginStandaloneComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4, "Account Temporarily Locked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Too many failed login attempts.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "remaining");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 14);
    \u0275\u0275text(13, "Try again after the timer expires or ");
    \u0275\u0275elementStart(14, "a", 15);
    \u0275\u0275text(15, "reset your password");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.remainingLockoutTime);
  }
}
function LoginStandaloneComponent_div_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Invalid credentials. ", ctx_r0.remainingAttempts, " attempts remaining before account lockout. ");
  }
}
function LoginStandaloneComponent_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, " Last attempt! Account will be locked for 15 minutes after next failed login. ");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, LoginStandaloneComponent_div_8_span_4_Template, 2, 1, "span", 18)(5, LoginStandaloneComponent_div_8_span_5_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.remainingAttempts > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.remainingAttempts === 1);
  }
}
function LoginStandaloneComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Security verification enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your login attempts are being verified by reCAPTCHA to protect your account.");
    \u0275\u0275elementEnd()()();
  }
}
function LoginStandaloneComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginStandaloneComponent_form_11_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, LoginStandaloneComponent_form_11_div_5_span_1_Template, 2, 0, "span", 42)(2, LoginStandaloneComponent_form_11_div_5_span_2_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function LoginStandaloneComponent_form_11_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, LoginStandaloneComponent_form_11_div_14_span_1_Template, 2, 0, "span", 44)(2, LoginStandaloneComponent_form_11_div_14_span_2_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function LoginStandaloneComponent_form_11_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function LoginStandaloneComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 24);
    \u0275\u0275listener("ngSubmit", function LoginStandaloneComponent_form_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 27);
    \u0275\u0275template(5, LoginStandaloneComponent_form_11_div_5_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "label", 29);
    \u0275\u0275text(8, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275element(10, "input", 31);
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function LoginStandaloneComponent_form_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hidePassword = !ctx_r0.hidePassword);
    });
    \u0275\u0275elementStart(12, "span", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, LoginStandaloneComponent_form_11_div_14_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 34)(16, "label", 35);
    \u0275\u0275element(17, "input", 36);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 37);
    \u0275\u0275text(21, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 38);
    \u0275\u0275template(23, LoginStandaloneComponent_form_11_span_23_Template, 2, 0, "span", 18)(24, LoginStandaloneComponent_form_11_span_24_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 39)(26, "span");
    \u0275\u0275text(27, "Don't have an account? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 40);
    \u0275\u0275text(29, "Create one here");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && (ctx_r0.email == null ? null : ctx_r0.email.touched));
    \u0275\u0275attribute("aria-invalid", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && (ctx_r0.email == null ? null : ctx_r0.email.touched))("aria-describedby", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && (ctx_r0.email == null ? null : ctx_r0.email.touched) ? "email-error" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && (ctx_r0.email == null ? null : ctx_r0.email.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && (ctx_r0.password == null ? null : ctx_r0.password.touched));
    \u0275\u0275property("type", ctx_r0.hidePassword ? "password" : "text");
    \u0275\u0275attribute("aria-invalid", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && (ctx_r0.password == null ? null : ctx_r0.password.touched))("aria-describedby", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && (ctx_r0.password == null ? null : ctx_r0.password.touched) ? "password-error" : null);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.hidePassword ? "Show password" : "Hide password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hidePassword ? "\u{1F441}\uFE0F" : "\u{1F648}");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && (ctx_r0.password == null ? null : ctx_r0.password.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.loginForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
  }
}
var LoginStandaloneComponent = class _LoginStandaloneComponent {
  constructor(fb, authFacade, router, navigationService) {
    this.fb = fb;
    this.authFacade = authFacade;
    this.router = router;
    this.navigationService = navigationService;
    this.loading = false;
    this.errorMessage = "";
    this.hidePassword = true;
    this.failedAttempts = 0;
    this.maxAttempts = 5;
    this.captchaThreshold = 3;
    this.isLocked = false;
    this.showCaptcha = false;
    this.lockoutEndTime = null;
    this.remainingLockoutTime = "";
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  ngOnInit() {
    this.checkExistingLockout();
    this.loadRecaptchaScript();
  }
  ngOnDestroy() {
    this.lockoutSubscription?.unsubscribe();
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  get remainingAttempts() {
    return Math.max(0, this.maxAttempts - this.failedAttempts);
  }
  get showAttemptsWarning() {
    return this.failedAttempts > 0 && !this.isLocked && !this.showCaptcha;
  }
  checkExistingLockout() {
    const lockoutData = localStorage.getItem("loginLockout");
    if (lockoutData) {
      const { endTime, attempts } = JSON.parse(lockoutData);
      this.failedAttempts = attempts || 0;
      if (endTime && endTime > Date.now()) {
        this.lockoutEndTime = new Date(endTime);
        this.isLocked = true;
        this.startLockoutTimer();
      } else {
        this.clearLockout();
      }
      if (this.failedAttempts >= this.captchaThreshold) {
        this.showCaptcha = true;
      }
    }
  }
  startLockoutTimer() {
    this.updateLockoutTime();
    this.lockoutSubscription = interval(1e3).subscribe(() => {
      this.updateLockoutTime();
    });
  }
  updateLockoutTime() {
    if (this.lockoutEndTime) {
      const now = Date.now();
      const diff = this.lockoutEndTime.getTime() - now;
      if (diff <= 0) {
        this.clearLockout();
      } else {
        const minutes = Math.floor(diff / 6e4);
        const seconds = Math.floor(diff % 6e4 / 1e3);
        this.remainingLockoutTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      }
    }
  }
  clearLockout() {
    this.isLocked = false;
    this.failedAttempts = 0;
    this.showCaptcha = false;
    this.lockoutEndTime = null;
    this.remainingLockoutTime = "";
    localStorage.removeItem("loginLockout");
    this.lockoutSubscription?.unsubscribe();
  }
  handleFailedLogin() {
    this.failedAttempts++;
    if (this.failedAttempts >= this.captchaThreshold) {
      this.showCaptcha = true;
    }
    if (this.failedAttempts >= this.maxAttempts) {
      this.lockAccount();
    } else {
      localStorage.setItem("loginLockout", JSON.stringify({
        attempts: this.failedAttempts,
        endTime: (/* @__PURE__ */ new Date()).getTime()
      }));
    }
  }
  lockAccount() {
    this.isLocked = true;
    const lockoutDuration = 15 * 60 * 1e3;
    this.lockoutEndTime = new Date(Date.now() + lockoutDuration);
    localStorage.setItem("loginLockout", JSON.stringify({
      endTime: this.lockoutEndTime.getTime(),
      attempts: this.failedAttempts
    }));
    this.startLockoutTimer();
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.loginForm.valid && !this.isLocked) {
        this.loading = true;
        this.errorMessage = "";
        if (this.showCaptcha) {
          try {
            const token = yield this.executeRecaptcha();
            console.log("reCAPTCHA token:", token);
          } catch (error) {
            this.errorMessage = "reCAPTCHA verification failed. Please try again.";
            this.loading = false;
            return;
          }
        }
        this.authFacade.login(this.loginForm.value);
        const authSubscription = this.authFacade.isAuthenticated$.subscribe((isAuthenticated) => {
          if (isAuthenticated) {
            this.authFacade.user$.pipe(take(1)).subscribe((user) => {
              if (user) {
                this.loading = false;
                this.clearLockout();
                const rememberMe = this.loginForm.get("rememberMe")?.value;
                if (rememberMe) {
                  localStorage.setItem("rememberMe", "true");
                  localStorage.setItem("rememberMeExpiry", (Date.now() + 30 * 24 * 60 * 60 * 1e3).toString());
                } else {
                  localStorage.removeItem("rememberMe");
                  localStorage.removeItem("rememberMeExpiry");
                }
                const dashboardRoute = this.navigationService.getDashboardRoute(user.role);
                console.log("Redirecting to:", dashboardRoute, "for user:", user.email, "role:", user.role);
                this.router.navigate([dashboardRoute]);
              }
            });
            authSubscription.unsubscribe();
          }
        });
        const errorSubscription = this.authFacade.error$.subscribe((error) => {
          if (error) {
            this.loading = false;
            this.errorMessage = error;
            this.handleFailedLogin();
            errorSubscription.unsubscribe();
          }
        });
      }
    });
  }
  loadRecaptchaScript() {
    if (document.getElementById("recaptcha-script")) {
      return;
    }
    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  executeRecaptcha() {
    return new Promise((resolve, reject) => {
      const checkRecaptcha = () => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", { action: "login" }).then((token) => resolve(token)).catch((error) => reject(error));
          });
        } else {
          setTimeout(checkRecaptcha, 100);
        }
      };
      checkRecaptcha();
    });
  }
  static {
    this.\u0275fac = function LoginStandaloneComponent_Factory(t) {
      return new (t || _LoginStandaloneComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthFacadeService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavigationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginStandaloneComponent, selectors: [["app-login-standalone"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], ["class", "lockout-warning", "role", "alert", "aria-live", "assertive", 4, "ngIf"], ["class", "attempts-warning", "role", "alert", "aria-live", "polite", 4, "ngIf"], ["class", "captcha-notice", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "error-message", "role", "alert", "aria-live", "assertive", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", "aria-live", "assertive", 1, "lockout-warning"], ["aria-hidden", "true", 1, "lockout-icon"], ["id", "lockout-heading"], [1, "countdown"], [1, "time"], [1, "label"], [1, "hint"], ["routerLink", "/auth/forgot-password"], ["role", "alert", "aria-live", "polite", 1, "attempts-warning"], ["aria-hidden", "true", 1, "warning-icon"], [4, "ngIf"], ["class", "final-warning", 4, "ngIf"], [1, "final-warning"], ["role", "status", "aria-live", "polite", 1, "captcha-notice"], ["aria-hidden", "true", 1, "shield-icon"], ["role", "alert", "aria-live", "assertive", 1, "error-message"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "autocomplete", "email", "aria-required", "true", 1, "form-control"], ["class", "error-text", "role", "alert", 4, "ngIf"], ["for", "password"], [1, "password-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", "aria-required", "true", 1, "form-control", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["aria-hidden", "true"], [1, "form-options"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "rememberMe"], ["routerLink", "/auth/forgot-password", 1, "link"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/register", 1, "link"], ["role", "alert", 1, "error-text"], ["id", "email-error", 4, "ngIf"], ["id", "email-error"], ["id", "password-error", 4, "ngIf"], ["id", "password-error"]], template: function LoginStandaloneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Welcome Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Sign in to your TalentForge account");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, LoginStandaloneComponent_div_7_Template, 16, 1, "div", 3)(8, LoginStandaloneComponent_div_8_Template, 6, 2, "div", 4)(9, LoginStandaloneComponent_div_9_Template, 8, 0, "div", 5)(10, LoginStandaloneComponent_div_10_Template, 2, 1, "div", 6)(11, LoginStandaloneComponent_form_11_Template, 30, 17, "form", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLocked);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAttemptsWarning && !ctx.isLocked);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCaptcha && !ctx.isLocked);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLocked);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n}\n.auth-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50%;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n  max-width: 450px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.75rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9375rem;\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 45px;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  padding: 0;\n  line-height: 1;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #475569;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.6);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: #0052cc;\n  text-decoration: underline;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.lockout-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  border: 2px solid #ef4444;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.lockout-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n.lockout-warning[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.lockout-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n  margin: 0 0 16px 0;\n  font-size: 0.875rem;\n}\n.countdown[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.countdown[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #dc2626;\n  font-family: monospace;\n}\n.countdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #7f1d1d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-top: 4px;\n}\n.lockout-warning[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #7f1d1d;\n}\n.lockout-warning[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n  text-decoration: none;\n}\n.lockout-warning[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.attempts-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-left: 4px solid #f59e0b;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 0.875rem;\n  color: #92400e;\n  line-height: 1.5;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.final-warning[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #dc2626;\n}\n.captcha-notice[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-left: 4px solid #0066ff;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 0.875rem;\n  color: #1e40af;\n  line-height: 1.5;\n}\n.shield-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.captcha-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n}\n.captcha-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: #1e3a8a;\n}\n@media (max-width: 768px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .lockout-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .countdown[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=login-standalone.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginStandaloneComponent, { className: "LoginStandaloneComponent" });
})();
export {
  LoginStandaloneComponent
};
//# sourceMappingURL=chunk-2DB3HLEV.js.map
