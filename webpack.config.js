const path = require('path'); // 导入路径包
const webpack = require('webpack');
const env = process.env.NODE_ENV;

let config = {
  entry: {
    demo: './pages/demo/index',
    api: './pages/api/index',
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
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
      {test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.tpl$/, loader: "handlebars-loader?helperDirs[]="+__dirname+"/helpers"},
      { test: /\.md$/, loader: "babel-loader!remarkdown-loader?Demo=remarkdown-doc", },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

module.exports = config;
