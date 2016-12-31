'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getItemIndexes;
function getItemIndexes(state) {
  var items = state.items,
      editingItemIndex = state.editingItemIndex;


  return {
    indexes: items.map(function (_, index) {
      return index;
    }),
    editingItemIndex: editingItemIndex
  };
}