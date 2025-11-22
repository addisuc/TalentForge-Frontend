import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import "./chunk-OEVDKEI3.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Observable,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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

// src/app/core/services/settings.service.ts
var SettingsService = class _SettingsService {
  constructor(http) {
    this.http = http;
    this.settingsApiUrl = "/api/users/me/settings";
  }
  getUserSettings() {
    return this.http.get(this.settingsApiUrl);
  }
  updateUserSettings(settings) {
    return this.http.put(this.settingsApiUrl, settings);
  }
  getOrganizationSettings() {
    return new Observable((observer) => {
      observer.next({});
      observer.complete();
    });
  }
  updateOrganizationSettings(settings) {
    return new Observable((observer) => {
      observer.next(settings);
      observer.complete();
    });
  }
  changePassword(currentPassword, newPassword) {
    return this.http.post("/api/users/change-password", { currentPassword, newPassword });
  }
  static {
    this.\u0275fac = function SettingsService_Factory(t) {
      return new (t || _SettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.currentTheme = "light";
  }
  setTheme(theme) {
    console.log("Setting theme to:", theme);
    this.currentTheme = theme;
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    console.log("Body classes:", document.body.className);
  }
  getTheme() {
    return this.currentTheme;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/settings/settings.component.ts
function SettingsComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function SettingsComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("organization"));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Organization");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "organization");
  }
}
function SettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveMessage, " ");
  }
}
function SettingsComponent_div_26_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    \u0275\u0275property("value", lang_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r4.name);
  }
}
function SettingsComponent_div_26_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r5 = ctx.$implicit;
    \u0275\u0275property("value", tz_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r5);
  }
}
function SettingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Profile & Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_26_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUserSettings());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "h3");
    \u0275\u0275text(6, "Appearance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "label", 15);
    \u0275\u0275text(9, "Theme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 16)(11, "option", 17);
    \u0275\u0275text(12, "\u2600\uFE0F Light");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 18);
    \u0275\u0275text(14, "\u{1F319} Dark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 19);
    \u0275\u0275text(16, "\u{1F30A} Blue Ocean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 20);
    \u0275\u0275text(18, "\u{1F30C} Purple Night");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 21);
    \u0275\u0275text(20, "\u{1F332} Forest Green");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 22);
    \u0275\u0275text(22, "\u{1F305} Sunset Orange");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "h3");
    \u0275\u0275text(25, "Localization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 23)(27, "div", 14)(28, "label", 24);
    \u0275\u0275text(29, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 25);
    \u0275\u0275template(31, SettingsComponent_div_26_option_31_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 14)(33, "label", 27);
    \u0275\u0275text(34, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 28);
    \u0275\u0275template(36, SettingsComponent_div_26_option_36_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 23)(38, "div", 14)(39, "label", 29);
    \u0275\u0275text(40, "Date Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 30)(42, "option", 31);
    \u0275\u0275text(43, "MM/DD/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 32);
    \u0275\u0275text(45, "DD/MM/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 33);
    \u0275\u0275text(47, "YYYY-MM-DD");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 14)(49, "label", 34);
    \u0275\u0275text(50, "Time Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 35)(52, "option", 36);
    \u0275\u0275text(53, "12-hour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 37);
    \u0275\u0275text(55, "24-hour");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(56, "button", 38);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.userSettingsForm);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.languages);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.timezones);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.userSettingsForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Saving..." : "Save Changes", " ");
  }
}
function SettingsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Notification Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_27_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUserSettings());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "h3");
    \u0275\u0275text(6, "Communication Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 40)(8, "label", 41);
    \u0275\u0275element(9, "input", 42);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small");
    \u0275\u0275text(13, "Receive updates via email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 41);
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Push Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "Browser notifications for important updates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label", 41);
    \u0275\u0275element(21, "input", 44);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "SMS Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25, "Text messages for urgent alerts");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 38);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.userSettingsForm);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Saving..." : "Save Changes", " ");
  }
}
function SettingsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "h3");
    \u0275\u0275text(5, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 12);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_28_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275elementStart(7, "div", 14)(8, "label", 45);
    \u0275\u0275text(9, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "label", 47);
    \u0275\u0275text(13, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 48);
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16, "Minimum 8 characters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 49);
    \u0275\u0275text(19, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "h3");
    \u0275\u0275text(25, "Session Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Active session timeout: 30 minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 51);
    \u0275\u0275text(29, "You'll be automatically logged out after 30 minutes of inactivity");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.passwordForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Changing..." : "Change Password", " ");
  }
}
function SettingsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Organization Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_29_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveOrganizationSettings());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "h3");
    \u0275\u0275text(6, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "label", 52);
    \u0275\u0275text(9, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "div", 14)(13, "label", 54);
    \u0275\u0275text(14, "Company Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "label", 56);
    \u0275\u0275text(18, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 58);
    \u0275\u0275text(22, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 60);
    \u0275\u0275text(26, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23)(29, "div", 14)(30, "label", 62);
    \u0275\u0275text(31, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 63)(33, "option", 64);
    \u0275\u0275text(34, "Select Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 65);
    \u0275\u0275text(36, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 66);
    \u0275\u0275text(38, "Healthcare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 67);
    \u0275\u0275text(40, "Finance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 68);
    \u0275\u0275text(42, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 69);
    \u0275\u0275text(44, "Retail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 70);
    \u0275\u0275text(46, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 14)(48, "label", 71);
    \u0275\u0275text(49, "Company Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "select", 72)(51, "option", 64);
    \u0275\u0275text(52, "Select Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 73);
    \u0275\u0275text(54, "1-10 employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 74);
    \u0275\u0275text(56, "11-50 employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 75);
    \u0275\u0275text(58, "51-200 employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 76);
    \u0275\u0275text(60, "201-500 employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 77);
    \u0275\u0275text(62, "500+ employees");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(63, "div", 13)(64, "h3");
    \u0275\u0275text(65, "Job Posting Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 40)(67, "label", 41);
    \u0275\u0275element(68, "input", 78);
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Allow Public Job Postings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "small");
    \u0275\u0275text(72, "Jobs visible to all candidates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "label", 41);
    \u0275\u0275element(74, "input", 79);
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "Require Approval for Job Postings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "small");
    \u0275\u0275text(78, "Admin must approve before publishing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 14)(80, "label", 80);
    \u0275\u0275text(81, "Auto-archive Jobs After (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 81);
    \u0275\u0275elementStart(83, "small");
    \u0275\u0275text(84, "Jobs will be automatically archived after this many days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "button", 38);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.organizationForm);
    \u0275\u0275advance(82);
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.organizationForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Saving..." : "Save Changes", " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(fb, settingsService, authService, themeService) {
    this.fb = fb;
    this.settingsService = settingsService;
    this.authService = authService;
    this.themeService = themeService;
    this.activeTab = "profile";
    this.loading = false;
    this.saveMessage = "";
    this.isAdmin = false;
    this.timezones = [
      "UTC",
      "America/New_York",
      "America/Chicago",
      "America/Denver",
      "America/Los_Angeles",
      "Europe/London",
      "Europe/Paris",
      "Asia/Tokyo",
      "Asia/Shanghai",
      "Australia/Sydney"
    ];
    this.languages = [
      { code: "en", name: "English" },
      { code: "es", name: "Spanish" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" }
    ];
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUserValue();
    this.isAdmin = this.currentUser?.role === "TENANT_ADMIN" || this.currentUser?.role === "PLATFORM_ADMIN";
    this.initForms();
    this.loadSettings();
  }
  initForms() {
    this.userSettingsForm = this.fb.group({
      emailNotifications: [true],
      pushNotifications: [true],
      smsNotifications: [false],
      language: ["en"],
      timezone: ["UTC"],
      theme: ["light"],
      dateFormat: ["MM/DD/YYYY"],
      timeFormat: ["12h"]
    });
    this.organizationForm = this.fb.group({
      companyName: ["", Validators.required],
      companyEmail: ["", [Validators.required, Validators.email]],
      companyPhone: [""],
      companyWebsite: [""],
      companyAddress: [""],
      industry: [""],
      companySize: [""],
      allowPublicJobPostings: [true],
      requireApprovalForJobPostings: [false],
      autoArchiveJobsAfterDays: [90]
    });
    this.passwordForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    });
  }
  loadSettings() {
    this.settingsService.getUserSettings().subscribe({
      next: (settings) => {
        this.userSettingsForm.patchValue(settings);
        if (settings.theme) {
          this.applyTheme(settings.theme);
        }
      },
      error: () => {
      }
    });
    if (this.isAdmin) {
      this.settingsService.getOrganizationSettings().subscribe({
        next: (settings) => this.organizationForm.patchValue(settings),
        error: () => {
        }
      });
    }
  }
  saveUserSettings() {
    if (this.userSettingsForm.valid) {
      this.loading = true;
      const settings = this.userSettingsForm.value;
      this.settingsService.updateUserSettings(settings).subscribe({
        next: () => {
          this.applyTheme(settings.theme);
          this.saveMessage = "Settings saved successfully";
          this.loading = false;
          setTimeout(() => this.saveMessage = "", 3e3);
        },
        error: () => {
          this.saveMessage = "Failed to save settings";
          this.loading = false;
        }
      });
    }
  }
  applyTheme(theme) {
    this.themeService.setTheme(theme);
  }
  saveOrganizationSettings() {
    if (this.organizationForm.valid) {
      this.loading = true;
      this.settingsService.updateOrganizationSettings(this.organizationForm.value).subscribe({
        next: () => {
          this.saveMessage = "Organization settings saved successfully";
          this.loading = false;
          setTimeout(() => this.saveMessage = "", 3e3);
        },
        error: () => {
          this.saveMessage = "Failed to save organization settings";
          this.loading = false;
        }
      });
    }
  }
  changePassword() {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
      if (newPassword !== confirmPassword) {
        this.saveMessage = "Passwords do not match";
        return;
      }
      this.loading = true;
      this.settingsService.changePassword(currentPassword, newPassword).subscribe({
        next: () => {
          this.saveMessage = "Password changed successfully";
          this.loading = false;
          this.passwordForm.reset();
          setTimeout(() => this.saveMessage = "", 3e3);
        },
        error: () => {
          this.saveMessage = "Failed to change password";
          this.loading = false;
        }
      });
    }
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.saveMessage = "";
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 12, consts: [[1, "settings-container"], [1, "settings-header"], [1, "settings-layout"], ["role", "navigation", "aria-label", "Settings navigation", 1, "settings-nav"], ["type", "button", 1, "nav-item", 3, "click"], [1, "icon"], ["class", "nav-item", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "settings-content"], ["class", "save-message", "role", "alert", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], ["role", "alert", 1, "save-message"], [1, "tab-content"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-group"], ["for", "theme"], ["id", "theme", "formControlName", "theme", 1, "form-control"], ["value", "light"], ["value", "dark"], ["value", "blue"], ["value", "purple"], ["value", "green"], ["value", "sunset"], [1, "form-row"], ["for", "language"], ["id", "language", "formControlName", "language", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "timezone"], ["id", "timezone", "formControlName", "timezone", 1, "form-control"], ["for", "dateFormat"], ["id", "dateFormat", "formControlName", "dateFormat", 1, "form-control"], ["value", "MM/DD/YYYY"], ["value", "DD/MM/YYYY"], ["value", "YYYY-MM-DD"], ["for", "timeFormat"], ["id", "timeFormat", "formControlName", "timeFormat", 1, "form-control"], ["value", "12h"], ["value", "24h"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"], [1, "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "emailNotifications"], ["type", "checkbox", "formControlName", "pushNotifications"], ["type", "checkbox", "formControlName", "smsNotifications"], ["for", "currentPassword"], ["id", "currentPassword", "type", "password", "formControlName", "currentPassword", "autocomplete", "current-password", 1, "form-control"], ["for", "newPassword"], ["id", "newPassword", "type", "password", "formControlName", "newPassword", "autocomplete", "new-password", 1, "form-control"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", 1, "form-control"], [1, "text-muted"], ["for", "companyName"], ["id", "companyName", "type", "text", "formControlName", "companyName", 1, "form-control"], ["for", "companyEmail"], ["id", "companyEmail", "type", "email", "formControlName", "companyEmail", 1, "form-control"], ["for", "companyPhone"], ["id", "companyPhone", "type", "tel", "formControlName", "companyPhone", 1, "form-control"], ["for", "companyWebsite"], ["id", "companyWebsite", "type", "url", "formControlName", "companyWebsite", 1, "form-control"], ["for", "companyAddress"], ["id", "companyAddress", "formControlName", "companyAddress", "rows", "3", 1, "form-control"], ["for", "industry"], ["id", "industry", "formControlName", "industry", 1, "form-control"], ["value", ""], ["value", "technology"], ["value", "healthcare"], ["value", "finance"], ["value", "education"], ["value", "retail"], ["value", "other"], ["for", "companySize"], ["id", "companySize", "formControlName", "companySize", 1, "form-control"], ["value", "1-10"], ["value", "11-50"], ["value", "51-200"], ["value", "201-500"], ["value", "500+"], ["type", "checkbox", "formControlName", "allowPublicJobPostings"], ["type", "checkbox", "formControlName", "requireApprovalForJobPostings"], ["for", "autoArchiveJobsAfterDays"], ["id", "autoArchiveJobsAfterDays", "type", "number", "formControlName", "autoArchiveJobsAfterDays", "min", "1", "max", "365", 1, "form-control"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Manage your account preferences and organization settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "nav", 3)(8, "button", 4);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
          return ctx.setActiveTab("profile");
        });
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Profile & Preferences");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 4);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_13_listener() {
          return ctx.setActiveTab("notifications");
        });
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "\u{1F514}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "Notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 4);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_18_listener() {
          return ctx.setActiveTab("security");
        });
        \u0275\u0275elementStart(19, "span", 5);
        \u0275\u0275text(20, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Security");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, SettingsComponent_button_23_Template, 5, 2, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7);
        \u0275\u0275template(25, SettingsComponent_div_25_Template, 2, 1, "div", 8)(26, SettingsComponent_div_26_Template, 58, 5, "div", 9)(27, SettingsComponent_div_27_Template, 28, 3, "div", 9)(28, SettingsComponent_div_28_Template, 30, 3, "div", 9)(29, SettingsComponent_div_29_Template, 87, 3, "div", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.activeTab === "profile");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "notifications");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "security");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.isAdmin);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.saveMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "notifications");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "security");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "organization" && ctx.isAdmin);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName], styles: ["\n\n.settings-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.settings-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.settings-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.settings-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .settings-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.settings-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.settings-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-size: 0.9375rem;\n  color: #475569;\n}\n.settings-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.settings-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.settings-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n  font-weight: 500;\n}\n.settings-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1.5rem 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #334155;\n  margin: 0 0 1rem 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: #334155;\n}\n.checkbox-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.save-message[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  background: #d1fae5;\n  color: #065f46;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-A2ASGDRD.js.map
