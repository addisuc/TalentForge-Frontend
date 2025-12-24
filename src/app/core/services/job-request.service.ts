import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { JobRequest } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class JobRequestService {
  private readonly baseUrl = `/api/job-requests`;

  constructor(private http: HttpClient) {}

  // Client creates job request
  createJobRequest(request: Partial<JobRequest>): Observable<JobRequest> {
    const token = localStorage.getItem('clientToken');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.post<JobRequest>(`${this.baseUrl}`, request, { headers });
  }

  // Client gets their job requests
  getClientJobRequests(clientId: string): Observable<JobRequest[]> {
    const token = localStorage.getItem('clientToken');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.get<JobRequest[]>(`${this.baseUrl}/client/${clientId}`, { headers });
  }

  // Recruiter gets job requests for their clients
  getJobRequestsForRecruiter(): Observable<JobRequest[]> {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.get<JobRequest[]>(`${this.baseUrl}/recruiter`, { headers });
  }

  private getTenantIdFromToken(token: string | null): string {
    if (!token) return '';
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.tenantId || '';
    } catch {
      return '';
    }
  }

  // Recruiter updates job request status
  updateJobRequestStatus(id: string, status: string, notes?: string): Observable<JobRequest> {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.patch<JobRequest>(`${this.baseUrl}/${id}/status`, { status, notes }, { headers });
  }

  // Recruiter converts job request to job posting
  convertToJob(id: string, jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/convert`, jobData);
  }
}
