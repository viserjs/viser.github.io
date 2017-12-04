const path = require('path'); // 导入路径包
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
  entry: {
    demo: './pages/demo/index',
    api: './pages/api/index',
    home: './pages/home/index',
  }, // 入口文件

  // 输出文件 build下的bundle.js
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    publicPath: "http://localhost:3000/build/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"]
  },
  // 使用loader模块
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.tpl$/, loader: "handlebars-loader?helperDirs[]="+__dirname+"/helpers"},
      { test: /\.md$/, loader: "babel-loader!remarkdown-loader?Demo=remarkdown-doc" },
      { test: /\.jsx?$/, loader: "babel-loader" },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin("[name].css"),
  ],
};

module.exports = config;
