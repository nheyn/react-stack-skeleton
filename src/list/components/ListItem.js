/* @flow */
import React from 'react';

type Props = {
  label: string,
  value: string,
  completed?: bool,
  onChangeValue: (e: SyntheticEvent) => void,
  onSwitchStatus: (e: SyntheticEvent) => void,
};

/**
 * An item in the todo list.
 */
export default function ListItem(props: Props): React.Element<*> {
  const { label, value, completed, onChangeValue, onSwitchStatus, ...otherProps } = props;

  return (
    <li className={completed? "completed": undefined}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onSwitchStatus} />
        <label>{label}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={value} onChange={onChangeValue} />
    </li>
  );
}
