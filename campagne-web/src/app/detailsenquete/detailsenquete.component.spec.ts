import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsenqueteComponent } from './detailsenquete.component';

describe('DetailsenqueteComponent', () => {
  let component: DetailsenqueteComponent;
  let fixture: ComponentFixture<DetailsenqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsenqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsenqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
