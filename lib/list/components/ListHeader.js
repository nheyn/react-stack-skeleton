"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListHeader;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ENTER_KEY = 13;

/**
 * The footer for the todo list.
 */
function ListHeader(props) {
  var newItemValue = props.newItemValue,
      onChangeNewItem = props.onChangeNewItem,
      onCreateNewItem = props.onCreateNewItem,
      otherProps = _objectWithoutProperties(props, ["newItemValue", "onChangeNewItem", "onCreateNewItem"]);

  return _react2.default.createElement(
    "header",
    _extends({ className: "header" }, otherProps),
    _react2.default.createElement(
      "h1",
      null,
      "todos"
    ),
    _react2.default.createElement("input", {
      className: "new-todo",
      placeholder: "What needs to be done?",
      value: newItemValue,
      onChange: onChangeNewItem,
      onKeyDown: function onKeyDown(e) {
        return e.keyCode === ENTER_KEY ? onCreateNewItem(e) : undefined;
      },
      autoFocus: true
    })
  );
}