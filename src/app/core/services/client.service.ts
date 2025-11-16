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
  private readonly clientServiceUrl = `http://localhost:8088/api/clients`;

  constructor(private http: HttpClient) {}

  login(request: ClientLoginRequest, tenantId: string): Observable<ClientLoginResponse> {
    // Use auth service for login, same as regular users
    return this.http.post<ClientLoginResponse>(`http://localhost:8081/api/auth/login`, request);
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
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  createClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }

  updateClient(id: string, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${id}`, client);
  }

  getNotes(clientId: string): Observable<ClientNote[]> {
    return this.http.get<ClientNote[]>(`${this.baseUrl}/${clientId}/notes`);
  }

  addNote(clientId: string, content: string): Observable<ClientNote> {
    return this.http.post<ClientNote>(`${this.baseUrl}/${clientId}/notes`, { content });
  }

  getActivities(clientId: string): Observable<ClientActivity[]> {
    return this.http.get<ClientActivity[]>(`${this.baseUrl}/${clientId}/activities`);
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