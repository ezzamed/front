import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmoughataasComponent } from './gestionmoughataas.component';

describe('GestionmoughataasComponent', () => {
  let component: GestionmoughataasComponent;
  let fixture: ComponentFixture<GestionmoughataasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionmoughataasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmoughataasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
