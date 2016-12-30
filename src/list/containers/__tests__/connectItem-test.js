import React from 'react';
import renderer from 'react-test-renderer';

import connectItem from '../connectItem';

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent {...mockProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the item\'s value/label and wether or not the items is completed the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.label).toBeDefined();
  expect(props.value).toBeDefined();
  expect(props.completed).toBeDefined();
});

it('adds the onChange input function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onChangeValue).toBeDefined();
});

it('adds the swap status function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onSwitchStatus).toBeDefined();
});


it('removes the item id prop from the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent itemId={3} />
  );
  const { props } = component.toJSON();

  expect(props.itemId).toBeUndefined();
});
