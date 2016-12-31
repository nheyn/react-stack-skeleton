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
function ListFooter(props) {
  var activeItemsLeft = props.activeItemsLeft,
      filter = props.filter,
      onClickClearCompleted = props.onClickClearCompleted,
      otherProps = _objectWithoutProperties(props, ['activeItemsLeft', 'filter', 'onClickClearCompleted']);

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
          { className: undefined /*filter? undefined: 'selected'*/, to: '/' },
          'All'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { className: undefined /*filter === 'active'? 'selected': undefined*/, to: '/active' },
          'Active'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { className: undefined /*filter === 'completed'? 'selected': undefined*/, to: '/completed' },
          'Completed'
        )
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'clear-completed', onClick: onClickClearCompleted },
      'Clear completed'
    )
  );
}