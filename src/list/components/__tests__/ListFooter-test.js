import React from 'react';
import renderer from 'react-test-renderer';

import ListFooter from '../ListFooter';

test('it displays the given number of remaining items.', () => {
  const component = renderer.create(
    <ListFooter activeItemsLeft={3} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays "all" link as selected when not filter is given.', () => {
  const component = renderer.create(
    <ListFooter />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays "active" link as selected when the filter is set to "active" given.', () => {
  const component = renderer.create(
    <ListFooter filter="active" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays "completed" link as selected when the filter is set to "completed" given.', () => {
  const component = renderer.create(
    <ListFooter filter="completed" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it calls the onClickClearCompleted function if the item is changed.', () => {
  const onClickFn = jest.fn();
  const component = renderer.create(
    <ListFooter onClickClearCompleted={onClickFn} />
  );
  const tree = component.toJSON();
  const clearButton = tree.children[2];

  clearButton.props.onClick();
  expect(onClickFn).toHaveBeenCalledTimes(1);
});
