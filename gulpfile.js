const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function scss2css(){
  return src('style/scss/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rename('compiled.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/css-scss/'))
}

exports.scss2css = scss2css;

const less = require('gulp-less');

function less2css(){
  return src('style/less/*.less')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rename('compiled.css'))
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(dest('dist/css-less/'))
}

exports.less2css = less2css;