"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * An item in the todo list.
 */
function ListItem(props) {
  var label = props.label,
      value = props.value,
      completed = props.completed,
      onChangeValue = props.onChangeValue,
      onSwitchStatus = props.onSwitchStatus,
      otherProps = _objectWithoutProperties(props, ["label", "value", "completed", "onChangeValue", "onSwitchStatus"]);

  return _react2.default.createElement(
    "li",
    { className: completed ? "completed" : undefined },
    _react2.default.createElement(
      "div",
      { className: "view" },
      _react2.default.createElement("input", { className: "toggle", type: "checkbox", checked: completed, onChange: onSwitchStatus }),
      _react2.default.createElement(
        "label",
        null,
        label
      ),
      _react2.default.createElement("button", { className: "destroy" })
    ),
    _react2.default.createElement("input", { className: "edit", value: value, onChange: onChangeValue })
  );
}