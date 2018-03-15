import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages: string[];
  msgLength = 0 ;
  constructor() {
    this.messages = [];
   }
   getMessaggi(): string[] {
    return this.messages;
   }
   addMessaggi(message: string) {
    this.messages.push(message);
    this.addCounter();
   }
   addCounter(): number {
     this.msgLength += 1;
     return this.msgLength;
   }
   getLength() {
     return this.msgLength;
   }
   clear() {
    this.messages = [];
    this.msgLength = 0;
   }
}
