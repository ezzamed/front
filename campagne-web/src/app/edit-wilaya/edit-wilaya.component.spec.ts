import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWilayaComponent } from './edit-wilaya.component';

describe('EditWilayaComponent', () => {
  let component: EditWilayaComponent;
  let fixture: ComponentFixture<EditWilayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWilayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWilayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
