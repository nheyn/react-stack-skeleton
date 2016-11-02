import React from 'react';
import renderer from 'react-test-renderer';

import Internal from '../../../src/components/pages/Internal';

test('The Internal component displays another internal page.', () => {
  const component = renderer.create(
    <Internal />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
