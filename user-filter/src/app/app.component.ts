import { Component } from '@angular/core';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter.interface';
import { IUser } from './interfaces/user.interface';
import { filterUserList } from './utils/filter-user-list';

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
    this.userListFiltered = filterUserList(filterOptions, this.userList);
  }
}
