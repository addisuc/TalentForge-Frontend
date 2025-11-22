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
  RouterLink,
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

// src/app/features/billing/billing-dashboard.component.ts
function BillingDashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", stat_r1.change > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", stat_r1.change > 0 ? "+" : "", "", stat_r1.change, "% ");
  }
}
function BillingDashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", transaction_r2.tenant, " \u2022 ", transaction_r2.date, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", transaction_r2.amount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", transaction_r2.amount > 0 ? "+" : "", "$", transaction_r2.amount, " ");
  }
}
function BillingDashboardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sub_r3.tenant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", sub_r3.plan, " \u2022 $", sub_r3.amount, "/mo");
    \u0275\u0275advance();
    \u0275\u0275classMap(sub_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r3.status);
  }
}
function BillingDashboardComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(payment_r4.tenant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Due ", payment_r4.dueDate, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", payment_r4.amount, "");
  }
}
function BillingDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payout_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(payout_r5.tenant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", payout_r5.placements, " placements");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", payout_r5.amount, "");
  }
}
function BillingDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function BillingDashboardComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.showInvoiceModal = false);
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function BillingDashboardComponent_div_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "h2");
    \u0275\u0275text(4, "Generate Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function BillingDashboardComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.showInvoiceModal = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35)(9, "label");
    \u0275\u0275text(10, "Select Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function BillingDashboardComponent_div_48_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedTenant, $event) || (ctx_r6.selectedTenant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 37);
    \u0275\u0275text(13, "Choose tenant...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 38);
    \u0275\u0275text(15, "Acme Corp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 39);
    \u0275\u0275text(17, "Tech Solutions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 40);
    \u0275\u0275text(19, "StartupXYZ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 35)(21, "label");
    \u0275\u0275text(22, "Billing Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function BillingDashboardComponent_div_48_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.billingPeriod, $event) || (ctx_r6.billingPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 41);
    \u0275\u0275text(25, "Current Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 42);
    \u0275\u0275text(27, "Previous Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 43);
    \u0275\u0275text(29, "Custom Range");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 35)(31, "label");
    \u0275\u0275text(32, "Invoice Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function BillingDashboardComponent_div_48_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.invoiceType, $event) || (ctx_r6.invoiceType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 44);
    \u0275\u0275text(35, "Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 45);
    \u0275\u0275text(37, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 43);
    \u0275\u0275text(39, "Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 35)(41, "label");
    \u0275\u0275text(42, "Notes (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 46);
    \u0275\u0275twoWayListener("ngModelChange", function BillingDashboardComponent_div_48_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.invoiceNotes, $event) || (ctx_r6.invoiceNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 47)(45, "button", 5);
    \u0275\u0275listener("click", function BillingDashboardComponent_div_48_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.showInvoiceModal = false);
    });
    \u0275\u0275text(46, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 48);
    \u0275\u0275text(48, "Generate Invoice");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedTenant);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.billingPeriod);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.invoiceType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.invoiceNotes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r6.selectedTenant);
  }
}
var BillingDashboardComponent = class _BillingDashboardComponent {
  constructor() {
    this.showInvoiceModal = false;
    this.selectedTenant = "";
    this.billingPeriod = "current";
    this.invoiceType = "subscription";
    this.invoiceNotes = "";
    this.stats = [
      { icon: "\u{1F4B0}", value: "$45,230", label: "Monthly Revenue", change: 12 },
      { icon: "\u{1F4CA}", value: "156", label: "Active Subscriptions", change: 8 },
      { icon: "\u{1F4B3}", value: "$12,450", label: "Pending Payments", change: -5 },
      { icon: "\u{1F4C8}", value: "$8,920", label: "Commission Payouts", change: 23 }
    ];
    this.transactions = [
      { description: "Subscription Payment", tenant: "Acme Corp", date: "Today", amount: 299 },
      { description: "Refund Processed", tenant: "Tech Solutions", date: "Yesterday", amount: -150 },
      { description: "Subscription Payment", tenant: "StartupXYZ", date: "2 days ago", amount: 499 }
    ];
    this.subscriptions = [
      { tenant: "Acme Corp", plan: "Enterprise", amount: 299, status: "active" },
      { tenant: "Tech Solutions", plan: "Professional", amount: 199, status: "active" },
      { tenant: "StartupXYZ", plan: "Starter", amount: 99, status: "pending" }
    ];
    this.pendingPayments = [
      { tenant: "Global Recruiting", dueDate: "Tomorrow", amount: 299 },
      { tenant: "HR Partners", dueDate: "In 3 days", amount: 199 }
    ];
    this.payouts = [
      { tenant: "Acme Corp", placements: 5, amount: 2500 },
      { tenant: "Tech Solutions", placements: 3, amount: 1500 }
    ];
  }
  static {
    this.\u0275fac = function BillingDashboardComponent_Factory(t) {
      return new (t || _BillingDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingDashboardComponent, selectors: [["app-billing-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 6, consts: [[1, "dashboard-page"], [1, "content"], [1, "page-header"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "dashboard-grid"], [1, "card"], [1, "card-header"], ["routerLink", "/platform-admin/billing"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "btn-link"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "stat-change"], [1, "list-item"], [1, "info"], [1, "name"], [1, "meta"], [1, "amount"], [1, "badge"], [1, "amount", "pending"], [1, "amount", "positive"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Acme Corp"], ["value", "Tech Solutions"], ["value", "StartupXYZ"], ["value", "current"], ["value", "previous"], ["value", "custom"], ["value", "subscription"], ["value", "commission"], ["rows", "3", "placeholder", "Add any notes...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-primary", 3, "disabled"]], template: function BillingDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Billing Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Financial Operations & Revenue Management");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function BillingDashboardComponent_Template_button_click_9_listener() {
          return ctx.showInvoiceModal = true;
        });
        \u0275\u0275text(10, "Generate Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275text(12, "Export Report");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275template(14, BillingDashboardComponent_div_14_Template, 9, 7, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h3");
        \u0275\u0275text(19, "Recent Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 12);
        \u0275\u0275text(21, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 13);
        \u0275\u0275template(23, BillingDashboardComponent_div_23_Template, 8, 7, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "h3");
        \u0275\u0275text(27, "Active Subscriptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 12);
        \u0275\u0275text(29, "Manage");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275template(31, BillingDashboardComponent_div_31_Template, 8, 6, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 10)(33, "div", 11)(34, "h3");
        \u0275\u0275text(35, "Pending Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275text(37, "Send Reminders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13);
        \u0275\u0275template(39, BillingDashboardComponent_div_39_Template, 8, 3, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 10)(41, "div", 11)(42, "h3");
        \u0275\u0275text(43, "Commission Payouts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 15);
        \u0275\u0275text(45, "Process Payouts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 13);
        \u0275\u0275template(47, BillingDashboardComponent_div_47_Template, 8, 3, "div", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(48, BillingDashboardComponent_div_48_Template, 49, 5, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.transactions);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.subscriptions);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.pendingPayments);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.payouts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showInvoiceModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.dashboard-page[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 12px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n}\n.stat-change[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.stat-change.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px;\n  border-radius: 8px;\n}\n.list-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 2px;\n  font-size: 0.875rem;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.amount.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.amount.pending[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=billing-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingDashboardComponent, { className: "BillingDashboardComponent" });
})();
export {
  BillingDashboardComponent
};
//# sourceMappingURL=chunk-LNLV5KYJ.js.map
