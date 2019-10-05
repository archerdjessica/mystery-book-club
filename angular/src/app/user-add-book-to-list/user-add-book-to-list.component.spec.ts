import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddBookToListComponent } from './user-add-book-to-list.component';

describe('UserAddBookToListComponent', () => {
  let component: UserAddBookToListComponent;
  let fixture: ComponentFixture<UserAddBookToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddBookToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddBookToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
