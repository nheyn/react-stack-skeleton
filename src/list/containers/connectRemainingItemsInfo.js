/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getNumberOfActiveItems } from '../selectors';

export default compose(
  connect((state) => ({
    activeItemsLeft: getNumberOfActiveItems(state),
  })),
  mapProps(({ dispatch, ...otherProps }) => ({
    ...otherProps,
    onClickClearCompleted() {
      //TODO
      console.log('NYI, clear completed items');
    },
  })),
);
