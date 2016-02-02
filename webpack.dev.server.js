var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    contentBase: "./dist/client",
    hot: true,
    // display no info to console (only warnings and errors)
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      // With console colors
      colors: true,
      // add the hash of the compilation
      hash: true,
      // add webpack version information
      version: false,
      // add timing information
      timings: true,
      // add assets information
      assets: false,
      // add chunk information
      chunks: false,
      // add built modules information to chunk information
      chunkModules: false,
      // add built modules information
      modules: false,
      // add also information about cached (not built) modules
      cached: false,
      // add information about the reasons why modules are included
      reasons: false,
      // add the source code of modules
      source: false,
      // add details to errors (like resolving log)
      errorDetails: true,
      // add the origins of chunks and chunk merging info
      chunkOrigins: false,
      // Add messages from child loaders
      children: false
    },
    proxy: {
      '/api/*': {
          target: 'http://localhost:3080/',   // server.js api is accessed through proxy
          secure: false,
      }
    }
});

server.listen(3082, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:3082. Please wait, WebPack is building resources...");
});