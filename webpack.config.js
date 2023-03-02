import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";

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

export default () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
