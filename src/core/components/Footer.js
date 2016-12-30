/* @flow */
import React from 'react';

type Props = {

};

/**
 * The footer for the site.
 */
export default function Footer({ ...otherProps }: Props): React.Element<*> {
  return (
    <footer className="info" {...otherProps}>
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://heyn.io">Nick Heyn</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  );
}
