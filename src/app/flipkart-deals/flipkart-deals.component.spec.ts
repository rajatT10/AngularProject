import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartDealsComponent } from './flipkart-deals.component';

describe('FlipkartDealsComponent', () => {
  let component: FlipkartDealsComponent;
  let fixture: ComponentFixture<FlipkartDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipkartDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipkartDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
