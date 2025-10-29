import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenant, CreateTenantRequest, Subscription, Invoice } from '../models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private apiUrl = '/api/tenants';

  constructor(private http: HttpClient) {}

  getAllTenants(page: number = 0, size: number = 25): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }

  getTenant(id: string): Observable<Tenant> {
    return this.http.get<Tenant>(`${this.apiUrl}/${id}`);
  }

  createTenant(request: CreateTenantRequest): Observable<Tenant> {
    return this.http.post<Tenant>(this.apiUrl, request);
  }

  updateTenant(id: string, data: Partial<Tenant>): Observable<Tenant> {
    return this.http.put<Tenant>(`${this.apiUrl}/${id}`, data);
  }

  suspendTenant(id: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/suspend`, {});
  }

  activateTenant(id: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/activate`, {});
  }

  deleteTenant(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Billing
  getSubscription(tenantId: string): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.apiUrl}/${tenantId}/subscription`);
  }

  updateSubscription(tenantId: string, plan: string): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.apiUrl}/${tenantId}/subscription`, { plan });
  }

  cancelSubscription(tenantId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${tenantId}/subscription/cancel`, {});
  }

  getInvoices(tenantId?: string, page: number = 0, size: number = 25): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    if (tenantId) {
      params = params.set('tenantId', tenantId);
    }
    
    return this.http.get<any>('/api/billing/invoices', { params });
  }

  retryPayment(invoiceId: string): Observable<void> {
    return this.http.post<void>(`/api/billing/invoices/${invoiceId}/retry`, {});
  }

  refundPayment(invoiceId: string): Observable<void> {
    return this.http.post<void>(`/api/billing/invoices/${invoiceId}/refund`, {});
  }

  markInvoiceAsPaid(invoiceId: string): Observable<void> {
    return this.http.post<void>(`/api/billing/invoices/${invoiceId}/mark-paid`, {});
  }

  voidInvoice(invoiceId: string): Observable<void> {
    return this.http.post<void>(`/api/billing/invoices/${invoiceId}/void`, {});
  }

  createManualInvoice(data: any): Observable<any> {
    return this.http.post<any>('/api/billing/invoices', data);
  }
}
