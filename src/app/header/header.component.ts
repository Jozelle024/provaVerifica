import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  x: string;
  y: number;
  z: boolean;
  arrayString: string[];
  constructor() {
    this.x = 'This is a string';
    this.y = 24;
    this.z = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
   }

  ngOnInit() {
  }

  changeBoolean() {
    this.z = true;
  }

}
