import { Component, OnInit, Input } from '@angular/core';
import { SentimentMeta } from 'src/app/models/sentiment-meta';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() responseList: SentimentMeta[]

  constructor() { }

  ngOnInit(): void {
  }

}
