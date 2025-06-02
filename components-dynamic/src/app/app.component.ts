import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-dynamic';
  inputValue:String = "init";
  inputType:String = "text"
  isDisabled:Boolean = true;
  buttonTitle:String = "Title";
  buttonDisabled:Boolean = true;

  setPasswordType():void {
    this.inputType = "password"
  }

  setTextType():void {
    this.inputType = "text"
  }

  enableInput():void{
    this.isDisabled = false;
  }

  disableInput():void{
    this.isDisabled = true;
  }
}
