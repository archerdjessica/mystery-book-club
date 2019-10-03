import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadReviewComponent } from './user-read-review.component';

describe('UserReadReviewComponent', () => {
  let component: UserReadReviewComponent;
  let fixture: ComponentFixture<UserReadReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReadReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
