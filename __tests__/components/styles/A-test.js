import React from 'react';
import renderer from 'react-test-renderer';

import A from '../../../src/components/styles/A';


test('The A component displays the given label.', () => {
  const component = renderer.create(
    <A label="Test Link" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('The A component displays a normal anchore tag that goes to "#" when neither "href" nor "to" props is given.', () => {
  const component = renderer.create(
    <A />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('The A component displays a normal anchore tag when given a "href" prop.', () => {
  const component = renderer.create(
    <A href="https://google.com" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('The A component displays a react-router Link as the anchore tag when given a "to" prop.', () => {
  const component = renderer.create(
    <A to="/" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
