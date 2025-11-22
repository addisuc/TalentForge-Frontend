import {
  Router
} from "./chunk-OEVDKEI3.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  BehaviorSubject,
  catchError,
  map,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/core/auth/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.API_URL = "/api/auth";
    this.currentUserSubject = new BehaviorSubject(null);
    this.tokenSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.token$ = this.tokenSubject.asObservable();
    this.loadStoredAuth();
  }
  login(credentials) {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(map((response) => this.mapLoginResponse(response)), tap((response) => this.setAuthData(response)), catchError((error) => this.handleAuthError(error)));
  }
  register(userData) {
    return this.http.post(`${this.API_URL}/register`, userData).pipe(map((response) => this.mapLoginResponse(response)), tap((response) => this.setAuthData(response)), catchError((error) => this.handleAuthError(error)));
  }
  logout() {
    const token = this.getToken();
    if (token) {
      this.http.post(`${this.API_URL}/logout`, {}, {
        headers: { "Authorization": `Bearer ${token}` }
      }).subscribe();
    }
    this.clearAuthData();
    this.router.navigate(["/auth/login"]);
  }
  refreshToken() {
    return this.http.post(`${this.API_URL}/refresh`, {}).pipe(tap((response) => this.setAuthData(response)), catchError((error) => {
      this.logout();
      return throwError(error);
    }));
  }
  getCurrentUser() {
    return this.http.get(`${this.API_URL}/me`);
  }
  hasRole(role) {
    const user = this.currentUserSubject.value;
    return user?.role === role || false;
  }
  isAuthenticated() {
    return !!this.tokenSubject.value && !!this.currentUserSubject.value;
  }
  getToken() {
    return this.tokenSubject.value;
  }
  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }
  setAuthData(response) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    this.tokenSubject.next(response.token);
    this.currentUserSubject.next(response.user);
  }
  clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
  }
  loadStoredAuth() {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.tokenSubject.next(token);
        this.currentUserSubject.next(user);
      } catch {
        this.clearAuthData();
      }
    }
  }
  mapLoginResponse(response) {
    return {
      user: {
        id: response.userId,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        role: response.role,
        isEmailVerified: true,
        tenantId: response.tenantId,
        tenantName: response.tenantName,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      token: response.accessToken,
      refreshToken: response.refreshToken,
      expiresIn: response.expiresIn
    };
  }
  handleAuthError(error) {
    let errorMessage = "An error occurred";
    if (error.status === 401) {
      errorMessage = "Invalid email or password";
    } else if (error.status === 403) {
      errorMessage = "Please verify your email before logging in";
    } else if (error.status === 422) {
      errorMessage = "Password has expired. Please reset your password";
    } else if (error.status === 423) {
      errorMessage = "Account temporarily locked. Try again later";
    } else if (error.status === 500) {
      errorMessage = "Service temporarily unavailable. Please try again";
    } else if (!navigator.onLine) {
      errorMessage = "Connection lost. Check your internet connection";
    }
    return throwError({ message: errorMessage, originalError: error });
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-KPX5MXOM.js.map
