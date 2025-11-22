import {
  HttpClient,
  HttpParams
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/services/tenant.service.ts
var TenantService = class _TenantService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/tenants";
  }
  getAllTenants(page = 0, size = 25) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(this.apiUrl, { params });
  }
  getTenant(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createTenant(request) {
    return this.http.post(this.apiUrl, request);
  }
  updateTenant(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  suspendTenant(id) {
    return this.http.post(`${this.apiUrl}/${id}/suspend`, {});
  }
  activateTenant(id) {
    return this.http.post(`${this.apiUrl}/${id}/activate`, {});
  }
  deleteTenant(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Billing
  getSubscription(tenantId) {
    return this.http.get(`${this.apiUrl}/${tenantId}/subscription`);
  }
  updateSubscription(tenantId, plan) {
    return this.http.put(`${this.apiUrl}/${tenantId}/subscription`, { plan });
  }
  cancelSubscription(tenantId) {
    return this.http.post(`${this.apiUrl}/${tenantId}/subscription/cancel`, {});
  }
  getInvoices(tenantId, page = 0, size = 25) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (tenantId) {
      params = params.set("tenantId", tenantId);
    }
    return this.http.get("/api/billing/invoices", { params });
  }
  retryPayment(invoiceId) {
    return this.http.post(`/api/billing/invoices/${invoiceId}/retry`, {});
  }
  refundPayment(invoiceId) {
    return this.http.post(`/api/billing/invoices/${invoiceId}/refund`, {});
  }
  markInvoiceAsPaid(invoiceId) {
    return this.http.post(`/api/billing/invoices/${invoiceId}/mark-paid`, {});
  }
  voidInvoice(invoiceId) {
    return this.http.post(`/api/billing/invoices/${invoiceId}/void`, {});
  }
  createManualInvoice(data) {
    return this.http.post("/api/billing/invoices", data);
  }
  sendInvoice(invoiceId) {
    return this.http.post(`/api/billing/invoices/${invoiceId}/send`, {});
  }
  updateInvoice(invoiceId, data) {
    return this.http.put(`/api/billing/invoices/${invoiceId}`, data);
  }
  getInvoice(invoiceId) {
    return this.http.get(`/api/billing/invoices/${invoiceId}`);
  }
  downloadInvoice(invoiceId) {
    return this.http.get(`/api/billing/invoices/${invoiceId}/download`, { responseType: "blob" });
  }
  getPendingRefunds() {
    return this.http.get("/api/billing/invoices/refunds/pending");
  }
  approveRefund(creditNoteId) {
    return this.http.post(`/api/billing/invoices/refunds/${creditNoteId}/approve`, {});
  }
  rejectRefund(creditNoteId, reason) {
    return this.http.post(`/api/billing/invoices/refunds/${creditNoteId}/reject`, { reason });
  }
  static {
    this.\u0275fac = function TenantService_Factory(t) {
      return new (t || _TenantService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantService, factory: _TenantService.\u0275fac, providedIn: "root" });
  }
};

export {
  TenantService
};
//# sourceMappingURL=chunk-2W7S4JUN.js.map
