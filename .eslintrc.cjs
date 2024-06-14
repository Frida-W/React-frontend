module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', 'tailwind.config.cjs', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      // https://eslint.org/docs/latest/rules/indent#options
      // indent: ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': ['error'],
      'react-hooks/exhaustive-deps': 'off',
    },
  };
  