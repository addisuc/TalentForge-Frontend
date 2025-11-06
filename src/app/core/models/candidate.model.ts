export interface Candidate {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  headline?: string;
  summary?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  profilePhotoUrl?: string;
  skills?: string[];
  experienceYears?: number;
  isPublic?: boolean;
  status?: string;
  certifications?: CandidateCertification[];
  education?: CandidateEducation[];
  experience?: CandidateExperience[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CandidateCertification {
  id?: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
}

export interface CandidateEducation {
  id?: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  grade?: string;
  description?: string;
}

export interface CandidateExperience {
  id?: string;
  company: string;
  title: string;
  employmentType?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: string;
}

export interface UpdateCandidateRequest {
  phone?: string;
  location?: string;
  headline?: string;
  summary?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  skills?: string[];
  experienceYears?: number;
  isPublic?: boolean;
}
