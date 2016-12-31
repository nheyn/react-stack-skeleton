import getNumberOfActiveItems from '../getNumberOfActiveItems';

test('it gets the number of active items from the state', () => {
  const activeItems = [ { }, { } ]
  const items = [ { completed: true }, ...activeItems, { completed: true }, { completed: true } ];
  const selectedState = getNumberOfActiveItems({ items });

  expect(selectedState).toEqual(activeItems.length);
});
