'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTodoItemAction;


/**
 * Add a new todo list item to the list.
 */
var TODO_ITEMS_ADD = exports.TODO_ITEMS_ADD = 'TODO_ITEMS_ADD';
function addTodoItemAction(newItemValue) {
  return {
    type: TODO_ITEMS_ADD,
    value: newItemValue
  };
}