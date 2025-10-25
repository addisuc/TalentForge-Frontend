import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterviewRequest, Interview } from './interview.service';

export interface JobApplication {
  id: string;
  jobId: string;
  candidateId: string;
  status: string;
  appliedAt: string;
  updatedAt: string;
  jobTitle?: string;
  companyName?: string;
  candidateName?: string;
  candidateEmail?: string;
  coverLetter?: string;
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
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}/status`, { status });
  }

  withdrawApplication(id: string): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}/status`, { status: 'WITHDRAWN' });
  }

  createInterview(request: InterviewRequest): Observable<Interview> {
    return this.http.post<Interview>('/api/interviews', request);
  }
}