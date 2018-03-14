import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  age: number;
  boolean: boolean;
  arrayString: string[];
  constructor() {
    this.name = 'This is a string';
    this.age = 24;
    this.boolean = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
   }

  ngOnInit() {
  }

  changeBoolean(boolean: boolean) {
    return this.boolean = boolean;
  }

}
