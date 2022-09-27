import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'class-12-exercises';
  width: number = 200;
  height: number = 500;
  isDisabled:Boolean = true;

  constructor(){
    setTimeout(() => {
      this.width = 500
    }, 1000)
  }

  logConsole(){
    console.log("Hello there!")
  }

  toggleDisable(){
    this.isDisabled= !this.isDisabled;
  }
}
