import {
  HttpClient,
  HttpParams
} from "./chunk-LI6IQ5NJ.js";
import {
  catchError,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/application.service.ts
var ApplicationService = class _ApplicationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/applications";
  }
  submitApplication(request) {
    return this.http.post(this.apiUrl, request);
  }
  getApplication(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getAllApplications(page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(this.apiUrl, { params });
  }
  getMyApplications(page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/me`, { params });
  }
  getApplicationsByCandidate(candidateId, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/candidate/${candidateId}`, { params });
  }
  getApplicationsByJob(jobId, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/job/${jobId}`, { params });
  }
  updateApplicationStatus(id, status) {
    console.log(`Updating application ${id} to status: ${status}`);
    return this.http.put(`${this.apiUrl}/${id}/status`, { status }).pipe(tap((response) => console.log("Status update response:", response)), catchError((error) => {
      console.error("Status update error:", error);
      throw error;
    }));
  }
  withdrawApplication(id, request) {
    if (request) {
      return this.http.put(`${this.apiUrl}/${id}/status`, {
        status: "WITHDRAWN",
        reason: request.reason
      });
    }
    return this.http.put(`${this.apiUrl}/${id}/status`, { status: "WITHDRAWN" });
  }
  createInterview(request) {
    return this.http.post("/api/interviews", request);
  }
  // Background Check Integration (Placeholder)
  initiateBackgroundCheck(applicationId, provider) {
    return this.http.post(`${this.apiUrl}/${applicationId}/background-check`, { provider });
  }
  getBackgroundCheckStatus(applicationId) {
    return this.http.get(`${this.apiUrl}/${applicationId}/background-check`);
  }
  // Reference Check Integration (Placeholder)
  requestReferenceCheck(applicationId, references) {
    return this.http.post(`${this.apiUrl}/${applicationId}/reference-check`, { references });
  }
  getReferenceCheckStatus(applicationId) {
    return this.http.get(`${this.apiUrl}/${applicationId}/reference-check`);
  }
  // Offer Management
  extendOffer(applicationId, offer) {
    const payload = {
      applicationId,
      salary: offer.salary,
      startDate: offer.startDate,
      offerLetterUrl: offer.offerLetterUrl,
      expiresAt: offer.expiresAt
    };
    return this.http.post("/api/offers", payload);
  }
  respondToOffer(applicationId, accept) {
    const status = accept ? "ACCEPTED" : "DECLINED";
    return this.http.put(`/api/offers/${applicationId}/respond`, { status });
  }
  getApplicationTimeline(applicationId) {
    return this.http.get(`${this.apiUrl}/${applicationId}/timeline`);
  }
  getClientSubmissions(companyId, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/client/${companyId}/submissions`, { params });
  }
  static {
    this.\u0275fac = function ApplicationService_Factory(t) {
      return new (t || _ApplicationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationService, factory: _ApplicationService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApplicationService
};
//# sourceMappingURL=chunk-THEXLMAE.js.map
