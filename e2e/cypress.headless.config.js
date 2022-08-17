const { defineConfig } = require('cypress');
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(
    on,
    config
) {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        webpack({
            webpackOptions: {
                module: {
                    rules: [
                        {
                            test: /\.feature$/,
                            use: [
                                {
                                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                                    options: config,
                                },
                            ],
                        },
                    ],
                },
            },
        })
    );

    return config;
}

module.exports = defineConfig({
    e2e: {
        headless: true,
        baseUrl: 'http://192.168.1.5:8083/',
        specPattern: '**/*.feature',
        supportFile: false,
        video: false,
        chromeWebSecurity: false,
        watchForFileChanges: false,
        screenshots: false,
        setupNodeEvents
    }
});