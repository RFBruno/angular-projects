import { Component } from '@angular/core';
import { isWithinInterval } from 'date-fns';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter.interface';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];

  ngOnInit(): void {
    this.userList = UsersList;
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = this.filterUserList(filterOptions, this.userList);
  }

  filterUserList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUserListByName(filterOptions.nome, userList);
    filteredList = this.filterUserListByDate(filterOptions.inicioData, filterOptions.fimData, filteredList);
    filteredList = this.filterUserListByStatus(
      filterOptions.status,
      filteredList
    );

    return filteredList;
  }

  filterUserListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    return filteredList;
  }

  filterUserListByDate(
    startDate: Date | undefined,
    endDate: Date | undefined,
    userList: IUser[]
  ): IUser[] {
    const DATE_NOT_TYPPED = startDate === undefined || endDate === undefined;

    if (DATE_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      isWithinInterval(user.dataCadastro, { start: startDate, end: endDate })
    );

    return filteredList;
  }

  filterUserListByStatus(
    status: boolean | undefined,
    userList: IUser[]
  ): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }
}
