'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('../../list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A page that display the todo list.
 */
function ListPage(_ref) {
  var otherProps = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'section',
    { className: 'todoapp' },
    _react2.default.createElement(_list.ListHeader, { newItemValue: '', onChangeNewItem: function onChangeNewItem() {
        return console.log('NYI: change new item value');
      } }),
    _react2.default.createElement(
      _list.ListBody,
      { onClickCompleteAllItems: function onClickCompleteAllItems() {
          return console.log('NYI: complete all items');
        } },
      _react2.default.createElement(_list.ListItem, {
        label: 'Test label 0',
        value: 'Test value 0',
        onChangeValue: function onChangeValue() {
          return console.log('NYI: update test value 0');
        },
        onSwitchStatus: function onSwitchStatus() {
          return console.log('NYI: switch test status 0');
        }
      }),
      _react2.default.createElement(_list.ListItem, {
        label: 'Test label 1',
        value: 'Test value 1',
        onChangeValue: function onChangeValue() {
          return console.log('NYI: update test value 1');
        },
        onSwitchStatus: function onSwitchStatus() {
          return console.log('NYI: switch test status 1');
        }
      }),
      _react2.default.createElement(_list.ListItem, {
        label: 'Test label 2',
        value: 'Test value 2',
        completed: true,
        onChangeValue: function onChangeValue() {
          return console.log('NYI: update test value 2');
        },
        onSwitchStatus: function onSwitchStatus() {
          return console.log('NYI: switch test status 2');
        }
      })
    ),
    _react2.default.createElement(_list.ListFooter, { activeItemsLeft: 2, onClickClear: function onClickClear() {
        return console.log('NYI: clear all items');
      } })
  );
}