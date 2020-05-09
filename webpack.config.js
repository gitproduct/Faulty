const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        // title: 'Output Management',
        // }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};