import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-cards';


  buttonClicked(){
    console.log("🚀 ~ AppComponent ~ buttonClicked ~ buttonClicked:")
  }

  onCardButtonClicked(){
    console.log("🚀 ~ AppComponent ~ onCardButtonClicked ~ onCardButtonClicked:")
  }
}
