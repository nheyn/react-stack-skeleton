'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TODO_ITEMS_REDUCER = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = todoItemsReducer;

var _addTodoItemAction = require('../actions/addTodoItemAction');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  editingItemIndex: null,
  items: []
};

/**
 * A reducer that keeps track of the current todo list items
 */
var TODO_ITEMS_REDUCER = exports.TODO_ITEMS_REDUCER = 'TODO_ITEMS_REDUCER';
function todoItemsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _addTodoItemAction.TODO_ITEMS_ADD:
      var newItem = {
        value: action.value,
        completed: false
      };

      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), [newItem])
      });
    default:
      return state;
  }
}