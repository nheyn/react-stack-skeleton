import getItemByIndex from '../getItemByIndex';

test('it gets the item, using the given index, from the state', () => {
  const items = [ { value: 'test 0' }, { value: 'test 1' }, { value: 'test 2' } ];
  for(let i=0; i<items.length; i++) {
    const selectedState = getItemByIndex({ items }, i);

    expect(selectedState).toEqual(items[i]);
  }
});

test('it throws an error if the given index is not in the state', () => {
  const items = [ { value: 'test 0' }, { value: 'test 1' }, { value: 'test 2' } ];
  const selectState = () => getItemByIndex({ items }, 5);

  expect(selectState).toThrowErrorMatchingSnapshot();
});
