/* @flow */
import React from 'react';
import { Link } from 'react-router';

import type { NavItem } from '../../stores/navigation';

type Props = NavItem;

/**
 * The nav bar for the website.
 */
export default function A({ to, href, label, ...otherProps }: Props): React.Element<*> {
  if(to)    return <Link to={to}>{label}</Link>;
  if(href)  return <a href={href}>{label}</a>;

  throw new Error('The "to" or "href" prop must be set for <A />');
}
