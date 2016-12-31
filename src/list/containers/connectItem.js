/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import setItemAsActiveAction from '../actions/setItemAsActiveAction';
import setItemAsCompletedAction from '../actions/setItemAsCompletedAction';
import { getItemByIndex } from '../selectors';

export default compose(
  connect((state) => ({ state })),
  mapProps(({ itemIndex, state, dispatch, ...otherProps }) => {
    const currItem = getItemByIndex(state, itemIndex);
    return {
      ...currItem,
      onChangeValue() {
        //TODO
        console.log(`NYI: update test value ${itemIndex}`);
      },
      onClickSwitchStatus() {
        if(currItem.completed)  dispatch(setItemAsActiveAction(itemIndex));
        else                    dispatch(setItemAsCompletedAction(itemIndex));
      },
      onClickDelete() {
        //TODO
        console.log(`NYI: delete item ${itemIndex}`);
      },
      ...otherProps,
    };
  }),
);
