module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'react/state-in-constructor': [ 'warn' ,'never'],
    'react/static-property-placement': [ 'warn' ,'static public field'],
    'import/prefer-default-export': 'off',
  },
};
