module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'error',
    curly: ['error', 'all'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    indent: ['error', 2],
    'max-len': ['error', { code: 160, ignoreUrls: true }],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-mixed-operators': 'error',
    'max-lines': ['error', 200],
  }
}
