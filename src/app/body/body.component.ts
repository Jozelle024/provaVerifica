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
  counter = 0;
  msgLength = 0;
  constructor(private servizioMessaggi: MessagesService) {
    this.messaggi = this.servizioMessaggi.getMessaggi();
  }
  ngOnInit() {
    setInterval(() => {
      this.counter += 1;
    }, 2000);
  }
  clear() {
    this.servizioMessaggi.clear();
    this.messaggi = [];
  }
}
