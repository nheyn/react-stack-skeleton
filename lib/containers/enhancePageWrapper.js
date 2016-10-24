'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = require('recompose');

var _reactAsyncDispatcher = require('react-async-dispatcher');

var _dispatcher = require('../dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _responsiveEnhancements = require('./responsiveEnhancements');

var _removeReactRouterProps = require('./removeReactRouterProps');

var _removeReactRouterProps2 = _interopRequireDefault(_removeReactRouterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.compose)((0, _reactAsyncDispatcher.useDispatcher)(_dispatcher2.default), _responsiveEnhancements.withResponsiveSize, (0, _recompose.mapProps)(function (_ref) {
  var dispatcher = _ref.dispatcher;

  var otherProps = _objectWithoutProperties(_ref, ['dispatcher']);

  var _dispatcher$getStateF = dispatcher.getStateFor('navigation');

  var menuItems = _dispatcher$getStateF.menuItems;


  return _extends({
    menuItems: menuItems
  }, otherProps);
}), _removeReactRouterProps2.default);