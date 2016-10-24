'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleError;

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _HtmlPage = require('../components/HtmlPage');

var _HtmlPage2 = _interopRequireDefault(_HtmlPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(err, req, res, next) {
  if (!err) {
    next(err);
    return;
  }

  // Handle error
  console.error('[Server Error]', err.stack);
  if (req.accepts('json')) {
    res.status(500).send({
      error: {
        name: err.name,
        message: err.message
      }
    });
  } else if (req.accepts('html')) {
    var reactHtml = _server2.default.renderToStaticMarkup(React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        'Error'
      ),
      React.createElement('hr', null),
      React.createElement(
        'label',
        null,
        err.name
      ),
      React.createElement(
        'span',
        null,
        err.message
      )
    ));

    res.status(500).send(_server2.default.renderToStaticMarkup(React.createElement(_HtmlPage2.default, { req: req, reactHtml: reactHtml })));
  } else {
    res.status(500).send('[' + err.name + ']: ' + err.message);
  }
}