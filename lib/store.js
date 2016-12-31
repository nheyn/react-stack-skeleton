'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _list = require('./list');

/**
 * The store that contains the state for the entire site.
 */
exports.default = (0, _redux.createStore)((0, _redux.combineReducers)(_extends({}, _list.reducers)));