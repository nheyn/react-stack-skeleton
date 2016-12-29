'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Remove props added by react-router.
 */
exports.default = (0, _recompose.mapProps)(function (_ref) {
  var location = _ref.location,
      params = _ref.params,
      route = _ref.route,
      router = _ref.router,
      routeParams = _ref.routeParams,
      routes = _ref.routes,
      getScreenSize = _ref.getScreenSize,
      otherProps = _objectWithoutProperties(_ref, ['location', 'params', 'route', 'router', 'routeParams', 'routes', 'getScreenSize']);

  return otherProps;
});