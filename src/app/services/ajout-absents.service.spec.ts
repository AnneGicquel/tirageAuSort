import { TestBed } from '@angular/core/testing';

import { AjoutAbsentsService } from './ajout-absents.service';

describe('AjoutAbsentsService', () => {
  let service: AjoutAbsentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutAbsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
