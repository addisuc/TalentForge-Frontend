import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSettings, OrganizationSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = '/api/settings';

  constructor(private http: HttpClient) {}

  getUserSettings(): Observable<UserSettings> {
    return this.http.get<UserSettings>(`${this.apiUrl}/user`);
  }

  updateUserSettings(settings: Partial<UserSettings>): Observable<UserSettings> {
    return this.http.put<UserSettings>(`${this.apiUrl}/user`, settings);
  }

  getOrganizationSettings(): Observable<OrganizationSettings> {
    return this.http.get<OrganizationSettings>(`${this.apiUrl}/organization`);
  }

  updateOrganizationSettings(settings: Partial<OrganizationSettings>): Observable<OrganizationSettings> {
    return this.http.put<OrganizationSettings>(`${this.apiUrl}/organization`, settings);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/change-password`, { currentPassword, newPassword });
  }
}
