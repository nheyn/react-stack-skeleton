import updateNewItemAction, { NEW_ITEM_UPDATE } from '../updateNewItemAction';

test('it creates an action with the exported type.', () => {
  const createdAction = updateNewItemAction('updated value');

  expect(createdAction.type).toBe(NEW_ITEM_UPDATE);
});

test('it creates an action with the given string as the value.', () => {
  const updateValue = 'updatedValue';
  const createdAction = updateNewItemAction(updateValue);

  expect(createdAction.value).toBe(updateValue);
});
