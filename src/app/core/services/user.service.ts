import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  phoneNumber?: string;
  profilePicture?: string;
  skills?: string[];
  experience?: string;
  location?: string;
  permissions?: any;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  skills?: string[];
  experience?: string;
  location?: string;
}

export interface UserPage {
  content: User[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUserProfile(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile/${userId}`);
  }

  updateUser(userId: string, request: UpdateUserRequest): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${userId}`, request);
  }

  searchUsers(query?: string, role?: string, status?: string, page: number = 0, size: number = 20): Observable<UserPage> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    if (query) params = params.set('query', query);
    if (role) params = params.set('role', role);
    if (status) params = params.set('status', status);

    return this.http.get<UserPage>(`${this.apiUrl}/search`, { params });
  }

  getUsersByRole(role: string, page: number = 0, size: number = 20): Observable<UserPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<UserPage>(`${this.apiUrl}/role/${role}`, { params });
  }

  getAllUsers(page: number = 0, size: number = 20): Observable<UserPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<UserPage>(this.apiUrl, { params });
  }

  deactivateUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}