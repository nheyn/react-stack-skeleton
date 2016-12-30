/* @flow */
import { mapProps } from 'recompose';

export default mapProps(({ itemIndex, ...otherProps }) => ({
  ...otherProps,
  value: `Test value ${itemIndex}`,
  completed: itemIndex === 2,
  onChangeValue() {
    //TODO
    console.log(`NYI: update test value ${itemIndex}`);
  },
  onClickSwitchStatus() {
    //TODO
    console.log(`NYI: switch status of ${itemIndex}`);
  },
  onClickDelete() {
    //TODO
    console.log(`NYI: delete item ${itemIndex}`);
  },
}));
