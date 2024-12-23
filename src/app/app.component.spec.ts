import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unit-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, unit-testing');
  // });

  it('should render a button with text subscribe', () => {
    component.isSubscribed = false;
    let btnElement = el.queryAll(By.css('.subscribe'));
    fixture.detectChanges();
    btnElement = el.queryAll(By.css('.subscribe'));
    expect(btnElement[0].nativeElement.textContent).toContain('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  it('should render a button with text subscribed after click', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElement = el.queryAll(By.css('.subscribe'));
    btnElement[0].nativeElement.click();

    setTimeout(() => {
      fixture.detectChanges();
      btnElement = el.queryAll(By.css('.subscribe'));
    }, 3000);

    flush();

    expect(btnElement[0].nativeElement.textContent).toContain('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
  }));

  it('should test with Promise and SetTimeout', fakeAsync(() => {
    let count = 0;
    setTimeout(() => {
      count = count + 1;
    }, 0);

    setTimeout(() => {
      count = count + 2;
    }, 2000)

    Promise.resolve().then(() => {
      count = count + 3;
    });

    tick(1000);
    expect(count).toBe(4);
    tick(2000);
    expect(count).toBe(6);
  }));

  it('should test with Observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(3000))
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(3000);
    expect(isSubscribed).toBeTrue();
  }));
});
