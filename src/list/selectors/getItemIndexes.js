/* @flow */
import type { State } from '../reducers/todoItemsReducer';

export default function getItemIndexes(state: State): * {
  const { items, editingItemIndex } = state;

  return {
    indexes: items.map((_, index) => index),
    editingItemIndex,
  };
}
