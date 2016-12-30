/* @flow */
import ListBody from './components/ListBody';
import ListFooter from './components/ListFooter';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';

import connectCompleteAll from './containers/connectCompleteAll';
import connectItem from './containers/connectItem';
import connectNewItem from './containers/connectNewItem';
import connectRemainingItemsInfo from './containers/connectRemainingItemsInfo';

import todoItemsReducer, { TODO_ITEMS_REDUCER } from './reducers/todoItemsReducer';

const ConnectedListBody = connectCompleteAll(ListBody);
const ConnectedListFooter = connectRemainingItemsInfo(ListFooter);
const ConnectedListHeader = connectNewItem(ListHeader);
const ConnectedListItem = connectItem(ListItem);

const reducers = {
  [TODO_ITEMS_REDUCER]: todoItemsReducer,
};

export {
  ConnectedListBody as ListBody,
  ConnectedListFooter as ListFooter,
  ConnectedListHeader as ListHeader,
  ConnectedListItem as ListItem,
  reducers,
};
