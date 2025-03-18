import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  imports: [],
  standalone: true,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article;

  voteUp(): boolean {
    this.article.voteUp(); 
    return false;
    } 
  voteDown(): boolean {
    this.article.voteDown();
    return false;
    }
  
}
