/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getItemIndexes } from '../selectors';

export default compose(
  connect((state) => getItemIndexes(state)),
  mapProps(({ dispatch, ...otherProps }) => otherProps),
);
