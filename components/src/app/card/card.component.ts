import { Component, Input } from '@angular/core';
import { IPlan } from '../interfaces/interfaces';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: false
})
export class CardComponent {
  _planCard:IPlan = {
    info:{
      type: '',
      price: 0
    }
  }

  @Input({required: true}) set planCard(value:IPlan){
    this._planCard = value;
    this._planCard.info.type = value.info.type.toLocaleUpperCase();
  }

  get planCard():IPlan {
    return this._planCard;
  }

  


  clickedButton():void{
    console.log("🚀 ~ CardComponent ~ clickedButton ~ " );
  }
}
