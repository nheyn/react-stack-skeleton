import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ListPage from '../ListPage';
import { TODO_ITEMS_REDUCER } from '../../../list/reducers/todoItemsReducer';

function newMockStore(todoItemsState: Object = {}): * {
  const mockStore = configureMockStore([]);
  const defaultState = { items: [{ value: 'Test 0' }, { value: 'Test 1' }, { value: 'Test 2' }] };

  return mockStore({ [TODO_ITEMS_REDUCER]: { ...defaultState, ...todoItemsState } });
}

test.skip('it displays the items given by the indexes array.', () => {
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <ListPage indexes={[ 0, 1, 2 ]} />
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test.skip('it displays the item with the editingItemIndex as editing.', () => {
  const component = renderer.create(
    <Provider store={newMockStore()}>
      <ListPage indexes={[ 0, 1, 2 ]} editingItemIndex={1} />
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
