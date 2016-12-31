/* @flow */
import { TODO_ITEMS_ADD } from '../actions/addTodoItemAction';
import { NEW_ITEM_UPDATE } from '../actions/updateNewItemAction';

type State = string;

const initialState = '';

/**
 * The reducer that contains the value for the new item.
 */
export default function newItemReducer(state: State = initialState, action: Object): State {
  switch (action.type) {
    case NEW_ITEM_UPDATE:
      return action.value;
    case TODO_ITEMS_ADD:
      //TODO, rest when item is being added
      return initialState;
    default:
      return state;
  }
}
