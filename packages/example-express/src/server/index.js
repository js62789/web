import express from 'express';
import { webpackMiddleware } from '@monetaur/dev-utils';
import compression from 'compression';
import render from './middleware/render';
import config from '../config';

const app = express();

if (config.get('compress')) {
  app.use(compression());
}

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware());
}

app.use(express.static('build'));

app.use(render);

export default app;
