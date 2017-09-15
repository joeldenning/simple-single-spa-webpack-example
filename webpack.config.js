const path = require('path');

module.exports = {
	entry: 'src/root-application/root-application.js',
	output: {
		publicPath: '/dist/',
		filename: 'root-application.js',
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
	],
	devtool: 'source-map',
	externals: [
	],
};
