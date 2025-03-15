import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;
  voteUp(): boolean {
    this.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

}
