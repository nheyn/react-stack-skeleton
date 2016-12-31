import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import connectItem from '../connectItem';
import { TODO_ITEMS_REDUCER } from '../../reducers/todoItemsReducer';

function newMockStore(todoItemsState: Object = {}): * {
  const mockStore = configureMockStore([]);
  const defaultState = { items: [ { value: 'Test 0' } ] };

  return mockStore({ [TODO_ITEMS_REDUCER]: { ...defaultState, ...todoItemsState } });
}

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent itemIndex={0} {...mockProps} />
    </Provider>
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('removes the item id prop from the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent itemIndex={0} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.itemIndex).toBeUndefined();
});

it('adds the value and the completed prop to the given Component.', () => {
  const currValue = 'test value';
  const currCompleted = true;
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore({ items: [ { value: currValue, completed: currCompleted } ] })}>
      <TestComponent itemIndex={0} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.value).toEqual(currValue);
  expect(props.completed).toEqual(currCompleted);
});

it('adds the onChange input function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent itemIndex={0} />
    </Provider>
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onChangeValue).toBeDefined();
});

it('adds the swap status function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent itemIndex={0} />
    </Provider>
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onClickSwitchStatus).toBeDefined();
});

it('adds the delete item function to the given Component.', () => {
  const TestComponent = connectItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent itemIndex={0} />
    </Provider>
  );
  const { props } = component.toJSON();

  //TODO, check if dispstach is called with the correct action
  expect(props.onClickDelete).toBeDefined();
});
