'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PageWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A wrapper for ever page on the site.
 */
function PageWrapper(_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _reactRedux.Provider,
    _extends({ store: _store2.default }, otherProps),
    _react2.default.createElement(
      'div',
      null,
      children,
      _react2.default.createElement(_core.Footer, null)
    )
  );
}