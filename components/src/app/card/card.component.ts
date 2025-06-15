import { Component, Input } from '@angular/core';
import { IPlan } from '../interfaces/interfaces';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: false
})
export class CardComponent {
  @Input({required: true}) planCard:IPlan = {
    info:{
      type: '',
      price: 0
    }
  }


  clickedButton():void{
    console.log("🚀 ~ CardComponent ~ clickedButton ~ " );
  }
}
