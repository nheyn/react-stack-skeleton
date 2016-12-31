/* @flow */
import React from 'react';
import { Link } from 'react-router';

type Props = {
  activeItemsLeft: number,
  filter?: 'active' | 'completed',
  onClickClearCompleted: (e: SyntheticInputEvent) => void,
};

/**
 * The footer for the todo list.
 */
export default function ListFooter(props: Props): React.Element<*> {
  const { activeItemsLeft, filter, onClickClearCompleted, ...otherProps } = props;

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{activeItemsLeft}</strong> item left</span>
      <ul className="filters">
        <li>
          <Link className={undefined/*filter? undefined: 'selected'*/} to="/">All</Link>
        </li>
        <li>
          <Link className={undefined/*filter === 'active'? 'selected': undefined*/} to="/active">Active</Link>
        </li>
        <li>
          <Link className={undefined/*filter === 'completed'? 'selected': undefined*/} to="/completed">Completed</Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={onClickClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
