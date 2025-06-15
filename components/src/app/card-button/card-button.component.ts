import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  template:`
    <div class="card__button card__item" (click)="eventClickButton()">Adquirir</div>
  `,
  styleUrl: './card-button.component.scss',
  standalone: false
})
export class CardButtonComponent {
  @Output("eventClick") clickEmmit = new EventEmitter<Boolean>();

  eventClickButton(){
    console.log("🚀 ~ CardButtonComponent ~ eventClickButton ~ ");
    
    this.clickEmmit.emit(true);
  }

}
