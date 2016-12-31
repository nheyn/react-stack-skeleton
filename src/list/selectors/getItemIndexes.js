/* @flow */
import type { State } from '../reducers/todoItemsReducer';

export default function getItemIndexes(state: State, filter?: 'completed' | 'active'): * {
  const { items, editingItemIndex } = state;

  return {
    indexes: items.map((_, index) => index).filter((index) => {
      if(filter === 'completed')  return items[index].completed? true: false;
      if(filter === 'active')     return items[index].completed? false: true;

      return true;
    }),
    editingItemIndex,
  };
}
