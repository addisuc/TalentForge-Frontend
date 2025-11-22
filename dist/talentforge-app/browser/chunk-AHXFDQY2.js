import {
  Store,
  clearError,
  createFeatureSelector,
  createSelector,
  login,
  logout,
  register
} from "./chunk-7UAQBOGW.js";
import {
  HttpClient
} from "./chunk-LI6IQ5NJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";

// src/app/features/auth/store/auth.selectors.ts
var selectAuthState = createFeatureSelector("auth");
var selectUser = createSelector(selectAuthState, (state) => state.user);
var selectIsAuthenticated = createSelector(selectAuthState, (state) => state.isAuthenticated);
var selectAuthLoading = createSelector(selectAuthState, (state) => state.loading);
var selectAuthError = createSelector(selectAuthState, (state) => state.error);
var selectUserRole = createSelector(selectUser, (user) => user?.role);

// src/app/features/auth/services/auth-facade.service.ts
var AuthFacadeService = class _AuthFacadeService {
  constructor(store, http) {
    this.store = store;
    this.http = http;
    this.user$ = this.store.select(selectUser);
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }
  // Actions
  login(credentials) {
    this.store.dispatch(login({ credentials }));
  }
  register(userData) {
    this.store.dispatch(register({ userData }));
  }
  logout() {
    this.store.dispatch(logout());
  }
  clearError() {
    this.store.dispatch(clearError());
  }
  forgotPassword(email) {
    return this.http.post("/api/auth/forgot-password", { email });
  }
  resetPassword(token, newPassword) {
    return this.http.post("/api/auth/reset-password", { token, newPassword });
  }
  verifyEmail(token) {
    return this.http.get(`/api/auth/verify-email/${token}`);
  }
  resendVerificationEmail(token) {
    return this.http.post("/api/auth/resend-verification", { token });
  }
  validateInvitation(token) {
    return this.http.get(`/api/auth/invitations/${token}`);
  }
  acceptInvitation(data) {
    return this.http.post(`/api/auth/invitations/${data.token}/accept`, data);
  }
  sendInvitation(data) {
    return this.http.post("/api/auth/invitations", data);
  }
  static {
    this.\u0275fac = function AuthFacadeService_Factory(t) {
      return new (t || _AuthFacadeService)(\u0275\u0275inject(Store), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthFacadeService, factory: _AuthFacadeService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthFacadeService
};
//# sourceMappingURL=chunk-AHXFDQY2.js.map
