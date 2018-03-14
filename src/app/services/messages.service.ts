import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages: string[] = [];
  constructor() {
   }
   getMessaggi(): string[] {
    return this.messages;
   }
   addMessaggi(message: string) {
    this.messages.push(message);
   }
   clear() {
    this.messages = [];
   }
}
