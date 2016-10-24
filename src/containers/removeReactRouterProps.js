/* @flow */
import { mapProps } from 'recompose';

/**
 * Remove all react router props.
 */
export default mapProps(
  ({ getScreenSize, history, location, params, route, routeParams, routes, ...otherProps }) => otherProps
);