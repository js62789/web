const { generateScopedName } = require('@monetaur/css-modules-names');

module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  const isDevelopment = process.env.NODE_ENV === 'development';
  const isTargetWeb = api.caller((caller) => caller && caller.target === 'web');

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@loadable/babel-plugin',
      ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
      !isTargetWeb && ['babel-plugin-css-modules-transform', { generateScopedName }],
      ['babel-plugin-transform-media-imports'],
      isDevelopment && isTargetWeb && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
