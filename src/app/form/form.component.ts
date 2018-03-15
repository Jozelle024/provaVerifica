import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { Post } from '../models/posts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email: string;
  post: Post;
  posts: Post[];
  constructor(private servizioJson: JsonPlaceholderService) {
  }

  ngOnInit() {
  }

  createPost(userId: number , id: number, title: string, postBody: string ) {
    this.post = new Post(userId, id, title, postBody);
    // this.servizioJson.aggiungiPost(this.post).subscribe(post => this.posts.push(post));
  }

}
