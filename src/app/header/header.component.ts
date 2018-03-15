import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServizioDatiService } from '../services/servizio-dati.service';
import { Dati } from '../models/dati';
import { MessagesService } from '../services/messages.service';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { Post } from '../models/posts';
import { Commento } from '../models/commento';
import { Album } from '../models/album';
import { Foto } from '../models/foto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  id: number;
  boolean: boolean;
  arrayString: string[];
  dati: Dati[];
  elencoPost: Post[];
  elencoCommenti: Commento[];
  elencoCommentiPost: Commento[];
  elencoAlbum: Album[];
  elencoPhotos: Foto[];
  elencoPhotosAlbum: Foto[];
  arrayIdPost: number[];
  postLength;
  commentiLength;
  albumLength;
  fotoLength;
  datiLength;

  @Output() open: EventEmitter<Dati> = new EventEmitter();
  constructor(private servizioDati: ServizioDatiService,
              private servizioMessaggi: MessagesService,
              private servizioJsonPlaceholder: JsonPlaceholderService) {
    this.name = 'This is a string';
    this.id = 24;
    this.boolean = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
    this.elencoCommenti = [];
    this.elencoPhotos = [];
  }

  ngOnInit() {
    this.estraiPost();
    this.estraiPostCommenti();
    this.estraiAlbum();
    this.estraiAlbumPhotos();
  }

  estraiPost() {
    this.servizioJsonPlaceholder.estraiPost().subscribe(posts => {
      this.elencoPost = posts;
      this.postLength = this.elencoPost.length;
      });
  }

  estraiPostCommenti() {
    this.servizioJsonPlaceholder.estraiCommenti().subscribe(commenti => {
      this.elencoPost.forEach(post => {
        this.elencoCommentiPost = commenti.filter(commento =>
          commento.postId === post.id );
        this.elencoCommenti = this.elencoCommenti.concat(this.elencoCommentiPost);
      });
      this.commentiLength = this.elencoCommenti.length;
    });
  }

  estraiAlbum() {
    this.servizioJsonPlaceholder.estraiAlbum().subscribe(album => {
      this.elencoAlbum = album;
      this.albumLength = this.elencoAlbum.length;
      });
  }

  estraiAlbumPhotos() {
    this.servizioJsonPlaceholder.estraiFoto().subscribe(photos => {
      this.elencoAlbum.forEach(album => {
        this.elencoPhotosAlbum = photos.filter(foto =>
          foto.albumId === album.id );
          this.elencoPhotos = this.elencoPhotos.concat(this.elencoPhotosAlbum);
      });
      this.fotoLength = this.elencoPhotos.length;
    });
  }

  changeBoolean(boolean: boolean) {
    this.servizioMessaggi.addMessaggi('Show button clicked!');
    return this.boolean = boolean;
  }

  visualizza() {
    this.servizioDati.estraiDati().subscribe(dati => this.dati = dati);
    this.servizioMessaggi.addMessaggi('Visualizza button clicked!');
    this.datiLength = this.dati.length;
  }

  aggiungi() {
    this.dati = this.servizioDati.aggiungiDati(this.dati, this.id, this.name, this.boolean);
    this.servizioMessaggi.addMessaggi('Added dati into the array');
    return this.dati;
  }

  visualizzaNelBody(dataSelezionata: Dati) {
    this.servizioMessaggi.addMessaggi('Show body button clicked');
    this.open.emit(dataSelezionata);
  }
}
