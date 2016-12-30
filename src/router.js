/* @flow */
import path from 'path';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { PageWrapper, ListPage } from './pages';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- SITE MAP ---
/*--------------------------------------------------------------------------------------------------------------------*/
const publicSrc =   path.join(__dirname, '../public/');
const appSrc =        path.join(publicSrc, './app.js');
const robotsSrc =     path.join(publicSrc, './robots.txt');
const sitemapSrc =    path.join(publicSrc, './sitemap.xml');
const faviconSrc =    path.join(publicSrc, './favicon.ico');
const todoCssSrc =  path.join(__dirname, '../node_modules/todomvc-app-css/index.css');

export default (
  <Router history={browserHistory}>
    <Route path="/" component={PageWrapper}>
      <IndexRoute component={ListPage} />
    </Route>

    <Route path="/app.js" src={appSrc} />
    <Route path="/robots.txt" src={robotsSrc} />
    <Route path="/sitemap.xml" src={sitemapSrc} />
    <Route path="/favicon.ico" src={faviconSrc} />
    <Route path="/node_modules/todomvc-app-css/index.css" src={todoCssSrc} />
  </Router>
);
