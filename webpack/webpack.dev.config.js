const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    hello_world: "./src/hello_world.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    index: "index.html",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					}
				]
			},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "hello_world.html",
      chunks: ["hello_world"],
      title: "Hello world",
      meta: {
        viewpoint: "width=device-width, initial-scale=1",
        charset: "utf-8"
      },
      template: "src/template.html"
    })
  ]
};
