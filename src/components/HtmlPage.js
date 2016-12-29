/* @flow */
import React from 'react';

import type { $Request as Request } from 'express';

type Props = {
  req: Request,
  reactHtml: string,
};

/**
 * Render the html for a full page.
 */
export default function HtmlPage({ req, reactHtml }: Props): React.Element<*> {
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
