'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setItemAsActiveAction;


/**
 * Set the status of the given item as complete.
 */
var TODO_ITEMS_MARK_ACTIVE = exports.TODO_ITEMS_MARK_ACTIVE = 'TODO_ITEMS_MARK_ACTIVE';
function setItemAsActiveAction(itemIndex) {
  return {
    type: TODO_ITEMS_MARK_ACTIVE,
    itemIndex: itemIndex
  };
}