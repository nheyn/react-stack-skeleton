'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParseResponsiveObject = exports.useScreenSize = exports.withResponsiveSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _parseResponsiveObject2 = require('../utils/parseResponsiveObject');

var _parseResponsiveObject3 = _interopRequireDefault(_parseResponsiveObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var responsizeContextType = {
  screenSize: _react2.default.PropTypes.oneOf(_parseResponsiveObject2.sizes)
};

var withResponsiveSize = exports.withResponsiveSize = (0, _recompose.compose)((0, _recompose.withState)('screenSize', 'setScreenSize', function (_ref) {
  var getScreenSize = _ref.getScreenSize;

  return getScreenSize();
}), (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (!window) return;
    window.onresize = function () {
      var _props = _this.props;
      var setScreenSize = _props.setScreenSize;
      var getScreenSize = _props.getScreenSize;

      var screenSize = getScreenSize();

      setScreenSize(screenSize);
    };
  }
}), (0, _recompose.withContext)(responsizeContextType, function (_ref2) {
  var screenSize = _ref2.screenSize;

  return { screenSize: screenSize };
}), (0, _recompose.mapProps)(function (_ref3) {
  var setScreenSize = _ref3.setScreenSize;
  var screenSize = _ref3.screenSize;

  var otherProps = _objectWithoutProperties(_ref3, ['setScreenSize', 'screenSize']);

  return otherProps;
}));

var useScreenSize = exports.useScreenSize = (0, _recompose.getContext)(responsizeContextType);

var useParseResponsiveObject = exports.useParseResponsiveObject = (0, _recompose.compose)(useScreenSize, (0, _recompose.mapProps)(function (_ref4) {
  var screenSize = _ref4.screenSize;

  var otherProps = _objectWithoutProperties(_ref4, ['screenSize']);

  return _extends({
    parseResponsiveObject: function parseResponsiveObject(obj) {
      return (0, _parseResponsiveObject3.default)(screenSize, obj);
    }
  }, otherProps);
}));