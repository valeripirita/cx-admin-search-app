module.exports = {
    extends: [
        'plugin:react/recommended',
        '@csp/eslint-config-csp-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    env: {
        browser: true
    },
    rules: {
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