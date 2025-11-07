import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ClientDetailsComponent } from './client-details.component';
import { ClientService } from '../../core/services/client.service';
import { JobService } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { EmailService } from '../../core/services/email.service';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;
  let clientService: jasmine.SpyObj<ClientService>;
  let jobService: jasmine.SpyObj<JobService>;
  let applicationService: jasmine.SpyObj<ApplicationService>;

  const mockClient = {
    id: 1,
    name: 'Test Company',
    email: 'test@company.com',
    phone: '555-1234',
    website: 'www.test.com',
    address: '123 Test St',
    industry: 'Technology'
  };

  const mockJobs = [
    { id: 'job1', title: 'Developer', status: 'OPEN', createdAt: '2024-01-01', clientId: 1 },
    { id: 'job2', title: 'Designer', status: 'ACTIVE', createdAt: '2024-01-02', clientId: 1 }
  ];

  const mockApplications = {
    content: [
      { id: 'app1', jobId: 'job1', status: 'APPLIED', candidateName: 'John Doe', jobTitle: 'Developer', updatedAt: '2024-01-05' },
      { id: 'app2', jobId: 'job1', status: 'HIRED', candidateName: 'Jane Smith', jobTitle: 'Developer', updatedAt: '2024-01-10' }
    ],
    totalElements: 2
  };

  const mockNotes = [
    { id: 1, note: 'Test note', createdAt: '2024-01-01' }
  ];

  beforeEach(async () => {
    const clientServiceSpy = jasmine.createSpyObj('ClientService', ['getClientById', 'getNotes', 'addNote']);
    const jobServiceSpy = jasmine.createSpyObj('JobService', ['getJobsByClient']);
    const applicationServiceSpy = jasmine.createSpyObj('ApplicationService', ['getApplicationsByJob']);
    const emailServiceSpy = jasmine.createSpyObj('EmailService', ['sendEmail']);

    await TestBed.configureTestingModule({
      imports: [ClientDetailsComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ClientService, useValue: clientServiceSpy },
        { provide: JobService, useValue: jobServiceSpy },
        { provide: ApplicationService, useValue: applicationServiceSpy },
        { provide: EmailService, useValue: emailServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        }
      ]
    }).compileComponents();

    clientService = TestBed.inject(ClientService) as jasmine.SpyObj<ClientService>;
    jobService = TestBed.inject(JobService) as jasmine.SpyObj<JobService>;
    applicationService = TestBed.inject(ApplicationService) as jasmine.SpyObj<ApplicationService>;

    clientService.getClientById.and.returnValue(of(mockClient));
    jobService.getJobsByClient.and.returnValue(of(mockJobs));
    clientService.getNotes.and.returnValue(of(mockNotes));
    applicationService.getApplicationsByJob.and.returnValue(of(mockApplications));

    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load client data on init', () => {
    fixture.detectChanges();
    
    expect(clientService.getClientById).toHaveBeenCalledWith(1);
    expect(jobService.getJobsByClient).toHaveBeenCalledWith(1, 0, 100);
    expect(clientService.getNotes).toHaveBeenCalledWith(1);
  });

  it('should calculate stats correctly', () => {
    fixture.detectChanges();
    
    component.calculateStats();
    
    expect(component.stats.length).toBe(4);
    expect(component.stats[0].label).toBe('Active Jobs');
    expect(component.stats[0].value).toBe(2); // Both jobs are active
  });

  it('should get recent hires', () => {
    component.applications = mockApplications.content;
    
    const hires = component.recentHires;
    
    expect(hires.length).toBe(1);
    expect(hires[0].name).toBe('Jane Smith');
  });

  it('should get application count for job', () => {
    component.applications = mockApplications.content;
    
    const count = component.getApplicationCount('job1');
    
    expect(count).toBe(2);
  });

  it('should get initials from name', () => {
    const initials = component.getInitials('John Doe');
    expect(initials).toBe('JD');
  });

  it('should open note modal', () => {
    component.addNote();
    
    expect(component.showNoteModal).toBe(true);
    expect(component.noteText).toBe('');
  });

  it('should save note', () => {
    component.client = mockClient;
    component.noteText = 'New note';
    clientService.addNote.and.returnValue(of({}));
    clientService.getNotes.and.returnValue(of([...mockNotes, { id: 2, note: 'New note', createdAt: '2024-01-02' }]));
    
    component.saveNote();
    
    expect(clientService.addNote).toHaveBeenCalledWith(1, 'New note');
  });

  it('should not save empty note', () => {
    component.noteText = '   ';
    
    component.saveNote();
    
    expect(clientService.addNote).not.toHaveBeenCalled();
  });
});
