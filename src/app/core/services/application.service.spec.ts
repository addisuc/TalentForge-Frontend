import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApplicationService, JobApplication, ApplicationRequest } from './application.service';

describe('ApplicationService', () => {
  let service: ApplicationService;
  let httpMock: HttpTestingController;

  const mockApplication: JobApplication = {
    id: '1',
    jobId: 'job1',
    candidateId: 'candidate1',
    status: 'APPLIED',
    appliedAt: '2024-01-01',
    updatedAt: '2024-01-01',
    jobTitle: 'Software Engineer',
    candidateName: 'John Doe'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApplicationService]
    });
    service = TestBed.inject(ApplicationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should submit application', (done) => {
    const request: ApplicationRequest = { jobId: 'job1', coverLetter: 'I am interested' };
    service.submitApplication(request).subscribe(app => {
      expect(app.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/applications').flush(mockApplication);
  });

  it('should get application by id', (done) => {
    service.getApplication('1').subscribe(app => {
      expect(app.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/applications/1').flush(mockApplication);
  });

  it('should get all applications', (done) => {
    service.getAllApplications(0, 20).subscribe(page => {
      expect(page.content.length).toBe(1);
      done();
    });
    httpMock.expectOne('/api/applications?page=0&size=20').flush({ content: [mockApplication], totalElements: 1, totalPages: 1, size: 20, number: 0 });
  });

  it('should update application status', (done) => {
    service.updateApplicationStatus('1', 'SCREENING').subscribe(app => {
      expect(app.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/applications/1/status').flush(mockApplication);
  });

  it('should withdraw application', (done) => {
    service.withdrawApplication('1').subscribe(app => {
      expect(app.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/applications/1/status').flush(mockApplication);
  });
});
