'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../styles/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../styles/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The wrapper for ever page on the website.
 */
function PageWrapper(_ref) {
  var menuItems = _ref.menuItems;
  var children = _ref.children;

  var otherProps = _objectWithoutProperties(_ref, ['menuItems', 'children']);

  return _react2.default.createElement(
    'div',
    otherProps,
    _react2.default.createElement(_Header2.default, {
      title: 'React Stack Skeleton',
      menu: _react2.default.createElement(_Nav2.default, { items: menuItems })
    }),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
}