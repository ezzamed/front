import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnqueteComponent } from './edit-enquete.component';

describe('EditEnqueteComponent', () => {
  let component: EditEnqueteComponent;
  let fixture: ComponentFixture<EditEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
