import {
  QuillEditorComponent,
  QuillModule
} from "./chunk-CWNPWQ7K.js";
import "./chunk-SAOA7EEN.js";
import {
  ApplicationService
} from "./chunk-THEXLMAE.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
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
import "./chunk-LI6IQ5NJ.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/candidate-portal/candidate-jobs.component.ts
function CandidateJobsComponent_div_29_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r2.description);
  }
}
function CandidateJobsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275text(6, "\u2B50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CandidateJobsComponent_div_29_p_16_Template, 2, 1, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 34)(18, "button", 35);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_29_Template_button_click_18_listener() {
      const job_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyToJob(job_r2));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("job-card", ctx_r2.viewMode === "cards")("job-row", ctx_r2.viewMode === "list");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCompanyName(job_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r2.getLocationString(job_r2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r2.getSalaryRange(job_r2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F0 ", ctx_r2.getJobTypeDisplay(job_r2), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode === "cards");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.hasApplied(job_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.hasApplied(job_r2.id) ? "Applied" : "Apply Now", " ");
  }
}
function CandidateJobsComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function CandidateJobsComponent_button_44_Template_button_click_0_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r5 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r5);
  }
}
function CandidateJobsComponent_div_47_div_7_div_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_div_7_div_27_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const i_r10 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeReference(i_r10));
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function CandidateJobsComponent_div_47_div_7_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CandidateJobsComponent_div_47_div_7_div_27_button_4_Template, 2, 0, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "div", 62)(7, "div", 51)(8, "label");
    \u0275\u0275text(9, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_10_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.name, $event) || (ref_r11.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51)(12, "label");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_14_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.email, $event) || (ref_r11.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 62)(16, "div", 51)(17, "label");
    \u0275\u0275text(18, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_19_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.phone, $event) || (ref_r11.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 51)(21, "label");
    \u0275\u0275text(22, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_23_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.relationship, $event) || (ref_r11.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 62)(25, "div", 51)(26, "label");
    \u0275\u0275text(27, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_28_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.company, $event) || (ref_r11.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 51)(30, "label");
    \u0275\u0275text(31, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_div_27_Template_input_ngModelChange_32_listener($event) {
      const ref_r11 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ref_r11.title, $event) || (ref_r11.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ref_r11 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Reference ", i_r10 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.references.length > 1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.relationship);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.company);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ref_r11.title);
  }
}
function CandidateJobsComponent_div_47_div_7_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_div_7_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addReference());
    });
    \u0275\u0275text(1, " + Add Another Reference ");
    \u0275\u0275elementEnd();
  }
}
function CandidateJobsComponent_div_47_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 49)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 50)(14, "h4");
    \u0275\u0275text(15, "Application Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 51)(17, "label", 52);
    \u0275\u0275text(18, "Cover Letter (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "quill-editor", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_div_47_div_7_Template_quill_editor_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.coverLetter, $event) || (ctx_r2.coverLetter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 54);
    \u0275\u0275text(21, "A well-written cover letter can help your application stand out. Use the toolbar to format your text.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 50)(23, "h4");
    \u0275\u0275text(24, "Professional References (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 55);
    \u0275\u0275text(26, "You may provide up to 3 professional references who can speak to your work experience and qualifications. This is optional but recommended.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, CandidateJobsComponent_div_47_div_7_div_27_Template, 33, 8, "div", 56)(28, CandidateJobsComponent_div_47_div_7_button_28_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedJob.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCompanyName(ctx_r2.selectedJob));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r2.getLocationString(ctx_r2.selectedJob), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r2.getSalaryRange(ctx_r2.selectedJob), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F0 ", ctx_r2.getJobTypeDisplay(ctx_r2.selectedJob), "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.coverLetter);
    \u0275\u0275property("modules", ctx_r2.quillModules)("styles", ctx_r2.quillStyles);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.references);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.references.length < 3);
  }
}
function CandidateJobsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeApplicationModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "h2");
    \u0275\u0275text(4, "Apply for Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeApplicationModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidateJobsComponent_div_47_div_7_Template, 29, 10, "div", 42);
    \u0275\u0275elementStart(8, "div", 43)(9, "button", 44);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeApplicationModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 44);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewApplication());
    });
    \u0275\u0275text(12, "Preview Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 45);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_47_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitApplication());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.selectedJob);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.submittingApplication);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submittingApplication ? "Submitting..." : "Submit Application", " ");
  }
}
function CandidateJobsComponent_div_48_div_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 78);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r2.coverLetter, \u0275\u0275sanitizeHtml);
  }
}
function CandidateJobsComponent_div_48_div_7_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "No cover letter provided");
    \u0275\u0275elementEnd();
  }
}
function CandidateJobsComponent_div_48_div_7_div_35_div_4_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ref_r15.phone, "");
  }
}
function CandidateJobsComponent_div_48_div_7_div_35_div_4_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Company:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ref_r15.company, "");
  }
}
function CandidateJobsComponent_div_48_div_7_div_35_div_4_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ref_r15.title, "");
  }
}
function CandidateJobsComponent_div_48_div_7_div_35_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p")(4, "strong");
    \u0275\u0275text(5, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CandidateJobsComponent_div_48_div_7_div_35_div_4_p_11_Template, 4, 1, "p", 82);
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Relationship:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CandidateJobsComponent_div_48_div_7_div_35_div_4_p_16_Template, 4, 1, "p", 82)(17, CandidateJobsComponent_div_48_div_7_div_35_div_4_p_17_Template, 4, 1, "p", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Reference ", i_r16 + 1, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ref_r15.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ref_r15.email, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r15.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ref_r15.relationship, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r15.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r15.title);
  }
}
function CandidateJobsComponent_div_48_div_7_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275template(4, CandidateJobsComponent_div_48_div_7_div_35_div_4_Template, 18, 7, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("References (", ctx_r2.getValidReferencesCount(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getValidReferences());
  }
}
function CandidateJobsComponent_div_48_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 72)(2, "h3");
    \u0275\u0275text(3, "Position Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "p")(6, "strong");
    \u0275\u0275text(7, "Job Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Company:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Salary:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 72)(26, "div", 74)(27, "h3");
    \u0275\u0275text(28, "Cover Letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 75);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_div_7_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editCoverLetter());
    });
    \u0275\u0275text(30, "\u270F\uFE0F Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 73);
    \u0275\u0275template(32, CandidateJobsComponent_div_48_div_7_div_32_Template, 1, 1, "div", 76)(33, CandidateJobsComponent_div_48_div_7_ng_template_33_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, CandidateJobsComponent_div_48_div_7_div_35_Template, 5, 2, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noCoverLetter_r17 = \u0275\u0275reference(34);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedJob.title, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCompanyName(ctx_r2.selectedJob), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getLocationString(ctx_r2.selectedJob), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getSalaryRange(ctx_r2.selectedJob), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getJobTypeDisplay(ctx_r2.selectedJob), "");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.coverLetter.trim())("ngIfElse", noCoverLetter_r17);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.hasValidReferences());
  }
}
function CandidateJobsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePreviewModal());
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "h2");
    \u0275\u0275text(4, "Application Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePreviewModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidateJobsComponent_div_48_div_7_Template, 36, 8, "div", 42);
    \u0275\u0275elementStart(8, "div", 43)(9, "button", 44);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePreviewModal());
    });
    \u0275\u0275text(10, "Back to Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 45);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_48_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitFromPreview());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.selectedJob);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.submittingApplication);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submittingApplication ? "Submitting..." : "Submit Application", " ");
  }
}
function CandidateJobsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "span", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 87);
    \u0275\u0275listener("click", function CandidateJobsComponent_div_49_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeToast());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("toast-" + ctx_r2.toastType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.toastType === "success" ? "\u2713" : ctx_r2.toastType === "error" ? "\u2717" : "\u26A0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toastMessage);
  }
}
var CandidateJobsComponent = class _CandidateJobsComponent {
  constructor(jobService, applicationService, authService) {
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.authService = authService;
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.jobs = [];
    this.totalJobs = 0;
    this.totalPages = 0;
    this.loading = false;
    this.appliedJobIds = /* @__PURE__ */ new Set();
    this.showApplicationModal = false;
    this.selectedJob = null;
    this.coverLetter = "";
    this.submittingApplication = false;
    this.toastMessage = "";
    this.toastType = "";
    this.showToastFlag = false;
    this.showPreviewModal = false;
    this.viewMode = "list";
    this.searchTerm = "";
    this.locationFilter = "all";
    this.typeFilter = "all";
    this.references = [
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" },
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" },
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" }
    ];
    this.clients = [];
    this.quillModules = {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ "list": "ordered" }, { "list": "bullet" }],
        [{ "header": [1, 2, 3, false] }],
        ["clean"]
      ]
    };
    this.quillStyles = {
      height: "200px"
    };
  }
  ngOnInit() {
    this.loadClients();
    this.loadJobs();
    this.loadAppliedJobs();
  }
  loadClients() {
  }
  loadJobs() {
    this.loading = true;
    const page = this.currentPage - 1;
    this.jobService.getPublicActiveJobs(page, this.itemsPerPage).subscribe({
      next: (data) => {
        this.jobs = data.content;
        this.totalJobs = data.totalElements;
        this.totalPages = data.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading jobs:", err);
        this.loading = false;
      }
    });
  }
  getCompanyName(job) {
    if (job.companyName) {
      return job.companyName;
    }
    if (job.description && job.description.includes("Company:")) {
      const match = job.description.match(/Company: ([^\n]+)/);
      if (match)
        return match[1];
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
    return "Location TBD";
  }
  getSalaryRange(job) {
    if (job.salaryMin && job.salaryMax) {
      return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
    }
    if (job.salaryMin) {
      return `$${job.salaryMin.toLocaleString()}+`;
    }
    return "Salary TBD";
  }
  getJobTypeDisplay(job) {
    if (!job.jobType)
      return "Full Time";
    return job.jobType.replace("_", " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs);
  }
  get filteredJobs() {
    let filtered = this.jobs;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((job) => {
        const titleMatch = job.title.toLowerCase().includes(term);
        const descMatch = job.description.toLowerCase().includes(term);
        const companyMatch = this.getCompanyName(job).toLowerCase().includes(term);
        const skillsMatch = [
          "react",
          "angular",
          "vue",
          "javascript",
          "typescript",
          "node",
          "python",
          "java",
          "c#",
          "php",
          "aws",
          "azure",
          "docker",
          "kubernetes",
          "sql",
          "mongodb",
          "postgresql",
          "mysql",
          "frontend",
          "backend",
          "fullstack",
          "devops",
          "ui/ux",
          "design",
          "marketing",
          "sales"
        ].some((skill) => skill.includes(term) && (titleMatch || descMatch));
        const experienceMatch = [
          "junior",
          "senior",
          "lead",
          "principal",
          "manager",
          "director",
          "entry",
          "mid",
          "experienced"
        ].some((level) => level.includes(term) && (titleMatch || descMatch));
        const salaryMatch = this.getSalaryRange(job).toLowerCase().includes(term);
        return titleMatch || descMatch || companyMatch || skillsMatch || experienceMatch || salaryMatch;
      });
    }
    if (this.locationFilter !== "all") {
      filtered = filtered.filter((job) => {
        const location = this.getLocationString(job).toLowerCase();
        if (this.locationFilter === "remote") {
          return location.includes("remote");
        } else if (this.locationFilter === "onsite") {
          return !location.includes("remote");
        }
        return true;
      });
    }
    if (this.typeFilter !== "all") {
      filtered = filtered.filter((job) => job.jobType === this.typeFilter);
    }
    return filtered;
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++)
      pages.push(i);
    return pages;
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
  applyToJob(job) {
    const user = this.authService.getCurrentUserValue();
    if (!user) {
      this.showToast("warning", "Login Required", "Please log in to apply for jobs.");
      return;
    }
    this.selectedJob = job;
    this.coverLetter = "";
    this.showApplicationModal = true;
  }
  closeApplicationModal() {
    this.showApplicationModal = false;
    this.selectedJob = null;
    this.coverLetter = "";
    this.showPreviewModal = false;
    this.references = [
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" },
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" },
      { name: "", email: "", phone: "", relationship: "", company: "", title: "" }
    ];
  }
  addReference() {
    if (this.references.length < 3) {
      this.references.push({ name: "", email: "", phone: "", relationship: "", company: "", title: "" });
    }
  }
  removeReference(index) {
    if (this.references.length > 1) {
      this.references.splice(index, 1);
    }
  }
  submitApplication() {
    if (!this.selectedJob)
      return;
    this.submittingApplication = true;
    const validReferences = this.references.filter((ref) => ref.name && ref.email && ref.relationship);
    const applicationRequest = {
      jobId: this.selectedJob.id,
      coverLetter: this.coverLetter || void 0,
      references: validReferences.length > 0 ? validReferences : void 0
    };
    this.applicationService.submitApplication(applicationRequest).subscribe({
      next: (application) => {
        this.appliedJobIds.add(this.selectedJob.id);
        this.showToast("success", `Successfully applied to: ${this.selectedJob.title}`, "Your application has been submitted!");
        this.closeApplicationModal();
        this.submittingApplication = false;
      },
      error: (err) => {
        console.error("Error submitting application:", err);
        this.showToast("error", "Application Failed", "Failed to submit application. Please try again.");
        this.submittingApplication = false;
      }
    });
  }
  showToast(type, title, message) {
    this.toastType = type;
    this.toastMessage = `${title}: ${message}`;
    this.showToastFlag = true;
    setTimeout(() => {
      this.showToastFlag = false;
    }, 4e3);
  }
  closeToast() {
    this.showToastFlag = false;
  }
  toggleView() {
    this.viewMode = this.viewMode === "cards" ? "list" : "cards";
  }
  onSearchChange() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
    }, 300);
  }
  onFilterChange() {
  }
  loadAppliedJobs() {
    this.applicationService.getMyApplications(0, 1e3).subscribe({
      next: (data) => {
        this.appliedJobIds = new Set(data.content.map((app) => app.jobId));
      },
      error: (err) => {
        console.error("Error loading applied jobs:", err);
      }
    });
  }
  hasApplied(jobId) {
    return this.appliedJobIds.has(jobId);
  }
  previewApplication() {
    this.showPreviewModal = true;
  }
  closePreviewModal() {
    this.showPreviewModal = false;
  }
  editCoverLetter() {
    this.showPreviewModal = false;
  }
  submitFromPreview() {
    this.showPreviewModal = false;
    this.submitApplication();
  }
  hasValidReferences() {
    return this.getValidReferences().length > 0;
  }
  getValidReferences() {
    return this.references.filter((ref) => ref.name && ref.email && ref.relationship);
  }
  getValidReferencesCount() {
    return this.getValidReferences().length;
  }
  static {
    this.\u0275fac = function CandidateJobsComponent_Factory(t) {
      return new (t || _CandidateJobsComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateJobsComponent, selectors: [["app-candidate-jobs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 19, consts: [["noCoverLetter", ""], [1, "candidate-jobs-page"], [1, "page-header"], [1, "header-content"], [1, "header-text"], [1, "filters"], ["type", "text", "placeholder", "Search jobs...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "remote"], ["value", "onsite"], ["value", "FULL_TIME"], ["value", "CONTRACT"], ["value", "PART_TIME"], [1, "view-toggle", 3, "click"], [1, "jobs-container"], ["class", "job-item", 3, "job-card", "job-row", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-left"], [1, "pagination-info"], [1, "items-per-page", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "pagination-controls"], [1, "btn-page", 3, "click", "disabled"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "toast", 3, "class", 4, "ngIf"], [1, "job-item"], [1, "job-content"], [1, "job-header"], [1, "btn-save"], [1, "job-company"], [1, "job-details"], ["class", "job-description", 4, "ngIf"], [1, "job-actions"], [1, "btn-apply", 3, "click", "disabled"], [1, "job-description"], [1, "btn-page", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "modal-body"], [1, "job-summary"], [1, "company"], [1, "job-meta"], [1, "form-section"], [1, "form-group"], ["for", "coverLetter"], ["placeholder", "Tell us why you're interested in this position and what makes you a great fit...", 3, "ngModelChange", "ngModel", "modules", "styles"], [1, "help-text"], [1, "section-description"], ["class", "reference-item", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn-add-reference", 3, "click", 4, "ngIf"], [1, "reference-item"], [1, "reference-header"], ["type", "button", "class", "btn-remove", 3, "click", 4, "ngIf"], [1, "reference-form"], [1, "form-row"], ["type", "text", "placeholder", "John Smith", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "john@company.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "(555) 123-4567", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Manager, Colleague, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Company Name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Job Title", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-remove", 3, "click"], ["type", "button", 1, "btn-add-reference", 3, "click"], [1, "modal", "preview-modal", 3, "click"], [1, "preview-section"], [1, "preview-content"], [1, "section-header"], [1, "btn-edit", 3, "click"], ["class", "cover-letter-preview", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["class", "preview-section", 4, "ngIf"], [1, "cover-letter-preview", 3, "innerHTML"], [1, "no-content"], ["class", "reference-preview", 4, "ngFor", "ngForOf"], [1, "reference-preview"], [4, "ngIf"], [1, "toast"], [1, "toast-content"], [1, "toast-icon"], [1, "toast-message"], [1, "toast-close", 3, "click"]], template: function CandidateJobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
        \u0275\u0275text(5, "Job Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Find your next opportunity");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function CandidateJobsComponent_Template_input_input_9_listener() {
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.locationFilter, $event) || (ctx.locationFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidateJobsComponent_Template_select_change_10_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(11, "option", 8);
        \u0275\u0275text(12, "All Locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Remote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 10);
        \u0275\u0275text(16, "On-site");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_Template_select_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.typeFilter, $event) || (ctx.typeFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidateJobsComponent_Template_select_change_17_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(18, "option", 8);
        \u0275\u0275text(19, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Full-time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 12);
        \u0275\u0275text(23, "Contract");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 13);
        \u0275\u0275text(25, "Part-time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 14);
        \u0275\u0275listener("click", function CandidateJobsComponent_Template_button_click_26_listener() {
          return ctx.toggleView();
        });
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15);
        \u0275\u0275template(29, CandidateJobsComponent_div_29_Template, 20, 12, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "div", 19);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateJobsComponent_Template_select_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidateJobsComponent_Template_select_change_34_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(35, "option", 21);
        \u0275\u0275text(36, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 21);
        \u0275\u0275text(38, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 21);
        \u0275\u0275text(40, "100 per page");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 22)(42, "button", 23);
        \u0275\u0275listener("click", function CandidateJobsComponent_Template_button_click_42_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(43, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, CandidateJobsComponent_button_44_Template, 2, 3, "button", 24);
        \u0275\u0275elementStart(45, "button", 23);
        \u0275\u0275listener("click", function CandidateJobsComponent_Template_button_click_45_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(46, "Next");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(47, CandidateJobsComponent_div_47_Template, 15, 3, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, CandidateJobsComponent_div_48_Template, 13, 3, "div", 25)(49, CandidateJobsComponent_div_49_Template, 8, 4, "div", 26);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.locationFilter);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.typeFilter);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.viewMode === "cards" ? "\u{1F4CB} List View" : "\u{1F532} Card View", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("list-view", ctx.viewMode === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredJobs);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("Showing ", ctx.filteredJobs.length, " of ", ctx.totalJobs, " jobs");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pageNumbers);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showApplicationModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPreviewModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showToastFlag);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, QuillModule, QuillEditorComponent], styles: ["\n\n.candidate-jobs-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.search-input[_ngcontent-%COMP%], .filter-select[_ngcontent-%COMP%], .view-toggle[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  background: white;\n  cursor: pointer;\n  font-weight: 600;\n}\n.view-toggle[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.jobs-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.jobs-container[_ngcontent-%COMP%]:not(.list-view) {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.jobs-container.list-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.job-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.job-row[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.job-row[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-row[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.job-row[_ngcontent-%COMP%]   .job-company[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.job-row[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.job-row[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  margin-bottom: 0.5rem;\n}\n.job-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.job-company[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  margin-bottom: 0.75rem;\n}\n.job-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 1rem;\n}\n.job-description[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.job-card[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.job-row[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%] {\n  width: auto;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.items-per-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: white;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.btn-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.preview-modal[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.preview-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.preview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 12px 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0066ff;\n  border: 1px solid #e2e8f0;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.preview-content[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.preview-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #0f172a;\n}\n.preview-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cover-letter-preview[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  line-height: 1.6;\n  color: #0f172a;\n}\n.no-content[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-style: italic;\n}\n.reference-preview[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  border: 1px solid #e2e8f0;\n}\n.reference-preview[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reference-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0066ff;\n  margin: 0 0 8px 0;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.job-summary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  border: 1px solid #e2e8f0;\n}\n.job-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 8px 0;\n}\n.job-summary[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 12px 0;\n}\n.job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 0.875rem;\n  color: #64748b;\n  flex-wrap: wrap;\n}\n.form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 16px 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n  .ql-editor {\n  min-height: 150px;\n  font-family: inherit;\n}\n  .ql-toolbar {\n  border-top: 1px solid #e2e8f0;\n  border-left: 1px solid #e2e8f0;\n  border-right: 1px solid #e2e8f0;\n}\n  .ql-container {\n  border-bottom: 1px solid #e2e8f0;\n  border-left: 1px solid #e2e8f0;\n  border-right: 1px solid #e2e8f0;\n  border-radius: 0 0 8px 8px;\n}\n  .ql-toolbar {\n  border-radius: 8px 8px 0 0;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.help-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: #94a3b8;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.section-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n}\n.reference-item[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n  background: #f8fafc;\n}\n.reference-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.reference-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.btn-add-reference[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0066ff;\n  border: 2px dashed #0066ff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n}\n.btn-add-reference[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  min-width: 300px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  border-left: 4px solid #28a745;\n  color: #155724;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  border-left: 4px solid #dc3545;\n  color: #721c24;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border-left: 4px solid #ffc107;\n  color: #856404;\n}\n.toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .notification-dropdown[_ngcontent-%COMP%] {\n    right: -20px;\n    width: 280px;\n  }\n}\n/*# sourceMappingURL=candidate-jobs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateJobsComponent, { className: "CandidateJobsComponent" });
})();
export {
  CandidateJobsComponent
};
//# sourceMappingURL=chunk-C2IXSAGI.js.map
