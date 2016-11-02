import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../../src/components/styles/Header';

jest.mock('../../../src/containers/responsiveEnhancements', () => ({
  useScreenSize: jest.fn((C) => (props) => <C screenSize="lg" {...props} />),
}));

test('The Header component displays the given title.', () => {
  const component = renderer.create(
    <Header title="Test Title" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('The Header component displays the given menu component.', () => {
  const component = renderer.create(
    <Header
      menu={<div>Test Menu</div>}
    />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
