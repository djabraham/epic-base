var fs = require("fs");
var gulp = require('gulp');
var tsb = require("gulp-tsb");
var tslint = require('gulp-tslint');
var webpack = require('webpack-stream');
var nodemon = require("gulp-nodemon");

// gulp.task('default', ['watch-tslint']);
gulp.task('client-tslint', function(){
  return gulp.src([
    './source/client/**/*.ts',
    './source/client/**/*.tsx'
    ])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});
gulp.task('library-tslint', function(){
  return gulp.src([
    './source/library/**/*.ts'
    ])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});
gulp.task('tslint-watch', function() {
  gulp.watch([
    './source/client/**/*.ts',
    './source/client/**/*.tsx',
    './source/library/**/*.ts'
    ], ['tslint']);
});

// proper order, in case libraries are consumed, etc..
gulp.task('build', ['library-build', 'client-build', 'server-build']);

gulp.task('client-build', ['client-static', 'client-build-assets']);
gulp.task('client-watch', ['client-static', 'client-build-watch']);

// copies static html file into dist
gulp.task('client-static', function() {
  return gulp.src('./source/client/*.html')
    .pipe(gulp.dest('./dist/client'));
});

// builds and emits file assets (for production)
//   todo: uglify
gulp.task('client-build-assets', function() {
  return gulp.src('')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/client/assets'));
});

// builds and serves virtual assets
//   this does not emit or utilize emitted assets
gulp.task('client-build-watch', function() {
  return gulp.src('')
    .pipe(webpack(require('./webpack.dev.config.js')))
    .pipe(gulp.dest('./dist/client/assets'));
});

gulp.task("server-build", ["server-build-ts", "server-copy-js"]);

// server and shared library are emitted to dist
gulp.task("library-build", function () {
  var tsConfig = tsb.create("./source/library/tsconfig.json");
  return gulp.src(["./typings/**/*.ts", "./source/library/**/*.ts"])
    .pipe(tsConfig())
    .pipe(gulp.dest("./dist/library"));
});
gulp.task("server-build-ts", function () {
  var tsConfig = tsb.create("./source/server/tsconfig.json");
  return gulp.src(["./typings/**/*.ts", "./source/server/**/*.ts"])
    .pipe(tsConfig())
    .pipe(gulp.dest("./dist/server"));
});
gulp.task('server-copy-js', function() {
  return gulp.src('./source/server/**/*.js')
    .pipe(gulp.dest('./dist/server'));
});


// run nodemon on server file changes
gulp.task("server-watch", function (cb) {
  var started = false;
  return nodemon({
    delay: 3000,
    script: "./dist/server/api/www.js",
    watch: "./dist/server/api",
    ext: 'js json'
  }).on("start", function () {
    if (!started) {
        cb();
        started = true;
    }
  }).on("restart", function onRestart() {  });
});

