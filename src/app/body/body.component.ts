import { Component, OnInit, Input, Output } from '@angular/core';
import { Dati } from '../models/dati';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() datoRicevuto: Dati;
  constructor() {
   }
  ngOnInit() {
  }
}
