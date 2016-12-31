/* @flow */
import type { State } from '../reducers/todoItemsReducer';

export default function getNumberOfActiveItems(state: State): * {
  const { items } = state;
  const activeItems = items.filter((item) => item.completed? false: true);

  return activeItems.length;
}
