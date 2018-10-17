const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    
    entry: './src/js/index.js',
    
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.js'
    },

    devtool: "source-map",

    plugins: [
	new HtmlWebpackPlugin({template: './src/html/index.html'}),
	new MiniCssExtractPlugin({
	    filename: '[name].css',
	    chuckFilename: '[id].css'
	})
    ],
    
    module: {
	rules: [
	    { test: /\.png$/, use: 'raw-loader' },
	    { test: /\.scss$/, use: [
		MiniCssExtractPlugin.loader,
		{loader: 'css-loader', options: { sourceMap: true }},
		{loader: 'sass-loader', options: { sourceMap: true }}
	    ]}
	]
    },
}
