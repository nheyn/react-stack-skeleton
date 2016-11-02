import React from 'react';
import renderer from 'react-test-renderer';

import Nav from '../../../src/components/styles/Nav';

jest.mock('../../../src/containers/responsiveEnhancements', () => ({
  useScreenSize: jest.fn((C) => (props) => <C screenSize="lg" {...props} />),
}));

test('The Nav component displays the given navigation items.', () => {
  const component = renderer.create(
    <Nav
      items={[
        { label: 'Home', to: '/' },
        { label: 'Internal Link', to: '/internal' },
        { label: 'External Link', href: 'https://google.com' },
      ]}
    />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
