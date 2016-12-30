/* @flow */
import { TODO_ITEMS_ADD } from '../actions/addTodoItemAction';

type State = {
  editingItemIndex: ?number,
  items: Array<{
    value: string,
    completed: bool,
  }>,
};

const initialState = {
  editingItemIndex: null,
  items: [],
}

/**
 * A reducer that keeps track of the current todo list items
 */
export const TODO_ITEMS_REDUCER = 'TODO_ITEMS_REDUCER';
export default function todoItemsReducer(state: State = initialState, action: Object): State {
  switch (action.type) {
    case TODO_ITEMS_ADD:
      const newItem = {
        value: action.value,
        completed: false,
      };

      return {
        ...state,
        items: [ ...state.items, newItem ],
      };
    default:
      return state;
  }
}
