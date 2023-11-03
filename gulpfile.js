const {series, parallel} = require('gulp');

const compileTS = function(cb){
  cb();
};

const minJS = function(cb){
  cb();
}

const compileScss = function(cb){
  cb();
}

const minCss = function(cb){
  cb();
}

const js = series(compileTs, minJS);
const css = series(compileScss, minCss);

const prod = parallel(js, css)