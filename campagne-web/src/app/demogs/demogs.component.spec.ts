import { async, ComponentFixture, TestBed } from '@angular/core/testing';
n
import { DemogsComponent } from './demogs.component';

describe('DemogsComponent', () => {
  let component: DemogsComponent;
  let fixture: ComponentFixture<DemogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
