import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelocaliComponent } from './gelocali.component';

describe('GelocaliComponent', () => {
  let component: GelocaliComponent;
  let fixture: ComponentFixture<GelocaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelocaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelocaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
