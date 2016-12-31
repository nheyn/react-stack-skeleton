'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getItemIndexes;
function getItemIndexes(state, filter) {
  var items = state.items,
      editingItemIndex = state.editingItemIndex;


  return {
    indexes: items.map(function (_, index) {
      return index;
    }).filter(function (index) {
      if (filter === 'completed') return items[index].completed ? true : false;
      if (filter === 'active') return items[index].completed ? false : true;

      return true;
    }),
    editingItemIndex: editingItemIndex
  };
}