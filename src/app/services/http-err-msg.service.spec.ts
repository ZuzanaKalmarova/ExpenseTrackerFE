import { TestBed } from '@angular/core/testing';

import { HttpErrMsgService } from './http-err-msg.service';

describe('HttpErrMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrMsgService = TestBed.get(HttpErrMsgService);
    expect(service).toBeTruthy();
  });
});
