import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private sharedService: SharedService) {}
  multiply(a: number, b: number): number {
    this.sharedService.mySharedFunction();
    return a * b;
  }

  add(n1: number, n2: number) {
    this.sharedService.mySharedFunction();
    return n1 + n2;
  }
}
