/* @flow */
import React from 'react';
import { Link } from 'react-router';

import { ListBody, ListFooter, ListHeader, ListItem } from '../../list';

type Props = {
  indexes: Array<number>,
  editingItemIndex: number,
};

/**
 * A page that display the todo list.
 */
export default function ListPage({ indexes, editingItemIndex, ...otherProps }: Props): React.Element<*> {
  return (
    <section className="todoapp">
      <ListHeader />
      <ListBody>
        <ListItem itemId={0} />
        <ListItem itemId={1} />
        <ListItem itemId={2} />
      </ListBody>
      <ListFooter />
    </section>
  );
}
