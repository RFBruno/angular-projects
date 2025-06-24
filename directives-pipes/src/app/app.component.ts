import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directives-pipes';

  name:string = "teste";
  showDiv: boolean = false;

  toggleDiv(){
    this.showDiv = !this.showDiv;
  }
}
