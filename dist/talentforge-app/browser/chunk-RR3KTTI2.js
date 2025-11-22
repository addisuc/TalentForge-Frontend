import {
  HttpClient,
  HttpParams
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/job.service.ts
var JobService = class _JobService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/jobs";
  }
  getAllJobs(page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(this.apiUrl, { params });
  }
  getJobById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  searchJobs(query, page = 0, size = 20) {
    const params = new HttpParams().set("query", query).set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/search`, { params });
  }
  getJobsByStatus(status, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/status/${status}`, { params });
  }
  getPublicActiveJobs(page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/public/active`, { params });
  }
  createJob(request) {
    return this.http.post(this.apiUrl, request);
  }
  updateJob(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  updateJobStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }
  deleteJob(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getJobsByClient(clientId, page = 0, size = 100) {
    const params = new HttpParams().set("clientId", clientId).set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}`, { params });
  }
  static {
    this.\u0275fac = function JobService_Factory(t) {
      return new (t || _JobService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobService, factory: _JobService.\u0275fac, providedIn: "root" });
  }
};

export {
  JobService
};
//# sourceMappingURL=chunk-RR3KTTI2.js.map
