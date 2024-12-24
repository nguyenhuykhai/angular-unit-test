import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({}) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges(); // Moved here for consistency
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    const pElement = el.queryAll(By.css('p'));
    expect(pElement[0]?.nativeElement.textContent).toBe('home works!');

    const buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0]?.nativeElement.disabled).toBeTrue();

    const imgElements = el.queryAll(By.css('img'));
    expect(imgElements[0]?.nativeElement.src).toContain(
      'http://imgsrc.com/123'
    );

    const textElements = el.queryAll(By.css('.title'));
    expect(textElements[0]?.nativeElement.textContent).toBe(
      'Angular Unit Testing'
    );
  });
});
