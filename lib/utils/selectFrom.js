"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectFrom;


/**
 * Update a selecto get a state from a diven store.
 *
 * NOTE: The state (which is changed) must be the first arguement, other arguments will be preserved
 */
function selectFrom(storeName, selector) {
  return function (state) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!state[storeName]) throw new Error("Reducer[" + storeName + "] is not in the redux state");

    var currState = state[storeName];
    return selector.apply(undefined, [currState].concat(args));
  };
}