import express from 'express';
import { webpackMiddleware } from '@monetaur/dev-utils';
import render from './middleware/render';

const app = express();

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware());
}

app.use(express.static('build'));

app.use(render);

export default app;
