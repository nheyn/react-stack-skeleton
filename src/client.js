/* @flow */
import React from 'react';
import { render } from 'express-react-router/client';

import router from './router';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Render to Client ---
/*--------------------------------------------------------------------------------------------------------------------*/
window.React = React;
window.onload = () => {
  render(
    router,
    window.document.getElementById('react-content'),
    () => {
      return {
        getScreenSize(): string {
          if(window.innerWidth >= 1200)     return 'lg';
          else if(window.innerWidth >= 950) return 'md';
          else if(window.innerWidth >= 750) return 'sm';
          else                              return 'xs';
        },
      };
    },
  );
};
