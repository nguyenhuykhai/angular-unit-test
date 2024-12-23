import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HighlightDirective],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });

  it('should change color when mouseenter', () => {
    let divElement = el.queryAll(By.css('div'));
    let div0 = divElement[0];
    let div1 = divElement[1];
    let div2 = divElement[2];
    let div3 = divElement[3];
    let div4 = divElement[4];
    div0.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green');
  });
});
