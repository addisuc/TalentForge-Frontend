import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ReferenceCheckStatus = 'PENDING' | 'SENT' | 'IN_PROGRESS' | 'COMPLETED' | 'EXPIRED';

export interface Reference {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  relationship: string;
  company?: string;
  title?: string;
}

export interface ReferenceCheckRequest {
  applicationId: string;
  references: Reference[];
  questions?: string[];
}

export interface ReferenceCheckResponse {
  id: string;
  referenceId: string;
  status: ReferenceCheckStatus;
  responses: QuestionResponse[];
  rating?: number;
  recommendation?: 'HIGHLY_RECOMMEND' | 'RECOMMEND' | 'NEUTRAL' | 'NOT_RECOMMEND';
  comments?: string;
  submittedAt?: string;
}

export interface QuestionResponse {
  question: string;
  answer: string;
}

export interface ReferenceCheck {
  id: string;
  applicationId: string;
  references: Reference[];
  responses: ReferenceCheckResponse[];
  status: ReferenceCheckStatus;
  requestedAt: string;
  completedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReferenceCheckService {
  private apiUrl = '/api/reference-checks';

  constructor(private http: HttpClient) {}

  // Request reference checks
  requestReferences(request: ReferenceCheckRequest): Observable<ReferenceCheck> {
    // Placeholder: Will send automated emails with secure links
    return this.http.post<ReferenceCheck>(this.apiUrl, request);
  }

  // Get reference check status
  getCheckStatus(checkId: string): Observable<ReferenceCheck> {
    return this.http.get<ReferenceCheck>(`${this.apiUrl}/${checkId}`);
  }

  // Get all reference checks for an application
  getChecksByApplication(applicationId: string): Observable<ReferenceCheck[]> {
    return this.http.get<ReferenceCheck[]>(`${this.apiUrl}/application/${applicationId}`);
  }

  // Resend reference request
  resendRequest(checkId: string, referenceId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${checkId}/resend/${referenceId}`, {});
  }

  // Submit reference response (public endpoint for references)
  submitResponse(token: string, response: ReferenceCheckResponse): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/submit/${token}`, response);
  }

  // Get default reference check questions
  getDefaultQuestions(): string[] {
    return [
      'How long did you work with this candidate?',
      'What was their role and responsibilities?',
      'How would you rate their job performance?',
      'What are their key strengths?',
      'What areas could they improve?',
      'Would you rehire this candidate?',
      'How did they handle challenges or conflicts?',
      'Additional comments or recommendations?'
    ];
  }
}
