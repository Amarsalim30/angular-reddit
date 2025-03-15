import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";

@Component({
  selector: 'app-root',
  imports: [ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement):boolean{
    console.log(`Adding article title: ${newtitle.value} and link: ${newlink.value}`);
    return false;
  }
}