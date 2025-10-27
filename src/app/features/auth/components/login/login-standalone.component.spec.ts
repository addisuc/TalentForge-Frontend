import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginStandaloneComponent } from './login-standalone.component';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { NavigationService } from '../../../../core/services/navigation.service';
import { UserRole } from '../../../../core/models/user.model';

describe('LoginStandaloneComponent', () => {
  let component: LoginStandaloneComponent;
  let fixture: ComponentFixture<LoginStandaloneComponent>;
  let authFacade: jasmine.SpyObj<AuthFacadeService>;
  let router: Router;
  let navigationService: jasmine.SpyObj<NavigationService>;
  
  const isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  const userSubject = new BehaviorSubject<any>(null);
  const errorSubject = new BehaviorSubject<string | null>(null);

  beforeEach(async () => {
    const authFacadeSpy = jasmine.createSpyObj('AuthFacadeService', ['login'], {
      isAuthenticated$: isAuthenticatedSubject.asObservable(),
      user$: userSubject.asObservable(),
      error$: errorSubject.asObservable()
    });
    const navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['getDashboardRoute']);

    await TestBed.configureTestingModule({
      imports: [LoginStandaloneComponent],
      providers: [
        provideRouter([]),
        { provide: AuthFacadeService, useValue: authFacadeSpy },
        { provide: NavigationService, useValue: navigationServiceSpy }
      ]
    }).compileComponents();

    authFacade = TestBed.inject(AuthFacadeService) as jasmine.SpyObj<AuthFacadeService>;
    router = TestBed.inject(Router) as any;
    spyOn(router, 'navigate');
    navigationService = TestBed.inject(NavigationService) as jasmine.SpyObj<NavigationService>;
    
    localStorage.clear();
    fixture = TestBed.createComponent(LoginStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
    isAuthenticatedSubject.next(false);
    userSubject.next(null);
    errorSubject.next(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Validation', () => {
    it('should initialize with invalid form', () => {
      expect(component.loginForm.valid).toBe(false);
    });

    it('should validate email format', () => {
      const email = component.loginForm.get('email');
      email?.setValue('invalid-email');
      expect(email?.hasError('email')).toBe(true);
      
      email?.setValue('valid@email.com');
      expect(email?.hasError('email')).toBe(false);
    });

    it('should require password with minimum length', () => {
      const password = component.loginForm.get('password');
      password?.setValue('12345');
      expect(password?.hasError('minlength')).toBe(true);
      
      password?.setValue('123456');
      expect(password?.hasError('minlength')).toBe(false);
    });

    it('should have valid form with correct inputs', () => {
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123'
      });
      expect(component.loginForm.valid).toBe(true);
    });
  });

  describe('Login Flow', () => {
    it('should call authFacade.login on valid form submission', fakeAsync(() => {
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123'
      });
      
      component.onSubmit();
      tick();
      
      expect(authFacade.login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: false
      });
    }));

    it('should redirect to dashboard on successful login', (done) => {
      const mockUser = { id: '123', email: 'test@example.com', role: UserRole.RECRUITER };
      navigationService.getDashboardRoute.and.returnValue('/dashboard');
      
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123'
      });
      
      component.onSubmit();
      
      setTimeout(() => {
        isAuthenticatedSubject.next(true);
        userSubject.next(mockUser);
        
        setTimeout(() => {
          expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
          done();
        }, 100);
      }, 50);
    });

    it('should display error message on failed login', fakeAsync(() => {
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
      
      component.onSubmit();
      tick();
      
      errorSubject.next('Invalid email or password');
      tick();
      
      expect(component.errorMessage).toBe('Invalid email or password');
      expect(component.loading).toBe(false);
    }));
  });

  describe('Rate Limiting', () => {
    it('should track failed login attempts', fakeAsync(() => {
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
      
      expect(component.failedAttempts).toBe(0);
      
      component.onSubmit();
      tick();
      errorSubject.next('Invalid credentials');
      tick();
      
      expect(component.failedAttempts).toBe(1);
    }));

    it('should show captcha after 3 failed attempts', fakeAsync(() => {
      component.failedAttempts = 2;
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
      
      component.onSubmit();
      tick();
      errorSubject.next('Invalid credentials');
      tick();
      
      expect(component.showCaptcha).toBe(true);
    }));

    it('should lock account after 5 failed attempts', fakeAsync(() => {
      component.failedAttempts = 4;
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
      
      component.onSubmit();
      tick();
      errorSubject.next('Invalid credentials');
      tick();
      
      expect(component.isLocked).toBe(true);
      expect(component.failedAttempts).toBe(5);
      
      component.ngOnDestroy();
    }));

    it('should prevent login when account is locked', () => {
      component.isLocked = true;
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123'
      });
      
      component.onSubmit();
      
      expect(authFacade.login).not.toHaveBeenCalled();
    });
  });

  describe('Remember Me', () => {
    it('should store remember me preference on successful login', (done) => {
      const mockUser = { id: '123', email: 'test@example.com', role: UserRole.RECRUITER };
      navigationService.getDashboardRoute.and.returnValue('/dashboard');
      
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true
      });
      
      component.onSubmit();
      
      setTimeout(() => {
        isAuthenticatedSubject.next(true);
        userSubject.next(mockUser);
        
        setTimeout(() => {
          expect(localStorage.getItem('rememberMe')).toBe('true');
          expect(localStorage.getItem('rememberMeExpiry')).toBeTruthy();
          done();
        }, 100);
      }, 50);
    });

    it('should not store remember me when unchecked', (done) => {
      const mockUser = { id: '123', email: 'test@example.com', role: UserRole.RECRUITER };
      navigationService.getDashboardRoute.and.returnValue('/dashboard');
      
      component.loginForm.patchValue({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: false
      });
      
      component.onSubmit();
      
      setTimeout(() => {
        isAuthenticatedSubject.next(true);
        userSubject.next(mockUser);
        
        setTimeout(() => {
          expect(localStorage.getItem('rememberMe')).toBeNull();
          done();
        }, 100);
      }, 50);
    });
  });

  describe('Lockout Timer', () => {
    it('should restore lockout state from localStorage', () => {
      const lockoutEndTime = Date.now() + 900000; // 15 minutes
      localStorage.setItem('loginLockout', JSON.stringify({
        endTime: lockoutEndTime,
        attempts: 5
      }));
      
      component.ngOnInit();
      
      expect(component.isLocked).toBe(true);
      expect(component.failedAttempts).toBe(5);
    });

    it('should clear expired lockout on init', () => {
      const expiredTime = Date.now() - 1000;
      localStorage.setItem('loginLockout', JSON.stringify({
        endTime: expiredTime,
        attempts: 5
      }));
      
      component.ngOnInit();
      
      expect(component.isLocked).toBe(false);
      expect(localStorage.getItem('loginLockout')).toBeNull();
    });
  });

  describe('UI State', () => {
    it('should show attempts warning when failed attempts > 0', () => {
      component.failedAttempts = 2;
      expect(component.showAttemptsWarning).toBe(true);
    });

    it('should hide attempts warning when captcha is active', () => {
      component.failedAttempts = 3;
      component.showCaptcha = true;
      expect(component.showAttemptsWarning).toBe(false);
    });

    it('should calculate remaining attempts correctly', () => {
      component.failedAttempts = 2;
      expect(component.remainingAttempts).toBe(3);
      
      component.failedAttempts = 4;
      expect(component.remainingAttempts).toBe(1);
    });

    it('should toggle password visibility', () => {
      expect(component.hidePassword).toBe(true);
      component.hidePassword = false;
      expect(component.hidePassword).toBe(false);
    });
  });
});
