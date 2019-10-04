import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditReviewComponent } from './admin-edit-review.component';

describe('AdminEditReviewComponent', () => {
  let component: AdminEditReviewComponent;
  let fixture: ComponentFixture<AdminEditReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
