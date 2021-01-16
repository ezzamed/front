import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoughataaComponent } from './edit-moughataa.component';

describe('EditMoughataaComponent', () => {
  let component: EditMoughataaComponent;
  let fixture: ComponentFixture<EditMoughataaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoughataaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoughataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
