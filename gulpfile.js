const {src, dest} = require('gulp');

// function move(){
//   return src("app/**/*.js")
//   .pipe(dest('dist/'))
// }

// function move(){
//   return src(["app/**/*.html", "!app/**/*.js"])
//   .pipe(dest('dist/'))
// }

// exports.default = move;

const babel = require('gulp-babel');

function modJs(){
  return src('app/index.js')
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(dest('output/'))
}

exports.default = modJs;