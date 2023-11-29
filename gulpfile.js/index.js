const {series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();

const {moveHtml, pathRewrite, validation, minify} = require('./templates');
const {scss2css, postcss2css, removeOldStyle} = require('./styles');
const {moveScripts, scriptLint, jsModify, delOldScript} = require('./scripts');
const {moveImage, sprite, minimage} = require('./images');

const path={
  html:'web-page/*.html',
  scss:'web-page/styles/*.scss',
  js:'web-page/scripts/*.js',
  dist:'dist/'
}

function cleanOldFiles(cb){
  del(`${path.dist}**`);
  cb();
}

function watcher(){
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  watch(path.scss, series(scss2css));
  watch(path.html, series(moveHtml))
  watch(path.js, series(moveScripts));
  watch(`${path.dist}**/*.*`).on('change', browserSync.reload);
}

exports.dev = series(cleanOldFiles, moveHtml, sprite,
                     moveImage, moveScripts, scss2css,
                     watcher);