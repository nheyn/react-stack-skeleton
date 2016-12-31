import setItemAsActiveAction, { TODO_ITEMS_MARK_ACTIVE } from '../setItemAsActiveAction';

test('it creates an action with the exported type.', () => {
  const createdAction = setItemAsActiveAction('new value');

  expect(createdAction.type).toBe(TODO_ITEMS_MARK_ACTIVE);
});

test('it creates an action with the given index as the itemIndex.', () => {
  const testIndex = 1;
  const createdAction = setItemAsActiveAction(testIndex);

  expect(createdAction.itemIndex).toBe(testIndex);
});
