const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: false,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MonacoWebpackPlugin(),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			// {
			//     test: /\.(js|jsx)$/i,
			//     loader: 'babel-loader',
			// },
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
