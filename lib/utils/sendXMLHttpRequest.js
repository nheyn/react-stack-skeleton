'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendXMLHttpRequest;
function sendXMLHttpRequest(method, url, data) {
  return new Promise(function (resolve, reject) {
    // Create Request
    var request = new XMLHttpRequest();

    // Handle Response
    request.onreadystatechange = function () {
      if (request.readyState !== 4) return;

      // Parse Response
      var responseJson = null;

      try {
        responseJson = JSON.parse(request.responseText);
      } catch (e) {}

      if (!responseJson) {
        reject(new Error('Invalid Json Format'));
        return;
      }

      // Handle errors
      var _responseJson = responseJson;
      var emailSent = _responseJson.emailSent;
      var error = _responseJson.error;

      if (!emailSent || error || request.status !== 200) {
        var name = error.name;
        var message = error.message;


        reject(new Error('Http request error(' + request.status + '): [' + name + '] ' + message));
        return;
      }

      // Return Response in Promise
      resolve(responseJson);
    };

    // Send Request as json
    request.open(method, url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(data));
  });
}