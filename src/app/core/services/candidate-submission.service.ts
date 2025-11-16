import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CandidateSubmission, ClientFeedback } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateSubmissionService {
  private readonly baseUrl = `${environment.apiUrl}/candidate-submissions`;

  constructor(private http: HttpClient) {}

  // Recruiter submits candidate to client
  submitCandidate(submission: Partial<CandidateSubmission>): Observable<CandidateSubmission> {
    return this.http.post<CandidateSubmission>(`${this.baseUrl}`, submission);
  }

  // Client gets candidate submissions
  getClientSubmissions(clientId: string): Observable<CandidateSubmission[]> {
    return this.http.get<CandidateSubmission[]>(`${this.baseUrl}/client/${clientId}`);
  }

  // Recruiter gets submissions for their clients
  getRecruiterSubmissions(): Observable<CandidateSubmission[]> {
    return this.http.get<CandidateSubmission[]>(`${this.baseUrl}/recruiter`);
  }

  // Client provides feedback on submission
  provideFeedback(submissionId: string, feedback: Partial<ClientFeedback>): Observable<CandidateSubmission> {
    return this.http.post<CandidateSubmission>(`${this.baseUrl}/${submissionId}/feedback`, feedback);
  }

  // Update submission status
  updateStatus(submissionId: string, status: string): Observable<CandidateSubmission> {
    return this.http.patch<CandidateSubmission>(`${this.baseUrl}/${submissionId}/status`, { status });
  }
}
