/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarClientesService } from './listarClientes.service';

describe('Service: ListarClientes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarClientesService]
    });
  });

  it('should ...', inject([ListarClientesService], (service: ListarClientesService) => {
    expect(service).toBeTruthy();
  }));
});
