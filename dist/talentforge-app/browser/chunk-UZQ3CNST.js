import {
  InterviewService
} from "./chunk-3WBYY5QU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/candidate-portal/candidate-interviews.component.ts
function CandidateInterviewsComponent_tr_23_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_tr_23_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const interview_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.joinInterview(interview_r3));
    });
    \u0275\u0275text(1, "Join");
    \u0275\u0275elementEnd();
  }
}
function CandidateInterviewsComponent_tr_23_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_tr_23_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const interview_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.requestReschedule(interview_r3));
    });
    \u0275\u0275text(1, "Request Reschedule");
    \u0275\u0275elementEnd();
  }
}
function CandidateInterviewsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, CandidateInterviewsComponent_tr_23_button_14_Template, 2, 0, "button", 15);
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_tr_23_Template_button_click_15_listener() {
      const interview_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewDetails(interview_r3));
    });
    \u0275\u0275text(16, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CandidateInterviewsComponent_tr_23_button_17_Template, 2, 0, "button", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r3.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r3.datetime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(interview_r3.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r3.status === "Scheduled" && interview_r3.meetingLink);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", interview_r3.status === "Scheduled");
  }
}
function CandidateInterviewsComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_button_38_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r7 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
function CandidateInterviewsComponent_div_41_div_7_div_24_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32)(1, "strong");
    \u0275\u0275text(2, "Link:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, "Join Meeting");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r3.selectedInterview.meetingLink, \u0275\u0275sanitizeUrl);
  }
}
function CandidateInterviewsComponent_div_41_div_7_div_24_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31)(1, "strong");
    \u0275\u0275text(2, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedInterview.location, "");
  }
}
function CandidateInterviewsComponent_div_41_div_7_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 30);
    \u0275\u0275text(2, "Meeting Info");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CandidateInterviewsComponent_div_41_div_7_div_24_p_3_Template, 5, 1, "p", 35)(4, CandidateInterviewsComponent_div_41_div_7_div_24_p_4_Template, 4, 1, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview.meetingLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview.location);
  }
}
function CandidateInterviewsComponent_div_41_div_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 30);
    \u0275\u0275text(2, "Interviewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedInterview.interviewerName);
  }
}
function CandidateInterviewsComponent_div_41_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 30);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedInterview.notes);
  }
}
function CandidateInterviewsComponent_div_41_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h3", 30);
    \u0275\u0275text(3, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "h3", 30);
    \u0275\u0275text(10, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 32)(12, "strong");
    \u0275\u0275text(13, "Date & Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 32)(16, "strong");
    \u0275\u0275text(17, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 31)(20, "strong");
    \u0275\u0275text(21, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, CandidateInterviewsComponent_div_41_div_7_div_24_Template, 5, 2, "div", 33)(25, CandidateInterviewsComponent_div_41_div_7_div_25_Template, 5, 1, "div", 33)(26, CandidateInterviewsComponent_div_41_div_7_div_26_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selectedInterview.position);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" at ", ctx_r3.selectedInterview.company, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedInterview.datetime, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedInterview.type, "");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r3.selectedInterview.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selectedInterview.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview.meetingLink || ctx_r3.selectedInterview.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview.interviewerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview.notes);
  }
}
function CandidateInterviewsComponent_div_41_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_41_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.joinInterview(ctx_r3.selectedInterview);
      return \u0275\u0275resetView(ctx_r3.showDetailsModal = false);
    });
    \u0275\u0275text(1, "Join Meeting");
    \u0275\u0275elementEnd();
  }
}
function CandidateInterviewsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showDetailsModal = false);
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_41_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h2");
    \u0275\u0275text(4, "Interview Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showDetailsModal = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CandidateInterviewsComponent_div_41_div_7_Template, 27, 10, "div", 24);
    \u0275\u0275elementStart(8, "div", 25)(9, "button", 26);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showDetailsModal = false);
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CandidateInterviewsComponent_div_41_button_11_Template, 2, 0, "button", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.selectedInterview == null ? null : ctx_r3.selectedInterview.meetingLink);
  }
}
function CandidateInterviewsComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRescheduleModal = false);
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h2");
    \u0275\u0275text(4, "Request Reschedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_42_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRescheduleModal = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "p")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 40)(15, "label");
    \u0275\u0275text(16, "Reason for Reschedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateInterviewsComponent_div_42_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.rescheduleReason, $event) || (ctx_r3.rescheduleReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 25)(19, "button", 26);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_42_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRescheduleModal = false);
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function CandidateInterviewsComponent_div_42_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitReschedule());
    });
    \u0275\u0275text(22, "Submit Request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r3.selectedInterview == null ? null : ctx_r3.selectedInterview.position);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" at ", ctx_r3.selectedInterview == null ? null : ctx_r3.selectedInterview.company, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Current: ", ctx_r3.selectedInterview == null ? null : ctx_r3.selectedInterview.datetime, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.rescheduleReason);
  }
}
var CandidateInterviewsComponent = class _CandidateInterviewsComponent {
  constructor(interviewService) {
    this.interviewService = interviewService;
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.interviews = [];
    this.loading = false;
    this.error = "";
    this.showRescheduleModal = false;
    this.showDetailsModal = false;
    this.selectedInterview = null;
    this.rescheduleReason = "";
  }
  ngOnInit() {
    this.loadInterviews();
  }
  loadInterviews() {
    this.loading = true;
    this.error = "";
    this.interviewService.getMyInterviews().subscribe({
      next: (data) => {
        this.interviews = data.map((interview) => this.mapInterviewToDisplay(interview));
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading interviews:", err);
        this.error = "Failed to load interviews";
        this.loading = false;
      }
    });
  }
  mapInterviewToDisplay(interview) {
    return {
      id: interview.id,
      position: interview.jobTitle || "Position",
      company: interview.companyName || "Company",
      datetime: new Date(interview.scheduledAt).toLocaleString(),
      type: interview.interviewType,
      status: interview.status,
      meetingLink: interview.meetingLink,
      location: interview.location,
      interviewerName: interview.interviewerName,
      notes: interview.notes
    };
  }
  get totalInterviews() {
    return this.interviews.length;
  }
  get totalPages() {
    return Math.ceil(this.totalInterviews / this.itemsPerPage);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalInterviews);
  }
  get paginatedInterviews() {
    return this.interviews.slice(this.startIndex, this.endIndex);
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++)
      pages.push(i);
    return pages;
  }
  previousPage() {
    if (this.currentPage > 1)
      this.currentPage--;
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }
  goToPage(page) {
    this.currentPage = page;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
  }
  viewDetails(interview) {
    this.selectedInterview = interview;
    this.showDetailsModal = true;
  }
  joinInterview(interview) {
    if (interview.meetingLink) {
      window.open(interview.meetingLink, "_blank");
    }
  }
  requestReschedule(interview) {
    this.selectedInterview = interview;
    this.rescheduleReason = "";
    this.showRescheduleModal = true;
  }
  submitReschedule() {
    if (!this.rescheduleReason.trim()) {
      alert("Please provide a reason for rescheduling");
      return;
    }
    const request = {
      reason: this.rescheduleReason
    };
    this.interviewService.requestReschedule(this.selectedInterview.id, request).subscribe({
      next: () => {
        alert(`Reschedule request submitted for ${this.selectedInterview.position}`);
        this.showRescheduleModal = false;
        this.loadInterviews();
      },
      error: (err) => {
        console.error("Error requesting reschedule:", err);
        alert("Failed to submit reschedule request");
      }
    });
  }
  static {
    this.\u0275fac = function CandidateInterviewsComponent_Factory(t) {
      return new (t || _CandidateInterviewsComponent)(\u0275\u0275directiveInject(InterviewService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateInterviewsComponent, selectors: [["app-candidate-interviews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 13, consts: [[1, "candidate-interviews-page"], [1, "page-header"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-left"], [1, "pagination-info"], [1, "items-per-page", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "pagination-controls"], [1, "btn-page", 3, "click", "disabled"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "badge"], ["class", "btn-action", 3, "click", 4, "ngIf"], [1, "btn-action", "secondary", 3, "click"], ["class", "btn-action secondary", 3, "click", 4, "ngIf"], [1, "btn-action", 3, "click"], [1, "btn-page", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "600px", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "modal-body"], [2, "margin-bottom", "1.5rem"], [2, "font-size", "1rem", "font-weight", "600", "margin-bottom", "0.75rem"], [2, "margin", "0"], [2, "margin", "0 0 0.5rem 0"], ["style", "margin-bottom: 1.5rem;", 4, "ngIf"], [4, "ngIf"], ["style", "margin: 0 0 0.5rem 0;", 4, "ngIf"], ["style", "margin: 0;", 4, "ngIf"], ["target", "_blank", 2, "color", "#0066ff", 3, "href"], [1, "btn-primary", 3, "click"], [1, "modal", 3, "click"], [1, "form-group"], ["rows", "3", "placeholder", "Please explain why you need to reschedule...", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CandidateInterviewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Upcoming and past interview schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "table", 3)(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Date & Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275template(23, CandidateInterviewsComponent_tr_23_Template, 18, 9, "tr", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6)(26, "div", 7);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateInterviewsComponent_Template_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CandidateInterviewsComponent_Template_select_change_28_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(29, "option", 9);
        \u0275\u0275text(30, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 9);
        \u0275\u0275text(32, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 9);
        \u0275\u0275text(34, "100 per page");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 10)(36, "button", 11);
        \u0275\u0275listener("click", function CandidateInterviewsComponent_Template_button_click_36_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(37, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, CandidateInterviewsComponent_button_38_Template, 2, 3, "button", 12);
        \u0275\u0275elementStart(39, "button", 11);
        \u0275\u0275listener("click", function CandidateInterviewsComponent_Template_button_click_39_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(40, "Next");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(41, CandidateInterviewsComponent_div_41_Template, 12, 2, "div", 13)(42, CandidateInterviewsComponent_div_42_Template, 23, 4, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.paginatedInterviews);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate3("Showing ", ctx.startIndex + 1, "-", ctx.endIndex, " of ", ctx.totalInterviews, "");
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
        \u0275\u0275property("ngIf", ctx.showDetailsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRescheduleModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.candidate-interviews-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.scheduled[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 8px;\n  white-space: nowrap;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.items-per-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: white;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.btn-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #475569;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=candidate-interviews.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateInterviewsComponent, { className: "CandidateInterviewsComponent" });
})();
export {
  CandidateInterviewsComponent
};
//# sourceMappingURL=chunk-UZQ3CNST.js.map
