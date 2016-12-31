'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNumberOfActiveItems;
function getNumberOfActiveItems(state) {
  var items = state.items;

  var activeItems = items.filter(function (item) {
    return item.completed ? false : true;
  });

  return activeItems.length;
}