const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const path = {
  scss: 'app/style/*.scss',
  js: 'app/scripts/*.js',
  html: 'app/*.html'
};

const destPath = {
  scss: 'dist/css/',
  js: 'dist/scripts/',
  html: 'dist/',
};

function scss2css(){
  return src(path.scss)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rename('style.css'))
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(dest(destPath.scss))
  .pipe(browserSync.stream())
}

function js(){
  return src(path.js)
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-spread']
  }))
  .pipe(concat('main.js'))
  .pipe(sourcemaps.write())
  .pipe(dest(destPath.js))
  .pipe(browserSync.stream());
};

function moveHtml(){
  return src(path.html)
  .pipe(dest(destPath.html))
  .pipe(browserSync.stream());
};

function watcher(){
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  watch(path.scss, scss2css);
  watch(path.js, js);
  watch(path.html, moveHtml);
}

exports.default = series(moveHtml, scss2css, js, watcher);