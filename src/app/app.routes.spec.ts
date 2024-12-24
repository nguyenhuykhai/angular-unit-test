import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';
import { HighlightDirective } from './highlight.directive';
import { routes } from './app.routes';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

describe('App Routes', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let homeFixture: ComponentFixture<HomeComponent>;
  let location: Location;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HomeComponent,
        InfoComponent,
        GradePipe,
        HighlightDirective,
        RouterModule.forRoot(routes),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(AppComponent);
    homeFixture = TestBed.createComponent(HomeComponent);
    el = homeFixture.debugElement;
  });

  it('should have a route for /home', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('should redirect to info when click link from Home', waitForAsync(() => {
    homeFixture.detectChanges();
    let linkElement = el.queryAll(By.css('a'));
    linkElement[0].nativeElement.click();

    homeFixture.detectChanges();
    homeFixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    });
  }));
});
