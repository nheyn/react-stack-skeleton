'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = A;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The nav bar for the website.
 */
function A(_ref) {
  var to = _ref.to;
  var href = _ref.href;
  var label = _ref.label;

  var otherProps = _objectWithoutProperties(_ref, ['to', 'href', 'label']);

  if (to) return _react2.default.createElement(
    _reactRouter.Link,
    { to: to },
    label
  );
  if (href) return _react2.default.createElement(
    'a',
    { href: href },
    label
  );

  throw new Error('The "to" or "href" prop must be set for <A />');
}