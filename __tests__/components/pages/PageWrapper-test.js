import React from 'react';
import renderer from 'react-test-renderer';

import PageWrapper from '../../../src/components/pages/PageWrapper';

test('The PageWrapper component displays the given navigation items.', () => {
  const component = renderer.create(
    <PageWrapper
      menuItems={[
        { label: 'Home', to: '/' },
        { label: 'Internal Link', to: '/internal' },
        { label: 'External Link', href: 'https://google.com' },
      ]}
    />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('The PageWrapper component displays the given children.', () => {
  const component = renderer.create(
    <PageWrapper menuItems={[]}>
      <div>Test child</div>
    </PageWrapper>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
