'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncDispatcher = require('async-dispatcher');

var _navigation = require('./stores/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Create dispatcher with all stores ---
/*--------------------------------------------------------------------------------------------------------------------*/
exports.default = (0, _asyncDispatcher.createDispatcher)({
  navigation: _navigation2.default
});