'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

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
    _react2.default.createElement(ListHeader, null),
    _react2.default.createElement(ListBody, { items: [] }),
    _react2.default.createElement(ListFooter, { itemsLeft: 0 })
  );
}

function ListHeader(_ref2) {
  var otherProps = _objectWithoutProperties(_ref2, []);

  return _react2.default.createElement(
    'header',
    _extends({ className: 'header' }, otherProps),
    _react2.default.createElement(
      'h1',
      null,
      'todos'
    ),
    _react2.default.createElement('input', {
      className: 'new-todo',
      placeholder: 'What needs to be done?',
      value: "",
      onChange: function onChange() {
        return undefined;
      },
      autoFocus: true
    })
  );
}

function ListBody(_ref3) {
  var items = _ref3.items,
      otherProps = _objectWithoutProperties(_ref3, ['items']);

  return _react2.default.createElement(
    'section',
    { className: 'main' },
    _react2.default.createElement('input', { className: 'toggle-all', type: 'checkbox' }),
    _react2.default.createElement(
      'label',
      { htmlFor: 'toggle-all' },
      'Mark all as complete'
    ),
    _react2.default.createElement(
      'ul',
      { className: 'todo-list' },
      items.map(function (item, index) {
        return _react2.default.createElement(ListItem, _extends({}, item, { key: index }));
      })
    )
  );
}

function ListItem(_ref4) {
  var label = _ref4.label,
      value = _ref4.value,
      completed = _ref4.completed,
      otherProps = _objectWithoutProperties(_ref4, ['label', 'value', 'completed']);

  return _react2.default.createElement(
    'li',
    { className: completed ? "completed" : undefined },
    _react2.default.createElement(
      'div',
      { className: 'view' },
      _react2.default.createElement('input', { className: 'toggle', type: 'checkbox', checked: completed, onChange: function onChange() {
          return undefined;
        } }),
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement('button', { className: 'destroy' })
    ),
    _react2.default.createElement('input', { className: 'edit', value: value, onChange: function onChange() {
        return undefined;
      } })
  );
}

function ListFooter(_ref5) {
  var itemsLeft = _ref5.itemsLeft,
      filter = _ref5.filter,
      otherProps = _objectWithoutProperties(_ref5, ['itemsLeft', 'filter']);

  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'span',
      { className: 'todo-count' },
      _react2.default.createElement(
        'strong',
        null,
        itemsLeft
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
      { className: 'clear-completed' },
      'Clear completed'
    )
  );
}