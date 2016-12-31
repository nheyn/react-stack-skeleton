/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getItemByIndex } from '../selectors';

export default compose(
  connect((state) => ({ state })),
  mapProps(({ itemIndex, state, dispatch, ...otherProps }) => ({
    ...getItemByIndex(state, itemIndex),
    onChangeValue() {
      //TODO
      console.log(`NYI: update test value ${itemIndex}`);
    },
    onClickSwitchStatus() {
      //TODO
      console.log(`NYI: switch status of ${itemIndex}`);
    },
    onClickDelete() {
      //TODO
      console.log(`NYI: delete item ${itemIndex}`);
    },
    ...otherProps,
  })),
);
