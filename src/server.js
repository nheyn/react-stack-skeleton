/* @flow */
import express from 'express';
import device from 'express-device';
import { handleReactRouter } from 'express-react-router';

import router from './router';
import HtmlPage from './components/HtmlPage';
import handleError from './services/handleError';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Create server ---
/*--------------------------------------------------------------------------------------------------------------------*/
let app = express();
app.use(device.capture());
app.use(handleReactRouter(router, HtmlPage, (req) => {
  return {
    getScreenSize(): string {
      switch(req.device.type) {
        case 'phone':   return 'xs';
        case 'tablet':  return 'md';
        case 'desktop': return 'lg';
        case 'tv':      return 'lg';
        default:        return 'lg';
      }
    },
  };
}));
// $FlowFixMe
app.use(handleError);

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Start server ---
/*--------------------------------------------------------------------------------------------------------------------*/
const port = process.env.PORT? parseInt(process.env.PORT): 80;

app.listen(port);
console.log(`listening on port ${port}`);
