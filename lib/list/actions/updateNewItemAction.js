'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateNewItemAction;


/**
 * Creates an action that updates the value for the new item.
 */
var NEW_ITEM_UPDATE = exports.NEW_ITEM_UPDATE = 'NEW_ITEM_UPDATE';
function updateNewItemAction(newItemValue) {
  return {
    type: NEW_ITEM_UPDATE,
    value: newItemValue
  };
}