/* @flow */
import React from 'react';

import { Header, Footer } from '../../core';

type Props = {
  children?: any,
};

/**
 * A wrapper for ever page on the site.
 */
export default function PageWrapper({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <section className="todoapp">
        <Header />
        {children}
      </section>
      <Footer />
    </div>
  );
}
