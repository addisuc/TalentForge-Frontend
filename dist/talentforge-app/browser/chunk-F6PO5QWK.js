import {
  JobService
} from "./chunk-RR3KTTI2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/jobs/jobs-create.component.ts
function JobsCreateComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function JobsCreateComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveJob());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Publishing..." : "Publish Job");
  }
}
function JobsCreateComponent_div_31_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    \u0275\u0275property("value", client_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(client_r4.name);
  }
}
function JobsCreateComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "label");
    \u0275\u0275text(5, "Job Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_31_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.title, $event) || (ctx_r1.job.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 17)(9, "label");
    \u0275\u0275text(10, "Client Company *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_31_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.clientId, $event) || (ctx_r1.job.clientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 21);
    \u0275\u0275text(13, "Select client");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JobsCreateComponent_div_31_option_14_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17)(16, "label");
    \u0275\u0275text(17, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_31_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.department, $event) || (ctx_r1.job.department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 19)(20, "div", 17)(21, "label");
    \u0275\u0275text(22, "Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_31_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.location, $event) || (ctx_r1.job.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "label");
    \u0275\u0275text(26, "Job Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_31_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.type, $event) || (ctx_r1.job.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 25);
    \u0275\u0275text(29, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 26);
    \u0275\u0275text(31, "Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 27);
    \u0275\u0275text(33, "Remote");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.clientId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.clients);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.department);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.type);
  }
}
function JobsCreateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Job Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "label");
    \u0275\u0275text(5, "Job Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_32_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.description, $event) || (ctx_r1.job.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 17)(9, "label");
    \u0275\u0275text(10, "Salary Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_32_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.salaryMin, $event) || (ctx_r1.job.salaryMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "label");
    \u0275\u0275text(14, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_32_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.salaryMax, $event) || (ctx_r1.job.salaryMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "label");
    \u0275\u0275text(18, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 32);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_32_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.benefits, $event) || (ctx_r1.job.benefits = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.salaryMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.salaryMax);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.benefits);
  }
}
function JobsCreateComponent_div_33_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 43);
    \u0275\u0275listener("click", function JobsCreateComponent_div_33_span_8_Template_button_click_2_listener() {
      const skill_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSkill(skill_r8));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r8, " ");
  }
}
function JobsCreateComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "label");
    \u0275\u0275text(5, "Required Skills *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_33_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.skillInput, $event) || (ctx_r1.skillInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function JobsCreateComponent_div_33_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSkill());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275template(8, JobsCreateComponent_div_33_span_8_Template, 4, 1, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17)(10, "label");
    \u0275\u0275text(11, "Experience Level *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_33_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.experienceLevel, $event) || (ctx_r1.job.experienceLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 36);
    \u0275\u0275text(14, "Entry Level (0-2 years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 37);
    \u0275\u0275text(16, "Mid Level (3-5 years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 38);
    \u0275\u0275text(18, "Senior Level (6+ years)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 17)(20, "label");
    \u0275\u0275text(21, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JobsCreateComponent_div_33_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.job.education, $event) || (ctx_r1.job.education = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 21);
    \u0275\u0275text(24, "Not specified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 39);
    \u0275\u0275text(26, "Bachelor's Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 40);
    \u0275\u0275text(28, "Master's Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 41);
    \u0275\u0275text(30, "PhD");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.skillInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.job.skills);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.experienceLevel);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.job.education);
  }
}
function JobsCreateComponent_div_34_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r9);
  }
}
function JobsCreateComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Review & Publish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46)(9, "strong");
    \u0275\u0275text(10, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 46)(14, "strong");
    \u0275\u0275text(15, "Salary:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 46)(19, "strong");
    \u0275\u0275text(20, "Skills:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 34);
    \u0275\u0275template(22, JobsCreateComponent_div_34_span_22_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.job.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.job.location, " \u2022 ", ctx_r1.job.type, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.job.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("$", ctx_r1.job.salaryMin, " - $", ctx_r1.job.salaryMax, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.job.skills);
  }
}
function JobsCreateComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function JobsCreateComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function JobsCreateComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(1, "\u2190 Previous");
    \u0275\u0275elementEnd();
  }
}
function JobsCreateComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function JobsCreateComponent_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, "Next \u2192");
    \u0275\u0275elementEnd();
  }
}
function JobsCreateComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function JobsCreateComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveJob());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Publishing..." : "Publish Job");
  }
}
var JobsCreateComponent = class _JobsCreateComponent {
  constructor(router, route, jobService, http) {
    this.router = router;
    this.route = route;
    this.jobService = jobService;
    this.http = http;
    this.currentStep = 1;
    this.skillInput = "";
    this.saving = false;
    this.error = "";
    this.clients = [];
    this.job = {
      title: "",
      clientId: "",
      department: "",
      location: "",
      type: "full-time",
      description: "",
      salaryMin: "",
      salaryMax: "",
      benefits: "",
      skills: [],
      experienceLevel: "mid",
      education: ""
    };
  }
  ngOnInit() {
    this.loadClients();
    this.route.queryParams.subscribe((params) => {
      if (params["clientId"]) {
        this.job.clientId = params["clientId"];
      }
    });
  }
  loadClients() {
    this.http.get("/api/clients").subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error("Failed to load clients:", err);
      }
    });
  }
  nextStep() {
    if (!this.validateStep()) {
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }
  validateStep() {
    if (this.currentStep === 1) {
      if (!this.job.title || !this.job.location || !this.job.clientId) {
        this.error = "Please fill in Job Title, Client, and Location";
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.job.description) {
        this.error = "Please fill in Job Description";
        return false;
      }
    } else if (this.currentStep === 3) {
      if (this.job.skills.length === 0) {
        this.error = "Please add at least one skill";
        return false;
      }
    }
    this.error = "";
    return true;
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  addSkill() {
    const skill = this.skillInput.trim();
    if (skill && !this.job.skills.includes(skill)) {
      this.job.skills.push(skill);
      this.skillInput = "";
      this.error = "";
    }
  }
  removeSkill(skill) {
    this.job.skills = this.job.skills.filter((s) => s !== skill);
  }
  saveJob() {
    console.log("Selected clientId:", this.job.clientId);
    console.log("Full job object:", this.job);
    if (!this.job.title || !this.job.location || !this.job.clientId) {
      this.error = "Please select a client and fill in required fields";
      return;
    }
    this.saving = true;
    this.error = "";
    const jobRequest = {
      title: this.job.title,
      description: this.job.description || "Job description",
      requirements: this.job.skills.join(", "),
      location: this.job.location,
      salaryMin: this.job.salaryMin ? parseInt(this.job.salaryMin) : null,
      salaryMax: this.job.salaryMax ? parseInt(this.job.salaryMax) : null,
      jobType: this.job.type.toUpperCase().replace("-", "_"),
      companyId: this.job.clientId
    };
    console.log("Job request being sent:", jobRequest);
    this.jobService.createJob(jobRequest).subscribe({
      next: (job) => {
        this.router.navigate(["/jobs"]);
      },
      error: (err) => {
        this.error = err.error?.message || "Failed to create job";
        this.saving = false;
      }
    });
  }
  static {
    this.\u0275fac = function JobsCreateComponent_Factory(t) {
      return new (t || _JobsCreateComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobsCreateComponent, selectors: [["app-jobs-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 23, consts: [[1, "jobs-create"], [1, "page-header"], [1, "header-actions"], ["routerLink", "/jobs", 1, "btn-secondary"], ["class", "btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "form-container"], [1, "progress-steps"], [1, "step"], [1, "step-number"], [1, "form-content"], ["class", "step-content", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-actions"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "btn-primary", 3, "click", "disabled"], [1, "step-content"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Senior Full Stack Developer", 3, "ngModelChange", "ngModel"], [1, "form-row"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. Engineering", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. San Francisco, CA", 3, "ngModelChange", "ngModel"], ["value", "full-time"], ["value", "contract"], ["value", "remote"], [3, "value"], ["rows", "8", "placeholder", "Describe the role, responsibilities, and what makes this opportunity great...", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Min (e.g. 120000)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Max (e.g. 180000)", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Health insurance, 401k, flexible hours, etc.", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Type skill and press Enter", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "skills-list"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], ["value", "entry"], ["value", "mid"], ["value", "senior"], ["value", "bachelors"], ["value", "masters"], ["value", "phd"], [1, "skill-tag"], [3, "click"], [1, "review-section"], [1, "review-meta"], [1, "review-item"], [1, "error-message"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"]], template: function JobsCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Post New Job");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275text(6, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, JobsCreateComponent_button_7_Template, 2, 2, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
        \u0275\u0275text(12, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Basic Info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8);
        \u0275\u0275text(17, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 8);
        \u0275\u0275text(22, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Requirements");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 8);
        \u0275\u0275text(27, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "Review");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 9);
        \u0275\u0275template(31, JobsCreateComponent_div_31_Template, 34, 6, "div", 10)(32, JobsCreateComponent_div_32_Template, 20, 4, "div", 10)(33, JobsCreateComponent_div_33_Template, 31, 4, "div", 10)(34, JobsCreateComponent_div_34_Template, 23, 7, "div", 10)(35, JobsCreateComponent_div_35_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(36, "div", 12);
        \u0275\u0275template(37, JobsCreateComponent_button_37_Template, 2, 0, "button", 13)(38, JobsCreateComponent_button_38_Template, 2, 0, "button", 14)(39, JobsCreateComponent_button_39_Template, 2, 2, "button", 4);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.currentStep === 4);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.currentStep >= 1)("completed", ctx.currentStep > 1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentStep >= 2)("completed", ctx.currentStep > 2);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentStep >= 3)("completed", ctx.currentStep > 3);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentStep >= 4);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStep > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep < 4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 4);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.jobs-create[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.form-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.progress-steps[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n  position: relative;\n}\n.progress-steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #e2e8f0;\n  z-index: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  z-index: 1;\n}\n.step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: white;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #0066ff;\n  border-color: #0066ff;\n  color: white;\n}\n.step.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #10b981;\n  border-color: #10b981;\n  color: white;\n}\n.form-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.step-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.3s;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #eff6ff;\n  color: #0066ff;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.skill-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.review-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.review-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.review-meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 24px;\n}\n.review-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.review-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.review-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.6;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=jobs-create.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobsCreateComponent, { className: "JobsCreateComponent" });
})();
export {
  JobsCreateComponent
};
//# sourceMappingURL=chunk-F6PO5QWK.js.map
