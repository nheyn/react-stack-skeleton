'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newItemReducer;

var _updateNewItemAction = require('../actions/updateNewItemAction');

var initialState = '';

/**
 * The reducer that contains the value for the new item.
 */

function newItemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _updateNewItemAction.NEW_ITEM_UPDATE:
      return action.value;
    default:
      return state;
  }
}