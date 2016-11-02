import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../../src/components/pages/Home';

test('The Home component displays the home page.', () => {
  const component = renderer.create(
    <Home />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
