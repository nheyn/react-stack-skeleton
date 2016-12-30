import React from 'react';
import renderer from 'react-test-renderer';

import PageWrapper from '../PageWrapper';

test('it displays footer bellow then children', () => {
  const component = renderer.create(
    <PageWrapper>
      Test Page Content
    </PageWrapper>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
