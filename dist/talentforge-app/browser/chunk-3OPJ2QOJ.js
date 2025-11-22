import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/email.service.ts
var EmailService = class _EmailService {
  constructor(http) {
    this.http = http;
  }
  sendCandidateEmail(to, candidateName, subject, message) {
    const emailData = {
      to,
      subject,
      templateName: "candidate-outreach",
      templateData: {
        candidateName,
        message
      },
      priority: "NORMAL",
      triggerSource: "CANDIDATE_DATABASE"
    };
    return this.http.post("/api/notifications/email/send", emailData);
  }
  sendEmail(to, subject, body) {
    const emailData = {
      to,
      subject,
      templateName: "generic-email",
      templateData: {
        body
      },
      priority: "NORMAL",
      triggerSource: "CLIENT_MANAGEMENT"
    };
    return this.http.post("/api/notifications/email/send", emailData);
  }
  static {
    this.\u0275fac = function EmailService_Factory(t) {
      return new (t || _EmailService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
  }
};

export {
  EmailService
};
//# sourceMappingURL=chunk-3OPJ2QOJ.js.map
