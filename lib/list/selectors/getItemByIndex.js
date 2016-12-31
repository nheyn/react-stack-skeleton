'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getItemByIndex;
function getItemByIndex(state, index) {
  var items = state.items;


  for (var i = 0; i < items.length; i++) {
    if (i === index) return items[i];
  }

  throw new Error('Invalid todo list index: ' + index);
}