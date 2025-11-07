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

  getClientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }

  updateClient(id: number, client: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addNote(clientId: number, note: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${clientId}/notes`, { note });
  }

  getNotes(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clientId}/notes`);
  }

  getActivities(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clientId}/activities`);
  }
}
