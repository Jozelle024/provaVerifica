import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/posts';
import { Commento } from '../models/commento';
import { Album } from '../models/album';
import { Foto } from '../models/foto';

@Injectable()
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }
  userId = 1;
  estraiPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`);
  }

  estraiCommenti(): Observable<Commento[]> {
    return this.http.get<Commento[]>(`https://jsonplaceholder.typicode.com/comments`);
  }

  estraiAlbum(): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${this.userId}`);
  }

  estraiFoto(): Observable<Foto[]> {
    return this.http.get<Foto[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
