// 1 task - scss compiler
const {src, dest} = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function scss2css(){
  return src('app/scss/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(rename('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css/'))
}

exports.scss2css = scss2css;