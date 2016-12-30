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

it('removes the item id prop from the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent itemIndex={3} />
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.itemIndex).toBeUndefined();
});

it('adds the value and wether or not the items is completed or editing the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if the correct values are pulled from the store
  expect(props.value).toBeDefined();
  expect(props.completed).toBeDefined();
});

it('adds the onChange input function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onChangeValue).toBeDefined();
});

it('adds the swap status function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onClickSwitchStatus).toBeDefined();
});

it('adds the delete item function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onClickDelete).toBeDefined();
});
