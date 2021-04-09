import { TestBed } from '@angular/core/testing';

import { GameTemplateService } from './game-template.service';

describe('GameTemplateService', () => {
  let service: GameTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
