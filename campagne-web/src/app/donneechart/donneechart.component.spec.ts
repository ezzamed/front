import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneechartComponent } from './donneechart.component';

describe('DonneechartComponent', () => {
  let component: DonneechartComponent;
  let fixture: ComponentFixture<DonneechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
