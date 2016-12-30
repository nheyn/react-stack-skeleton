'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getItemIndexes;

var _todoItemsReducer = require('../reducers/todoItemsReducer');

function getItemIndexes(state) {
  if (!state[_todoItemsReducer.TODO_ITEMS_REDUCER]) throw new Error('Missing reducer: ' + _todoItemsReducer.TODO_ITEMS_REDUCER);
  var _state$TODO_ITEMS_RED = state[_todoItemsReducer.TODO_ITEMS_REDUCER],
      items = _state$TODO_ITEMS_RED.items,
      editingItemIndex = _state$TODO_ITEMS_RED.editingItemIndex;


  return {
    numberOfItems: items.length,
    editingItemIndex: editingItemIndex
  };
}