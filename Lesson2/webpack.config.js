const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPligin, CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: '',
    mode: 'development',
    entry: {
        main: './js/main.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        environment: {
            module: true,
            dynamicImport: true,
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [

        ]
    }
}