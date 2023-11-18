const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const eslint = require('gulp-eslint');

function lintjs(){
    return src('app/*.js')
    .pipe(eslint({fix:true}))
    .pipe(eslint.format())
    .pipe(dest(file =>file.base))
    .pipe(eslint.failAfterError())
}

exports.lintjs = lintjs;

function prodjs(){
  return src('app/*.js')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(
    babel({
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-spread']
    })
  )
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest('dist/'))
}

exports.prodjs = prodjs;