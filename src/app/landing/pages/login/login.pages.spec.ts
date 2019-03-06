import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPages } from './login.pages';

describe('LoginPages', () => {
  let component: LoginPages;
  let fixture: ComponentFixture<LoginPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
