import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServizioDatiService } from '../services/servizio-dati.service';
import { Dati } from '../models/dati';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  id: number;
  boolean: boolean;
  arrayString: string[];
  dati: Dati[];
  @Output() open: EventEmitter<Dati> = new EventEmitter();
  constructor(private servizioDati: ServizioDatiService) {
    this.name = 'This is a string';
    this.id = 24;
    this.boolean = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
  }

  ngOnInit() {
  }

  changeBoolean(boolean: boolean) {
    return this.boolean = boolean;
  }

  visualizza() {
    this.servizioDati.estraiDati().subscribe(dati => this.dati = dati);
  }

  aggiungi() {
   this.dati = this.servizioDati.aggiungiDati(this.dati, this.id, this.name, this.boolean);
    return this.dati;
  }

  visualizzaNelBody(dataSelezionata: Dati) {
    this.open.emit(dataSelezionata);
  }
}
