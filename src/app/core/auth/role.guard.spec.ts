import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { RoleGuard } from './role.guard';
import { AuthService } from './auth.service';
import { UserRole } from '../models/user.model';

describe('RoleGuard', () => {
  let guard: RoleGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated', 'hasRole']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        RoleGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(RoleGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    route = { data: {} } as ActivatedRouteSnapshot;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access when authenticated and has required role', () => {
    route.data = { roles: [UserRole.RECRUITER] };
    authService.isAuthenticated.and.returnValue(true);
    authService.hasRole.and.returnValue(true);
    
    expect(guard.canActivate(route)).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should deny access and redirect to login when not authenticated', () => {
    route.data = { roles: [UserRole.RECRUITER] };
    authService.isAuthenticated.and.returnValue(false);
    
    expect(guard.canActivate(route)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should deny access and redirect to unauthorized when missing required role', () => {
    route.data = { roles: [UserRole.TENANT_ADMIN] };
    authService.isAuthenticated.and.returnValue(true);
    authService.hasRole.and.returnValue(false);
    
    expect(guard.canActivate(route)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/unauthorized']);
  });

  it('should allow access when no roles specified', () => {
    route.data = {};
    authService.isAuthenticated.and.returnValue(true);
    
    expect(guard.canActivate(route)).toBe(true);
  });
});
