'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _client = require('express-react-router/client');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Render to Client ---
/*--------------------------------------------------------------------------------------------------------------------*/
window.React = _react2.default;

window.onload = function () {
  (0, _client.render)(_router2.default, window.document.getElementById('react-content'), function () {
    return {
      getScreenSize: function getScreenSize() {
        if (window.innerWidth >= 1200) return 'lg';else if (window.innerWidth >= 950) return 'md';else if (window.innerWidth >= 750) return 'sm';else return 'xs';
      }
    };
  });
};