/* @flow */
import PageWrapper from './components/PageWrapper';
import ListPage from './components/ListPage';

import removeReactRouterProps from './containers/removeReactRouterProps';

const EnhancedPageWrapper = removeReactRouterProps(PageWrapper);
const EnhancedListPage = removeReactRouterProps(ListPage);

export {
  EnhancedPageWrapper as PageWrapper,
  EnhancedListPage as ListPage,
};
