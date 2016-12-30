/* @flow */
import { compose, mapProps, withReducer } from 'recompose';

import newItemReducer from '../reducers/newItemReducer';
import updateNewItemAction from '../actions/updateNewItemAction';

export default compose(
  withReducer('newItemValue', 'dispatchNewItemReducer', newItemReducer, newItemReducer(undefined, {})),
  mapProps(({ dispatchNewItemReducer, ...otherProps }) => ({
    ...otherProps,
    onChangeNewItem(e: SyntheticInputEvent) {
      const { value } = e.target;

      dispatchNewItemReducer(updateNewItemAction(value));
    },
  })),
);
