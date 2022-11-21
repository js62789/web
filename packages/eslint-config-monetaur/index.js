module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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
    'semi': ['error', 'always'],
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
