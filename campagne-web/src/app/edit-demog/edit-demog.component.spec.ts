import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemogComponent } from './edit-demog.component';

describe('EditDemogComponent', () => {
  let component: EditDemogComponent;
  let fixture: ComponentFixture<EditDemogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDemogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDemogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
