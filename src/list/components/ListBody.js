/* @flow */
import React from 'react';

type Props = {
  onClickCompleteAllItems: (e: SyntheticInputEvent) => void,
  children?: any,
};

/**
 * The wrapper of the todo list. The children must be <li />s.
 */
export default function ListBody({ onClickCompleteAllItems, children, ...otherProps}: *): React.Element<*> {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange={onClickCompleteAllItems} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {children}
      </ul>
    </section>
  );
}
