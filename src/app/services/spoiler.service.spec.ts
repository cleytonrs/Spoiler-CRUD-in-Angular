import { TestBed } from '@angular/core/testing';

import { SpoilerService } from './spoiler.service';

describe('SpoilerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpoilerService = TestBed.get(SpoilerService);
    expect(service).toBeTruthy();
  });
});
