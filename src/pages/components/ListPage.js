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
  const hasTodos = indexes.length > 0;

  return (
    <section className="todoapp">
      <ListHeader />
    {hasTodos?
      <ListBody>
      {indexes.map((itemIndex) =>
        <ListItem itemIndex={itemIndex} editing={editingItemIndex === itemIndex} key={itemIndex} />
      )}
      </ListBody>:
      null
    }
    {hasTodos?
      <ListFooter />:
      null
    }
    </section>
  );
}
