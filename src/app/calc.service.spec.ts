import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [CalcService, { provide: SharedService, useValue: shared }]
    });
    shared = TestBed.inject(SharedService);
    calc =  TestBed.inject(CalcService);
  });

  it('should multiply 2 numbers', () => {
    const result = calc.multiply(2, 3);
    expect(result).toEqual(6); // Check if the result is correct
  });

  it('should add 2 numbers', () => {
    const result = calc.add(2, 3);
    expect(result).toEqual(5); // Check if the result is correct
  });

  // it('Call shared function', () => {
  //   const shared = new SharedService();
  //   spyOn(shared, 'mySharedFunction');
  //   const calc = new CalcService(shared);
  //   const result = calc.multiply(2, 3);
  //   expect(shared.mySharedFunction).toHaveBeenCalled(); // Check if the function was called
  // });
});