'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _A = require('./A');

var _A2 = _interopRequireDefault(_A);

var _responsiveEnhancements = require('../../containers/responsiveEnhancements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The nav bar for the website.
 */
function Nav(_ref) {
  var screenSize = _ref.screenSize;
  var items = _ref.items;

  var otherProps = _objectWithoutProperties(_ref, ['screenSize', 'items']);

  var styles = (0, _reactcss2.default)({
    'default': {
      ul: {
        listStyleType: 'none'
      },
      li: {
        float: 'left',
        width: 100,
        marginLeft: 25
      }
    },
    'screenSize-xs': {
      li: {
        float: 'initial',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%'
      }
    }
  }, { screenSize: screenSize });

  return _react2.default.createElement(
    'nav',
    otherProps,
    _react2.default.createElement(
      'ul',
      { style: styles.ul },
      items.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { style: styles.li, key: index },
          _react2.default.createElement(_A2.default, item)
        );
      })
    )
  );
}
exports.default = (0, _responsiveEnhancements.useScreenSize)(Nav);