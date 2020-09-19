import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEnqueteComponent } from './nouveau-enquete.component';

describe('NouveauEnqueteComponent', () => {
  let component: NouveauEnqueteComponent;
  let fixture: ComponentFixture<NouveauEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
