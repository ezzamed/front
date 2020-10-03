import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMoughataaComponent } from './nouveau-moughataa.component';

describe('NouveauMoughataaComponent', () => {
  let component: NouveauMoughataaComponent;
  let fixture: ComponentFixture<NouveauMoughataaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauMoughataaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMoughataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
