import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  
  on(AuthActions.login, AuthActions.register, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(AuthActions.loginSuccess, AuthActions.registerSuccess, (state, { response }) => ({
    ...state,
    user: response.user,
    token: response.token,
    isAuthenticated: true,
    loading: false,
    error: null
  })),
  
  on(AuthActions.loginFailure, AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(AuthActions.logout, () => initialAuthState),
  
  on(AuthActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);