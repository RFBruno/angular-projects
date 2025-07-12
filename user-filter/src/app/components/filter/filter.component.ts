import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    nome: undefined,
    inicioData: undefined,
    fimData: undefined,
    status: undefined,
  };
  statusList = [
    { descricao: 'Ativo', value: true },
    { descricao: 'Inativo', value: false },
  ];

  @Output('filter') filterEmitter = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.filterEmitter.emit(this.filterOptions);
  }
}
