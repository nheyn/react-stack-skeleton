import React from 'react';
import renderer from 'react-test-renderer';

import connectNewItem from '../connectNewItem';

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <TestComponent {...mockProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the value of new item input to the given Component.', () => {
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if items are correctly pulled from the reducer
  expect(props.newItemValue).toBeDefined();
});

it('adds the onChangeNewItem input function to the given Component.', () => {
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if the reducer's dispach is called
  expect(props.onChangeNewItem).toBeDefined();
});


it('adds the onCreateNewItem input function to the given Component.', () => {
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  //TODO, check if the redux store's dispach is called
  expect(props.onCreateNewItem).toBeDefined();
});
