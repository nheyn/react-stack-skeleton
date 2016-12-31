/* @flow */
import type { State } from '../reducers/todoItemsReducer';

export default function getItemByIndex(state: State, index: number): * {
  const { items } = state;

  for(let i=0; i<items.length; i++) {
    if(i === index) return items[i];
  }

  throw new Error(`Invalid todo list index: ${index}`);
}
