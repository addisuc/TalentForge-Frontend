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
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/client-portal/client-interviews.component.ts
function ClientInterviewsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "No interviews found");
    \u0275\u0275elementEnd()();
  }
}
function ClientInterviewsComponent_tr_57_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.platform);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.meetingId);
  }
}
function ClientInterviewsComponent_tr_57_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r2.location || "TBD");
  }
}
function ClientInterviewsComponent_tr_57_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ClientInterviewsComponent_tr_57_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const interview_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.provideFeedback(interview_r2));
    });
    \u0275\u0275text(1, "\u{1F4DD}");
    \u0275\u0275elementEnd();
  }
}
function ClientInterviewsComponent_tr_57_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ClientInterviewsComponent_tr_57_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const interview_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.requestReschedule(interview_r2));
    });
    \u0275\u0275text(1, "\u{1F4C5}");
    \u0275\u0275elementEnd();
  }
}
function ClientInterviewsComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 27)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 30)(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 33)(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275template(28, ClientInterviewsComponent_tr_57_div_28_Template, 5, 2, "div", 35)(29, ClientInterviewsComponent_tr_57_span_29_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td")(31, "span", 37);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 38)(35, "button", 39);
    \u0275\u0275listener("click", function ClientInterviewsComponent_tr_57_Template_button_click_35_listener() {
      const interview_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(interview_r2));
    });
    \u0275\u0275text(36, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ClientInterviewsComponent_tr_57_button_37_Template, 2, 0, "button", 40)(38, ClientInterviewsComponent_tr_57_button_38_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const interview_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r2.candidateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.candidateEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r2.position);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r2.round);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.duration);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r2.interviewer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.interviewerRole);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r2.meetingLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !interview_r2.meetingLink);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(interview_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", interview_r2.status === "Scheduled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r2.status === "Scheduled");
  }
}
function ClientInterviewsComponent_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ClientInterviewsComponent_button_72_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r7 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
var ClientInterviewsComponent = class _ClientInterviewsComponent {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.filterStatus = "all";
    this.filterTime = "all";
    this.searchTerm = "";
    this.interviews = [
      {
        id: 1,
        candidateName: "Sarah Johnson",
        candidateEmail: "sarah.j@email.com",
        position: "Senior Full Stack Developer",
        round: "Technical Round",
        date: "Jan 30, 2024",
        time: "2:00 PM - 3:30 PM",
        duration: "90 min",
        interviewer: "John Smith",
        interviewerRole: "Engineering Manager",
        meetingLink: "https://meet.google.com/abc-defg-hij",
        platform: "Google Meet",
        meetingId: "abc-defg-hij",
        location: null,
        status: "Scheduled",
        notes: "Focus on React and Node.js experience"
      },
      {
        id: 2,
        candidateName: "Michael Chen",
        candidateEmail: "mchen@email.com",
        position: "Product Manager",
        round: "Final Round",
        date: "Jan 31, 2024",
        time: "10:00 AM - 11:00 AM",
        duration: "60 min",
        interviewer: "Lisa Anderson",
        interviewerRole: "VP of Product",
        meetingLink: "https://zoom.us/j/123456789",
        platform: "Zoom",
        meetingId: "ID: 123 456 789",
        location: null,
        status: "Scheduled",
        notes: "Product strategy discussion"
      },
      {
        id: 3,
        candidateName: "Emily Davis",
        candidateEmail: "emily.d@email.com",
        position: "UX Designer",
        round: "Portfolio Review",
        date: "Jan 25, 2024",
        time: "3:00 PM - 4:00 PM",
        duration: "60 min",
        interviewer: "Mark Wilson",
        interviewerRole: "Design Lead",
        meetingLink: null,
        platform: null,
        meetingId: null,
        location: "Office - Conference Room A",
        status: "Completed",
        notes: "Review design portfolio and case studies"
      },
      {
        id: 4,
        candidateName: "David Martinez",
        candidateEmail: "dmartinez@email.com",
        position: "Senior Full Stack Developer",
        round: "HR Screening",
        date: "Feb 1, 2024",
        time: "9:00 AM - 9:30 AM",
        duration: "30 min",
        interviewer: "Rachel Green",
        interviewerRole: "HR Manager",
        meetingLink: "https://teams.microsoft.com/l/meetup",
        platform: "MS Teams",
        meetingId: "Meeting ID: 345 678 901",
        location: null,
        status: "Scheduled",
        notes: "Initial screening call"
      },
      {
        id: 5,
        candidateName: "Jennifer Lee",
        candidateEmail: "jlee@email.com",
        position: "Product Manager",
        round: "Technical Round",
        date: "Jan 28, 2024",
        time: "2:00 PM - 3:00 PM",
        duration: "60 min",
        interviewer: "Tom Brown",
        interviewerRole: "Senior PM",
        meetingLink: null,
        platform: null,
        meetingId: null,
        location: null,
        status: "Cancelled",
        notes: "Candidate requested reschedule"
      }
    ];
    this.filteredInterviews = [...this.interviews];
  }
  get totalInterviews() {
    return this.filteredInterviews.length;
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
    return this.filteredInterviews.slice(this.startIndex, this.endIndex);
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
  applyFilters() {
    this.filteredInterviews = this.interviews.filter((interview) => {
      const matchesStatus = this.filterStatus === "all" || interview.status.toLowerCase() === this.filterStatus;
      const matchesSearch = !this.searchTerm || interview.candidateName.toLowerCase().includes(this.searchTerm.toLowerCase()) || interview.position.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
    this.currentPage = 1;
  }
  viewDetails(interview) {
    alert(`Interview Details:

Candidate: ${interview.candidateName}
Position: ${interview.position}
Round: ${interview.round}
Date: ${interview.date} ${interview.time}
Interviewer: ${interview.interviewer}
Notes: ${interview.notes}`);
  }
  provideFeedback(interview) {
    alert("Feedback form will open here");
  }
  requestReschedule(interview) {
    if (confirm(`Request to reschedule interview with ${interview.candidateName}?`)) {
      alert("Reschedule request sent to recruiter");
    }
  }
  static {
    this.\u0275fac = function ClientInterviewsComponent_Factory(t) {
      return new (t || _ClientInterviewsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientInterviewsComponent, selectors: [["app-client-interviews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 15, consts: [[1, "client-interviews-page"], [1, "page-header"], [1, "filters"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "scheduled"], ["value", "completed"], ["value", "cancelled"], ["value", "today"], ["value", "week"], ["value", "month"], [1, "search-box"], ["type", "text", "placeholder", "Search candidate or position...", 3, "ngModelChange", "input", "ngModel"], [1, "table-container"], [1, "data-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-left"], [1, "pagination-info"], [1, "items-per-page", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "pagination-controls"], [1, "btn-page", 3, "click", "disabled"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["colspan", "9", 2, "text-align", "center", "padding", "2rem", "color", "#64748b"], [1, "candidate-cell"], [1, "email"], [1, "round-badge"], [1, "datetime-cell"], [1, "date"], [1, "time"], [1, "interviewer-cell"], [1, "role"], ["class", "meeting-info", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge"], [1, "action-buttons"], ["title", "View Details", 1, "btn-action", 3, "click"], ["class", "btn-action", "title", "Provide Feedback", 3, "click", 4, "ngIf"], ["class", "btn-action secondary", "title", "Request Reschedule", 3, "click", 4, "ngIf"], [1, "meeting-info"], [1, "platform"], [1, "meeting-id"], [1, "text-muted"], ["title", "Provide Feedback", 1, "btn-action", 3, "click"], ["title", "Request Reschedule", 1, "btn-action", "secondary", 3, "click"], [1, "btn-page", 3, "click"]], template: function ClientInterviewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Review and manage scheduled candidate interviews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "label");
        \u0275\u0275text(9, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function ClientInterviewsComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ClientInterviewsComponent_Template_select_change_10_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(11, "option", 5);
        \u0275\u0275text(12, "All Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 6);
        \u0275\u0275text(14, "Scheduled");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 7);
        \u0275\u0275text(16, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 8);
        \u0275\u0275text(18, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 3)(20, "label");
        \u0275\u0275text(21, "Time Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function ClientInterviewsComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTime, $event) || (ctx.filterTime = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ClientInterviewsComponent_Template_select_change_22_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(23, "option", 5);
        \u0275\u0275text(24, "All Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 9);
        \u0275\u0275text(26, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 10);
        \u0275\u0275text(28, "This Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 11);
        \u0275\u0275text(30, "This Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 12)(32, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ClientInterviewsComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function ClientInterviewsComponent_Template_input_input_32_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 14)(34, "table", 15)(35, "thead")(36, "tr")(37, "th");
        \u0275\u0275text(38, "Candidate Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Position Applied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Interview Round");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Date & Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Interviewer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Meeting Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275template(56, ClientInterviewsComponent_tr_56_Template, 3, 0, "tr", 16)(57, ClientInterviewsComponent_tr_57_Template, 39, 16, "tr", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 18)(59, "div", 19)(60, "div", 20);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function ClientInterviewsComponent_Template_select_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ClientInterviewsComponent_Template_select_change_62_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(63, "option", 22);
        \u0275\u0275text(64, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "option", 22);
        \u0275\u0275text(66, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "option", 22);
        \u0275\u0275text(68, "100 per page");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 23)(70, "button", 24);
        \u0275\u0275listener("click", function ClientInterviewsComponent_Template_button_click_70_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(71, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275template(72, ClientInterviewsComponent_button_72_Template, 2, 3, "button", 25);
        \u0275\u0275elementStart(73, "button", 24);
        \u0275\u0275listener("click", function ClientInterviewsComponent_Template_button_click_73_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(74, "Next");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTime);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngIf", ctx.filteredInterviews.length === 0);
        \u0275\u0275advance();
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
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.client-interviews-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.candidate-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.candidate-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.candidate-cell[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.datetime-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.datetime-cell[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 500;\n}\n.datetime-cell[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.interviewer-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.interviewer-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.interviewer-cell[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.round-badge[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.meeting-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.meeting-info[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.meeting-info[_ngcontent-%COMP%]   .meeting-id[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n  font-family: monospace;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.scheduled[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn-action.secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-top: 1px solid #e2e8f0;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.items-per-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: white;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.btn-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=client-interviews.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientInterviewsComponent, { className: "ClientInterviewsComponent" });
})();
export {
  ClientInterviewsComponent
};
//# sourceMappingURL=chunk-WZZZE5ZE.js.map
