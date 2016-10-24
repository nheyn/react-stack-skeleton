/* @flow */
import path from 'path';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- SITE MAP ---
/*--------------------------------------------------------------------------------------------------------------------*/
const publicSrc =   path.join(__dirname, '../public/');

export default (
  <Router history={browserHistory}>
    <Route path="/" >
      <IndexRoute />
    </Route>
  </Router>
);
