/* @flow */
import { compose } from 'recompose';

import PageWrapper from './components/PageWrapper';
import ListPage from './components/ListPage';

import { connectTodoListIndexes } from '../list';
import removeReactRouterProps from './containers/removeReactRouterProps';

const EnhancedPageWrapper = removeReactRouterProps(PageWrapper);

const enhanceListPage = compose(connectTodoListIndexes, removeReactRouterProps);
const EnhancedListPage = enhanceListPage(ListPage);

export {
  EnhancedPageWrapper as PageWrapper,
  EnhancedListPage as ListPage,
};
