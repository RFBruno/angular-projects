import { Component } from '@angular/core';
import { IPlan } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'components';
  plan: IPlan = {
    info: {
      type: 'Simples',
      price: 120
    }
  }
}
