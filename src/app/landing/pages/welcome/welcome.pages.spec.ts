import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePages } from './welcome.pages';

describe('WelcomePages', () => {
  let component: WelcomePages;
  let fixture: ComponentFixture<WelcomePages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
