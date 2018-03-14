import { Injectable } from '@angular/core';
import { Dati } from '../models/dati';

@Injectable()
export class ServizioDatiService {
  dati: Dati[];

  constructor() {
    this.dati = [{'id': 5 , 'name': 'jozelle', 'boolean': true }];
   }
  read() {
    return this.dati;
  }
  writeName(name: string) {
  }
}
