/* @flow */
import React from 'react';
import { compose, getContext, lifecycle, mapProps, withContext, withState } from 'recompose';

import parseResponsiveObject, { sizes } from '../utils/parseResponsiveObject';

const responsizeContextType = {
  screenSize: React.PropTypes.oneOf(sizes),
};

export const withResponsiveSize = compose(
  withState('screenSize', 'setScreenSize', ({ getScreenSize }) => {
    return getScreenSize();
  }),
  lifecycle({
    componentDidMount() {
      if(!window) return;
      window.onresize = () => {
        const { setScreenSize, getScreenSize } = this.props;
        const screenSize = getScreenSize();

        setScreenSize(screenSize);
      };
    },
  }),
  withContext(
    responsizeContextType,
    ({ screenSize }) => {
      return { screenSize };
    },
  ),
  mapProps(({ setScreenSize, screenSize, ...otherProps }) => otherProps),
);

export const useScreenSize = getContext(responsizeContextType);

export const useParseResponsiveObject = compose(
  useScreenSize,
  mapProps(({ screenSize, ...otherProps }) => {
    return {
      parseResponsiveObject<T>(obj: {[key: string]: T}): T {
        return parseResponsiveObject(screenSize, obj);
      },
      ...otherProps,
    };
  }),
);