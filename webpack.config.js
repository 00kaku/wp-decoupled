const HtmlWebPackPlugin = require ('html-webpack-plugin');
const path = require("path");
module.exports = {
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

	devServer : {
		historyApiFallback: true,
		port: 3000,
		overlay: {
			errors:true,
		}
	}
}
