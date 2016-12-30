/* @flow */
import selectFrom from '../../utils/selectFrom';
import { TODO_ITEMS_REDUCER } from '../reducers/todoItemsReducer';
import getItemIndexes from './getItemIndexes';

const getItemIndexesFromTodoList = selectFrom(TODO_ITEMS_REDUCER, getItemIndexes);

export {
  getItemIndexesFromTodoList as getItemIndexes,
};
