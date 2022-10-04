import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // myPosts: string[] = [
  //   "Hello",
  //   "There",
  //   "My",
  //   "Young",
  //   "Padawan."
  // ];

  users: {firstName: string, id: number}[] = [
    {firstName: 'Savon',
    id: 9409},
    {firstName: 'Buck',
    id: 4818},
    {firstName: 'Sonny',
    id: 1474}];

}
