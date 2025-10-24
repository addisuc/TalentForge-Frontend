import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salaryMin?: number;
  salaryMax?: number;
  salary?: string;
  jobType: string;
  status: string;
  companyId: string;
  recruiterId: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobRequest {
  title: string;
  description: string;
  requirements: string;
  location: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  jobType: string;
  companyId: string;
}

export interface JobPage {
  content: Job[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = '/api/jobs';

  constructor(private http: HttpClient) {}

  getAllJobs(page: number = 0, size: number = 20): Observable<JobPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<JobPage>(this.apiUrl, { params });
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  searchJobs(query: string, page: number = 0, size: number = 20): Observable<JobPage> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<JobPage>(`${this.apiUrl}/search`, { params });
  }

  getJobsByStatus(status: string, page: number = 0, size: number = 20): Observable<JobPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<JobPage>(`${this.apiUrl}/status/${status}`, { params });
  }

  createJob(request: JobRequest): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, request);
  }

  updateJob(id: string, request: JobRequest): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, request);
  }

  deleteJob(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}