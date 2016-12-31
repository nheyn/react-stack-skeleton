import getItemIndexes from '../getItemIndexes';

test('it gets the indexes from the state.', () => {
  const items = [ {}, {}, {} ];
  const selectedState = getItemIndexes({ items });

  expect(selectedState.indexes).toEqual(items.map((_, i) => i));
});

test('it can get the indexes of just the active items from the state.', () => {
  const activeIndexes = [ 0, 2 ];
  let items = [ { completed: true }, { completed: true }, { completed: true }, { completed: true } ];
  for(let i=0; i<activeIndexes.length; i++) items[activeIndexes[i]].completed = false;

  const { indexes } = getItemIndexes({ items }, 'active');

  for(let i=0; i<activeIndexes.length; i++) {
    expect(indexes).toContain(activeIndexes[i]);
  }
});

test('it can get the indexes of just the completed items from the state.', () => {
  const completedIndexes = [ 0, 2 ];
  let items = [ { completed: false }, { completed: false }, { completed: false }, { completed: false } ];
  for(let i=0; i<completedIndexes.length; i++) items[completedIndexes[i]].completed = true;

  const { indexes } = getItemIndexes({ items }, 'completed');

  for(let i=0; i<completedIndexes.length; i++) {
    expect(indexes).toContain(completedIndexes[i]);
  }
});

test('it gets editingItemIndex from the state.', () => {
  const editingItemIndex = 3;
  const selectedState = getItemIndexes({ items: [], editingItemIndex });

  expect(selectedState.editingItemIndex).toEqual(editingItemIndex);
});
