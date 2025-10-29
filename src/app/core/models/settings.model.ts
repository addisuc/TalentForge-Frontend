export interface UserSettings {
  id?: string;
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  language: string;
  timezone: string;
  theme: 'light' | 'dark' | 'auto';
  dateFormat: string;
  timeFormat: '12h' | '24h';
}

export interface OrganizationSettings {
  id?: string;
  organizationId: string;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyWebsite: string;
  companyAddress: string;
  industry: string;
  companySize: string;
  logo?: string;
  allowPublicJobPostings: boolean;
  requireApprovalForJobPostings: boolean;
  autoArchiveJobsAfterDays: number;
}

export interface NotificationSettings {
  newApplications: boolean;
  interviewReminders: boolean;
  statusUpdates: boolean;
  teamMessages: boolean;
  systemAlerts: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'team';
  showEmail: boolean;
  showPhone: boolean;
  allowSearchEngineIndexing: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  passwordLastChanged?: string;
  loginAlerts: boolean;
}
