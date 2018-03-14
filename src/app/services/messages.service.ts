import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages: string[];
  counter: number;
  constructor() {
    this.messages = [];
    this.counter = 0;
   }
   getMessaggi(): string[] {
    return this.messages;
   }
   addMessaggi(message: string) {
    this.messages.push(message);
    this.counter += 1;
   }
   getCounter(): number {
     return this.counter;
   }
   clear() {
    this.messages = [];
    this.counter = 0;
   }
}
