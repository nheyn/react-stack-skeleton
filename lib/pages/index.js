'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompletedListPage = exports.ActiveListPage = exports.ListPage = exports.PageWrapper = undefined;

var _recompose = require('recompose');

var _PageWrapper = require('./components/PageWrapper');

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _ListPage = require('./components/ListPage');

var _ListPage2 = _interopRequireDefault(_ListPage);

var _list = require('../list');

var _removeReactRouterProps = require('./containers/removeReactRouterProps');

var _removeReactRouterProps2 = _interopRequireDefault(_removeReactRouterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedPageWrapper = (0, _removeReactRouterProps2.default)(_PageWrapper2.default);


var enhanceListPage = (0, _recompose.compose)(_list.connectTodoListIndexes, _removeReactRouterProps2.default);
var EnhancedListPage = enhanceListPage(_ListPage2.default);

var enhanceActiveListPage = (0, _recompose.compose)(_list.connectActiveTodoListIndexes, _removeReactRouterProps2.default);
var EnhancedActiveListPage = enhanceActiveListPage(_ListPage2.default);

var enhanceCompletedListPage = (0, _recompose.compose)(_list.connectCompletedTodoListIndexes, _removeReactRouterProps2.default);
var EnhancedCompletedListPage = enhanceCompletedListPage(_ListPage2.default);

exports.PageWrapper = EnhancedPageWrapper;
exports.ListPage = EnhancedListPage;
exports.ActiveListPage = EnhancedActiveListPage;
exports.CompletedListPage = EnhancedCompletedListPage;