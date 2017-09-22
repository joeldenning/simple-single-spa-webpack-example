const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		'root-application': 'src/root-application/root-application.js',
		'common-dependencies': [
			'@angular/core',
			'@angular/platform-browser-dynamic',
			'reflect-metadata',
		],
	},
	output: {
		publicPath: '/dist/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common-dependencies',
		}),
	],
	devtool: 'source-map',
	externals: [
	],
};
