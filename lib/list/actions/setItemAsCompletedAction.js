'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setItemAsCompletedAction;


/**
 * Set the status of the given item as complete.
 */
var TODO_ITEMS_MARK_COMPLETE = exports.TODO_ITEMS_MARK_COMPLETE = 'TODO_ITEMS_MARK_COMPLETE';
function setItemAsCompletedAction(itemIndex) {
  return {
    type: TODO_ITEMS_MARK_COMPLETE,
    itemIndex: itemIndex
  };
}