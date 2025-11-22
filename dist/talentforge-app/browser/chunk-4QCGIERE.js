import {
  EmailService
} from "./chunk-3OPJ2QOJ.js";
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
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/features/candidates/candidates-search.component.ts
function CandidatesSearchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("success", ctx_r0.notification.type === "success")("error", ctx_r0.notification.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.notification.message, " ");
  }
}
function CandidatesSearchComponent_tr_75_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r4);
  }
}
function CandidatesSearchComponent_tr_75_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", candidate_r3.skills.length - 2, "");
  }
}
function CandidatesSearchComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("click", function CandidatesSearchComponent_tr_75_Template_tr_click_0_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewCandidate(candidate_r3.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 42);
    \u0275\u0275template(20, CandidatesSearchComponent_tr_75_span_20_Template, 2, 1, "span", 43)(21, CandidatesSearchComponent_tr_75_span_21_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 45)(24, "button", 46);
    \u0275\u0275listener("click", function CandidatesSearchComponent_tr_75_Template_button_click_24_listener($event) {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.viewCandidate(candidate_r3.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(25, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 47);
    \u0275\u0275listener("click", function CandidatesSearchComponent_tr_75_Template_button_click_26_listener($event) {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.contactCandidate(candidate_r3.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(27, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 48);
    \u0275\u0275listener("click", function CandidatesSearchComponent_tr_75_Template_button_click_28_listener($event) {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.addToJob(candidate_r3.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(29, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 49);
    \u0275\u0275listener("click", function CandidatesSearchComponent_tr_75_Template_button_click_30_listener($event) {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.downloadResume(candidate_r3.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(31, "\u{1F4C4}");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const candidate_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(candidate_r3.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", candidate_r3.experience, " years");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.salary);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(candidate_r3.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(candidate_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", candidate_r3.skills.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", candidate_r3.skills.length > 2);
  }
}
function CandidatesSearchComponent_button_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function CandidatesSearchComponent_button_90_Template_button_click_0_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(page_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r6 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r6);
  }
}
function CandidatesSearchComponent_div_93_div_7_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r9);
  }
}
function CandidatesSearchComponent_div_93_div_7_a_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 77);
    \u0275\u0275text(1, "\u{1F441}\uFE0F Preview Resume");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r0.selectedCandidate.resumeUrl, \u0275\u0275sanitizeUrl);
  }
}
function CandidatesSearchComponent_div_93_div_7_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "p", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 80);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r10.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 3, note_r10.createdAt, "short"), " by ", note_r10.createdBy || "You", "");
  }
}
function CandidatesSearchComponent_div_93_div_7_p_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, "No notes yet");
    \u0275\u0275elementEnd();
  }
}
function CandidatesSearchComponent_div_93_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 64)(13, "h4");
    \u0275\u0275text(14, "\u{1F4CD} Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 65)(16, "span", 66);
    \u0275\u0275text(17, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 67);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 65)(21, "span", 66);
    \u0275\u0275text(22, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 67);
    \u0275\u0275text(24, "+1 (555) 123-4567");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 65)(26, "span", 66);
    \u0275\u0275text(27, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 67);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 64)(31, "h4");
    \u0275\u0275text(32, "\u{1F4BC} Professional Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 65)(34, "span", 66);
    \u0275\u0275text(35, "Experience:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 67);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 65)(39, "span", 66);
    \u0275\u0275text(40, "Salary Expectation:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 67);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 65)(44, "span", 66);
    \u0275\u0275text(45, "Availability:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 67);
    \u0275\u0275text(47, "Immediate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 64)(49, "h4");
    \u0275\u0275text(50, "\u{1F6E0}\uFE0F Skills & Expertise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 68);
    \u0275\u0275template(52, CandidatesSearchComponent_div_93_div_7_span_52_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 64)(54, "h4");
    \u0275\u0275text(55, "\u{1F4C4} Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 69);
    \u0275\u0275template(57, CandidatesSearchComponent_div_93_div_7_a_57_Template, 2, 1, "a", 70);
    \u0275\u0275elementStart(58, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_div_7_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadResume(ctx_r0.selectedCandidate.id));
    });
    \u0275\u0275text(59, "\u{1F4E5} Download Resume");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 64)(61, "h4");
    \u0275\u0275text(62, "\u{1F4DD} Recruiter Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 71);
    \u0275\u0275template(64, CandidatesSearchComponent_div_93_div_7_div_64_Template, 6, 6, "div", 72)(65, CandidatesSearchComponent_div_93_div_7_p_65_Template, 2, 0, "p", 73);
    \u0275\u0275elementStart(66, "div", 74)(67, "textarea", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_93_div_7_Template_textarea_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.candidateNotes, $event) || (ctx_r0.candidateNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 76);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_div_7_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addCandidateNote());
    });
    \u0275\u0275text(69, "Add Note");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.role);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.selectedCandidate.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Last active ", ctx_r0.selectedCandidate.lastActive, " days ago");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCandidate.name.toLowerCase().split(" ").join("."), "@example.com");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.location);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCandidate.experience, " years");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.salary);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.selectedCandidate.skills);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.selectedCandidate.resumeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.candidateNotesList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.candidateNotesList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidateNotes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.candidateNotes.trim());
  }
}
function CandidatesSearchComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeViewModal());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Candidate Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeViewModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidatesSearchComponent_div_93_div_7_Template, 70, 17, "div", 56);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeViewModal());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_93_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.closeViewModal();
      return \u0275\u0275resetView(ctx_r0.contactCandidate(ctx_r0.selectedCandidate.id));
    });
    \u0275\u0275text(12, "\u2709\uFE0F Send Email");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.selectedCandidate);
  }
}
function CandidatesSearchComponent_div_94_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "p");
    \u0275\u0275text(2, "Send email to ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "label");
    \u0275\u0275text(7, "Email Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_94_div_7_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailTemplate, $event) || (ctx_r0.emailTemplate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CandidatesSearchComponent_div_94_div_7_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTemplateChange());
    });
    \u0275\u0275elementStart(9, "option", 85);
    \u0275\u0275text(10, "Custom Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 86);
    \u0275\u0275text(12, "Interview Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 87);
    \u0275\u0275text(14, "Rejection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 88);
    \u0275\u0275text(16, "Follow-up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 89);
    \u0275\u0275text(18, "Job Offer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 83)(20, "label");
    \u0275\u0275text(21, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_94_div_7_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailSubject, $event) || (ctx_r0.emailSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 83)(24, "label");
    \u0275\u0275text(25, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 91);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_94_div_7_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailMessage, $event) || (ctx_r0.emailMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailTemplate);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailSubject);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("placeholder", "Hi ", ctx_r0.selectedCandidate.name, ", I have an exciting opportunity...");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailMessage);
  }
}
function CandidatesSearchComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_94_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeContactModal());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_94_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Contact Candidate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_94_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeContactModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidatesSearchComponent_div_94_div_7_Template, 27, 6, "div", 56);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_94_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeContactModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 82);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_94_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendEmail());
    });
    \u0275\u0275text(12, "Send Email");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.selectedCandidate);
  }
}
function CandidatesSearchComponent_div_95_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "p");
    \u0275\u0275text(2, "Schedule interview with ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "label");
    \u0275\u0275text(7, "Interview Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_95_div_7_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.interviewType, $event) || (ctx_r0.interviewType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 94);
    \u0275\u0275text(10, "Phone Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 95);
    \u0275\u0275text(12, "Video Interview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 96);
    \u0275\u0275text(14, "On-site Interview");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 83)(16, "label");
    \u0275\u0275text(17, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_95_div_7_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.interviewDateTime, $event) || (ctx_r0.interviewDateTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 83)(20, "label");
    \u0275\u0275text(21, "Meeting Link (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_95_div_7_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.interviewMeetingLink, $event) || (ctx_r0.interviewMeetingLink = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.interviewType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.interviewDateTime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.interviewMeetingLink);
  }
}
function CandidatesSearchComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_95_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_95_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Schedule Interview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_95_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidatesSearchComponent_div_95_div_7_Template, 23, 4, "div", 56);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_95_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 92);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_95_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createInterview());
    });
    \u0275\u0275text(12, "Schedule");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.selectedCandidate);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.interviewDateTime);
  }
}
function CandidatesSearchComponent_div_96_div_7_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r17 = ctx.$implicit;
    \u0275\u0275property("value", job_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", job_r17.title, " - ", job_r17.clientName || "Internal", "");
  }
}
function CandidatesSearchComponent_div_96_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "p");
    \u0275\u0275text(2, "Add ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " to a job opening");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83)(7, "label");
    \u0275\u0275text(8, "Select Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_96_div_7_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedJobId, $event) || (ctx_r0.selectedJobId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 99);
    \u0275\u0275text(11, "-- Select a job --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CandidatesSearchComponent_div_96_div_7_option_12_Template, 2, 3, "option", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83)(14, "label");
    \u0275\u0275text(15, "Notes (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_96_div_7_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.applicationNotes, $event) || (ctx_r0.applicationNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedJobId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.availableJobs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.applicationNotes);
  }
}
function CandidatesSearchComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_96_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddToJobModal());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_96_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Add to Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_96_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddToJobModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidatesSearchComponent_div_96_div_7_Template, 17, 4, "div", 56);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_96_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddToJobModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 92);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_96_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitApplication());
    });
    \u0275\u0275text(12, "Add to Job");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.selectedCandidate);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.selectedJobId);
  }
}
function CandidatesSearchComponent_div_97_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 110);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function CandidatesSearchComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_97_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddModal());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_97_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Add Candidate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_97_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 59)(8, "div", 83)(9, "label");
    \u0275\u0275text(10, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_97_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.candidateName, $event) || (ctx_r0.candidateName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 83)(13, "label");
    \u0275\u0275text(14, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_97_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.candidateEmail, $event) || (ctx_r0.candidateEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CandidatesSearchComponent_div_97_Template_input_blur_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEmailBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CandidatesSearchComponent_div_97_p_16_Template, 2, 0, "p", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 83)(18, "label");
    \u0275\u0275text(19, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_97_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.candidatePhone, $event) || (ctx_r0.candidatePhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 83)(22, "label");
    \u0275\u0275text(23, "Position/Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_97_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.candidatePosition, $event) || (ctx_r0.candidatePosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 83)(26, "label");
    \u0275\u0275text(27, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_div_97_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.candidateSkills, $event) || (ctx_r0.candidateSkills = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 108);
    \u0275\u0275text(30, "Comma-separated list of skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 83)(32, "label");
    \u0275\u0275text(33, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 109);
    \u0275\u0275listener("change", function CandidatesSearchComponent_div_97_Template_input_change_34_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 108);
    \u0275\u0275text(36, "PDF, DOC, or DOCX format");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 57)(38, "button", 58);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_97_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddModal());
    });
    \u0275\u0275text(39, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 92);
    \u0275\u0275listener("click", function CandidatesSearchComponent_div_97_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addCandidate());
    });
    \u0275\u0275text(41, "Add Candidate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidateName);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r0.emailTouched && !ctx_r0.isValidEmail());
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidateEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailTouched && !ctx_r0.isValidEmail());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidatePhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidatePosition);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.candidateSkills);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", !ctx_r0.candidateName || !ctx_r0.isValidEmail());
  }
}
var CandidatesSearchComponent = class _CandidatesSearchComponent {
  constructor(http, emailService) {
    this.http = http;
    this.emailService = emailService;
    this.showAddModal = false;
    this.candidateName = "";
    this.candidateEmail = "";
    this.candidatePhone = "";
    this.candidatePosition = "";
    this.candidateSkills = "";
    this.candidateResume = null;
    this.emailTouched = false;
    this.candidates = [];
    this.searchQuery = "";
    this.selectedPosition = "all";
    this.selectedLocation = "all";
    this.selectedExperience = "all";
    this.selectedStatus = "all";
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.showViewModal = false;
    this.showContactModal = false;
    this.showScheduleModal = false;
    this.showAddToJobModal = false;
    this.selectedCandidate = null;
    this.notification = { show: false, message: "", type: "success" };
    this.emailSubject = "";
    this.emailMessage = "";
    this.emailTemplate = "custom";
    this.interviewType = "PHONE";
    this.interviewDateTime = "";
    this.interviewMeetingLink = "";
    this.selectedJobId = "";
    this.applicationNotes = "";
    this.availableJobs = [];
    this.candidateNotes = "";
    this.candidateNotesList = [];
    this.emailTemplates = {
      interview: {
        subject: "Interview Invitation",
        body: "Hi [NAME],\n\nWe are impressed with your profile and would like to invite you for an interview.\n\nBest regards"
      },
      rejection: {
        subject: "Application Update",
        body: "Hi [NAME],\n\nThank you for your interest. Unfortunately, we have decided to move forward with other candidates.\n\nBest regards"
      },
      followup: {
        subject: "Following Up",
        body: "Hi [NAME],\n\nI wanted to follow up on our previous conversation regarding the opportunity.\n\nBest regards"
      },
      offer: {
        subject: "Job Offer",
        body: "Hi [NAME],\n\nCongratulations! We are pleased to extend you an offer for the position.\n\nBest regards"
      }
    };
  }
  ngOnInit() {
    this.availableJobs = [];
    this.loadCandidates();
  }
  loadCandidates() {
    this.http.get("/api/candidates").subscribe({
      next: (response) => {
        console.log("Loaded candidates from API:", response);
        this.candidates = (response.content || response).map((candidate) => {
          console.log("Mapping candidate:", candidate.id, candidate.userId, candidate.resumeUrl);
          return {
            id: candidate.userId,
            name: `${candidate.firstName || ""} ${candidate.lastName || ""}`.trim() || "Unknown",
            initials: `${(candidate.firstName || "U")[0]}${(candidate.lastName || "N")[0]}`,
            role: "Candidate",
            location: candidate.location || "N/A",
            experience: candidate.experience || 0,
            salary: candidate.expectedSalary || "N/A",
            status: "Available",
            skills: candidate.skills || [],
            lastActive: Math.floor(Math.random() * 30),
            resumeUrl: candidate.resumeUrl
          };
        });
        console.log("Final candidates array:", this.candidates);
      },
      error: (err) => {
        console.error("Failed to load candidates:", err);
        this.candidates = [];
      }
    });
  }
  get filteredCandidates() {
    return this.candidates.filter((candidate) => {
      const matchesSearch = candidate.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || candidate.skills.some((s) => s.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const matchesPosition = this.selectedPosition === "all" || candidate.role === this.selectedPosition;
      const matchesLocation = this.selectedLocation === "all" || candidate.location.toLowerCase().includes(this.selectedLocation.toLowerCase());
      const matchesExperience = this.selectedExperience === "all" || this.checkExperience(candidate.experience);
      const matchesStatus = this.selectedStatus === "all" || candidate.status === this.selectedStatus;
      return matchesSearch && matchesPosition && matchesLocation && matchesExperience && matchesStatus;
    });
  }
  checkExperience(exp) {
    if (this.selectedExperience === "0-2")
      return exp >= 0 && exp <= 2;
    if (this.selectedExperience === "3-5")
      return exp >= 3 && exp <= 5;
    if (this.selectedExperience === "6-10")
      return exp >= 6 && exp <= 10;
    if (this.selectedExperience === "10+")
      return exp > 10;
    return true;
  }
  get totalCandidates() {
    return this.filteredCandidates.length;
  }
  get totalPages() {
    return Math.ceil(this.totalCandidates / this.itemsPerPage);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalCandidates);
  }
  get paginatedCandidates() {
    return this.filteredCandidates.slice(this.startIndex, this.endIndex);
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  goToPage(page) {
    this.currentPage = page;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
  }
  onFilterChange() {
    this.currentPage = 1;
  }
  viewCandidate(id) {
    this.selectedCandidate = this.candidates.find((c) => c.id === id);
    if (this.selectedCandidate) {
      this.loadCandidateNotes(id);
      this.showViewModal = true;
    }
  }
  loadCandidateNotes(candidateId) {
    this.http.get(`/api/candidates/${candidateId}/notes`).subscribe({
      next: (notes) => {
        this.candidateNotesList = notes;
      },
      error: (err) => {
        console.error("Failed to load notes:", err);
        this.candidateNotesList = [];
      }
    });
  }
  addCandidateNote() {
    if (!this.candidateNotes.trim() || !this.selectedCandidate)
      return;
    this.http.post(`/api/candidates/${this.selectedCandidate.id}/notes`, { note: this.candidateNotes }).subscribe({
      next: () => {
        this.showNotification("Note added successfully", "success");
        this.candidateNotes = "";
        this.loadCandidateNotes(this.selectedCandidate.id);
      },
      error: (err) => {
        console.error("Failed to add note:", err);
        this.showNotification("Failed to add note", "error");
      }
    });
  }
  closeViewModal() {
    this.showViewModal = false;
  }
  contactCandidate(id) {
    this.selectedCandidate = this.candidates.find((c) => c.id === id);
    if (this.selectedCandidate) {
      this.emailTemplate = "custom";
      this.emailSubject = "Job Opportunity";
      this.emailMessage = `Hi ${this.selectedCandidate.name},

I have an exciting opportunity that matches your profile...`;
      this.showContactModal = true;
      console.log("Contact modal opened:", this.showContactModal);
    }
  }
  onTemplateChange() {
    if (this.emailTemplate === "custom" || !this.selectedCandidate)
      return;
    const template = this.emailTemplates[this.emailTemplate];
    this.emailSubject = template.subject;
    this.emailMessage = template.body.replace("[NAME]", this.selectedCandidate.name);
  }
  sendEmail() {
    if (!this.selectedCandidate || !this.emailSubject || !this.emailMessage) {
      this.showNotification("Please fill in all required fields", "error");
      return;
    }
    const candidateEmail = `${this.selectedCandidate.name.toLowerCase().split(" ").join(".")}@example.com`;
    console.log("Sending email to:", candidateEmail);
    this.emailService.sendCandidateEmail(candidateEmail, this.selectedCandidate.name, this.emailSubject, this.emailMessage).subscribe({
      next: (response) => {
        console.log("Email sent successfully:", response);
        this.showNotification("Email sent successfully!", "success");
        this.closeContactModal();
      },
      error: (err) => {
        console.error("Failed to send email:", err);
        alert(`Failed to send email: ${err.error?.message || err.message || "Unknown error"}`);
      }
    });
  }
  closeContactModal() {
    console.log("Closing contact modal");
    this.showContactModal = false;
    this.selectedCandidate = null;
  }
  scheduleInterview(id) {
    this.selectedCandidate = this.candidates.find((c) => c.id === id);
    if (this.selectedCandidate) {
      this.interviewType = "PHONE";
      this.interviewDateTime = "";
      this.interviewMeetingLink = "";
      this.showScheduleModal = true;
    }
  }
  createInterview() {
    if (!this.selectedCandidate || !this.interviewDateTime)
      return;
    const interviewData = {
      applicationId: null,
      interviewType: this.interviewType,
      scheduledAt: this.interviewDateTime,
      meetingLink: this.interviewMeetingLink || null,
      notes: `Interview with ${this.selectedCandidate.name}`
    };
    console.log("Sending interview request:", interviewData);
    this.http.post("/api/interviews", interviewData).subscribe({
      next: () => {
        this.showNotification("Interview scheduled successfully!", "success");
        this.closeScheduleModal();
      },
      error: (err) => {
        console.error("Interview error:", err);
        console.error("Status:", err.status, "Message:", err.message);
        const msg = err.status === 403 ? "Permission denied - check user role" : "Failed to schedule interview";
        this.showNotification(msg, "error");
      }
    });
  }
  closeScheduleModal() {
    this.showScheduleModal = false;
    this.selectedCandidate = null;
  }
  addToJob(id) {
    this.selectedCandidate = this.candidates.find((c) => c.id === id);
    if (this.selectedCandidate) {
      this.loadAvailableJobs();
      this.selectedJobId = "";
      this.applicationNotes = "";
      this.showAddToJobModal = true;
    }
  }
  loadAvailableJobs() {
    this.http.get("/api/jobs?status=ACTIVE").subscribe({
      next: (response) => {
        this.availableJobs = response.content || response;
      },
      error: (err) => {
        console.error("Failed to load jobs:", err);
        this.availableJobs = [];
      }
    });
  }
  submitApplication() {
    if (!this.selectedCandidate || !this.selectedJobId)
      return;
    const applicationData = {
      jobId: this.selectedJobId,
      candidateId: this.selectedCandidate.id,
      candidateName: this.selectedCandidate.name,
      candidateEmail: `${this.selectedCandidate.name.toLowerCase().split(" ").join(".")}@example.com`,
      notes: this.applicationNotes,
      status: "APPLIED"
    };
    console.log("=== SUBMITTING APPLICATION ===");
    console.log("Selected Candidate ID:", this.selectedCandidate.id);
    console.log("Selected Candidate Name:", this.selectedCandidate.name);
    console.log("Selected Job ID:", this.selectedJobId);
    console.log("Application Data:", JSON.stringify(applicationData, null, 2));
    console.log("============================");
    this.http.post("/api/applications", applicationData).subscribe({
      next: () => {
        this.showNotification("Candidate added to job successfully!", "success");
        this.closeAddToJobModal();
      },
      error: (err) => {
        console.error("Failed to add candidate to job:", err);
        let message = err.error?.message || "Failed to add candidate to job";
        if (message.includes("already exists")) {
          message = "Candidate has already applied to this job";
        }
        this.showNotification(message, "error");
      }
    });
  }
  closeAddToJobModal() {
    this.showAddToJobModal = false;
    this.selectedCandidate = null;
  }
  downloadResume(id) {
    const candidate = this.candidates.find((c) => c.id === id);
    if (candidate?.resumeUrl) {
      const link = document.createElement("a");
      link.href = candidate.resumeUrl;
      link.download = `${candidate.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      this.showNotification("Resume not available", "error");
    }
  }
  openAddModal() {
    this.showAddModal = true;
    this.candidateName = "";
    this.candidateEmail = "";
    this.candidatePhone = "";
    this.candidatePosition = "";
    this.candidateSkills = "";
    this.candidateResume = null;
    this.emailTouched = false;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.candidateEmail);
  }
  onEmailBlur() {
    this.emailTouched = true;
  }
  onFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      this.candidateResume = file;
    }
  }
  addCandidate() {
    if (this.candidateName && this.isValidEmail()) {
      console.log("Adding candidate:", {
        name: this.candidateName,
        email: this.candidateEmail,
        phone: this.candidatePhone,
        position: this.candidatePosition,
        skills: this.candidateSkills,
        resume: this.candidateResume?.name
      });
      this.closeAddModal();
    }
  }
  showNotification(message, type) {
    this.notification = { show: true, message, type };
    setTimeout(() => {
      this.notification.show = false;
    }, 3e3);
  }
  static {
    this.\u0275fac = function CandidatesSearchComponent_Factory(t) {
      return new (t || _CandidatesSearchComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(EmailService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidatesSearchComponent, selectors: [["app-candidates-search"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 98, vars: 23, consts: [[1, "candidates-search"], ["class", "notification", 3, "success", "error", 4, "ngIf"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "search-section"], [1, "search-bar"], [1, "icon"], ["type", "text", "placeholder", "Search by name, skills, or experience...", 3, "ngModelChange", "ngModel"], [1, "filters"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "Developer"], ["value", "Manager"], ["value", "Designer"], ["value", "San Francisco"], ["value", "New York"], ["value", "Remote"], ["value", "0-2"], ["value", "3-5"], ["value", "6-10"], ["value", "10+"], ["value", "Available"], ["value", "Interviewing"], ["value", "Placed"], [1, "table-container"], [1, "data-table"], [3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-numbers"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "notification"], [3, "click"], [1, "name-cell"], [1, "avatar"], [1, "badge"], [1, "skills-inline"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], ["class", "skill-tag more", 4, "ngIf"], [1, "action-buttons"], ["title", "View Profile", 1, "btn-action", 3, "click"], ["title", "Send Email", 1, "btn-action", 3, "click"], ["title", "Add to Job", 1, "btn-action", 3, "click"], ["title", "Download Resume", 1, "btn-action", 3, "click"], [1, "skill-tag"], [1, "skill-tag", "more"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "modal-body"], [1, "profile-section"], [1, "avatar-large"], [1, "role"], [1, "last-active"], [1, "info-section"], [1, "info-row"], [1, "label"], [1, "value"], [1, "skills-grid"], [1, "resume-actions"], ["target", "_blank", "class", "btn-secondary", 3, "href", 4, "ngIf"], [1, "notes-section"], ["class", "note-item", 4, "ngFor", "ngForOf"], ["class", "no-notes", 4, "ngIf"], [1, "add-note"], ["rows", "2", "placeholder", "Add a note about this candidate...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"], ["target", "_blank", 1, "btn-secondary", 3, "href"], [1, "note-item"], [1, "note-text"], [1, "note-meta"], [1, "no-notes"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "custom"], ["value", "interview"], ["value", "rejection"], ["value", "followup"], ["value", "offer"], ["type", "text", "placeholder", "Job Opportunity", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "btn-primary", 3, "click", "disabled"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "PHONE"], ["value", "VIDEO"], ["value", "ONSITE"], ["type", "datetime-local", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://zoom.us/j/...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "3", "placeholder", "Add any notes about this candidate...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "John Doe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "john@example.com", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], ["class", "error-text", 4, "ngIf"], ["type", "tel", "placeholder", "(555) 123-4567", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Senior Software Engineer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "React, Node.js, TypeScript", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "help-text"], ["type", "file", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change"], [1, "error-text"]], template: function CandidatesSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CandidatesSearchComponent_div_1_Template, 2, 5, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Candidate Database");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function CandidatesSearchComponent_Template_button_click_8_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275text(9, "+ Add Candidate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "span", 7);
        \u0275\u0275text(13, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPosition, $event) || (ctx.selectedPosition = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidatesSearchComponent_Template_select_change_16_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18, "All Positions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 12);
        \u0275\u0275text(20, "Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 13);
        \u0275\u0275text(22, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 14);
        \u0275\u0275text(24, "Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedLocation, $event) || (ctx.selectedLocation = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidatesSearchComponent_Template_select_change_25_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(26, "option", 11);
        \u0275\u0275text(27, "All Locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 15);
        \u0275\u0275text(29, "San Francisco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 16);
        \u0275\u0275text(31, "New York");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 17);
        \u0275\u0275text(33, "Remote");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_select_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedExperience, $event) || (ctx.selectedExperience = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidatesSearchComponent_Template_select_change_34_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(35, "option", 11);
        \u0275\u0275text(36, "All Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 18);
        \u0275\u0275text(38, "0-2 years");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 19);
        \u0275\u0275text(40, "3-5 years");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 20);
        \u0275\u0275text(42, "6-10 years");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "option", 21);
        \u0275\u0275text(44, "10+ years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_select_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidatesSearchComponent_Template_select_change_45_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(46, "option", 11);
        \u0275\u0275text(47, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option", 22);
        \u0275\u0275text(49, "Available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "option", 23);
        \u0275\u0275text(51, "Interviewing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "option", 24);
        \u0275\u0275text(53, "Placed");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 25)(55, "table", 26)(56, "thead")(57, "tr")(58, "th");
        \u0275\u0275text(59, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th");
        \u0275\u0275text(67, "Salary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "th");
        \u0275\u0275text(69, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "th");
        \u0275\u0275text(71, "Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th");
        \u0275\u0275text(73, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "tbody");
        \u0275\u0275template(75, CandidatesSearchComponent_tr_75_Template, 32, 11, "tr", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 28)(77, "div", 29);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 30)(80, "select", 31);
        \u0275\u0275twoWayListener("ngModelChange", function CandidatesSearchComponent_Template_select_ngModelChange_80_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidatesSearchComponent_Template_select_change_80_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(81, "option", 32);
        \u0275\u0275text(82, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "option", 32);
        \u0275\u0275text(84, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "option", 32);
        \u0275\u0275text(86, "100 per page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "button", 33);
        \u0275\u0275listener("click", function CandidatesSearchComponent_Template_button_click_87_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(88, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span", 34);
        \u0275\u0275template(90, CandidatesSearchComponent_button_90_Template, 2, 3, "button", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 33);
        \u0275\u0275listener("click", function CandidatesSearchComponent_Template_button_click_91_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(92, "Next");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(93, CandidatesSearchComponent_div_93_Template, 13, 1, "div", 36)(94, CandidatesSearchComponent_div_94_Template, 13, 1, "div", 36)(95, CandidatesSearchComponent_div_95_Template, 13, 2, "div", 36)(96, CandidatesSearchComponent_div_96_Template, 13, 2, "div", 36)(97, CandidatesSearchComponent_div_97_Template, 42, 9, "div", 36);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notification.show);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.totalCandidates, " candidates in database");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPosition);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedLocation);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedExperience);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(30);
        \u0275\u0275property("ngForOf", ctx.paginatedCandidates);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.startIndex + 1, " to ", ctx.endIndex, " of ", ctx.totalCandidates, " candidates ");
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
        \u0275\u0275property("ngIf", ctx.showViewModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showContactModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showScheduleModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddToJobModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.candidates-search[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  pointer-events: all;\n  position: relative;\n  z-index: 1;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.875rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n  margin-bottom: 24px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.name-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.skills-inline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #475569;\n}\n.skill-tag.more[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.available[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.interviewing[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.placed[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n  transform: translateY(-1px);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1001;\n  pointer-events: all;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n  position: relative;\n  z-index: 10;\n  pointer-events: all;\n}\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.profile-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 20px;\n}\n.profile-section[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 12px;\n}\n.profile-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n}\n.profile-section[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.info-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 12px;\n}\n.info-section[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-section[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-section[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.info-section[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.875rem;\n  text-align: right;\n}\n.info-section[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.resume-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.resume-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .resume-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.last-active[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n  margin-top: 8px;\n}\n.notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 16px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.notification.success[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.notification.error[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.notes-section[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  border-left: 3px solid #0066ff;\n}\n.notes-section[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-text[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #0f172a;\n  font-size: 0.875rem;\n}\n.notes-section[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.75rem;\n}\n.notes-section[_ngcontent-%COMP%]   .no-notes[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 20px;\n  font-style: italic;\n}\n.notes-section[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notes-section[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=candidates-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidatesSearchComponent, { className: "CandidatesSearchComponent" });
})();
export {
  CandidatesSearchComponent
};
//# sourceMappingURL=chunk-4QCGIERE.js.map
