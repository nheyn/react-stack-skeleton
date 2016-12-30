'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = require('recompose');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.mapProps)(function (_ref) {
  var itemIndex = _ref.itemIndex,
      otherProps = _objectWithoutProperties(_ref, ['itemIndex']);

  return _extends({}, otherProps, {
    value: 'Test value ' + itemIndex,
    completed: itemIndex === 2,
    onChangeValue: function onChangeValue() {
      //TODO
      console.log('NYI: update test value ' + itemIndex);
    },
    onClickSwitchStatus: function onClickSwitchStatus() {
      //TODO
      console.log('NYI: switch status of ' + itemIndex);
    },
    onClickDelete: function onClickDelete() {
      //TODO
      console.log('NYI: delete item ' + itemIndex);
    }
  });
});