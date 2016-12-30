import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

test('it displays the given label and value for the item.', () => {
  const component = renderer.create(
    <ListItem label="Test Label" value="Test Value" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it shows the input as un-checked if the item is not completed.', () => {
  const component = renderer.create(
    <ListItem />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it shows the input as checked if the item is completed.', () => {
  const component = renderer.create(
    <ListItem completed />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it calls the onChangeValue function if the item is changed.', () => {
  const onChangeFn = jest.fn();
  const component = renderer.create(
    <ListItem onChangeValue={onChangeFn} />
  );
  const tree = component.toJSON();
  const itemValueInput = tree.children[1];

  itemValueInput.props.onChange();
  expect(onChangeFn).toHaveBeenCalledTimes(1);
});

test('it calls the onSwitchStatus function if the item\'s checksbox is clicked.', () => {
  const onSwitchFn = jest.fn();
  const component = renderer.create(
    <ListItem onSwitchStatus={onSwitchFn} />
  );
  const tree = component.toJSON();
  const itemCheckboxInput = tree.children[0].children[0];

  itemCheckboxInput.props.onChange();
  expect(onSwitchFn).toHaveBeenCalledTimes(1);
});
