/* @flow */
import React from 'react';

type Props = {
  children?: any,
};

/**
 * A wrapper for ever page on the site.
 */
export default function PageWrapper({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <header>NYI: Header</header>
      {children}
      <footer>NYI: Footer</footer>
    </div>
  );
}
