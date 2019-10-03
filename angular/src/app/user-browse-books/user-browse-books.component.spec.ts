import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrowseBooksComponent } from './user-browse-books.component';

describe('UserBrowseBooksComponent', () => {
  let component: UserBrowseBooksComponent;
  let fixture: ComponentFixture<UserBrowseBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBrowseBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBrowseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
