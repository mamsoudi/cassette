// Libraries
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// Base Configuration
module.exports = {
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js'
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	target: 'web'
}