import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { InterviewRequest, Interview } from './interview.service';

export type ApplicationStatus = 
  | 'APPLIED'
  | 'SCREENING'
  | 'PHONE_INTERVIEW'
  | 'TECHNICAL_INTERVIEW'
  | 'FINAL_INTERVIEW'
  | 'REFERENCE_CHECK'
  | 'BACKGROUND_CHECK'
  | 'OFFER_PENDING'
  | 'OFFER_ACCEPTED'
  | 'OFFER_DECLINED'
  | 'HIRED'
  | 'REJECTED'
  | 'WITHDRAWN';

export interface JobApplication {
  id: string;
  jobId: string;
  candidateId: string;
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  jobTitle?: string;
  companyName?: string;
  candidateName?: string;
  candidateEmail?: string;
  coverLetter?: string;
  clientId?: number;
  resumeUrl?: string;
  backgroundCheckStatus?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  backgroundCheckProvider?: 'CHECKR' | 'HIRERIGHT' | 'STERLING';
  referenceCheckStatus?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  offerDetails?: OfferDetails;
}

export interface OfferDetails {
  salary?: number;
  startDate?: string;
  offerLetterUrl?: string;
  expiresAt?: string;
}

export interface ApplicationRequest {
  jobId: string;
  coverLetter?: string;
}

export interface ApplicationPage {
  content: JobApplication[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = '/api/applications';

  constructor(private http: HttpClient) {}

  submitApplication(request: ApplicationRequest): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, request);
  }

  getApplication(id: string): Observable<JobApplication> {
    return this.http.get<JobApplication>(`${this.apiUrl}/${id}`);
  }

  getAllApplications(page: number = 0, size: number = 20): Observable<ApplicationPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<ApplicationPage>(this.apiUrl, { params });
  }

  getMyApplications(page: number = 0, size: number = 20): Observable<ApplicationPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<ApplicationPage>(`${this.apiUrl}/me`, { params });
  }

  getApplicationsByCandidate(candidateId: string, page: number = 0, size: number = 20): Observable<ApplicationPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<ApplicationPage>(`${this.apiUrl}/candidate/${candidateId}`, { params });
  }

  getApplicationsByJob(jobId: string, page: number = 0, size: number = 20): Observable<ApplicationPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<ApplicationPage>(`${this.apiUrl}/job/${jobId}`, { params });
  }

  updateApplicationStatus(id: string, status: string): Observable<JobApplication> {
    console.log(`Updating application ${id} to status: ${status}`);
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}/status`, { status }).pipe(
      tap(response => console.log('Status update response:', response)),
      catchError(error => {
        console.error('Status update error:', error);
        throw error;
      })
    );
  }

  withdrawApplication(id: string): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}/status`, { status: 'WITHDRAWN' });
  }

  createInterview(request: InterviewRequest): Observable<Interview> {
    return this.http.post<Interview>('/api/interviews', request);
  }

  // Background Check Integration (Placeholder)
  initiateBackgroundCheck(applicationId: string, provider: 'CHECKR' | 'HIRERIGHT' | 'STERLING'): Observable<any> {
    return this.http.post(`${this.apiUrl}/${applicationId}/background-check`, { provider });
  }

  getBackgroundCheckStatus(applicationId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${applicationId}/background-check`);
  }

  // Reference Check Integration (Placeholder)
  requestReferenceCheck(applicationId: string, references: ReferenceRequest[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/${applicationId}/reference-check`, { references });
  }

  getReferenceCheckStatus(applicationId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${applicationId}/reference-check`);
  }

  // Offer Management
  extendOffer(applicationId: string, offer: OfferDetails): Observable<any> {
    const payload = {
      applicationId: applicationId,
      salary: offer.salary,
      startDate: offer.startDate,
      offerLetterUrl: offer.offerLetterUrl,
      expiresAt: offer.expiresAt
    };
    return this.http.post<any>('/api/offers', payload);
  }

  respondToOffer(applicationId: string, accept: boolean): Observable<any> {
    const status = accept ? 'ACCEPTED' : 'DECLINED';
    return this.http.put<any>(`/api/offers/${applicationId}/respond`, { status });
  }
}

export interface ReferenceRequest {
  name: string;
  email: string;
  phone?: string;
  relationship: string;
  company?: string;
}