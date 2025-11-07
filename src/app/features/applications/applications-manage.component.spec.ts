import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationsManageComponent } from './applications-manage.component';
import { ApplicationService, JobApplication, ApplicationStatus, ApplicationActivity } from '../../core/services/application.service';
import { InterviewService } from '../../core/services/interview.service';
import { of } from 'rxjs';

describe('ApplicationsManageComponent - Timeline', () => {
  let component: ApplicationsManageComponent;
  let fixture: ComponentFixture<ApplicationsManageComponent>;

  const mockApplication: JobApplication = {
    id: '1',
    jobId: 'job-1',
    candidateId: 'candidate-1',
    candidateName: 'John Doe',
    candidateEmail: 'john@example.com',
    jobTitle: 'Software Engineer',
    status: 'TECHNICAL_INTERVIEW' as ApplicationStatus,
    appliedAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-15T14:30:00Z'
  };

  const mockTimelineActivities: ApplicationActivity[] = [
    {
      id: '1',
      activityType: 'STATUS_CHANGE',
      newStatus: 'APPLIED',
      description: 'Application submitted',
      createdAt: '2024-01-01T10:00:00Z'
    },
    {
      id: '2',
      activityType: 'STATUS_CHANGE',
      oldStatus: 'APPLIED',
      newStatus: 'SCREENING',
      description: 'Moved to screening',
      createdAt: '2024-01-05T14:00:00Z'
    },
    {
      id: '3',
      activityType: 'STATUS_CHANGE',
      oldStatus: 'SCREENING',
      newStatus: 'PHONE_INTERVIEW',
      description: 'Phone interview scheduled',
      createdAt: '2024-01-10T09:00:00Z'
    },
    {
      id: '4',
      activityType: 'STATUS_CHANGE',
      oldStatus: 'PHONE_INTERVIEW',
      newStatus: 'TECHNICAL_INTERVIEW',
      description: 'Technical interview scheduled',
      createdAt: '2024-01-15T14:30:00Z'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationsManageComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ApplicationService,
          useValue: {
            getAllApplications: () => of({ content: [], totalElements: 0 }),
            updateApplicationStatus: () => of(mockApplication),
            getApplicationTimeline: () => of(mockTimelineActivities)
          }
        },
        {
          provide: InterviewService,
          useValue: {
            createInterview: () => of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationsManageComponent);
    component = fixture.componentInstance;
  });

  describe('getApplicationSteps', () => {
    beforeEach(() => {
      component.timelineActivities = mockTimelineActivities;
    });

    it('should return empty array for null application', () => {
      const steps = component.getApplicationSteps(null);
      expect(steps).toEqual([]);
    });

    it('should return all timeline steps', () => {
      const steps = component.getApplicationSteps(mockApplication);
      expect(steps.length).toBe(9);
      expect(steps.map(s => s.status)).toEqual([
        'APPLIED',
        'SCREENING',
        'PHONE_INTERVIEW',
        'TECHNICAL_INTERVIEW',
        'FINAL_INTERVIEW',
        'REFERENCE_CHECK',
        'BACKGROUND_CHECK',
        'OFFER_PENDING',
        'HIRED'
      ]);
    });

    it('should mark steps before current status as completed', () => {
      const steps = component.getApplicationSteps(mockApplication);
      expect(steps[0].completed).toBe(true); // APPLIED
      expect(steps[1].completed).toBe(true); // SCREENING
      expect(steps[2].completed).toBe(true); // PHONE_INTERVIEW
      expect(steps[3].completed).toBe(false); // TECHNICAL_INTERVIEW (current)
      expect(steps[4].completed).toBe(false); // FINAL_INTERVIEW
    });

    it('should mark current status step as current', () => {
      const steps = component.getApplicationSteps(mockApplication);
      expect(steps[3].current).toBe(true); // TECHNICAL_INTERVIEW
      expect(steps[0].current).toBe(false);
      expect(steps[4].current).toBe(false);
    });

    it('should set date for APPLIED step from timeline', () => {
      const steps = component.getApplicationSteps(mockApplication);
      expect(steps[0].date).toBeTruthy();
      expect(steps[1].date).toBeTruthy(); // SCREENING from timeline
      expect(steps[2].date).toBeTruthy(); // PHONE_INTERVIEW from timeline
    });

    it('should handle APPLIED status correctly', () => {
      const app = { ...mockApplication, status: 'APPLIED' as ApplicationStatus };
      const steps = component.getApplicationSteps(app);
      expect(steps[0].current).toBe(true);
      expect(steps[0].completed).toBe(false);
      expect(steps.every((s, i) => i === 0 ? true : !s.completed)).toBe(true);
    });

    it('should handle HIRED status correctly', () => {
      const app = { ...mockApplication, status: 'HIRED' as ApplicationStatus };
      const steps = component.getApplicationSteps(app);
      expect(steps[8].current).toBe(true);
      expect(steps.slice(0, 8).every(s => s.completed)).toBe(true);
    });

    it('should handle SCREENING status correctly', () => {
      const app = { ...mockApplication, status: 'SCREENING' as ApplicationStatus };
      const steps = component.getApplicationSteps(app);
      expect(steps[1].current).toBe(true);
      expect(steps[0].completed).toBe(true);
      expect(steps.slice(2).every(s => !s.completed)).toBe(true);
    });

    it('should handle OFFER_PENDING status correctly', () => {
      const app = { ...mockApplication, status: 'OFFER_PENDING' as ApplicationStatus };
      const steps = component.getApplicationSteps(app);
      expect(steps[7].current).toBe(true);
      expect(steps.slice(0, 7).every(s => s.completed)).toBe(true);
    });
  });
});
