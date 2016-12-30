import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

test('it displays the given value in the label and input for the item.', () => {
  const component = renderer.create(
    <ListItem value="Test Value" />
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

test('it shows the items in editing mode if the item has editing prop set.', () => {
  const component = renderer.create(
    <ListItem editing />
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
    <ListItem onClickSwitchStatus={onSwitchFn} />
  );
  const tree = component.toJSON();
  const itemCheckboxInput = tree.children[0].children[0];

  itemCheckboxInput.props.onChange();
  expect(onSwitchFn).toHaveBeenCalledTimes(1);
});

test('it calls the onClickDelete function if the item is changed.', () => {
  const onClickFn = jest.fn();
  const component = renderer.create(
    <ListItem onClickDelete={onClickFn} />
  );
  const tree = component.toJSON();
  const distoryButton = tree.children[0].children[2];

  distoryButton.props.onClick();
  expect(onClickFn).toHaveBeenCalledTimes(1);
});
