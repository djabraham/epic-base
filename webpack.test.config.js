/// <reference path="typings/node/node.d.ts"/>

var path = require("path");

var WebpackConfig = require("webpack-config");

var webpackShared = require("./webpack.shared");
var mainConfig = new WebpackConfig().extend("webpack.config");

webpackShared.removeObjectProperties(mainConfig.resolve.alias, ['react']);

var config = {
  entry: {
      tests: path.join(mainConfig.clientSrc, 'tests/Index.tsx')
  },

  output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js' // _[chunkhash]
  },

  resolve: {
    extensions: mainConfig.resolve.extensions,
    alias: mainConfig.resolve.alias
  },
  resolveLoader: mainConfig.resolveLoader,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader?instance=jsx' },
      { test: /\.scss$/, loader: 'null-loader' }
    ]
  }
}

module.exports = config;