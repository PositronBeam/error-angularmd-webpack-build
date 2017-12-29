const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const utils = require('./utils.js');

module.exports = (options) => {
    return {
        resolve: {
            extensions: ['.ts', '.js'],
            modules: ['node_modules']
        },
        stats: {
            children: false
        },
        module: {
            rules: [
                { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports-loader?jQuery=jquery' },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        caseSensitive: true,
                        removeAttributeQuotes:false,
                        minifyJS:false,
                        minifyCSS:false
                    },
                    exclude: ['./src/main/webapp/index.html']
                },
                {
                    test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                    loaders: ['file-loader?hash=sha512&digest=hex&name=content/[hash].[ext]']
                },
                {
                    test: /manifest.webapp$/,
                    loader: 'file-loader?name=manifest.webapp!web-app-manifest-loader'
                },
                {
                    test: /app.constants.ts$/,
                    loader: StringReplacePlugin.replace({
                        replacements: [{
                            pattern: /\/\* @toreplace (\w*?) \*\//ig,
                            replacement: (match, p1, offset, string) => `_${p1} = ${DATAS[p1]};`
                        }]
                    })
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(options.env)
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'polyfills',
                chunks: ['polyfills']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks: module => utils.isExternalLib(module)
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['manifest'],
                minChunks: Infinity,
            }),
            /**
             * See: https://github.com/angular/angular/issues/11580
             */
            new webpack.ContextReplacementPlugin(
                /(.+)?angular(\\|\/)core(.+)?/,
                utils.root('src/main/webapp/app'), {}
            ),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new HtmlWebpackPlugin({
                template: './src/main/webapp/index.html',
                chunksSortMode: 'dependency',
                inject: 'body'
            }),
            new StringReplacePlugin()
        ]
    };
};
