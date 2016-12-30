import getItemIndexes from '../getItemIndexes';

test('it gets the indexes in the TODO_ITEMS_REDUCER', () => {
  const items = [ {}, {}, {} ];
  const selectedState = getItemIndexes({ items });

  expect(selectedState.indexes).toEqual(items.map((_, i) => i));
});

test('it gets editingItemIndex in the TODO_ITEMS_REDUCER', () => {
  const editingItemIndex = 3;
  const selectedState = getItemIndexes({ items: [], editingItemIndex });

  expect(selectedState.editingItemIndex).toEqual(editingItemIndex);
});
