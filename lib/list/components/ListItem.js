'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * An item in the todo list.
 */
function ListItem(props) {
  var value = props.value,
      completed = props.completed,
      editing = props.editing,
      onChangeValue = props.onChangeValue,
      onClickSwitchStatus = props.onClickSwitchStatus,
      onClickDelete = props.onClickDelete,
      otherProps = _objectWithoutProperties(props, ['value', 'completed', 'editing', 'onChangeValue', 'onClickSwitchStatus', 'onClickDelete']);

  return _react2.default.createElement(
    'li',
    { className: [completed ? 'completed' : null, editing ? 'editing' : null].filter(function (str) {
        return !!str;
      }).join(' ') },
    _react2.default.createElement(
      'div',
      { className: 'view' },
      _react2.default.createElement('input', { className: 'toggle', type: 'checkbox', checked: completed, onChange: onClickSwitchStatus }),
      _react2.default.createElement(
        'label',
        null,
        value
      ),
      _react2.default.createElement('button', { className: 'destroy', onClick: onClickDelete })
    ),
    _react2.default.createElement('input', { className: 'edit', value: value, onChange: onChangeValue })
  );
}