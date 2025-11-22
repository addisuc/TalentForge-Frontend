import {
  environment
} from "./chunk-3CPV5NE5.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/job-request.service.ts
var JobRequestService = class _JobRequestService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/job-requests`;
  }
  // Client creates job request
  createJobRequest(request) {
    const token = localStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    return this.http.post(`${this.baseUrl}`, request, { headers });
  }
  // Client gets their job requests
  getClientJobRequests(clientId) {
    const token = localStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    return this.http.get(`${this.baseUrl}/client/${clientId}`, { headers });
  }
  // Recruiter gets job requests for their clients
  getJobRequestsForRecruiter() {
    const token = localStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    return this.http.get(`${this.baseUrl}/recruiter`, { headers });
  }
  getTenantIdFromToken(token) {
    if (!token)
      return "";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.tenantId || "";
    } catch {
      return "";
    }
  }
  // Recruiter updates job request status
  updateJobRequestStatus(id, status, notes) {
    const token = localStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    return this.http.patch(`${this.baseUrl}/${id}/status`, { status, notes }, { headers });
  }
  // Recruiter converts job request to job posting
  convertToJob(id, jobData) {
    return this.http.post(`${this.baseUrl}/${id}/convert`, jobData);
  }
  static {
    this.\u0275fac = function JobRequestService_Factory(t) {
      return new (t || _JobRequestService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobRequestService, factory: _JobRequestService.\u0275fac, providedIn: "root" });
  }
};

export {
  JobRequestService
};
//# sourceMappingURL=chunk-OA4SEQZO.js.map
