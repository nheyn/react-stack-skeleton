import React from 'react';
import renderer from 'react-test-renderer';

import ListHeader from '../ListHeader';

test('it displays the given value for the new item.', () => {
  const component = renderer.create(
    <ListHeader newItemValue="Test Value" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it calls the onChangeNewItem function if the item is changed.', () => {
  const onChangeFn = jest.fn();
  const component = renderer.create(
    <ListHeader onChangeNewItem={onChangeFn} />
  );
  const tree = component.toJSON();
  const newItemInput = tree.children[1];

  newItemInput.props.onChange();
  expect(onChangeFn).toHaveBeenCalledTimes(1);
});

test('it calls the onCreateNewItem function if the enter key is clicked.', () => {
  const onKeyDownFn = jest.fn();
  const component = renderer.create(
    <ListHeader onCreateNewItem={onKeyDownFn} />
  );
  const tree = component.toJSON();
  const newItemInput = tree.children[1];

  newItemInput.props.onKeyDown({ keyCode: 1 }); // not Enter key
  newItemInput.props.onKeyDown({ keyCode: 2 }); // not Enter key
  newItemInput.props.onKeyDown({ keyCode: 13 }); // Enter key
  newItemInput.props.onKeyDown({ keyCode: 4 }); // not Enter key
  newItemInput.props.onKeyDown({ keyCode: 13 }); // Enter key
  expect(onKeyDownFn).toHaveBeenCalledTimes(2);
});
