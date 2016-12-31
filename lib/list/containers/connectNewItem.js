'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _newItemReducer = require('../reducers/newItemReducer');

var _newItemReducer2 = _interopRequireDefault(_newItemReducer);

var _addTodoItemAction = require('../actions/addTodoItemAction');

var _addTodoItemAction2 = _interopRequireDefault(_addTodoItemAction);

var _updateNewItemAction = require('../actions/updateNewItemAction');

var _updateNewItemAction2 = _interopRequireDefault(_updateNewItemAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(function () {
  return {};
}), (0, _recompose.withReducer)('newItemValue', 'dispatchNewItemReducer', _newItemReducer2.default, (0, _newItemReducer2.default)(undefined, {})), (0, _recompose.mapProps)(function (_ref) {
  var dispatch = _ref.dispatch,
      newItemValue = _ref.newItemValue,
      dispatchNewItemReducer = _ref.dispatchNewItemReducer,
      otherProps = _objectWithoutProperties(_ref, ['dispatch', 'newItemValue', 'dispatchNewItemReducer']);

  return _extends({
    newItemValue: newItemValue,
    onChangeNewItem: function onChangeNewItem(e) {
      var value = e.target.value;


      dispatchNewItemReducer((0, _updateNewItemAction2.default)(value));
    },
    onCreateNewItem: function onCreateNewItem(e) {
      var addItemAction = (0, _addTodoItemAction2.default)(newItemValue);

      dispatch(addItemAction);
      dispatchNewItemReducer(addItemAction);
    }
  }, otherProps);
}));