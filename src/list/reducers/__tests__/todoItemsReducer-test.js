import todoItemsReducer from '../todoItemsReducer';

import addTodoItemAction from '../../actions/addTodoItemAction';

test('it initial state has no items.', () => {
  const initialState = todoItemsReducer(undefined, {});

  expect(initialState.items).toEqual([]);
});

test('it initial state has no item selected to be edited.', () => {
  const initialState = todoItemsReducer(undefined, {});

  expect(initialState.editingItemIndex).toEqual(null);
});

test('it adds a non-completed items with the given value to the end of items list.', () => {
  const currItems = [ {}, {} ];
  const newItemValue = 'new item value';
  const updatedState = todoItemsReducer({ items: currItems }, addTodoItemAction(newItemValue));

  const orginalNumberOfItems = currItems.length;
  expect(updatedState.items).toHaveLength(orginalNumberOfItems + 1);

  const newItem = updatedState.items[orginalNumberOfItems];
  expect(newItem).toBeDefined();
  expect(newItem.value).toEqual(newItemValue);
  expect(newItem.completed).toBe(false);
});
