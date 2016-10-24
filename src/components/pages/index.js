/* @flow */
import enhancePageWrapper from '../../containers/enhancePageWrapper';
import removeReactRouterProps from '../../containers/removeReactRouterProps';

import PageWrapper from './PageWrapper';
import Home from './Home';
import Internal from './Internal';

const EnhancedPageWrapper = enhancePageWrapper(PageWrapper);
const EnhancedHome = removeReactRouterProps(Home);
const EnhancedInternal = removeReactRouterProps(Internal);

export {
  EnhancedPageWrapper as PageWrapper,
  EnhancedHome as Home,
  EnhancedInternal as Internal,
};
