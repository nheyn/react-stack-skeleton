import React from 'react';
import renderer from 'react-test-renderer';

import connectCompleteAll from '../connectCompleteAll';

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectCompleteAll('div');
  const component = renderer.create(
    <TestComponent {...mockProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the onClickCompleteAllItems to the given Component.', () => {
  const TestComponent = connectCompleteAll('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onClickCompleteAllItems).toBeDefined();
});
