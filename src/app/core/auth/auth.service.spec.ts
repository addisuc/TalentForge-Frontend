import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest, RegisterRequest, UserRole } from '../models/user.model';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let router: jasmine.SpyObj<Router>;

  const mockLoginRequest: LoginRequest = {
    email: 'test@example.com',
    password: 'password123'
  };

  const mockRegisterRequest: RegisterRequest = {
    email: 'new@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    role: UserRole.RECRUITER
  };

  const mockBackendResponse = {
    userId: '123',
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: UserRole.RECRUITER,
    accessToken: 'mock-token',
    refreshToken: 'mock-refresh-token',
    expiresIn: 3600
  };

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should login successfully and store auth data', (done) => {
      service.login(mockLoginRequest).subscribe(response => {
        expect(response.token).toBe('mock-token');
        expect(response.user.email).toBe('test@example.com');
        expect(localStorage.getItem('token')).toBe('mock-token');
        expect(service.isAuthenticated()).toBe(true);
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      expect(req.request.method).toBe('POST');
      req.flush(mockBackendResponse);
    });

    it('should handle 401 error', (done) => {
      service.login(mockLoginRequest).subscribe(
        () => fail('should have failed'),
        error => {
          expect(error.message).toBe('Invalid email or password');
          done();
        }
      );

      const req = httpMock.expectOne('/api/auth/login');
      req.flush({}, { status: 401, statusText: 'Unauthorized' });
    });

    it('should handle 423 locked account error', (done) => {
      service.login(mockLoginRequest).subscribe(
        () => fail('should have failed'),
        error => {
          expect(error.message).toBe('Account temporarily locked. Try again later');
          done();
        }
      );

      const req = httpMock.expectOne('/api/auth/login');
      req.flush({}, { status: 423, statusText: 'Locked' });
    });
  });

  describe('register', () => {
    it('should register successfully', (done) => {
      service.register(mockRegisterRequest).subscribe(response => {
        expect(response.token).toBe('mock-token');
        expect(response.user.email).toBe('test@example.com');
        expect(service.isAuthenticated()).toBe(true);
        done();
      });

      const req = httpMock.expectOne('/api/auth/register');
      expect(req.request.method).toBe('POST');
      req.flush(mockBackendResponse);
    });
  });

  describe('logout', () => {
    it('should clear auth data and navigate to login', () => {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('user', JSON.stringify({ id: '123' }));

      service.logout();

      expect(localStorage.getItem('token')).toBeNull();
      expect(localStorage.getItem('user')).toBeNull();
      expect(service.isAuthenticated()).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
    });
  });

  describe('isAuthenticated', () => {
    it('should return false when not authenticated', () => {
      expect(service.isAuthenticated()).toBe(false);
    });

    it('should return true when authenticated', (done) => {
      service.login(mockLoginRequest).subscribe(() => {
        expect(service.isAuthenticated()).toBe(true);
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      req.flush(mockBackendResponse);
    });
  });

  describe('hasRole', () => {
    it('should return true for matching role', (done) => {
      service.login(mockLoginRequest).subscribe(() => {
        expect(service.hasRole(UserRole.RECRUITER)).toBe(true);
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      req.flush(mockBackendResponse);
    });

    it('should return false for non-matching role', (done) => {
      service.login(mockLoginRequest).subscribe(() => {
        expect(service.hasRole(UserRole.TENANT_ADMIN)).toBe(false);
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      req.flush(mockBackendResponse);
    });
  });

  describe('getToken', () => {
    it('should return null when not authenticated', () => {
      expect(service.getToken()).toBeNull();
    });

    it('should return token when authenticated', (done) => {
      service.login(mockLoginRequest).subscribe(() => {
        expect(service.getToken()).toBe('mock-token');
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      req.flush(mockBackendResponse);
    });
  });

  describe('getCurrentUserValue', () => {
    it('should return null when not authenticated', () => {
      expect(service.getCurrentUserValue()).toBeNull();
    });

    it('should return user when authenticated', (done) => {
      service.login(mockLoginRequest).subscribe(() => {
        const user = service.getCurrentUserValue();
        expect(user?.email).toBe('test@example.com');
        done();
      });

      const req = httpMock.expectOne('/api/auth/login');
      req.flush(mockBackendResponse);
    });
  });

  describe('refreshToken', () => {
    it('should refresh token successfully', (done) => {
      const refreshResponse = {
        user: {
          id: '123',
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
          role: UserRole.RECRUITER,
          isEmailVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        token: 'new-token',
        refreshToken: 'new-refresh-token',
        expiresIn: 3600
      };

      service.refreshToken().subscribe(response => {
        expect(response.token).toBe('new-token');
        done();
      });

      const req = httpMock.expectOne('/api/auth/refresh');
      req.flush(refreshResponse);
    });

    it('should logout on refresh failure', (done) => {
      service.refreshToken().subscribe(
        () => fail('should have failed'),
        () => {
          expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
          done();
        }
      );

      const req = httpMock.expectOne('/api/auth/refresh');
      req.flush({}, { status: 401, statusText: 'Unauthorized' });
    });
  });
});
