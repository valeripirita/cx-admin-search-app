module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true
    },
    rules: {
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        'arrow-parens': [1, 'as-needed'],
        'react/prop-types': 0,
        quotes: ['error', 'single']
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ]
};