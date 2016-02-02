/// <reference path="typings/node/node.d.ts"/>

var path = require("path");

var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var webpackShared = require("./webpack.shared");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.join(__dirname, 'node_modules');

var clientRoot = path.join(__dirname, 'source/client');
var libraryRoot = path.join(__dirname, 'source/library');

var config = {

  // sharing these with so downstream configs can reference them
  clientRoot: clientRoot,
  libraryRoot: libraryRoot,

  // entry points - each will produce one bundled js file and one css file if there is any css in dependency tree
  entry: {
    vendors: [
      'flux',
      'react',
      'react-dom'
    ],
    styles: 'style!' + path.join(clientRoot, 'styles/static/styles.css'),
    custom: 'sass!' + path.join(clientRoot, 'styles/custom/custom.scss'),
    vendor: 'sass!' + path.join(clientRoot, 'styles/vendor/vendor.scss'),
    tests: 'mocha!' + path.join(clientRoot, 'tests/Index.ts'),
    library: path.join(libraryRoot, 'src/Index.ts'),
    app: [
      path.join(clientRoot, 'src/Index.ts')
    ]
  },

  // This is path to loaders
  resolveLoader: {
    root: nodeModulesPath
  },

  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.scss', '.css'],
    modulesDirectories: ["node_modules"],
    alias: {
      'react': path.join(nodeModulesPath, 'react', 'react.js'),
      'react-dom': path.join(nodeModulesPath, 'react-dom', 'dist', 'react-dom.js'),
      'flux': path.join(nodeModulesPath, 'flux', 'index.js')
    }
  },

  output: {
      path: path.join(__dirname, 'dist/client/assets'),
      filename: '[name].js' // _[chunkhash]
  },

  postcss:[ autoprefixer({ browsers: ['last 3 versions'] }), precss ],

  module: {
    preLoaders: [
      { test: /\.ts(x?)$/, loader: "tslint", include: [ libraryRoot, clientRoot ] }
    ],
    noParse: [],
    loaders: [
      {
        test: /\.ts(x?)$/,
        include: [ libraryRoot, clientRoot ],
        loaders: ['react-hot', 'ts-loader?instance=client']
      },
      {
        test: /\.css$/,
        include: path.join(clientRoot, "styles/static"),
        loader: ExtractTextPlugin.extract('style-loader', [ "css-loader?minimize!postcss-loader" ])
      },
      { test: /\.scss$/, exclude: /\.module\.scss$/,
        include: path.join(clientRoot, "styles/custom"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?precision=10&sourceComments=false&indentedSyntax=false&outputStyle=compressed")
      },
      {
        test: /\.scss$/, exclude: /\.module\.scss$/,
        include: path.join(clientRoot, "styles/vendor"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?precision=10&sourceComments=false&indentedSyntax=false&outputStyle=compressed")
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
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'), // _[chunkhash]
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ],

  tslint: {
    // Rules are in tslint.json
    emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
    formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
  },
};

if (webpackShared.isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
     compress: {
        warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"production"' }
  }));
}

module.exports = config;
