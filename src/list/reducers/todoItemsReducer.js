/* @flow */
import { TODO_ITEMS_ADD } from '../actions/addTodoItemAction';
import { TODO_ITEMS_MARK_ACTIVE } from '../actions/setItemAsActiveAction';
import { TODO_ITEMS_MARK_COMPLETE } from '../actions/setItemAsCompletedAction';

export type State = {
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
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.value,
            completed: false,
          },
        ],
      };
    case TODO_ITEMS_MARK_ACTIVE:
      return {
        ...state,
        items: state.items.map((currItem, index) => {
          if(index !== action.itemIndex) return currItem;

          return {
            ...currItem,
            completed: false,
          };
        }),
      };
    case TODO_ITEMS_MARK_COMPLETE:
      return {
        ...state,
        items: state.items.map((currItem, index) => {
          if(index !== action.itemIndex) return currItem;

          return {
            ...currItem,
            completed: true,
          };
        }),
      };
    default:
      return state;
  }
}
