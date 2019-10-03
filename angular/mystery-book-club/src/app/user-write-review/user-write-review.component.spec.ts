import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWriteReviewComponent } from './user-write-review.component';

describe('UserWriteReviewComponent', () => {
  let component: UserWriteReviewComponent;
  let fixture: ComponentFixture<UserWriteReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWriteReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
