import todoItemsReducer from '../todoItemsReducer';

import addTodoItemAction from '../../actions/addTodoItemAction';
import setItemAsActiveAction from '../../actions/setItemAsActiveAction';
import setItemAsCompletedAction from '../../actions/setItemAsCompletedAction';

test('it initial state has no items.', () => {
  const initialState = todoItemsReducer(undefined, {});

  expect(initialState.items).toEqual([]);
});

test('it initial state has no item selected to be edited.', () => {
  const initialState = todoItemsReducer(undefined, {});

  expect(initialState.editingItemIndex).toEqual(null);
});

test('it can add a non-completed items with the given value to the end of items list.', () => {
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

it('it can mark the item at the given index as active(not completed).', () => {
  const currItems = [ { completed: true }, { completed: true }, { completed: true } ];
  const updateIndex = 1;
  const { items: updatedItems } = todoItemsReducer({ items: currItems }, setItemAsActiveAction(updateIndex));

  for(let i=0; i<updatedItems.length; i++) {
    const updatedItem = updatedItems[i];

    if(i === updateIndex) expect(updatedItem.completed).toBe(false);
    else                  expect(updatedItem.completed).toBe(true);
  }
});

it('it can mark the item at the given index as completed.', () => {
  const currItems = [ { completed: false }, { completed: false }, { completed: false } ];
  const updateIndex = 1;
  const { items: updatedItems } = todoItemsReducer({ items: currItems }, setItemAsCompletedAction(updateIndex));

  for(let i=0; i<updatedItems.length; i++) {
    const updatedItem = updatedItems[i];

    if(i === updateIndex) expect(updatedItem.completed).toBe(true);
    else                  expect(updatedItem.completed).toBe(false);
  }
});
