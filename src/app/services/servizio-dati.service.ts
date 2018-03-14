import { Injectable } from '@angular/core';
import { Dati } from '../models/dati';

@Injectable()
export class ServizioDatiService {
  constructor() {
  }
  estraiDati(dati: Dati[]) {
    return dati;
  }
  aggiungiDati(dati: Dati[], id: number, name: string, boolean: boolean) {
    dati.push({id: id, name: name, boolean: boolean});
    return dati;
  }
}
