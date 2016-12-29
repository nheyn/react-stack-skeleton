import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

test('it displays the "NYI" message.', () => {
  const component = renderer.create(
    <Footer />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
