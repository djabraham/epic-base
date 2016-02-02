// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh

var path = require("path");

var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackShared = require("./webpack.shared");
var mainConfig = new WebpackConfig().extend("webpack.config");

// To work with webpack-dev-server
webpackShared.removeObjectProperties(mainConfig.resolve.alias, ['react']);

var clientRoot = mainConfig.clientRoot;

var devConfigExtension = {

  entry: {
    vendors: mainConfig.entry.vendors,
    library: mainConfig.entry.library,
    styles: 'style!' + path.join(clientRoot, 'styles/static/styles.css'),
    custom: 'sass!' + path.join(clientRoot, 'styles/custom/custom.scss'),
    vendor: 'sass!' + path.join(clientRoot, 'styles/vendor/vendor.scss'),
    tests: 'mocha!' + path.join(clientRoot, 'tests/Index.ts'),
    app: [
      // We are using next two entries for hot-reload
      'webpack-dev-server/client?http://localhost:3082',
      'webpack/hot/only-dev-server',
    ].concat(mainConfig.entry.app)
  },

  output: {
    filename: '[name].js',
    publicPath: "http://localhost:3082/assets"
  },

  resolve: {
    alias: mainConfig.resolve.alias
  },

  // more options here: http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval-source-map',

  watch: true,

  postcss:[ autoprefixer({ browsers: ['last 3 versions'] }), precss ],

  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        include: [ mainConfig.libraryRoot, clientRoot ],
        loaders: ['react-hot', 'ts-loader?instance=client']
      },
      {
        test: /\.css$/,
        include: path.join(clientRoot, "styles/static"),
        loader: ExtractTextPlugin.extract('style-loader', [ "css-loader!postcss-loader" ])
      },
      { test: /\.scss$/, exclude: /\.module\.scss$/,
        include: path.join(clientRoot, "styles/custom"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?precision=10&sourceComments=true&outputStyle=expanded&indentedSyntax=true")
      },
      {
        test: /\.scss$/, exclude: /\.module\.scss$/,
        include: path.join(clientRoot, "styles/vendor"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?precision=10&sourceComments=true&outputStyle=expanded&indentedSyntax=true")
      },
      {
        test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
        include: path.join(clientRoot, 'img'),
        loader: "file-loader?name=[name].[ext]"  // _[hash]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.join(clientRoot, 'fonts'),
        loader: "file-loader?name=[name].[ext]"   // https://github.com/gowravshekar/font-awesome-webpack
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.join(clientRoot, 'fonts'),
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
      }
      // { test: /\.js$/, loader: "mocha-loader", include: clientRoot  }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // Used for hot-reload
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.NoErrorsPlugin()
  ]
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);