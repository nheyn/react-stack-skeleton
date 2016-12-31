/* @flow */
import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import { Footer } from '../../core';

type Props = {
  children?: any,
};

/**
 * A wrapper for ever page on the site.
 */
export default function PageWrapper({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <Provider store={store} {...otherProps}>
      <div>
        {children}
        <Footer />
      </div>
    </Provider>
  );
}
