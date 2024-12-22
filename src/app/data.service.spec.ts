import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';
import { USERS } from './mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        provideHttpClient(),
        provideHttpClientTesting() 
     ]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Jane Doe');
    });
    const mockRequest = testingController.expectOne("api/users");
    expect(mockRequest.request.method).toBe("GET");
    mockRequest.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('John Doe');
    });
    const mockRequest = testingController.expectOne("api/users/1");
    expect(mockRequest.request.method).toBe("GET");
    mockRequest.flush(USERS[1]);
    testingController.verify();
  });

  it('should update the user by id', () => {
    let changes = { name: "Khai Huy" };
    service.updateUser(1, changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);
    });
    const mockRequest = testingController.expectOne("api/users/1");
    expect(mockRequest.request.method).toBe("PUT");
    let modifiedUser = USERS[1];
    modifiedUser.name = changes.name;
    expect(mockRequest.request.body.name).toBe(changes.name);
    mockRequest.flush(modifiedUser);
    testingController.verify();
  });

  afterEach(() => {
    testingController.verify();
  });
});
