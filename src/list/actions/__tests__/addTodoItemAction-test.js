import addTodoItemAction, { TODO_ITEMS_ADD } from '../addTodoItemAction';

test('it creates an action with the exported type.', () => {
  const createdAction = addTodoItemAction('new value');

  expect(createdAction.type).toBe(TODO_ITEMS_ADD);
});

test('it creates an action with the given string as the value.', () => {
  const newValue = 'new value';
  const createdAction = addTodoItemAction(newValue);

  expect(createdAction.value).toBe(newValue);
});
