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
      ['babel-plugin-css-modules-transform', { generateScopedName: '[hash:base64:5]' }],
      isDevelopment && isTargetWeb && 'react-refresh/babel',
    ].filter(Boolean),
  };
}
