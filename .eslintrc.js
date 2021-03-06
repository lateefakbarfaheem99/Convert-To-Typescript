module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    jest: true
  },

  plugins: ['react', '@typescript-eslint'],

  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],

  rules: {
    'react/require-extension': 0,
    eqeqeq: ['error', 'allow-null'],
    'no-trailing-spaces': 2,
    'func-names': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'vars-on-top': 0,
    'default-case': 0,
    'no-else-return': 0,
    'no-cond-assign': [2, 'except-parens'],
    'no-use-before-define': [2, { functions: false, classes: true }],
    'no-shadow': 0,
    'newline-per-chained-call': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'no-console': 0,
    'linebreak-style': 0,
    'no-loop-func': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'object-curly-spacing': [2, 'always'],
    'no-continue': 0,
    'quote-props': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-path-concat': 0,
    'new-cap': 0,
    'no-mixed-operators': [
      2,
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-restricted-globals': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/self-closing-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-closing-tag-location': 0,
    'jsx-a11y/label-has-for': [
      2,
      { some: ['nesting', 'id'], allowChildren: true }
    ],
    'react/no-array-index-key': 0,
    'arrow-parens': 0,
    indent: 0,
    curly: 0,
    'no-confusing-arrow': 0,
    'space-before-function-paren': 0,
    'no-plus-plus': 0,
    'import/first': 0, // For mocks, mocks must come first
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0
  }
};
