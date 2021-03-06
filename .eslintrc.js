module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // plugins: ['prettier'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': 'off',
    'no-console': 'off',
    switchCase: 0,
  },
  globals: {
    console: true,
    IS_DEBUG: true,
  },
}
