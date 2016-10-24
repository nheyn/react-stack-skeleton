'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressDevice = require('express-device');

var _expressDevice2 = _interopRequireDefault(_expressDevice);

var _expressReactRouter = require('express-react-router');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _HtmlPage = require('./components/HtmlPage');

var _HtmlPage2 = _interopRequireDefault(_HtmlPage);

var _handleError = require('./services/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Create server ---
/*--------------------------------------------------------------------------------------------------------------------*/
var app = (0, _express2.default)();
app.use(_expressDevice2.default.capture());
app.use((0, _expressReactRouter.handleReactRouter)(_router2.default, _HtmlPage2.default, function (req) {
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
app.use(_handleError2.default);

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Start server ---
/*--------------------------------------------------------------------------------------------------------------------*/
var port = process.env.PORT ? parseInt(process.env.PORT) : 80;

app.listen(port);
console.log('listening on port ' + port);