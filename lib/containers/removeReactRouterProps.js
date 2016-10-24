'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Remove all react router props.
 */
exports.default = (0, _recompose.mapProps)(function (_ref) {
  var getScreenSize = _ref.getScreenSize;
  var history = _ref.history;
  var location = _ref.location;
  var params = _ref.params;
  var route = _ref.route;
  var routeParams = _ref.routeParams;
  var routes = _ref.routes;

  var otherProps = _objectWithoutProperties(_ref, ['getScreenSize', 'history', 'location', 'params', 'route', 'routeParams', 'routes']);

  return otherProps;
});