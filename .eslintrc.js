module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'jsx-a11y', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off'
  }
};
