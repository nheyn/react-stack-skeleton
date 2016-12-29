import React from 'react';
import renderer from 'react-test-renderer';

import ListPage from '../ListPage';

test('it displays the "NYI" message.', () => {
  const component = renderer.create(
    <ListPage />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
