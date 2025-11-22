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
  ɵɵclassMap,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/jobs/jobs-browse.component.ts
function JobsBrowseComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    \u0275\u0275property("value", client_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(client_r1.name);
  }
}
function JobsBrowseComponent_tr_78_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r5);
  }
}
function JobsBrowseComponent_tr_78_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function JobsBrowseComponent_tr_78_button_28_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const job_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.activateJob($event, job_r3.id));
    });
    \u0275\u0275text(1, "Activate");
    \u0275\u0275elementEnd();
  }
}
function JobsBrowseComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26);
    \u0275\u0275listener("click", function JobsBrowseComponent_tr_78_Template_tr_click_0_listener() {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewJob(job_r3.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 37)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275template(6, JobsBrowseComponent_tr_78_span_6_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "button", 41);
    \u0275\u0275listener("click", function JobsBrowseComponent_tr_78_Template_button_click_24_listener($event) {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewJobDetails($event, job_r3.id));
    });
    \u0275\u0275text(25, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 42);
    \u0275\u0275listener("click", function JobsBrowseComponent_tr_78_Template_button_click_26_listener($event) {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editJobDetails($event, job_r3));
    });
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, JobsBrowseComponent_tr_78_button_28_Template, 2, 0, "button", 43);
    \u0275\u0275elementStart(29, "button", 44);
    \u0275\u0275listener("click", function JobsBrowseComponent_tr_78_Template_button_click_29_listener($event) {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteJobDetails($event, job_r3.id));
    });
    \u0275\u0275text(30, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.getJobSkills(job_r3).slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCompanyName(job_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getLocationString(job_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getJobTypeClass(job_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getJobTypeDisplay(job_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getSalaryRange(job_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + job_r3.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getApplicantCount(job_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.getDaysAgo(job_r3.createdAt), "d ago");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", job_r3.status === "DRAFT");
  }
}
function JobsBrowseComponent_button_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function JobsBrowseComponent_button_93_Template_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r8 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r8);
  }
}
function JobsBrowseComponent_div_96_div_29_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r11 = ctx.$implicit;
    \u0275\u0275property("value", client_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(client_r11.name);
  }
}
function JobsBrowseComponent_div_96_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "h3");
    \u0275\u0275text(2, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "label");
    \u0275\u0275text(5, "Job Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_29_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.title, $event) || (ctx_r3.jobData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "div", 63)(9, "label");
    \u0275\u0275text(10, "Client Company *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_29_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.clientId, $event) || (ctx_r3.jobData.clientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 67);
    \u0275\u0275text(13, "Select client");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JobsBrowseComponent_div_96_div_29_option_14_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 63)(16, "label");
    \u0275\u0275text(17, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_29_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.department, $event) || (ctx_r3.jobData.department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 65)(20, "div", 63)(21, "label");
    \u0275\u0275text(22, "Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_29_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.location, $event) || (ctx_r3.jobData.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 63)(25, "label");
    \u0275\u0275text(26, "Job Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_29_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.type, $event) || (ctx_r3.jobData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 12);
    \u0275\u0275text(29, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 13);
    \u0275\u0275text(31, "Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 14);
    \u0275\u0275text(33, "Remote");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.clientId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.clients);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.department);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.type);
  }
}
function JobsBrowseComponent_div_96_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "h3");
    \u0275\u0275text(2, "Job Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "label");
    \u0275\u0275text(5, "Job Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 70);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_30_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.description, $event) || (ctx_r3.jobData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "div", 63)(9, "label");
    \u0275\u0275text(10, "Salary Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_30_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.salaryMin, $event) || (ctx_r3.jobData.salaryMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 63)(13, "label");
    \u0275\u0275text(14, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_30_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.salaryMax, $event) || (ctx_r3.jobData.salaryMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 63)(17, "label");
    \u0275\u0275text(18, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 73);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_30_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.benefits, $event) || (ctx_r3.jobData.benefits = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.salaryMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.salaryMax);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.benefits);
  }
}
function JobsBrowseComponent_div_96_div_31_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_div_31_span_8_Template_button_click_2_listener() {
      const skill_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r15));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r15, " ");
  }
}
function JobsBrowseComponent_div_96_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "h3");
    \u0275\u0275text(2, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "label");
    \u0275\u0275text(5, "Required Skills *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_31_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.skillInput, $event) || (ctx_r3.skillInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function JobsBrowseComponent_div_96_div_31_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addSkill());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 75);
    \u0275\u0275template(8, JobsBrowseComponent_div_96_div_31_span_8_Template, 4, 1, "span", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 63)(10, "label");
    \u0275\u0275text(11, "Experience Level *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_31_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.experienceLevel, $event) || (ctx_r3.jobData.experienceLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 76);
    \u0275\u0275text(14, "Entry Level (0-2 years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 77);
    \u0275\u0275text(16, "Mid Level (3-5 years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 78);
    \u0275\u0275text(18, "Senior Level (6+ years)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 63)(20, "label");
    \u0275\u0275text(21, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_div_96_div_31_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.jobData.education, $event) || (ctx_r3.jobData.education = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 67);
    \u0275\u0275text(24, "Not specified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 79);
    \u0275\u0275text(26, "Bachelor's Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 80);
    \u0275\u0275text(28, "Master's Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 81);
    \u0275\u0275text(30, "PhD");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.skillInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.jobData.skills);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.experienceLevel);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.jobData.education);
  }
}
function JobsBrowseComponent_div_96_div_32_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "strong");
    \u0275\u0275text(2, "Salary:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("$", ctx_r3.jobData.salaryMin, " - $", ctx_r3.jobData.salaryMax, "");
  }
}
function JobsBrowseComponent_div_96_div_32_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r16);
  }
}
function JobsBrowseComponent_div_96_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "h3");
    \u0275\u0275text(2, "Review & Publish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 84)(9, "strong");
    \u0275\u0275text(10, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, JobsBrowseComponent_div_96_div_32_div_13_Template, 5, 2, "div", 85);
    \u0275\u0275elementStart(14, "div", 84)(15, "strong");
    \u0275\u0275text(16, "Skills:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 75);
    \u0275\u0275template(18, JobsBrowseComponent_div_96_div_32_span_18_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.jobData.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.jobData.location, " \u2022 ", ctx_r3.jobData.type, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.jobData.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.jobData.salaryMin || ctx_r3.jobData.salaryMax);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.jobData.skills);
  }
}
function JobsBrowseComponent_div_96_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.error);
  }
}
function JobsBrowseComponent_div_96_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previousStep());
    });
    \u0275\u0275text(1, "\u2190 Previous");
    \u0275\u0275elementEnd();
  }
}
function JobsBrowseComponent_div_96_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.nextStep());
    });
    \u0275\u0275text(1, "Next \u2192");
    \u0275\u0275elementEnd();
  }
}
function JobsBrowseComponent_div_96_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.postJob());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.loading ? "Publishing..." : "Publish Job");
  }
}
function JobsBrowseComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closePostModal());
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 49)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closePostModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "div", 52)(9, "div", 53)(10, "div", 54);
    \u0275\u0275text(11, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Basic Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 53)(15, "div", 54);
    \u0275\u0275text(16, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 53)(20, "div", 54);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Requirements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 53)(25, "div", 54);
    \u0275\u0275text(26, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Review");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, JobsBrowseComponent_div_96_div_29_Template, 34, 6, "div", 55)(30, JobsBrowseComponent_div_96_div_30_Template, 20, 4, "div", 55)(31, JobsBrowseComponent_div_96_div_31_Template, 31, 4, "div", 55)(32, JobsBrowseComponent_div_96_div_32_Template, 19, 6, "div", 55)(33, JobsBrowseComponent_div_96_div_33_Template, 2, 1, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 57)(35, "button", 58);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_96_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closePostModal());
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, JobsBrowseComponent_div_96_button_37_Template, 2, 0, "button", 59)(38, JobsBrowseComponent_div_96_button_38_Template, 2, 0, "button", 60)(39, JobsBrowseComponent_div_96_button_39_Template, 2, 2, "button", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editingJob ? "Edit Job" : "Post New Job");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.currentStep >= 1)("completed", ctx_r3.currentStep > 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.currentStep >= 2)("completed", ctx_r3.currentStep > 2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.currentStep >= 3)("completed", ctx_r3.currentStep > 3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.currentStep >= 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.currentStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentStep === 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.error);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.currentStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentStep < 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentStep === 4);
  }
}
function JobsBrowseComponent_div_97_div_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "label");
    \u0275\u0275text(2, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.viewingJob.requirements);
  }
}
function JobsBrowseComponent_div_97_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 90)(2, "div", 91)(3, "label");
    \u0275\u0275text(4, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 91)(8, "label");
    \u0275\u0275text(9, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 91)(13, "label");
    \u0275\u0275text(14, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 92);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 91)(18, "label");
    \u0275\u0275text(19, "Job Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 92);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 91)(23, "label");
    \u0275\u0275text(24, "Salary Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 92);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 93)(28, "label");
    \u0275\u0275text(29, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 94);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, JobsBrowseComponent_div_97_div_7_div_32_Template, 5, 1, "div", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.viewingJob.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getCompanyName(ctx_r3.viewingJob));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getLocationString(ctx_r3.viewingJob));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getJobTypeDisplay(ctx_r3.viewingJob));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.getSalaryRange(ctx_r3.viewingJob));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.viewingJob.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.viewingJob.requirements);
  }
}
function JobsBrowseComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_97_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeViewModal());
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_97_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 49)(3, "h2");
    \u0275\u0275text(4, "Job Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_97_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeViewModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JobsBrowseComponent_div_97_div_7_Template, 33, 7, "div", 89);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_97_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeViewModal());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 3);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_97_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editFromView());
    });
    \u0275\u0275text(12, "Edit Job");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.viewingJob);
  }
}
function JobsBrowseComponent_div_98_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 98)(2, "div", 99);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 100)(5, "p");
    \u0275\u0275text(6, "Are you sure you want to delete this job?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 101);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 102);
    \u0275\u0275text(10, "This action cannot be undone.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1('"', ctx_r3.deletingJob.title, '"');
  }
}
function JobsBrowseComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_98_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 96);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_98_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 49)(3, "h2");
    \u0275\u0275text(4, "Delete Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_98_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JobsBrowseComponent_div_98_div_7_Template, 11, 1, "div", 89);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_98_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 97);
    \u0275\u0275listener("click", function JobsBrowseComponent_div_98_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.deletingJob);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.loading ? "Deleting..." : "Delete Job", " ");
  }
}
var JobsBrowseComponent = class _JobsBrowseComponent {
  constructor(jobService, http) {
    this.jobService = jobService;
    this.http = http;
    this.showPostModal = false;
    this.showViewModal = false;
    this.showDeleteModal = false;
    this.editingJob = null;
    this.viewingJob = null;
    this.deletingJob = null;
    this.currentStep = 1;
    this.skillInput = "";
    this.jobData = {
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
    this.searchQuery = "";
    this.selectedType = "all";
    this.selectedClient = "all";
    this.selectedPosition = "all";
    this.selectedLocation = "all";
    this.selectedStatus = "all";
    this.clients = [];
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.sortColumn = "";
    this.sortDirection = "asc";
    this.jobs = [];
    this.loading = false;
    this.error = "";
    this.totalJobs = 0;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.loadClients();
    this.loadJobs();
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
  loadJobs() {
    this.loading = true;
    this.error = "";
    const page = this.currentPage - 1;
    if (this.searchQuery) {
      this.jobService.searchJobs(this.searchQuery, page, this.itemsPerPage).subscribe({
        next: (data) => {
          this.jobs = data.content;
          this.totalJobs = data.totalElements;
          this.totalPages = data.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.error = "Failed to load jobs";
          this.loading = false;
        }
      });
    } else {
      this.jobService.getAllJobs(page, this.itemsPerPage).subscribe({
        next: (data) => {
          this.jobs = data.content;
          this.totalJobs = data.totalElements;
          this.totalPages = data.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.error = "Failed to load jobs";
          this.loading = false;
        }
      });
    }
  }
  get startIndex() {
    return 0;
  }
  get endIndex() {
    return this.filteredJobs.length;
  }
  get filteredJobs() {
    return this.jobs.filter((job) => {
      const matchesClient = this.selectedClient === "all" || job.clientId?.toString() === this.selectedClient;
      const matchesType = this.selectedType === "all" || job.jobType === this.selectedType.toUpperCase().replace("-", "_");
      const matchesLocation = this.selectedLocation === "all" || this.getLocationString(job).toLowerCase().includes(this.selectedLocation.toLowerCase());
      const matchesStatus = this.selectedStatus === "all" || job.status === this.selectedStatus;
      return matchesClient && matchesType && matchesLocation && matchesStatus;
    });
  }
  get paginatedJobs() {
    return this.filteredJobs;
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  sortBy(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadJobs();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadJobs();
    }
  }
  goToPage(page) {
    this.currentPage = page;
    this.loadJobs();
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.loadJobs();
  }
  onFilterChange() {
    this.currentPage = 1;
  }
  onSearch() {
    this.currentPage = 1;
    this.loadJobs();
  }
  getJobSkills(job) {
    return job.requirements ? job.requirements.split(",").map((s) => s.trim()) : [];
  }
  getCompanyName(job) {
    if (job.companyId) {
      const client = this.clients.find((c) => c.id === job.companyId);
      if (client)
        return client.name;
    }
    return "Company";
  }
  getLocationString(job) {
    if (typeof job.location === "string") {
      let location = job.location.replace(/^"|"$/g, "");
      try {
        const parsed = JSON.parse(location);
        if (parsed.city && parsed.state)
          return `${parsed.city}, ${parsed.state}`;
        if (parsed.remote)
          return "Remote";
        return location;
      } catch {
        return location;
      }
    }
    const loc = job.location;
    if (loc?.city && loc?.state)
      return `${loc.city}, ${loc.state}`;
    if (loc?.remote)
      return "Remote";
    return "Location TBD";
  }
  getSalaryRange(job) {
    if (job.salary) {
      return job.salary;
    }
    if (job.salaryMin && job.salaryMax) {
      return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
    }
    if (job.salaryMin) {
      return `$${job.salaryMin.toLocaleString()}+`;
    }
    return "Salary TBD";
  }
  getApplicantCount(job) {
    return 0;
  }
  getDaysAgo(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  }
  getJobTypeDisplay(job) {
    if (!job.jobType)
      return "Full Time";
    return job.jobType.replace("_", " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  }
  getJobTypeClass(job) {
    return job.jobType?.toLowerCase().replace("_", "-") || "full-time";
  }
  viewJob(id) {
    console.log("View job:", id);
  }
  viewJobDetails(event, id) {
    event.stopPropagation();
    this.jobService.getJobById(id).subscribe({
      next: (job) => {
        this.viewingJob = job;
        this.showViewModal = true;
      },
      error: (err) => {
        alert("Failed to load job details");
      }
    });
  }
  editJobDetails(event, job) {
    event.stopPropagation();
    this.editJob(job);
  }
  deleteJobDetails(event, jobId) {
    event.stopPropagation();
    this.deleteJob(jobId);
  }
  openPostModal() {
    this.editingJob = null;
    this.showPostModal = true;
    this.error = "";
    this.currentStep = 1;
    this.jobData = {
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
  editJob(job) {
    this.editingJob = job;
    this.showPostModal = true;
    this.error = "";
    this.currentStep = 1;
    this.jobData = {
      title: job.title,
      clientId: job.clientId?.toString() || "",
      department: "",
      location: this.getLocationString(job),
      type: job.jobType?.toLowerCase().replace("_", "-") || "full-time",
      description: job.description || "",
      salaryMin: job.salaryMin?.toString() || "",
      salaryMax: job.salaryMax?.toString() || "",
      benefits: "",
      skills: job.requirements ? job.requirements.split(",").map((s) => s.trim()) : [],
      experienceLevel: "mid",
      education: ""
    };
  }
  deleteJob(jobId) {
    const job = this.jobs.find((j) => j.id === jobId);
    this.deletingJob = job || null;
    this.showDeleteModal = true;
  }
  activateJob(event, jobId) {
    event.stopPropagation();
    this.loading = true;
    this.jobService.updateJobStatus(jobId, "ACTIVE").subscribe({
      next: () => {
        this.loadJobs();
        this.loading = false;
      },
      error: (err) => {
        alert("Failed to activate job: " + (err.error?.message || "Unknown error"));
        this.loading = false;
      }
    });
  }
  confirmDelete() {
    if (this.deletingJob) {
      this.loading = true;
      this.jobService.deleteJob(this.deletingJob.id).subscribe({
        next: () => {
          this.loadJobs();
          this.loading = false;
          this.closeDeleteModal();
        },
        error: (err) => {
          alert("Failed to delete job: " + (err.error?.message || "Unknown error"));
          this.loading = false;
        }
      });
    }
  }
  closePostModal() {
    this.showPostModal = false;
    this.currentStep = 1;
  }
  nextStep() {
    if (!this.validateStep()) {
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  validateStep() {
    if (this.currentStep === 1) {
      if (!this.jobData.title || !this.jobData.location) {
        this.error = "Please fill in Job Title and Location";
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.jobData.description) {
        this.error = "Please fill in Job Description";
        return false;
      }
    } else if (this.currentStep === 3) {
      if (this.jobData.skills.length === 0) {
        this.error = "Please add at least one skill";
        return false;
      }
    }
    this.error = "";
    return true;
  }
  addSkill() {
    const skill = this.skillInput.trim();
    if (skill && !this.jobData.skills.includes(skill)) {
      this.jobData.skills.push(skill);
      this.skillInput = "";
      this.error = "";
    }
  }
  removeSkill(skill) {
    this.jobData.skills = this.jobData.skills.filter((s) => s !== skill);
  }
  closeViewModal() {
    this.showViewModal = false;
    this.viewingJob = null;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deletingJob = null;
  }
  editFromView() {
    if (this.viewingJob) {
      this.editJob(this.viewingJob);
      this.closeViewModal();
    }
  }
  postJob() {
    if (!this.validateStep()) {
      return;
    }
    if (!this.jobData.clientId) {
      this.error = "Please select a client";
      return;
    }
    this.loading = true;
    const jobRequest = {
      title: this.jobData.title,
      description: this.jobData.description || "Job description",
      requirements: this.jobData.skills.join(", "),
      location: this.jobData.location,
      salaryMin: this.jobData.salaryMin ? parseInt(this.jobData.salaryMin) : null,
      salaryMax: this.jobData.salaryMax ? parseInt(this.jobData.salaryMax) : null,
      jobType: this.jobData.type.toUpperCase().replace("-", "_"),
      companyId: this.jobData.clientId
    };
    if (this.editingJob) {
      this.jobService.updateJob(this.editingJob.id, jobRequest).subscribe({
        next: () => {
          this.closePostModal();
          this.loadJobs();
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error?.message || "Failed to update job";
          this.loading = false;
        }
      });
    } else {
      this.jobService.createJob(jobRequest).subscribe({
        next: () => {
          this.closePostModal();
          this.loadJobs();
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error?.message || "Failed to create job";
          this.loading = false;
        }
      });
    }
  }
  parseSalaryMin(salaryRange) {
    if (!salaryRange || salaryRange.toLowerCase().includes("competitive") || salaryRange.toLowerCase().includes("doe")) {
      return null;
    }
    const match = salaryRange.match(/\$?([\d,]+)k?/i);
    if (match) {
      const cleanValue = match[1].replace(/,/g, "");
      let value = parseInt(cleanValue);
      if (salaryRange.toLowerCase().includes("k") && value < 1e3) {
        value *= 1e3;
      }
      return value;
    }
    return null;
  }
  parseSalaryMax(salaryRange) {
    if (!salaryRange || salaryRange.toLowerCase().includes("competitive") || salaryRange.toLowerCase().includes("doe")) {
      return null;
    }
    const rangeMatch = salaryRange.match(/\$?([\d,]+)k?[\s]*[-–—][\s]*\$?([\d,]+)k?/i);
    if (rangeMatch && rangeMatch[2]) {
      const cleanValue = rangeMatch[2].replace(/,/g, "");
      let value = parseInt(cleanValue);
      if (salaryRange.toLowerCase().includes("k") && value < 1e3) {
        value *= 1e3;
      }
      return value;
    }
    return this.parseSalaryMin(salaryRange);
  }
  static {
    this.\u0275fac = function JobsBrowseComponent_Factory(t) {
      return new (t || _JobsBrowseComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobsBrowseComponent, selectors: [["app-jobs-browse"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 22, consts: [[1, "jobs-browse"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "filters-section"], [1, "search-box"], [1, "icon"], ["type", "text", "placeholder", "Search by title, skills, or company...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "filters"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "full-time"], ["value", "contract"], ["value", "remote"], ["value", "Developer"], ["value", "Manager"], ["value", "Designer"], ["value", "Remote"], ["value", "San Francisco"], ["value", "New York"], ["value", "ACTIVE"], ["value", "DRAFT"], ["value", "CANCELLED"], [1, "table-container"], [1, "data-table"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-numbers"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "job-title-cell"], [1, "skills-inline"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "badge"], [1, "btn-action", 3, "click"], [1, "btn-action", "secondary", 3, "click"], ["class", "btn-action success", 3, "click", 4, "ngIf"], [1, "btn-action", "danger", 3, "click"], [1, "skill-tag"], [1, "btn-action", "success", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "large-modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "progress-steps"], [1, "step"], [1, "step-number"], ["class", "step-content", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn-primary", 3, "click", 4, "ngIf"], ["class", "btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "step-content"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Senior Full Stack Developer", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "placeholder", "e.g. Engineering", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. San Francisco, CA", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "8", "placeholder", "Describe the role, responsibilities, and what makes this opportunity great...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Min (e.g. 120000)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Max (e.g. 180000)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Health insurance, 401k, flexible hours, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Type skill and press Enter", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "skills-list"], ["value", "entry"], ["value", "mid"], ["value", "senior"], ["value", "bachelors"], ["value", "masters"], ["value", "phd"], [1, "review-section"], [1, "review-meta"], [1, "review-item"], ["class", "review-item", 4, "ngIf"], [1, "error-message"], [1, "btn-primary", 3, "click", "disabled"], [1, "modal", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "job-detail-grid"], [1, "detail-item"], [1, "detail-value"], [1, "detail-item", "full-width"], [1, "detail-value", "description"], ["class", "detail-item full-width", 4, "ngIf"], [1, "modal", "delete-modal", 3, "click"], [1, "btn-danger", 3, "click", "disabled"], [1, "delete-warning"], [1, "warning-icon"], [1, "warning-text"], [1, "job-title"], [1, "warning-note"]], template: function JobsBrowseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Browse Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_button_click_7_listener() {
          return ctx.openPostModal();
        });
        \u0275\u0275text(8, "+ Post New Job");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function JobsBrowseComponent_Template_input_keyup_enter_13_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedClient, $event) || (ctx.selectedClient = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_15_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "All Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, JobsBrowseComponent_option_18_Template, 2, 2, "option", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_19_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(20, "option", 10);
        \u0275\u0275text(21, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 12);
        \u0275\u0275text(23, "Full Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 13);
        \u0275\u0275text(25, "Contract");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 14);
        \u0275\u0275text(27, "Remote");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPosition, $event) || (ctx.selectedPosition = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_28_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(29, "option", 10);
        \u0275\u0275text(30, "All Positions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 15);
        \u0275\u0275text(32, "Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 16);
        \u0275\u0275text(34, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 17);
        \u0275\u0275text(36, "Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedLocation, $event) || (ctx.selectedLocation = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_37_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(38, "option", 10);
        \u0275\u0275text(39, "All Locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 18);
        \u0275\u0275text(41, "Remote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 19);
        \u0275\u0275text(43, "San Francisco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 20);
        \u0275\u0275text(45, "New York");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_46_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(47, "option", 10);
        \u0275\u0275text(48, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "option", 21);
        \u0275\u0275text(50, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "option", 22);
        \u0275\u0275text(52, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "option", 23);
        \u0275\u0275text(54, "Cancelled");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 24)(56, "table", 25)(57, "thead")(58, "tr")(59, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_59_listener() {
          return ctx.sortBy("title");
        });
        \u0275\u0275text(60, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_61_listener() {
          return ctx.sortBy("company");
        });
        \u0275\u0275text(62, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_63_listener() {
          return ctx.sortBy("location");
        });
        \u0275\u0275text(64, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_65_listener() {
          return ctx.sortBy("type");
        });
        \u0275\u0275text(66, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_67_listener() {
          return ctx.sortBy("salary");
        });
        \u0275\u0275text(68, "Salary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_69_listener() {
          return ctx.sortBy("status");
        });
        \u0275\u0275text(70, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_71_listener() {
          return ctx.sortBy("applicants");
        });
        \u0275\u0275text(72, "Applicants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "th", 26);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_th_click_73_listener() {
          return ctx.sortBy("postedDays");
        });
        \u0275\u0275text(74, "Posted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "th");
        \u0275\u0275text(76, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "tbody");
        \u0275\u0275template(78, JobsBrowseComponent_tr_78_Template, 31, 14, "tr", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 28)(80, "div", 29);
        \u0275\u0275text(81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 30)(83, "select", 31);
        \u0275\u0275twoWayListener("ngModelChange", function JobsBrowseComponent_Template_select_ngModelChange_83_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function JobsBrowseComponent_Template_select_change_83_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(84, "option", 32);
        \u0275\u0275text(85, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "option", 32);
        \u0275\u0275text(87, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "option", 32);
        \u0275\u0275text(89, "100 per page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "button", 33);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_button_click_90_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(91, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "span", 34);
        \u0275\u0275template(93, JobsBrowseComponent_button_93_Template, 2, 3, "button", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "button", 33);
        \u0275\u0275listener("click", function JobsBrowseComponent_Template_button_click_94_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(95, "Next");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(96, JobsBrowseComponent_div_96_Template, 40, 23, "div", 36)(97, JobsBrowseComponent_div_97_Template, 13, 1, "div", 36)(98, JobsBrowseComponent_div_98_Template, 13, 3, "div", 36);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.totalJobs, " active positions available");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedClient);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.clients);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPosition);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedLocation);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(32);
        \u0275\u0275property("ngForOf", ctx.paginatedJobs);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.startIndex + 1, " to ", ctx.endIndex, " of ", ctx.totalJobs, " jobs ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.pageNumbers);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showPostModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showViewModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.jobs-browse[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n  transform: translateY(-1px);\n}\n.filters-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.875rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.chip[_ngcontent-%COMP%]:hover, .chip.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n  margin-bottom: 24px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.job-title-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n}\n.skills-inline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #475569;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.full-time[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.contract[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.remote[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 4px;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n}\n.btn-action.secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.btn-action.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-action.danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-action.success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.btn-action.success[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.badge.status-draft[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.badge.status-active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n@media (max-width: 768px) {\n  .jobs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n  border: 1px solid #fecaca;\n}\n.job-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-value.description[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  background: #f8fafc;\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.delete-modal[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.delete-warning[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.delete-warning[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  flex-shrink: 0;\n}\n.delete-warning[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #0f172a;\n}\n.delete-warning[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #dc2626;\n  font-size: 1rem;\n}\n.delete-warning[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   .warning-note[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=jobs-browse.component.css.map */", '\n\n.large-modal[_ngcontent-%COMP%] {\n  max-width: 800px !important;\n}\n.progress-steps[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding: 0 2rem;\n}\n.progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 60%;\n  width: 80%;\n  height: 2px;\n  background: #e2e8f0;\n}\n.progress-steps[_ngcontent-%COMP%]   .step.completed[_ngcontent-%COMP%]::after {\n  background: #0066ff;\n}\n.progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.progress-steps[_ngcontent-%COMP%]   .step.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-weight: 600;\n}\n.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n}\n.step-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.skills-list[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.skills-list[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0369a1;\n  cursor: pointer;\n  font-size: 1.25rem;\n  padding: 0;\n  line-height: 1;\n}\n.skills-list[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.review-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 8px;\n}\n.review-section[_ngcontent-%COMP%]   .review-meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.review-section[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.review-section[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-section[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.review-section[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  margin-top: 1rem;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=jobs-browse-stepper.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobsBrowseComponent, { className: "JobsBrowseComponent" });
})();
export {
  JobsBrowseComponent
};
//# sourceMappingURL=chunk-TFILERP2.js.map
