// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
	entry: "./src/main.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new ProvidePlugin({
			process: "process/browser",
		}),
		new MonacoWebpackPlugin(),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
		fallback: {
			fs: false,
			"process/browser": require.resolve("process/browser"),
		},
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
