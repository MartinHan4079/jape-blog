import { TestBed } from '@angular/core/testing';

import { JapeCoreService } from './jape-core.service';

describe('JapeCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JapeCoreService = TestBed.get(JapeCoreService);
    expect(service).toBeTruthy();
  });
});
