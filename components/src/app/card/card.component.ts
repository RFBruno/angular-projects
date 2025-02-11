import { Component } from '@angular/core';
import { IPlan } from '../interfaces/interfaces';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plan:IPlan = {
    info:{
      type: 'Simples',
      price: 99
    }
  }
}
