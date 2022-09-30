import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isShowContent: boolean = true;



  onReverseContent(){
    if(this.isShowContent === true){
      this.isShowContent = false;
    }else{
      this.isShowContent = true;
    }
  }
}
