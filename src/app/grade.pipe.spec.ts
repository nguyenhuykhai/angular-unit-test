import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should grade be A when greather then 90', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(95);
    expect(grade).toBe("A");
  });
});
