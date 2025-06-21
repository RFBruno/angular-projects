import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, alias: "type" }) planType: string = "";
  @Input({ required: true, alias: "price" }) planPrice: number = 0;
  @Input({ required: true, alias: "style" }) cardStyle: "orange" | "purple" = "orange";
  @Input({ alias: "disabled" }) isDisabled: boolean = false;

  @Output("buttonClicked") buttonClickedEmitt = new EventEmitter<void>();

  
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }

}
