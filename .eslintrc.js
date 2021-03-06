module.exports = {
  'env': {
      'es6': true,
      'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
      'ecmaVersion': 2018,
      'sourceType': 'module',
      'ecmaFeatures': {
          'impliedStrict': true
      }
  },
  'rules': {
      'indent': [
          'error',
          2
      ],
      'linebreak-style': [
          'error',
          'unix'
      ],
      'quotes': [
          'error',
          'single'
      ],
      'semi': [
          'warn',
          'always'
      ],
      'no-unused-vars': [
          'warn'
      ]
  },
  'overrides': [{
      'files': ['babel.config.js'],
      'rules': {
          'indent': [
              'error',
              4
          ]
      }
  }]
};