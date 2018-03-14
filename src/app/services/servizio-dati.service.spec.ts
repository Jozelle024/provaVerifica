import { TestBed, inject } from '@angular/core/testing';

import { ServizioDatiService } from './servizio-dati.service';

describe('ServizioDatiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServizioDatiService]
    });
  });

  it('should be created', inject([ServizioDatiService], (service: ServizioDatiService) => {
    expect(service).toBeTruthy();
  }));
});
