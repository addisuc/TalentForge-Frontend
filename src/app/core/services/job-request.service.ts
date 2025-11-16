import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { JobRequest } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class JobRequestService {
  private readonly baseUrl = `${environment.apiUrl}/job-requests`;

  constructor(private http: HttpClient) {}

  // Client creates job request
  createJobRequest(request: Partial<JobRequest>): Observable<JobRequest> {
    const tenantId = localStorage.getItem('tenantId');
    const userId = localStorage.getItem('clientUserId');
    const headers = {
      'X-Tenant-ID': tenantId || '',
      'X-User-ID': userId || ''
    };
    return this.http.post<JobRequest>(`${this.baseUrl}`, request, { headers });
  }

  // Client gets their job requests
  getClientJobRequests(clientId: string): Observable<JobRequest[]> {
    const tenantId = localStorage.getItem('tenantId');
    const headers = {
      'X-Tenant-ID': tenantId || ''
    };
    return this.http.get<JobRequest[]>(`${this.baseUrl}/client/${clientId}`, { headers });
  }

  // Recruiter gets job requests for their clients
  getJobRequestsForRecruiter(): Observable<JobRequest[]> {
    return this.http.get<JobRequest[]>(`${this.baseUrl}/recruiter`);
  }

  // Recruiter updates job request status
  updateJobRequestStatus(id: string, status: string, notes?: string): Observable<JobRequest> {
    return this.http.patch<JobRequest>(`${this.baseUrl}/${id}/status`, { status, notes });
  }

  // Recruiter converts job request to job posting
  convertToJob(id: string, jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/convert`, jobData);
  }
}
