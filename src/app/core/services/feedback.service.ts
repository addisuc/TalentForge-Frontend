import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface FeedbackRequest {
  clientId?: string;
  recruiterId?: string;
  applicationId?: string;
  jobId?: string;
  feedbackType?: string;
  subject: string;
  message: string;
  priority?: string;
}

export interface FeedbackResponse {
  id: string;
  clientId: string;
  recruiterId: string;
  applicationId?: string;
  jobId?: string;
  senderType: string;
  feedbackType?: string;
  subject: string;
  message: string;
  priority: string;
  status: string;
  readAt?: string;
  createdAt: string;
  candidateName?: string;
  jobTitle?: string;
  senderName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = `${environment.apiUrl}/feedback`;

  constructor(private http: HttpClient) {}

  sendClientFeedback(request: FeedbackRequest): Observable<FeedbackResponse> {
    const headers = this.getHeaders();
    return this.http.post<FeedbackResponse>(`${this.apiUrl}/client`, request, { headers });
  }

  sendRecruiterFeedback(request: FeedbackRequest): Observable<FeedbackResponse> {
    return this.http.post<FeedbackResponse>(`${this.apiUrl}/recruiter`, request);
  }

  getClientFeedback(clientId: string): Observable<FeedbackResponse[]> {
    const headers = this.getHeaders();
    return this.http.get<FeedbackResponse[]>(`${this.apiUrl}/client/${clientId}`, { headers });
  }

  getRecruiterFeedback(recruiterId: string): Observable<FeedbackResponse[]> {
    const headers = this.getHeaders();
    return this.http.get<FeedbackResponse[]>(`${this.apiUrl}/recruiter/${recruiterId}`, { headers });
  }
  
  private getHeaders(): any {
    const tenantId = localStorage.getItem('tenantId');
    const userId = localStorage.getItem('userId') || localStorage.getItem('clientUserId');
    const headers: any = {};
    if (tenantId) headers['X-Tenant-ID'] = tenantId;
    if (userId) headers['X-User-ID'] = userId;
    return headers;
  }

  markAsRead(feedbackId: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${feedbackId}/read`, {});
  }
}
