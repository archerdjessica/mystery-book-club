import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPublisherComponent } from './admin-add-publisher.component';

describe('AdminAddPublisherComponent', () => {
  let component: AdminAddPublisherComponent;
  let fixture: ComponentFixture<AdminAddPublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
