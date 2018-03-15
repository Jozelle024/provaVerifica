import { Injectable } from '@angular/core';
import { Dati } from '../models/dati';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ServizioDatiService {
  dati: Dati[];
  constructor() {
    this.dati = [{id: 1, name: 'Jozelle', boolean: true},
                {id: 2, name: 'Lyn', boolean: false},
                {id: 3, name: 'Arielle', boolean: false}];
  }
  estraiDati(): Observable<Dati[]> {
    return of(this.dati);
  }
  aggiungiDati(dati: Dati[], id: number, name: string, boolean: boolean) {
    dati.push({id: id, name: name, boolean: boolean});
    return dati;
  }

}
