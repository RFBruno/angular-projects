import { isWithinInterval } from 'date-fns/isWithinInterval';
import { IFilterOptions } from '../interfaces/filter.interface';
import { IUser } from '../interfaces/user.interface';

function filterUserList(
  filterOptions: IFilterOptions,
  userList: IUser[]
): IUser[] {
  let filteredList: IUser[] = [];

  filteredList = filterUserListByName(filterOptions.nome, userList);
  filteredList = filterUserListByDate(
    filterOptions.inicioData,
    filterOptions.fimData,
    filteredList
  );
  filteredList = filterUserListByStatus(filterOptions.status, filteredList);

  return filteredList;
}

function filterUserListByName(
  name: string | undefined,
  userList: IUser[]
): IUser[] {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return userList;
  }

  const filteredList = userList.filter((user) =>
    user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return filteredList;
}

function filterUserListByDate(
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

function filterUserListByStatus(
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

export { filterUserList };

