"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListBody;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The wrapper of the todo list. The children must be <li />s.
 */
function ListBody(_ref) {
  var onClickCompleteAllItems = _ref.onClickCompleteAllItems,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["onClickCompleteAllItems", "children"]);

  return _react2.default.createElement(
    "section",
    { className: "main" },
    _react2.default.createElement("input", { className: "toggle-all", type: "checkbox", onChange: onClickCompleteAllItems }),
    _react2.default.createElement(
      "label",
      { htmlFor: "toggle-all" },
      "Mark all as complete"
    ),
    _react2.default.createElement(
      "ul",
      { className: "todo-list" },
      children
    )
  );
}