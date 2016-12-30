/* @flow */
import { mapProps } from 'recompose';

export default mapProps((props) => ({
  ...props,
  activeItemsLeft: 2,
  onClickClearCompleted() {
    //TODO
    console.log('NYI, clear completed items');
  },
}));
