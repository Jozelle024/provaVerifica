import { Component } from '@angular/core';
import { Dati } from './models/dati';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataPassata: Dati;
  riceviData(dataNome: Dati) {
    this.dataPassata = dataNome;
  }
}
