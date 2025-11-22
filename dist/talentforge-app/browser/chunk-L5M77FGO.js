import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/analytics/analytics.component.ts
function AnalyticsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", metric_r1.positive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r1.change, " ");
  }
}
var AnalyticsComponent = class _AnalyticsComponent {
  constructor() {
    this.metrics = [
      { label: "Time to Fill", value: "18 days", change: "-12%", positive: true },
      { label: "Offer Accept Rate", value: "87%", change: "+5%", positive: true },
      { label: "Cost per Hire", value: "$4,200", change: "-8%", positive: true },
      { label: "Quality of Hire", value: "4.2/5", change: "+0.3", positive: true }
    ];
  }
  static {
    this.\u0275fac = function AnalyticsComponent_Factory(t) {
      return new (t || _AnalyticsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 1, consts: [[1, "analytics-page"], [1, "page-header"], [1, "metrics-grid"], ["class", "metric-card", 4, "ngFor", "ngForOf"], [1, "charts-section"], [1, "chart-placeholder"], [1, "metric-card"], [1, "value"], [1, "change"]], template: function AnalyticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Analytics & Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Track your recruiting performance and metrics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275template(7, AnalyticsComponent_div_7_Template, 7, 5, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "h3");
        \u0275\u0275text(11, "\u{1F4CA} Hiring Funnel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Chart visualization coming soon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "h3");
        \u0275\u0275text(16, "\u{1F4C8} Source Effectiveness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "Chart visualization coming soon");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.metrics);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.analytics-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.metric-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 1rem;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.metric-card[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.metric-card[_ngcontent-%COMP%]   .change.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.chart-placeholder[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.chart-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n.chart-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=analytics.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent" });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=chunk-L5M77FGO.js.map
