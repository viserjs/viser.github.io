const path = require('path'); // 导入路径包
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const marked = require("marked");
const hljs = require('highlight.js');

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
  devtool: isProduction ? 'none' : 'eval',

  entry: {
    demo: './pages/demo/index',
    docs: './pages/docs/index',
    home: './pages/home/index',
    'home-viser': './pages/home/home-viser',
    theme: './pages/theme/index',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    publicPath: "http://localhost:3000/build/"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", "vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [isProduction ? 'css-loader?minimize' : 'css-loader']
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [isProduction ? 'css-loader?minimize' : 'css-loader', 'sass-loader']
        })
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.tpl$/, loader: "handlebars-loader?helperDirs[]=" + __dirname + "/helpers" },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              highlight: (code, lang) => {
                if (lang) {
                  hljs.highlightAuto(code, [lang]).value;
                }
                return hljs.highlightAuto(code).value;
              }
            }
          }
        ]
      },
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

  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      // 简单避免混淆造成的Angular变量名丢失
      mangle: false,
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin("[name].css"),
  ] : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      new ExtractTextPlugin("[name].css"),
    ],
};

module.exports = config;
