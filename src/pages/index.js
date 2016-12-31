/* @flow */
import { compose } from 'recompose';

import PageWrapper from './components/PageWrapper';
import ListPage from './components/ListPage';

import { connectTodoListIndexes, connectActiveTodoListIndexes, connectCompletedTodoListIndexes, } from '../list';
import removeReactRouterProps from './containers/removeReactRouterProps';

const EnhancedPageWrapper = removeReactRouterProps(PageWrapper);

const enhanceListPage = compose(connectTodoListIndexes, removeReactRouterProps);
const EnhancedListPage = enhanceListPage(ListPage);

const enhanceActiveListPage = compose(connectActiveTodoListIndexes, removeReactRouterProps);
const EnhancedActiveListPage = enhanceActiveListPage(ListPage);

const enhanceCompletedListPage = compose(connectCompletedTodoListIndexes, removeReactRouterProps);
const EnhancedCompletedListPage = enhanceCompletedListPage(ListPage);

export {
  EnhancedPageWrapper as PageWrapper,
  EnhancedListPage as ListPage,
  EnhancedActiveListPage as ActiveListPage,
  EnhancedCompletedListPage as CompletedListPage,
};
