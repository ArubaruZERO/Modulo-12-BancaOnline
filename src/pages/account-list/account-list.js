import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then(accountList => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach(account => {
    onUpdateField(`select-${account.id}`, event => {
      const route = event.target.value;
      console.log(event.target.value)
      history.push(route);
    });
  });
});
