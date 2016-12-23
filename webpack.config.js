const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/main.jsx',
    devServer: {
        outputPath: path.join(__dirname, 'build'),
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: { path: path.join(__dirname, 'build'), filename: 'bundle.js' },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            {
                context: path.resolve(__dirname, 'app/static'),
                from: '**/*',
                to: path.resolve(__dirname, 'build'),
            },
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            WEB3_RPC_LOCATION: '"' + process.env.WEB3_RPC_LOCATION + '"'
        }),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}