/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getItemIndexes } from '../selectors';

function createConnectTodoListIndexes(filter?: 'active' | 'completed'): Function {
  return compose(
    connect((state) => getItemIndexes(state, filter)),
    mapProps(({ dispatch, ...otherProps }) => otherProps),
  );
}

export default createConnectTodoListIndexes();
export const connectActiveTodoListIndexes = createConnectTodoListIndexes('active');
export const connectCompletedTodoListIndexes = createConnectTodoListIndexes('completed');
