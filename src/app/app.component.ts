import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement):boolean{
    console.log(`Adding article title: ${newtitle.value} and link: ${newlink.value}`);
    return false;
  }
}