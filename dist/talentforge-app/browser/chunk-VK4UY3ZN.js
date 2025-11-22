import {
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/legal/privacy-policy.component.ts
var PrivacyPolicyComponent = class _PrivacyPolicyComponent {
  goBack() {
    window.close();
  }
  static {
    this.\u0275fac = function PrivacyPolicyComponent_Factory(t) {
      return new (t || _PrivacyPolicyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 113, vars: 0, consts: [[1, "legal-container"], [1, "legal-content"], [1, "last-updated"], [1, "actions"], [1, "btn-secondary", 3, "click"]], template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Last Updated: January 2025");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "section")(7, "h2");
        \u0275\u0275text(8, "1. Information We Collect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h3");
        \u0275\u0275text(10, "1.1 Candidate Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "For job seekers: name, contact details, resume, work history, education, skills, certifications, references, and application materials.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h3");
        \u0275\u0275text(14, "1.2 Recruiter Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "For recruiters: company details, contact information, job postings, candidate interactions, and billing information.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h3");
        \u0275\u0275text(18, "1.3 Automatically Collected Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275text(20, "IP address, device information, browser type, usage patterns, and interaction data through cookies and analytics tools.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "section")(22, "h2");
        \u0275\u0275text(23, "2. How We Use Your Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "We use your information to:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "ul")(27, "li");
        \u0275\u0275text(28, "Facilitate job matching and recruitment services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30, "Enable communication between candidates and recruiters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275text(32, "Process applications and manage hiring workflows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "li");
        \u0275\u0275text(34, "Conduct background checks (with consent)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, "Improve our AI matching algorithms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275text(38, "Send relevant job alerts and notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Comply with legal obligations and prevent fraud");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "section")(42, "h2");
        \u0275\u0275text(43, "3. Information Sharing and Disclosure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h3");
        \u0275\u0275text(45, "3.1 With Employers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "When you apply for a job, your profile and application materials are shared with the hiring company and their authorized recruiters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "h3");
        \u0275\u0275text(49, "3.2 With Service Providers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p");
        \u0275\u0275text(51, "We share data with background check providers, payment processors, cloud hosting services, and analytics platforms under strict confidentiality agreements.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h3");
        \u0275\u0275text(53, "3.3 Legal Requirements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "We may disclose information to comply with legal obligations, court orders, or government requests.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h3");
        \u0275\u0275text(57, "3.4 Business Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "In case of merger, acquisition, or sale, your information may be transferred to the new entity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "section")(61, "h2");
        \u0275\u0275text(62, "4. Data Retention");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p");
        \u0275\u0275text(64, "Candidate profiles are retained for 3 years of inactivity unless deletion is requested. Job postings are archived after 90 days of closure. Billing records are kept for 7 years per legal requirements.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "section")(66, "h2");
        \u0275\u0275text(67, "5. Data Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p");
        \u0275\u0275text(69, "We implement industry-standard security measures including encryption (AES-256), secure data centers (SOC 2 Type II certified), regular security audits, access controls, and employee training to protect your information.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "section")(71, "h2");
        \u0275\u0275text(72, "6. Your Privacy Rights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "h3");
        \u0275\u0275text(74, "6.1 GDPR Rights (EU Users)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p");
        \u0275\u0275text(76, "Right to access, rectification, erasure, data portability, restriction of processing, and objection to processing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h3");
        \u0275\u0275text(78, "6.2 CCPA Rights (California Users)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p");
        \u0275\u0275text(80, "Right to know what data is collected, right to deletion, right to opt-out of sale (we do not sell data), and non-discrimination rights.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h3");
        \u0275\u0275text(82, "6.3 Exercising Rights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p");
        \u0275\u0275text(84, "Contact privacy@talentforge.com to exercise your rights. We respond within 30 days.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "section")(86, "h2");
        \u0275\u0275text(87, "7. Cookies and Tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "p");
        \u0275\u0275text(89, "We use essential cookies (authentication, security), functional cookies (preferences, settings), analytics cookies (Google Analytics, usage tracking), and marketing cookies (job recommendations). You can manage cookie preferences in your browser settings.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "section")(91, "h2");
        \u0275\u0275text(92, "8. International Data Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "p");
        \u0275\u0275text(94, "Your data may be processed in countries outside your residence. We use Standard Contractual Clauses and ensure adequate protection mechanisms for international transfers.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "section")(96, "h2");
        \u0275\u0275text(97, "9. Children's Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "p");
        \u0275\u0275text(99, "Our Platform is not intended for users under 16. We do not knowingly collect data from children.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "section")(101, "h2");
        \u0275\u0275text(102, "10. Changes to Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104, "We may update this policy periodically. Material changes will be notified via email or platform notification 30 days in advance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "section")(106, "h2");
        \u0275\u0275text(107, "11. Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "p");
        \u0275\u0275text(109, "For privacy concerns, contact us at privacy@talentforge.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 3)(111, "button", 4);
        \u0275\u0275listener("click", function PrivacyPolicyComponent_Template_button_click_111_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(112, "Close");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [CommonModule, RouterModule], styles: ["\n\n.legal-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  padding: 2rem;\n}\n.legal-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  background: white;\n  padding: 3rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.last-updated[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 2rem;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 0.75rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 1rem 0 0.5rem 0;\n}\nul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1rem 1.5rem;\n  padding: 0;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #475569;\n  line-height: 1.6;\n}\np[_ngcontent-%COMP%] {\n  color: #475569;\n  line-height: 1.6;\n  margin-bottom: 0.75rem;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  display: flex;\n  gap: 1rem;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n/*# sourceMappingURL=privacy-policy.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyComponent, { className: "PrivacyPolicyComponent" });
})();
export {
  PrivacyPolicyComponent
};
//# sourceMappingURL=chunk-VK4UY3ZN.js.map
