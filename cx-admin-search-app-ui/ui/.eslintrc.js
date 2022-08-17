module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        browser: true,
    },
    rules: {
        'react/prop-types': 0,
        quotes: ['error', 'single'],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // React imports
                    ['^react'],
                    // Packages.
                    // Things that start with a letter (or digit or underscore).
                    ['^\\w'],
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or @ followed by a letter.
                    ['^@?\\w'],
                    // Absolute imports and other imports such as Vue-style @/foo.
                    // Anything not matched in another group.
                    ['^'],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ['^\\.'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
};
