/* @flow */
import React from 'react';
import { Footer } from '../../core';

type Props = {
  children?: any,
};

/**
 * A wrapper for ever page on the site.
 */
export default function PageWrapper({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      {children}
      <Footer />
    </div>
  );
}
