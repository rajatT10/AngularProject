import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDealsComponent } from './amazon-deals.component';

describe('AmazonDealsComponent', () => {
  let component: AmazonDealsComponent;
  let fixture: ComponentFixture<AmazonDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
