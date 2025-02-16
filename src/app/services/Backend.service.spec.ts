import { TestBed } from '@angular/core/testing';

import { ReCAPTCHAService } from './services/re-captcha.service';

describe('ReCAPTCHAService', () => {
  let service: ReCAPTCHAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReCAPTCHAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
