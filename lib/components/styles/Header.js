'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _responsiveEnhancements = require('../../containers/responsiveEnhancements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The header for the website.
 */
function Header(_ref) {
  var screenSize = _ref.screenSize,
      title = _ref.title,
      menu = _ref.menu,
      otherProps = _objectWithoutProperties(_ref, ['screenSize', 'title', 'menu']);

  var styles = (0, _reactcss2.default)({
    'default': {
      header: {
        width: '100%',
        height: 150,
        backgroundColor: "black"
      },
      title: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white'
      },
      menu: {
        position: 'absolute',
        top: 10,
        right: 10
      }
    },
    'screenSize-xs': {
      header: {
        height: 100
      },
      title: {
        top: 5
      },
      menu: {
        top: 5
      }
    }
  }, { screenSize: screenSize });

  return _react2.default.createElement(
    'header',
    _extends({ style: styles.header }, otherProps),
    _react2.default.createElement(
      'h1',
      { style: styles.title },
      title
    ),
    _react2.default.createElement(
      'div',
      { style: styles.menu },
      menu
    )
  );
}
exports.default = (0, _responsiveEnhancements.useScreenSize)(Header);