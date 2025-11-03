import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSettings, OrganizationSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settingsApiUrl = '/api/users/me/settings';

  constructor(private http: HttpClient) {}

  getUserSettings(): Observable<UserSettings> {
    return this.http.get<UserSettings>(this.settingsApiUrl);
  }

  updateUserSettings(settings: Partial<UserSettings>): Observable<UserSettings> {
    return this.http.put<UserSettings>(this.settingsApiUrl, settings);
  }

  getOrganizationSettings(): Observable<OrganizationSettings> {
    // Return empty settings for now
    return new Observable(observer => {
      observer.next({} as OrganizationSettings);
      observer.complete();
    });
  }

  updateOrganizationSettings(settings: Partial<OrganizationSettings>): Observable<OrganizationSettings> {
    // Return settings as-is for now
    return new Observable(observer => {
      observer.next(settings as OrganizationSettings);
      observer.complete();
    });
  }

  changePassword(currentPassword: string, newPassword: string): Observable<void> {
    return this.http.post<void>('/api/users/change-password', { currentPassword, newPassword });
  }
}
