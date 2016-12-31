'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _setItemAsActiveAction = require('../actions/setItemAsActiveAction');

var _setItemAsActiveAction2 = _interopRequireDefault(_setItemAsActiveAction);

var _setItemAsCompletedAction = require('../actions/setItemAsCompletedAction');

var _setItemAsCompletedAction2 = _interopRequireDefault(_setItemAsCompletedAction);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
  return { state: state };
}), (0, _recompose.mapProps)(function (_ref) {
  var itemIndex = _ref.itemIndex,
      state = _ref.state,
      dispatch = _ref.dispatch,
      otherProps = _objectWithoutProperties(_ref, ['itemIndex', 'state', 'dispatch']);

  var currItem = (0, _selectors.getItemByIndex)(state, itemIndex);
  return _extends({}, currItem, {
    onChangeValue: function onChangeValue() {
      //TODO
      console.log('NYI: update test value ' + itemIndex);
    },
    onClickSwitchStatus: function onClickSwitchStatus() {
      if (currItem.completed) dispatch((0, _setItemAsActiveAction2.default)(itemIndex));else dispatch((0, _setItemAsCompletedAction2.default)(itemIndex));
    },
    onClickDelete: function onClickDelete() {
      //TODO
      console.log('NYI: delete item ' + itemIndex);
    }
  }, otherProps);
}));