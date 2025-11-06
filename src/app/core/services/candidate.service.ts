import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate, UpdateCandidateRequest } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = '/api/candidates';

  constructor(private http: HttpClient) {}

  getCandidateProfile(userId: string): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.apiUrl}/user/${userId}`);
  }

  updateCandidateProfile(candidateId: string, request: UpdateCandidateRequest): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.apiUrl}/${candidateId}`, request);
  }

  uploadResume(candidateId: string, file: File): Observable<{ resumeUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ resumeUrl: string }>(`${this.apiUrl}/${candidateId}/resume`, formData);
  }

  uploadPhoto(candidateId: string, file: File): Observable<{ photoUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ photoUrl: string }>(`${this.apiUrl}/${candidateId}/photo`, formData);
  }

  saveCertifications(candidateId: string, certifications: any[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${candidateId}/certifications`, certifications);
  }

  saveEducation(candidateId: string, education: any[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${candidateId}/education`, education);
  }

  saveExperience(candidateId: string, experience: any[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${candidateId}/experience`, experience);
  }
}
