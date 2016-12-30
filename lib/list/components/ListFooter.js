'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListFooter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The footer for the todo list.
 */
function ListFooter(_ref) {
  var activeItemsLeft = _ref.activeItemsLeft,
      filter = _ref.filter,
      onClickClear = _ref.onClickClear,
      otherProps = _objectWithoutProperties(_ref, ['activeItemsLeft', 'filter', 'onClickClear']);

  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'span',
      { className: 'todo-count' },
      _react2.default.createElement(
        'strong',
        null,
        activeItemsLeft
      ),
      ' item left'
    ),
    _react2.default.createElement(
      'ul',
      { className: 'filters' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { className: filter ? undefined : 'selected', href: '/' },
          'All'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { className: filter === 'active' ? 'selected' : undefined, href: '/active' },
          'Active'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { className: filter === 'completed' ? 'selected' : undefined, href: '/completed' },
          'Completed'
        )
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'clear-completed', onClick: onClickClear },
      'Clear completed'
    )
  );
}