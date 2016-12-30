/* @flow */
import React from 'react';

type Props = {
  newItemValue: string,
  onChangeNewItem: (e: SyntheticEvent) => void,
};

/**
 * The footer for the todo list.
 */
export default function ListHeader({ newItemValue, onChangeNewItem, ...otherProps }: *): React.Element<*> {
  return (
   <header className="header" {...otherProps}>
     <h1>todos</h1>
     <input
       className="new-todo"
       placeholder="What needs to be done?"
       value={newItemValue}
       onChange={onChangeNewItem}
       autoFocus
     />
   </header>
  );
}
