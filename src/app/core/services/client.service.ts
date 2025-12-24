import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ClientLoginRequest {
  email: string;
  password: string;
}

export interface ClientLoginResponse {
  token: string;
  message: string;
}

export interface ClientApproval {
  id: string;
  applicationId: string;
  candidateName: string;
  jobTitle: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface ClientDashboard {
  pendingApprovals: ClientApproval[];
  totalPending: number;
  totalApproved: number;
  totalRejected: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

export interface ClientNote {
  id: string;
  content: string;
  createdAt: string;
  createdBy: string;
}

export interface ClientActivity {
  id: string;
  type: string;
  description: string;
  createdAt: string;
  createdBy: string;
}

export interface ApprovalRequest {
  applicationId: string;
  status: 'APPROVED' | 'REJECTED';
  feedback?: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly baseUrl = `${environment.apiUrl}/clients`;
  private readonly clientServiceUrl = `/api/clients`;

  constructor(private http: HttpClient) {}

  login(request: ClientLoginRequest, tenantId: string): Observable<ClientLoginResponse> {
    const headers = new HttpHeaders({
      'X-Tenant-ID': tenantId
    });
    return this.http.post<ClientLoginResponse>(`${this.clientServiceUrl}/login`, request, { headers });
  }

  getDashboard(tenantId: string, clientUserId: string): Observable<ClientDashboard> {
    const headers = new HttpHeaders({
      'X-Tenant-ID': tenantId,
      'X-User-ID': clientUserId
    });
    return this.http.get<ClientDashboard>(`${this.clientServiceUrl}/dashboard`, { headers });
  }

  getPendingApprovals(tenantId: string, clientUserId: string): Observable<ClientApproval[]> {
    const token = localStorage.getItem('clientToken');
    const headers = new HttpHeaders({
      'X-Tenant-ID': tenantId,
      'X-User-ID': clientUserId,
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ClientApproval[]>(`${this.clientServiceUrl}/approvals/pending`, { headers });
  }

  processApproval(request: ApprovalRequest, tenantId: string, clientUserId: string): Observable<any> {
    const token = localStorage.getItem('clientToken');
    const headers = new HttpHeaders({
      'X-Tenant-ID': tenantId,
      'X-User-ID': clientUserId,
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.clientServiceUrl}/approvals`, request, { headers });
  }

  getClients(): Observable<Client[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'X-Tenant-ID': this.extractTenantId(token)
    });
    return this.http.get<Client[]>(`/api/clients`, { headers });
  }

  private extractTenantId(token: string | null): string {
    if (!token) return '';
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.tenantId;
    } catch {
      return '';
    }
  }

  getClientById(id: string): Observable<Client> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'X-Tenant-ID': this.extractTenantId(token)
    });
    return this.http.get<Client>(`/api/clients/${id}`, { headers });
  }

  createClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }

  updateClient(id: string, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${id}`, client);
  }

  getNotes(clientId: string): Observable<ClientNote[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'X-Tenant-ID': this.extractTenantId(token)
    });
    return this.http.get<ClientNote[]>(`/api/clients/${clientId}/notes`, { headers });
  }

  addNote(clientId: string, content: string): Observable<ClientNote> {
    return this.http.post<ClientNote>(`${this.baseUrl}/${clientId}/notes`, { content });
  }

  getActivities(clientId: string): Observable<ClientActivity[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'X-Tenant-ID': this.extractTenantId(token)
    });
    return this.http.get<ClientActivity[]>(`/api/clients/${clientId}/activities`, { headers });
  }

  inviteClient(invitation: {email: string, companyName: string, contactPerson: string, clientId?: string}): Observable<any> {
    // Get tenant ID from authenticated user's session
    const currentUserStr = localStorage.getItem('user');
    console.log('user from localStorage:', currentUserStr);
    
    if (!currentUserStr) {
      throw new Error('No user session found. Please log in.');
    }
    
    const currentUser = JSON.parse(currentUserStr);
    const tenantId = currentUser.tenantId;
    const token = localStorage.getItem('token');
    
    console.log('Extracted tenantId:', tenantId);
    
    if (!tenantId) {
      throw new Error('No tenant ID found in user session.');
    }
    
    const headers = new HttpHeaders({
      'X-Tenant-ID': tenantId,
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.clientServiceUrl}/invite`, invitation, { headers });
  }

  verifyInvitation(token: string): Observable<any> {
    return this.http.get(`${this.clientServiceUrl}/verify-invitation?token=${token}`);
  }

  registerInvitedClient(token: string, password: string): Observable<any> {
    return this.http.post(`${this.clientServiceUrl}/register-invited?token=${token}`, { password });
  }
}