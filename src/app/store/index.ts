import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../features/auth/store/auth.reducer';
import { AuthState } from '../features/auth/store/auth.state';

export interface AppState {
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer
};