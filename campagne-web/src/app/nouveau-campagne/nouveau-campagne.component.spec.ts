import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCampagneComponent } from './nouveau-campagne.component';

describe('NouveauCampagneComponent', () => {
  let component: NouveauCampagneComponent;
  let fixture: ComponentFixture<NouveauCampagneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauCampagneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
