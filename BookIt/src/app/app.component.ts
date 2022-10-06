import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';
  showPage: string = "bookshelf";

  onDisplayPage(page: string){
    this.showPage = page;
  }
}
