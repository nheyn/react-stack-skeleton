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
    _react2.default.createElement(_list.ListHeader, null),
    _react2.default.createElement(
      _list.ListBody,
      null,
      _react2.default.createElement(_list.ListItem, { itemId: 0 }),
      _react2.default.createElement(_list.ListItem, { itemId: 1 }),
      _react2.default.createElement(_list.ListItem, { itemId: 2 })
    ),
    _react2.default.createElement(_list.ListFooter, null)
  );
}