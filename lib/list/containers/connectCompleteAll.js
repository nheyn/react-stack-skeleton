'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = require('recompose');

exports.default = (0, _recompose.mapProps)(function (props) {
  return _extends({}, props, {
    onClickCompleteAllItems: function onClickCompleteAllItems() {
      //TODO
      console.log('NYI, complet all items');
    }
  });
});