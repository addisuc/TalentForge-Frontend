import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}/clients`;

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getClientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }

  updateClient(id: string, client: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addNote(clientId: string, note: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${clientId}/notes`, { note });
  }

  getNotes(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clientId}/notes`);
  }

  getActivities(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clientId}/activities`);
  }
}
