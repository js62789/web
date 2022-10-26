module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
    requireConfigFile: false,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
