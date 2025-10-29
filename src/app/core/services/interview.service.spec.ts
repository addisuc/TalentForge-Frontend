import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService, Interview, InterviewRequest } from './interview.service';

describe('InterviewService', () => {
  let service: InterviewService;
  let httpMock: HttpTestingController;

  const mockInterview: Interview = {
    id: '1',
    applicationId: 'app1',
    interviewType: 'TECHNICAL',
    scheduledAt: '2024-01-15T10:00:00',
    durationMinutes: 60,
    meetingLink: 'https://zoom.us/j/123',
    status: 'SCHEDULED',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InterviewService]
    });
    service = TestBed.inject(InterviewService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all interviews', (done) => {
    service.getAllInterviews().subscribe(interviews => {
      expect(interviews.length).toBe(1);
      done();
    });
    httpMock.expectOne('/api/interviews').flush([mockInterview]);
  });

  it('should get interview by id', (done) => {
    service.getInterviewById(1).subscribe(interview => {
      expect(interview.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/interviews/1').flush(mockInterview);
  });

  it('should create interview', (done) => {
    const request: InterviewRequest = {
      applicationId: 'app1',
      interviewType: 'TECHNICAL',
      scheduledAt: '2024-01-15T10:00:00',
      durationMinutes: 60
    };
    service.createInterview(request).subscribe(interview => {
      expect(interview.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/interviews').flush(mockInterview);
  });

  it('should request reschedule', (done) => {
    service.requestReschedule(1, { reason: 'Conflict' }).subscribe(interview => {
      expect(interview.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/interviews/1/reschedule').flush(mockInterview);
  });

  it('should cancel interview', (done) => {
    service.cancelInterview(1).subscribe(() => done());
    httpMock.expectOne('/api/interviews/1').flush(null);
  });
});
