import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauDemogsComponent } from './nouveau-demogs.component';

describe('NouveauDemogsComponent', () => {
  let component: NouveauDemogsComponent;
  let fixture: ComponentFixture<NouveauDemogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauDemogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauDemogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
