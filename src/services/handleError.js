/* @flow */
import ReactDOM from 'react-dom/server';

import HtmlPage from '../components/HtmlPage';

import type { Request, Response, NextFunction } from 'express';

export default function handleError(err?: Error, req: Request, res: Response, next: NextFunction): mixed {
  if(!err) {
    next(err);
    return;
  }

  // Handle error
  console.error('[Server Error]', err.stack);
  if(req.accepts('json')) {
    res.status(500).send({
      error: {
        name: err.name,
        message: err.message,
      }
    });
  }
  else if(req.accepts('html')) {
    const reactHtml = ReactDOM.renderToStaticMarkup(
      <div>
        <h4>Error</h4>
        <hr />
        <label>{err.name}</label>
        <span>{err.message}</span>
      </div>
    );

    res.status(500).send(ReactDOM.renderToStaticMarkup(
      <HtmlPage req={req} reactHtml={reactHtml} />
    ));
  }
  else {
    res.status(500).send(`[${err.name}]: ${err.message}`);
  }
}
