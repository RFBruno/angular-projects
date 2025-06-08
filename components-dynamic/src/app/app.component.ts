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

  widthButton1:String = "110px";
  widthButton2:Number = 120;
  styleObj = {
    width: "160px",
    backgroundColor: "grey",
  };

  isRedButton = true;
  isGreenButton = false;

  updateWidth(){
    this.widthButton2 = 200;
  }

  updateStyleObj() {
    this.styleObj.width = "170px";
    this.styleObj.backgroundColor = "lightblue";
  }

  updateStyleObjCorrect() {
    this.styleObj = {
      width: "170px",
      backgroundColor: "lightblue"
    }
  }

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
