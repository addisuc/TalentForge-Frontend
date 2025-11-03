import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendCandidateEmail(to: string, candidateName: string, subject: string, message: string): Observable<any> {
    const emailData = {
      to,
      subject,
      templateName: 'candidate-outreach',
      templateData: {
        candidateName,
        message
      },
      priority: 'NORMAL',
      triggerSource: 'CANDIDATE_DATABASE'
    };
    return this.http.post('/api/notifications/email/send', emailData);
  }

  sendEmail(to: string, subject: string, body: string): Observable<any> {
    const emailData = {
      to,
      subject,
      templateName: 'generic-email',
      templateData: {
        body
      },
      priority: 'NORMAL',
      triggerSource: 'CLIENT_MANAGEMENT'
    };
    return this.http.post('/api/notifications/email/send', emailData);
  }
}
