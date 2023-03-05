import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";
import pkg from "webpack";

const { DefinePlugin } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname);

const isProduction = process.env.NODE_ENV == "production";

const config = {
	entry: "./src/index.js",
	output: {
		path: resolve(__dirname, "dist"),
	},
	target: "web",
	resolve: {
		extensions: [".ts", ".js", ".json", ".ttf"],
		fallback: {
			path: resolve(projectRoot, "node_modules", "path-browserify"),
			assert: resolve(projectRoot, "node_modules", "assert"),
			util: resolve(projectRoot, "node_modules", "util"),
		},
	},
	devServer: {
		open: false,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MonacoEditorWebpackPlugin(),
		new DefinePlugin({
			// "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.NODE_DEBUG": JSON.stringify(process.env.NODE_DEBUG),
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	devtool: "source-map",
	module: {
		rules: [
			// {
			//     test: /\.(js|jsx)$/i,
			//     loader: 'babel-loader',
			// },
			{
				test: /\.tsx?/,
				loader: "ts-loader",
			},
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

export default () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
