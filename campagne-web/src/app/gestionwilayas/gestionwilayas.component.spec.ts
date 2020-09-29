import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionwilayasComponent } from './gestionwilayas.component';

describe('GestionwilayasComponent', () => {
  let component: GestionwilayasComponent;
  let fixture: ComponentFixture<GestionwilayasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionwilayasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionwilayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
