import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService, User, UpdateUserRequest } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockUser: User = {
    id: '1',
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'RECRUITER',
    status: 'ACTIVE',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user profile', (done) => {
    service.getUserProfile('1').subscribe(user => {
      expect(user.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/users/profile/1').flush(mockUser);
  });

  it('should update user', (done) => {
    const request: UpdateUserRequest = { firstName: 'Jane' };
    service.updateUser('1', request).subscribe(user => {
      expect(user.id).toBe('1');
      done();
    });
    httpMock.expectOne('/api/users/1').flush(mockUser);
  });

  it('should search users', (done) => {
    service.searchUsers('john', 'RECRUITER', 'ACTIVE', 0, 20).subscribe(page => {
      expect(page.content.length).toBe(1);
      done();
    });
    httpMock.expectOne('/api/users/search?page=0&size=20&query=john&role=RECRUITER&status=ACTIVE').flush({ content: [mockUser], totalElements: 1, totalPages: 1, size: 20, number: 0 });
  });

  it('should get all users', (done) => {
    service.getAllUsers(0, 20).subscribe(page => {
      expect(page.content.length).toBe(1);
      done();
    });
    httpMock.expectOne('/api/users?page=0&size=20').flush({ content: [mockUser], totalElements: 1, totalPages: 1, size: 20, number: 0 });
  });

  it('should deactivate user', (done) => {
    service.deactivateUser('1').subscribe(() => done());
    httpMock.expectOne('/api/users/1').flush(null);
  });
});
