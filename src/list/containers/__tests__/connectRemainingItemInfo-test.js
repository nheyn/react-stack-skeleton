import React from 'react';
import renderer from 'react-test-renderer';

import connectRemainingItemsInfo from '../connectRemainingItemsInfo';

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent {...mockProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the number of activeItemsLeft to the given Component.', () => {
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.activeItemsLeft).toBeDefined();
});

it('adds the onClickClearCompleted function to the given Component.', () => {
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onClickClearCompleted).toBeDefined();
});
