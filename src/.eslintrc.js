module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // Add specific ESLint rules if needed
    "no-console": "off",
    "selector-class-pattern": 0,
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
  },
};
