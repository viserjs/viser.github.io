var webpack = require("webpack");
// 可换成express 等其他server
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    stats: { colors: true },
});
server.listen(3333);
console.log('******************************************');
console.log('***  server start on localhost:3333    ***');
console.log('******************************************');
