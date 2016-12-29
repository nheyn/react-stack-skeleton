/* @flow */
import React from 'react';
import express from 'express';
import device from 'express-device';
import { handleReactRouter } from 'express-react-router';

import router from './router';

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

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Start server ---
/*--------------------------------------------------------------------------------------------------------------------*/
const port = process.env.PORT? parseInt(process.env.PORT): 80;

app.listen(port);
console.log(`listening on port ${port}`);

// Helper functions
function HtmlPage({ req, reactHtml, error, ...otherProps }: *): React.Element<*> {
  const bodyStyle = {
    margin: 0,
    fontFamily: 'verdana, geneva, sans-serif'
  };

  return (
    <html>
      <head>
        <title>React Stack Skeleton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="icon/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="icon/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          src="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
        />
      </head>
      <body style={bodyStyle}>
        <div id="react-content" dangerouslySetInnerHTML={{ __html: reactHtml }} />
        <script src="/app.js" />
      </body>
    </html>
  );
}
