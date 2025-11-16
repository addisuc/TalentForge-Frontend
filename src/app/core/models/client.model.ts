export interface Client {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  createdAt: string;
  updatedAt?: string;
}

export interface JobRequest {
  id: string;
  requestId?: string;
  clientId: string;
  clientName: string;
  title: string;
  department: string;
  location: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'TEMPORARY';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  numberOfOpenings: number;
  salaryRange: string;
  description: string;
  requirements: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';
  createdAt: string;
  updatedAt?: string;
}

export interface CandidateSubmission {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateEmail: string;
  jobId: string;
  jobTitle: string;
  clientId: string;
  clientName: string;
  recruiterId: string;
  recruiterName: string;
  experience: string;
  currentCompany?: string;
  education: string;
  expectedSalary?: string;
  keyStrengths: string[];
  recruiterRating: number;
  recruiterNotes?: string;
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'SHORTLISTED' | 'REJECTED' | 'APPROVED';
  clientFeedback?: string;
  clientRating?: number;
  submittedAt: string;
  reviewedAt?: string;
}

export interface ClientFeedback {
  id: string;
  submissionId: string;
  candidateName: string;
  jobTitle: string;
  clientId: string;
  rating: number;
  feedback: string;
  decision: 'APPROVED' | 'REJECTED' | 'NEEDS_MORE_INFO';
  createdAt: string;
}

export interface SharedInterview {
  id: string;
  candidateId: string;
  candidateName: string;
  jobId: string;
  jobTitle: string;
  clientId: string;
  recruiterId: string;
  round: string;
  scheduledDate: string;
  duration: number;
  interviewerName: string;
  platform: 'ZOOM' | 'TEAMS' | 'GOOGLE_MEET' | 'IN_PERSON';
  meetingLink?: string;
  meetingId?: string;
  passcode?: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED';
  notes?: string;
}
