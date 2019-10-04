import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveReviewComponent } from './admin-approve-review.component';

describe('AdminApproveReviewComponent', () => {
  let component: AdminApproveReviewComponent;
  let fixture: ComponentFixture<AdminApproveReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApproveReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
