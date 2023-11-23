// 1st task - scss compiler
const {src, dest, watch, series} = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function scss2css(){
  return src('app/scss/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(rename('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css/'))
}

exports.scss2css = scss2css;

// 2nd task - js compiler
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

function jsCompiler(){
  return src('app/js/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js/'))
}

exports.jscompiler = jsCompiler;

// 3rd task - watch task
function watcher(){
  plumber();
  watch('app/scss/*.scss', scss2css);
  watch('app/js/*.js', jsCompiler);
}

exports.default = series(scss2css, jsCompiler, watcher)