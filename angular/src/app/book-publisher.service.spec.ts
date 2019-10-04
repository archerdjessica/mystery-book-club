import { TestBed } from '@angular/core/testing';

import { BookPublisherService } from './book-publisher.service';

describe('BookPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookPublisherService = TestBed.get(BookPublisherService);
    expect(service).toBeTruthy();
  });
});
