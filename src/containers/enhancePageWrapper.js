/* @flow */
import { compose, mapProps } from 'recompose';
import { useDispatcher } from 'react-async-dispatcher';

import siteDispatcher from '../dispatcher';
import { withResponsiveSize } from './responsiveEnhancements';
import removeReactRouterProps from './removeReactRouterProps';

export default compose(
  useDispatcher(siteDispatcher),
  withResponsiveSize,
  mapProps(({ dispatcher, ...otherProps }) => {
    const { menuItems } = dispatcher.getStateFor('navigation');

    return {
      menuItems,
      ...otherProps,
    };
  }),
  removeReactRouterProps,
);