/* @flow */
import { createStore, combineReducers } from 'redux';

import { reducers as listReducers } from './list';

/**
 * The store that contains the state for the entire site.
 */
export default createStore(combineReducers({
  ...listReducers,
}));
