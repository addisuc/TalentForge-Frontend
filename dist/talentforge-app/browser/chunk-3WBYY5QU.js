import {
  HttpClient,
  HttpParams
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/interview.service.ts
var InterviewService = class _InterviewService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/interviews";
  }
  getAllInterviews() {
    return this.http.get(this.apiUrl);
  }
  getInterviewById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getInterviewsByApplication(applicationId) {
    return this.http.get(`${this.apiUrl}/application/${applicationId}`);
  }
  getUpcomingInterviews(days = 30) {
    const params = new HttpParams().set("days", days.toString());
    return this.http.get(`${this.apiUrl}/upcoming`, { params });
  }
  getMyInterviews() {
    return this.http.get(`${this.apiUrl}/my-interviews`);
  }
  createInterview(request) {
    return this.http.post(this.apiUrl, request);
  }
  updateInterview(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  requestReschedule(id, request) {
    return this.http.post(`${this.apiUrl}/${id}/reschedule`, request);
  }
  cancelInterview(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function InterviewService_Factory(t) {
      return new (t || _InterviewService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InterviewService, factory: _InterviewService.\u0275fac, providedIn: "root" });
  }
};

export {
  InterviewService
};
//# sourceMappingURL=chunk-3WBYY5QU.js.map
