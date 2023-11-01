const {src, dest} = require('gulp');
const babel = require('gulp-babel');

function jsMod(){
  return src('app/*.js')
  .pipe(babel({
    presets:['@babel/preset-env']
  }))
  .pipe(dest('dist/'));
}

exports.default = jsMod;