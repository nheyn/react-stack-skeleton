'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = parseResponsiveObject;
var sizes = exports.sizes = ['xs', 'sm', 'md', 'lg'];

/**
 * Get the available value (in the object) for the given screen size.
 *
 * NOTE:    It first checks if the current window size is available,
 *          If not it get the next smaller size,
 *          If no smaller sizes, then it gets the smallest size in the obj
 */
function parseResponsiveObject(windowSize, obj) {
  if (!isResponsiveObj(obj)) throw new Error('Invalid response object');

  var responsiveSize = getResponsiveSize(windowSize, Object.keys(obj).filter(function (key) {
    return sizes.indexOf(key) !== -1;
  }));
  return obj[responsiveSize];
}

function isResponsiveObj(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;

  return sizes.reduce(function (foundSize, currSize) {
    return foundSize || typeof obj[currSize] !== 'undefined';
  }, false);
}

function getResponsiveSize(windowSize, options) {
  // If current size exists
  var isDefined = function isDefined(size) {
    return options.indexOf(size) !== -1;
  };
  if (isDefined(windowSize)) return windowSize;

  // Look for next smaller size
  var smallerSizes = getSmallerSizes(windowSize);
  for (var i = 0; i < smallerSizes.length; i++) {
    if (isDefined(smallerSizes[i])) return smallerSizes[i];
  }

  // Look for smallest size (will be bigger than window size at this point)
  for (var _i = 0; _i < sizes.length; _i++) {
    if (isDefined(sizes[_i])) return sizes[_i];
  }

  throw new Error('Invalid response size: ' + windowSize);
}

function getSmallerSizes(size) {
  switch (size) {
    case 'xs':
      return [];
    case 'sm':
      return ['xs'];
    case 'md':
      return ['sm', 'xs'];
    case 'lg':
      return ['md', 'sm', 'xs'];
    default:
      throw new Error('Invalid response size: ' + size);
  }
}