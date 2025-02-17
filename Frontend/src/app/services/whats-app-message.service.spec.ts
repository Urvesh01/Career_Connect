import { TestBed } from '@angular/core/testing';

import { WhatsAppMessageService } from './services/whats-app-message.service';

describe('WhatsAppMessageService', () => {
  let service: WhatsAppMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsAppMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
