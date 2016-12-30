import React from 'react';
import renderer from 'react-test-renderer';

import ListBody from '../ListBody';

test('it displays the children in the list.', () => {
  const component = renderer.create(
    <ListBody>
      <li>Test Item 0</li>
      <li>Test Item 1</li>
      <li>Test Item 2</li>
    </ListBody>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it calls the onChangeNewItem function if the item is changed.', () => {
  const onClickFn = jest.fn();
  const component = renderer.create(
    <ListBody onClickCompleteAllItems={onClickFn} />
  );
  const tree = component.toJSON();
  const selectAllInput = tree.children[0];

  selectAllInput.props.onChange();
  expect(onClickFn).toHaveBeenCalledTimes(1);
});
