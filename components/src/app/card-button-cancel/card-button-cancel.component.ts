import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styles: `
        .card-cancel__button{
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color:rgb(139, 51, 35);
        cursor: pointer;
        padding: 10px;
    }
  `,
  standalone: false
})
export class CardButtonCancelComponent {

}
