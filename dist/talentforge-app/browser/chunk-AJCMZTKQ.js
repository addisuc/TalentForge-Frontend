import {
  HttpClient,
  HttpParams
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/users";
  }
  getUserProfile(userId) {
    return this.http.get(`${this.apiUrl}/profile/${userId}`);
  }
  updateUser(userId, request) {
    return this.http.put(`${this.apiUrl}/${userId}`, request);
  }
  searchUsers(query, role, status, page = 0, size = 20) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (query)
      params = params.set("query", query);
    if (role)
      params = params.set("role", role);
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.apiUrl}/search`, { params });
  }
  getUsersByRole(role, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/role/${role}`, { params });
  }
  getAllUsers(page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(this.apiUrl, { params });
  }
  deactivateUser(userId) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService
};
//# sourceMappingURL=chunk-AJCMZTKQ.js.map
