/* @flow */
import React from 'react';

type Props = {

};

/**
 * A page that display the todo list.
 */
export default function ListPage({ ...otherProps }: Props): React.Element<*> {
  return (
    <section {...otherProps}>
      NYI: TODO List
    </section>
  );
}
