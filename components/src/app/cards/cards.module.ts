import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardPurpleButtonComponent } from '../card-purple-button/card-purple-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CardComponent,
    CardPurpleComponent,
    CardButtonComponent,
    CardPurpleButtonComponent,
    CardButtonCancelComponent
  ],
  exports: [
    CardComponent,
    CardPurpleComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class CardsModule { }
