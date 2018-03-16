import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { Post } from '../models/posts';
import { User } from '../models/users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email: string;
  name: string;
  post: Post;
  posts: Post[];
  userId;
  userLength;
  postsLength;
  constructor(private servizioJson: JsonPlaceholderService) {
  }

  ngOnInit() {
  }

  createPost(name: string , id: number, title: string, postBody: string ) {
    this.controlUser(name);
    this.estraiNumeroPost();
    id = this.postsLength + 1;
    this.post = new Post(10, 1, title, postBody);
    console.log(this.post);
    this.servizioJson.aggiungiPost(this.post).subscribe(post => this.posts.push(post));
  }
  btnClicked(name: string) {
    this.name = name;
    console.log(name);
  }
  controlUser(name: string) {
    this.servizioJson.estraiUsers().subscribe(users => {
      this.userLength = users.length;
      users.forEach(user => user.name !== name ? this.userId = this.userLength + 1 : this.userId);
    });
  }
  estraiNumeroPost() {
    this.servizioJson.estraiPost().subscribe(posts => {
      this.postsLength = posts.length;
      });
  }
}
