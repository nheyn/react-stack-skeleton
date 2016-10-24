/* @flow */
export const sizes = ['xs', 'sm', 'md', 'lg'];

/**
 * Get the available value (in the object) for the given screen size.
 *
 * NOTE:    It first checks if the current window size is available,
 *          If not it get the next smaller size,
 *          If no smaller sizes, then it gets the smallest size in the obj
 */
export default function parseResponsiveObject<T>(windowSize: string, obj: {[keys: string]: T}): T {
  if(!isResponsiveObj(obj)) throw new Error('Invalid response object');

  const responsiveSize = getResponsiveSize(
    windowSize,
    Object.keys(obj).filter((key) => sizes.indexOf(key) !== -1)
  );
  return obj[responsiveSize];
}

function isResponsiveObj(obj: any): boolean {
  if(typeof obj !== 'object') return false;

  return sizes.reduce((foundSize, currSize) => foundSize || typeof obj[currSize] !== 'undefined', false);
}

function getResponsiveSize(windowSize: string, options: Array<string>): string {
  // If current size exists
  const isDefined = (size) => options.indexOf(size) !== -1;
  if(isDefined(windowSize))         return windowSize;

  // Look for next smaller size
  const smallerSizes = getSmallerSizes(windowSize);
  for(let i=0; i<smallerSizes.length; i++) {
    if(isDefined(smallerSizes[i]))  return smallerSizes[i];
  }

  // Look for smallest size (will be bigger than window size at this point)
  for(let i=0;i<sizes.length; i++) {
    if(isDefined(sizes[i]))         return sizes[i];
  }

  throw new Error(`Invalid response size: ${windowSize}`);
}

function getSmallerSizes(size: string): Array<string> {
  switch(size) {
    case 'xs':  return [];
    case 'sm':  return ['xs'];
    case 'md':  return ['sm', 'xs'];
    case 'lg':  return ['md', 'sm', 'xs'];
    default:    throw new Error(`Invalid response size: ${size}`);
  }
}