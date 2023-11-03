const {series, parallel} = require('gulp');

function tsTojs(cb){
  cb();
}

function minJs(cb){
  cb();
}

function scssToCss(cb){
  cb();
}

function minCss(cb){
  cb();
}

exports.default = parallel(
  series(tsTojs, minJs),
  series(scssToCss, minCss)
)