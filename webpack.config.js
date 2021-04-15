const HtmlWebPackPlugin = require ('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require("path");
browserConfig= {
	output :{
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},

	module: {
		rules :[
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use: [
					{
					loader: "babel-loader",
				}
				]
			},
			{
				test : /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" }
						]
			},
		]
	},
	plugins : [
		new HtmlWebPackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		})
	],
}


serverConfig = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },


  module: {
		rules :[
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use: [
					{
					loader: "babel-loader",
				}
				]
			},
			{
				test : /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" }
						]
			},
		]
	},
};


module.exports = [browserConfig, serverConfig];
