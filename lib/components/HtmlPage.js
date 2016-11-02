'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the html for a full page.
 */
function HtmlPage(_ref) {
  var req = _ref.req,
      reactHtml = _ref.reactHtml;

  var bodyStyle = {
    margin: 0,
    fontFamily: 'verdana, geneva, sans-serif'
  };

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
      _react2.default.createElement('link', { rel: 'shortcut icon', type: 'icon/x-icon', href: '/favicon.ico' }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
      })
    ),
    _react2.default.createElement(
      'body',
      { style: bodyStyle },
      _react2.default.createElement('div', { id: 'react-content', dangerouslySetInnerHTML: { __html: reactHtml } }),
      _react2.default.createElement('script', { src: '/app.js' })
    )
  );
}