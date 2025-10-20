export enum UserRole {
  // Public registration roles
  CANDIDATE = 'CANDIDATE',
  RECRUITER = 'RECRUITER',
  
  // Invitation-only roles
  TENANT_ADMIN = 'TENANT_ADMIN',
  BILLING_MANAGER = 'BILLING_MANAGER',
  PLATFORM_ADMIN = 'PLATFORM_ADMIN',
  PLATFORM_SUPER_ADMIN = 'PLATFORM_SUPER_ADMIN'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  acceptTerms?: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface InvitationRequest {
  email: string;
  role: UserRole;
  tenantId?: string;
  invitedBy: string;
}

export interface AcceptInvitationRequest {
  token: string;
  firstName: string;
  lastName: string;
  password: string;
}