import setItemAsCompletedAction, { TODO_ITEMS_MARK_COMPLETE } from '../setItemAsCompletedAction';

test('it creates an action with the exported type.', () => {
  const createdAction = setItemAsCompletedAction('new value');

  expect(createdAction.type).toBe(TODO_ITEMS_MARK_COMPLETE);
});

test('it creates an action with the given index as the itemIndex.', () => {
  const testIndex = 1;
  const createdAction = setItemAsCompletedAction(testIndex);

  expect(createdAction.itemIndex).toBe(testIndex);
});
