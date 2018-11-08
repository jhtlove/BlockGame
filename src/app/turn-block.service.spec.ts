import { TestBed } from '@angular/core/testing';

import { TurnBlockService } from './turn-block.service';

describe('TurnBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnBlockService = TestBed.get(TurnBlockService);
    expect(service).toBeTruthy();
  });
});
