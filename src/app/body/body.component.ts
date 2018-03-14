import { Component, OnInit, Input, Output } from '@angular/core';
import { Dati } from '../models/dati';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() datoRicevuto: Dati;
  messaggi: string[];
  counter: number;
  constructor(private servizioMessaggi: MessagesService) {
    this.messaggi = this.servizioMessaggi.getMessaggi();
    this.counter = this.servizioMessaggi.getCounter();
  }
  ngOnInit() {
  }
  clear() {
    this.servizioMessaggi.clear();
    this.messaggi = [];
  }
}
