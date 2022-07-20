const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ModuleFederationPlugin } = webpack.container;
const deps = require('./package.json').dependencies;

module.exports = () => {
    return {
        entry: './src/index.ts',
        mode: process.env.NODE_ENV || 'development',
        devServer: {
            port: 9001,
            open: true,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        optimization: {
            minimizer: [new TerserPlugin({
                extractComments: false,
                parallel: true,
                terserOptions: {
                    ecma: 5
                }
            })]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset'
                }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'cx_admin_search_app',
                filename: 'remoteEntry.js',
                exposes: {
                    './SearchApp': './src/components/app/App.tsx'
                },
                shared: {
                    ...deps,
                    react: { singleton: true, eager: true, requiredVersion: deps.react },
                    'react-dom': {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps['react-dom']
                    },
                    tailwindcss: { singleton: true, eager: true, requiredVersion: deps.tailwindcss }
                },
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new ForkTsCheckerWebpackPlugin()
        ]
    };
};
