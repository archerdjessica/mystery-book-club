import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteReviewComponent } from './admin-delete-review.component';

describe('AdminDeleteReviewComponent', () => {
  let component: AdminDeleteReviewComponent;
  let fixture: ComponentFixture<AdminDeleteReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
