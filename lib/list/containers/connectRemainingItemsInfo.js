'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _selectors = require('../selectors');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
  return {
    activeItemsLeft: (0, _selectors.getNumberOfActiveItems)(state)
  };
}), (0, _recompose.mapProps)(function (_ref) {
  var dispatch = _ref.dispatch,
      otherProps = _objectWithoutProperties(_ref, ['dispatch']);

  return _extends({}, otherProps, {
    onClickClearCompleted: function onClickClearCompleted() {
      //TODO
      console.log('NYI, clear completed items');
    }
  });
}));