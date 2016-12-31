/* @flow */
import selectFrom from '../../utils/selectFrom';
import { TODO_ITEMS_REDUCER } from '../reducers/todoItemsReducer';

import getItemByIndex from './getItemByIndex';
import getItemIndexes from './getItemIndexes';
import getNumberOfActiveItems from './getNumberOfActiveItems';

const getItemByIndexFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getItemByIndex);
const getItemIndexesFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getItemIndexes);
const getNumberOfActiveItemsFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getNumberOfActiveItems);

export {
  getItemByIndexFromTodoList as getItemByIndex,
  getItemIndexesFromTodoList as getItemIndexes,
  getNumberOfActiveItemsFromTodoList as getNumberOfActiveItems,
};
