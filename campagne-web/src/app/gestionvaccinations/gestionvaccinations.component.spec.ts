import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvaccinationsComponent } from './gestionvaccinations.component';

describe('GestionvaccinationsComponent', () => {
  let component: GestionvaccinationsComponent;
  let fixture: ComponentFixture<GestionvaccinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionvaccinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
