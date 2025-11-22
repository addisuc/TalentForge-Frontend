import {
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
  DatePipe,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app/features/client-portal/client-jobs.component.ts
function ClientJobsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 14);
    \u0275\u0275text(16, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 15);
    \u0275\u0275text(18, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275text(20, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.candidates);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.interviews);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 5, job_r1.posted, "MMM d, yyyy"));
  }
}
function ClientJobsComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ClientJobsComponent_button_38_Template_button_click_0_listener() {
      const page_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r3 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r3);
  }
}
var ClientJobsComponent = class _ClientJobsComponent {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.jobs = [
      { id: 1, title: "Senior Developer", status: "Active", candidates: 12, interviews: 3, posted: "2024-01-15" },
      { id: 2, title: "Product Manager", status: "Active", candidates: 8, interviews: 2, posted: "2024-01-20" },
      { id: 3, title: "UX Designer", status: "Active", candidates: 15, interviews: 4, posted: "2024-01-22" }
    ];
  }
  get totalJobs() {
    return this.jobs.length;
  }
  get totalPages() {
    return Math.ceil(this.totalJobs / this.itemsPerPage);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalJobs);
  }
  get paginatedJobs() {
    return this.jobs.slice(this.startIndex, this.endIndex);
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
  static {
    this.\u0275fac = function ClientJobsComponent_Factory(t) {
      return new (t || _ClientJobsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientJobsComponent, selectors: [["app-client-jobs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 11, consts: [[1, "client-jobs-page"], [1, "page-header"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-numbers"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "badge", "active"], [1, "btn-action"], [1, "btn-action", "secondary"], [3, "click"]], template: function ClientJobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Job Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Jobs you've posted with the recruiting team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "table", 3)(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Posted Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275template(23, ClientJobsComponent_tr_23_Template, 21, 8, "tr", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7)(28, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ClientJobsComponent_Template_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ClientJobsComponent_Template_select_change_28_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(29, "option", 9);
        \u0275\u0275text(30, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 9);
        \u0275\u0275text(32, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 9);
        \u0275\u0275text(34, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "button", 10);
        \u0275\u0275listener("click", function ClientJobsComponent_Template_button_click_35_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(36, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 11);
        \u0275\u0275template(38, ClientJobsComponent_button_38_Template, 2, 3, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 10);
        \u0275\u0275listener("click", function ClientJobsComponent_Template_button_click_39_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(40, "Next");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.paginatedJobs);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3("Showing ", ctx.startIndex + 1, " to ", ctx.endIndex, " of ", ctx.totalJobs, " jobs");
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
      }
    }, dependencies: [CommonModule, NgForOf, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.client-jobs-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 8px;\n  white-space: nowrap;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  margin-top: 24px;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n/*# sourceMappingURL=client-jobs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientJobsComponent, { className: "ClientJobsComponent" });
})();
export {
  ClientJobsComponent
};
//# sourceMappingURL=chunk-BRE5QVET.js.map
