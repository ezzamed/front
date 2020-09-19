import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfdownComponent } from './pdfdown.component';

describe('PdfdownComponent', () => {
  let component: PdfdownComponent;
  let fixture: ComponentFixture<PdfdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
