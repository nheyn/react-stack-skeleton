/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps, withReducer } from 'recompose';

import newItemReducer from '../reducers/newItemReducer';
import addTodoItemAction from '../actions/addTodoItemAction';
import updateNewItemAction from '../actions/updateNewItemAction';

export default compose(
  connect(() => ({})),
  withReducer('newItemValue', 'dispatchNewItemReducer', newItemReducer, newItemReducer(undefined, {})),
  mapProps(({ dispatch, newItemValue, dispatchNewItemReducer, ...otherProps }) => ({
    newItemValue,
    onChangeNewItem(e: SyntheticInputEvent) {
      const { value } = e.target;

      dispatchNewItemReducer(updateNewItemAction(value));
    },
    onCreateNewItem(e: SyntheticInputEvent) {
      const addItemAction = addTodoItemAction(newItemValue);

      dispatch(addItemAction);
      dispatchNewItemReducer(addItemAction);
    },
    ...otherProps,
  })),
);
