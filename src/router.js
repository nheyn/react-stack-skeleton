/* @flow */
import path from 'path';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { PageWrapper, Home, Internal } from './components/pages';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- SITE MAP ---
/*--------------------------------------------------------------------------------------------------------------------*/
const publicSrc =   path.join(__dirname, '../public/');
const appSrc =        path.join(publicSrc, './app.js');

export default (
  <Router history={browserHistory}>
    <Route path="/" component={PageWrapper}>
      <IndexRoute component={Home} />
      <Route path="internal" component={Internal} />
    </Route>

    <Route path="/app.js" src={appSrc} />
  </Router>
);
