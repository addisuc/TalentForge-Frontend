import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/billing/billing-subscriptions.component.ts
var BillingSubscriptionsComponent = class _BillingSubscriptionsComponent {
  static {
    this.\u0275fac = function BillingSubscriptionsComponent_Factory(t) {
      return new (t || _BillingSubscriptionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingSubscriptionsComponent, selectors: [["app-billing-subscriptions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 0, consts: [[1, "page"], [1, "page-header"], [1, "actions"], [1, "btn-secondary"], [1, "btn-primary"], [1, "filters"], ["type", "text", "placeholder", "Search tenant...", 1, "search-input"], [1, "filter-select"], [1, "placeholder-content"]], template: function BillingSubscriptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Subscriptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage all tenant subscriptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
        \u0275\u0275text(9, "Create Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275text(11, "Export List");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275elementStart(14, "select", 7)(15, "option");
        \u0275\u0275text(16, "All Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option");
        \u0275\u0275text(18, "Enterprise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option");
        \u0275\u0275text(20, "Professional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option");
        \u0275\u0275text(22, "Starter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "select", 7)(24, "option");
        \u0275\u0275text(25, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option");
        \u0275\u0275text(27, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option");
        \u0275\u0275text(29, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option");
        \u0275\u0275text(31, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 8)(33, "p");
        \u0275\u0275text(34, "Subscription management interface will be displayed here");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n}\np[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0066ff;\n  border: 1px solid #0066ff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.placeholder-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 48px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n  color: #64748b;\n}\n/*# sourceMappingURL=billing-subscriptions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingSubscriptionsComponent, { className: "BillingSubscriptionsComponent" });
})();
export {
  BillingSubscriptionsComponent
};
//# sourceMappingURL=chunk-Z2F5BL2Z.js.map
