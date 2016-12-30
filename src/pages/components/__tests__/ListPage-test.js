import React from 'react';
import renderer from 'react-test-renderer';

import ListPage from '../ListPage';

test('it displays the items given by the indexes array.', () => {
  const component = renderer.create(
    <ListPage indexes={[ 0, 1, 2 ]} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the item with the editingItemIndex as editing.', () => {
  const component = renderer.create(
    <ListPage indexes={[ 0, 1, 2 ]} editingItemIndex={1} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
