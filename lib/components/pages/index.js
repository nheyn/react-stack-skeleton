'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Internal = exports.Home = exports.PageWrapper = undefined;

var _enhancePageWrapper = require('../../containers/enhancePageWrapper');

var _enhancePageWrapper2 = _interopRequireDefault(_enhancePageWrapper);

var _removeReactRouterProps = require('../../containers/removeReactRouterProps');

var _removeReactRouterProps2 = _interopRequireDefault(_removeReactRouterProps);

var _PageWrapper = require('./PageWrapper');

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Internal = require('./Internal');

var _Internal2 = _interopRequireDefault(_Internal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedPageWrapper = (0, _enhancePageWrapper2.default)(_PageWrapper2.default);

var EnhancedHome = (0, _removeReactRouterProps2.default)(_Home2.default);
var EnhancedInternal = (0, _removeReactRouterProps2.default)(_Internal2.default);

exports.PageWrapper = EnhancedPageWrapper;
exports.Home = EnhancedHome;
exports.Internal = EnhancedInternal;