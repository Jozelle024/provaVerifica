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
  constructor(private servizioMessaggi: MessagesService) {
  }
  ngOnInit() {
    this.messaggi = this.servizioMessaggi.getMessaggi();
    console.log(this.messaggi);
  }
  clear() {
    this.messaggi = [];
  }
}
