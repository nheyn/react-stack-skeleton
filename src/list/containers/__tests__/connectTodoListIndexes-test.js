import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import connectTodoListIndexes from '../connectTodoListIndexes';
import { TODO_ITEMS_REDUCER } from '../../reducers/todoItemsReducer';

function newMockStore(todoItemsState: Object = {}): * {
  const mockStore = configureMockStore([]);
  const defaultState = { items: [] };

  return mockStore({ [TODO_ITEMS_REDUCER]: { ...defaultState, ...todoItemsState } });
}

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectTodoListIndexes('div');
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

it('adds the index to the given Component.', () => {
  const mockItems = [ {}, {}, {} ];
  const TestComponent = connectTodoListIndexes('div');
  const component = renderer.create(
    <Provider store={newMockStore({ items: mockItems })}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.indexes).toEqual(mockItems.map((_, i) => i));
});

it('adds the editingItemIndex to the given Component.', () => {
  const mockEditingItemIndex = 2;
  const TestComponent = connectTodoListIndexes('div');
  const component = renderer.create(
    <Provider store={newMockStore({ editingItemIndex: mockEditingItemIndex })}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.editingItemIndex).toEqual(mockEditingItemIndex);
});
