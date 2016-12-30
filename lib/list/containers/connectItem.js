'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = require('recompose');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.mapProps)(function (_ref) {
  var itemId = _ref.itemId,
      otherProps = _objectWithoutProperties(_ref, ['itemId']);

  return _extends({}, otherProps, {
    label: 'Test label ' + itemId,
    value: 'Test value ' + itemId,
    completed: itemId === 2,
    onChangeValue: function onChangeValue() {
      //TODO
      console.log('NYI: update test value ' + itemId);
    },
    onSwitchStatus: function onSwitchStatus() {
      //TODO
      console.log('NYI: switch status of ' + itemId);
    }
  });
});