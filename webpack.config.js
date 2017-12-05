const path = require('path'); // 导入路径包
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const vueCssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: isProduction,
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

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
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", "vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  // 使用loader模块
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.tpl$/, loader: "handlebars-loader?helperDirs[]="+__dirname+"/helpers"},
      { test: /\.md$/, loader: "babel-loader!remarkdown-loader?Demo=remarkdown-doc" },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: vueCssLoaders({
            sourceMap: isProduction,
            extract: isProduction,
          }),
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
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
