'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressDevice = require('express-device');

var _expressDevice2 = _interopRequireDefault(_expressDevice);

var _expressReactRouter = require('express-react-router');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Create server ---
/*--------------------------------------------------------------------------------------------------------------------*/
var app = (0, _express2.default)();
app.use(_expressDevice2.default.capture());
app.use((0, _expressReactRouter.handleReactRouter)(_router2.default, function (_ref) {
  var req = _ref.req,
      reactHtml = _ref.reactHtml,
      error = _ref.error,
      otherProps = _objectWithoutProperties(_ref, ['req', 'reactHtml', 'error']);

  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'React Stack Skeleton'
      ),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'icon/x-icon', href: '/favicon.ico' }),
      _react2.default.createElement('link', { rel: 'shortcut icon', type: 'icon/x-icon', href: '/favicon.ico' })
    ),
    _react2.default.createElement(
      'body',
      { onLoad: error ? function () {
          return alert(error);
        } : undefined },
      _react2.default.createElement('div', { id: 'react-content', dangerouslySetInnerHTML: { __html: reactHtml } }),
      _react2.default.createElement('script', { src: '/app.js' })
    )
  );
}, function (req) {
  return {
    getScreenSize: function getScreenSize() {
      switch (req.device.type) {
        case 'phone':
          return 'xs';
        case 'tablet':
          return 'md';
        case 'desktop':
          return 'lg';
        case 'tv':
          return 'lg';
        default:
          return 'lg';
      }
    }
  };
}));

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Start server ---
/*--------------------------------------------------------------------------------------------------------------------*/
var port = process.env.PORT ? parseInt(process.env.PORT) : 80;

app.listen(port);
console.log('listening on port ' + port);