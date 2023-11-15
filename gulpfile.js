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

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const combineMediaQuery = require('postcss-combine-media-query');

function postcss2css(){
  const plugins = [
    autoprefixer(),
    combineMediaQuery(),
    cssnano()
  ];
  return src('style/postcss/style.css')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/postcss/'));
}

exports.postcss2css = postcss2css;

const concat = require('gulp-concat');

function concatF(){
  const plugins = [
    autoprefixer(),
    combineMediaQuery(),
    cssnano()
  ];
  return src('dist/**/*.css')
  .pipe(plumber())
  .pipe(sourcemaps.init())

  .pipe(concat('all.css'))
  // .pipe(postcss(plugins))
  
  .pipe(sourcemaps.write())
  .pipe(dest('dist/postcss/'));
}

exports.concatF = concatF;