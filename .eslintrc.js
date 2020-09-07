module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/require-default-props': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-shadow': 0,
  },
  husky: {
    hooks: {
      'pre-commit': 'lint-staged',
    },
  },
  'lint-staged': {
    './src/*.{js,jsx,ts,tsx}': [
      'npx prettier --write',
      'eslint src/*.js --fix-dry-run',
    ],
  },
};
