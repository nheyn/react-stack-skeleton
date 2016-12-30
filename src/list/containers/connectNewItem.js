/* @flow */
import { mapProps } from 'recompose';

export default mapProps((props) => ({
  ...props,
  newItemValue: '',
  onChangeNewItem() {
    //TODO,
    console.log('NYI: change new item value');
  },
}));
