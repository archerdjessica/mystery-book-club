import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReadReviewComponent } from './admin-read-review.component';

describe('AdminReadReviewComponent', () => {
  let component: AdminReadReviewComponent;
  let fixture: ComponentFixture<AdminReadReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReadReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
