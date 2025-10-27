import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService, Job, JobRequest, JobPage } from './job.service';

describe('JobService', () => {
  let service: JobService;
  let httpMock: HttpTestingController;

  const mockJob: Job = {
    id: '1',
    title: 'Software Engineer',
    description: 'Great opportunity',
    requirements: 'Angular, TypeScript',
    location: 'Remote',
    salaryMin: 80000,
    salaryMax: 120000,
    salary: '$80k-$120k',
    jobType: 'FULL_TIME',
    status: 'ACTIVE',
    companyId: 'company1',
    recruiterId: 'recruiter1',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  };

  const mockJobPage: JobPage = {
    content: [mockJob],
    totalElements: 1,
    totalPages: 1,
    size: 20,
    number: 0
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobService]
    });

    service = TestBed.inject(JobService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllJobs', () => {
    it('should fetch jobs with pagination', (done) => {
      service.getAllJobs(0, 20).subscribe(response => {
        expect(response.content.length).toBe(1);
        expect(response.totalElements).toBe(1);
        done();
      });

      const req = httpMock.expectOne('/api/jobs?page=0&size=20');
      expect(req.request.method).toBe('GET');
      req.flush(mockJobPage);
    });
  });

  describe('getJobById', () => {
    it('should fetch a single job', (done) => {
      service.getJobById('1').subscribe(job => {
        expect(job.id).toBe('1');
        expect(job.title).toBe('Software Engineer');
        done();
      });

      const req = httpMock.expectOne('/api/jobs/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockJob);
    });
  });

  describe('searchJobs', () => {
    it('should search jobs with query', (done) => {
      service.searchJobs('engineer', 0, 20).subscribe(response => {
        expect(response.content.length).toBe(1);
        done();
      });

      const req = httpMock.expectOne('/api/jobs/search?query=engineer&page=0&size=20');
      expect(req.request.method).toBe('GET');
      req.flush(mockJobPage);
    });
  });

  describe('getJobsByStatus', () => {
    it('should fetch jobs by status', (done) => {
      service.getJobsByStatus('ACTIVE', 0, 20).subscribe(response => {
        expect(response.content.length).toBe(1);
        done();
      });

      const req = httpMock.expectOne('/api/jobs/status/ACTIVE?page=0&size=20');
      expect(req.request.method).toBe('GET');
      req.flush(mockJobPage);
    });
  });

  describe('createJob', () => {
    it('should create a new job', (done) => {
      const jobRequest: JobRequest = {
        title: 'Software Engineer',
        description: 'Great opportunity',
        requirements: 'Angular, TypeScript',
        location: 'Remote',
        salaryMin: 80000,
        salaryMax: 120000,
        jobType: 'FULL_TIME',
        companyId: 'company1'
      };

      service.createJob(jobRequest).subscribe(job => {
        expect(job.id).toBe('1');
        expect(job.title).toBe('Software Engineer');
        done();
      });

      const req = httpMock.expectOne('/api/jobs');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(jobRequest);
      req.flush(mockJob);
    });
  });

  describe('updateJob', () => {
    it('should update an existing job', (done) => {
      const jobRequest: JobRequest = {
        title: 'Senior Software Engineer',
        description: 'Updated description',
        requirements: 'Angular, TypeScript, Node.js',
        location: 'Remote',
        salaryMin: 100000,
        salaryMax: 150000,
        jobType: 'FULL_TIME',
        companyId: 'company1'
      };

      service.updateJob('1', jobRequest).subscribe(job => {
        expect(job.id).toBe('1');
        done();
      });

      const req = httpMock.expectOne('/api/jobs/1');
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(jobRequest);
      req.flush(mockJob);
    });
  });

  describe('deleteJob', () => {
    it('should delete a job', (done) => {
      service.deleteJob('1').subscribe(() => {
        done();
      });

      const req = httpMock.expectOne('/api/jobs/1');
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });
});
