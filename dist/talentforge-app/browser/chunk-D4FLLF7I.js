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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/homepage.component.ts
function HomepageComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 106);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.trend);
  }
}
function HomepageComponent_div_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "div", 109);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 110);
    \u0275\u0275text(9, "Learn more \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.description);
  }
}
function HomepageComponent_div_167_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", item_r3, "");
  }
}
function HomepageComponent_div_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 113);
    \u0275\u0275template(8, HomepageComponent_div_167_li_8_Template, 2, 1, "li", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const solution_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", solution_r4.features);
  }
}
function HomepageComponent_div_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.description);
  }
}
function HomepageComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 120)(8, "span", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const benefit_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(benefit_r7.stat);
  }
}
function HomepageComponent_div_198_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275text(1, "MOST POPULAR");
    \u0275\u0275elementEnd();
  }
}
function HomepageComponent_div_198_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", feature_r8, "");
  }
}
function HomepageComponent_div_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275template(1, HomepageComponent_div_198_div_1_Template, 2, 0, "div", 123);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124)(5, "span", 125);
    \u0275\u0275text(6, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 126);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 127);
    \u0275\u0275text(10, "/month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 128);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 129);
    \u0275\u0275template(14, HomepageComponent_div_198_li_14_Template, 2, 1, "li", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 130);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r9 = ctx.$implicit;
    \u0275\u0275classProp("featured", plan_r9.featured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r9.featured);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r9.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(plan_r9.price);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(plan_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", plan_r9.features);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-plan-featured", plan_r9.featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r9.cta);
  }
}
var HomepageComponent = class _HomepageComponent {
  constructor() {
    this.stats = [
      { icon: "\u2728", number: "AI-Powered", label: "Smart Matching", trend: "Machine Learning" },
      { icon: "\u26A1", number: "Automated", label: "Workflow Engine", trend: "Save Time" },
      { icon: "\u{1F517}", number: "150+", label: "Integrations", trend: "Connect Everything" },
      { icon: "\u{1F4CA}", number: "Real-Time", label: "Analytics Dashboard", trend: "Data-Driven" }
    ];
    this.features = [
      {
        icon: "\u{1F50D}",
        title: "AI Talent Matching",
        description: "Machine learning algorithms analyze 200+ data points to match candidates with jobs based on skills, experience, culture fit, and career trajectory."
      },
      {
        icon: "\u26A1",
        title: "Automated Workflows",
        description: "Eliminate manual tasks with intelligent automation for resume screening, candidate outreach, interview scheduling, and follow-ups."
      },
      {
        icon: "\u{1F4CA}",
        title: "Predictive Analytics",
        description: "Forecast hiring needs, identify bottlenecks, and optimize your recruitment funnel with real-time dashboards and insights."
      },
      {
        icon: "\u{1F465}",
        title: "Talent Pool CRM",
        description: "Build and nurture relationships with passive candidates through automated engagement campaigns and personalized outreach."
      },
      {
        icon: "\u{1F3AC}",
        title: "Video Interviewing",
        description: "Conduct live or asynchronous video interviews with AI-powered transcription, sentiment analysis, and automated scoring."
      },
      {
        icon: "\u{1F517}",
        title: "Enterprise Integrations",
        description: "Seamlessly connect with 150+ tools including LinkedIn Recruiter, Indeed, HRIS systems, Slack, Teams, and more."
      }
    ];
    this.solutions = [
      {
        icon: "\u{1F4BC}",
        title: "For Enterprises",
        description: "Scale your hiring with enterprise-grade features",
        features: ["Unlimited users", "Custom workflows", "Dedicated support", "SSO & SAML"]
      },
      {
        icon: "\u{1F680}",
        title: "For Startups",
        description: "Hire fast without breaking the bank",
        features: ["Free trial", "Quick setup", "Flexible pricing", "Growth tools"]
      },
      {
        icon: "\u{1F3ED}",
        title: "For Agencies",
        description: "Manage multiple clients effortlessly",
        features: ["Multi-tenant", "Client portals", "White-label", "Bulk actions"]
      }
    ];
    this.workflowSteps = [
      { icon: "\u{1F4DD}", title: "Post Jobs", description: "Create job postings in minutes with AI-powered job descriptions and auto-distribution to 50+ job boards" },
      { icon: "\u{1F50D}", title: "Source Candidates", description: "AI matches top candidates from your talent pool and external sources based on job requirements" },
      { icon: "\u2705", title: "Screen & Interview", description: "Automated screening, video interviews, and collaborative evaluation with your hiring team" },
      { icon: "\u{1F389}", title: "Hire & Onboard", description: "Send offers, collect e-signatures, and seamlessly transition to onboarding workflows" }
    ];
    this.benefits = [
      {
        icon: "\u26A1",
        title: "Faster Hiring",
        description: "Reduce time-to-hire by up to 70% with AI-powered candidate matching and automated workflows.",
        stat: "Average 12 days vs industry 45 days"
      },
      {
        icon: "\u{1F4B0}",
        title: "Cost Effective",
        description: "Save on recruitment costs with efficient processes and reduced dependency on external agencies.",
        stat: "Up to 60% cost reduction"
      },
      {
        icon: "\u{1F3AF}",
        title: "Better Quality",
        description: "Find the right candidates faster with advanced filtering, skills assessment, and cultural fit analysis.",
        stat: "94% candidate satisfaction rate"
      }
    ];
    this.pricingPlans = [
      {
        name: "Starter",
        price: "99",
        description: "Perfect for small teams",
        features: ["Up to 5 users", "50 active jobs", "1,000 candidates", "Email support", "Basic analytics"],
        cta: "Start Free Trial",
        featured: false
      },
      {
        name: "Professional",
        price: "299",
        description: "For growing companies",
        features: ["Up to 20 users", "Unlimited jobs", "10,000 candidates", "Priority support", "Advanced analytics", "API access", "Custom workflows"],
        cta: "Start Free Trial",
        featured: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: ["Unlimited users", "Unlimited everything", "Dedicated support", "SSO & SAML", "Custom integrations", "SLA guarantee", "White-label option"],
        cta: "Contact Sales",
        featured: false
      }
    ];
  }
  static {
    this.\u0275fac = function HomepageComponent_Factory(t) {
      return new (t || _HomepageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomepageComponent, selectors: [["app-homepage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 277, vars: 6, consts: [[1, "homepage"], [1, "navbar"], [1, "container"], [1, "logo"], ["viewBox", "0 0 64 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "logo-icon"], [1, "logo-t"], ["d", "M6 8 L26 8", "stroke", "#0066ff", "stroke-width", "4.5", "stroke-linecap", "round"], ["d", "M16 8 L16 36", "stroke", "#0066ff", "stroke-width", "4.5", "stroke-linecap", "round"], [1, "logo-forge"], ["cx", "32", "cy", "22", "r", "8", "stroke", "url(#logo-gradient)", "stroke-width", "3.5", "fill", "none"], ["cx", "32", "cy", "22", "r", "3", "fill", "url(#logo-gradient)"], ["cx", "32", "cy", "14", "r", "1.5", "fill", "#00d4ff", "opacity", "0.8"], ["cx", "32", "cy", "30", "r", "1.5", "fill", "#00d4ff", "opacity", "0.8"], ["cx", "24", "cy", "22", "r", "1.5", "fill", "#0066ff", "opacity", "0.8"], ["cx", "40", "cy", "22", "r", "1.5", "fill", "#00d4ff", "opacity", "0.8"], [1, "logo-f"], ["d", "M48 8 L48 36", "stroke", "#00d4ff", "stroke-width", "4.5", "stroke-linecap", "round"], ["d", "M48 8 L62 8", "stroke", "#00d4ff", "stroke-width", "4.5", "stroke-linecap", "round"], ["d", "M48 20 L58 20", "stroke", "#00d4ff", "stroke-width", "4.5", "stroke-linecap", "round"], ["d", "M16 22 L24 22", "stroke", "#0066ff", "stroke-width", "2", "stroke-linecap", "round", "opacity", "0.4", "stroke-dasharray", "2 2"], ["d", "M40 22 L48 22", "stroke", "#00d4ff", "stroke-width", "2", "stroke-linecap", "round", "opacity", "0.4", "stroke-dasharray", "2 2"], ["id", "logo-gradient", "x1", "24", "y1", "14", "x2", "40", "y2", "30", "gradientUnits", "userSpaceOnUse"], ["offset", "0%", "stop-color", "#0066ff"], ["offset", "50%", "stop-color", "#0088ff"], ["offset", "100%", "stop-color", "#00d4ff"], [1, "nav-actions"], [1, "nav-links"], ["routerLink", "/client-login", 1, "nav-link", "client-portal"], [1, "link-icon"], ["routerLink", "/auth/login", 1, "nav-link", "sign-in"], ["routerLink", "/auth/register", 1, "btn-nav"], [1, "btn-arrow"], [1, "hero"], [1, "hero-bg"], [1, "hero-content"], [1, "hero-badge"], [1, "badge-dot"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "cta-group"], ["routerLink", "/auth/register", 1, "btn-hero-primary"], [1, "hero-stats-inline"], [1, "inline-stat"], [1, "stat-num"], [1, "stat-txt"], [1, "hero-trust"], [1, "hero-visual"], [1, "platform-preview"], [1, "preview-window"], [1, "window-header"], [1, "window-dots"], [1, "window-title"], [1, "window-content"], [1, "content-sidebar"], [1, "sidebar-item", "active"], [1, "sidebar-item"], [1, "content-main"], [1, "content-row"], [1, "content-block"], [1, "block-label"], [1, "block-value"], [1, "content-table"], [1, "table-row"], [1, "row-text"], [1, "trust-badge"], [1, "badge-icon"], [1, "badge-text"], [1, "stats"], [1, "stats-grid"], ["class", "stat-item", 4, "ngFor", "ngForOf"], ["id", "features", 1, "features"], [1, "section-header"], [1, "section-badge"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], ["id", "solutions", 1, "solutions"], [1, "solutions-grid"], ["class", "solution-card", 4, "ngFor", "ngForOf"], [1, "workflow"], [1, "workflow-steps"], ["class", "workflow-step", 4, "ngFor", "ngForOf"], [1, "benefits"], [1, "benefits-grid"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], ["id", "pricing", 1, "pricing"], [1, "pricing-grid"], ["class", "pricing-card", 3, "featured", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-inner"], [1, "cta-actions"], ["routerLink", "/auth/register", 1, "btn-cta-primary"], [1, "cta-trust"], [1, "footer"], [1, "footer-content"], [1, "footer-links"], [1, "footer-column"], ["routerLink", "/legal/privacy"], ["routerLink", "/legal/terms"], [1, "footer-bottom"], [1, "footer-social"], [1, "stat-item"], [1, "stat-icon"], [1, "stat-number"], [1, "stat-label"], [1, "stat-trend"], [1, "feature-card"], [1, "feature-icon-wrapper"], [1, "feature-icon"], [1, "feature-link"], [1, "solution-card"], [1, "solution-icon"], [1, "solution-features"], [4, "ngFor", "ngForOf"], [1, "workflow-step"], [1, "step-number"], [1, "step-icon"], [1, "benefit-card"], [1, "benefit-icon"], [1, "benefit-stats"], [1, "stat-highlight"], [1, "pricing-card"], ["class", "plan-badge", 4, "ngIf"], [1, "plan-price"], [1, "price-currency"], [1, "price-amount"], [1, "price-period"], [1, "plan-description"], [1, "plan-features"], ["routerLink", "/auth/register", 1, "btn-plan"], [1, "plan-badge"]], template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4)(5, "g", 5);
        \u0275\u0275element(6, "path", 6)(7, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "g", 8);
        \u0275\u0275element(9, "circle", 9)(10, "circle", 10)(11, "circle", 11)(12, "circle", 12)(13, "circle", 13)(14, "circle", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "g", 15);
        \u0275\u0275element(16, "path", 16)(17, "path", 17)(18, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "path", 19)(20, "path", 20);
        \u0275\u0275elementStart(21, "defs")(22, "linearGradient", 21);
        \u0275\u0275element(23, "stop", 22)(24, "stop", 23)(25, "stop", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "TalentForge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "a", 27)(31, "span", 28);
        \u0275\u0275text(32, "\u{1F3E2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "Client Portal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 29)(36, "span", 28);
        \u0275\u0275text(37, "\u{1F510}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "Sign In");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "button", 30)(41, "span");
        \u0275\u0275text(42, "Get Started Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 31);
        \u0275\u0275text(44, "\u2192");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(45, "header", 32);
        \u0275\u0275element(46, "div", 33);
        \u0275\u0275elementStart(47, "div", 2)(48, "div", 34)(49, "div", 35);
        \u0275\u0275element(50, "span", 36);
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "AI-Powered Recruitment Platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "h1", 37);
        \u0275\u0275text(54, " Hire Top Talent");
        \u0275\u0275element(55, "br");
        \u0275\u0275elementStart(56, "span", 38);
        \u0275\u0275text(57, "10x Faster");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "p", 39);
        \u0275\u0275text(59, "The smartest way to find, screen, and hire exceptional candidates. Powered by AI, trusted by thousands of companies worldwide.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 40)(61, "button", 41)(62, "span");
        \u0275\u0275text(63, "Get Started Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span", 31);
        \u0275\u0275text(65, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 42)(67, "div", 43)(68, "span", 44);
        \u0275\u0275text(69, "2,500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 45);
        \u0275\u0275text(71, "Companies");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 43)(73, "span", 44);
        \u0275\u0275text(74, "150K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "span", 45);
        \u0275\u0275text(76, "Candidates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 43)(78, "span", 44);
        \u0275\u0275text(79, "98%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "span", 45);
        \u0275\u0275text(81, "Success Rate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "div", 46)(83, "span");
        \u0275\u0275text(84, "\u2713 Free 30-day trial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span");
        \u0275\u0275text(86, "\u2713 No credit card required");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "span");
        \u0275\u0275text(88, "\u2713 Cancel anytime");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 47)(90, "div", 48)(91, "div", 49)(92, "div", 50)(93, "div", 51);
        \u0275\u0275element(94, "span")(95, "span")(96, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 52);
        \u0275\u0275text(98, "TalentForge Platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 53)(100, "div", 54)(101, "div", 55);
        \u0275\u0275text(102, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 56);
        \u0275\u0275text(104, "Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 56);
        \u0275\u0275text(106, "Candidates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 56);
        \u0275\u0275text(108, "Analytics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 57)(110, "div", 58)(111, "div", 59)(112, "div", 60);
        \u0275\u0275text(113, "Time-to-Hire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 61);
        \u0275\u0275text(115, "12 Days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 59)(117, "div", 60);
        \u0275\u0275text(118, "Cost Savings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 61);
        \u0275\u0275text(120, "$45K");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 59)(122, "div", 60);
        \u0275\u0275text(123, "Quality Score");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 61);
        \u0275\u0275text(125, "94%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 62)(127, "div", 63)(128, "div", 64);
        \u0275\u0275text(129, "Senior Software Engineer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 63)(131, "div", 64);
        \u0275\u0275text(132, "Product Manager");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 63)(134, "div", 64);
        \u0275\u0275text(135, "Data Scientist");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 63)(137, "div", 64);
        \u0275\u0275text(138, "UX Designer");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(139, "div", 65)(140, "div", 66);
        \u0275\u0275text(141, "\u2713");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 67);
        \u0275\u0275text(143, "Enterprise-Grade Security");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(144, "section", 68)(145, "div", 2)(146, "div", 69);
        \u0275\u0275template(147, HomepageComponent_div_147_Template, 9, 4, "div", 70);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(148, "section", 71)(149, "div", 2)(150, "div", 72)(151, "span", 73);
        \u0275\u0275text(152, "PLATFORM CAPABILITIES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "h2");
        \u0275\u0275text(154, "End-to-End Recruitment Suite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "p");
        \u0275\u0275text(156, "Everything you need to source, screen, interview, and hire top talent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(157, "div", 74);
        \u0275\u0275template(158, HomepageComponent_div_158_Template, 10, 3, "div", 75);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "section", 76)(160, "div", 2)(161, "div", 72)(162, "span", 73);
        \u0275\u0275text(163, "SOLUTIONS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "h2");
        \u0275\u0275text(165, "Built for Every Hiring Team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 77);
        \u0275\u0275template(167, HomepageComponent_div_167_Template, 9, 4, "div", 78);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "section", 79)(169, "div", 2)(170, "div", 72)(171, "span", 73);
        \u0275\u0275text(172, "HOW IT WORKS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "h2");
        \u0275\u0275text(174, "Hire in 4 Simple Steps");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(175, "div", 80);
        \u0275\u0275template(176, HomepageComponent_div_176_Template, 9, 4, "div", 81);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(177, "section", 82)(178, "div", 2)(179, "div", 72)(180, "span", 73);
        \u0275\u0275text(181, "WHY CHOOSE US");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "h2");
        \u0275\u0275text(183, "Built for Modern Hiring Teams");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "p");
        \u0275\u0275text(185, "Everything you need to streamline your recruitment process and hire top talent faster");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 83);
        \u0275\u0275template(187, HomepageComponent_div_187_Template, 10, 4, "div", 84);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(188, "section", 85)(189, "div", 2)(190, "div", 72)(191, "span", 73);
        \u0275\u0275text(192, "PRICING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "h2");
        \u0275\u0275text(194, "Simple, Transparent Pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "p");
        \u0275\u0275text(196, "Start free, scale as you grow");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(197, "div", 86);
        \u0275\u0275template(198, HomepageComponent_div_198_Template, 17, 10, "div", 87);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(199, "section", 88)(200, "div", 89)(201, "div", 2)(202, "div", 90)(203, "h2");
        \u0275\u0275text(204, "Ready to Revolutionize Your Hiring?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "p");
        \u0275\u0275text(206, "Join 2,500+ companies hiring smarter with TalentForge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 91)(208, "button", 92);
        \u0275\u0275text(209, " Start Free Trial ");
        \u0275\u0275elementStart(210, "span", 31);
        \u0275\u0275text(211, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(212, "div", 93)(213, "span");
        \u0275\u0275text(214, "\u2713 Free 30-day trial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "span");
        \u0275\u0275text(216, "\u2713 No credit card required");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "span");
        \u0275\u0275text(218, "\u2713 Cancel anytime");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(219, "footer", 94)(220, "div", 2)(221, "div", 95)(222, "div", 96)(223, "div", 97)(224, "h4");
        \u0275\u0275text(225, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "a");
        \u0275\u0275text(227, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "a");
        \u0275\u0275text(229, "Pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "a");
        \u0275\u0275text(231, "Integrations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "a");
        \u0275\u0275text(233, "API");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "div", 97)(235, "h4");
        \u0275\u0275text(236, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "a");
        \u0275\u0275text(238, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "a");
        \u0275\u0275text(240, "Careers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "a");
        \u0275\u0275text(242, "Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "a");
        \u0275\u0275text(244, "Press");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "div", 97)(246, "h4");
        \u0275\u0275text(247, "Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "a");
        \u0275\u0275text(249, "Help Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "a");
        \u0275\u0275text(251, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "a");
        \u0275\u0275text(253, "Guides");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "a");
        \u0275\u0275text(255, "Webinars");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(256, "div", 97)(257, "h4");
        \u0275\u0275text(258, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "a", 98);
        \u0275\u0275text(260, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "a", 99);
        \u0275\u0275text(262, "Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "a");
        \u0275\u0275text(264, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "a");
        \u0275\u0275text(266, "GDPR");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(267, "div", 100)(268, "p");
        \u0275\u0275text(269, "\xA9 2025 TalentForge. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "div", 101)(271, "a");
        \u0275\u0275text(272, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "a");
        \u0275\u0275text(274, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "a");
        \u0275\u0275text(276, "Facebook");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(147);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.features);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.solutions);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.workflowSteps);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.benefits);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.pricingPlans);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: [`

*[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.homepage[_ngcontent-%COMP%] {
  min-height: 100vh;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  color: #1a1a1a;
  background: #ffffff;
}
.navbar[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  padding: 20px 0;
  z-index: 1000;
}
.navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
}
.logo-icon[_ngcontent-%COMP%] {
  width: 56px;
  height: 40px;
  filter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.4));
  transition: all 0.3s ease;
}
.logo[_ngcontent-%COMP%]:hover   .logo-icon[_ngcontent-%COMP%] {
  filter: drop-shadow(0 4px 12px rgba(0, 102, 255, 0.6));
  transform: scale(1.05);
}
.logo-forge[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_forge-pulse 3s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_forge-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.nav-links[_ngcontent-%COMP%] {
  display: flex;
  gap: 30px;
  align-items: center;
}
.nav-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}
.nav-links[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: center;
}
.nav-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.nav-link[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 102, 255, 0.1),
      transparent);
  transition: left 0.5s;
}
.nav-link[_ngcontent-%COMP%]:hover::before {
  left: 100%;
}
.nav-link[_ngcontent-%COMP%]:hover {
  color: #0066ff;
  background: rgba(0, 102, 255, 0.08);
  transform: translateY(-1px);
}
.nav-link.client-portal[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #f0f9ff 0%,
      #e0f2fe 100%);
  border: 1px solid rgba(0, 102, 255, 0.2);
}
.link-icon[_ngcontent-%COMP%] {
  font-size: 1rem;
  transition: transform 0.3s;
}
.nav-link[_ngcontent-%COMP%]:hover   .link-icon[_ngcontent-%COMP%] {
  transform: scale(1.1);
}
.btn-nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #0052cc 100%);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
  position: relative;
  overflow: hidden;
}
.btn-nav[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent);
  transition: left 0.5s;
}
.btn-nav[_ngcontent-%COMP%]:hover::before {
  left: 100%;
}
.btn-nav[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #0052cc 0%,
      #003d99 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
}
.btn-arrow[_ngcontent-%COMP%] {
  font-size: 1rem;
  transition: transform 0.3s;
}
.btn-nav[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {
  transform: translateX(2px);
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.hero[_ngcontent-%COMP%] {
  padding: 140px 0 80px;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #ffffff 50%,
      #f0f9ff 100%);
}
.hero-bg[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(0, 102, 255, 0.05) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 80%,
      rgba(0, 212, 255, 0.05) 0%,
      transparent 50%);
  pointer-events: none;
}
.hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-content[_ngcontent-%COMP%] {
  text-align: left;
}
.hero-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 102, 255, 0.1);
  color: #0066ff;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}
.badge-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  background: #0066ff;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.hero-title[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #0f172a;
  letter-spacing: -1.5px;
}
.gradient-text[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: #475569;
  margin-bottom: 40px;
  line-height: 1.7;
  max-width: 540px;
}
.cta-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}
.btn-hero-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #0052cc 100%);
  color: white;
  padding: 18px 36px;
  border: none;
  border-radius: 12px;
  font-size: 1.0625rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
  width: fit-content;
}
.btn-hero-primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);
}
.btn-arrow[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  transition: transform 0.3s;
}
.btn-hero-primary[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {
  transform: translateX(4px);
}
.hero-stats-inline[_ngcontent-%COMP%] {
  display: flex;
  gap: 32px;
}
.inline-stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.stat-num[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0066ff;
  line-height: 1;
}
.stat-txt[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #64748b;
  margin-top: 4px;
}
.hero-trust[_ngcontent-%COMP%] {
  display: flex;
  gap: 24px;
  font-size: 0.875rem;
  color: #64748b;
}
.hero-trust[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
}
.hero-visual[_ngcontent-%COMP%] {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.platform-preview[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  max-width: 500px;
}
.preview-window[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid #e2e8f0;
}
.window-header[_ngcontent-%COMP%] {
  background: #f8fafc;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.window-dots[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
}
.window-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e1;
}
.window-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {
  background: #ef4444;
}
.window-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {
  background: #f59e0b;
}
.window-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
  background: #10b981;
}
.window-title[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
}
.window-content[_ngcontent-%COMP%] {
  display: flex;
  height: 380px;
}
.content-sidebar[_ngcontent-%COMP%] {
  width: 140px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 16px 12px;
}
.sidebar-item[_ngcontent-%COMP%] {
  padding: 10px 12px;
  font-size: 0.8125rem;
  color: #64748b;
  border-radius: 6px;
  margin-bottom: 4px;
  font-weight: 500;
}
.sidebar-item.active[_ngcontent-%COMP%] {
  background: #0066ff;
  color: white;
}
.content-main[_ngcontent-%COMP%] {
  flex: 1;
  padding: 20px;
}
.content-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}
.content-block[_ngcontent-%COMP%] {
  height: 70px;
  background:
    linear-gradient(
      135deg,
      #eff6ff 0%,
      #dbeafe 100%);
  border-radius: 8px;
  border: 1px solid #bfdbfe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.block-label[_ngcontent-%COMP%] {
  font-size: 0.625rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.block-value[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0066ff;
}
.content-table[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.table-row[_ngcontent-%COMP%] {
  height: 48px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 16px;
}
.row-text[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #475569;
  font-weight: 500;
}
.trust-badge[_ngcontent-%COMP%] {
  position: absolute;
  bottom: -20px;
  right: 20px;
  background: white;
  padding: 12px 20px;
  border-radius: 50px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e2e8f0;
}
.badge-icon[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
}
.badge-text[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #0f172a;
  white-space: nowrap;
}
.stats[_ngcontent-%COMP%] {
  padding: 80px 0;
  background: white;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  text-align: center;
}
.stat-item[_ngcontent-%COMP%] {
  padding: 32px 24px;
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #ffffff 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}
.stat-item[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: #0066ff;
}
.stat-icon[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  margin-bottom: 16px;
}
.stat-number[_ngcontent-%COMP%] {
  font-size: 2.75rem;
  font-weight: 800;
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  display: block;
}
.stat-label[_ngcontent-%COMP%] {
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
}
.stat-trend[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.8125rem;
  display: block;
}
.features[_ngcontent-%COMP%] {
  padding: 100px 0;
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fafc 100%);
}
.section-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 60px;
}
.section-badge[_ngcontent-%COMP%] {
  display: inline-block;
  color: #0066ff;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
}
.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}
.features-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.feature-card[_ngcontent-%COMP%] {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.feature-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      90deg,
      #0066ff 0%,
      #00d4ff 100%);
  transform: scaleX(0);
  transition: transform 0.3s;
}
.feature-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.feature-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
  border-color: #0066ff;
}
.feature-icon-wrapper[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  background:
    linear-gradient(
      135deg,
      #eff6ff 0%,
      #dbeafe 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.feature-icon[_ngcontent-%COMP%] {
  font-size: 2rem;
}
.feature-link[_ngcontent-%COMP%] {
  color: #0066ff;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  margin-top: 16px;
  transition: all 0.2s;
}
.feature-link[_ngcontent-%COMP%]:hover {
  transform: translateX(4px);
}
.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}
.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  line-height: 1.7;
}
.solutions[_ngcontent-%COMP%] {
  padding: 100px 0;
  background: #f8fafc;
}
.solutions-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.solution-card[_ngcontent-%COMP%] {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
}
.solution-card[_ngcontent-%COMP%]:hover {
  border-color: #0066ff;
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
.solution-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 20px;
}
.solution-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}
.solution-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.6;
}
.solution-features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
}
.solution-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  color: #475569;
  padding: 8px 0;
  font-size: 0.9375rem;
}
.workflow[_ngcontent-%COMP%] {
  padding: 100px 0;
  background: white;
}
.workflow-steps[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 60px;
}
.workflow-step[_ngcontent-%COMP%] {
  text-align: center;
  position: relative;
}
.step-number[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 auto 16px;
}
.step-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 16px;
}
.workflow-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}
.workflow-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.9375rem;
  line-height: 1.6;
}
.benefits[_ngcontent-%COMP%] {
  padding: 100px 0;
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 100%);
}
.benefits-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.benefit-card[_ngcontent-%COMP%] {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.benefit-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      90deg,
      #0066ff 0%,
      #00d4ff 100%);
  transform: scaleX(0);
  transition: transform 0.3s;
}
.benefit-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.benefit-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
  border-color: #0066ff;
}
.benefit-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 24px;
  display: block;
}
.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}
.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}
.benefit-stats[_ngcontent-%COMP%] {
  padding: 16px;
  background:
    linear-gradient(
      135deg,
      #eff6ff 0%,
      #dbeafe 100%);
  border-radius: 12px;
  border: 1px solid #bfdbfe;
}
.stat-highlight[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0066ff;
}
.pricing[_ngcontent-%COMP%] {
  padding: 100px 0;
  background: white;
}
.pricing-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;
}
.pricing-card[_ngcontent-%COMP%] {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
  position: relative;
}
.pricing-card.featured[_ngcontent-%COMP%] {
  border-color: #0066ff;
  transform: scale(1.05);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.15);
}
.plan-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.pricing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}
.plan-price[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
}
.price-currency[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066ff;
}
.price-amount[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0066ff;
  line-height: 1;
}
.price-period[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: #64748b;
  margin-left: 4px;
}
.plan-description[_ngcontent-%COMP%] {
  color: #64748b;
  margin-bottom: 32px;
}
.plan-features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
}
.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 12px 0;
  color: #475569;
  font-size: 0.9375rem;
  border-bottom: 1px solid #f1f5f9;
}
.btn-plan[_ngcontent-%COMP%] {
  width: 100%;
  padding: 14px;
  background: white;
  color: #0066ff;
  border: 2px solid #0066ff;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-plan[_ngcontent-%COMP%]:hover {
  background: #0066ff;
  color: white;
}
.btn-plan-featured[_ngcontent-%COMP%] {
  background: #0066ff;
  color: white;
}
.btn-plan-featured[_ngcontent-%COMP%]:hover {
  background: #0052cc;
}
.benefits-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.benefits-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2.75rem;
  font-weight: 800;
  color: #0f172a;
  margin: 16px 0 32px;
}
.benefits-list[_ngcontent-%COMP%] {
  list-style: none;
  margin-bottom: 40px;
}
.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.check-icon[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  background: #0066ff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
}
.benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  display: block;
  color: #0f172a;
  font-size: 1.125rem;
  margin-bottom: 4px;
}
.benefits-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  line-height: 1.6;
}
.benefits-visual[_ngcontent-%COMP%] {
  display: grid;
  gap: 20px;
}
.visual-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  color: white;
  padding: 40px;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
}
.cta-section[_ngcontent-%COMP%] {
  padding: 100px 0;
  background:
    linear-gradient(
      135deg,
      #0066ff 0%,
      #00d4ff 100%);
  position: relative;
  overflow: hidden;
}
.cta-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
  opacity: 0.3;
}
.cta-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
}
.cta-inner[_ngcontent-%COMP%] {
  text-align: center;
  color: white;
}
.cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}
.cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.95;
}
.cta-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}
.btn-cta-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #0066ff;
  padding: 18px 40px;
  border: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.btn-cta-primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}
.cta-trust[_ngcontent-%COMP%] {
  display: flex;
  gap: 32px;
  justify-content: center;
  font-size: 0.9375rem;
  opacity: 0.9;
}
.btn-primary-large[_ngcontent-%COMP%] {
  background: white;
  color: #0066ff;
  padding: 18px 48px;
  border: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.btn-primary-large[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}
.footer[_ngcontent-%COMP%] {
  padding: 50px 0 30px;
  background:
    linear-gradient(
      180deg,
      #1e293b 0%,
      #0f172a 100%);
  color: #94a3b8;
  position: relative;
}
.footer[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(148, 163, 184, 0.2),
      transparent);
}
.footer-content[_ngcontent-%COMP%] {
  margin-bottom: 32px;
}
.footer-links[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
}
.footer-column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: #f1f5f9;
  font-size: 0.8125rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: inline-block;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 10px;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
}
.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #00d4ff;
  transform: translateY(-2px);
}
.footer-bottom[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}
.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.875rem;
}
.footer-social[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid rgba(148, 163, 184, 0.2);
}
.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-content[_ngcontent-%COMP%] {
    text-align: center;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .hero-subtitle[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .hero-stats-inline[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .hero-visual[_ngcontent-%COMP%] {
    height: 300px;
  }
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .features-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .benefits-content[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .btn-hero-primary[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
}
/*# sourceMappingURL=homepage.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomepageComponent, { className: "HomepageComponent" });
})();
export {
  HomepageComponent
};
//# sourceMappingURL=chunk-D4FLLF7I.js.map
