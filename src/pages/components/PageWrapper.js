/* @flow */
import React from 'react';

import { Header } from '../../core';

type Props = {
  children?: any,
};

/**
 * A wrapper for ever page on the site.
 */
export default function PageWrapper({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <Header />
      {children}
      <footer>NYI: Footer</footer>
    </div>
  );
}
