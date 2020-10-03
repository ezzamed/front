import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvaccinsComponent } from './gestionvaccins.component';

describe('GestionvaccinsComponent', () => {
  let component: GestionvaccinsComponent;
  let fixture: ComponentFixture<GestionvaccinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionvaccinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvaccinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
