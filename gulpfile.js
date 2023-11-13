const {src, dest} = require('gulp');
const w3cjs = require('gulp-w3cjs');

function validation(){
  return src('app/*.html')
  .pipe(w3cjs())
  .pipe(w3cjs.reporter());
}

exports.validation = validation;

const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');

function minify(){
  return src('app/*.html')
  .pipe(plumber())
  .pipe(htmlmin(
    {
      collapseWhitespace: true,
      removeComments: true,
    }
  ))
  .pipe(dest('dist/'));
}

exports.minify = minify;

const pug = require('gulp-pug');

function pug2html(){
  return src('app/pug/index.pug')
  .pipe(plumber())
  .pipe(pug())
  .pipe(dest('dist/pug/'));
}

exports.pug2html = pug2html;