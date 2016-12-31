/* @flow */
import selectFrom from '../../utils/selectFrom';
import { TODO_ITEMS_REDUCER } from '../reducers/todoItemsReducer';

import getItemByIndex from './getItemByIndex';
import getItemIndexes from './getItemIndexes';

const getItemByIndexFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getItemByIndex);
const getItemIndexesFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getItemIndexes);

export {
  getItemByIndexFromTodoList as getItemByIndex,
  getItemIndexesFromTodoList as getItemIndexes,
};
