export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  plan: 'Starter' | 'Professional' | 'Enterprise';
  status: 'Active' | 'Trial' | 'Suspended' | 'Cancelled';
  users: number;
  jobs: number;
  mrr: number;
  createdAt: string;
  adminEmail?: string;
  adminName?: string;
}

export interface CreateTenantRequest {
  name: string;
  subdomain: string;
  plan: string;
  adminEmail: string;
  adminFirstName: string;
  adminLastName: string;
}

export interface Subscription {
  id: string;
  tenantId: string;
  plan: string;
  status: 'active' | 'trial' | 'cancelled' | 'past_due';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  amount: number;
  currency: string;
}

export interface Invoice {
  id: string;
  tenantId: string;
  tenantName: string;
  amount: number;
  status: 'DRAFT' | 'SENT' | 'PAID' | 'FAILED' | 'CANCELLED';
  dueDate: string;
  paidDate?: string;
  invoiceNumber: string;
  currency: string;
}
