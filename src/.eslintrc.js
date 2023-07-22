module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // Add specific ESLint rules if needed
    'no-console': [0],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
  },
};
