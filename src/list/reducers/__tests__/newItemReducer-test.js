import newItemReducer from '../newItemReducer';

import addTodoItemAction from '../../actions/addTodoItemAction';
import updateNewItemAction from '../../actions/updateNewItemAction';

test('it initial state is an empty string', () => {
  const initialState = newItemReducer(undefined, {});

  expect(initialState).toEqual('');
});

test('it update the state when the updateNewItemAction is used', () => {
  const newState = 'updated state'
  const updatedState = newItemReducer('initial state', updateNewItemAction(newState));

  expect(updatedState).toEqual(newState);
});

test('it resets the state when the addTodoItemAction) is used', () => {
  const updatedState = newItemReducer('initial state', addTodoItemAction());

  expect(updatedState).toEqual('');
});
