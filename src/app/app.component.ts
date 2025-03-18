import { Component } from '@angular/core';
import { ArticleComponent } from "./article/article.component";
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  imports: [ArticleComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Articles: Article[];

  constructor(){
    this.Articles = [
      new Article('Angular 2','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angular Homepage','http://angular.io',1)
    ];
  }

  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement):boolean{
    console.log(`Adding article title: ${newtitle.value} and link: ${newlink.value}`);
    return false;
  }
}