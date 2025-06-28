import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directives-pipes';

  name:string = "teste";
  showDiv: boolean = false;
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Felipe Freitas', age: 26 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Jorginho Carvalho', age: 55 },
    { name: 'Joãozinho da Silva', age: 18 }
  ];

  person = { name: 'Felipe', status: 1 };
  person2 = { name: 'Matheus', status: 2 };
  person3 = { name: 'Luis', status: 3 };

  toggleDiv(){
    this.showDiv = !this.showDiv;
  }

  selectPerson(index: number) {
    this.personSelectedIndex = index;
    console.log("Teste barrando commit");
  }
}
