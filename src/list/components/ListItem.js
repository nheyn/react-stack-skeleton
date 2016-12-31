/* @flow */
import React from 'react';

type Props = {
  value: string,
  completed?: bool,
  editing?: bool,
  onChangeValue: (e: SyntheticInputEvent) => void,
  onClickSwitchStatus: (e: SyntheticInputEvent) => void,
  onClickDelete: (e: SyntheticEvent) => void,
};

/**
 * An item in the todo list.
 */
export default function ListItem(props: Props): React.Element<*> {
  const { value, completed, editing, onChangeValue, onClickSwitchStatus, onClickDelete, ...otherProps } = props;

  return (
    <li className={[completed? 'completed': null, editing? 'editing': null ].filter((str) => !!str).join(' ')}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onClickSwitchStatus} />
        <label>{value}</label>
        <button className="destroy" onClick={onClickDelete}></button>
      </div>
      <input className="edit" value={value} onChange={onChangeValue} />
    </li>
  );
}
