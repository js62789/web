import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpackConfig';

export default function webpackMiddleware() {
  const compiler = webpack(config);

  return [
    webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }),
    webpackHotMiddleware(compiler),
  ];
}
