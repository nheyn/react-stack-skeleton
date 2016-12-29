import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

test('it displays the "NYI" message.', () => {
  const component = renderer.create(
    <Header />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
