const {src, dest} = require('gulp');

function move(){
  return src("app/index.js")
  .pipe(dest('dist/'))
}

exports.default = move;