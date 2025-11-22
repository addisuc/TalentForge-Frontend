import {
  RouterLink,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/features/jobs/job-details.component.ts
function JobDetailsComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r1);
  }
}
function JobDetailsComponent_li_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(req_r2);
  }
}
function JobDetailsComponent_li_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r3);
  }
}
var JobDetailsComponent = class _JobDetailsComponent {
  constructor() {
    this.job = {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$120k - $180k",
      type: "Full Time",
      postedDays: 2,
      applicants: 45,
      inReview: 23,
      interviews: 8,
      description: "We are seeking an experienced Full Stack Developer to join our growing engineering team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies. This role offers the opportunity to work on challenging projects and collaborate with talented engineers.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "GraphQL", "Redis"],
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Solid understanding of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
        "Excellent problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote options",
        "401(k) with company match",
        "Professional development budget",
        "Unlimited PTO policy"
      ]
    };
  }
  static {
    this.\u0275fac = function JobDetailsComponent_Factory(t) {
      return new (t || _JobDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobDetailsComponent, selectors: [["app-job-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 14, consts: [[1, "job-details"], [1, "back-nav"], ["routerLink", "/jobs"], [1, "content-grid"], [1, "main-content"], [1, "job-header"], [1, "company-logo"], [1, "job-info"], [1, "company"], [1, "job-meta"], [1, "job-section"], [1, "skills-grid"], ["class", "skill-badge", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "sidebar"], [1, "card"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], ["routerLink", "/applications", 1, "btn-primary", "full-width"], [1, "btn-secondary", "full-width"], [1, "client-name"], [1, "client-contact"], [1, "client-email"], ["routerLink", "/clients/1", 1, "btn-secondary", "full-width"], [1, "skill-badge"]], template: function JobDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u2190 Back to Jobs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        \u0275\u0275text(8, "TC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "h1");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 10)(24, "h2");
        \u0275\u0275text(25, "Job Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 10)(29, "h2");
        \u0275\u0275text(30, "Required Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 11);
        \u0275\u0275template(32, JobDetailsComponent_span_32_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 10)(34, "h2");
        \u0275\u0275text(35, "Requirements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul");
        \u0275\u0275template(37, JobDetailsComponent_li_37_Template, 2, 1, "li", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 10)(39, "h2");
        \u0275\u0275text(40, "Benefits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ul");
        \u0275\u0275template(42, JobDetailsComponent_li_42_Template, 2, 1, "li", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "h3");
        \u0275\u0275text(46, "Application Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 16)(48, "span", 17);
        \u0275\u0275text(49, "Total Applicants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 18);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 16)(53, "span", 17);
        \u0275\u0275text(54, "In Review");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 18);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 16)(58, "span", 17);
        \u0275\u0275text(59, "Interviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 18);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "button", 19);
        \u0275\u0275text(63, "View Applicants");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 15)(65, "h3");
        \u0275\u0275text(66, "Job Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 20);
        \u0275\u0275text(68, "Edit Job");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "button", 20);
        \u0275\u0275text(70, "Share Job");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 20);
        \u0275\u0275text(72, "Close Job");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 15)(74, "h3");
        \u0275\u0275text(75, "Client Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 21);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 22);
        \u0275\u0275text(79, "Contact: John Smith");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "p", 23);
        \u0275\u0275text(81, "john@techcorp.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 24);
        \u0275\u0275text(83, "View Client");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.job.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.job.company);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx.job.location, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx.job.salary, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u23F0 ", ctx.job.type, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u{1F4C5} Posted ", ctx.job.postedDays, " days ago");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.job.description);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.job.skills);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.job.requirements);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.job.benefits);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.job.applicants);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.job.inReview);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.job.interviews);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.job.company);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.job-details[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.back-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  padding: 8px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  color: #0f172a;\n  margin-bottom: 24px;\n  transition: all 0.3s;\n}\n.back-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n}\n.main-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding-bottom: 32px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 32px;\n}\n.company-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 2rem;\n  flex-shrink: 0;\n}\n.job-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.company[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.job-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.job-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n}\n.job-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.7;\n}\n.job-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  color: #64748b;\n  position: relative;\n  padding-left: 24px;\n}\n.job-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: #10b981;\n  font-weight: 700;\n}\n.skills-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.skill-badge[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #eff6ff;\n  color: #0066ff;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 16px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 1.125rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-bottom: 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.client-contact[_ngcontent-%COMP%], .client-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.client-email[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n@media (max-width: 1024px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=job-details.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobDetailsComponent, { className: "JobDetailsComponent" });
})();
export {
  JobDetailsComponent
};
//# sourceMappingURL=chunk-46FHGHFS.js.map
