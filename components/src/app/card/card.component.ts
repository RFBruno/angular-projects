import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plan = {
    info:{
      type: 'Simples',
      price: 99
    }
  }
}
