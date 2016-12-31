'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemIndexes = exports.getItemByIndex = undefined;

var _selectFrom = require('../../utils/selectFrom');

var _selectFrom2 = _interopRequireDefault(_selectFrom);

var _todoItemsReducer = require('../reducers/todoItemsReducer');

var _getItemByIndex = require('./getItemByIndex');

var _getItemByIndex2 = _interopRequireDefault(_getItemByIndex);

var _getItemIndexes = require('./getItemIndexes');

var _getItemIndexes2 = _interopRequireDefault(_getItemIndexes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemByIndexFromTodoList = (0, _selectFrom2.default)(_todoItemsReducer.TODO_ITEMS_REDUCER, _getItemByIndex2.default);
var getItemIndexesFromTodoList = (0, _selectFrom2.default)(_todoItemsReducer.TODO_ITEMS_REDUCER, _getItemIndexes2.default);

exports.getItemByIndex = getItemByIndexFromTodoList;
exports.getItemIndexes = getItemIndexesFromTodoList;