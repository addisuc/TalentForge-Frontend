import {
  TenantService
} from "./chunk-2W7S4JUN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  NgIf,
  Subject,
  UpperCasePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CPNXOV62.js";

// src/app/core/services/confirmation.service.ts
var ConfirmationService = class _ConfirmationService {
  constructor() {
    this.confirmationSubject = new Subject();
    this.confirmation$ = this.confirmationSubject.asObservable();
  }
  confirm(config) {
    return new Promise((resolve) => {
      this.confirmationSubject.next(__spreadProps(__spreadValues({}, config), {
        onConfirm: () => resolve(true)
      }));
    });
  }
  show(title, message, onConfirm) {
    this.confirmationSubject.next({
      title,
      message,
      confirmText: "Confirm",
      cancelText: "Cancel",
      onConfirm
    });
  }
  static {
    this.\u0275fac = function ConfirmationService_Factory(t) {
      return new (t || _ConfirmationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmationService, factory: _ConfirmationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this.notificationSubject = new Subject();
    this.notification$ = this.notificationSubject.asObservable();
  }
  success(message, title = "Success") {
    this.notificationSubject.next({ title, message, type: "success" });
  }
  error(message, title = "Error") {
    this.notificationSubject.next({ title, message, type: "error" });
  }
  info(message, title = "Info") {
    this.notificationSubject.next({ title, message, type: "info" });
  }
  warning(message, title = "Warning") {
    this.notificationSubject.next({ title, message, type: "warning" });
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/platform-admin/billing.component.ts
function BillingComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingRefundsCount);
  }
}
function BillingComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "(0)");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "div", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275classMap(stat_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", stat_r2.trend.startsWith("+"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r2.trend);
  }
}
function BillingComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sortDirection === "asc" ? "\u2191" : "\u2193");
  }
}
function BillingComponent_tr_81_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editInvoice(invoice_r4));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendInvoice(invoice_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r4.status === "SENT" ? "Resend" : "Send");
  }
}
function BillingComponent_tr_81_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retryPayment(invoice_r4));
    });
    \u0275\u0275text(1, "Retry");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAsPaid(invoice_r4));
    });
    \u0275\u0275text(1, "Mark Paid");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.refundPayment(invoice_r4));
    });
    \u0275\u0275text(1, "Refund");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voidInvoice(invoice_r4));
    });
    \u0275\u0275text(1, "Void");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function BillingComponent_tr_81_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const invoice_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voidInvoice(invoice_r4));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
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
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 52);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 53)(20, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_Template_button_click_20_listener() {
      const invoice_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewInvoice(invoice_r4));
    });
    \u0275\u0275text(21, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, BillingComponent_tr_81_button_22_Template, 2, 0, "button", 55);
    \u0275\u0275elementStart(23, "button", 54);
    \u0275\u0275listener("click", function BillingComponent_tr_81_Template_button_click_23_listener() {
      const invoice_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadInvoice(invoice_r4));
    });
    \u0275\u0275text(24, "Download");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, BillingComponent_tr_81_button_25_Template, 2, 1, "button", 55)(26, BillingComponent_tr_81_button_26_Template, 2, 0, "button", 55)(27, BillingComponent_tr_81_button_27_Template, 2, 0, "button", 55)(28, BillingComponent_tr_81_button_28_Template, 2, 0, "button", 56)(29, BillingComponent_tr_81_button_29_Template, 2, 0, "button", 56)(30, BillingComponent_tr_81_button_30_Template, 2, 0, "button", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(invoice_r4.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r4.tenantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", invoice_r4.amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 15, invoice_r4.dueDate, "MMM d, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(invoice_r4.paidDate ? \u0275\u0275pipeBind2(13, 18, invoice_r4.paidDate, "MMM d, yyyy") : "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(invoice_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 21, invoice_r4.status));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", invoice_r4.status === "DRAFT");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", invoice_r4.status === "DRAFT" || invoice_r4.status === "SENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r4.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r4.status === "SENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r4.status === "PAID");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r4.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r4.status === "SENT");
  }
}
function BillingComponent_div_99_div_7_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r14 = ctx.$implicit;
    \u0275\u0275property("value", tenant_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r14.name);
  }
}
function BillingComponent_div_99_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "label");
    \u0275\u0275text(3, "Organization *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_99_div_7_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newInvoice.tenantId, $event) || (ctx_r0.newInvoice.tenantId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 68);
    \u0275\u0275text(6, "Select organization...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BillingComponent_div_99_div_7_option_7_Template, 2, 2, "option", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "label");
    \u0275\u0275text(10, "Amount *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_99_div_7_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newInvoice.amount, $event) || (ctx_r0.newInvoice.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66)(13, "label");
    \u0275\u0275text(14, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_99_div_7_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newInvoice.currency, $event) || (ctx_r0.newInvoice.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 71);
    \u0275\u0275text(17, "USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 72);
    \u0275\u0275text(19, "EUR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 73);
    \u0275\u0275text(21, "GBP");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 66)(23, "label");
    \u0275\u0275text(24, "Due Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_99_div_7_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newInvoice.dueDate, $event) || (ctx_r0.newInvoice.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 66)(27, "label");
    \u0275\u0275text(28, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 75);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_99_div_7_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newInvoice.description, $event) || (ctx_r0.newInvoice.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newInvoice.tenantId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.tenants);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newInvoice.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newInvoice.currency);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newInvoice.dueDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newInvoice.description);
  }
}
function BillingComponent_div_99_div_8_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_99_div_8_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.retryPayment(ctx_r0.selectedInvoice));
    });
    \u0275\u0275text(1, "\u{1F504} Retry Payment");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_99_div_8_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function BillingComponent_div_99_div_8_button_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.refundPayment(ctx_r0.selectedInvoice));
    });
    \u0275\u0275text(1, "\u{1F4B8} Issue Refund");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_99_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 76)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 78);
    \u0275\u0275text(9, "Amount Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 79);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 80)(13, "div", 81)(14, "label");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 52);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 81)(20, "label");
    \u0275\u0275text(21, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 81)(26, "label");
    \u0275\u0275text(27, "Paid Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 81)(32, "label");
    \u0275\u0275text(33, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 82)(37, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_99_div_8_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadInvoice(ctx_r0.selectedInvoice));
    });
    \u0275\u0275text(38, "\u{1F4E5} Download PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_99_div_8_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendInvoice(ctx_r0.selectedInvoice));
    });
    \u0275\u0275text(40, "\u{1F4E7} Send Email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, BillingComponent_div_99_div_8_button_41_Template, 2, 0, "button", 83)(42, BillingComponent_div_99_div_8_button_42_Template, 2, 0, "button", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.tenantName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r0.selectedInvoice.amount, "");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.selectedInvoice.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, ctx_r0.selectedInvoice.status));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 13, ctx_r0.selectedInvoice.dueDate, "MMM d, yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.paidDate ? \u0275\u0275pipeBind2(30, 16, ctx_r0.selectedInvoice.paidDate, "MMM d, yyyy") : "Not paid");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.invoiceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "PAID");
  }
}
function BillingComponent_div_99_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function BillingComponent_div_99_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitManualInvoice());
    });
    \u0275\u0275text(1, "Create Invoice");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function BillingComponent_div_99_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeInvoiceModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function BillingComponent_div_99_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function BillingComponent_div_99_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeInvoiceModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BillingComponent_div_99_div_7_Template, 30, 6, "div", 62)(8, BillingComponent_div_99_div_8_Template, 43, 19, "div", 62);
    \u0275\u0275elementStart(9, "div", 63)(10, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_99_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeInvoiceModal());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, BillingComponent_div_99_button_12_Template, 2, 0, "button", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice ? "Invoice Details" : "Create Manual Invoice");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.selectedInvoice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice ? "Close" : "Cancel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedInvoice);
  }
}
function BillingComponent_div_100_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_100_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    \u0275\u0275template(3, BillingComponent_div_100_span_3_Template, 2, 0, "span", 89)(4, BillingComponent_div_100_span_4_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 90)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 91);
    \u0275\u0275listener("click", function BillingComponent_div_100_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notification.show = false);
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("success", ctx_r0.notification.type === "success")("error", ctx_r0.notification.type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notification.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notification.type === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.notification.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.notification.message);
  }
}
function BillingComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 92)(2, "div", 93);
    \u0275\u0275text(3, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 94)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 95)(10, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_101_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelConfirmation());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275listener("click", function BillingComponent_div_101_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmAction());
    });
    \u0275\u0275text(13, "Confirm");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.confirmation.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.confirmation.message);
  }
}
function BillingComponent_div_102_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "p");
    \u0275\u0275text(2, "No pending refunds");
    \u0275\u0275elementEnd()();
  }
}
function BillingComponent_div_102_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 101)(8, "div", 78);
    \u0275\u0275text(9, "Refund Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 79);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 102)(13, "div", 103)(14, "span", 104);
    \u0275\u0275text(15, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 103)(19, "span", 104);
    \u0275\u0275text(20, "Requested:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 103)(25, "span", 104);
    \u0275\u0275text(26, "Method:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 105)(30, "button", 85);
    \u0275\u0275listener("click", function BillingComponent_div_102_div_9_Template_button_click_30_listener() {
      const refund_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectRefund(refund_r23));
    });
    \u0275\u0275text(31, "Reject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 6);
    \u0275\u0275listener("click", function BillingComponent_div_102_div_9_Template_button_click_32_listener() {
      const refund_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approveRefund(refund_r23));
    });
    \u0275\u0275text(33, "Approve Refund");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refund_r23 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(refund_r23.creditNoteNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Invoice: ", refund_r23.invoiceId, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", refund_r23.amount, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refund_r23.reason);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 6, refund_r23.createdAt, "MMM d, yyyy h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refund_r23.refundMethod);
  }
}
function BillingComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function BillingComponent_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRefundsModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function BillingComponent_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h2");
    \u0275\u0275text(4, "Pending Refund Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function BillingComponent_div_102_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRefundsModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65);
    \u0275\u0275template(8, BillingComponent_div_102_div_8_Template, 3, 0, "div", 96)(9, BillingComponent_div_102_div_9_Template, 34, 9, "div", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.pendingRefunds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pendingRefunds);
  }
}
function BillingComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function BillingComponent_div_103_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function BillingComponent_div_103_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h2");
    \u0275\u0275text(4, "Reject Refund");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function BillingComponent_div_103_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "p");
    \u0275\u0275text(9, "Please provide a reason for rejecting this refund:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 66)(11, "label");
    \u0275\u0275text(12, "Rejection Reason *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 107);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_103_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectionReason, $event) || (ctx_r0.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 63)(15, "button", 3);
    \u0275\u0275listener("click", function BillingComponent_div_103_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 85);
    \u0275\u0275listener("click", function BillingComponent_div_103_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmRejectRefund());
    });
    \u0275\u0275text(18, "Reject Refund");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectionReason);
  }
}
var BillingComponent = class _BillingComponent {
  constructor(tenantService, confirmationService, notificationService) {
    this.tenantService = tenantService;
    this.confirmationService = confirmationService;
    this.notificationService = notificationService;
    this.invoices = [];
    this.loading = false;
    this.showInvoiceModal = false;
    this.selectedInvoice = null;
    this.showRefundsModal = false;
    this.showRejectModal = false;
    this.pendingRefunds = [];
    this.pendingRefundsCount = 0;
    this.selectedRefund = null;
    this.rejectionReason = "";
    this.Math = Math;
    this.notification = {
      show: false,
      title: "",
      message: "",
      type: "success"
    };
    this.confirmation = {
      show: false,
      title: "",
      message: "",
      onConfirm: () => {
      }
    };
    this.newInvoice = {
      tenantId: "",
      amount: 0,
      currency: "USD",
      dueDate: "",
      description: ""
    };
    this.tenants = [];
    this.currentTenantName = "";
    this.searchTenant = "";
    this.selectedPeriod = "30";
    this.selectedStatus = "all";
    this.currentPage = 0;
    this.itemsPerPage = 25;
    this.totalElements = 0;
    this.sortField = "invoiceNumber";
    this.sortDirection = "desc";
    this.stats = [];
  }
  ngOnInit() {
    this.loadInvoices();
    this.loadTenants();
    this.loadCurrentTenant();
    this.loadPendingRefunds();
  }
  loadCurrentTenant() {
  }
  loadTenants() {
    this.tenantService.getAllTenants(0, 1e3).subscribe({
      next: (response) => {
        this.tenants = response.content || response;
      }
    });
  }
  loadInvoices() {
    this.loading = true;
    let invoices$ = this.tenantService.getInvoices(void 0, this.currentPage, this.itemsPerPage);
    invoices$.subscribe({
      next: (response) => {
        let invoices = response.content || response;
        invoices = this.applyFilters(invoices);
        invoices = this.applySorting(invoices);
        this.invoices = invoices;
        this.totalElements = invoices.length;
        this.calculateStats();
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load invoices:", err);
        this.loading = false;
      }
    });
  }
  applyFilters(invoices) {
    let filtered = [...invoices];
    if (this.searchTenant) {
      const search = this.searchTenant.toLowerCase();
      filtered = filtered.filter((inv) => inv.tenantName?.toLowerCase().includes(search) || inv.invoiceNumber?.toLowerCase().includes(search) || inv.status?.toLowerCase().includes(search));
    }
    if (this.selectedStatus !== "all") {
      filtered = filtered.filter((inv) => inv.status === this.selectedStatus.toUpperCase());
    }
    if (this.selectedPeriod !== "all") {
      const now = /* @__PURE__ */ new Date();
      let startDate;
      let endDate = null;
      if (this.selectedPeriod === "7") {
        startDate = /* @__PURE__ */ new Date();
        startDate.setDate(now.getDate() - 7);
      } else if (this.selectedPeriod === "30") {
        startDate = /* @__PURE__ */ new Date();
        startDate.setDate(now.getDate() - 30);
      } else if (this.selectedPeriod === "90") {
        startDate = /* @__PURE__ */ new Date();
        startDate.setDate(now.getDate() - 90);
      } else if (this.selectedPeriod === "365") {
        startDate = /* @__PURE__ */ new Date();
        startDate.setFullYear(now.getFullYear() - 1);
      } else if (this.selectedPeriod.startsWith("Q")) {
        const quarter = parseInt(this.selectedPeriod.substring(1));
        const year = now.getFullYear();
        const startMonth = (quarter - 1) * 3;
        const endMonth = startMonth + 3;
        startDate = new Date(year, startMonth, 1);
        endDate = new Date(year, endMonth, 0, 23, 59, 59);
      } else {
        return filtered;
      }
      filtered = filtered.filter((inv) => {
        const createdDate = new Date(inv.createdAt);
        if (endDate) {
          return createdDate >= startDate && createdDate <= endDate;
        }
        return createdDate >= startDate;
      });
    }
    return filtered;
  }
  applySorting(invoices) {
    return invoices.sort((a, b) => {
      let aValue = a[this.sortField];
      let bValue = b[this.sortField];
      if (this.sortField === "dueDate" || this.sortField === "paidDate" || this.sortField === "createdAt") {
        aValue = aValue ? new Date(aValue).getTime() : 0;
        bValue = bValue ? new Date(bValue).getTime() : 0;
      }
      if (this.sortField === "amount") {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
      }
      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue?.toLowerCase() || "";
      }
      if (aValue < bValue)
        return this.sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue)
        return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }
  sortBy(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDirection = "asc";
    }
    this.loadInvoices();
  }
  onFilterChange() {
    this.currentPage = 0;
    this.loadInvoices();
  }
  calculateStats() {
    const now = /* @__PURE__ */ new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const monthlyRevenue = this.invoices.filter((inv) => {
      const paidDate = inv.paidDate ? new Date(inv.paidDate) : null;
      return inv.status === "PAID" && paidDate && paidDate.getMonth() === thisMonth && paidDate.getFullYear() === thisYear;
    }).reduce((sum, inv) => sum + inv.amount, 0);
    const activeSubscriptions = this.invoices.filter((inv) => inv.status === "SENT").length;
    const pendingPayments = this.invoices.filter((inv) => inv.status === "SENT").reduce((sum, inv) => sum + inv.amount, 0);
    const totalRevenue = this.invoices.filter((inv) => inv.status === "PAID").reduce((sum, inv) => sum + inv.amount, 0);
    this.stats = [
      { label: "Monthly Revenue", value: `$${monthlyRevenue.toFixed(2)}`, trend: "", icon: "\u{1F4B0}", color: "green" },
      { label: "Active Invoices", value: activeSubscriptions.toString(), trend: "", icon: "\u{1F4CA}", color: "blue" },
      { label: "Pending Payments", value: `$${pendingPayments.toFixed(2)}`, trend: "", icon: "\u{1F4B3}", color: "red" },
      { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, trend: "", icon: "\u{1F4B5}", color: "purple" }
    ];
  }
  viewInvoice(invoice) {
    this.selectedInvoice = invoice;
    this.showInvoiceModal = true;
  }
  closeInvoiceModal() {
    this.showInvoiceModal = false;
    this.selectedInvoice = null;
  }
  retryPayment(invoice) {
    this.showConfirmation("Retry Payment", `Retry payment for ${invoice.tenantName}?`, () => {
      this.tenantService.retryPayment(invoice.id).subscribe({
        next: () => {
          this.showNotification("Payment retry initiated", "success");
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to retry payment", "error")
      });
    });
  }
  refundPayment(invoice) {
    this.showConfirmation("Refund Payment", `Refund $${invoice.amount} to ${invoice.tenantName}? This action cannot be undone.`, () => {
      this.tenantService.refundPayment(invoice.id).subscribe({
        next: () => {
          this.showNotification("Refund processed successfully", "success");
          this.loadInvoices();
          this.loadPendingRefunds();
        },
        error: () => this.showNotification("Failed to process refund", "error")
      });
    });
  }
  downloadInvoice(invoice) {
    this.showNotification("PDF generation coming soon", "error");
  }
  sendInvoice(invoice) {
    this.closeInvoiceModal();
    this.showConfirmation(invoice.status === "SENT" ? "Resend Invoice" : "Send Invoice", `Send invoice to ${invoice.tenantName}?`, () => {
      this.tenantService.sendInvoice(invoice.id).subscribe({
        next: () => {
          this.showNotification("Invoice sent successfully", "success");
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to send invoice", "error")
      });
    });
  }
  createManualInvoice() {
    this.selectedInvoice = null;
    this.newInvoice = {
      tenantId: "",
      amount: 0,
      currency: "USD",
      dueDate: "",
      description: ""
    };
    this.showInvoiceModal = true;
  }
  submitManualInvoice() {
    if (this.isPlatformAdmin() && !this.newInvoice.tenantId) {
      this.showNotification("Please select an organization", "error");
      return;
    }
    if (!this.newInvoice.amount || !this.newInvoice.dueDate) {
      this.showNotification("Please fill all required fields", "error");
      return;
    }
    if (this.selectedInvoice) {
      this.tenantService.updateInvoice(this.selectedInvoice.id, { amount: this.newInvoice.amount }).subscribe({
        next: () => {
          this.showNotification("Invoice updated successfully", "success");
          this.closeInvoiceModal();
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to update invoice", "error")
      });
    } else {
      this.tenantService.createManualInvoice(this.newInvoice).subscribe({
        next: () => {
          this.showNotification("Invoice created successfully", "success");
          this.closeInvoiceModal();
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to create invoice", "error")
      });
    }
  }
  showNotification(message, type) {
    this.notification = {
      show: true,
      title: type === "success" ? "Success" : "Error",
      message,
      type
    };
    setTimeout(() => this.notification.show = false, 3e3);
  }
  showConfirmation(title, message, onConfirm) {
    this.confirmation = {
      show: true,
      title,
      message,
      onConfirm
    };
  }
  confirmAction() {
    this.confirmation.onConfirm();
    this.confirmation.show = false;
  }
  cancelConfirmation() {
    this.confirmation.show = false;
  }
  isPlatformAdmin() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    console.log("Current user role:", user.role);
    return user.role === "PLATFORM_ADMIN" || user.role === "PLATFORM_SUPER_ADMIN" || user.role === "BILLING_MANAGER";
  }
  exportReport() {
    const csv = this.generateCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `billing-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
  }
  editInvoice(invoice) {
    if (invoice.status !== "DRAFT") {
      this.showNotification("Only DRAFT invoices can be edited", "error");
      return;
    }
    this.selectedInvoice = invoice;
    this.newInvoice = {
      tenantId: invoice.tenantId,
      amount: invoice.amount,
      currency: invoice.currency,
      dueDate: invoice.dueDate,
      description: ""
    };
    this.showInvoiceModal = true;
  }
  markAsPaid(invoice) {
    this.closeInvoiceModal();
    this.showConfirmation("Mark as Paid", `Mark invoice ${invoice.invoiceNumber} as paid?`, () => {
      this.tenantService.markInvoiceAsPaid(invoice.id).subscribe({
        next: () => {
          this.showNotification("Invoice marked as paid", "success");
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to mark invoice as paid", "error")
      });
    });
  }
  voidInvoice(invoice) {
    this.showConfirmation(invoice.status === "DRAFT" ? "Void Invoice" : "Cancel Invoice", `${invoice.status === "DRAFT" ? "Void" : "Cancel"} invoice ${invoice.invoiceNumber}? This action cannot be undone.`, () => {
      this.tenantService.voidInvoice(invoice.id).subscribe({
        next: () => {
          this.showNotification("Invoice cancelled", "success");
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to cancel invoice", "error")
      });
    });
  }
  generateCSV() {
    const headers = ["Invoice #", "Tenant", "Amount", "Due Date", "Paid Date", "Status"];
    const rows = this.invoices.map((inv) => [
      inv.invoiceNumber,
      inv.tenantName,
      inv.amount,
      inv.dueDate,
      inv.paidDate || "N/A",
      inv.status
    ]);
    return [headers, ...rows].map((row) => row.join(",")).join("\n");
  }
  get totalPages() {
    return Math.ceil(this.totalElements / this.itemsPerPage);
  }
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadInvoices();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadInvoices();
    }
  }
  onItemsPerPageChange() {
    this.currentPage = 0;
    this.loadInvoices();
  }
  loadPendingRefunds() {
    this.tenantService.getPendingRefunds().subscribe({
      next: (refunds) => {
        console.log("Pending refunds loaded:", refunds);
        this.pendingRefunds = refunds;
        this.pendingRefundsCount = refunds.length;
        console.log("Pending refunds count:", this.pendingRefundsCount);
      },
      error: (err) => {
        console.error("Failed to load pending refunds:", err);
        this.showNotification("Failed to load pending refunds", "error");
      }
    });
  }
  viewPendingRefunds() {
    this.loadPendingRefunds();
    this.showRefundsModal = true;
  }
  closeRefundsModal() {
    this.showRefundsModal = false;
  }
  approveRefund(refund) {
    this.showConfirmation("Approve Refund", `Approve refund of $${refund.amount} for ${refund.creditNoteNumber}? This will process the refund immediately.`, () => {
      this.tenantService.approveRefund(refund.id).subscribe({
        next: () => {
          this.showNotification("Refund approved and processed", "success");
          this.loadPendingRefunds();
          this.loadInvoices();
        },
        error: () => this.showNotification("Failed to approve refund", "error")
      });
    });
  }
  rejectRefund(refund) {
    this.selectedRefund = refund;
    this.rejectionReason = "";
    this.showRejectModal = true;
  }
  closeRejectModal() {
    this.showRejectModal = false;
    this.selectedRefund = null;
    this.rejectionReason = "";
  }
  confirmRejectRefund() {
    if (!this.rejectionReason) {
      this.showNotification("Please provide a rejection reason", "error");
      return;
    }
    this.tenantService.rejectRefund(this.selectedRefund.id, this.rejectionReason).subscribe({
      next: () => {
        this.showNotification("Refund rejected", "success");
        this.closeRejectModal();
        this.loadPendingRefunds();
      },
      error: () => this.showNotification("Failed to reject refund", "error")
    });
  }
  static {
    this.\u0275fac = function BillingComponent_Factory(t) {
      return new (t || _BillingComponent)(\u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingComponent, selectors: [["app-billing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 104, vars: 29, consts: [[1, "billing-page"], [1, "page-header"], [1, "header-actions"], [1, "btn-secondary", 3, "click"], ["class", "badge-count", 4, "ngIf"], ["style", "opacity: 0.5;", 4, "ngIf"], [1, "btn-primary", 3, "click"], [1, "stats-grid"], ["class", "stat-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "filters-section"], [1, "search-bar"], [1, "icon"], ["type", "text", "placeholder", "Search by tenant or invoice #...", 3, "ngModelChange", "ngModel"], [1, "filters"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "7"], ["value", "30"], ["value", "90"], ["value", "Q1"], ["value", "Q2"], ["value", "Q3"], ["value", "Q4"], ["value", "365"], ["value", "draft"], ["value", "sent"], ["value", "paid"], ["value", "cancelled"], ["value", "refunded"], [1, "table-container"], ["role", "table", 1, "data-table"], [1, "sortable", 3, "click"], ["class", "sort-icon", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-info"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "notification-overlay", 4, "ngIf"], [1, "badge-count"], [2, "opacity", "0.5"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend"], [1, "sort-icon"], [1, "badge"], [1, "action-buttons"], [1, "btn-action", 3, "click"], ["class", "btn-action", 3, "click", 4, "ngIf"], ["class", "btn-action danger", 3, "click", 4, "ngIf"], [1, "btn-action", "danger", 3, "click"], [1, "modal-overlay", 3, "click"], ["role", "dialog", 1, "modal-content", "large", 3, "click"], [1, "modal-header"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "modal-body"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "USD"], ["value", "EUR"], ["value", "GBP"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Invoice description...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "invoice-header"], [1, "invoice-amount"], [1, "amount-label"], [1, "amount-value"], [1, "details-grid"], [1, "detail-item"], [1, "invoice-actions"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn-danger", 3, "click", 4, "ngIf"], [1, "btn-danger", 3, "click"], [1, "notification-overlay"], [1, "notification-card"], [1, "notification-icon"], [4, "ngIf"], [1, "notification-content"], [1, "notification-close", 3, "click"], [1, "confirmation-card"], [1, "confirmation-icon"], [1, "confirmation-content"], [1, "confirmation-actions"], ["class", "empty-state", 4, "ngIf"], ["class", "refund-card", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "refund-card"], [1, "refund-header"], [1, "refund-amount-display"], [1, "refund-details"], [1, "detail-row"], [1, "detail-label"], [1, "refund-actions"], ["role", "dialog", 1, "modal-content", 3, "click"], ["rows", "4", "placeholder", "Enter reason...", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function BillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Billing & Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage subscriptions, invoices, and payments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
        \u0275\u0275listener("click", function BillingComponent_Template_button_click_8_listener() {
          return ctx.createManualInvoice();
        });
        \u0275\u0275text(9, "+ Manual Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 3);
        \u0275\u0275listener("click", function BillingComponent_Template_button_click_10_listener() {
          return ctx.viewPendingRefunds();
        });
        \u0275\u0275text(11, " \u26A0\uFE0F Pending Refunds ");
        \u0275\u0275template(12, BillingComponent_span_12_Template, 2, 1, "span", 4)(13, BillingComponent_span_13_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function BillingComponent_Template_button_click_14_listener() {
          return ctx.exportReport();
        });
        \u0275\u0275text(15, "\u{1F4CA} Export Report");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275template(17, BillingComponent_div_17_Template, 10, 8, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "span", 11);
        \u0275\u0275text(21, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTenant, $event) || (ctx.searchTenant = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BillingComponent_Template_input_ngModelChange_22_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BillingComponent_Template_select_ngModelChange_24_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(25, "option", 15);
        \u0275\u0275text(26, "All Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 16);
        \u0275\u0275text(28, "Last 7 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 17);
        \u0275\u0275text(30, "Last 30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 18);
        \u0275\u0275text(32, "Last 90 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 19);
        \u0275\u0275text(34, "Q1 (Jan-Mar)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 20);
        \u0275\u0275text(36, "Q2 (Apr-Jun)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 21);
        \u0275\u0275text(38, "Q3 (Jul-Sep)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 22);
        \u0275\u0275text(40, "Q4 (Oct-Dec)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 23);
        \u0275\u0275text(42, "This Year");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_Template_select_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BillingComponent_Template_select_ngModelChange_43_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(44, "option", 15);
        \u0275\u0275text(45, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 24);
        \u0275\u0275text(47, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option", 25);
        \u0275\u0275text(49, "Sent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "option", 26);
        \u0275\u0275text(51, "Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "option", 27);
        \u0275\u0275text(53, "Cancelled");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "option", 28);
        \u0275\u0275text(55, "Refunded");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 29)(57, "table", 30)(58, "thead")(59, "tr")(60, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_60_listener() {
          return ctx.sortBy("invoiceNumber");
        });
        \u0275\u0275text(61, " Invoice # ");
        \u0275\u0275template(62, BillingComponent_span_62_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_63_listener() {
          return ctx.sortBy("tenantName");
        });
        \u0275\u0275text(64, " Tenant ");
        \u0275\u0275template(65, BillingComponent_span_65_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_66_listener() {
          return ctx.sortBy("amount");
        });
        \u0275\u0275text(67, " Amount ");
        \u0275\u0275template(68, BillingComponent_span_68_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_69_listener() {
          return ctx.sortBy("dueDate");
        });
        \u0275\u0275text(70, " Due Date ");
        \u0275\u0275template(71, BillingComponent_span_71_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_72_listener() {
          return ctx.sortBy("paidDate");
        });
        \u0275\u0275text(73, " Paid Date ");
        \u0275\u0275template(74, BillingComponent_span_74_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "th", 31);
        \u0275\u0275listener("click", function BillingComponent_Template_th_click_75_listener() {
          return ctx.sortBy("status");
        });
        \u0275\u0275text(76, " Status ");
        \u0275\u0275template(77, BillingComponent_span_77_Template, 2, 1, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "th");
        \u0275\u0275text(79, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "tbody");
        \u0275\u0275template(81, BillingComponent_tr_81_Template, 31, 23, "tr", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "div", 34)(83, "div", 35);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 36)(86, "select", 37);
        \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_Template_select_ngModelChange_86_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function BillingComponent_Template_select_change_86_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(87, "option", 38);
        \u0275\u0275text(88, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "option", 38);
        \u0275\u0275text(90, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "option", 38);
        \u0275\u0275text(92, "100 per page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "button", 39);
        \u0275\u0275listener("click", function BillingComponent_Template_button_click_93_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(94, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "span", 40);
        \u0275\u0275text(96);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "button", 39);
        \u0275\u0275listener("click", function BillingComponent_Template_button_click_97_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(98, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(99, BillingComponent_div_99_Template, 13, 5, "div", 41)(100, BillingComponent_div_100_Template, 12, 8, "div", 42)(101, BillingComponent_div_101_Template, 14, 2, "div", 42)(102, BillingComponent_div_102_Template, 10, 2, "div", 41)(103, BillingComponent_div_103_Template, 19, 1, "div", 41);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.pendingRefundsCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pendingRefundsCount === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTenant);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ctx.sortField === "invoiceNumber");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortField === "tenantName");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortField === "amount");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortField === "dueDate");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortField === "paidDate");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortField === "status");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.invoices);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.currentPage * ctx.itemsPerPage + 1, " to ", ctx.Math.min((ctx.currentPage + 1) * ctx.itemsPerPage, ctx.totalElements), " of ", ctx.totalElements, " invoices ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage + 1, " of ", ctx.totalPages, "");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage >= ctx.totalPages - 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showInvoiceModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notification.show);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.confirmation.show);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRefundsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRejectModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, UpperCasePipe, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.billing-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  gap: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid;\n}\n.stat-card.green[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.stat-card.blue[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.stat-card.red[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.stat-card.purple[_ngcontent-%COMP%] {\n  border-left-color: #8b5cf6;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #ef4444;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n  position: relative;\n}\n.search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0066ff;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-size: 1.2rem;\n  color: #0066ff;\n  font-weight: bold;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #334155;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.PAID[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.SENT[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.DRAFT[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.badge.CANCELLED[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge.REFUNDED[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #0066ff;\n  color: #0066ff;\n}\n.btn-action.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-action.danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #475569;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #dc2626;\n  border-radius: 8px;\n  background: white;\n  color: #dc2626;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-content.large[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #64748b;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-left: 3px solid #0066ff;\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  color: #0369a1;\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #dc2626;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: white;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.invoice-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.invoice-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.invoice-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.invoice-header[_ngcontent-%COMP%]   .invoice-amount[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.invoice-header[_ngcontent-%COMP%]   .invoice-amount[_ngcontent-%COMP%]   .amount-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.invoice-header[_ngcontent-%COMP%]   .invoice-amount[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0066ff;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.5rem;\n}\n.details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9375rem;\n  color: #1e293b;\n}\n.invoice-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n[_nghost-%COMP%]     .toast {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: 500;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: all 0.3s ease;\n  z-index: 9999;\n}\n[_nghost-%COMP%]     .toast.show {\n  opacity: 1;\n  transform: translateY(0);\n}\n[_nghost-%COMP%]     .toast.toast-success {\n  background: #10b981;\n}\n[_nghost-%COMP%]     .toast.toast-error {\n  background: #ef4444;\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.notification-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  min-width: 400px;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n  position: relative;\n}\n.notification-card.success[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.notification-card.error[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.success[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0.25rem;\n  line-height: 1;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.confirmation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  min-width: 400px;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n  text-align: center;\n}\n.confirmation-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #fef3c7;\n  color: #f59e0b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1.5rem;\n}\n.confirmation-content[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.confirmation-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.75rem 0;\n}\n.confirmation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.confirmation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.badge-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #ef4444;\n  color: white;\n  border-radius: 12px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n.refund-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n.refund-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.refund-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.25rem 0;\n}\n.refund-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.refund-amount-display[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.refund-amount-display[_ngcontent-%COMP%]   .amount-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.refund-amount-display[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #ef4444;\n}\n.refund-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.refund-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.refund-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.refund-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  min-width: 120px;\n}\n.refund-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=billing.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingComponent, { className: "BillingComponent" });
})();
export {
  BillingComponent
};
//# sourceMappingURL=chunk-GX6WNURA.js.map
