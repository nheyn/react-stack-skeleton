/* @flow */
import React from 'react';
import { Link } from 'react-router';

type Props = {

};

/**
 * A page that display the todo list.
 */
export default function ListPage({ ...otherProps }: Props): React.Element<*> {
  return (
    <section className="todoapp">
      <ListHeader />
      <ListBody items={[]} />
      <ListFooter itemsLeft={0} />
    </section>
  );
}

function ListHeader({ ...otherProps }: *): React.Element<*> {
  return (
    <header className="header" {...otherProps}>
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={""}
        onChange={() => undefined}
        autoFocus
      />
    </header>
  );
}


function ListBody({ items, ...otherProps}: *): React.Element<*> {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
      {items.map((item, index) =>
        <ListItem {...item} key={index} />
      )}
      </ul>
    </section>
  );
}

function ListItem({ label, value, completed, ...otherProps }: *): React.Element<*> {
  return (
    <li className={completed? "completed": undefined}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={() => undefined} />
        <label>{label}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={value} onChange={() => undefined} />
    </li>
  );
}

function ListFooter({ itemsLeft, filter, ...otherProps }: *): React.Element<*> {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{itemsLeft}</strong> item left</span>
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
