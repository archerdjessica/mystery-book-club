import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnimalComponent } from './get-animal.component';

describe('GetAnimalComponent', () => {
  let component: GetAnimalComponent;
  let fixture: ComponentFixture<GetAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
