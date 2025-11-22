import {
  QuillEditorComponent,
  QuillModule
} from "./chunk-CWNPWQ7K.js";
import {
  UserService
} from "./chunk-AJCMZTKQ.js";
import "./chunk-SAOA7EEN.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  DomSanitizer
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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

// src/app/core/services/candidate.service.ts
var CandidateService = class _CandidateService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/candidates";
  }
  getCandidateProfile(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  updateCandidateProfile(candidateId, request) {
    return this.http.put(`${this.apiUrl}/${candidateId}`, request);
  }
  uploadResume(candidateId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${candidateId}/resume`, formData);
  }
  uploadPhoto(candidateId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${candidateId}/photo`, formData);
  }
  saveCertifications(candidateId, certifications) {
    return this.http.post(`${this.apiUrl}/${candidateId}/certifications`, certifications);
  }
  saveEducation(candidateId, education) {
    return this.http.post(`${this.apiUrl}/${candidateId}/education`, education);
  }
  saveExperience(candidateId, experience) {
    return this.http.post(`${this.apiUrl}/${candidateId}/experience`, experience);
  }
  deleteResume(candidateId) {
    return this.http.delete(`${this.apiUrl}/${candidateId}/resume`);
  }
  static {
    this.\u0275fac = function CandidateService_Factory(t) {
      return new (t || _CandidateService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CandidateService, factory: _CandidateService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/candidate-portal/candidate-profile.component.ts
function CandidateProfileComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 66);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.profile.photo, \u0275\u0275sanitizeUrl);
  }
}
function CandidateProfileComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getInitials());
  }
}
function CandidateProfileComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_67_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(fileInput_r5.click());
    })("dragover", function CandidateProfileComponent_div_67_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("drop", function CandidateProfileComponent_div_67_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event));
    });
    \u0275\u0275elementStart(1, "input", 70, 1);
    \u0275\u0275listener("change", function CandidateProfileComponent_div_67_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275text(4, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 72);
    \u0275\u0275text(6, "Drag and drop your resume here or click to browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 73);
    \u0275\u0275text(8, "Supported formats: PDF, DOC, DOCX (Max 5MB)");
    \u0275\u0275elementEnd()();
  }
}
function CandidateProfileComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "span", 76);
    \u0275\u0275text(3, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 77)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 78);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 79)(10, "button", 80);
    \u0275\u0275text(11, "\u2B07\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 81);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_68_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const fileInput_r7 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(fileInput_r7.click());
    });
    \u0275\u0275text(13, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 82);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_68_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteResume());
    });
    \u0275\u0275text(15, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 70, 1);
    \u0275\u0275listener("change", function CandidateProfileComponent_div_68_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.profile.resume.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.profile.resume.size, " \u2022 Uploaded ", ctx_r2.profile.resume.uploadedDate, "");
  }
}
function CandidateProfileComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "span", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_105_Template_select_ngModelChange_4_listener($event) {
      const skill_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(skill_r9.level, $event) || (skill_r9.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_105_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementStart(5, "option", 87);
    \u0275\u0275text(6, "Beginner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 88);
    \u0275\u0275text(8, "Intermediate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 89);
    \u0275\u0275text(10, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 90);
    \u0275\u0275text(12, "Expert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 91);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_105_Template_button_click_13_listener() {
      const i_r10 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeSkill(i_r10));
    });
    \u0275\u0275text(14, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r9.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", skill_r9.level);
  }
}
function CandidateProfileComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_111_Template_input_ngModelChange_2_listener($event) {
      const cert_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(cert_r12.name, $event) || (cert_r12.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_111_Template_input_ngModelChange_3_listener($event) {
      const cert_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(cert_r12.issuer, $event) || (cert_r12.issuer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 96)(5, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_111_Template_input_ngModelChange_5_listener($event) {
      const cert_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(cert_r12.issueDate, $event) || (cert_r12.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_111_Template_input_ngModelChange_8_listener($event) {
      const cert_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(cert_r12.expiryDate, $event) || (cert_r12.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 100);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_111_Template_button_click_9_listener() {
      const i_r13 = \u0275\u0275restoreView(_r11).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeCertification(i_r13));
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cert_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", cert_r12.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", cert_r12.issuer);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", cert_r12.issueDate);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", cert_r12.expiryDate);
  }
}
function CandidateProfileComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 43)(2, "div", 44)(3, "label");
    \u0275\u0275text(4, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_5_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.title, $event) || (exp_r15.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "label");
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_9_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.company, $event) || (exp_r15.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "label");
    \u0275\u0275text(12, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_13_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.startDate, $event) || (exp_r15.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_17_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.endDate, $event) || (exp_r15.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 106)(19, "label", 107)(20, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_20_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.isCurrent, $event) || (exp_r15.isCurrent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_input_ngModelChange_20_listener() {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCurrentJobChange(exp_r15));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "I currently work here");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 44)(24, "label");
    \u0275\u0275text(25, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 108);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_117_Template_textarea_ngModelChange_26_listener($event) {
      const exp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(exp_r15.description, $event) || (exp_r15.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_117_Template_textarea_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 109);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_117_Template_button_click_27_listener() {
      const i_r16 = \u0275\u0275restoreView(_r14).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeExperience(i_r16));
    });
    \u0275\u0275text(28, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r15 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.company);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.endDate);
    \u0275\u0275property("disabled", exp_r15.isCurrent);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.isCurrent);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", exp_r15.description);
  }
}
function CandidateProfileComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 43)(2, "div", 44)(3, "label");
    \u0275\u0275text(4, "Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_5_listener($event) {
      const edu_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(edu_r18.degree, $event) || (edu_r18.degree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "label");
    \u0275\u0275text(8, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_9_listener($event) {
      const edu_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(edu_r18.institution, $event) || (edu_r18.institution = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "label");
    \u0275\u0275text(12, "Field of Study");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_13_listener($event) {
      const edu_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(edu_r18.fieldOfStudy, $event) || (edu_r18.fieldOfStudy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "Graduation Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_17_listener($event) {
      const edu_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(edu_r18.endDate, $event) || (edu_r18.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_div_123_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.trackChanges());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 109);
    \u0275\u0275listener("click", function CandidateProfileComponent_div_123_Template_button_click_18_listener() {
      const i_r19 = \u0275\u0275restoreView(_r17).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEducation(i_r19));
    });
    \u0275\u0275text(19, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r18 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", edu_r18.degree);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", edu_r18.institution);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", edu_r18.fieldOfStudy);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", edu_r18.endDate);
  }
}
function CandidateProfileComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.successMessage);
  }
}
function CandidateProfileComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function CandidateProfileComponent_span_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Save Changes");
    \u0275\u0275elementEnd();
  }
}
function CandidateProfileComponent_span_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Saving...");
    \u0275\u0275elementEnd();
  }
}
var CandidateProfileComponent = class _CandidateProfileComponent {
  constructor(userService, candidateService, authService, sanitizer) {
    this.userService = userService;
    this.candidateService = candidateService;
    this.authService = authService;
    this.sanitizer = sanitizer;
    this.profile = {
      name: "",
      email: "",
      phone: "",
      location: "",
      headline: "",
      summary: "",
      photo: null,
      isPublic: true,
      linkedinUrl: "",
      githubUrl: "",
      portfolioUrl: "",
      resume: null,
      skills: [],
      skillsWithLevels: [],
      experience: [],
      education: [],
      certifications: []
    };
    this.originalProfile = {};
    this.profileCompleteness = 0;
    this.loading = false;
    this.error = "";
    this.successMessage = "";
    this.user = null;
    this.candidate = null;
    this.newSkillName = "";
    this.hasChanges = false;
    this.quillModules = {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ "list": "ordered" }, { "list": "bullet" }],
        [{ "header": [1, 2, 3, false] }],
        ["clean"]
      ]
    };
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    this.error = "";
    this.successMessage = "";
    const currentUser = this.authService.getCurrentUserValue();
    if (!currentUser?.id) {
      this.error = "User not authenticated. Please log in again.";
      this.loading = false;
      return;
    }
    this.userService.getUserProfile(currentUser.id).subscribe({
      next: (user) => {
        this.user = user;
        if (user.role !== "CANDIDATE") {
          this.error = "This page is only for candidates.";
          this.loading = false;
          return;
        }
        this.candidateService.getCandidateProfile(currentUser.id).subscribe({
          next: (candidate) => {
            this.candidate = candidate;
            this.populateProfile(user, candidate);
          },
          error: (err) => {
            this.candidate = null;
            this.populateProfile(user, null);
          }
        });
      },
      error: (err) => {
        this.error = err?.error?.message || "Failed to load user profile. Please try again.";
        this.loading = false;
      }
    });
  }
  populateProfile(user, candidate) {
    this.profile = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: candidate?.phone || "",
      location: candidate?.location || "",
      headline: candidate?.headline || "",
      summary: candidate?.summary || "",
      photo: candidate?.profilePhotoUrl || null,
      isPublic: candidate?.isPublic ?? true,
      linkedinUrl: candidate?.linkedinUrl || "",
      githubUrl: candidate?.githubUrl || "",
      portfolioUrl: candidate?.portfolioUrl || "",
      resume: candidate?.resumeUrl ? { name: "Resume", url: candidate.resumeUrl } : null,
      skills: candidate?.skills || [],
      skillsWithLevels: (candidate?.skills || []).map((skill) => ({ name: skill, level: "Intermediate" })),
      certifications: candidate?.certifications || [],
      education: candidate?.education || [],
      experience: candidate?.experience || []
    };
    this.originalProfile = JSON.parse(JSON.stringify(this.profile));
    this.calculateCompleteness();
    this.loading = false;
    this.hasChanges = false;
  }
  saveProfile() {
    if (!this.user) {
      this.error = "Profile data not loaded. Please refresh the page.";
      return;
    }
    if (!this.validateProfile()) {
      return;
    }
    this.loading = true;
    this.error = "";
    this.successMessage = "";
    const nameParts = this.profile.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const skills = this.profile.skillsWithLevels.map((s) => s.name);
    const userUpdateRequest = {
      firstName,
      lastName,
      email: this.profile.email?.trim()
    };
    const candidateUpdateRequest = {
      phone: this.profile.phone?.trim() || void 0,
      location: this.profile.location?.trim() || void 0,
      headline: this.profile.headline?.trim() || void 0,
      summary: this.profile.summary?.trim() || void 0,
      linkedinUrl: this.profile.linkedinUrl?.trim() || void 0,
      githubUrl: this.profile.githubUrl?.trim() || void 0,
      portfolioUrl: this.profile.portfolioUrl?.trim() || void 0,
      skills: skills.length > 0 ? skills : void 0,
      isPublic: this.profile.isPublic
    };
    this.userService.updateUser(this.user.id, userUpdateRequest).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        if (this.candidate?.id) {
          this.candidateService.updateCandidateProfile(this.candidate.id, candidateUpdateRequest).subscribe({
            next: (updatedCandidate) => {
              this.candidate = updatedCandidate;
              this.saveCandidateDetails();
            },
            error: (err) => {
              this.error = err?.error?.message || "Failed to update candidate profile. Please try again.";
              this.loading = false;
            }
          });
        } else {
          this.candidateService.getCandidateProfile(this.user.id).subscribe({
            next: (candidate) => {
              this.candidate = candidate;
              this.candidateService.updateCandidateProfile(candidate.id, candidateUpdateRequest).subscribe({
                next: (updatedCandidate) => {
                  this.candidate = updatedCandidate;
                  this.saveCandidateDetails();
                },
                error: (err) => {
                  this.error = err?.error?.message || "Failed to update candidate profile.";
                  this.loading = false;
                }
              });
            },
            error: (err) => {
              this.error = "Candidate profile not found. Please contact support.";
              this.loading = false;
            }
          });
        }
      },
      error: (err) => {
        this.error = err?.error?.message || "Failed to update user profile. Please try again.";
        this.loading = false;
      }
    });
  }
  validateProfile() {
    if (!this.profile.name?.trim()) {
      this.error = "Name is required";
      return false;
    }
    if (!this.profile.email?.trim()) {
      this.error = "Email is required";
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.profile.email)) {
      this.error = "Please enter a valid email address";
      return false;
    }
    if (!this.profile.phone?.trim()) {
      this.error = "Phone number is required";
      return false;
    }
    if (!/^[\d\s\-\+\(\)]+$/.test(this.profile.phone)) {
      this.error = "Please enter a valid phone number";
      return false;
    }
    return true;
  }
  cancelChanges() {
    if (this.hasChanges && !confirm("You have unsaved changes. Are you sure you want to cancel?")) {
      return;
    }
    this.profile = JSON.parse(JSON.stringify(this.originalProfile));
    this.error = "";
    this.successMessage = "";
    this.hasChanges = false;
  }
  trackChanges() {
    setTimeout(() => {
      this.hasChanges = JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);
    }, 0);
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }
  onFileSelected(event) {
    const file = event.target.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }
  handleFile(file) {
    this.error = "";
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      this.error = "Please upload a PDF, DOC, or DOCX file.";
      return;
    }
    if (file.size > maxSize) {
      this.error = "File size must be less than 5MB.";
      return;
    }
    this.profile.resume = {
      name: file.name,
      size: this.formatFileSize(file.size),
      uploadedDate: "Today",
      file
    };
    this.trackChanges();
    this.calculateCompleteness();
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  deleteResume() {
    if (confirm("Are you sure you want to delete your resume?")) {
      if (this.candidate?.id && this.profile.resume?.url) {
        this.candidateService.deleteResume(this.candidate.id).subscribe({
          next: () => {
            this.profile.resume = null;
            this.trackChanges();
            this.calculateCompleteness();
          },
          error: (err) => {
            this.error = "Failed to delete resume";
          }
        });
      } else {
        this.profile.resume = null;
        this.trackChanges();
        this.calculateCompleteness();
      }
    }
  }
  onPhotoSelected(event) {
    const file = event.target.files?.[0];
    if (file) {
      this.error = "";
      const maxSize = 2 * 1024 * 1024;
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        this.error = "Please upload a JPG or PNG image.";
        return;
      }
      if (file.size > maxSize) {
        this.error = "Image size must be less than 2MB.";
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profile.photo = e.target?.result;
        this.trackChanges();
        this.calculateCompleteness();
      };
      reader.readAsDataURL(file);
    }
  }
  getInitials() {
    return this.profile.name.split(" ").map((n) => n[0]).join("").toUpperCase() || "U";
  }
  addSkill() {
    const skillName = this.newSkillName.trim();
    if (skillName) {
      const exists = this.profile.skillsWithLevels.some((s) => s.name.toLowerCase() === skillName.toLowerCase());
      if (exists) {
        this.error = "This skill already exists";
        setTimeout(() => this.error = "", 3e3);
        return;
      }
      this.profile.skillsWithLevels.push({ name: skillName, level: "Intermediate" });
      this.newSkillName = "";
      this.trackChanges();
      this.calculateCompleteness();
    }
  }
  removeSkill(index) {
    this.profile.skillsWithLevels.splice(index, 1);
    this.trackChanges();
    this.calculateCompleteness();
  }
  addCertification() {
    this.profile.certifications.push({ name: "", issuer: "", issueDate: "", expiryDate: "" });
    this.trackChanges();
  }
  removeCertification(index) {
    this.profile.certifications.splice(index, 1);
    this.trackChanges();
    this.calculateCompleteness();
  }
  addExperience() {
    this.profile.experience.push({ title: "", company: "", startDate: "", endDate: "", isCurrent: false, description: "" });
    this.trackChanges();
  }
  removeExperience(index) {
    this.profile.experience.splice(index, 1);
    this.trackChanges();
  }
  addEducation() {
    this.profile.education.push({ degree: "", institution: "", fieldOfStudy: "", endDate: "" });
    this.trackChanges();
  }
  removeEducation(index) {
    this.profile.education.splice(index, 1);
    this.trackChanges();
  }
  onCurrentJobChange(exp) {
    if (exp.isCurrent) {
      exp.endDate = null;
    }
    this.trackChanges();
  }
  calculateCompleteness() {
    let score = 0;
    const fields = [
      { field: this.profile.name, weight: 10 },
      { field: this.profile.email, weight: 10 },
      { field: this.profile.phone, weight: 5 },
      { field: this.profile.location, weight: 5 },
      { field: this.profile.headline, weight: 15 },
      { field: this.profile.summary, weight: 15 },
      { field: this.profile.photo, weight: 10 },
      { field: this.profile.resume, weight: 15 },
      { field: this.profile.skillsWithLevels.length > 0, weight: 10 },
      { field: this.profile.linkedinUrl || this.profile.githubUrl || this.profile.portfolioUrl, weight: 5 }
    ];
    fields.forEach(({ field, weight }) => {
      if (field)
        score += weight;
    });
    this.profileCompleteness = score;
  }
  getCompletnessTip() {
    if (this.profileCompleteness < 50)
      return "Add a professional headline and photo to get started";
    if (this.profileCompleteness < 80)
      return "Upload your resume and add more skills";
    return "Great! Your profile looks professional";
  }
  saveCandidateDetails() {
    if (!this.candidate)
      return;
    const certifications = this.profile.certifications.filter((c) => c.name && c.issuer);
    const education = this.profile.education.filter((e) => e.degree && e.institution);
    const experience = this.profile.experience.filter((e) => e.title && e.company);
    if (this.profile.resume?.file) {
      this.candidateService.uploadResume(this.candidate.id, this.profile.resume.file).subscribe({
        next: (response) => {
          this.profile.resume.url = response.resumeUrl;
          delete this.profile.resume.file;
          this.saveOtherDetails(certifications, education, experience);
        },
        error: (err) => {
          this.error = "Failed to upload resume.";
          this.loading = false;
        }
      });
    } else {
      this.saveOtherDetails(certifications, education, experience);
    }
  }
  saveOtherDetails(certifications, education, experience) {
    if (!this.candidate)
      return;
    this.candidateService.saveCertifications(this.candidate.id, certifications).subscribe();
    this.candidateService.saveEducation(this.candidate.id, education).subscribe();
    this.candidateService.saveExperience(this.candidate.id, experience).subscribe({
      next: () => {
        setTimeout(() => {
          this.originalProfile = JSON.parse(JSON.stringify(this.profile));
          this.hasChanges = false;
        }, 100);
        this.successMessage = "\u2713 Profile updated successfully!";
        this.loading = false;
        setTimeout(() => this.successMessage = "", 5e3);
      },
      error: (err) => {
        this.error = "Failed to save some profile details.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function CandidateProfileComponent_Factory(t) {
      return new (t || _CandidateProfileComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(CandidateService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateProfileComponent, selectors: [["app-candidate-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 134, vars: 34, consts: [["photoInput", ""], ["fileInput", ""], [1, "candidate-profile-page"], [1, "page-header"], [1, "profile-container"], [1, "completeness-card"], [1, "completeness-header"], [1, "completeness-score"], [1, "progress-bar"], [1, "progress-fill"], [1, "completeness-tip"], [1, "profile-header-section"], [1, "header-main"], [1, "profile-photo-container"], [1, "profile-photo", 3, "click"], ["alt", "Profile photo", 3, "src", 4, "ngIf"], ["class", "photo-placeholder", 4, "ngIf"], [1, "photo-overlay"], [1, "camera-icon"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "profile-info"], [1, "headline-container"], ["type", "text", "placeholder", "Professional headline (e.g., Senior Software Engineer)", 1, "headline-input", 3, "ngModelChange", "ngModel"], [1, "profile-meta"], [1, "location"], [1, "separator"], [1, "email"], [1, "header-actions"], [1, "visibility-toggle"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-slider"], [1, "toggle-text"], [1, "profile-section"], [1, "social-links"], [1, "social-input"], [1, "social-icon"], ["type", "url", "placeholder", "https://linkedin.com/in/yourprofile", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://github.com/yourusername", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://yourwebsite.com", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "resume-upload-container"], ["class", "upload-area", 3, "click", "dragover", "drop", 4, "ngIf"], ["class", "resume-preview", 4, "ngIf"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "email", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["type", "tel", "placeholder", "+1 (555) 123-4567", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "City, State/Country", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Write a compelling professional summary highlighting your experience, skills, and career goals...", 3, "ngModelChange", "ngModel", "modules"], [1, "skills-container"], ["class", "skill-item", 4, "ngFor", "ngForOf"], [1, "add-skill-container"], ["type", "text", "placeholder", "Type skill and press Enter...", 1, "skill-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "certification-item", 4, "ngFor", "ngForOf"], [1, "btn-add", 3, "click"], ["class", "experience-item", 4, "ngFor", "ngForOf"], ["class", "education-item", 4, "ngFor", "ngForOf"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "profile-actions"], [1, "btn-save", 3, "click", "disabled"], [4, "ngIf"], [1, "btn-cancel", 3, "click", "disabled"], ["alt", "Profile photo", 3, "src"], [1, "photo-placeholder"], [1, "photo-initials"], [1, "upload-area", 3, "click", "dragover", "drop"], ["type", "file", "accept", ".pdf,.doc,.docx", "hidden", "", 3, "change"], [1, "upload-icon"], [1, "upload-text"], [1, "upload-hint"], [1, "resume-preview"], [1, "resume-info"], [1, "file-icon"], [1, "file-details"], [1, "file-meta"], [1, "resume-actions"], ["title", "Download", 1, "btn-icon"], ["title", "Replace", 1, "btn-icon", 3, "click"], ["title", "Delete", 1, "btn-icon", 3, "click"], [1, "skill-item"], [1, "skill-info"], [1, "skill-name"], [1, "skill-level", 3, "ngModelChange", "ngModel"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Advanced"], ["value", "Expert"], [1, "remove-skill-btn", 3, "click"], [1, "certification-item"], [1, "cert-main"], ["type", "text", "placeholder", "Certification name", 1, "cert-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Issuing organization", 1, "cert-input", 3, "ngModelChange", "ngModel"], [1, "cert-dates"], ["type", "date", 1, "cert-date", 3, "ngModelChange", "ngModel"], [1, "date-separator"], ["type", "date", "placeholder", "Expiry (optional)", 1, "cert-date", 3, "ngModelChange", "ngModel"], [1, "remove-cert-btn", 3, "click"], [1, "experience-item"], ["type", "text", "placeholder", "Software Engineer", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Tech Corp", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Leave blank if current", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "full-width"], [1, "checkbox-label"], ["rows", "3", "placeholder", "Describe your responsibilities...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-remove", 3, "click"], [1, "education-item"], ["type", "text", "placeholder", "Bachelor of Science", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "University Name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Computer Science", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "success-message"], [1, "error-message"]], template: function CandidateProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1");
        \u0275\u0275text(3, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Manage your professional information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h3");
        \u0275\u0275text(10, "Profile Completeness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275element(14, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_div_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          const photoInput_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(photoInput_r2.click());
        });
        \u0275\u0275template(21, CandidateProfileComponent_img_21_Template, 1, 1, "img", 15)(22, CandidateProfileComponent_div_22_Template, 3, 1, "div", 16);
        \u0275\u0275elementStart(23, "div", 17)(24, "span", 18);
        \u0275\u0275text(25, "\u{1F4F7}");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "input", 19, 0);
        \u0275\u0275listener("change", function CandidateProfileComponent_Template_input_change_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPhotoSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 20)(29, "h1");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 21)(32, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.headline, $event) || (ctx.profile.headline = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 23)(34, "span", 24);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 25);
        \u0275\u0275text(37, "\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 26);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 27)(41, "div", 28)(42, "label", 29)(43, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.isPublic, $event) || (ctx.profile.isPublic = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "span", 31);
        \u0275\u0275elementStart(45, "span", 32);
        \u0275\u0275text(46, "Public Profile");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 33)(48, "h2");
        \u0275\u0275text(49, "Professional Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 34)(51, "div", 35)(52, "span", 36);
        \u0275\u0275text(53, "\u{1F517}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "input", 37);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.linkedinUrl, $event) || (ctx.profile.linkedinUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 35)(56, "span", 36);
        \u0275\u0275text(57, "\u{1F4BB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "input", 38);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.githubUrl, $event) || (ctx.profile.githubUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_58_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 35)(60, "span", 36);
        \u0275\u0275text(61, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "input", 39);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.portfolioUrl, $event) || (ctx.profile.portfolioUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 33)(64, "h2");
        \u0275\u0275text(65, "Resume");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 40);
        \u0275\u0275template(67, CandidateProfileComponent_div_67_Template, 9, 0, "div", 41)(68, CandidateProfileComponent_div_68_Template, 18, 3, "div", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 33)(70, "h2");
        \u0275\u0275text(71, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 43)(73, "div", 44)(74, "label");
        \u0275\u0275text(75, "Full Name ");
        \u0275\u0275elementStart(76, "span", 45);
        \u0275\u0275text(77, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "input", 46);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_78_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.name, $event) || (ctx.profile.name = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_78_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 44)(80, "label");
        \u0275\u0275text(81, "Email ");
        \u0275\u0275elementStart(82, "span", 45);
        \u0275\u0275text(83, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "input", 47);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.email, $event) || (ctx.profile.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_84_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "small", 48);
        \u0275\u0275text(86, "Changing email will require verification");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 44)(88, "label");
        \u0275\u0275text(89, "Phone ");
        \u0275\u0275elementStart(90, "span", 45);
        \u0275\u0275text(91, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_92_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.phone, $event) || (ctx.profile.phone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_92_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 44)(94, "label");
        \u0275\u0275text(95, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "input", 50);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_96_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.location, $event) || (ctx.profile.location = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_96_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "div", 33)(98, "h2");
        \u0275\u0275text(99, "Professional Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "quill-editor", 51);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_quill_editor_ngModelChange_100_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.profile.summary, $event) || (ctx.profile.summary = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CandidateProfileComponent_Template_quill_editor_ngModelChange_100_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.trackChanges());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 33)(102, "h2");
        \u0275\u0275text(103, "Skills & Expertise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 52);
        \u0275\u0275template(105, CandidateProfileComponent_div_105_Template, 15, 2, "div", 53);
        \u0275\u0275elementStart(106, "div", 54)(107, "input", 55);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateProfileComponent_Template_input_ngModelChange_107_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newSkillName, $event) || (ctx.newSkillName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup.enter", function CandidateProfileComponent_Template_input_keyup_enter_107_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addSkill());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(108, "div", 33)(109, "h2");
        \u0275\u0275text(110, "Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(111, CandidateProfileComponent_div_111_Template, 11, 4, "div", 56);
        \u0275\u0275elementStart(112, "button", 57);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_button_click_112_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addCertification());
        });
        \u0275\u0275text(113, "+ Add Certification");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 33)(115, "h2");
        \u0275\u0275text(116, "Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275template(117, CandidateProfileComponent_div_117_Template, 29, 7, "div", 58);
        \u0275\u0275elementStart(118, "button", 57);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_button_click_118_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addExperience());
        });
        \u0275\u0275text(119, "+ Add Experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 33)(121, "h2");
        \u0275\u0275text(122, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275template(123, CandidateProfileComponent_div_123_Template, 20, 4, "div", 59);
        \u0275\u0275elementStart(124, "button", 57);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_button_click_124_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addEducation());
        });
        \u0275\u0275text(125, "+ Add Education");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(126, CandidateProfileComponent_div_126_Template, 2, 1, "div", 60)(127, CandidateProfileComponent_div_127_Template, 2, 1, "div", 61);
        \u0275\u0275elementStart(128, "div", 62)(129, "button", 63);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_button_click_129_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveProfile());
        });
        \u0275\u0275template(130, CandidateProfileComponent_span_130_Template, 2, 0, "span", 64)(131, CandidateProfileComponent_span_131_Template, 2, 0, "span", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "button", 65);
        \u0275\u0275listener("click", function CandidateProfileComponent_Template_button_click_132_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancelChanges());
        });
        \u0275\u0275text(133, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("", ctx.profileCompleteness, "%");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.profileCompleteness, "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.getCompletnessTip());
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.profile.photo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.profile.photo);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.profile.name || "Your Name");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.headline);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx.profile.location || "Add location", "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\u2709\uFE0F ", ctx.profile.email, "");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.isPublic);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.linkedinUrl);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.githubUrl);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.portfolioUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.profile.resume);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.profile.resume);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.name);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.email);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.phone);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.location);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.profile.summary);
        \u0275\u0275property("modules", ctx.quillModules);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.profile.skillsWithLevels);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.newSkillName);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.profile.certifications);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.profile.experience);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.profile.education);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading || !ctx.hasChanges);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, ReactiveFormsModule, QuillModule, QuillEditorComponent], styles: ['\n\n.candidate-profile-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.profile-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n}\n.profile-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 1.5rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-input[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n  .profile-section quill-editor {\n  display: block;\n  width: 100%;\n}\n  .profile-section .ql-toolbar {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px 8px 0 0;\n  padding: 6px 10px;\n  line-height: 1;\n}\n  .profile-section .ql-container {\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  width: 100%;\n}\n  .profile-section .ql-editor {\n  min-height: 350px;\n  padding: 20px;\n  line-height: 1.8;\n}\n  .profile-section .ql-editor.ql-blank::before {\n  color: #94a3b8;\n  font-style: normal;\n}\n  .profile-section .ql-toolbar button {\n  width: 24px;\n  height: 24px;\n  padding: 3px;\n  margin: 0 2px;\n}\n  .profile-section .ql-toolbar .ql-picker-label {\n  padding: 3px 6px;\n  height: 24px;\n  font-size: 0.875rem;\n}\n  .profile-section .ql-toolbar .ql-formats {\n  margin-right: 10px;\n}\n  .profile-section .ql-toolbar .ql-stroke {\n  stroke: #475569;\n}\n  .profile-section .ql-toolbar .ql-fill {\n  fill: #475569;\n}\n  .profile-section .ql-toolbar button:hover .ql-stroke {\n  stroke: #0066ff;\n}\n  .profile-section .ql-toolbar button:hover .ql-fill {\n  fill: #0066ff;\n}\n  .profile-section .ql-toolbar button.ql-active .ql-stroke {\n  stroke: #0066ff;\n}\n  .profile-section .ql-toolbar button.ql-active .ql-fill {\n  fill: #0066ff;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #3730a3;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.skill-input[_ngcontent-%COMP%] {\n  border: 1px dashed #cbd5e1;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n}\n.experience-item[_ngcontent-%COMP%], .education-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.experience-item[_ngcontent-%COMP%]:last-of-type, .education-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 1rem;\n}\n.experience-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .education-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.exp-company[_ngcontent-%COMP%], .edu-school[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.experience-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px dashed #0066ff;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border: 1px solid #bbf7d0;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border: 1px solid #fecaca;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  color: #64748b;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.resume-upload-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 3rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  background: #f8fafc;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.upload-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.resume-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.resume-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n.file-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.file-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.file-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.resume-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.completeness-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.completeness-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.completeness-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n}\n.completeness-score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  height: 8px;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  background: white;\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.completeness-tip[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.profile-header-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n}\n.header-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: start;\n  margin-bottom: 1rem;\n}\n.profile-photo-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.profile-photo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  border: 3px solid #e2e8f0;\n  transition: border-color 0.2s;\n}\n.profile-photo[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n}\n.profile-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.photo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.photo-initials[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n  border-radius: 50%;\n}\n.profile-photo[_ngcontent-%COMP%]:hover   .photo-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.camera-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: white;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.headline-container[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.headline-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 0;\n  border: none;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 1rem;\n  color: #64748b;\n  background: transparent;\n}\n.headline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom-color: #0066ff;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.location[_ngcontent-%COMP%], .email[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.separator[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  cursor: pointer;\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 20px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  position: relative;\n  transition: background 0.2s;\n}\n.toggle-slider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background: #0066ff;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::after {\n  transform: translateX(20px);\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.social-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.social-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 24px;\n}\n.skill-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: #f8fafc;\n  padding: 0.75rem;\n  border-radius: 8px;\n  margin-bottom: 0.5rem;\n}\n.skill-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.skill-level[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.remove-skill-btn[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.add-skill-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.skill-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.skill-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.certification-item[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.cert-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.cert-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n}\n.cert-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cert-date[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.date-separator[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.remove-cert-btn[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: #0066ff;\n}\n.checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0066ff;\n}\n/*# sourceMappingURL=candidate-profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateProfileComponent, { className: "CandidateProfileComponent" });
})();
export {
  CandidateProfileComponent
};
//# sourceMappingURL=chunk-FDL5D57P.js.map
