module.exports = {
    verbose: false,
    collectCoverageFrom: [ 'src/**/*.{ts,tsx}' ],
    modulePathIgnorePatterns: [
        'src/index.tsx'
    ],
    testEnvironmentOptions: {
        url: 'http://localhost'
    },
    testEnvironment: 'jsdom',
    globals: {
        'window': true
    },
    transform: {
        '.+\\.ts(x?)$': 'ts-jest'
    },
    moduleNameMapper: {}
};
