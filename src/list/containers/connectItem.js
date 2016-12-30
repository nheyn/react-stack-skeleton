/* @flow */
import { mapProps } from 'recompose';

export default mapProps(({ itemId, ...otherProps }) => ({
  ...otherProps,
  label: `Test label ${itemId}`,
  value: `Test value ${itemId}`,
  completed: itemId === 2,
  onChangeValue() {
    //TODO
    console.log(`NYI: update test value ${itemId}`);
  },
  onSwitchStatus() {
    //TODO
    console.log(`NYI: switch status of ${itemId}`);
  },
}));
