import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout } from './layout';

describe('LayoutComponent', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
