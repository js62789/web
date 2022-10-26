import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  entry: [
    './src/client',
    isDevelopment && 'webpack-hot-middleware/client',
  ].filter(Boolean),
  target: 'web',
  devtool: 'source-map',
  output: {
    clean: true,
    path: path.resolve('build'),
    publicPath: '',
    filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
    isDevelopment && new HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
