/* @flow */
import React from 'react';
import { Link } from 'react-router';

type Props = {
  activeItemsLeft: number,
  filter?: 'active' | 'completed',
  onClickClear: (e: SyntheticEvent) => void,
};

/**
 * The footer for the todo list.
 */
export default function ListFooter({ activeItemsLeft, filter, onClickClear, ...otherProps }: Props): React.Element<*> {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{activeItemsLeft}</strong> item left</span>
      <ul className="filters">
        <li>
          <Link className={filter? undefined: 'selected'} href="/">All</Link>
        </li>
        <li>
          <Link className={filter === 'active'? 'selected': undefined} href="/active">Active</Link>
        </li>
        <li>
          <Link className={filter === 'completed'? 'selected': undefined} href="/completed">Completed</Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={onClickClear}>
        Clear completed
      </button>
    </footer>
  );
}
