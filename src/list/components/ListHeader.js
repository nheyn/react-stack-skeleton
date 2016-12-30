/* @flow */
import React from 'react';

type Props = {
  newItemValue: string,
  onChangeNewItem: (e: SyntheticInputEvent) => void,
  onCreateNewItem: (e: SyntheticInputEvent) => void,
};

const ENTER_KEY = 13;

/**
 * The footer for the todo list.
 */
export default function ListHeader(props: Props): React.Element<*> {
  const { newItemValue, onChangeNewItem, onCreateNewItem, ...otherProps } = props;

  return (
   <header className="header" {...otherProps}>
     <h1>todos</h1>
     <input
       className="new-todo"
       placeholder="What needs to be done?"
       value={newItemValue}
       onChange={onChangeNewItem}
       onKeyDown={(e) => e.keyCode === ENTER_KEY? onCreateNewItem(e): undefined}
       autoFocus
     />
   </header>
  );
}
