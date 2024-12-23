import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
  standalone: true
})
export class GradePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let grade = "";
    if (value >= 90) {
      grade = "A";
    } else if (value >= 80 && value < 90) {
      grade = "B";
    } else if (value >= 70 && value < 80) {
      grade = "C";
    } else if (value >= 60 && value < 70) {
      grade = "D";
    } else {
      grade = "FAIL";
    }
    return grade;
  }

}
