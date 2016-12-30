"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The footer for the site.
 */
function Footer(_ref) {
  var otherProps = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    "footer",
    _extends({ className: "info" }, otherProps),
    _react2.default.createElement(
      "p",
      null,
      "Double-click to edit a todo"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Created by ",
      _react2.default.createElement(
        "a",
        { href: "http://heyn.io" },
        "Nick Heyn"
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      "Part of ",
      _react2.default.createElement(
        "a",
        { href: "http://todomvc.com" },
        "TodoMVC"
      )
    )
  );
}