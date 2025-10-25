import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Interview {
  id: string;
  applicationId: string;
  interviewType: string;
  scheduledAt: string;
  durationMinutes: number;
  meetingLink?: string;
  meetingPlatform?: string;
  location?: string;
  interviewerName?: string;
  interviewerEmail?: string;
  status: string;
  notes?: string;
  feedback?: string;
  rating?: number;
  rescheduleReason?: string;
  rescheduleRequestedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InterviewRequest {
  applicationId: string;
  interviewType: string;
  scheduledAt: string;
  durationMinutes?: number;
  meetingLink?: string;
  meetingPlatform?: string;
  location?: string;
  interviewerName?: string;
  interviewerEmail?: string;
  notes?: string;
}

export interface RescheduleRequest {
  reason: string;
  proposedTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private apiUrl = '/api/interviews';

  constructor(private http: HttpClient) {}

  getAllInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.apiUrl);
  }

  getInterviewById(id: number): Observable<Interview> {
    return this.http.get<Interview>(`${this.apiUrl}/${id}`);
  }

  getInterviewsByApplication(applicationId: string): Observable<Interview[]> {
    return this.http.get<Interview[]>(`${this.apiUrl}/application/${applicationId}`);
  }

  getUpcomingInterviews(days: number = 30): Observable<Interview[]> {
    const params = new HttpParams().set('days', days.toString());
    return this.http.get<Interview[]>(`${this.apiUrl}/upcoming`, { params });
  }

  createInterview(request: InterviewRequest): Observable<Interview> {
    return this.http.post<Interview>(this.apiUrl, request);
  }

  updateInterview(id: number, request: InterviewRequest): Observable<Interview> {
    return this.http.put<Interview>(`${this.apiUrl}/${id}`, request);
  }

  requestReschedule(id: number, request: RescheduleRequest): Observable<Interview> {
    return this.http.post<Interview>(`${this.apiUrl}/${id}/reschedule`, request);
  }

  cancelInterview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
