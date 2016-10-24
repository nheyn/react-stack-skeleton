/* @flow */
import React from 'react';

import Header from '../styles/Header';
import Nav from '../styles/Nav';

import type { NavItem } from '../../stores/navigation';

type Props = {
  menuItems: Array<NavItem>,
  children?: any,
};

/**
 * The wrapper for ever page on the website.
 */
export default function PageWrapper({ menuItems, children, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <Header
        title="React Stack Skeleton"
        menu={<Nav items={menuItems} />}
      />
      <div>
        {children}
      </div>
    </div>
  );
}
