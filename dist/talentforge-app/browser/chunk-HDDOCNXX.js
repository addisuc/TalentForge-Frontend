import {
  environment
} from "./chunk-3CPV5NE5.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/client.service.ts
var ClientService = class _ClientService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/clients`;
    this.clientServiceUrl = `http://localhost:8088/api/clients`;
  }
  login(request, tenantId) {
    return this.http.post(`http://localhost:8081/api/auth/login`, request);
  }
  getDashboard(tenantId, clientUserId) {
    const headers = new HttpHeaders({
      "X-Tenant-ID": tenantId,
      "X-User-ID": clientUserId
    });
    return this.http.get(`${this.clientServiceUrl}/dashboard`, { headers });
  }
  getPendingApprovals(tenantId, clientUserId) {
    const token = localStorage.getItem("clientToken");
    const headers = new HttpHeaders({
      "X-Tenant-ID": tenantId,
      "X-User-ID": clientUserId,
      "Authorization": `Bearer ${token}`
    });
    return this.http.get(`${this.clientServiceUrl}/approvals/pending`, { headers });
  }
  processApproval(request, tenantId, clientUserId) {
    const token = localStorage.getItem("clientToken");
    const headers = new HttpHeaders({
      "X-Tenant-ID": tenantId,
      "X-User-ID": clientUserId,
      "Authorization": `Bearer ${token}`
    });
    return this.http.post(`${this.clientServiceUrl}/approvals`, request, { headers });
  }
  getClients() {
    return this.http.get(`${this.baseUrl}`);
  }
  getClientById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createClient(client) {
    return this.http.post(`${this.baseUrl}`, client);
  }
  updateClient(id, client) {
    return this.http.put(`${this.baseUrl}/${id}`, client);
  }
  getNotes(clientId) {
    return this.http.get(`${this.baseUrl}/${clientId}/notes`);
  }
  addNote(clientId, content) {
    return this.http.post(`${this.baseUrl}/${clientId}/notes`, { content });
  }
  getActivities(clientId) {
    return this.http.get(`${this.baseUrl}/${clientId}/activities`);
  }
  inviteClient(invitation) {
    const currentUserStr = localStorage.getItem("user");
    console.log("user from localStorage:", currentUserStr);
    if (!currentUserStr) {
      throw new Error("No user session found. Please log in.");
    }
    const currentUser = JSON.parse(currentUserStr);
    const tenantId = currentUser.tenantId;
    const token = localStorage.getItem("token");
    console.log("Extracted tenantId:", tenantId);
    if (!tenantId) {
      throw new Error("No tenant ID found in user session.");
    }
    const headers = new HttpHeaders({
      "X-Tenant-ID": tenantId,
      "Authorization": `Bearer ${token}`
    });
    return this.http.post(`${this.clientServiceUrl}/invite`, invitation, { headers });
  }
  verifyInvitation(token) {
    return this.http.get(`${this.clientServiceUrl}/verify-invitation?token=${token}`);
  }
  registerInvitedClient(token, password) {
    return this.http.post(`${this.clientServiceUrl}/register-invited?token=${token}`, { password });
  }
  static {
    this.\u0275fac = function ClientService_Factory(t) {
      return new (t || _ClientService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
  }
};

export {
  ClientService
};
//# sourceMappingURL=chunk-HDDOCNXX.js.map
