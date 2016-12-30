'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todoItemsReducer = require('./todoItemsReducer');

var _todoItemsReducer2 = _interopRequireDefault(_todoItemsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _todoItemsReducer.TODO_ITEMS_REDUCER, _todoItemsReducer2.default);