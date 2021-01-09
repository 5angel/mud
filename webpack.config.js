const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.ts",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },



  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      fonts: path.resolve(__dirname, "./fonts"),
      assets: path.resolve(__dirname, "./assets")
    },
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
  },

  mode: "development",

  devServer: {
    contentBase: path.resolve(__dirname),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Проптоптип",
    }),
  ],
};
