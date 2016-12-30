/* @flow */
import React from 'react';
import { Link } from 'react-router';

import { ListBody, ListFooter, ListHeader, ListItem } from '../../list';

type Props = {

};

/**
 * A page that display the todo list.
 */
export default function ListPage({ ...otherProps }: Props): React.Element<*> {
  return (
    <section className="todoapp">
      <ListHeader newItemValue="" onChangeNewItem={() => console.log('NYI: change new item value')} />
      <ListBody onClickCompleteAllItems={() => console.log('NYI: complete all items')}>
        <ListItem
          label="Test label 0"
          value="Test value 0"
          onChangeValue={() => console.log('NYI: update test value 0')}
          onSwitchStatus={() => console.log('NYI: switch test status 0')}
        />
        <ListItem
          label="Test label 1"
          value="Test value 1"
          onChangeValue={() => console.log('NYI: update test value 1')}
          onSwitchStatus={() => console.log('NYI: switch test status 1')}
        />
        <ListItem
          label="Test label 2"
          value="Test value 2"
          completed
          onChangeValue={() => console.log('NYI: update test value 2')}
          onSwitchStatus={() => console.log('NYI: switch test status 2')}
        />
      </ListBody>
      <ListFooter activeItemsLeft={2} onClickClear={() => console.log('NYI: clear all items')} />
    </section>
  );
}
