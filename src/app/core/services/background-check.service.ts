import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type BackgroundCheckProvider = 'CHECKR' | 'HIRERIGHT' | 'STERLING';
export type BackgroundCheckStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
export type CheckType = 'CRIMINAL' | 'EMPLOYMENT' | 'EDUCATION' | 'CREDIT' | 'IDENTITY';

export interface BackgroundCheckRequest {
  applicationId: string;
  provider: BackgroundCheckProvider;
  checkTypes: CheckType[];
  candidateConsent: boolean;
}

export interface BackgroundCheckResult {
  id: string;
  applicationId: string;
  provider: BackgroundCheckProvider;
  status: BackgroundCheckStatus;
  checkTypes: CheckType[];
  results: CheckResult[];
  initiatedAt: string;
  completedAt?: string;
  reportUrl?: string;
}

export interface CheckResult {
  type: CheckType;
  status: 'CLEAR' | 'CONSIDER' | 'SUSPENDED';
  details?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundCheckService {
  private apiUrl = '/api/background-checks';

  constructor(private http: HttpClient) {}

  // Initiate background check with third-party provider
  initiateCheck(request: BackgroundCheckRequest): Observable<BackgroundCheckResult> {
    const payload = {
      applicationId: request.applicationId,
      provider: request.provider,
      checkTypes: request.checkTypes,
      candidateInfo: {
        // This will be populated from application data
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
      }
    };
    return this.http.post<BackgroundCheckResult>(this.apiUrl, payload);
  }

  // Get background check status
  getCheckStatus(checkId: string): Observable<BackgroundCheckResult> {
    return this.http.get<BackgroundCheckResult>(`${this.apiUrl}/${checkId}`);
  }

  // Get all checks for an application
  getChecksByApplication(applicationId: string): Observable<BackgroundCheckResult[]> {
    return this.http.get<BackgroundCheckResult[]>(`${this.apiUrl}/application/${applicationId}`);
  }

  // Webhook handler for provider callbacks (backend only)
  // This is a placeholder for documentation purposes
  handleProviderWebhook(provider: BackgroundCheckProvider, payload: any): void {
    console.log(`Webhook received from ${provider}:`, payload);
  }
}
