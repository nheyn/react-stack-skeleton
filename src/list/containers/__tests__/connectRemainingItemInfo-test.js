import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import connectRemainingItemsInfo from '../connectRemainingItemsInfo';
import { TODO_ITEMS_REDUCER } from '../../reducers/todoItemsReducer';

function newMockStore(todoItemsState: Object = {}): * {
  const mockStore = configureMockStore([]);
  const defaultState = { items: [ ] };

  return mockStore({ [TODO_ITEMS_REDUCER]: { ...defaultState, ...todoItemsState } });
}

it('passes all the props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent {...mockProps} store={newMockStore()} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('adds the number of activeItemsLeft to the given Component.', () => {
  const testActiveItems = [ {}, {}, {} ];
  const testItems = [ { completed: true }, ...testActiveItems, { completed: true }, { completed: true } ];
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent store={newMockStore({ items: testItems })} />
  );
  const { props } = component.toJSON();

  expect(props.activeItemsLeft).toEqual(testActiveItems.length);
});

it('adds the onClickClearCompleted function to the given Component.', () => {
  const TestComponent = connectRemainingItemsInfo('div');
  const component = renderer.create(
    <TestComponent store={newMockStore()} />
  );
  const { props } = component.toJSON();

  //TODO, make sure correct actions are dispatched
  expect(props.onClickClearCompleted).toBeDefined();
});
