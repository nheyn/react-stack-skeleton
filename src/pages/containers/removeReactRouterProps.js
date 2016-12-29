/* @flow */
import { mapProps } from 'recompose';


/**
 * Remove props added by react-router.
 */
export default mapProps(({ location, params, route, router, routeParams, routes, getScreenSize, ...otherProps }) => {
  return otherProps;
});
