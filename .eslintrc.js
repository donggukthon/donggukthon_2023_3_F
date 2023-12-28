module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/prop-types': 0,
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'dot-notation': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'no-restricted-globals': 'off',
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'import/no-dynamic-require': 'off',
  },
};
