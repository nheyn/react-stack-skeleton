import getItemIndexes from '../getItemIndexes';

test('it gets the indexes from the state', () => {
  const items = [ {}, {}, {} ];
  const selectedState = getItemIndexes({ items });

  expect(selectedState.indexes).toEqual(items.map((_, i) => i));
});

test('it gets editingItemIndex from the state', () => {
  const editingItemIndex = 3;
  const selectedState = getItemIndexes({ items: [], editingItemIndex });

  expect(selectedState.editingItemIndex).toEqual(editingItemIndex);
});
