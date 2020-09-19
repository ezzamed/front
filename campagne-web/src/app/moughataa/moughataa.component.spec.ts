import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoughataaComponent } from './moughataa.component';

describe('MoughataaComponent', () => {
  let component: MoughataaComponent;
  let fixture: ComponentFixture<MoughataaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoughataaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoughataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
