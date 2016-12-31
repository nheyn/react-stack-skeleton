import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import connectNewItem from '../connectNewItem';

function newMockStore(todoItemsState: Object = {}): * {
  const mockStore = configureMockStore([]);
  const defaultState = { };

  return mockStore({ ...defaultState, ...todoItemsState  });
}
jest.mock('../../reducers/newItemReducer');

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent {...mockProps} />
    </Provider>
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the value of new item input to the given Component.', () => {
  const mockNewItemValue = 'Test new item value';
  const { default: mockReducer } = require('../../reducers/newItemReducer');
  mockReducer.mockReset();
  mockReducer.mockReturnValue(mockNewItemValue);

  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.newItemValue).toEqual(mockNewItemValue);
});

it('adds the onChangeNewItem input function to the given Component.', () => {
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  //TODO, check if the reducer's dispach is called
  expect(props.onChangeNewItem).toBeDefined();
});

it('adds the onCreateNewItem input function to the given Component.', () => {
  const TestComponent = connectNewItem('div');
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  //TODO, check if the redux store's dispach is called
  expect(props.onCreateNewItem).toBeDefined();
});
