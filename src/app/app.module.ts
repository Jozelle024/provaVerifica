import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServizioDatiService } from './services/servizio-dati.service';
import { BodyComponent } from './body/body.component';
import { MessagesService } from './services/messages.service';
import { JsonPlaceholderService } from './services/json-placeholder.service';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServizioDatiService, MessagesService, JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
